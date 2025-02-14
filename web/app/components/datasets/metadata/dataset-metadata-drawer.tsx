'use client'
import type { FC } from 'react'
import React, { useCallback, useRef, useState } from 'react'
import type { MetadataItemWithValueLength } from './types'
import Drawer from '../../base/drawer'
import Button from '@/app/components/base/button'
import { RiAddLine, RiDeleteBinLine, RiEditLine } from '@remixicon/react'
import { getIcon } from './utils/get-icon'
import cn from '@/utils/classnames'
import Modal from '../../base/modal'
import Field from './field'
import Input from '@/app/components/base/input'
import { useTranslation } from 'react-i18next'
import produce from 'immer'
import Switch from '../../base/switch'
import Tooltip from '../../base/tooltip'
import CreateModal from '@/app/components/datasets/metadata/create-metadata-modal'
import { useBoolean, useHover } from 'ahooks'
import Confirm from '@/app/components/base/confirm'

const i18nPrefix = 'dataset.metadata.datasetMetadata'

type Props = {
  userMetadata: MetadataItemWithValueLength[]
  builtInMetadata: MetadataItemWithValueLength[]
  isBuiltInEnabled: boolean
  onIsBuiltInEnabledChange: (value: boolean) => void
  onClose: () => void
  onChange: (data: MetadataItemWithValueLength[]) => void
}

type ItemProps = {
  readonly?: boolean
  disabled?: boolean
  payload: MetadataItemWithValueLength
  onRename?: () => void
  onDelete?: () => void
}
const Item: FC<ItemProps> = ({
  readonly,
  disabled,
  payload,
  onRename,
  onDelete,
}) => {
  const { t } = useTranslation()
  const Icon = getIcon(payload.type)

  const handleRename = useCallback(() => {
    onRename?.()
  }, [onRename])

  const deleteBtnRef = useRef<HTMLDivElement>(null)
  const isDeleteHovering = useHover(deleteBtnRef)
  const [isShowDeleteConfirm, {
    setTrue: showDeleteConfirm,
    setFalse: hideDeleteConfirm,
  }] = useBoolean(false)
  const handleDelete = useCallback(() => {
    hideDeleteConfirm()
    onDelete?.()
  }, [hideDeleteConfirm, onDelete])

  return (
    <div
      key={payload.id}
      className={cn(
        !readonly && !disabled && 'group/item hover:shadow-xs cursor-pointer',
        'border border-components-panel-border-subtle rounded-md bg-components-panel-on-panel-item-bg',
        isDeleteHovering && 'border border-state-destructive-border bg-state-destructive-hover',
      )}
    >
      <div
        className={cn(
          'flex items-center h-8 px-2  justify-between',
          disabled && 'opacity-30', // not include border and bg
        )}
      >
        <div className='flex items-center h-full text-text-tertiary space-x-1'>
          <Icon className='shrink-0 size-4' />
          <div className='max-w-[250px] truncate system-sm-medium text-text-primary'>{payload.name}</div>
          <div className='shrink-0 system-xs-regular'>{payload.type}</div>
        </div>
        <div className='group-hover/item:hidden ml-2 shrink-0 system-xs-regular text-text-tertiary'>
          {disabled ? t(`${i18nPrefix}.disabled`) : t(`${i18nPrefix}.values`, { num: payload.valueLength || 0 })}
        </div>
        <div className='group-hover/item:flex hidden ml-2 items-center text-text-tertiary space-x-1'>
          <RiEditLine className='size-4 cursor-pointer' onClick={handleRename} />
          <div ref={deleteBtnRef} className='hover:text-text-destructive'>
            <RiDeleteBinLine className='size-4 cursor-pointer' onClick={showDeleteConfirm} />
          </div>
        </div>
        {isShowDeleteConfirm && (
          <Confirm
            isShow
            type='warning'
            title={'Confirm to delete'}
            content={`Are you sure you want to delete the metadata "${payload.name}"?`}
            onConfirm={handleDelete}
            onCancel={hideDeleteConfirm}
          />
        )}
      </div>
    </div>
  )
}

