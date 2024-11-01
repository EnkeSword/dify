'use client'
import { useMarketplaceContext } from '../context'
import SearchBox from './index'
import cn from '@/utils/classnames'

const SearchBoxWrapper = () => {
  const intersected = useMarketplaceContext(v => v.intersected)
  const searchPluginText = useMarketplaceContext(v => v.searchPluginText)
  const handleSearchPluginTextChange = useMarketplaceContext(v => v.handleSearchPluginTextChange)
  const filterPluginTags = useMarketplaceContext(v => v.filterPluginTags)
  const handleFilterPluginTagsChange = useMarketplaceContext(v => v.handleFilterPluginTagsChange)

  return (
    <SearchBox
      inputClassName={cn(
        'sticky top-3 mx-auto w-[640px]',
        !intersected && 'w-[508px] transition-[width] duration-300',
      )}
      search={searchPluginText}
      onSearchChange={handleSearchPluginTextChange}
      tags={filterPluginTags}
      onTagsChange={handleFilterPluginTagsChange}
      size='large'
    />
  )
}

export default SearchBoxWrapper
