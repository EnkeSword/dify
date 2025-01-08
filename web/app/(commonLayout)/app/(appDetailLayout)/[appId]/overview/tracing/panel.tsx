'use client'
import type { FC } from 'react'
import React, { useCallback, useEffect, useState } from 'react'
import {
  RiArrowDownDoubleLine,
  RiEqualizer2Line,
} from '@remixicon/react'
import { useTranslation } from 'react-i18next'
import { usePathname } from 'next/navigation'
import { useBoolean } from 'ahooks'
import type { LangFuseConfig, LangSmithConfig } from './type'
import { TracingProvider } from './type'
import TracingIcon from './tracing-icon'
import ConfigButton from './config-button'
import { LangfuseIcon, LangsmithIcon } from '@/app/components/base/icons/src/public/tracing'
import Indicator from '@/app/components/header/indicator'
import { fetchTracingConfig as doFetchTracingConfig, fetchTracingStatus, updateTracingStatus } from '@/service/apps'
import type { TracingStatus } from '@/models/app'
import Toast from '@/app/components/base/toast'
import { useAppContext } from '@/context/app-context'
import Loading from '@/app/components/base/loading'
import Divider from '@/app/components/base/divider'
import cn from '@/utils/classnames'

const I18N_PREFIX = 'app.tracing'

const Title = ({
  className,
}: {
  className?: string
}) => {
  const { t } = useTranslation()

  return (
    <div className={cn('flex items-center system-xl-semibold text-text-primary', className)}>
      {t('common.appMenus.overview')}
    </div>
  )
}
const Panel: FC = () => {
  const { t } = useTranslation()
  const pathname = usePathname()
  const matched = pathname.match(/\/app\/([^/]+)/)
  const appId = (matched?.length && matched[1]) ? matched[1] : ''
  const { isCurrentWorkspaceEditor } = useAppContext()
  const readOnly = !isCurrentWorkspaceEditor

  const [isLoaded, {
    setTrue: setLoaded,
  }] = useBoolean(false)

  const [tracingStatus, setTracingStatus] = useState<TracingStatus | null>(null)
  const enabled = tracingStatus?.enabled || false
  const handleTracingStatusChange = async (tracingStatus: TracingStatus, noToast?: boolean) => {
    await updateTracingStatus({ appId, body: tracingStatus })
    setTracingStatus(tracingStatus)
    if (!noToast) {
      Toast.notify({
        type: 'success',
        message: t('common.api.success'),
      })
    }
  }

  const handleTracingEnabledChange = (enabled: boolean) => {
    handleTracingStatusChange({
      tracing_provider: tracingStatus?.tracing_provider || null,
      enabled,
    })
  }
  const handleChooseProvider = (provider: TracingProvider) => {
    handleTracingStatusChange({
      tracing_provider: provider,
      enabled: true,
    })
  }
  const inUseTracingProvider: TracingProvider | null = tracingStatus?.tracing_provider || null
  const InUseProviderIcon = inUseTracingProvider === TracingProvider.langSmith ? LangsmithIcon : LangfuseIcon

  const [langSmithConfig, setLangSmithConfig] = useState<LangSmithConfig | null>(null)
  const [langFuseConfig, setLangFuseConfig] = useState<LangFuseConfig | null>(null)
  const hasConfiguredTracing = !!(langSmithConfig || langFuseConfig)

  const fetchTracingConfig = async () => {
    const { tracing_config: langSmithConfig, has_not_configured: langSmithHasNotConfig } = await doFetchTracingConfig({ appId, provider: TracingProvider.langSmith })
    if (!langSmithHasNotConfig)
      setLangSmithConfig(langSmithConfig as LangSmithConfig)
    const { tracing_config: langFuseConfig, has_not_configured: langFuseHasNotConfig } = await doFetchTracingConfig({ appId, provider: TracingProvider.langfuse })
    if (!langFuseHasNotConfig)
      setLangFuseConfig(langFuseConfig as LangFuseConfig)
  }

  const handleTracingConfigUpdated = async (provider: TracingProvider) => {
    // call api to hide secret key value
    const { tracing_config } = await doFetchTracingConfig({ appId, provider })
    if (provider === TracingProvider.langSmith)
      setLangSmithConfig(tracing_config as LangSmithConfig)
    else
      setLangFuseConfig(tracing_config as LangFuseConfig)
  }

  const handleTracingConfigRemoved = (provider: TracingProvider) => {
    if (provider === TracingProvider.langSmith)
      setLangSmithConfig(null)
    else
      setLangFuseConfig(null)
    if (provider === inUseTracingProvider) {
      handleTracingStatusChange({
        enabled: false,
        tracing_provider: null,
      }, true)
    }
  }

  useEffect(() => {
    (async () => {
      const tracingStatus = await fetchTracingStatus({ appId })
      setTracingStatus(tracingStatus)
      await fetchTracingConfig()
      setLoaded()
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [controlShowPopup, setControlShowPopup] = useState<number>(0)
  const showPopup = useCallback(() => {
    setControlShowPopup(Date.now())
  }, [setControlShowPopup])
  if (!isLoaded) {
    return (
      <div className='flex items-center justify-between mb-3'>
        <Title className='h-[41px]' />
        <div className='w-[200px]'>
          <Loading />
        </div>
      </div>
    )
  }

  return (
    <div className={cn('mb-3 flex justify-between items-center')}>
      <Title className='h-[41px]' />
      <div
        className={cn(
          'flex items-center p-2 rounded-xl bg-background-default-dodge border-t border-l-[0.5px] border-effects-highlight shadow-xs cursor-pointer hover:bg-background-default-lighter hover:border-effects-highlight-lightmode-off',
          controlShowPopup && 'bg-background-default-lighter border-effects-highlight-lightmode-off',
        )}
        onClick={showPopup}
      >
        {!inUseTracingProvider && (
          <>
            <TracingIcon size='md' />
            <div className='mx-2 system-sm-semibold text-text-secondary'>{t(`${I18N_PREFIX}.title`)}</div>
            <div className='p-1 rounded-md'>
              <RiEqualizer2Line className='w-4 h-4 text-text-tertiary' />
            </div>
            <Divider type='vertical' className='h-3.5' />
            <div className='p-1 rounded-md'>
              <RiArrowDownDoubleLine className='w-4 h-4 text-text-tertiary' />
            </div>
          </>
        )}
        {hasConfiguredTracing && (
          <>
            <div className='ml-4 mr-1 flex items-center'>
              <Indicator color={enabled ? 'green' : 'gray'} />
              <div className='ml-1.5 system-xs-semibold-uppercase text-text-tertiary'>
                {t(`${I18N_PREFIX}.${enabled ? 'enabled' : 'disabled'}`)}
              </div>
            </div>
            <InUseProviderIcon className='ml-1 h-4' />
            <Divider type='vertical' className='h-3.5' />
            <div className='flex items-center' onClick={e => e.stopPropagation()}>
              <ConfigButton
                appId={appId}
                readOnly={readOnly}
                hasConfigured
                className='ml-2'
                enabled={enabled}
                onStatusChange={handleTracingEnabledChange}
                chosenProvider={inUseTracingProvider}
                onChooseProvider={handleChooseProvider}
                langSmithConfig={langSmithConfig}
                langFuseConfig={langFuseConfig}
                onConfigUpdated={handleTracingConfigUpdated}
                onConfigRemoved={handleTracingConfigRemoved}
                controlShowPopup={controlShowPopup}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default React.memo(Panel)
