import React, { type FC, useCallback, useState } from 'react'
import { RiFilter3Line } from '@remixicon/react'
import { WorkflowVersionFilterOptions } from '../../../types'
import { useFilterOptions } from './use-filter'
import FilterItem from './filter-item'
import FilterSwitch from './filter-switch'
import {
  PortalToFollowElem,
  PortalToFollowElemContent,
  PortalToFollowElemTrigger,
} from '@/app/components/base/portal-to-follow-elem'
import Divider from '@/app/components/base/divider'
import cn from '@/utils/classnames'

type FilterProps = {
  filterValue: WorkflowVersionFilterOptions
  isOnlyShowNamedVersions: boolean
  onClickFilterItem: (filter: WorkflowVersionFilterOptions) => void
  handleSwitch: (isOnlyShowNamedVersions: boolean) => void
}

const Filter: FC<FilterProps> = ({
  filterValue,
  isOnlyShowNamedVersions,
  onClickFilterItem,
  handleSwitch,
}) => {
  const [open, setOpen] = useState(false)
  const options = useFilterOptions()

  const handleOnClick = useCallback((value: WorkflowVersionFilterOptions) => {
    onClickFilterItem(value)
  }, [onClickFilterItem])

  const isFiltering = filterValue !== WorkflowVersionFilterOptions.all || isOnlyShowNamedVersions

  return (
    <PortalToFollowElem
      placement={'bottom-end'}
      offset={{
        mainAxis: 4,
        crossAxis: 55,
      }}
      open={open}
      onOpenChange={setOpen}
    >
      <PortalToFollowElemTrigger onClick={() => setOpen(v => !v)}>
        <div
          className={cn(
            'flex items-center justify-center w-6 h-6 p-0.5 cursor-pointer rounded-md',
            isFiltering ? 'bg-state-accent-active-alt' : 'hover:bg-state-base-hover',
          )}
        >
          <RiFilter3Line className={cn('w-4 h-4', isFiltering ? 'text-text-accent' : ' text-text-tertiary')} />
        </div>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent className='z-[12]'>
        <div className='flex flex-col w-[248px] rounded-xl border-[0.5px] border-components-panel-border bg-components-panel-bg-blur shadow-lg shadow-shadow-shadow-5 backdrop-blur-[5px]'>
          <div className='flex flex-col p-1'>
            {
              options.map((option) => {
                return (
                  <FilterItem
                    key={option.key}
                    item={option}
                    isSelected={filterValue === option.key}
                    onClick={handleOnClick}
                  />
                )
              })
            }
          </div>
          <Divider type='horizontal' className='h-[1px] bg-divider-subtle my-0' />
          <FilterSwitch enabled={isOnlyShowNamedVersions} handleSwitch={handleSwitch} />
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  )
}

export default Filter
