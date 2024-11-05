'use client'

import React from 'react'
import Button from '@/app/components/base/button'
import type { PluginDeclaration } from '../../../types'
import Card from '../../../card'
import Badge, { BadgeState } from '@/app/components/base/badge/index'
import { pluginManifestToCardPluginProps } from '../../utils'
import { useTranslation } from 'react-i18next'
import { installPackageFromGitHub } from '@/service/plugins'
import { RiLoader2Line } from '@remixicon/react'
import { usePluginTasksStore } from '@/app/components/plugins/plugin-page/store'
import checkTaskStatus from '../../base/check-task-status'
import { parseGitHubUrl } from '../../utils'

type LoadedProps = {
  uniqueIdentifier: string
  payload: PluginDeclaration
  repoUrl: string
  selectedVersion: string
  selectedPackage: string
  onBack: () => void
  onInstalled: () => void
  onFailed: (message?: string) => void
}

const i18nPrefix = 'plugin.installModal'

const Loaded: React.FC<LoadedProps> = ({
  uniqueIdentifier,
  payload,
  repoUrl,
  selectedVersion,
  selectedPackage,
  onBack,
  onInstalled,
  onFailed,
}) => {
  const { t } = useTranslation()
  const [isInstalling, setIsInstalling] = React.useState(false)
  const setPluginTasksWithPolling = usePluginTasksStore(s => s.setPluginTasksWithPolling)
  const { check } = checkTaskStatus()

  const handleInstall = async () => {
    if (isInstalling) return
    setIsInstalling(true)

    try {
      const { owner, repo } = parseGitHubUrl(repoUrl)
      const { all_installed: isInstalled, task_id: taskId } = await installPackageFromGitHub(
        `${owner}/${repo}`,
        selectedVersion,
        selectedPackage,
        uniqueIdentifier,
      )

      if (isInstalled) {
        onInstalled()
        return
      }

      setPluginTasksWithPolling()
      await check({
        taskId,
        pluginUniqueIdentifier: uniqueIdentifier,
      })
      onInstalled()
    }
    catch (e) {
      onFailed(e instanceof Error ? e.message : String(e))
    }
    finally {
      setIsInstalling(false)
    }
  }

  return (
    <>
      <div className='text-text-secondary system-md-regular'>
        <p>{t(`${i18nPrefix}.readyToInstall`)}</p>
      </div>
      <div className='flex p-2 items-start content-start gap-1 self-stretch flex-wrap rounded-2xl bg-background-section-burn'>
        <Card
          className='w-full'
          payload={pluginManifestToCardPluginProps(payload)}
          titleLeft={<Badge className='mx-1' size="s" state={BadgeState.Default}>{payload.version}</Badge>}
        />
      </div>
      <div className='flex justify-end items-center gap-2 self-stretch mt-4'>
        {!isInstalling && (
          <Button variant='secondary' className='min-w-[72px]' onClick={onBack}>
            {t('plugin.installModal.back')}
          </Button>
        )}
        <Button
          variant='primary'
          className='min-w-[72px] flex space-x-0.5'
          onClick={handleInstall}
          disabled={isInstalling}
        >
          {isInstalling && <RiLoader2Line className='w-4 h-4 animate-spin-slow' />}
          <span>{t(`${i18nPrefix}.${isInstalling ? 'installing' : 'install'}`)}</span>
        </Button>
      </div>
    </>
  )
}

export default Loaded
