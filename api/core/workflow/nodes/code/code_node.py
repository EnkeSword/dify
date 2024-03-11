from typing import Optional, Union, cast

from core.helper.code_executor.code_executor import CodeExecutionException, CodeExecutor
from core.workflow.entities.node_entities import NodeRunResult, NodeType
from core.workflow.entities.variable_pool import VariablePool
from core.workflow.nodes.base_node import BaseNode
from core.workflow.nodes.code.entities import CodeNodeData
from models.workflow import WorkflowNodeExecutionStatus

MAX_NUMBER = 2 ** 63 - 1
MIN_NUMBER = -2 ** 63
MAX_PRECISION = 20
MAX_DEPTH = 5
MAX_STRING_LENGTH = 1000
MAX_STRING_ARRAY_LENGTH = 30
MAX_NUMBER_ARRAY_LENGTH = 1000


class CodeNode(BaseNode):
    _node_data_cls = CodeNodeData
    node_type = NodeType.CODE

    @classmethod
    def get_default_config(cls, filters: Optional[dict] = None) -> dict:
        """
        Get default config of node.
        :param filters: filter by node config parameters.
        :return:
        """
        if filters and filters.get("code_language") == "javascript":
            return {
                "type": "code",
                "config": {
                    "variables": [
                        {
                            "variable": "arg1",
                            "value_selector": []
                        },
                        {
                            "variable": "arg2",
                            "value_selector": []
                        }
                    ],
                    "code_language": "javascript",
                    "code": "async function main(arg1, arg2) {\n    return new Promise((resolve, reject) => {"
                            "\n    	if (true) {\n	        resolve({\n	            \"result\": arg1 + arg2"
                            "\n        	});\n        } else {\n        	reject(\"e\");\n    }\n    });\n}",
                    "outputs": [
                        {
                            "variable": "result",
                            "variable_type": "number"
                        }
                    ]
                }
            }

        return {
            "type": "code",
            "config": {
                "variables": [
                    {
                        "variable": "arg1",
                        "value_selector": []
                    },
                    {
                        "variable": "arg2",
                        "value_selector": []
                    }
                ],
                "code_language": "python3",
                "code": "def main(\n    arg1: int,\n    arg2: int,\n) -> int:\n    return {\n        \"result\": arg1 "
                        "+ arg2\n    }",
                "outputs": [
                    {
                        "variable": "result",
                        "variable_type": "number"
                    }
                ]
            }
        }

    def _run(self, variable_pool: VariablePool) -> NodeRunResult:
        """
        Run code
        :param variable_pool: variable pool
        :return:
        """
        node_data = self.node_data
        node_data: CodeNodeData = cast(self._node_data_cls, node_data)

        # Get code language
        code_language = node_data.code_language
        code = node_data.code

        # Get variables
        variables = {}
        for variable_selector in node_data.variables:
            variable = variable_selector.variable
            value = variable_pool.get_variable_value(
                variable_selector=variable_selector.value_selector
            )

            variables[variable] = value
        # Run code
        try:
            result = CodeExecutor.execute_code(
                language=code_language,
                code=code,
                inputs=variables
            )

            # Transform result
            result = self._transform_result(result, node_data.outputs)
        except (CodeExecutionException, ValueError) as e:
            return NodeRunResult(
                status=WorkflowNodeExecutionStatus.FAILED,
                inputs=variables,
                error=str(e)
            )

        return NodeRunResult(
            status=WorkflowNodeExecutionStatus.SUCCEEDED,
            inputs=variables,
            outputs=result
        )

    def _check_string(self, value: str, variable: str) -> str:
        """
        Check string
        :param value: value
        :param variable: variable
        :return:
        """
        if not isinstance(value, str):
            raise ValueError(f"{variable} in output form must be a string")

        if len(value) > MAX_STRING_LENGTH:
            raise ValueError(f'{variable} in output form must be less than {MAX_STRING_LENGTH} characters')

        return value.replace('\x00', '')

    def _check_number(self, value: Union[int, float], variable: str) -> Union[int, float]:
        """
        Check number
        :param value: value
        :param variable: variable
        :return:
        """
        if not isinstance(value, int | float):
            raise ValueError(f"{variable} in output form must be a number")

        if value > MAX_NUMBER or value < MIN_NUMBER:
            raise ValueError(f'{variable} in input form is out of range.')

        if isinstance(value, float):
            # raise error if precision is too high
            if len(str(value).split('.')[1]) > MAX_PRECISION:
                raise ValueError(f'{variable} in output form has too high precision.')

        return value

    def _transform_result(self, result: dict, output_schema: Optional[dict[str, CodeNodeData.Output]],
                          prefix: str = '',
                          depth: int = 1) -> dict:
        """
        Transform result
        :param result: result
        :param output_schema: output schema
        :return:
        """
        if depth > MAX_DEPTH:
            raise ValueError("Depth limit reached, object too deep.")

        transformed_result = {}
        if output_schema is None:
            # validate output thought instance type
            for output_name, output_value in result.items():
                if isinstance(output_value, dict):
                    self._transform_result(
                        result=output_value,
                        output_schema=None,
                        prefix=f'{prefix}.{output_name}' if prefix else output_name,
                        depth=depth + 1
                    )
                elif isinstance(output_value, int | float):
                    self._check_number(
                        value=output_value,
                        variable=f'{prefix}.{output_name}' if prefix else output_name
                    )
                elif isinstance(output_value, str):
                    self._check_string(
                        value=output_value,
                        variable=f'{prefix}.{output_name}' if prefix else output_name
                    )
                elif isinstance(output_value, list):
                    if all(isinstance(value, int | float) for value in output_value):
                        for value in output_value:
                            self._check_number(
                                value=value,
                                variable=f'{prefix}.{output_name}' if prefix else output_name
                            )
                    elif all(isinstance(value, str) for value in output_value):
                        for value in output_value:
                            self._check_string(
                                value=value,
                                variable=f'{prefix}.{output_name}' if prefix else output_name
                            )
                    else:
                        raise ValueError(f'Output {prefix}.{output_name} is not a valid array. make sure all elements are of the same type.')
                else:
                    raise ValueError(f'Output {prefix}.{output_name} is not a valid type.')
                
            return result

        parameters_validated = {}
        for output_name, output_config in output_schema.items():
            if output_config.type == 'object':
                # check if output is object
                if not isinstance(result.get(output_name), dict):
                    raise ValueError(
                        f'Output {prefix}.{output_name} is not an object, got {type(result.get(output_name))} instead.'
                    )

                transformed_result[output_name] = self._transform_result(
                    result=result[output_name],
                    output_schema=output_config.children,
                    prefix=f'{prefix}.{output_name}' if prefix else output_name,
                    depth=depth + 1
                )
            elif output_config.type == 'number':
                # check if number available
                transformed_result[output_name] = self._check_number(
                    value=result[output_name],
                    variable=f'{prefix}.{output_name}' if prefix else output_name
                )
            elif output_config.type == 'string':
                # check if string available
                transformed_result[output_name] = self._check_string(
                    value=result[output_name],
                    variable=f'{prefix}.{output_name}' if prefix else output_name,
                )
            elif output_config.type == 'array[number]':
                # check if array of number available
                if not isinstance(result[output_name], list):
                    raise ValueError(
                        f'Output {prefix}.{output_name} is not an array, got {type(result.get(output_name))} instead.'
                    )

                if len(result[output_name]) > MAX_NUMBER_ARRAY_LENGTH:
                    raise ValueError(
                        f'{prefix}.{output_name} in output form must be less than {MAX_NUMBER_ARRAY_LENGTH} characters'
                    )

                transformed_result[output_name] = [
                    self._check_number(
                        value=value,
                        variable=f'{prefix}.{output_name}' if prefix else output_name
                    )
                    for value in result[output_name]
                ]
            elif output_config.type == 'array[string]':
                # check if array of string available
                if not isinstance(result[output_name], list):
                    raise ValueError(
                        f'Output {prefix}.{output_name} is not an array, got {type(result.get(output_name))} instead.'
                    )

                if len(result[output_name]) > MAX_STRING_ARRAY_LENGTH:
                    raise ValueError(
                        f'{prefix}.{output_name} in output form must be less than {MAX_STRING_ARRAY_LENGTH} characters'
                    )

                transformed_result[output_name] = [
                    self._check_string(
                        value=value,
                        variable=f'{prefix}.{output_name}' if prefix else output_name
                    )
                    for value in result[output_name]
                ]
            else:
                raise ValueError(f'Output type {output_config.type} is not supported.')
            
            parameters_validated[output_name] = True

        # check if all output parameters are validated
        if len(parameters_validated) != len(result):
            raise ValueError('Not all output parameters are validated.')

        return transformed_result

    @classmethod
    def _extract_variable_selector_to_variable_mapping(cls, node_data: CodeNodeData) -> dict[str, list[str]]:
        """
        Extract variable selector to variable mapping
        :param node_data: node data
        :return:
        """

        return {
            variable_selector.variable: variable_selector.value_selector for variable_selector in node_data.variables
        }
