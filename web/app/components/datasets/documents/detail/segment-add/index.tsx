'use client'
import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  RiAddLine,
  RiArrowDownSLine,
  RiErrorWarningFill,
  RiLoader2Line,
} from '@remixicon/react'
import cn from '@/utils/classnames'
import { CheckCircle } from '@/app/components/base/icons/src/vender/solid/general'
import Popover from '@/app/components/base/popover'

export type ISegmentAddProps = {
  importStatus: ProcessStatus | string | undefined
  clearProcessStatus: () => void
  showNewSegmentModal: () => void
  showBatchModal: () => void
}

export enum ProcessStatus {
  WAITING = 'waiting',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  ERROR = 'error',
}

const SegmentAdd: FC<ISegmentAddProps> = ({
  importStatus,
  clearProcessStatus,
  showNewSegmentModal,
  showBatchModal,
}) => {
  const { t } = useTranslation()

  if (importStatus) {
    return (
      <>
        {(importStatus === ProcessStatus.WAITING || importStatus === ProcessStatus.PROCESSING) && (
          <div className='relative overflow-hidden inline-flex items-center mr-2 px-2.5 py-2 text-components-button-secondary-accent-text
            bg-components-progress-bar-border rounded-lg border-[0.5px] border-components-progress-bar-border
            shadow-xs shadow-shadow-shadow-3 backdrop-blur-[5px]'>
            <div className={cn('absolute left-0 top-0 h-full bg-components-progress-bar-progress border-r-[1.5px] border-r-components-progress-bar-progress-highlight z-0', importStatus === ProcessStatus.WAITING ? 'w-3/12' : 'w-2/3')} />
            <RiLoader2Line className='animate-spin mr-1 w-4 h-4' />
            <span className='system-sm-medium z-10 pr-0.5'>{t('datasetDocuments.list.batchModal.processing')}</span>
          </div>
        )}
        {importStatus === ProcessStatus.COMPLETED && (
          <div className='relative inline-flex items-center mr-2 bg-components-panel-bg rounded-lg border-[0.5px] border-components-panel-border shadow-xs shadow-shadow-shadow-3 backdrop-blur-[5px] overflow-hidden'>
            <div className='inline-flex items-center px-2.5 py-2 text-text-success border-r border-r-divider-subtle'>
              <CheckCircle className='mr-1 w-4 h-4' />
              <span className='system-sm-medium pr-0.5'>{t('datasetDocuments.list.batchModal.completed')}</span>
            </div>
            <div className='m-1 inline-flex items-center'>
              <span className='system-xs-medium text-components-button-ghost-text hover:bg-components-button-ghost-bg-hover px-1.5 py-1 rounded-md cursor-pointer' onClick={clearProcessStatus}>{t('datasetDocuments.list.batchModal.ok')}</span>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-dataset-chunk-process-success-bg opacity-40 -z-10' />
          </div>
        )}
        {importStatus === ProcessStatus.ERROR && (
          <div className='relative inline-flex items-center mr-2 bg-components-panel-bg rounded-lg border-[0.5px] border-components-panel-border shadow-xs shadow-shadow-shadow-3 backdrop-blur-[5px] overflow-hidden'>
            <div className='inline-flex items-center px-2.5 py-2 text-text-destructive border-r border-r-divider-subtle'>
              <RiErrorWarningFill className='mr-1 w-4 h-4' />
              <span className='system-sm-medium pr-0.5'>{t('datasetDocuments.list.batchModal.error')}</span>
            </div>
            <div className='m-1 inline-flex items-center'>
              <span className='system-xs-medium text-components-button-ghost-text hover:bg-components-button-ghost-bg-hover px-1.5 py-1 rounded-md cursor-pointer' onClick={clearProcessStatus}>{t('datasetDocuments.list.batchModal.ok')}</span>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-dataset-chunk-process-error-bg opacity-40 -z-10' />
          </div>
        )}
      </>
    )
  }

  return (
    <div className='flex items-center rounded-lg border-[0.5px] border-components-button-secondary-border
      bg-components-button-secondary-bg shadow-xs shadow-shadow-shadow-3 backdrop-blur-[5px] relative z-20'>
      <div
        className='inline-flex items-center px-2.5 py-2 rounded-l-lg border-r-[1px] border-r-divider-subtle cursor-pointer hover:bg-state-base-hover'
        onClick={showNewSegmentModal}
      >
        <RiAddLine className='w-4 h-4 text-components-button-secondary-accent-text' />
        <span className='text-components-button-secondary-accent-text text-[13px] leading-[16px] font-medium capitalize px-0.5 ml-0.5'>
          {t('datasetDocuments.list.action.addButton')}
        </span>
      </div>
      <Popover
        position='br'
        manualClose
        trigger='click'
        htmlContent={
          <div className='w-full p-1'>
            <div
              className='py-1.5 px-2 flex items-center hover:bg-state-base-hover rounded-lg cursor-pointer text-text-secondary system-md-regular'
              onClick={showBatchModal}
            >
              {t('datasetDocuments.list.action.batchAdd')}
            </div>
          </div>
        }
        btnElement={
          <div className='flex justify-center items-center'>
            <RiArrowDownSLine className='w-4 h-4 text-components-button-secondary-accent-text'/>
          </div>
        }
        btnClassName={open => cn('!p-2 !border-0 !rounded-l-none !rounded-r-lg !hover:bg-state-base-hover shadow-xs shadow-shadow-3 backdrop-blur-[5px]',
          open ? '!bg-state-base-hover' : '')}
        popupClassName='!min-w-[128px] !bg-components-panel-bg-blur !rounded-xl border-[0.5px] !ring-0
          border-components-panel-border !shadow-xl !shadow-shadow-shadow-5 backdrop-blur-[5px]'
        className='min-w-[128px] h-fit'
      />
    </div>
  )
}
export default React.memo(SegmentAdd)
