'use client'
import type { FC } from 'react'
import React from 'react'
import {
  RiClipboardLine,
  RiDeleteBinLine,
} from '@remixicon/react'
import { useTranslation } from 'react-i18next'
import copy from 'copy-to-clipboard'
import NoData from './no-data'
import cn from '@/utils/classnames'
import type { SavedMessage } from '@/models/debug'
import { Markdown } from '@/app/components/base/markdown'
import Toast from '@/app/components/base/toast'
import ActionButton from '@/app/components/base/action-button'

export type ISavedItemsProps = {
  className?: string
  isShowTextToSpeech?: boolean
  list: SavedMessage[]
  onRemove: (id: string) => void
  onStartCreateContent: () => void
}

const SavedItems: FC<ISavedItemsProps> = ({
  className,
  list,
  onRemove,
  onStartCreateContent,
}) => {
  const { t } = useTranslation()

  return (
    <div className={cn('space-y-4', className)}>
      {list.length === 0
        ? (
          <NoData onStartCreateContent={onStartCreateContent} />
        )
        : (<>
          {list.map(({ id, answer }) => (
            <div key={id} className='relative'>
              <div className={cn(
                'p-4 bg-background-section-burn rounded-2xl',
              )}>
                <Markdown content={answer} />
              </div>
              <div className='mt-1 h-4 px-4 text-text-quaternary system-xs-regular'>
                <span>{answer.length} {t('common.unit.char')}</span>
              </div>
              <div className='absolute right-2 bottom-1'>
                <div className='ml-1 flex items-center gap-0.5 p-0.5 rounded-[10px] border-[0.5px] border-components-actionbar-border bg-components-actionbar-bg shadow-md backdrop-blur-sm'>
                  <ActionButton onClick={() => {
                    copy(answer)
                    Toast.notify({ type: 'success', message: t('common.actionMsg.copySuccessfully') })
                  }}>
                    <RiClipboardLine className='w-4 h-4' />
                  </ActionButton>
                  <ActionButton onClick={() => {
                    onRemove(id)
                  }}>
                    <RiDeleteBinLine className='w-4 h-4' />
                  </ActionButton>
                </div>
              </div>
            </div>
          ))}
        </>)}

    </div>
  )
}
export default React.memo(SavedItems)
