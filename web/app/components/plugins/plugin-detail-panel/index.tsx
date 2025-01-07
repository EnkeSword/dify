'use client'
import React from 'react'
import type { FC } from 'react'
import DetailHeader from './detail-header'
import EndpointList from './endpoint-list'
import ActionList from './action-list'
import ModelList from './model-list'
import AgentStrategyList from './agent-strategy-list'
import Drawer from '@/app/components/base/drawer'
import type { PluginDetail } from '@/app/components/plugins/types'
import cn from '@/utils/classnames'
import ToolSelector from '@/app/components/plugins/plugin-detail-panel/tool-selector'

type Props = {
  detail?: PluginDetail
  onUpdate: () => void
  onHide: () => void
}

const PluginDetailPanel: FC<Props> = ({
  detail,
  onUpdate,
  onHide,
}) => {
  const handleUpdate = (isDelete = false) => {
    if (isDelete)
      onHide()
    onUpdate()
  }

  const [value, setValue] = React.useState({
    provider_name: 'langgenius/google/google',
    tool_name: 'google_search',
  })

  const testHandle = (item: any) => {
    console.log(item)
    setValue(item)
  }

  if (!detail)
    return null

  return (
    <Drawer
      isOpen={!!detail}
      clickOutsideNotOpen={false}
      onClose={onHide}
      footer={null}
      mask={false}
      positionCenter={false}
      panelClassname={cn('justify-start mt-[64px] mr-2 mb-2 !w-[420px] !max-w-[420px] !p-0 !bg-components-panel-bg rounded-2xl border-[0.5px] border-components-panel-border shadow-xl')}
    >
      {detail && (
        <>
          <DetailHeader
            detail={detail}
            onHide={onHide}
            onUpdate={handleUpdate}
          />
          <div className='grow overflow-y-auto'>
            {!!detail.declaration.tool && <ActionList detail={detail} />}
            {!!detail.declaration.agent_strategy && <AgentStrategyList detail={detail} />}
            {!!detail.declaration.endpoint && <EndpointList detail={detail} />}
            {!!detail.declaration.model && <ModelList detail={detail} />}
            {false && (
              <div className='px-4'>
                <ToolSelector
                  scope={'all'}
                  value={value}
                  onSelect={item => testHandle(item)}
                  onDelete={() => testHandle(null)}
                  supportEnableSwitch
                />
              </div>
            )}
          </div>
        </>
      )}
    </Drawer>
  )
}

export default PluginDetailPanel
