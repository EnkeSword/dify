import type { FC } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '@/app/components/base/modal'
import Button from '@/app/components/base/button'
import { BookOpen01 } from '@/app/components/base/icons/src/vender/line/education'
import type { ApiBasedExtension } from '@/models/common'
import {
  addApiBasedExtension,
  updateApiBasedExtension,
} from '@/service/common'
import { useToastContext } from '@/app/components/base/toast'

export type ApiBasedExtensionData = {
  name?: string
  apiEndpoint?: string
  apiKey?: string
}

type ApiBasedExtensionModalProps = {
  data: ApiBasedExtension
  onCancel: () => void
  onSave?: (newData: ApiBasedExtension) => void
}
const ApiBasedExtensionModal: FC<ApiBasedExtensionModalProps> = ({
  data,
  onCancel,
  onSave,
}) => {
  const { t } = useTranslation()
  const [localeData, setLocaleData] = useState(data)
  const [loading, setLoading] = useState(false)
  const { notify } = useToastContext()
  const handleDataChange = (type: string, value: string) => {
    setLocaleData({ ...localeData, [type]: value })
  }
  const handleSave = async () => {
    setLoading(true)

    if (localeData && localeData.api_key && localeData.api_key?.length < 5) {
      notify({ type: 'error', message: t('common.apiBasedExtension.modal.apiKey.lengthError') })
      setLoading(false)
      return
    }

    try {
      let res: ApiBasedExtension = {}
      if (!data.id) {
        res = await addApiBasedExtension({
          url: '/api-based-extension',
          body: localeData,
        })
      }
      else {
        res = await updateApiBasedExtension({
          url: `/api-based-extension/${data.id}`,
          body: {
            ...localeData,
            api_key: data.api_key === localeData.api_key ? '[__HIDDEN__]' : localeData.api_key,
          },
        })

        notify({ type: 'success', message: t('common.actionMsg.modifiedSuccessfully') })
      }

      if (onSave)
        onSave(res)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      isShow
      onClose={() => { }}
      className='!w-[640px] !max-w-none !p-8 !pb-6'
    >
      <div className='text-text-primary mb-2 text-xl font-semibold'>
        {
          data.name
            ? t('common.apiBasedExtension.modal.editTitle')
            : t('common.apiBasedExtension.modal.title')
        }
      </div>
      <div className='py-2'>
        <div className='text-text-primary text-sm font-medium leading-9'>
          {t('common.apiBasedExtension.modal.name.title')}
        </div>
        <input
          value={localeData.name || ''}
          onChange={e => handleDataChange('name', e.target.value)}
          className='bg-components-input-bg-normal text-text-primary block h-9 w-full appearance-none rounded-lg px-3 text-sm outline-none'
          placeholder={t('common.apiBasedExtension.modal.name.placeholder') || ''}
        />
      </div>
      <div className='py-2'>
        <div className='text-text-primary flex h-9 items-center justify-between text-sm font-medium'>
          {t('common.apiBasedExtension.modal.apiEndpoint.title')}
          <a
            href={t('common.apiBasedExtension.linkUrl') || '/'}
            target='_blank' rel='noopener noreferrer'
            className='text-text-tertiary hover:text-text-accent group flex items-center text-xs font-normal'
          >
            <BookOpen01 className='text-text-tertiary group-hover:text-text-accent mr-1 h-3 w-3' />
            {t('common.apiBasedExtension.link')}
          </a>
        </div>
        <input
          value={localeData.api_endpoint || ''}
          onChange={e => handleDataChange('api_endpoint', e.target.value)}
          className='bg-components-input-bg-normal text-text-primary block h-9 w-full appearance-none rounded-lg px-3 text-sm outline-none'
          placeholder={t('common.apiBasedExtension.modal.apiEndpoint.placeholder') || ''}
        />
      </div>
      <div className='py-2'>
        <div className='text-text-primary text-sm font-medium leading-9'>
          {t('common.apiBasedExtension.modal.apiKey.title')}
        </div>
        <div className='flex items-center'>
          <input
            value={localeData.api_key || ''}
            onChange={e => handleDataChange('api_key', e.target.value)}
            className='bg-components-input-bg-normal text-text-primary mr-2 block h-9 grow appearance-none rounded-lg px-3 text-sm outline-none'
            placeholder={t('common.apiBasedExtension.modal.apiKey.placeholder') || ''}
          />
        </div>
      </div>
      <div className='mt-6 flex items-center justify-end'>
        <Button
          onClick={onCancel}
          className='mr-2'
        >
          {t('common.operation.cancel')}
        </Button>
        <Button
          variant='primary'
          disabled={!localeData.name || !localeData.api_endpoint || !localeData.api_key || loading}
          onClick={handleSave}
        >
          {t('common.operation.save')}
        </Button>
      </div>
    </Modal>
  )
}

export default ApiBasedExtensionModal
