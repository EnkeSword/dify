'use client'

import { useState } from 'react'
import {
  RiArrowDownSLine,
  RiCloseCircleFill,
  RiFilter3Line,
} from '@remixicon/react'
import {
  PortalToFollowElem,
  PortalToFollowElemContent,
  PortalToFollowElemTrigger,
} from '@/app/components/base/portal-to-follow-elem'
import Checkbox from '@/app/components/base/checkbox'
import cn from '@/utils/classnames'
import Input from '@/app/components/base/input'

type TagsFilterProps = {
  value: string[]
  onChange: (tags: string[]) => void
}
const TagsFilter = ({
  value,
  onChange,
}: TagsFilterProps) => {
  const [open, setOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const options = [
    {
      value: 'search',
      text: 'Search',
    },
    {
      value: 'image',
      text: 'Image',
    },
  ]
  const filteredOptions = options.filter(option => option.text.toLowerCase().includes(searchText.toLowerCase()))
  const handleCheck = (id: string) => {
    if (value.includes(id))
      onChange(value.filter(tag => tag !== id))
    else
      onChange([...value, id])
  }
  const selectedTagsLength = value.length

  return (
    <PortalToFollowElem
      placement='bottom-start'
      offset={{
        mainAxis: 4,
        crossAxis: -6,
      }}
      open={open}
      onOpenChange={setOpen}
    >
      <PortalToFollowElemTrigger onClick={() => setOpen(v => !v)}>
        <div className={cn(
          'flex items-center px-2 py-1 h-8 text-text-tertiary rounded-lg hover:bg-state-base-hover cursor-pointer',
          selectedTagsLength && 'text-text-secondary',
          open && 'bg-state-base-hover',
        )}>
          <div className='p-0.5'>
            <RiFilter3Line className='w-4 h-4' />
          </div>
          <div className={cn(
            'flex items-center p-1 system-sm-medium',
          )}>
            {
              !selectedTagsLength && 'All Tags'
            }
            {
              !!selectedTagsLength && value.slice(0, 2).join(',')
            }
            {
              selectedTagsLength > 2 && (
                <div className='ml-1 system-xs-medium text-text-tertiary'>
                  +{selectedTagsLength - 2}
                </div>
              )
            }
          </div>
          {
            !!selectedTagsLength && (
              <RiCloseCircleFill
                className='w-4 h-4 text-text-quaternary cursor-pointer'
                onClick={() => onChange([])}
              />
            )
          }
          {
            !selectedTagsLength && (
              <RiArrowDownSLine className='w-4 h-4' />
            )
          }
        </div>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent className='z-10'>
        <div className='w-[240px] border-[0.5px] border-components-panel-border bg-components-panel-bg-blur rounded-xl shadow-lg'>
          <div className='p-2 pb-1'>
            <Input
              showLeftIcon
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              placeholder='Search tags'
            />
          </div>
          <div className='p-1 max-h-[448px] overflow-y-auto'>
            {
              filteredOptions.map(option => (
                <div
                  key={option.value}
                  className='flex items-center px-2 py-1.5 h-7 rounded-lg cursor-pointer hover:bg-state-base-hover'
                >
                  <Checkbox
                    className='mr-1'
                    checked={value.includes(option.value)}
                    onCheck={() => handleCheck(option.value)}
                  />
                  <div className='px-1 system-sm-medium text-text-secondary'>
                    {option.text}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  )
}

export default TagsFilter
