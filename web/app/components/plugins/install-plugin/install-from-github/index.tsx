'use client'

import React, { useState } from 'react'
import Modal from '@/app/components/base/modal'
import Button from '@/app/components/base/button'
import type { Item } from '@/app/components/base/select'
import { PortalSelect } from '@/app/components/base/select'

type InstallFromGitHubProps = {
  onClose: () => void
}

type InstallStep = 'url' | 'version' | 'package' | 'installed'

const InstallFromGitHub: React.FC<InstallFromGitHubProps> = ({ onClose }) => {
  const [step, setStep] = useState<InstallStep>('url')
  const [repoUrl, setRepoUrl] = useState('')
  const [selectedVersion, setSelectedVersion] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('')

  // Mock data - replace with actual data fetched from the backend
  const versions: Item[] = [
    { value: '1.0.1', name: '1.0.1' },
    { value: '1.2.0', name: '1.2.0' },
    { value: '1.2.1', name: '1.2.1' },
    { value: '1.3.2', name: '1.3.2' },
  ]
  const packages: Item[] = [
    { value: 'package1', name: 'Package 1' },
    { value: 'package2', name: 'Package 2' },
    { value: 'package3', name: 'Package 3' },
  ]

  const handleNext = () => {
    switch (step) {
      case 'url':
        // TODO: Validate URL and fetch versions
        setStep('version')
        break
      case 'version':
        // TODO: Validate version and fetch packages
        setStep('package')
        break
      case 'package':
        // TODO: Handle installation
        setStep('installed')
        break
    }
  }

  const isInputValid = () => {
    switch (step) {
      case 'url':
        return !!repoUrl.trim()
      case 'version':
        return !!selectedVersion
      case 'package':
        return !!selectedPackage
      default:
        return true
    }
  }

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className='flex items-center gap-3'>
      <div className='flex w-[72px] items-center gap-2'>
        <div className='text-text-tertiary system-sm-medium'>
          {label}
        </div>
      </div>
      <div className='flex-grow overflow-hidden text-text-secondary text-ellipsis system-sm-medium'>
        {value}
      </div>
    </div>
  )

  return (
    <Modal
      isShow={true}
      onClose={onClose}
      className='flex min-w-[480px] p-0 flex-col items-start rounded-2xl border-[0.5px]
        border-components-panel-border bg-components-panel-bg shadows-shadow-xl'
      closable
    >
      <div className='flex pt-6 pl-6 pb-3 pr-14 items-start gap-2 self-stretch'>
        <div className='flex flex-col items-start gap-1 flex-grow'>
          <div className='self-stretch text-text-primary title-2xl-semi-bold'>
            Install plugin from GitHub
          </div>
          <div className='self-stretch text-text-tertiary system-xs-regular'>
            {step !== 'installed' && 'Please make sure that you only install plugins from a trusted source.'}
          </div>
        </div>
      </div>
      <div className={`flex px-6 py-3 flex-col justify-center items-start self-stretch ${step === 'installed' ? 'gap-2' : 'gap-4'}`}>
        {step === 'url' && (
          <>
            <label
              htmlFor='repoUrl'
              className='flex flex-col justify-center items-start self-stretch text-text-secondary'
            >
              <span className='system-sm-semibold'>GitHub repository</span>
            </label>
            <input
              type='url'
              id='repoUrl'
              name='repoUrl'
              value={repoUrl}
              onChange={e => setRepoUrl(e.target.value)} // TODO: needs to verify the url
              className='flex items-center self-stretch rounded-lg border border-components-input-border-active
                bg-components-input-bg-active shadows-shadow-xs p-2 gap-[2px] flex-grow overflow-hidden
                text-components-input-text-filled text-ellipsis system-sm-regular'
              placeholder='Please enter GitHub repo URL'
            />
          </>
        )}
        {step === 'version' && (
          <>
            <label
              htmlFor='version'
              className='flex flex-col justify-center items-start self-stretch text-text-secondary'
            >
              <span className='system-sm-semibold'>Select version</span>
            </label>
            <PortalSelect
              value={selectedVersion}
              onSelect={item => setSelectedVersion(item.value as string)}
              items={versions}
              placeholder="Please select a version"
              popupClassName='w-[432px] z-[1001]'
            />
          </>
        )}
        {step === 'package' && (
          <>
            <label
              htmlFor='package'
              className='flex flex-col justify-center items-start self-stretch text-text-secondary'
            >
              <span className='system-sm-semibold'>Select package</span>
            </label>
            <PortalSelect
              value={selectedPackage}
              onSelect={item => setSelectedPackage(item.value as string)}
              items={packages}
              placeholder="Please select a package"
              popupClassName='w-[432px] z-[1001]'
            />
          </>
        )}
        {step === 'installed' && (
          <>
            <div className='text-text-secondary system-md-regular'>The plugin has been installed successfully.</div>
            <div className='flex w-full p-4 flex-col justify-center items-start gap-2 rounded-2xl bg-background-section-burn'>
              {[
                { label: 'Repository', value: repoUrl },
                { label: 'Version', value: selectedVersion },
                { label: 'Package', value: selectedPackage },
              ].map(({ label, value }) => (
                <InfoRow key={label} label={label} value={value} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className='flex p-6 pt-5 justify-end items-center gap-2 self-stretch'>
        {step === 'installed'
          ? (
            <Button
              variant='primary'
              className='min-w-[72px]'
              onClick={onClose}
            >
            Close
            </Button>
          )
          : (
            <>
              <Button
                variant='secondary'
                className='min-w-[72px]'
                onClick={onClose}
              >
              Cancel
              </Button>
              <Button
                variant='primary'
                className='min-w-[72px]'
                onClick={handleNext}
                disabled={!isInputValid()}
              >
                {step === 'package' ? 'Install' : 'Next'}
              </Button>
            </>
          )}
      </div>
    </Modal>
  )
}

export default InstallFromGitHub
