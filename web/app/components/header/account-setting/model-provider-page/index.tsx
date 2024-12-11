import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useDebounce } from 'ahooks'
import {
  RiAlertFill,
  RiArrowDownSLine,
  RiArrowRightUpLine,
  RiBrainLine,
} from '@remixicon/react'
import SystemModelSelector from './system-model-selector'
import ProviderAddedCard, { UPDATE_MODEL_PROVIDER_CUSTOM_MODEL_LIST } from './provider-added-card'
import type {
  CustomConfigurationModelFixedFields,
  ModelProvider,
} from './declarations'
import {
  ConfigurationMethodEnum,
  CustomConfigurationStatusEnum,
  ModelTypeEnum,
} from './declarations'
import {
  useDefaultModel,
  useMarketplace,
  useMarketplaceAllPlugins,
  useUpdateModelList,
  useUpdateModelProviders,
} from './hooks'
import Divider from '@/app/components/base/divider'
import Loading from '@/app/components/base/loading'
import ProviderCard from '@/app/components/plugins/provider-card'
import List from '@/app/components/plugins/marketplace/list'
import { useProviderContext } from '@/context/provider-context'
import { useModalContextSelector } from '@/context/modal-context'
import { useEventEmitterContextContext } from '@/context/event-emitter'
import type { Plugin } from '@/app/components/plugins/types'
import { MARKETPLACE_URL_PREFIX } from '@/config'
import cn from '@/utils/classnames'
import { getLocaleOnClient } from '@/i18n'

type Props = {
  searchText: string
}

