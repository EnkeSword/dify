'use client'
import type { FC } from 'react'
import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import {
  RiArrowLeftLine,
  RiArrowRightUpLine,
} from '@remixicon/react'
import {
  PortalToFollowElem,
  PortalToFollowElemContent,
  PortalToFollowElemTrigger,
} from '@/app/components/base/portal-to-follow-elem'
import ToolTrigger from '@/app/components/plugins/plugin-detail-panel/tool-selector/tool-trigger'
import ToolItem from '@/app/components/plugins/plugin-detail-panel/tool-selector/tool-item'
import ToolPicker from '@/app/components/workflow/block-selector/tool-picker'
import Button from '@/app/components/base/button'
import Indicator from '@/app/components/header/indicator'
import ToolCredentialForm from '@/app/components/plugins/plugin-detail-panel/tool-selector/tool-credentials-form'
import Toast from '@/app/components/base/toast'
import Textarea from '@/app/components/base/textarea'
import Divider from '@/app/components/base/divider'
import Form from '@/app/components/header/account-setting/model-provider-page/model-modal/Form'
import { addDefaultValue, toolParametersToFormSchemas } from '@/app/components/tools/utils/to-form-schema'

import { useAppContext } from '@/context/app-context'
import {
  useAllBuiltInTools,
  useAllCustomTools,
  useAllWorkflowTools,
  useInvalidateAllBuiltInTools,
  useUpdateProviderCredentials,
} from '@/service/use-tools'
import { CollectionType } from '@/app/components/tools/types'
import type { ToolDefaultValue } from '@/app/components/workflow/block-selector/types'
import type {
  OffsetOptions,
  Placement,
} from '@floating-ui/react'
import cn from '@/utils/classnames'

