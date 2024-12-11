'use client'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useSWR from 'swr'
import { omit } from 'lodash-es'
import { useBoolean } from 'ahooks'
import { useContext } from 'use-context-selector'
import SegmentCard from '../documents/detail/completed/SegmentCard'
import Textarea from './textarea'
import s from './style.module.css'
import HitDetail from './hit-detail'
import ModifyRetrievalModal from './modify-retrieval-modal'
import { generalResultData } from './assets/test-data'
import ResultItem from './components/result-item'
import cn from '@/utils/classnames'
import type { ExternalKnowledgeBaseHitTestingResponse, ExternalKnowledgeBaseHitTesting as ExternalKnowledgeBaseHitTestingType, HitTestingResponse, HitTesting as HitTestingType } from '@/models/datasets'
import Loading from '@/app/components/base/loading'
import Modal from '@/app/components/base/modal'
import Drawer from '@/app/components/base/drawer'
import Pagination from '@/app/components/base/pagination'
import FloatRightContainer from '@/app/components/base/float-right-container'
import { fetchTestingRecords } from '@/service/datasets'
import DatasetDetailContext from '@/context/dataset-detail'
import type { RetrievalConfig } from '@/types/app'
import useBreakpoints, { MediaType } from '@/hooks/use-breakpoints'
import useTimestamp from '@/hooks/use-timestamp'
const limit = 10

type Props = {
  datasetId: string
}

const RecordsEmpty: FC = () => {
  const { t } = useTranslation()
  return <div className='bg-gray-50 rounded-2xl p-5'>
    <div className={s.clockWrapper}>
      <div className={cn(s.clockIcon, 'w-5 h-5')}></div>
    </div>
    <div className='my-2 text-gray-500 text-sm'>{t('datasetHitTesting.noRecentTip')}</div>
  </div>
}

