import {
  useMemo,
  useState,
} from 'react'
import {
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInstallLine,
} from '@remixicon/react'
import { useTranslation } from 'react-i18next'
import { usePluginTaskStatus } from './hooks'
import {
  PortalToFollowElem,
  PortalToFollowElemContent,
  PortalToFollowElemTrigger,
} from '@/app/components/base/portal-to-follow-elem'
import Tooltip from '@/app/components/base/tooltip'
import Button from '@/app/components/base/button'
import ProgressCircle from '@/app/components/base/progress-bar/progress-circle'
import CardIcon from '@/app/components/plugins/card/base/card-icon'
import cn from '@/utils/classnames'
import { useGetLanguage } from '@/context/i18n'
import useGetIcon from '@/app/components/plugins/install-plugin/base/use-get-icon'

const PluginTasks = () => {
  const { t } = useTranslation()
  const language = useGetLanguage()
  const [open, setOpen] = useState(false)
  const {
    errorPlugins,
    runningPlugins,
    successPlugins,
    totalPluginsLength,
    handleClearErrorPlugin,
  } = usePluginTaskStatus()
  const { getIconUrl } = useGetIcon()
  const runningPluginsLength = runningPlugins.length
  const errorPluginsLength = errorPlugins.length
  const successPluginsLength = successPlugins.length

  const isInstalling = runningPluginsLength > 0 && errorPluginsLength === 0
  const isInstallingWithError = runningPluginsLength > 0 && errorPluginsLength > 0
  const isSuccess = successPluginsLength === totalPluginsLength && totalPluginsLength > 0
  const isFailed = runningPluginsLength === 0 && (errorPluginsLength + successPluginsLength) === totalPluginsLength && totalPluginsLength > 0

  const tip = useMemo(() => {
    if (isInstalling)
      return t('plugin.task.installing', { installingLength: runningPlugins.length, totalLength: totalPluginsLength })

    if (isInstallingWithError)
      return t('plugin.task.installingWithError', { installingLength: runningPlugins.length, totalLength: totalPluginsLength, errorLength: errorPlugins.length })

    if (isFailed)
      return t('plugin.task.installError', { errorLength: errorPlugins.length })
  }, [isInstalling, isInstallingWithError, isFailed, errorPlugins, runningPlugins, totalPluginsLength, t])

  if (!totalPluginsLength)
    return null

  return (
    <div className='flex items-center'>
      <PortalToFollowElem
        open={open}
        onOpenChange={setOpen}
        placement='bottom-start'
        offset={{
          mainAxis: 4,
          crossAxis: 79,
        }}
      >
        <PortalToFollowElemTrigger
          onClick={() => {
            if (isFailed || isInstallingWithError)
              setOpen(v => !v)
          }}
        >
          <Tooltip popupContent={tip}>
            <div
              className={cn(
                'relative flex items-center justify-center w-8 h-8 rounded-lg border-[0.5px] border-components-button-secondary-border bg-components-button-secondary-bg shadow-xs hover:bg-components-button-secondary-bg-hover',
                (isInstallingWithError || isFailed) && 'border-components-button-destructive-secondary-border-hover bg-state-destructive-hover hover:bg-state-destructive-hover-alt cursor-pointer',
              )}
            >
              <RiInstallLine
                className={cn(
                  'w-4 h-4 text-components-button-secondary-text',
                  (isInstallingWithError || isFailed) && 'text-components-button-destructive-secondary-text',
                )}
              />
              <div className='absolute -right-1 -top-1'>
                {
                  isInstalling && (
                    <ProgressCircle
                      percentage={runningPlugins.length / totalPluginsLength * 100}
                    />
                  )
                }
                {
                  isInstallingWithError && (
                    <ProgressCircle
                      percentage={runningPlugins.length / totalPluginsLength * 100}
                      circleFillColor='fill-components-progress-brand-bg'
                      sectorFillColor='fill-components-progress-error-border'
                      circleStrokeColor='stroke-components-progress-error-border'
                    />
                  )
                }
                {
                  isSuccess && (
                    <RiCheckboxCircleFill className='w-3.5 h-3.5 text-text-success' />
                  )
                }
                {
                  isFailed && (
                    <RiErrorWarningFill className='w-3.5 h-3.5 text-text-destructive' />
                  )
                }
              </div>
            </div>
          </Tooltip>
        </PortalToFollowElemTrigger>
        <PortalToFollowElemContent className='z-10'>
          <div className='p-1 pb-2 w-[320px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg'>
            <div className='flex items-center px-2 pt-1 h-7 system-sm-semibold-uppercase'>
              {t('plugin.task.installedError', { errorLength: errorPlugins.length })}
            </div>
            {
              errorPlugins.map(errorPlugin => (
                <div
                  key={errorPlugin.plugin_unique_identifier}
                  className='flex items-center p-1 pl-2 h-8 rounded-lg hover:bg-state-base-hover'
                >
                  <div className='relative flex items-center justify-center mr-2 w-6 h-6 rounded-md border-[0.5px] border-components-panel-border-subtle bg-background-default-dodge'>
                    <RiErrorWarningFill className='absolute -right-0.5 -bottom-0.5 w-3 h-3 text-text-destructive' />
                    <CardIcon
                      size='tiny'
                      src={getIconUrl(errorPlugin.icon)}
                    />
                  </div>
                  <div className='grow system-md-regular text-text-secondary truncate'>
                    {errorPlugin.labels[language]}
                  </div>
                  <Button
                    size='small'
                    variant='ghost-accent'
                    onClick={() => handleClearErrorPlugin(errorPlugin.taskId, errorPlugin.plugin_unique_identifier)}
                  >
                    {t('common.operation.clear')}
                  </Button>
                </div>
              ))
            }
          </div>
        </PortalToFollowElemContent>
      </PortalToFollowElem>
    </div>
  )
}

export default PluginTasks
