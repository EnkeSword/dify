import Button from '@/app/components/base/button'
import { RiInstallLine, RiLoader2Line } from '@remixicon/react'
import type { ComponentProps, MouseEventHandler } from 'react'
import classNames from '@/utils/classnames'
import { useTranslation } from 'react-i18next'
import { useCheckInstalled, useInstallPackageFromMarketPlace } from '@/service/use-plugins'

type InstallPluginButtonProps = Omit<ComponentProps<typeof Button>, 'children' | 'loading'> & {
  uniqueIdentifier: string
  onSuccess?: () => void
}

export const InstallPluginButton = (props: InstallPluginButtonProps) => {
  const { className, uniqueIdentifier, onSuccess, ...rest } = props
  const { t } = useTranslation()
  const manifest = useCheckInstalled({
    pluginIds: [uniqueIdentifier],
    enabled: !!uniqueIdentifier,
  })
  const install = useInstallPackageFromMarketPlace({
    onSuccess() {
      manifest.refetch()
      onSuccess?.()
    },
  })
  const handleInstall: MouseEventHandler = (e) => {
    e.stopPropagation()
    install.mutate(uniqueIdentifier)
  }
  const isLoading = manifest.isLoading || install.isPending
  if (!manifest.data) return null
  if (manifest.data.plugins.some(plugin => plugin.id === uniqueIdentifier)) return null
  return <Button
    variant={'secondary'}
    disabled={isLoading}
    {...rest}
    onClick={handleInstall}
    className={classNames('flex items-center', className)}
  >
    {!isLoading ? t('workflow.nodes.agent.pluginInstaller.install') : t('workflow.nodes.agent.pluginInstaller.installing')}
    {!isLoading ? <RiInstallLine className='size-4 ml-1' /> : <RiLoader2Line className='size-4 ml-1 animate-spin' />}
  </Button>
}