const ModelProviderPage = ({ searchText }: Props) => {
  const debouncedSearchText = useDebounce(searchText, { wait: 500 })
  const { t } = useTranslation()
  const { eventEmitter } = useEventEmitterContextContext()
  const updateModelProviders = useUpdateModelProviders()
  const updateModelList = useUpdateModelList()
  const { data: textGenerationDefaultModel } = useDefaultModel(ModelTypeEnum.textGeneration)
  const { data: embeddingsDefaultModel } = useDefaultModel(ModelTypeEnum.textEmbedding)
  const { data: rerankDefaultModel } = useDefaultModel(ModelTypeEnum.rerank)
  const { data: speech2textDefaultModel } = useDefaultModel(ModelTypeEnum.speech2text)
  const { data: ttsDefaultModel } = useDefaultModel(ModelTypeEnum.tts)
  const { modelProviders: providers } = useProviderContext()
  const setShowModelModal = useModalContextSelector(state => state.setShowModelModal)
  const defaultModelNotConfigured = !textGenerationDefaultModel && !embeddingsDefaultModel && !speech2textDefaultModel && !rerankDefaultModel && !ttsDefaultModel
  const [configuredProviders, notConfiguredProviders] = useMemo(() => {
    const configuredProviders: ModelProvider[] = []
    const notConfiguredProviders: ModelProvider[] = []

    providers.forEach((provider) => {
      if (
        provider.custom_configuration.status === CustomConfigurationStatusEnum.active
        || (
          provider.system_configuration.enabled === true
          && provider.system_configuration.quota_configurations.find(item => item.quota_type === provider.system_configuration.current_quota_type)
        )
      )
        configuredProviders.push(provider)
      else
        notConfiguredProviders.push(provider)
    })

    return [configuredProviders, notConfiguredProviders]
  }, [providers])
  const [filteredConfiguredProviders, filteredNotConfiguredProviders] = useMemo(() => {
    const filteredConfiguredProviders = configuredProviders.filter(
      provider => provider.provider.toLowerCase().includes(debouncedSearchText.toLowerCase())
      || Object.values(provider.label).some(text => text.toLowerCase().includes(debouncedSearchText.toLowerCase())),
    )
    const filteredNotConfiguredProviders = notConfiguredProviders.filter(
      provider => provider.provider.toLowerCase().includes(debouncedSearchText.toLowerCase())
      || Object.values(provider.label).some(text => text.toLowerCase().includes(debouncedSearchText.toLowerCase())),
    )

    return [filteredConfiguredProviders, filteredNotConfiguredProviders]
  }, [configuredProviders, debouncedSearchText, notConfiguredProviders])

  const handleOpenModal = (
    provider: ModelProvider,
    configurationMethod: ConfigurationMethodEnum,
    CustomConfigurationModelFixedFields?: CustomConfigurationModelFixedFields,
  ) => {
    setShowModelModal({
      payload: {
        currentProvider: provider,
        currentConfigurationMethod: configurationMethod,
        currentCustomConfigurationModelFixedFields: CustomConfigurationModelFixedFields,
      },
      onSaveCallback: () => {
        updateModelProviders()

        provider.supported_model_types.forEach((type) => {
          updateModelList(type)
        })

        if (configurationMethod === ConfigurationMethodEnum.customizableModel && provider.custom_configuration.status === CustomConfigurationStatusEnum.active) {
          eventEmitter?.emit({
            type: UPDATE_MODEL_PROVIDER_CUSTOM_MODEL_LIST,
            payload: provider.provider,
          } as any)

          if (CustomConfigurationModelFixedFields?.__model_type)
            updateModelList(CustomConfigurationModelFixedFields?.__model_type)
        }
      },
    })
  }

  const [collapse, setCollapse] = useState(false)
  const locale = getLocaleOnClient()
  const {
    marketplaceCollections,
    marketplaceCollectionPluginsMap,
    isLoading: isPluginsLoading,
  } = useMarketplace()
  const {
    plugins: allPlugins,
    isLoading: isAllPluginsLoading,
  } = useMarketplaceAllPlugins(providers, searchText)

  const cardRender = useCallback((plugin: Plugin) => {
    if (plugin.type === 'bundle')
      return null

    return <ProviderCard key={plugin.plugin_id} payload={plugin} />
  }, [])

  return (
    <div className='relative pt-1 -mt-2'>
      <div className={cn('flex items-center mb-2')}>
        <div className='grow text-text-primary system-md-semibold'>{t('common.modelProvider.models')}</div>
        <div className={cn(
          'shrink-0 relative flex items-center justify-end gap-2 p-0.5 rounded-lg border border-transparent',
          defaultModelNotConfigured && 'pl-2 bg-components-panel-bg-blur border-components-panel-border shadow-xs',
        )}>
          {defaultModelNotConfigured && <div className='absolute top-0 bottom-0 right-0 left-0 opacity-40' style={{ background: 'linear-gradient(92deg, rgba(247, 144, 9, 0.25) 0%, rgba(255, 255, 255, 0.00) 100%)' }} />}
          {defaultModelNotConfigured && (
            <div className='flex items-center gap-1 text-text-primary system-xs-medium'>
              <RiAlertFill className='w-4 h-4 text-text-warning-secondary' />
              {t('common.modelProvider.notConfigured')}
            </div>
          )}
          <SystemModelSelector
            notConfigured={defaultModelNotConfigured}
            textGenerationDefaultModel={textGenerationDefaultModel}
            embeddingsDefaultModel={embeddingsDefaultModel}
            rerankDefaultModel={rerankDefaultModel}
            speech2textDefaultModel={speech2textDefaultModel}
            ttsDefaultModel={ttsDefaultModel}
          />
        </div>
      </div>
      {!filteredConfiguredProviders?.length && (
        <div className='mb-2 p-4 rounded-[10px]' style={{ background: 'linear-gradient(90deg, rgba(200, 206, 218, 0.20) 0%, rgba(200, 206, 218, 0.04) 100%)' }}>
          <div className='w-10 h-10 flex items-center justify-center rounded-[10px] border-[0.5px] border-components-card-border bg-components-card-bg shadow-lg backdrop-blur'>
            <RiBrainLine className='w-5 h-5 text-text-primary' />
          </div>
          <div className='mt-2 text-text-secondary system-sm-medium'>{t('common.modelProvider.emptyProviderTitle')}</div>
          <div className='mt-1 text-text-tertiary system-xs-regular'>{t('common.modelProvider.emptyProviderTip')}</div>
        </div>
      )}
      {!!filteredConfiguredProviders?.length && (
        <div className='relative'>
          {filteredConfiguredProviders?.map(provider => (
            <ProviderAddedCard
              key={provider.provider}
              provider={provider}
              onOpenModal={(configurationMethod: ConfigurationMethodEnum, currentCustomConfigurationModelFixedFields?: CustomConfigurationModelFixedFields) => handleOpenModal(provider, configurationMethod, currentCustomConfigurationModelFixedFields)}
            />
          ))}
        </div>
      )}
      {!!filteredNotConfiguredProviders?.length && (
        <>
          <div className='flex items-center mb-2 pt-2 text-text-primary system-md-semibold'>{t('common.modelProvider.configureRequired')}</div>
          <div className='relative'>
            {filteredNotConfiguredProviders?.map(provider => (
              <ProviderAddedCard
                notConfigured
                key={provider.provider}
                provider={provider}
                onOpenModal={(configurationMethod: ConfigurationMethodEnum, currentCustomConfigurationModelFixedFields?: CustomConfigurationModelFixedFields) => handleOpenModal(provider, configurationMethod, currentCustomConfigurationModelFixedFields)}
              />
            ))}
          </div>
        </>
      )}
      <div className='mb-2'>
        <Divider className='!mt-4 h-px' />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1 text-text-primary system-md-semibold cursor-pointer' onClick={() => setCollapse(!collapse)}>
            <RiArrowDownSLine className={cn('w-4 h-4', collapse && '-rotate-90')} />
            {t('common.modelProvider.installProvider')}
          </div>
          <div className='flex items-center mb-2 pt-2'>
            <span className='pr-1 text-text-tertiary system-sm-regular'>{t('common.modelProvider.discoverMore')}</span>
            <Link target="_blank" href={`${MARKETPLACE_URL_PREFIX}`} className='inline-flex items-center system-sm-medium text-text-accent'>
              {t('plugin.marketplace.difyMarketplace')}
              <RiArrowRightUpLine className='w-4 h-4' />
            </Link>
          </div>
        </div>
        {!collapse && (isPluginsLoading || isAllPluginsLoading) && <Loading type='area' />}
        {
          !isPluginsLoading && !collapse && (
            <List
              marketplaceCollections={marketplaceCollections || []}
              marketplaceCollectionPluginsMap={marketplaceCollectionPluginsMap || {}}
              plugins={undefined}
              showInstallButton
              locale={locale}
              cardContainerClassName='grid grid-cols-2 gap-2'
              cardRender={cardRender}
            />
          )
        }
        {
          !isAllPluginsLoading && !collapse && (
            <List
              marketplaceCollections={[]}
              marketplaceCollectionPluginsMap={{}}
              plugins={allPlugins}
              showInstallButton
              locale={locale}
              cardContainerClassName='grid grid-cols-2 gap-2'
              cardRender={cardRender}
              emptyClassName='h-auto'
            />
          )
        }
      </div>
    </div>
  )
}

export default ModelProviderPage
