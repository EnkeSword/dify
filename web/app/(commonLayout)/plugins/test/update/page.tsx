'use client'
import { PluginSource } from '@/app/components/plugins/types'
import { useModalContext } from '@/context/modal-context'
import React from 'react'

const UpdatePlugin = () => {
  const { setShowUpdatePluginModal } = useModalContext()
  const handleUpdateFromMarketPlace = () => {
    setShowUpdatePluginModal({
      payload: {
        type: PluginSource.marketplace,
        marketPlace: {
          originalPackageInfo: {
            id: 'original_xxx',
          },
          targetPackageInfo: {
            id: 'target_xxx',
            payload: {} as any,
          },
        },
      },
      onCancelCallback: () => {
        console.log('canceled')
      },
      onSaveCallback: () => {
        console.log('saved')
      },
    })
  }
  const handleUpdateFromGithub = () => {
    setShowUpdatePluginModal({
      payload: {
        type: PluginSource.github,
        github: {
          originalPackageInfo: {
            id: '111',
            repo: 'aaa/bbb',
            version: 'xxx',
            url: 'aaa/bbb',
            currVersion: '1.2.3',
            currPackage: 'pack1',
          } as any,
        },
      },
      onCancelCallback: () => {
        console.log('canceled')
      },
      onSaveCallback: () => {
        console.log('saved')
      },
    })
  }

  return (
    <div>
      <div>更新组件</div>
      <div className='flex space-x-1'>
        <div className='underline cursor-pointer' onClick={handleUpdateFromMarketPlace}>从 Marketplace</div>
        <div className='underline cursor-pointer' onClick={handleUpdateFromGithub}>从 GitHub</div>
      </div>
    </div>
  )
}

export default React.memo(UpdatePlugin)