const DatasetMetadataDrawer: FC<Props> = ({
  userMetadata,
  builtInMetadata,
  isBuiltInEnabled,
  onIsBuiltInEnabledChange,
  onClose,
  onChange,
}) => {
  const { t } = useTranslation()
  const [isShowRenameModal, setIsShowRenameModal] = useState(false)
  const [currPayload, setCurrPayload] = useState<MetadataItemWithValueLength | null>(null)
  const [templeName, setTempleName] = useState('')
  const handleRename = useCallback((payload: MetadataItemWithValueLength) => {
    return () => {
      setCurrPayload(payload)
      setTempleName(payload.name)
      setIsShowRenameModal(true)
    }
  }, [setCurrPayload, setIsShowRenameModal])

  const handleAdd = useCallback((data: MetadataItemWithValueLength) => {
    const nextUserMetadata = produce(userMetadata, (draft) => {
      draft.push(data)
    })
    onChange(nextUserMetadata)
  }, [userMetadata, onChange])

  const handleRenamed = useCallback(() => {
    const nextUserMetadata = produce(userMetadata, (draft) => {
      const index = draft.findIndex(p => p.id === currPayload?.id)
      if (index !== -1)
        draft[index].name = templeName!
    })

    onChange(nextUserMetadata)
    setIsShowRenameModal(false)
  }, [currPayload, templeName, userMetadata, onChange])

  const handleDelete = useCallback((payload: MetadataItemWithValueLength) => {
    return () => {
      const nextUserMetadata = userMetadata.filter(p => p.id !== payload.id)
      onChange(nextUserMetadata)
    }
  }, [userMetadata, onChange])

  return (
    <Drawer
      isOpen={true}
      onClose={onClose}
      showClose
      title={t('dataset.metadata.metadata')}
      footer={null}
      panelClassname='px-4 block !max-w-[420px] my-2 rounded-l-2xl'
    >
      <div className='system-sm-regular text-text-tertiary'>{t(`${i18nPrefix}.description`)}</div>

      <CreateModal trigger={<Button variant='primary' className='mt-3'>
        <RiAddLine className='mr-1' />
        {t(`${i18nPrefix}.addMetaData`)}
      </Button>} hasBack onSave={handleAdd} />

      <div className='mt-3 space-y-1'>
        {userMetadata.map(payload => (
          <Item
            key={payload.id}
            payload={payload}
            onRename={handleRename(payload)}
            onDelete={handleDelete(payload)}
          />
        ))}
      </div>

      <div className='mt-3 flex h-6 items-center'>
        <Switch
          defaultValue={isBuiltInEnabled}
          onChange={onIsBuiltInEnabledChange}
        />
        <div className='ml-2 mr-0.5 system-sm-semibold text-text-secondary'>{t(`${i18nPrefix}.builtIn`)}</div>
        <Tooltip popupContent={<div className='max-w-[100px]'>{t(`${i18nPrefix}.builtInDescription`)}</div>} />
      </div>

      <div className='mt-1 space-y-1'>
        {builtInMetadata.map(payload => (
          <Item
            key={payload.id}
            readonly
            disabled={!isBuiltInEnabled}
            payload={payload}
          />
        ))}
      </div>

      {isShowRenameModal && (
        <Modal isShow title={t(`${i18nPrefix}.rename`)} onClose={() => setIsShowRenameModal(false)}>
          <Field label={t(`${i18nPrefix}.name`)}>
            <Input
              value={templeName}
              onChange={e => setTempleName(e.target.value)}
              placeholder={t(`${i18nPrefix}.namePlaceholder`)}
            />
          </Field>
          <div className='mt-4 flex justify-end'>
            <Button
              className='mr-2'
              onClick={() => {
                setIsShowRenameModal(false)
                setTempleName(currPayload!.name)
              }}>{t('common.operation.cancel')}</Button>
            <Button
              onClick={handleRenamed}
              variant='primary'
              disabled={!templeName}
            >{t('common.operation.save')}</Button>
          </div>
        </Modal>
      )}

    </Drawer>
  )
}
export default React.memo(DatasetMetadataDrawer)
