'use client'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import useTimestamp from '@/hooks/use-timestamp'

type Props = {
  status: string
  executor?: string
  startTime?: number
  time?: number
  tokens?: number
  steps?: number
  showSteps?: boolean
}

const MetaData: FC<Props> = ({
  status,
  executor,
  startTime,
  time,
  tokens,
  steps = 1,
  showSteps = true,
}) => {
  const { t } = useTranslation()
  const { formatTime } = useTimestamp()

  return (
    <div className='relative'>
      <div className='text-text-tertiary system-xs-medium-uppercase h-6 py-1'>{t('runLog.meta.title')}</div>
      <div className='py-1'>
        <div className='flex'>
          <div className='text-text-tertiary system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5'>{t('runLog.meta.status')}</div>
          <div className='text-text-secondary system-xs-regular grow px-2 py-1.5'>
            {status === 'running' && (
              <div className='bg-text-quaternary my-1 h-2 w-16 rounded-sm'/>
            )}
            {status === 'succeeded' && (
              <span>SUCCESS</span>
            )}
            {status === 'partial-succeeded' && (
              <span>PARTIAL SUCCESS</span>
            )}
            {status === 'exception' && (
              <span>EXCEPTION</span>
            )}
            {status === 'failed' && (
              <span>FAIL</span>
            )}
            {status === 'stopped' && (
              <span>STOP</span>
            )}
          </div>
        </div>
        <div className='flex'>
          <div className='text-text-tertiary system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5'>{t('runLog.meta.executor')}</div>
          <div className='text-text-secondary system-xs-regular grow px-2 py-1.5'>
            {status === 'running' && (
              <div className='bg-text-quaternary my-1 h-2 w-[88px] rounded-sm'/>
            )}
            {status !== 'running' && (
              <span>{executor || 'N/A'}</span>
            )}
          </div>
        </div>
        <div className='flex'>
          <div className='text-text-tertiary system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5'>{t('runLog.meta.startTime')}</div>
          <div className='text-text-secondary system-xs-regular grow px-2 py-1.5'>
            {status === 'running' && (
              <div className='bg-text-quaternary my-1 h-2 w-[72px] rounded-sm'/>
            )}
            {status !== 'running' && (
              <span>{startTime ? formatTime(startTime, t('appLog.dateTimeFormat') as string) : '-'}</span>
            )}
          </div>
        </div>
        <div className='flex'>
          <div className='text-text-tertiary system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5'>{t('runLog.meta.time')}</div>
          <div className='text-text-secondary system-xs-regular grow px-2 py-1.5'>
            {status === 'running' && (
              <div className='bg-text-quaternary my-1 h-2 w-[72px] rounded-sm'/>
            )}
            {status !== 'running' && (
              <span>{time ? `${time.toFixed(3)}s` : '-'}</span>
            )}
          </div>
        </div>
        <div className='flex'>
          <div className='text-text-tertiary system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5'>{t('runLog.meta.tokens')}</div>
          <div className='text-text-secondary system-xs-regular grow px-2 py-1.5'>
            {status === 'running' && (
              <div className='bg-text-quaternary my-1 h-2 w-[48px] rounded-sm'/>
            )}
            {status !== 'running' && (
              <span>{`${tokens || 0} Tokens`}</span>
            )}
          </div>
        </div>
        {showSteps && (
          <div className='flex'>
            <div className='text-text-tertiary system-xs-regular w-[104px] shrink-0 truncate px-2 py-1.5'>{t('runLog.meta.steps')}</div>
            <div className='text-text-secondary system-xs-regular grow px-2 py-1.5'>
              {status === 'running' && (
                <div className='bg-text-quaternary my-1 h-2 w-[24px] rounded-sm'/>
              )}
              {status !== 'running' && (
                <span>{steps}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MetaData
