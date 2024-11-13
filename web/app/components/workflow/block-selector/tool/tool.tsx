'use client'
import type { FC } from 'react'
import React, { useMemo } from 'react'
import cn from '@/utils/classnames'
import { RiArrowDownSLine, RiArrowRightSLine } from '@remixicon/react'
import { useGetLanguage } from '@/context/i18n'
import { CollectionType } from '../../../tools/types'
import type { ToolWithProvider } from '../../types'
import { BlockEnum } from '../../types'
import type { ToolDefaultValue } from '../types'
import { ViewType } from '../view-type-select'
import ActonItem from './action-item'
import BlockIcon from '../../block-icon'
import { useTranslation } from 'react-i18next'

type Props = {
  className?: string
  payload: ToolWithProvider
  viewType: ViewType
  isShowLetterIndex: boolean
  isFold: boolean
  onFoldChange: (fold: boolean) => void
  onSelect: (type: BlockEnum, tool?: ToolDefaultValue) => void
}

const Tool: FC<Props> = ({
  className,
  payload,
  viewType,
  isShowLetterIndex,
  isFold,
  onFoldChange,
  onSelect,
}) => {
  const { t } = useTranslation()
  const language = useGetLanguage()
  const isFlatView = viewType === ViewType.flat
  const actions = payload.tools
  const hasAction = true // Now always support actions

  const FoldIcon = isFold ? RiArrowRightSLine : RiArrowDownSLine

  const groupName = useMemo(() => {
    if (payload.type === CollectionType.builtIn)
      return payload.author

    if (payload.type === CollectionType.custom)
      return t('workflow.tabs.customTool')

    if (payload.type === CollectionType.workflow)
      return t('workflow.tabs.workflowTool')

    return ''
  }, [payload.author, payload.type, t])

  return (
    <div
      key={payload.id}
      className={cn('mb-1 last-of-type:mb-0', isShowLetterIndex && 'mr-6')}
    >
      <div className={cn(className)}>
        <div
          className='flex items-center justify-between pl-3 pr-1 w-full rounded-lg hover:bg-gray-50 cursor-pointer select-none'
          onClick={() => {
            if (hasAction)
              onFoldChange(!isFold)

            // Now always support actions
            // if (payload.parameters) {
            //   payload.parameters.forEach((item) => {
            //     params[item.name] = ''
            //   })
            // }
            // onSelect(BlockEnum.Tool, {
            //   provider_id: payload.id,
            //   provider_type: payload.type,
            //   provider_name: payload.name,
            //   tool_name: payload.name,
            //   tool_label: payload.label[language],
            //   title: payload.label[language],
            //   params: {},
            // })
          }}
        >
          <div className='flex grow items-center h-8'>
            <BlockIcon
              className='shrink-0'
              type={BlockEnum.Tool}
              toolIcon={payload.icon}
            />
            <div className='ml-2 text-sm text-gray-900 flex-1 w-0 grow truncate'>{payload.label[language]}</div>
          </div>

          <div className='flex items-center'>
            {isFlatView && (
              <div className='text-text-tertiary system-xs-regular'>{groupName}</div>
            )}
            {hasAction && (
              <FoldIcon className={cn('w-4 h-4 text-text-quaternary shrink-0', isFold && 'text-text-tertiary')} />
            )}
          </div>
        </div>

        {hasAction && !isFold && (
          actions.map(action => (
            <ActonItem
              key={action.name}
              provider={payload}
              payload={action}
              onSelect={onSelect}
            />
          ))
        )}
      </div>
    </div>
  )
}
export default React.memo(Tool)
