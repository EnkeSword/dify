'use client'
import type { FC } from 'react'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useBoolean } from 'ahooks'
import TracingIcon from './tracing-icon'
import ProviderPanel from './provider-panel'
import type { LangFuseConfig, LangSmithConfig } from './type'
import { TracingProvider } from './type'
import ProviderConfigModal from './provider-config-modal'
import Indicator from '@/app/components/header/indicator'
import Switch from '@/app/components/base/switch'
import Tooltip from '@/app/components/base/tooltip'
import Divider from '@/app/components/base/divider'
import cn from '@/utils/classnames'

const I18N_PREFIX = 'app.tracing'

export type PopupProps = {
  appId: string
  readOnly: boolean
  enabled: boolean
  onStatusChange: (enabled: boolean) => void
  chosenProvider: TracingProvider | null
  onChooseProvider: (provider: TracingProvider) => void
  langSmithConfig: LangSmithConfig | null
  langFuseConfig: LangFuseConfig | null
  onConfigUpdated: (provider: TracingProvider, payload: LangSmithConfig | LangFuseConfig) => void
  onConfigRemoved: (provider: TracingProvider) => void
}

const ConfigPopup: FC<PopupProps> = ({
  appId,
  readOnly,
  enabled,
  onStatusChange,
  chosenProvider,
  onChooseProvider,
  langSmithConfig,
  langFuseConfig,
  onConfigUpdated,
  onConfigRemoved,
}) => {
  const { t } = useTranslation()

  const [currentProvider, setCurrentProvider] = useState<TracingProvider | null>(TracingProvider.langfuse)
  const [isShowConfigModal, {
    setTrue: showConfigModal,
    setFalse: hideConfigModal,
  }] = useBoolean(false)
  const handleOnConfig = useCallback((provider: TracingProvider) => {
    return () => {
      setCurrentProvider(provider)
      showConfigModal()
    }
  }, [showConfigModal])

  const handleOnChoose = useCallback((provider: TracingProvider) => {
    return () => {
      onChooseProvider(provider)
    }
  }, [onChooseProvider])

  const handleConfigUpdated = useCallback((payload: LangSmithConfig | LangFuseConfig) => {
    onConfigUpdated(currentProvider!, payload)
    hideConfigModal()
  }, [currentProvider, hideConfigModal, onConfigUpdated])

  const handleConfigRemoved = useCallback(() => {
    onConfigRemoved(currentProvider!)
    hideConfigModal()
  }, [currentProvider, hideConfigModal, onConfigRemoved])

  const providerAllConfigured = langSmithConfig && langFuseConfig
  const providerAllNotConfigured = !langSmithConfig && !langFuseConfig

  const switchContent = (
    <Switch
      className='ml-3'
      defaultValue={enabled}
      onChange={onStatusChange}
      disabled={providerAllNotConfigured}
    />
  )
  const langSmithPanel = (
    <ProviderPanel
      type={TracingProvider.langSmith}
      readOnly={readOnly}
      config={langSmithConfig}
      hasConfigured={!!langSmithConfig}
      onConfig={handleOnConfig(TracingProvider.langSmith)}
      isChosen={chosenProvider === TracingProvider.langSmith}
      onChoose={handleOnChoose(TracingProvider.langSmith)}
    />
  )

  const langfusePanel = (
    <ProviderPanel
      type={TracingProvider.langfuse}
      readOnly={readOnly}
      config={langFuseConfig}
      hasConfigured={!!langFuseConfig}
      onConfig={handleOnConfig(TracingProvider.langfuse)}
      isChosen={chosenProvider === TracingProvider.langfuse}
      onChoose={handleOnChoose(TracingProvider.langfuse)}
    />
  )

  return (
    <div className='w-[420px] p-4 rounded-2xl bg-components-panel-bg border-[0.5px] border-components-panel-border shadow-xl'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <TracingIcon size='md' className='mr-2' />
          <div className='text-text-primary title-2xl-semibold'>{t(`${I18N_PREFIX}.tracing`)}</div>
        </div>
        <div className='flex items-center'>
          <Indicator color={enabled ? 'green' : 'gray'} />
          <div className={cn('ml-1 system-xs-semibold-uppercase text-text-tertiary', enabled && 'text-util-colors-green-green-600')}>
            {t(`${I18N_PREFIX}.${enabled ? 'enabled' : 'disabled'}`)}
          </div>
          {!readOnly && (
            <>
              {providerAllNotConfigured
                ? (
                  <Tooltip
                    popupContent={t(`${I18N_PREFIX}.disabledTip`)}
                  >
                    {switchContent}
                  </Tooltip>
                )
                : switchContent}
            </>
          )}
        </div>
      </div>

      <div className='mt-2 system-xs-regular text-text-tertiary'>
        {t(`${I18N_PREFIX}.tracingDescription`)}
      </div>
      <Divider className='my-3' />
      <div className='relative'>
        {(providerAllConfigured || providerAllNotConfigured)
          ? (
            <>
              <div className='system-xs-medium-uppercase text-text-tertiary'>{t(`${I18N_PREFIX}.configProviderTitle.${providerAllConfigured ? 'configured' : 'notConfigured'}`)}</div>
              <div className='mt-2 space-y-2'>
                {langSmithPanel}
                {langfusePanel}
              </div>
            </>
          )
          : (
            <>
              <div className='system-xs-medium-uppercase text-text-tertiary'>{t(`${I18N_PREFIX}.configProviderTitle.configured`)}</div>
              <div className='mt-2'>
                {langSmithConfig ? langSmithPanel : langfusePanel}
              </div>
              <div className='mt-3 system-xs-medium-uppercase text-text-tertiary'>{t(`${I18N_PREFIX}.configProviderTitle.moreProvider`)}</div>
              <div className='mt-2'>
                {!langSmithConfig ? langSmithPanel : langfusePanel}
              </div>
            </>
          )}

      </div>
      {isShowConfigModal && (
        <ProviderConfigModal
          appId={appId}
          type={currentProvider!}
          payload={currentProvider === TracingProvider.langSmith ? langSmithConfig : langFuseConfig}
          onCancel={hideConfigModal}
          onSaved={handleConfigUpdated}
          onChosen={onChooseProvider}
          onRemoved={handleConfigRemoved}
        />
      )}
    </div>
  )
}
export default React.memo(ConfigPopup)
