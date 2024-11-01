'use client'
import type { FC } from 'react'
import React, { useEffect } from 'react'
import {
  RiArrowRightUpLine,
  RiBugLine,
} from '@remixicon/react'
import { useTranslation } from 'react-i18next'
import KeyValueItem from '../base/key-value-item'
import Tooltip from '@/app/components/base/tooltip'
import Button from '@/app/components/base/button'
import type { DebugInfo as DebugInfoTypes } from '../types'
import { fetchDebugKey } from '@/service/plugins'

const i18nPrefix = 'plugin.debugInfo'

const DebugInfo: FC = () => {
  const { t } = useTranslation()
  const [info, setInfo] = React.useState<DebugInfoTypes | null>(null)
  useEffect(() => {
    fetchDebugKey().then((res) => {
      setInfo(res)
    })
  }, [])
  return (
    <Tooltip
      triggerMethod='click'
      disabled={!info}
      popupContent={
        <>
          <div className='flex items-center gap-1 self-stretch'>
            <span className='flex flex-col justify-center items-start flex-grow flex-shrink-0 basis-0 text-text-secondary system-sm-semibold'>{t(`${i18nPrefix}.title`)}</span>
            <a href='' target='_blank' className='flex items-center gap-0.5 text-text-accent-light-mode-only cursor-pointer'>
              <span className='system-xs-medium'>{t(`${i18nPrefix}.viewDocs`)}</span>
              <RiArrowRightUpLine className='w-3 h-3' />
            </a>
          </div>
          <div className='space-y-0.5'>
            <KeyValueItem
              label={'Port'}
              value={`${info?.host}:${info?.port}`}
            />
            <KeyValueItem
              label={'Key'}
              value={info?.key || ''}
            />
          </div>
        </>
      }
      popupClassName='flex flex-col items-start w-[256px] px-4 py-3.5 gap-1 border border-components-panel-border
        rounded-xl bg-components-tooltip-bg shadows-shadow-lg z-50'
      asChild={false}
      position='bottom'
    >
      <Button className='w-full h-full p-2 text-components-button-secondary-text'>
        <RiBugLine className='w-4 h-4' />
      </Button>
    </Tooltip>
  )
}

export default React.memo(DebugInfo)
