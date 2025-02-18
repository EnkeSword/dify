'use client'

import { useTranslation } from 'react-i18next'
import { RiCloseLine } from '@remixicon/react'
import s from './style.module.css'
import cn from '@/utils/classnames'
import Button from '@/app/components/base/button'
import Modal from '@/app/components/base/modal'
import { AlertTriangle } from '@/app/components/base/icons/src/vender/solid/alertsAndFeedback'
import type { Tag } from '@/app/components/base/tag-management/constant'

type TagRemoveModalProps = {
  show: boolean
  tag: Tag
  onConfirm: () => void
  onClose: () => void
}

const TagRemoveModal = ({ show, tag, onConfirm, onClose }: TagRemoveModalProps) => {
  const { t } = useTranslation()

  return (
    <Modal
      className={cn('w-[480px] max-w-[480px] p-8', s.bg)}
      isShow={show}
      onClose={() => { }}
    >
      <div className='absolute right-4 top-4 cursor-pointer p-2' onClick={onClose}>
        <RiCloseLine className='h-4 w-4 text-gray-500' />
      </div>
      <div className='h-12 w-12 rounded-xl border-[0.5px] border-gray-100 bg-white p-3 shadow-xl'>
        <AlertTriangle className='h-6 w-6 text-[rgb(247,144,9)]' />
      </div>
      <div className='mt-3 text-xl font-semibold leading-[30px] text-gray-900'>
        {`${t('common.tag.delete')} `}
        <span>{`"${tag.name}"`}</span>
      </div>
      <div className='my-1 text-sm leading-5 text-gray-500'>
        {t('common.tag.deleteTip')}
      </div>
      <div className='flex items-center justify-end pt-6'>
        <Button className='mr-2' onClick={onClose}>{t('common.operation.cancel')}</Button>
        <Button className='border-red-700' variant="warning" onClick={onConfirm}>{t('common.operation.delete')}</Button>
      </div>
    </Modal>
  )
}

export default TagRemoveModal
