'use client'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Button from '../button'
import cn from '@/utils/classnames'

export type IDrawerProps = {
  title?: string
  description?: string
  panelClassname?: string
  children: React.ReactNode
  footer?: React.ReactNode
  mask?: boolean
  positionCenter?: boolean
  isOpen: boolean
  showClose?: boolean
  clickOutsideNotOpen?: boolean
  onClose: () => void
  onCancel?: () => void
  onOk?: () => void
}

export default function Drawer({
  title = '',
  description = '',
  panelClassname = '',
  children,
  footer,
  mask = true,
  positionCenter,
  showClose = false,
  isOpen,
  clickOutsideNotOpen,
  onClose,
  onCancel,
  onOk,
}: IDrawerProps) {
  const { t } = useTranslation()
  return (
    <Dialog
      unmount={false}
      open={isOpen}
      onClose={() => !clickOutsideNotOpen && onClose()}
      className="fixed z-30 inset-0 overflow-y-auto"
    >
      <div className={cn('flex w-screen h-screen justify-end', positionCenter && '!justify-center')}>
        {/* mask */}
        <div
          className={cn('z-40 fixed inset-0', mask && 'bg-black bg-opacity-30')}
        />
        <DialogPanel>
          <div className={cn('relative z-50 flex flex-col justify-between bg-white w-full max-w-sm p-6 overflow-hidden text-left align-middle shadow-xl', panelClassname)}>
            <>
              {title && <DialogTitle
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {title}
              </DialogTitle>}
              {showClose && <DialogTitle className="flex items-center mb-4" as="div">
                <XMarkIcon className='w-4 h-4 text-gray-500' onClick={onClose} />
              </DialogTitle>}
              {description && <Description className='text-gray-500 text-xs font-normal mt-2'>{description}</Description>}
              {children}
            </>
            {footer || (footer === null
              ? null
              : <div className="mt-10 flex flex-row justify-end">
                <Button
                  className='mr-2'
                  onClick={() => {
                    onCancel && onCancel()
                  }}>{t('common.operation.cancel')}</Button>
                <Button
                  onClick={() => {
                    onOk && onOk()
                  }}>{t('common.operation.save')}</Button>
              </div>)}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