type Props = {
  value?: {
    provider_name: string
    tool_name: string
    parameters?: Record<string, any>
    extra?: Record<string, any>
  }
  disabled?: boolean
  placement?: Placement
  offset?: OffsetOptions
  onSelect: (tool: {
    provider_name: string
    tool_name: string
    parameters?: Record<string, any>
    extra?: Record<string, any>
  }) => void
  onDelete?: () => void
  supportAddCustomTool?: boolean
  scope?: string
}
const ToolSelector: FC<Props> = ({
  value,
  disabled,
  placement = 'left',
  offset = 4,
  onSelect,
  onDelete,
  scope,
}) => {
  const { t } = useTranslation()
  const [isShow, onShowChange] = useState(false)
  const handleTriggerClick = () => {
    if (disabled) return
    onShowChange(true)
  }

  const { data: buildInTools } = useAllBuiltInTools()
  const { data: customTools } = useAllCustomTools()
  const { data: workflowTools } = useAllWorkflowTools()
  const invalidateAllBuiltinTools = useInvalidateAllBuiltInTools()

  const currentProvider = useMemo(() => {
    const mergedTools = [...(buildInTools || []), ...(customTools || []), ...(workflowTools || [])]
    return mergedTools.find((toolWithProvider) => {
      return toolWithProvider.id === value?.provider_name && toolWithProvider.tools.some(tool => tool.name === value?.tool_name)
    })
  }, [value, buildInTools, customTools, workflowTools])

  const [isShowChooseTool, setIsShowChooseTool] = useState(false)
  const handleSelectTool = (tool: ToolDefaultValue) => {
    const paramValues = addDefaultValue(tool.params, toolParametersToFormSchemas(tool.paramSchemas as any))
    const toolValue = {
      provider_name: tool.provider_id,
      tool_name: tool.tool_name,
      parameters: paramValues,
      extra: {
        description: '',
      },
    }
    onSelect(toolValue)
    setIsShowChooseTool(false)
    // if (tool.provider_type === CollectionType.builtIn && tool.is_team_authorization)
    //   onShowChange(false)
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onSelect({
      ...value,
      extra: {
        ...value?.extra,
        description: e.target.value || '',
      },
    } as any)
  }

  const currentToolParams = useMemo(() => {
    if (!currentProvider) return []
    return currentProvider.tools.find(tool => tool.name === value?.tool_name)?.parameters || []
  }, [currentProvider, value])

  const formSchemas = useMemo(() => toolParametersToFormSchemas(currentToolParams), [currentToolParams])

  const handleFormChange = (v: Record<string, any>) => {
    const toolValue = {
      ...value,
      parameters: v,
    }
    onSelect(toolValue as any)
  }

  // authorization
  const { isCurrentWorkspaceManager } = useAppContext()
  const [isShowSettingAuth, setShowSettingAuth] = useState(false)
  const handleCredentialSettingUpdate = () => {
    invalidateAllBuiltinTools()
    Toast.notify({
      type: 'success',
      message: t('common.api.actionSuccess'),
    })
    setShowSettingAuth(false)
    onShowChange(false)
  }

  const { mutate: updatePermission } = useUpdateProviderCredentials({
    onSuccess: handleCredentialSettingUpdate,
  })

  return (
    <>
      <PortalToFollowElem
        placement={placement}
        offset={offset}
        open={isShow}
        onOpenChange={onShowChange}
      >
        <PortalToFollowElemTrigger
          className='w-full'
          onClick={handleTriggerClick}
        >
          {!value?.provider_name && (
            <ToolTrigger
              isConfigure
              open={isShow}
              value={value}
              provider={currentProvider}
            />
          )}
          {value?.provider_name && (
            <ToolItem
              open={isShow}
              icon={currentProvider?.icon}
              providerName={value.provider_name}
              toolName={value.tool_name}
              onDelete={onDelete}
              noAuth={currentProvider && !currentProvider.is_team_authorization}
              onAuth={() => setShowSettingAuth(true)}
              // uninstalled
              errorTip={<div className='space-y-1 text-xs'>
                <h3 className='text-text-primary font-semibold'>{t('workflow.nodes.agent.pluginNotInstalled')}</h3>
                <p className='text-text-secondary tracking-tight'>{t('workflow.nodes.agent.pluginNotInstalledDesc')}</p>
                <p>
                  <Link href={'/plugins'} className='text-text-accent tracking-tight'>{t('workflow.nodes.agent.linkToPlugin')}</Link>
                </p>
              </div>}
            />
          )}
        </PortalToFollowElemTrigger>
        <PortalToFollowElemContent className='z-[1000]'>
          <div className={cn('relative w-[361px] min-h-20 max-h-[642px] pb-4 rounded-xl backdrop-blur-sm bg-components-panel-bg-blur border-[0.5px] border-components-panel-border shadow-lg', !isShowSettingAuth && 'overflow-y-auto pb-2')}>
            {!isShowSettingAuth && (
              <>
                <div className='px-4 pt-3.5 pb-1 text-text-primary system-xl-semibold'>{t('plugin.detailPanel.toolSelector.title')}</div>
                {/* base form */}
                <div className='px-4 py-2 flex flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <div className='h-6 flex items-center system-sm-semibold text-text-secondary'>{t('plugin.detailPanel.toolSelector.toolLabel')}</div>
                    <ToolPicker
                      placement='bottom'
                      offset={offset}
                      trigger={
                        <ToolTrigger
                          open={isShowChooseTool}
                          value={value}
                          provider={currentProvider}
                        />
                      }
                      isShow={isShowChooseTool}
                      onShowChange={setIsShowChooseTool}
                      disabled={false}
                      supportAddCustomTool
                      onSelect={handleSelectTool}
                      scope={scope}
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='h-6 flex items-center system-sm-semibold text-text-secondary'>{t('plugin.detailPanel.toolSelector.descriptionLabel')}</div>
                    <Textarea
                      className='resize-none'
                      placeholder={t('plugin.detailPanel.toolSelector.descriptionPlaceholder')}
                      value={value?.extra?.description || ''}
                      onChange={handleDescriptionChange}
                      disabled={!value?.provider_name}
                    />
                  </div>
                </div>
                {/* authorization */}
                {currentProvider && currentProvider.type === CollectionType.builtIn && currentProvider.allow_delete && (
                  <div className='px-4 pt-3 flex flex-col'>
                    <div className='flex items-center gap-2'>
                      <div className='text-text-tertiary system-xs-medium-uppercase'>{t('plugin.detailPanel.toolSelector.auth')}</div>
                      <Divider bgStyle='gradient' className='grow' />
                    </div>
                    <div className='py-2'>
                      {!currentProvider.is_team_authorization && (
                        <Button
                          variant='primary'
                          className={cn('shrink-0 w-full')}
                          onClick={() => setShowSettingAuth(true)}
                          disabled={!isCurrentWorkspaceManager}
                        >
                          {t('tools.auth.unauthorized')}
                        </Button>
                      )}
                      {currentProvider.is_team_authorization && (
                        <Button
                          variant='secondary'
                          className={cn('shrink-0 w-full')}
                          onClick={() => setShowSettingAuth(true)}
                          disabled={!isCurrentWorkspaceManager}
                        >
                          <Indicator className='mr-2' color={'green'} />
                          {t('tools.auth.authorized')}
                        </Button>
                      )}
                    </div>
                  </div>
                )}
                {/* tool settings */}
                {currentToolParams.length > 0 && currentProvider?.is_team_authorization && (
                  <div className='px-4 pt-3'>
                    <div className='flex items-center gap-2'>
                      <div className='text-text-tertiary system-xs-medium-uppercase'>{t('plugin.detailPanel.toolSelector.settings')}</div>
                      <Divider bgStyle='gradient' className='grow' />
                    </div>
                    <div className='py-2'>
                      <Form
                        value={value?.parameters || {}}
                        onChange={handleFormChange}
                        formSchemas={formSchemas as any}
                        isEditMode={true}
                        showOnVariableMap={{}}
                        validating={false}
                        inputClassName='bg-components-input-bg-normal hover:bg-components-input-bg-hover'
                        fieldMoreInfo={item => item.url
                          ? (<a
                            href={item.url}
                            target='_blank' rel='noopener noreferrer'
                            className='inline-flex items-center text-xs text-text-accent'
                          >
                            {t('tools.howToGet')}
                            <RiArrowRightUpLine className='ml-1 w-3 h-3' />
                          </a>)
                          : null}
                      />
                    </div>
                  </div>
                )}
              </>
            )}
            {/* authorization panel */}
            {isShowSettingAuth && currentProvider && (
              <>
                <div className='relative pt-3.5 flex flex-col gap-1'>
                  <div className='absolute -top-2 left-2 w-[345px] pt-2 rounded-t-xl backdrop-blur-sm bg-components-panel-bg-blur border-[0.5px] border-components-panel-border'></div>
                  <div
                    className='px-3 h-6 flex items-center gap-1 text-text-accent-secondary system-xs-semibold-uppercase cursor-pointer'
                    onClick={() => setShowSettingAuth(false)}
                  >
                    <RiArrowLeftLine className='w-4 h-4' />
                    BACK
                  </div>
                  <div className='px-4 text-text-primary system-xl-semibold'>{t('tools.auth.setupModalTitle')}</div>
                  <div className='px-4 text-text-tertiary system-xs-regular'>{t('tools.auth.setupModalTitleDescription')}</div>
                </div>
                <ToolCredentialForm
                  collection={currentProvider}
                  onCancel={() => setShowSettingAuth(false)}
                  onSaved={async value => updatePermission({
                    providerName: currentProvider.name,
                    credentials: value,
                  })}
                />
              </>
            )}
          </div>
        </PortalToFollowElemContent>
      </PortalToFollowElem>
    </>
  )
}
export default React.memo(ToolSelector)
