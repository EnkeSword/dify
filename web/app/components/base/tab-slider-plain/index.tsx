'use client'
import type { FC } from 'react'
import React from 'react'
import cn from '@/utils/classnames'

interface Option {
  value: string
  text: string | JSX.Element
}

interface ItemProps {
  className?: string
  isActive: boolean
  onClick: (v: string) => void
  option: Option
}
const Item: FC<ItemProps> = ({
  className,
  isActive,
  onClick,
  option,
}) => {
  return (
    <div
      key={option.value}
      className={cn('relative pb-2.5 text-text-tertiary system-sm-semibold-uppercase', !isActive && 'cursor-pointer', className)}
      onClick={() => !isActive && onClick(option.value)}
    >
      <div className={cn(isActive && 'text-text-primary')}>{option.text}</div>
      {isActive && (
        <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#155EEF]'></div>
      )}
    </div>
  )
}

interface Props {
  className?: string
  value: string
  onChange: (v: string) => void
  options: Option[]
  noBorderBottom?: boolean
  itemClassName?: string
}

const TabSlider: FC<Props> = ({
  className,
  value,
  onChange,
  options,
  noBorderBottom,
  itemClassName,
}) => {
  return (
    <div className={cn('flex space-x-6', !noBorderBottom && 'border-b border-[#EAECF0]', className)}>
      {options.map(option => (
        <Item
          isActive={option.value === value}
          option={option}
          onClick={onChange}
          key={option.value}
          className={itemClassName}
        />
      ))}
    </div>
  )
}
export default React.memo(TabSlider)
