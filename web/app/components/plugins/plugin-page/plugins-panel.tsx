'use client'
import { useMemo } from 'react'
import type { PluginDetail } from '../types'
import type { FilterState } from './filter-management'
import FilterManagement from './filter-management'
import List from './list'
import PluginDetailPanel from '@/app/components/plugins/plugin-detail-panel'
import { usePluginPageContext } from './context'
import { useDebounceFn } from 'ahooks'
import Empty from './empty'

const PluginsPanel = () => {
  const [filters, setFilters] = usePluginPageContext(v => [v.filters, v.setFilters]) as [FilterState, (filter: FilterState) => void]
  const pluginList = usePluginPageContext(v => v.installedPluginList) as PluginDetail[]
  const mutateInstalledPluginList = usePluginPageContext(v => v.mutateInstalledPluginList)

  const { run: handleFilterChange } = useDebounceFn((filters: FilterState) => {
    setFilters(filters)
  }, { wait: 500 })

  const filteredList = useMemo(() => {
    const { categories, searchQuery, tags } = filters
    const filteredList = pluginList.filter((plugin) => {
      return (
        (categories.length === 0 || categories.includes(plugin.declaration.category))
        && (tags.length === 0 || tags.some(tag => plugin.declaration.tags.includes(tag)))
        && (searchQuery === '' || plugin.plugin_id.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    })
    return filteredList
  }, [pluginList, filters])

  return (
    <>
      <div className='flex flex-col pt-1 pb-3 px-12 justify-center items-start gap-3 self-stretch'>
        <div className='h-px self-stretch bg-divider-subtle'></div>
        <FilterManagement
          onFilterChange={handleFilterChange}
        />
      </div>
      {filteredList.length > 0 ? (
        <div className='flex px-12 items-start content-start gap-2 flex-grow self-stretch flex-wrap'>
          <div className='w-full'>
            <List pluginList={filteredList} />
          </div>
        </div>
      ) : (
        <Empty />
      )}
      <PluginDetailPanel onDelete={() => mutateInstalledPluginList()}/>
    </>
  )
}

export default PluginsPanel
