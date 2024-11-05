'use client'

import React, { useCallback, useState } from 'react'
import Modal from '@/app/components/base/modal'
import type { PluginDeclaration } from '../../types'
import { InstallStep } from '../../types'
import Uploading from './steps/uploading'
import Install from './steps/install'
import Installed from '../base/installed'
import { useTranslation } from 'react-i18next'
import useGetIcon from '@/app/components/plugins/install-plugin/base/use-get-icon'
import { usePluginPageContext } from '../../plugin-page/context'

const i18nPrefix = 'plugin.installModal'

type InstallFromLocalPackageProps = {
  file: File
  onSuccess: () => void
  onClose: () => void
}

const InstallFromLocalPackage: React.FC<InstallFromLocalPackageProps> = ({
  file,
  onClose,
}) => {
  const { t } = useTranslation()
  // uploading -> !uploadFailed -> readyToInstall -> installed/failed
  const [step, setStep] = useState<InstallStep>(InstallStep.uploading)
  const [uniqueIdentifier, setUniqueIdentifier] = useState<string | null>(null)
  const [manifest, setManifest] = useState<PluginDeclaration | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const mutateInstalledPluginList = usePluginPageContext(v => v.mutateInstalledPluginList)

  const getTitle = useCallback(() => {
    if (step === InstallStep.uploadFailed)
      return t(`${i18nPrefix}.uploadFailed`)
    if (step === InstallStep.installed)
      return t(`${i18nPrefix}.installedSuccessfully`)
    if (step === InstallStep.installFailed)
      return t(`${i18nPrefix}.installFailed`)

    return t(`${i18nPrefix}.installPlugin`)
  }, [step, t])

  const { getIconUrl } = useGetIcon()

  const handleUploaded = useCallback(async (result: {
    uniqueIdentifier: string
    manifest: PluginDeclaration
  }) => {
    const {
      manifest,
      uniqueIdentifier,
    } = result
    const icon = await getIconUrl(manifest!.icon)
    setUniqueIdentifier(uniqueIdentifier)
    setManifest({
      ...manifest,
      icon,
    })
    setStep(InstallStep.readyToInstall)
  }, [getIconUrl])

  const handleUploadFail = useCallback((errorMsg: string) => {
    setErrorMsg(errorMsg)
    setStep(InstallStep.uploadFailed)
  }, [])

  const handleInstalled = useCallback(() => {
    mutateInstalledPluginList()
    setStep(InstallStep.installed)
  }, [mutateInstalledPluginList])

  const handleFailed = useCallback((errorMsg?: string) => {
    setStep(InstallStep.installFailed)
    if (errorMsg)
      setErrorMsg(errorMsg)
  }, [])

  return (
    <Modal
      isShow={true}
      onClose={onClose}
      className='flex min-w-[560px] p-0 flex-col items-start rounded-2xl border-[0.5px] border-components-panel-border bg-components-panel-bg shadows-shadow-xl'
      closable
    >
      <div className='flex pt-6 pl-6 pb-3 pr-14 items-start gap-2 self-stretch'>
        <div className='self-stretch text-text-primary title-2xl-semi-bold'>
          {getTitle()}
        </div>
      </div>
      {step === InstallStep.uploading && (
        <Uploading
          file={file}
          onCancel={onClose}
          onUploaded={handleUploaded}
          onFailed={handleUploadFail}
        />
      )}
      {
        step === InstallStep.readyToInstall && (
          <Install
            uniqueIdentifier={uniqueIdentifier!}
            payload={manifest!}
            onCancel={onClose}
            onInstalled={handleInstalled}
            onFailed={handleFailed}
          />
        )
      }
      {
        ([InstallStep.uploadFailed, InstallStep.installed, InstallStep.installFailed].includes(step)) && (
          <Installed
            payload={manifest}
            isFailed={[InstallStep.uploadFailed, InstallStep.installFailed].includes(step)}
            errMsg={errorMsg}
            onCancel={onClose}
          />
        )
      }
    </Modal>
  )
}

export default InstallFromLocalPackage
