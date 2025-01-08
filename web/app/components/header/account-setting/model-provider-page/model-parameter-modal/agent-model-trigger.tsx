import type { FC } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type {
  ModelItem,
  ModelProvider,
} from '../declarations'
import {
  CustomConfigurationStatusEnum,
  ModelTypeEnum,
} from '../declarations'
import type { PluginInfoFromMarketPlace } from '@/app/components/plugins/types'
import { useInvalidateInstalledPluginList } from '@/service/use-plugins'
import ConfigurationButton from './configuration-button'
import { PluginType } from '@/app/components/plugins/types'
import {
  useModelModalHandler,
  useUpdateModelList,
  useUpdateModelProviders,
} from '../hooks'
import ModelIcon from '../model-icon'
import ModelDisplay from './model-display'
import { InstallPluginButton } from '@/app/components/workflow/nodes/_base/components/install-plugin-button'
import StatusIndicators from './status-indicators'
import cn from '@/utils/classnames'
import { useProviderContext } from '@/context/provider-context'
import { RiEqualizer2Line } from '@remixicon/react'
import { fetchPluginInfoFromMarketPlace } from '@/service/plugins'
import { fetchModelProviderModelList } from '@/service/common'

export type AgentModelTriggerProps = {
  open?: boolean
  disabled?: boolean
  currentProvider?: ModelProvider
  currentModel?: ModelItem
  providerName?: string
  modelId?: string
  hasDeprecated?: boolean
  scope?: string
}

const AgentModelTrigger: FC<AgentModelTriggerProps> = ({
  disabled,
  currentProvider,
  currentModel,
  providerName,
  modelId,
  hasDeprecated,
  scope,
}) => {
  const { t } = useTranslation()
  const { modelProviders } = useProviderContext()
  const updateModelProviders = useUpdateModelProviders()
  const updateModelList = useUpdateModelList()
  const { modelProvider, needsConfiguration } = useMemo(() => {
    const modelProvider = modelProviders.find(item => item.provider === providerName)
    const needsConfiguration = modelProvider?.custom_configuration.status === CustomConfigurationStatusEnum.noConfigure && !(
      modelProvider.system_configuration.enabled === true
      && modelProvider.system_configuration.quota_configurations.find(
        item => item.quota_type === modelProvider.system_configuration.current_quota_type,
      )
    )
    return {
      modelProvider,
      needsConfiguration,
    }
  }, [modelProviders, providerName])
  const [pluginInfo, setPluginInfo] = useState<PluginInfoFromMarketPlace | null>(null)
  const [isPluginChecked, setIsPluginChecked] = useState(false)
  const [installed, setInstalled] = useState(false)
  const [inModelList, setInModelList] = useState(false)
  const invalidateInstalledPluginList = useInvalidateInstalledPluginList()
  const handleOpenModal = useModelModalHandler()
  useEffect(() => {
    (async () => {
      if (modelId && currentProvider) {
        try {
          const modelsData = await fetchModelProviderModelList(`/workspaces/current/model-providers/${currentProvider?.provider}/models`)
          if (modelId && modelsData.data.find(item => item.model === modelId))
            setInModelList(true)
        }
        catch (error) {
          // pass
        }
      }
      if (providerName && !modelProvider) {
        const parts = providerName.split('/')
        const org = parts[0]
        const name = parts[1]
        try {
          const pluginInfo = await fetchPluginInfoFromMarketPlace({ org, name })
          if (pluginInfo.data.plugin.category === PluginType.model)
            setPluginInfo(pluginInfo.data.plugin)
        }
        catch (error) {
          // pass
        }
        setIsPluginChecked(true)
      }
      else {
        setIsPluginChecked(true)
      }
    })()
  }, [providerName, modelProvider, modelId, currentProvider])

  if (modelId && !isPluginChecked)
    return null

  return (
    <div
      className={cn(
        'relative group flex items-center p-1 gap-[2px] flex-grow rounded-lg bg-components-input-bg-normal cursor-pointer hover:bg-state-base-hover-alt',
      )}
    >
      {modelId ? (
        <>
          <ModelIcon
            className='p-0.5'
            provider={currentProvider || modelProvider}
            modelName={currentModel?.model || modelId}
            isDeprecated={hasDeprecated}
          />
          <ModelDisplay
            currentModel={currentModel}
            modelId={modelId}
          />
          {needsConfiguration && (
            <ConfigurationButton
              modelProvider={modelProvider}
              handleOpenModal={handleOpenModal}
            />
          )}
          <StatusIndicators
            needsConfiguration={needsConfiguration}
            modelProvider={!!modelProvider}
            inModelList={inModelList}
            disabled={!!disabled}
            pluginInfo={pluginInfo}
            t={t}
          />
          {!installed && !modelProvider && pluginInfo && (
            <InstallPluginButton
              onClick={e => e.stopPropagation()}
              size={'small'}
              uniqueIdentifier={pluginInfo.latest_package_identifier}
              onSuccess={() => {
                [
                  ModelTypeEnum.textGeneration,
                  ModelTypeEnum.textEmbedding,
                  ModelTypeEnum.rerank,
                  ModelTypeEnum.moderation,
                  ModelTypeEnum.speech2text,
                  ModelTypeEnum.tts,
                ].forEach((type: ModelTypeEnum) => {
                  if (scope?.includes(type))
                    updateModelList(type)
                },
                )
                updateModelProviders()
                invalidateInstalledPluginList()
                setInstalled(true)
              }}
            />
          )}
          {modelProvider && !disabled && !needsConfiguration && (
            <div className="flex pr-1 items-center">
              <RiEqualizer2Line className="w-4 h-4 text-text-tertiary group-hover:text-text-secondary" />
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex p-1 pl-2 items-center gap-1 grow">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap system-sm-regular text-components-input-text-placeholder">
              {t('workflow.nodes.agent.configureModel')}
            </span>
          </div>
          <div className="flex pr-1 items-center">
            <RiEqualizer2Line className="w-4 h-4 text-text-tertiary group-hover:text-text-secondary" />
          </div>
        </>
      )}
    </div>
  )
}

export default AgentModelTrigger
