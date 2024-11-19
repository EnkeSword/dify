'use client'
import type { FC } from 'react'
import React, { useCallback } from 'react'
import type { PluginDeclaration } from '../../types'
import { InstallStep } from '../../types'
import Install from './steps/install'
import Installed from '../base/installed'
import { useInvalidateInstalledPluginList } from '@/service/use-plugins'

type Props = {
  step: InstallStep
  onStepChange: (step: InstallStep) => void,
  onClose: () => void
  uniqueIdentifier: string | null,
  manifest: PluginDeclaration | null,
  errorMsg: string | null,
  onError: (errorMsg: string) => void,
}

const ReadyToInstall: FC<Props> = ({
  step,
  onStepChange,
  onClose,
  uniqueIdentifier,
  manifest,
  errorMsg,
  onError,
}) => {
  const invalidateInstalledPluginList = useInvalidateInstalledPluginList()

  const handleInstalled = useCallback(() => {
    invalidateInstalledPluginList()
    onStepChange(InstallStep.installed)
  }, [invalidateInstalledPluginList, onStepChange])

  const handleFailed = useCallback((errorMsg?: string) => {
    onStepChange(InstallStep.installFailed)
    if (errorMsg)
      onError(errorMsg)
  }, [onError, onStepChange])

  return (
    <>
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
    </>
  )
}
export default React.memo(ReadyToInstall)
