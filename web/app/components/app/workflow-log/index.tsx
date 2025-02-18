'use client'
import type { FC, SVGProps } from 'react'
import React, { useState } from 'react'
import useSWR from 'swr'
import { usePathname } from 'next/navigation'
import { useDebounce } from 'ahooks'
import { Trans, useTranslation } from 'react-i18next'
import Link from 'next/link'
import List from './list'
import Filter from './filter'
import Pagination from '@/app/components/base/pagination'
import Loading from '@/app/components/base/loading'
import { fetchWorkflowLogs } from '@/service/log'
import { APP_PAGE_LIMIT } from '@/config'
import type { App, AppMode } from '@/types/app'

export type ILogsProps = {
  appDetail: App
}

export type QueryParam = {
  status?: string
  keyword?: string
}

const ThreeDotsIcon = ({ className }: SVGProps<SVGElement>) => {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ''}>
    <path d="M5 6.5V5M8.93934 7.56066L10 6.5M10.0103 11.5H11.5103" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}
const EmptyElement: FC<{ appUrl: string }> = ({ appUrl }) => {
  const { t } = useTranslation()
  const pathname = usePathname()
  const pathSegments = pathname.split('/')
  pathSegments.pop()
  return <div className='flex h-full items-center justify-center'>
    <div className='bg-background-section-burn box-border h-fit w-[560px] rounded-2xl px-5 py-4'>
      <span className='text-text-secondary system-md-semibold'>{t('appLog.table.empty.element.title')}<ThreeDotsIcon className='relative -left-1.5 -top-3 inline' /></span>
      <div className='text-text-tertiary system-sm-regular mt-2'>
        <Trans
          i18nKey="appLog.table.empty.element.content"
          components={{ shareLink: <Link href={`${pathSegments.join('/')}/overview`} className='text-util-colors-blue-blue-600' />, testLink: <Link href={appUrl} className='text-util-colors-blue-blue-600' target='_blank' rel='noopener noreferrer' /> }}
        />
      </div>
    </div>
  </div>
}

const Logs: FC<ILogsProps> = ({ appDetail }) => {
  const { t } = useTranslation()
  const [queryParams, setQueryParams] = useState<QueryParam>({ status: 'all' })
  const [currPage, setCurrPage] = React.useState<number>(0)
  const debouncedQueryParams = useDebounce(queryParams, { wait: 500 })
  const [limit, setLimit] = React.useState<number>(APP_PAGE_LIMIT)

  const query = {
    page: currPage + 1,
    limit,
    ...(debouncedQueryParams.status !== 'all' ? { status: debouncedQueryParams.status } : {}),
    ...(debouncedQueryParams.keyword ? { keyword: debouncedQueryParams.keyword } : {}),
  }

  const getWebAppType = (appType: AppMode) => {
    if (appType !== 'completion' && appType !== 'workflow')
      return 'chat'
    return appType
  }

  const { data: workflowLogs, mutate } = useSWR({
    url: `/apps/${appDetail.id}/workflow-app-logs`,
    params: query,
  }, fetchWorkflowLogs)
  const total = workflowLogs?.total

  return (
    <div className='flex h-full flex-col'>
      <h1 className='text-text-primary system-xl-semibold'>{t('appLog.workflowTitle')}</h1>
      <p className='text-text-tertiary system-sm-regular'>{t('appLog.workflowSubtitle')}</p>
      <div className='flex max-h-[calc(100%-16px)] flex-1 flex-col py-4'>
        <Filter queryParams={queryParams} setQueryParams={setQueryParams} />
        {/* workflow log */}
        {total === undefined
          ? <Loading type='app' />
          : total > 0
            ? <List logs={workflowLogs} appDetail={appDetail} onRefresh={mutate} />
            : <EmptyElement appUrl={`${appDetail.site.app_base_url}/${getWebAppType(appDetail.mode)}/${appDetail.site.access_token}`} />
        }
        {/* Show Pagination only if the total is more than the limit */}
        {(total && total > APP_PAGE_LIMIT)
          ? <Pagination
            current={currPage}
            onChange={setCurrPage}
            total={total}
            limit={limit}
            onLimitChange={setLimit}
          />
          : null}
      </div>
    </div>
  )
}

export default Logs
