import {
  memo,
  useMemo,
  useRef,
} from 'react'
import { useTranslation } from 'react-i18next'
import type { BlockEnum, ToolWithProvider } from '../types'
import IndexBar, { groupItems } from './index-bar'
import type { ToolDefaultValue } from './types'
import { ViewType } from './view-type-select'
import Empty from '@/app/components/tools/add-tool-modal/empty'
import { useGetLanguage } from '@/context/i18n'
import ToolListTreeView from './tool/tool-list-tree-view/list'
import ToolListFlatView from './tool/tool-list-flat-view/list'
import classNames from '@/utils/classnames'

type ToolsProps = {
  showWorkflowEmpty: boolean
  onSelect: (type: BlockEnum, tool?: ToolDefaultValue) => void
  tools: ToolWithProvider[]
  viewType: ViewType
  hasSearchText: boolean
  className?: string
  indexBarClassName?: string
}
const Blocks = ({
  showWorkflowEmpty,
  onSelect,
  tools,
  viewType,
  hasSearchText,
  className,
  indexBarClassName,
}: ToolsProps) => {
  const { t } = useTranslation()
  const language = useGetLanguage()
  const isFlatView = viewType === ViewType.flat
  const isShowLetterIndex = isFlatView && tools.length > 10

  /*
  treeViewToolsData:
  {
    A: {
      'google': [ // plugin organize name
        ...tools
      ],
      'custom': [ // custom tools
        ...tools
      ],
      'workflow': [ // workflow as tools
        ...tools
      ]
    }
  }
  */
  const { letters, groups: withLetterAndGroupViewToolsData } = groupItems(tools, tool => (tool as any).label[language][0])
  const treeViewToolsData = useMemo(() => {
    const result: Record<string, ToolWithProvider[]> = {}
    Object.keys(withLetterAndGroupViewToolsData).forEach((letter) => {
      Object.keys(withLetterAndGroupViewToolsData[letter]).forEach((groupName) => {
        if (!result[groupName])
          result[groupName] = []

        result[groupName].push(...withLetterAndGroupViewToolsData[letter][groupName])
      })
    })
    return result
  }, [withLetterAndGroupViewToolsData])

  const listViewToolData = useMemo(() => {
    const result: ToolWithProvider[] = []
    Object.keys(withLetterAndGroupViewToolsData).forEach((letter) => {
      Object.keys(withLetterAndGroupViewToolsData[letter]).forEach((groupName) => {
        result.push(...withLetterAndGroupViewToolsData[letter][groupName])
      })
    })
    return result
  }, [withLetterAndGroupViewToolsData])

  const toolRefs = useRef({})

  return (
    <div className={classNames('p-1 max-w-[320px]', className)}>
      {
        !tools.length && !showWorkflowEmpty && (
          <div className='flex items-center px-3 h-[22px] text-xs font-medium text-text-tertiary'>{t('workflow.tabs.noResult')}</div>
        )
      }
      {!tools.length && showWorkflowEmpty && (
        <div className='py-10'>
          <Empty />
        </div>
      )}
      {!!tools.length && (
        isFlatView ? (
          <ToolListFlatView
            payload={listViewToolData}
            isShowLetterIndex={isShowLetterIndex}
            hasSearchText={hasSearchText}
            onSelect={onSelect}
          />
        ) : (
          <ToolListTreeView
            payload={treeViewToolsData}
            hasSearchText={hasSearchText}
            onSelect={onSelect}
          />
        )
      )}

      {isShowLetterIndex && <IndexBar letters={letters} itemRefs={toolRefs} className={indexBarClassName} />}
    </div>
  )
}

export default memo(Blocks)
