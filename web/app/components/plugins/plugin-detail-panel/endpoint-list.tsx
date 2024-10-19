import React from 'react'
import { useTranslation } from 'react-i18next'
import { RiAddLine } from '@remixicon/react'
import EndpointCard from './endpoint-card'
import ActionButton from '@/app/components/base/action-button'
import Tooltip from '@/app/components/base/tooltip'

type Props = {
  declaration: any
  list: any[]
}

const EndpointList = ({
  declaration,
  list,
}: Props) => {
  const { t } = useTranslation()
  return (
    <div className='px-4 py-2 border-t border-divider-subtle'>
      <div className='mb-1 h-6 flex items-center justify-between text-text-secondary system-sm-semibold-uppercase'>
        <div className='flex items-center gap-0.5'>
          {t('plugin.detailPanel.endpoints')}
          <Tooltip
            popupContent={
              <div className='w-[180px]'>
                {t('appDebug.voice.voiceSettings.resolutionTooltip').split('\n').map(item => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            }
          />
        </div>
        <ActionButton>
          <RiAddLine className='w-4 h-4' />
        </ActionButton>
      </div>
      {list.length === 0 && (
        <div className='mb-1 p-3 flex justify-center rounded-[10px] bg-background-section text-text-tertiary system-xs-regular'>{t('plugin.detailPanel.endpointsEmpty')}</div>
      )}
      <div className='flex flex-col gap-2'>
        {list.map((item, index) => (
          <EndpointCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default EndpointList
