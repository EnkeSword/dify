'use client'
import type { FC } from 'react'
import React from 'react'
import type { Plugin } from '../../../types'
import Card from '../../../card'
import Checkbox from '@/app/components/base/checkbox'
import Badge, { BadgeState } from '@/app/components/base/badge/index'
import useGetIcon from '../../base/use-get-icon'

type Props = {
  checked: boolean
  onCheckedChange: (plugin: Plugin) => void
  payload: Plugin
}

const LoadedItem: FC<Props> = ({
  checked,
  onCheckedChange,
  payload,
}) => {
  const { getIconUrl } = useGetIcon()
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        className='shrink-0'
        checked={checked}
        onCheck={() => onCheckedChange(payload)}
      />
      <Card
        className='grow'
        payload={{
          ...payload,
          icon: getIconUrl(payload.icon),
        }}
        titleLeft={payload.version ? <Badge className='mx-1' size="s" state={BadgeState.Default}>{payload.version}</Badge> : null}
      />
    </div>
  )
}

export default React.memo(LoadedItem)
