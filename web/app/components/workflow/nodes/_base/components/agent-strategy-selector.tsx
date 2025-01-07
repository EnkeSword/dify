import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@/app/components/base/portal-to-follow-elem'
import type { ReactNode } from 'react'
import { memo, useMemo, useState } from 'react'
import type { Strategy } from './agent-strategy'
import classNames from '@/utils/classnames'
import { RiArrowDownSLine, RiArrowRightUpLine, RiErrorWarningFill } from '@remixicon/react'
import Tooltip from '@/app/components/base/tooltip'
import Link from 'next/link'
import { InstallPluginButton } from './install-plugin-button'
import ViewTypeSelect, { ViewType } from '../../../block-selector/view-type-select'
import SearchInput from '@/app/components/base/search-input'
import { MARKETPLACE_URL_PREFIX } from '@/config'
import Tools from '../../../block-selector/tools'
import { useTranslation } from 'react-i18next'
import { useStrategyProviders } from '@/service/use-strategy'
import type { StrategyPluginDetail } from '@/app/components/plugins/types'
import type { ToolWithProvider } from '../../../types'
import { CollectionType } from '@/app/components/tools/types'
import useGetIcon from '@/app/components/plugins/install-plugin/base/use-get-icon'
import { useStrategyInfo } from '../../agent/use-config'
import { SwitchPluginVersion } from './switch-plugin-version'

const NotFoundWarn = (props: {
  title: ReactNode,
  description: ReactNode
}) => {
  const { title, description } = props

  const { t } = useTranslation()
  return <Tooltip
    popupContent={
      <div className='space-y-1 text-xs'>
        <h3 className='text-text-primary font-semibold'>
          {title}
        </h3>
        <p className='text-text-secondary tracking-tight'>
          {description}
        </p>
        <p>
          <Link href={'/plugins'} className='text-text-accent tracking-tight'>
            {t('workflow.nodes.agent.linkToPlugin')}
          </Link>
        </p>
      </div>
    }
    needsDelay
  >
    <div>
      <RiErrorWarningFill className='text-text-destructive size-4' />
    </div>
  </Tooltip>
}

function formatStrategy(input: StrategyPluginDetail[], getIcon: (i: string) => string): ToolWithProvider[] {
  return input.map((item) => {
    const res: ToolWithProvider = {
      id: item.plugin_unique_identifier,
      author: item.declaration.identity.author,
      name: item.declaration.identity.name,
      description: item.declaration.identity.description as any,
      plugin_id: item.plugin_id,
      icon: getIcon(item.declaration.identity.icon),
      label: item.declaration.identity.label as any,
      type: CollectionType.all,
      tools: item.declaration.strategies.map(strategy => ({
        name: strategy.identity.name,
        author: strategy.identity.author,
        label: strategy.identity.label as any,
        description: strategy.description,
        parameters: strategy.parameters as any,
        output_schema: strategy.output_schema,
        labels: [],
      })),
      team_credentials: {},
      is_team_authorization: true,
      allow_delete: false,
      labels: [],
    }
    return res
  })
}

export type AgentStrategySelectorProps = {
  value?: Strategy,
  onChange: (value?: Strategy) => void,
}

