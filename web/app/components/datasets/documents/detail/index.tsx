'use client'
import type { FC } from 'react'
import React, { useMemo, useState } from 'react'
import useSWR from 'swr'
import { createContext, useContext, useContextSelector } from 'use-context-selector'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import { omit } from 'lodash-es'
import { RiArrowLeftLine, RiLayoutRight2Line } from '@remixicon/react'
import { OperationAction, StatusItem } from '../list'
import DocumentPicker from '../../common/document-picker'
import Completed from './completed'
import Embedding from './embedding'
import Metadata from './metadata'
import SegmentAdd, { ProcessStatus } from './segment-add'
import BatchModal from './batch-modal'
import style from './style.module.css'
import cn from '@/utils/classnames'
import Divider from '@/app/components/base/divider'
import Loading from '@/app/components/base/loading'
import type { MetadataType } from '@/service/datasets'
import { checkSegmentBatchImportProgress, fetchDocumentDetail, segmentBatchImport } from '@/service/datasets'
import { ToastContext } from '@/app/components/base/toast'
import type { DocForm, ParentMode, ProcessMode } from '@/models/datasets'
import { useDatasetDetailContext } from '@/context/dataset-detail'
import FloatRightContainer from '@/app/components/base/float-right-container'
import useBreakpoints, { MediaType } from '@/hooks/use-breakpoints'

type DocumentContextValue = {
  datasetId?: string
  documentId?: string
  docForm: string
  mode?: ProcessMode
  parentMode?: ParentMode
}

export const DocumentContext = createContext<DocumentContextValue>({ docForm: '' })

export const useDocumentContext = (selector: (value: DocumentContextValue) => any) => {
  return useContextSelector(DocumentContext, selector)
}

type DocumentTitleProps = {
  datasetId: string
  extension?: string
  name?: string
  processMode?: ProcessMode
  parent_mode?: ParentMode
  iconCls?: string
  textCls?: string
  wrapperCls?: string
}

export const DocumentTitle: FC<DocumentTitleProps> = ({ datasetId, extension, name, processMode, parent_mode, wrapperCls }) => {
  return (
    <div className={cn('flex items-center justify-start flex-1 cursor-pointer', wrapperCls)}>
      {/* // todo: handle file change */}
      <DocumentPicker
        datasetId={datasetId}
        value={{
          name,
          extension,
          processMode,
          parentMode: parent_mode,
        }}
        onChange={(doc) => { console.log(doc) }}
      />
    </div>
  )
}

type Props = {
  datasetId: string
  documentId: string
}

