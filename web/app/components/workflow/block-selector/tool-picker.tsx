'use client'
import type { FC } from 'react'
import React from 'react'
import { useState } from 'react'
import {
  PortalToFollowElem,
  PortalToFollowElemContent,
  PortalToFollowElemTrigger,
} from '@/app/components/base/portal-to-follow-elem'
import type {
  OffsetOptions,
  Placement,
} from '@floating-ui/react'
import AllTools from '@/app/components/workflow/block-selector/all-tools'
import type { ToolDefaultValue } from './types'
import type { BlockEnum } from '@/app/components/workflow/types'
import SearchBox from '@/app/components/plugins/marketplace/search-box'
import { useTranslation } from 'react-i18next'
import { useBoolean } from 'ahooks'
import EditCustomToolModal from '@/app/components/tools/edit-custom-collection-modal/modal'
import {
  createCustomCollection,
} from '@/service/tools'
import type { CustomCollectionBackend } from '@/app/components/tools/types'
import Toast from '@/app/components/base/toast'
import { useAllBuiltInTools, useAllCustomTools, useAllWorkflowTools, useInvalidateAllCustomTools } from '@/service/use-tools'

type Props = {
  disabled: boolean
  trigger: React.ReactNode
  placement?: Placement
  offset?: OffsetOptions
  isShow: boolean
  onShowChange: (isShow: boolean) => void
  onSelect: (tool: ToolDefaultValue) => void
  supportAddCustomTool?: boolean
}

const ToolPicker: FC<Props> = ({
  disabled,
  trigger,
  placement = 'right-start',
  offset = 0,
  isShow,
  onShowChange,
  onSelect,
  supportAddCustomTool,
}) => {
  const { t } = useTranslation()
  const [searchText, setSearchText] = useState('')

  const { data: buildInTools } = useAllBuiltInTools()
  const { data: customTools } = useAllCustomTools()
  const invalidateCustomTools = useInvalidateAllCustomTools()
  const { data: workflowTools } = useAllWorkflowTools()

  const handleAddedCustomTool = invalidateCustomTools

  const handleTriggerClick = () => {
    if (disabled) return
    onShowChange(true)
  }

  const handleSelect = (_type: BlockEnum, tool?: ToolDefaultValue) => {
    onSelect(tool!)
  }

  const [isShowEditCollectionToolModal, {
    setFalse: hideEditCustomCollectionModal,
    setTrue: showEditCustomCollectionModal,
  }] = useBoolean(false)

  const doCreateCustomToolCollection = async (data: CustomCollectionBackend) => {
    await createCustomCollection(data)
    Toast.notify({
      type: 'success',
      message: t('common.api.actionSuccess'),
    })
    hideEditCustomCollectionModal()
    handleAddedCustomTool()
  }

  if (isShowEditCollectionToolModal) {
    return (
      <EditCustomToolModal
        positionLeft
        payload={null}
        onHide={hideEditCustomCollectionModal}
        onAdd={doCreateCustomToolCollection}
      />
    )
  }

  return (
    <PortalToFollowElem
      placement={placement}
      offset={offset}
      open={isShow}
      onOpenChange={onShowChange}
    >
      <PortalToFollowElemTrigger
        onClick={handleTriggerClick}
      >
        {trigger}
      </PortalToFollowElemTrigger>

      <PortalToFollowElemContent className='z-[1000]'>
        { }
        <div className="relative w-[320px] min-h-20 rounded-xl bg-components-panel-bg-blur border-[0.5px] border-components-panel-border shadow-lg">
          <div className='p-2 pb-1'>
            <SearchBox
              search={searchText}
              onSearchChange={setSearchText}
              tags={[]}
              onTagsChange={() => { }}
              size='small'
              placeholder={t('plugin.searchTools')!}
            />
          </div>
          <AllTools
            className='mt-1'
            searchText={searchText}
            onSelect={handleSelect}
            buildInTools={buildInTools || []}
            customTools={customTools || []}
            workflowTools={workflowTools || []}
            supportAddCustomTool={supportAddCustomTool}
            onAddedCustomTool={handleAddedCustomTool}
            onShowAddCustomCollectionModal={showEditCustomCollectionModal}
          />
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  )
}

export default React.memo(ToolPicker)
