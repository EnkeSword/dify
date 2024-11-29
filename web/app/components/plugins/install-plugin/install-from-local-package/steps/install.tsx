'use client'
import type { FC } from 'react'
import React, { useEffect } from 'react'
import { type PluginDeclaration, TaskStatus } from '../../../types'
import Card from '../../../card'
import { pluginManifestToCardPluginProps } from '../../utils'
import Button from '@/app/components/base/button'
import { Trans, useTranslation } from 'react-i18next'
import { RiLoader2Line } from '@remixicon/react'
import checkTaskStatus from '../../base/check-task-status'
import { useInstallPackageFromLocal, usePluginTaskList, useUpdatePackageFromMarketPlace } from '@/service/use-plugins'
import useCheckInstalled from '@/app/components/plugins/install-plugin/hooks/use-check-installed'
import Version from '../../base/version'

const i18nPrefix = 'plugin.installModal'

type Props = {
  uniqueIdentifier: string
  payload: PluginDeclaration
  onCancel: () => void
  onStartToInstall?: () => void
  onInstalled: () => void
  onFailed: (message?: string) => void
}

const Installed: FC<Props> = ({
  uniqueIdentifier,
  payload,
  onCancel,
  onStartToInstall,
  onInstalled,
  onFailed,
}) => {
  const { t } = useTranslation()
  const toInstallVersion = payload.version
  const pluginId = `${payload.author}/${payload.name}`
  const { installedInfo, isLoading } = useCheckInstalled({
    pluginIds: [pluginId],
    enabled: !!pluginId,
  })
  const installedInfoPayload = installedInfo?.[pluginId]
  const installedVersion = installedInfoPayload?.installedVersion
  const hasInstalled = !!installedVersion

  useEffect(() => {
    if (hasInstalled && uniqueIdentifier === installedInfoPayload.uniqueIdentifier)
      onInstalled()
  }, [hasInstalled])

  const [isInstalling, setIsInstalling] = React.useState(false)
  const { mutateAsync: installPackageFromLocal } = useInstallPackageFromLocal()
  const { mutateAsync: updatePackageFromMarketPlace } = useUpdatePackageFromMarketPlace()

  const {
    check,
    stop,
  } = checkTaskStatus()

  const handleCancel = () => {
    stop()
    onCancel()
  }

  const { handleRefetch } = usePluginTaskList()
  const handleInstall = async () => {
    if (isInstalling) return
    setIsInstalling(true)
    onStartToInstall?.()

    try {
      let taskId
      let isInstalled
      if (hasInstalled) {
        const {
          all_installed,
          task_id,
        } = await updatePackageFromMarketPlace({
          original_plugin_unique_identifier: installedInfoPayload.uniqueIdentifier,
          new_plugin_unique_identifier: uniqueIdentifier,
        })
        taskId = task_id
        isInstalled = all_installed
      }
      else {
        const {
          all_installed,
          task_id,
        } = await installPackageFromLocal(uniqueIdentifier)
        taskId = task_id
        isInstalled = all_installed
      }

      if (isInstalled) {
        onInstalled()
        return
      }
      handleRefetch()
      const { status, error } = await check({
        taskId,
        pluginUniqueIdentifier: uniqueIdentifier,
      })
      if (status === TaskStatus.failed) {
        onFailed(error)
        return
      }
      onInstalled()
    }
    catch (e) {
      if (typeof e === 'string') {
        onFailed(e)
        return
      }
      onFailed()
    }
  }

  return (
    <>
      <div className='flex flex-col px-6 py-3 justify-center items-start gap-4 self-stretch'>
        <div className='text-text-secondary system-md-regular'>
          <p>{t(`${i18nPrefix}.readyToInstall`)}</p>
          <p>
            <Trans
              i18nKey={`${i18nPrefix}.fromTrustSource`}
              components={{ trustSource: <span className='system-md-semibold' /> }}
            />
          </p>
        </div>
        <div className='flex p-2 items-start content-start gap-1 self-stretch flex-wrap rounded-2xl bg-background-section-burn'>
          <Card
            className='w-full'
            payload={pluginManifestToCardPluginProps(payload)}
            titleLeft={!isLoading && <Version
              hasInstalled={hasInstalled}
              installedVersion={installedVersion}
              toInstallVersion={toInstallVersion}
            />}
          />
        </div>
      </div>
      {/* Action Buttons */}
      <div className='flex p-6 pt-5 justify-end items-center gap-2 self-stretch'>
        {!isInstalling && (
          <Button variant='secondary' className='min-w-[72px]' onClick={handleCancel}>
            {t('common.operation.cancel')}
          </Button>
        )}
        <Button
          variant='primary'
          className='min-w-[72px] flex space-x-0.5'
          disabled={isInstalling || isLoading}
          onClick={handleInstall}
        >
          {isInstalling && <RiLoader2Line className='w-4 h-4 animate-spin-slow' />}
          <span>{t(`${i18nPrefix}.${isInstalling ? 'installing' : 'install'}`)}</span>
        </Button>
      </div>
    </>
  )
}
export default React.memo(Installed)
