'use client'
import type { FC } from 'react'
import React from 'react'
import { type MetadataItemWithEdit, UpdateType } from '../types'
import Label from './label'
import { RiDeleteBinLine } from '@remixicon/react'
import cn from '@/utils/classnames'
import InputHasSetMultipleValue from './input-has-set-multiple-value'
import InputCombined from './input-combined'
import EditedBeacon from './edited-beacon'

type Props = {
  payload: MetadataItemWithEdit
  onChange: (payload: MetadataItemWithEdit) => void
  onRemove: (id: string) => void
}

const EditMetadatabatchItem: FC<Props> = ({
  payload,
  onChange,
  onRemove,
}) => {
  const isUpdated = payload.isUpdated
  const isDeleted = payload.updateType === UpdateType.delete
  return (
    <div className='flex h-6 items-center space-x-0.5'>
      {isUpdated ? <EditedBeacon onReset={() => { }} /> : <div className='shrink-0 size-4' />}
      <Label text={payload.name} isDeleted={isDeleted} />
      {payload.isMultipleValue
        ? <InputHasSetMultipleValue onClear={() => onChange({ ...payload, isMultipleValue: false })} />
        : <InputCombined
          type={payload.type}
          value={payload.value}
          onChange={v => onChange({ ...payload, value: v as string })
          } />}

      <div
        className={
          cn(
            'p-1 rounded-md text-text-tertiary hover:bg-state-destructive-hover hover:text-text-destructive cursor-pointer',
            isDeleted && 'cursor-default bg-state-destructive-hover  text-text-destructive')
        }
        onClick={() => onRemove(payload.id)}
      >
        <RiDeleteBinLine className='size-4' />
      </div>
    </div>
  )
}
export default React.memo(EditMetadatabatchItem)
