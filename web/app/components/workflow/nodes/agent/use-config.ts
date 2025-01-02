import { useStrategyProviderDetail } from '@/service/use-strategy'
import useNodeCrud from '../_base/hooks/use-node-crud'
import useVarList from '../_base/hooks/use-var-list'
import useOneStepRun from '../_base/hooks/use-one-step-run'
import type { AgentNodeType } from './types'
import {
  useNodesReadOnly,
} from '@/app/components/workflow/hooks'
import { useCallback, useMemo } from 'react'
import { type ToolVarInputs, VarType } from '../tool/types'
import { useCheckInstalled } from '@/service/use-plugins'
import type { Var } from '../../types'
import { VarType as VarKindType } from '../../types'
import useAvailableVarList from '../_base/hooks/use-available-var-list'

const useConfig = (id: string, payload: AgentNodeType) => {
  const { nodesReadOnly: readOnly } = useNodesReadOnly()
  const { inputs, setInputs } = useNodeCrud<AgentNodeType>(id, payload)
  // variables
  const { handleVarListChange, handleAddVariable } = useVarList<AgentNodeType>({
    inputs,
    setInputs,
  })
  const strategyProvider = useStrategyProviderDetail(
    inputs.agent_strategy_provider_name || '',
  )
  const currentStrategy = strategyProvider.data?.declaration.strategies.find(
    str => str.identity.name === inputs.agent_strategy_name,
  )
  const currentStrategyStatus: 'loading' | 'plugin-not-found' | 'strategy-not-found' | 'success' = useMemo(() => {
    if (strategyProvider.isLoading) return 'loading'
    if (strategyProvider.isError) return 'plugin-not-found'
    if (!currentStrategy) return 'strategy-not-found'
    return 'success'
  }, [currentStrategy, strategyProvider])
  const pluginId = inputs.agent_strategy_provider_name?.split('/').splice(0, 2).join('/')
  const pluginDetail = useCheckInstalled({
    pluginIds: [pluginId || ''],
    enabled: Boolean(pluginId),
  })
  const formData = useMemo(() => {
    return Object.fromEntries(
      Object.entries(inputs.agent_parameters || {}).map(([key, value]) => {
        return [key, value.value]
      }),
    )
  }, [inputs.agent_parameters])
  const onFormChange = (value: Record<string, any>) => {
    const res: ToolVarInputs = {}
    Object.entries(value).forEach(([key, val]) => {
      res[key] = {
        type: VarType.constant,
        value: val,
      }
    })
    setInputs({
      ...inputs,
      agent_parameters: res,
    })
  }

  // vars

  const filterMemoryPromptVar = useCallback((varPayload: Var) => {
    return [
      VarKindType.arrayObject,
      VarKindType.array,
      VarKindType.number,
      VarKindType.string,
      VarKindType.secret,
      VarKindType.arrayString,
      VarKindType.arrayNumber,
      VarKindType.file,
      VarKindType.arrayFile,
    ].includes(varPayload.type)
  }, [])

  const {
    availableVars,
    availableNodesWithParent,
  } = useAvailableVarList(id, {
    onlyLeafNodeVar: false,
    filterVar: filterMemoryPromptVar,
  })

  // single run
  const {
    isShowSingleRun,
    showSingleRun,
    hideSingleRun,
    toVarInputs,
    runningStatus,
    handleRun,
    handleStop,
    runInputData,
    setRunInputData,
    runResult,
    getInputVars,
  } = useOneStepRun<AgentNodeType>({
    id,
    data: inputs,
    defaultRunInputData: {},
  })
  const allVarStrArr = (() => {
    const arr = currentStrategy?.parameters.filter(item => item.type === 'string').map((item) => {
      return formData[item.name]
    }) || []

    return arr
  })()
  const varInputs = (() => {
    const vars = getInputVars(allVarStrArr)

    return vars
  })()

  return {
    readOnly,
    inputs,
    setInputs,
    handleVarListChange,
    handleAddVariable,
    currentStrategy,
    formData,
    onFormChange,
    currentStrategyStatus,
    strategyProvider: strategyProvider.data,
    pluginDetail: pluginDetail.data?.plugins.at(0),
    availableVars,
    availableNodesWithParent,

    isShowSingleRun,
    showSingleRun,
    hideSingleRun,
    toVarInputs,
    runningStatus,
    handleRun,
    handleStop,
    runInputData,
    setRunInputData,
    runResult,
    varInputs,
  }
}

export default useConfig