const DocumentDetail: FC<Props> = ({ datasetId, documentId }) => {
  const router = useRouter()
  const { t } = useTranslation()

  const media = useBreakpoints()
  const isMobile = media === MediaType.mobile

  const { notify } = useContext(ToastContext)
  const { dataset } = useDatasetDetailContext()
  const embeddingAvailable = !!dataset?.embedding_available
  const [showMetadata, setShowMetadata] = useState(!isMobile)
  const [newSegmentModalVisible, setNewSegmentModalVisible] = useState(false)
  const [batchModalVisible, setBatchModalVisible] = useState(false)
  const [importStatus, setImportStatus] = useState<ProcessStatus | string>()
  const showNewSegmentModal = () => setNewSegmentModalVisible(true)
  const showBatchModal = () => setBatchModalVisible(true)
  const hideBatchModal = () => setBatchModalVisible(false)
  const resetProcessStatus = () => setImportStatus('')
  const checkProcess = async (jobID: string) => {
    try {
      const res = await checkSegmentBatchImportProgress({ jobID })
      setImportStatus(res.job_status)
      if (res.job_status === ProcessStatus.WAITING || res.job_status === ProcessStatus.PROCESSING)
        setTimeout(() => checkProcess(res.job_id), 2500)
      if (res.job_status === ProcessStatus.ERROR)
        notify({ type: 'error', message: `${t('datasetDocuments.list.batchModal.runError')}` })
    }
    catch (e: any) {
      notify({ type: 'error', message: `${t('datasetDocuments.list.batchModal.runError')}${'message' in e ? `: ${e.message}` : ''}` })
    }
  }
  const runBatch = async (csv: File) => {
    const formData = new FormData()
    formData.append('file', csv)
    try {
      const res = await segmentBatchImport({
        url: `/datasets/${datasetId}/documents/${documentId}/segments/batch_import`,
        body: formData,
      })
      setImportStatus(res.job_status)
      checkProcess(res.job_id)
    }
    catch (e: any) {
      notify({ type: 'error', message: `${t('datasetDocuments.list.batchModal.runError')}${'message' in e ? `: ${e.message}` : ''}` })
    }
  }

  const { data: documentDetail, error, mutate: detailMutate } = useSWR({
    action: 'fetchDocumentDetail',
    datasetId,
    documentId,
    params: { metadata: 'without' as MetadataType },
  }, apiParams => fetchDocumentDetail(omit(apiParams, 'action')))

  const { data: documentMetadata, error: metadataErr, mutate: metadataMutate } = useSWR({
    action: 'fetchDocumentDetail',
    datasetId,
    documentId,
    params: { metadata: 'only' as MetadataType },
  }, apiParams => fetchDocumentDetail(omit(apiParams, 'action')),
  )

  const backToPrev = () => {
    router.push(`/datasets/${datasetId}/documents`)
  }

  const isDetailLoading = !documentDetail && !error
  const isMetadataLoading = !documentMetadata && !metadataErr

  const embedding = ['queuing', 'indexing', 'paused'].includes((documentDetail?.display_status || '').toLowerCase())

  const handleOperate = (operateName?: string) => {
    if (operateName === 'delete')
      backToPrev()
    else
      detailMutate()
  }

  const mode = useMemo(() => {
    return documentDetail?.dataset_process_rule?.mode
  }, [documentDetail])

  const parentMode = useMemo(() => {
    return documentDetail?.dataset_process_rule.rules.parent_mode
  }, [documentDetail])

  const isFullDocMode = useMemo(() => {
    return mode === 'hierarchical' && parentMode === 'full-doc'
  }, [mode, parentMode])

  return (
    <DocumentContext.Provider value={{
      datasetId,
      documentId,
      docForm: documentDetail?.doc_form || '',
      mode,
      parentMode,
    }}>
      <div className='flex flex-col h-full'>
        <div className='flex items-center justify-between flex-wrap min-h-16 pl-3 pr-4 py-2.5 border-b border-b-divider-subtle'>
          <div onClick={backToPrev} className={'shrink-0 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-components-button-tertiary-bg'}>
            <RiArrowLeftLine className='text-components-button-ghost-text hover:text-text-tertiary w-4 h-4' />
          </div>
          <DocumentTitle
            datasetId={datasetId}
            extension={documentDetail?.data_source_info?.upload_file?.extension}
            name={documentDetail?.name}
            wrapperCls='mr-2'
            processMode={documentDetail?.dataset_process_rule?.mode}
          />
          <div className='flex items-center flex-wrap'>
            {embeddingAvailable && documentDetail && !documentDetail.archived && (
              <SegmentAdd
                importStatus={importStatus}
                clearProcessStatus={resetProcessStatus}
                showNewSegmentModal={showNewSegmentModal}
                showBatchModal={showBatchModal}
              />
            )}
            <Divider type='vertical' className='!bg-divider-regular !h-[14px] !mx-3' />
            <StatusItem
              status={documentDetail?.display_status || 'available'}
              scene='detail'
              errorMessage={documentDetail?.error || ''}
              textCls='font-semibold text-xs uppercase'
              detail={{
                enabled: documentDetail?.enabled || false,
                archived: documentDetail?.archived || false,
                id: documentId,
              }}
              datasetId={datasetId}
              onUpdate={handleOperate}
            />
            <OperationAction
              scene='detail'
              embeddingAvailable={embeddingAvailable}
              detail={{
                name: documentDetail?.name || '',
                enabled: documentDetail?.enabled || false,
                archived: documentDetail?.archived || false,
                id: documentId,
                data_source_type: documentDetail?.data_source_type || '',
                doc_form: documentDetail?.doc_form || '',
              }}
              datasetId={datasetId}
              onUpdate={handleOperate}
              className='!w-[200px]'
            />
            <button
              className={style.layoutRightIcon}
              onClick={() => setShowMetadata(!showMetadata)}
            >
              {/* // todo: change icon */}
              <RiLayoutRight2Line className={cn('w-4 h-4', showMetadata ? 'text-components-button-secondary-accent-text' : 'text-components-button-secondary-text')} />
            </button>
          </div>
        </div>
        <div className='flex flex-row flex-1' style={{ height: 'calc(100% - 4rem)' }}>
          {isDetailLoading
            ? <Loading type='app' />
            : <div className={`h-full w-full flex flex-col ${embedding ? 'px-6 py-3 sm:py-12 sm:px-16' : `relative pb-[30px] pt-3 ${isFullDocMode ? 'pl-11' : 'pl-5'} pr-11`}`}>
              {embedding
                ? <Embedding detail={documentDetail} detailUpdate={detailMutate} />
                : <Completed
                  embeddingAvailable={embeddingAvailable}
                  showNewSegmentModal={newSegmentModalVisible}
                  onNewSegmentModalChange={setNewSegmentModalVisible}
                  importStatus={importStatus}
                  archived={documentDetail?.archived}
                />
              }
            </div>
          }
          <FloatRightContainer showClose isOpen={showMetadata} onClose={() => setShowMetadata(false)} isMobile={isMobile} panelClassname='!justify-start' footer={null}>
            <Metadata
              docDetail={{ ...documentDetail, ...documentMetadata, doc_type: documentMetadata?.doc_type === 'others' ? '' : documentMetadata?.doc_type } as any}
              loading={isMetadataLoading}
              onUpdate={metadataMutate}
            />
          </FloatRightContainer>
        </div>
        <BatchModal
          isShow={batchModalVisible}
          onCancel={hideBatchModal}
          onConfirm={runBatch}
          docForm={documentDetail?.doc_form as DocForm}
        />
      </div>
    </DocumentContext.Provider>
  )
}

export default DocumentDetail
