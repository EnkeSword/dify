import { handleDelete } from './actions'
import Card from '@/app/components/plugins/card'
import { extensionDallE, modelGPT4, toolNotion } from '@/app/components/plugins/card/card-mock'
import PluginItem from '@/app/components/plugins/plugin-item'
import CardMoreInfo from '@/app/components/plugins/card/card-more-info'
import InstallModelItem from '@/app/components/plugins/install-model-item'

const PluginList = async () => {
  const pluginList = [toolNotion, extensionDallE, modelGPT4]

  return (
    <div className='pb-3 bg-white'>
      <div className='mx-3 '>
        <h2 className='my-3'>Dify Plugin list</h2>
        <div className='grid grid-cols-2 gap-3'>
          {pluginList.map((plugin, index) => (
            <PluginItem key={index} payload={plugin as any} onDelete={handleDelete} />
          ))}
        </div>

        <h2 className='my-3'>Install Plugin / Package under bundle</h2>
        <div className='w-[512px] rounded-2xl bg-background-section-burn p-2'>
          <Card
            payload={toolNotion as any}
            descriptionLineRows={1}
            showVersion
          />
        </div>
        <h3 className='my-1'>Installed</h3>
        <div className='w-[512px] rounded-2xl bg-background-section-burn p-2'>
          <Card
            payload={toolNotion as any}
            descriptionLineRows={1}
            installed
          />
        </div>

        <h3 className='my-1'>Install model provide</h3>
        <div className='grid grid-cols-2 gap-3'>
          {pluginList.map((plugin, index) => (
            <InstallModelItem key={index} payload={plugin as any} />
          ))}
        </div>

        <div className='my-3 h-[px] bg-gray-50'></div>
        <h2 className='my-3'>Marketplace Plugin list</h2>
        <div className='grid grid-cols-4 gap-3'>
          {pluginList.map((plugin, index) => (
            <Card
              key={index}
              payload={plugin as any}
              footer={
                <CardMoreInfo downloadCount={index % 2 === 0 ? 1234 : 6} tags={index % 2 === 0 ? ['Search', 'Productivity'] : []} />
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Plugins - Card',
}

export default PluginList