const HitTesting: FC<Props> = ({ datasetId }: Props) => {
  const { t } = useTranslation()
  const { formatTime } = useTimestamp()

  const media = useBreakpoints()
  const isMobile = media === MediaType.mobile

  const [hitResult, setHitResult] = useState<HitTestingResponse | undefined>() // 初始化记录为空数组
  // console.log(hitResult?.records)
  const [externalHitResult, setExternalHitResult] = useState<ExternalKnowledgeBaseHitTestingResponse | undefined>()
  const [submitLoading, setSubmitLoading] = useState(false)
  const [currParagraph, setCurrParagraph] = useState<{ paraInfo?: HitTestingType; showModal: boolean }>({ showModal: false })
  const [externalCurrParagraph, setExternalCurrParagraph] = useState<{ paraInfo?: ExternalKnowledgeBaseHitTestingType; showModal: boolean }>({ showModal: false })
  const [text, setText] = useState('')

  const [currPage, setCurrPage] = React.useState<number>(0)
  const { data: recordsRes, error, mutate: recordsMutate } = useSWR({
    action: 'fetchTestingRecords',
    datasetId,
    params: { limit, page: currPage + 1 },
  }, apiParams => fetchTestingRecords(omit(apiParams, 'action')))

  const total = recordsRes?.total || 0

  const { dataset: currentDataset } = useContext(DatasetDetailContext)
  const isExternal = currentDataset?.provider === 'external'

  const [retrievalConfig, setRetrievalConfig] = useState(currentDataset?.retrieval_model_dict as RetrievalConfig)
  const [isShowModifyRetrievalModal, setIsShowModifyRetrievalModal] = useState(false)
  const [isShowRightPanel, { setTrue: showRightPanel, setFalse: hideRightPanel, set: setShowRightPanel }] = useBoolean(!isMobile)
  const renderHitResults = (results: any[]) => (
    <div className='h-full flex flex-col py-3 px-4 rounded-t-2xl bg-background-body'>
      <div className='shrink-0 pl-2 text-text-primary font-semibold leading-6 mb-2'>
        {t('datasetHitTesting.hit.title', { num: results.length })}
      </div>
      <div className='grow overflow-y-auto space-y-2'>
        {results.map((record, idx) => (
          <ResultItem
            key={idx}
            payload={record}
          />
        ))}
      </div>
    </div>
  )

  const renderEmptyState = () => (
    // for test
    <div></div>
    // <div className='h-full flex flex-col justify-center items-center'>
    //   <div className={cn(docStyle.commonIcon, docStyle.targetIcon, '!bg-gray-200 !h-14 !w-14')} />
    //   <div className='text-gray-300 text-[13px] mt-3'>
    //     {t('datasetHitTesting.hit.emptyTip')}
    //   </div>
    // </div>
  )

  useEffect(() => {
    setShowRightPanel(!isMobile)
  }, [isMobile, setShowRightPanel])

  return (
    <div className={s.container}>
      <div className={s.leftDiv}>
        <div className={s.titleWrapper}>
          <h1 className={s.title}>{t('datasetHitTesting.title')}</h1>
          <p className={s.desc}>{t('datasetHitTesting.desc')}</p>
        </div>
        <Textarea
          datasetId={datasetId}
          setHitResult={setHitResult}
          setExternalHitResult={setExternalHitResult}
          onSubmit={showRightPanel}
          onUpdateList={recordsMutate}
          loading={submitLoading}
          setLoading={setSubmitLoading}
          setText={setText}
          text={text}
          isExternal={isExternal}
          onClickRetrievalMethod={() => setIsShowModifyRetrievalModal(true)}
          retrievalConfig={retrievalConfig}
          isEconomy={currentDataset?.indexing_technique === 'economy'}
        />
        <div className={cn(s.title, 'mt-8 mb-2')}>{t('datasetHitTesting.recents')}</div>
        {(!recordsRes && !error)
          ? (
            <div className='flex-1'><Loading type='app' /></div>
          )
          : recordsRes?.data?.length
            ? (
              <>
                <div className='grow overflow-y-auto'>
                  <table className={`w-full border-collapse border-0 mt-3 ${s.table}`}>
                    <thead className="sticky top-0 h-8 bg-white leading-8 border-b border-gray-200 text-gray-500 font-bold">
                      <tr>
                        <td className='w-28'>{t('datasetHitTesting.table.header.source')}</td>
                        <td>{t('datasetHitTesting.table.header.text')}</td>
                        <td className='w-48'>{t('datasetHitTesting.table.header.time')}</td>
                      </tr>
                    </thead>
                    <tbody className="text-gray-500">
                      {recordsRes?.data?.map((record) => {
                        return <tr
                          key={record.id}
                          className='group border-b border-gray-200 h-8 hover:bg-gray-50 cursor-pointer'
                          onClick={() => setText(record.content)}
                        >
                          <td className='w-24'>
                            <div className='flex items-center'>
                              <div className={cn(s[`${record.source}_icon`], s.commonIcon, 'mr-1')} />
                              <span className='capitalize'>{record.source.replace('_', ' ')}</span>
                            </div>
                          </td>
                          <td className='max-w-xs group-hover:text-primary-600'>{record.content}</td>
                          <td className='w-36'>
                            {formatTime(record.created_at, t('datasetHitTesting.dateTimeFormat') as string)}
                          </td>
                        </tr>
                      })}
                    </tbody>
                  </table>
                </div>
                {(total && total > limit)
                  ? <Pagination current={currPage} onChange={setCurrPage} total={total} limit={limit} />
                  : null}
              </>
            )
            : (
              <RecordsEmpty />
            )}
      </div>
      <FloatRightContainer panelClassname='!justify-start !overflow-y-auto' showClose isMobile={isMobile} isOpen={isShowRightPanel} onClose={hideRightPanel} footer={null}>
        <div className={cn(s.rightDiv, 'pt-3')}>
          {renderHitResults(generalResultData)}
          {submitLoading
            ? <div className={s.cardWrapper}>
              <SegmentCard
                loading={true}
                scene='hitTesting'
                className='h-[216px]'
              />
              <SegmentCard
                loading={true}
                scene='hitTesting'
                className='h-[216px]'
              />
            </div>
            : (
              (() => {
                if (!hitResult?.records.length && !externalHitResult?.records.length)
                  return renderEmptyState()

                if (hitResult?.records.length)
                  return renderHitResults(hitResult.records)

                return renderHitResults(externalHitResult?.records || [])
              })()
            )
          }
        </div>
      </FloatRightContainer>
      <Modal
        className={isExternal ? 'py-10 px-8' : 'w-full'}
        closable
        onClose={() => {
          setCurrParagraph({ showModal: false })
          setExternalCurrParagraph({ showModal: false })
        }}
        isShow={currParagraph.showModal || externalCurrParagraph.showModal}
      >
        {currParagraph.showModal && (
          <HitDetail
            segInfo={currParagraph.paraInfo?.segment}
          />
        )}
        {externalCurrParagraph.showModal && (
          <HitDetail
            segInfo={{
              id: 'external',
              content: externalCurrParagraph.paraInfo?.content,
            }}
          />
        )}
      </Modal>
      <Drawer isOpen={isShowModifyRetrievalModal} onClose={() => setIsShowModifyRetrievalModal(false)} footer={null} mask={isMobile} panelClassname='mt-16 mx-2 sm:mr-2 mb-3 !p-0 !max-w-[640px] rounded-xl'>
        <ModifyRetrievalModal
          indexMethod={currentDataset?.indexing_technique || ''}
          value={retrievalConfig}
          isShow={isShowModifyRetrievalModal}
          onHide={() => setIsShowModifyRetrievalModal(false)}
          onSave={(value) => {
            setRetrievalConfig(value)
            setIsShowModifyRetrievalModal(false)
          }}
        />
      </Drawer>
    </div>
  )
}

export default HitTesting
