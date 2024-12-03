import PluginPage from '@/app/components/plugins/plugin-page'
import PluginsPanel from '@/app/components/plugins/plugin-page/plugins-panel'
import Marketplace from '@/app/components/plugins/marketplace'
import { getLocaleOnServer } from '@/i18n/server'

const PluginList = async () => {
  const locale = await getLocaleOnServer()
  return (
    <PluginPage
      plugins={<PluginsPanel />}
      marketplace={<Marketplace locale={locale} shouldExclude pluginTypeSwitchClassName='top-[60px]' />}
    />
  )
}

export const metadata = {
  title: 'Plugins - Dify',
}

export default PluginList