export const AgentStrategySelector = memo((props: AgentStrategySelectorProps) => {
  const { value, onChange } = props
  const [open, setOpen] = useState(false)
  const [viewType, setViewType] = useState<ViewType>(ViewType.flat)
  const [query, setQuery] = useState('')
  const stra = useStrategyProviders()
  const { getIconUrl } = useGetIcon()
  const list = stra.data ? formatStrategy(stra.data, getIconUrl) : undefined
  const filteredTools = useMemo(() => {
    if (!list) return []
    return list.filter(tool => tool.name.toLowerCase().includes(query.toLowerCase()))
  }, [query, list])
  const { strategyStatus } = useStrategyInfo(
    value?.agent_strategy_provider_name,
    value?.agent_strategy_name,
  )

  const showPluginNotInstalledWarn = strategyStatus?.plugin?.source === 'external'
    && !strategyStatus.plugin.installed

  const showUnsupportedStrategy = strategyStatus?.plugin.source === 'external'
    && !strategyStatus?.isExistInPlugin

  const showSwitchVersion = !strategyStatus?.isExistInPlugin
    && strategyStatus?.plugin.source === 'marketplace' && strategyStatus.plugin.installed

  const showInstallButton = !strategyStatus?.isExistInPlugin
    && strategyStatus?.plugin.source === 'marketplace' && !strategyStatus.plugin.installed

  const icon = list?.find(
    coll => coll.tools?.find(tool => tool.name === value?.agent_strategy_name),
  )?.icon as string | undefined
  const { t } = useTranslation()

  return <PortalToFollowElem open={open} onOpenChange={setOpen} placement='bottom'>
    <PortalToFollowElemTrigger className='w-full'>
      <div
        className='h-8 p-1 gap-0.5 flex items-center rounded-lg bg-components-input-bg-normal w-full hover:bg-state-base-hover-alt select-none'
        onClick={() => setOpen(o => !o)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {icon && <div className='flex items-center justify-center w-6 h-6'><img
          src={icon}
          width={20}
          height={20}
          className='rounded-md border-[0.5px] border-components-panel-border-subtle bg-background-default-dodge'
          alt='icon'
        /></div>}
        <p
          className={classNames(value ? 'text-components-input-text-filled' : 'text-components-input-text-placeholder', 'text-xs px-1')}
        >
          {value?.agent_strategy_label || t('workflow.nodes.agent.strategy.selectTip')}
        </p>
        {value && <div className='ml-auto flex items-center gap-1'>
          {showInstallButton && <InstallPluginButton
            onClick={e => e.stopPropagation()}
            size={'small'}
            uniqueIdentifier={value.plugin_unique_identifier}
          />}
          {showPluginNotInstalledWarn
            ? <NotFoundWarn
              title={t('workflow.nodes.agent.pluginNotInstalled')}
              description={t('workflow.nodes.agent.pluginNotInstalledDesc')}
            />
            : showUnsupportedStrategy
              ? <NotFoundWarn
                title={t('workflow.nodes.agent.unsupportedStrategy')}
                description={t('workflow.nodes.agent.strategyNotFoundDesc')}
              />
              : <RiArrowDownSLine className='size-4 text-text-tertiary' />
          }
          {showSwitchVersion && <SwitchPluginVersion
            uniqueIdentifier={'langgenius/openai:12'}
            tooltip={t('workflow.nodes.agent.switchToNewVersion')}
            onChange={() => {
              // TODO: refresh all strategies
            }}
          />}
        </div>}
      </div>
    </PortalToFollowElemTrigger>
    <PortalToFollowElemContent className='z-10'>
      <div className='bg-components-panel-bg-blur border-components-panel-border border-[0.5px] rounded-md shadow overflow-hidden w-[388px]'>
        <header className='p-2 gap-1 flex'>
          <SearchInput placeholder={t('workflow.nodes.agent.strategy.searchPlaceholder')} value={query} onChange={setQuery} className={'w-full'} />
          <ViewTypeSelect viewType={viewType} onChange={setViewType} />
        </header>
        <main className="md:h-[300px] xl:h-[400px] 2xl:h-[564px] relative overflow-hidden">
          {/* TODO: fix when in list view show workflow as group label */}
          <Tools
            tools={filteredTools}
            viewType={viewType}
            onSelect={(_, tool) => {
              onChange({
                agent_strategy_name: tool!.tool_name,
                agent_strategy_provider_name: tool!.provider_name,
                agent_strategy_label: tool!.tool_label,
                agent_output_schema: tool!.output_schema,
                plugin_unique_identifier: tool!.provider_id,
              })
              setOpen(false)
            }}
            hasSearchText={false}
            showWorkflowEmpty={false}
            className='max-w-none'
            indexBarClassName='top-0 xl:top-36'
          />
          <div className='absolute bottom-0 px-4 py-2 flex items-center justify-center border-t border-divider-subtle text-text-accent-light-mode-only bg-components-panel-bg text-xs'>
            Find more in
            <Link href={MARKETPLACE_URL_PREFIX} className='flex ml-1'>
              Marketplace <RiArrowRightUpLine className='size-3' />
            </Link>
          </div>
        </main>
      </div>
    </PortalToFollowElemContent>
  </PortalToFollowElem>
})

AgentStrategySelector.displayName = 'AgentStrategySelector'
