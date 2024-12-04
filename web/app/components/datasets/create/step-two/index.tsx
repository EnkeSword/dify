'use client'
import type { FC, PropsWithChildren } from 'react'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useContext } from 'use-context-selector'
import {
  RiArrowLeftLine,
  RiCloseLine,
  RiSearchEyeLine,
} from '@remixicon/react'
import Link from 'next/link'
import Image from 'next/image'
import SettingCog from '../assets/setting-gear-mod.svg'
import OrangeEffect from '../assets/option-card-effect-orange.svg'
import FamilyMod from '../assets/family-mod.svg'
import Note from '../assets/note-mod.svg'
import FileList from '../assets/file-list-3-fill.svg'
import { indexMethodIcon } from '../icons'
import { PreviewContainer } from '../../preview/container'
import { ChunkContainer, QAPreview } from '../../chunk'
import { PreviewHeader } from '../../preview/header'
import DocumentPicker from '../../common/document-picker'
import s from './index.module.css'
import unescape from './unescape'
import escape from './escape'
import { OptionCard } from './option-card'
import LanguageSelect from './language-select'
import { DelimiterInput, MaxLengthInput, OverlapInput } from './inputs'
import cn from '@/utils/classnames'
import type { CrawlOptions, CrawlResultItem, CreateDocumentReq, CustomFile, FullDocumentDetail, PreProcessingRule, ProcessRule, Rules, createDocumentResponse } from '@/models/datasets'

import Button from '@/app/components/base/button'
import FloatRightContainer from '@/app/components/base/float-right-container'
import RetrievalMethodConfig from '@/app/components/datasets/common/retrieval-method-config'
import EconomicalRetrievalMethodConfig from '@/app/components/datasets/common/economical-retrieval-method-config'
import { type RetrievalConfig } from '@/types/app'
import { ensureRerankModelSelected, isReRankModelSelected } from '@/app/components/datasets/common/check-rerank-model'
import Toast from '@/app/components/base/toast'
import type { NotionPage } from '@/models/common'
import { DataSourceProvider } from '@/models/common'
import { DataSourceType, DocForm } from '@/models/datasets'
import { useDatasetDetailContext } from '@/context/dataset-detail'
import I18n from '@/context/i18n'
import { RETRIEVE_METHOD } from '@/types/app'
import useBreakpoints, { MediaType } from '@/hooks/use-breakpoints'
import { useDefaultModel, useModelList, useModelListAndDefaultModelAndCurrentProviderAndModel } from '@/app/components/header/account-setting/model-provider-page/hooks'
import { LanguagesSupported } from '@/i18n/language'
import ModelSelector from '@/app/components/header/account-setting/model-provider-page/model-selector'
import type { DefaultModel } from '@/app/components/header/account-setting/model-provider-page/declarations'
import { ModelTypeEnum } from '@/app/components/header/account-setting/model-provider-page/declarations'
import Checkbox from '@/app/components/base/checkbox'
import RadioCard from '@/app/components/base/radio-card'
import { MessageChatSquare } from '@/app/components/base/icons/src/public/common'
import { IS_CE_EDITION } from '@/config'
import Switch from '@/app/components/base/switch'
import Divider from '@/app/components/base/divider'
import { getNotionInfo, getWebsiteInfo, useCreateDocument, useCreateFirstDocument, useFetchDefaultProcessRule, useFetchFileIndexingEstimateForFile, useFetchFileIndexingEstimateForNotion, useFetchFileIndexingEstimateForWeb } from '@/service/knowledge/use-create-dataset'
import Loading from '@/app/components/base/loading'
import Badge from '@/app/components/base/badge'
import { SkeletonCircle, SkeletonContanier, SkeletonRectangle, SkeletonRow } from '@/app/components/base/skeleton'

const TextLabel: FC<PropsWithChildren> = (props) => {
  return <label className='text-text-secondary text-xs font-semibold leading-none'>{props.children}</label>
}

type StepTwoProps = {
  isSetting?: boolean
  documentDetail?: FullDocumentDetail
  isAPIKeySet: boolean
  onSetting: () => void
  datasetId?: string
  indexingType?: IndexingType
  retrievalMethod?: string
  dataSourceType: DataSourceType
  files: CustomFile[]
  notionPages?: NotionPage[]
  websitePages?: CrawlResultItem[]
  crawlOptions?: CrawlOptions
  websiteCrawlProvider?: DataSourceProvider
  websiteCrawlJobId?: string
  onStepChange?: (delta: number) => void
  updateIndexingTypeCache?: (type: string) => void
  updateRetrievalMethodCache?: (method: string) => void
  updateResultCache?: (res: createDocumentResponse) => void
  onSave?: () => void
  onCancel?: () => void
}

export enum SegmentType {
  AUTO = 'automatic',
  CUSTOM = 'custom',
}
export enum IndexingType {
  QUALIFIED = 'high_quality',
  ECONOMICAL = 'economy',
}

const DEFAULT_SEGMENT_IDENTIFIER = '\\n\\n'

type ParentChildConfig = {
  chunkForContext: 'paragraph' | 'full_doc'
  parent: {
    delimiter: string
    maxLength: number
  }
  child: {
    delimiter: string
    maxLength: number
  }
}

const defaultParentChildConfig: ParentChildConfig = {
  chunkForContext: 'paragraph',
  parent: {
    delimiter: '\\n\\n',
    maxLength: 4000,
  },
  child: {
    delimiter: '\\n\\n',
    maxLength: 4000,
  },
}

const StepTwo = ({
  isSetting,
  documentDetail,
  isAPIKeySet,
  onSetting,
  datasetId,
  indexingType,
  dataSourceType: inCreatePageDataSourceType,
  files,
  notionPages = [],
  websitePages = [],
  crawlOptions,
  websiteCrawlProvider = DataSourceProvider.fireCrawl,
  websiteCrawlJobId = '',
  onStepChange,
  updateIndexingTypeCache,
  updateResultCache,
  onSave,
  onCancel,
  updateRetrievalMethodCache,
}: StepTwoProps) => {
  const { t } = useTranslation()
  const { locale } = useContext(I18n)
  const media = useBreakpoints()
  const isMobile = media === MediaType.mobile

  const { dataset: currentDataset, mutateDatasetRes } = useDatasetDetailContext()
  const isInCreatePage = !datasetId || (datasetId && !currentDataset?.data_source_type)
  const dataSourceType = isInCreatePage ? inCreatePageDataSourceType : currentDataset?.data_source_type
  const [segmentationType, setSegmentationType] = useState<SegmentType>(SegmentType.AUTO)
  const [segmentIdentifier, doSetSegmentIdentifier] = useState(DEFAULT_SEGMENT_IDENTIFIER)
  const setSegmentIdentifier = useCallback((value: string) => {
    doSetSegmentIdentifier(value ? escape(value) : DEFAULT_SEGMENT_IDENTIFIER)
  }, [])
  const [max, setMax] = useState(4000) // default chunk length
  const [overlap, setOverlap] = useState(50)
  const [rules, setRules] = useState<PreProcessingRule[]>([])
  const [defaultConfig, setDefaultConfig] = useState<Rules>()
  const hasSetIndexType = !!indexingType
  const [indexType, setIndexType] = useState<IndexingType>(
    (indexingType
      || isAPIKeySet)
      ? IndexingType.QUALIFIED
      : IndexingType.ECONOMICAL,
  )
  const [isLanguageSelectDisabled, setIsLanguageSelectDisabled] = useState(false)
  const [docForm, setDocForm] = useState<DocForm | string>(
    (datasetId && documentDetail) ? documentDetail.doc_form : DocForm.TEXT,
  )
  const [docLanguage, setDocLanguage] = useState<string>(
    (datasetId && documentDetail) ? documentDetail.doc_language : (locale !== LanguagesSupported[1] ? 'English' : 'Chinese'),
  )
  const [QATipHide, setQATipHide] = useState(false)
  const [qaPreviewSwitched, setQAPreviewSwitched] = useState(false)

  const [parentChildConfig, setParentChildConfig] = useState<ParentChildConfig>(defaultParentChildConfig)

  const getIndexing_technique = () => indexingType || indexType

  const getProcessRule = () => {
    const processRule: ProcessRule = {
      rules: {} as any, // api will check this. It will be removed after api refactored.
      mode: segmentationType,
    }
    if (segmentationType === SegmentType.CUSTOM) {
      const ruleObj = {
        pre_processing_rules: rules,
        segmentation: {
          separator: unescape(segmentIdentifier),
          max_tokens: max,
          chunk_overlap: overlap,
        },
      }
      processRule.rules = ruleObj
    }
    return processRule
  }

  const fileIndexingEstimateQuery = useFetchFileIndexingEstimateForFile({
    docForm: docForm as DocForm,
    docLanguage,
    dataSourceType: DataSourceType.FILE,
    files,
    indexingTechnique: getIndexing_technique() as any,
    processRule: getProcessRule(),
    dataset_id: datasetId!,
  })
  const notionIndexingEstimateQuery = useFetchFileIndexingEstimateForNotion({
    docForm: docForm as DocForm,
    docLanguage,
    dataSourceType: DataSourceType.NOTION,
    notionPages,
    indexingTechnique: getIndexing_technique() as any,
    processRule: getProcessRule(),
    dataset_id: datasetId || '',
  })

  const websiteIndexingEstimateQuery = useFetchFileIndexingEstimateForWeb({
    docForm: docForm as DocForm,
    docLanguage,
    dataSourceType: DataSourceType.WEB,
    websitePages,
    crawlOptions,
    websiteCrawlProvider,
    websiteCrawlJobId,
    indexingTechnique: getIndexing_technique() as any,
    processRule: getProcessRule(),
    dataset_id: datasetId || '',
  })

  const currentEstimateMutation = dataSourceType === DataSourceType.FILE
    ? fileIndexingEstimateQuery
    : dataSourceType === DataSourceType.NOTION
      ? notionIndexingEstimateQuery
      : websiteIndexingEstimateQuery

  const fetchEstimate = useCallback(() => {
    if (dataSourceType === DataSourceType.FILE)
      fileIndexingEstimateQuery.mutate()

    if (dataSourceType === DataSourceType.NOTION)
      notionIndexingEstimateQuery.mutate()

    if (dataSourceType === DataSourceType.WEB)
      websiteIndexingEstimateQuery.mutate()
  }, [dataSourceType, fileIndexingEstimateQuery, notionIndexingEstimateQuery, websiteIndexingEstimateQuery])

  const estimate
    = dataSourceType === DataSourceType.FILE
      ? fileIndexingEstimateQuery.data
      : dataSourceType === DataSourceType.NOTION
        ? notionIndexingEstimateQuery.data
        : websiteIndexingEstimateQuery.data

  // const getIsEstimateReady = useCallback(() => {
  //   if (dataSourceType === DataSourceType.FILE)
  //     return fileIndexingEstimateQuery.isSuccess

  //   if (dataSourceType === DataSourceType.NOTION)
  //     return notionIndexingEstimateQuery.isSuccess

  //   if (dataSourceType === DataSourceType.WEB)
  //     return websiteIndexingEstimateQuery.isSuccess
  // }, [dataSourceType, fileIndexingEstimateQuery.isSuccess, notionIndexingEstimateQuery.isSuccess, websiteIndexingEstimateQuery.isSuccess])

  // const getFileName = (name: string) => {
  //   const arr = name.split('.')
  //   return arr.slice(0, -1).join('.')
  // }

  const getRuleName = (key: string) => {
    if (key === 'remove_extra_spaces')
      return t('datasetCreation.stepTwo.removeExtraSpaces')

    if (key === 'remove_urls_emails')
      return t('datasetCreation.stepTwo.removeUrlEmails')

    if (key === 'remove_stopwords')
      return t('datasetCreation.stepTwo.removeStopwords')
  }
  const ruleChangeHandle = (id: string) => {
    const newRules = rules.map((rule) => {
      if (rule.id === id) {
        return {
          id: rule.id,
          enabled: !rule.enabled,
        }
      }
      return rule
    })
    setRules(newRules)
  }
  const resetRules = () => {
    if (defaultConfig) {
      setSegmentIdentifier(defaultConfig.segmentation.separator)
      setMax(defaultConfig.segmentation.max_tokens)
      setOverlap(defaultConfig.segmentation.chunk_overlap!)
      setRules(defaultConfig.pre_processing_rules)
    }
    setParentChildConfig(defaultParentChildConfig)
  }

  const updatePreview = () => {
    if (segmentationType === SegmentType.CUSTOM && max > 4000) {
      Toast.notify({ type: 'error', message: t('datasetCreation.stepTwo.maxLengthCheck') })
      return
    }
    fetchEstimate()
    setQAPreviewSwitched(false)
  }

  const {
    modelList: rerankModelList,
    defaultModel: rerankDefaultModel,
    currentModel: isRerankDefaultModelValid,
  } = useModelListAndDefaultModelAndCurrentProviderAndModel(ModelTypeEnum.rerank)
  const { data: embeddingModelList } = useModelList(ModelTypeEnum.textEmbedding)
  const { data: defaultEmbeddingModel } = useDefaultModel(ModelTypeEnum.textEmbedding)
  const [embeddingModel, setEmbeddingModel] = useState<DefaultModel>(
    currentDataset?.embedding_model
      ? {
        provider: currentDataset.embedding_model_provider,
        model: currentDataset.embedding_model,
      }
      : {
        provider: defaultEmbeddingModel?.provider.provider || '',
        model: defaultEmbeddingModel?.model || '',
      },
  )
  const getCreationParams = () => {
    let params
    if (segmentationType === SegmentType.CUSTOM && overlap > max) {
      Toast.notify({ type: 'error', message: t('datasetCreation.stepTwo.overlapCheck') })
      return
    }
    if (segmentationType === SegmentType.CUSTOM && max > 4000) {
      Toast.notify({ type: 'error', message: t('datasetCreation.stepTwo.maxLengthCheck') })
      return
    }
    if (isSetting) {
      params = {
        original_document_id: documentDetail?.id,
        doc_form: docForm,
        doc_language: docLanguage,
        process_rule: getProcessRule(),
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        retrieval_model: retrievalConfig, // Readonly. If want to changed, just go to settings page.
        embedding_model: embeddingModel.model, // Readonly
        embedding_model_provider: embeddingModel.provider, // Readonly
      } as CreateDocumentReq
    }
    else { // create
      const indexMethod = getIndexing_technique()
      if (
        !isReRankModelSelected({
          rerankDefaultModel,
          isRerankDefaultModelValid: !!isRerankDefaultModelValid,
          rerankModelList,
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          retrievalConfig,
          indexMethod: indexMethod as string,
        })
      ) {
        Toast.notify({ type: 'error', message: t('appDebug.datasetConfig.rerankModelRequired') })
        return
      }
      const postRetrievalConfig = ensureRerankModelSelected({
        rerankDefaultModel: rerankDefaultModel!,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        retrievalConfig,
        indexMethod: indexMethod as string,
      })
      params = {
        data_source: {
          type: dataSourceType,
          info_list: {
            data_source_type: dataSourceType,
          },
        },
        indexing_technique: getIndexing_technique(),
        process_rule: getProcessRule(),
        doc_form: docForm,
        doc_language: docLanguage,

        retrieval_model: postRetrievalConfig,
        embedding_model: embeddingModel.model,
        embedding_model_provider: embeddingModel.provider,
      } as CreateDocumentReq
      if (dataSourceType === DataSourceType.FILE) {
        params.data_source.info_list.file_info_list = {
          file_ids: files.map(file => file.id || '').filter(Boolean),
        }
      }
      if (dataSourceType === DataSourceType.NOTION)
        params.data_source.info_list.notion_info_list = getNotionInfo(notionPages)

      if (dataSourceType === DataSourceType.WEB) {
        params.data_source.info_list.website_info_list = getWebsiteInfo({
          websiteCrawlProvider,
          websiteCrawlJobId,
          websitePages,
        })
      }
    }
    return params
  }

  const fetchDefaultProcessRuleMutation = useFetchDefaultProcessRule({
    onSuccess(data) {
      const separator = data.rules.segmentation.separator
      setSegmentIdentifier(separator)
      setMax(data.rules.segmentation.max_tokens)
      setOverlap(data.rules.segmentation.chunk_overlap!)
      setRules(data.rules.pre_processing_rules)
      setDefaultConfig(data.rules)
    },
    onError(error) {
      Toast.notify({
        type: 'error',
        message: `${error}`,
      })
    },
  })

  const getRulesFromDetail = () => {
    if (documentDetail) {
      const rules = documentDetail.dataset_process_rule.rules
      const separator = rules.segmentation.separator
      const max = rules.segmentation.max_tokens
      const overlap = rules.segmentation.chunk_overlap
      setSegmentIdentifier(separator)
      setMax(max)
      setOverlap(overlap as number)
      setRules(rules.pre_processing_rules)
      setDefaultConfig(rules)
    }
  }

  const getDefaultMode = () => {
    if (documentDetail)
      setSegmentationType(documentDetail.dataset_process_rule.mode)
  }

  const createFirstDocumentMutation = useCreateFirstDocument({
    onError(error) {
      Toast.notify({
        type: 'error',
        message: `${error}`,
      })
    },
  })
  const createDocumentMutation = useCreateDocument(datasetId!, {
    onError(error) {
      Toast.notify({
        type: 'error',
        message: `${error}`,
      })
    },
  })

  const isCreating = createFirstDocumentMutation.isPending || createDocumentMutation.isPending

  const createHandle = async () => {
    const params = getCreationParams()
    if (!params)
      return false

    if (!datasetId) {
      await createFirstDocumentMutation.mutateAsync(
        params,
        {
          onSuccess(data) {
            updateIndexingTypeCache && updateIndexingTypeCache(indexType as string)
            updateResultCache && updateResultCache(data)
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            updateRetrievalMethodCache && updateRetrievalMethodCache(retrievalConfig.search_method as string)
          },
        },
      )
    }
    else {
      await createDocumentMutation.mutateAsync(params, {
        onSuccess(data) {
          updateIndexingTypeCache && updateIndexingTypeCache(indexType as string)
          updateResultCache && updateResultCache(data)
        },
      })
    }
    if (mutateDatasetRes)
      mutateDatasetRes()
    onStepChange && onStepChange(+1)
    isSetting && onSave && onSave()
  }

  const handleDocformSwitch = (isQAMode: boolean) => {
    if (isQAMode)
      setDocForm(DocForm.QA)
    else
      setDocForm(DocForm.TEXT)
  }

  const previewSwitch = () => {
    setQAPreviewSwitched(true)
    setIsLanguageSelectDisabled(true)
    fetchEstimate()
  }

  const handleSelect = (language: string) => {
    setDocLanguage(language)
    // Switch language, re-cutter
    if (docForm === DocForm.QA && qaPreviewSwitched)
      previewSwitch()
  }

  const changeToEconomicalType = () => {
    if (!hasSetIndexType) {
      setIndexType(IndexingType.ECONOMICAL)
      setDocForm(DocForm.TEXT)
    }
  }

  useEffect(() => {
    // fetch rules
    if (!isSetting) {
      fetchDefaultProcessRuleMutation.mutate('/datasets/process-rule')
    }
    else {
      getRulesFromDetail()
      getDefaultMode()
    }
  }, [])

  useEffect(() => {
    if (indexingType === IndexingType.ECONOMICAL && docForm === DocForm.QA)
      setDocForm(DocForm.TEXT)
  }, [indexingType, docForm])

  useEffect(() => {
    // get indexing type by props
    if (indexingType)
      setIndexType(indexingType as IndexingType)

    else
      setIndexType(isAPIKeySet ? IndexingType.QUALIFIED : IndexingType.ECONOMICAL)
  }, [isAPIKeySet, indexingType, datasetId])

  const [retrievalConfig, setRetrievalConfig] = useState(currentDataset?.retrieval_model_dict || {
    search_method: RETRIEVE_METHOD.semantic,
    reranking_enable: false,
    reranking_model: {
      reranking_provider_name: rerankDefaultModel?.provider.provider,
      reranking_model_name: rerankDefaultModel?.model,
    },
    top_k: 3,
    score_threshold_enabled: false,
    score_threshold: 0.5,
  } as RetrievalConfig)

  return (
    <div className='flex w-full max-h-full h-full overflow-y-auto'>
      <div className='relative h-full w-full overflow-y-scroll'>
        <div className={cn(s.form, isMobile && '!px-4')}>
          <div className={s.label}>{t('datasetCreation.stepTwo.segmentation')}</div>
          <div className='max-w-[640px]'>
            <div className='space-y-4'>
              <OptionCard
                title={t('datasetCreation.stepTwo.general')}
                icon={<Image src={SettingCog} alt={t('datasetCreation.stepTwo.general')} />}
                activeHeaderClassName='bg-gradient-to-r from-[#EFF0F9] to-[#F9FAFB]'
                description={t('datasetCreation.stepTwo.generalTip')}
                isActive={SegmentType.AUTO === segmentationType}
                onClick={() => setSegmentationType(SegmentType.AUTO)}
                actions={
                  <>
                    <Button variant={'secondary-accent'} onClick={() => updatePreview()}>
                      <RiSearchEyeLine className='h-4 w-4 mr-1.5' />
                      {t('datasetCreation.stepTwo.previewChunk')}
                    </Button>
                    <Button variant={'ghost'} onClick={resetRules}>
                      {t('datasetCreation.stepTwo.reset')}
                    </Button>
                  </>
                }
              >
                <div className='space-y-4'>
                  <div className='flex gap-3'>
                    <DelimiterInput
                      value={segmentIdentifier}
                      onChange={e => setSegmentIdentifier(e.target.value)}
                    />
                    <MaxLengthInput
                      value={max}
                      onChange={setMax}
                    />
                    <OverlapInput
                      value={overlap}
                      min={1}
                      onChange={setOverlap}
                    />
                  </div>
                  <div className='space-y-2'>
                    <div className='w-full flex flex-col'>
                      <TextLabel>{t('datasetCreation.stepTwo.rules')}</TextLabel>
                      <div className='mt-4 space-y-2'>
                        {rules.map(rule => (
                          <div key={rule.id} className={s.ruleItem} onClick={() => {
                            ruleChangeHandle(rule.id)
                          }}>
                            <Checkbox
                              checked={rule.enabled}
                            />
                            <label className="ml-2 text-sm font-normal cursor-pointer text-gray-800">{getRuleName(rule.id)}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </OptionCard>
              <OptionCard
                title={t('datasetCreation.stepTwo.parentChild')}
                icon={<Image src={FamilyMod} alt={t('datasetCreation.stepTwo.parentChild')} />}
                effectImg={OrangeEffect.src}
                activeHeaderClassName='bg-gradient-to-r from-[#F9F1EE] to-[#F9FAFB]'
                description={t('datasetCreation.stepTwo.parentChildTip')}
                isActive={SegmentType.CUSTOM === segmentationType}
                onClick={() => setSegmentationType(SegmentType.CUSTOM)}
                actions={
                  <>
                    <Button variant={'secondary-accent'} onClick={() => updatePreview()}>
                      <RiSearchEyeLine className='h-4 w-4 mr-1.5' />
                      {t('datasetCreation.stepTwo.previewChunk')}
                    </Button>
                    <Button variant={'ghost'} onClick={resetRules}>
                      {t('datasetCreation.stepTwo.reset')}
                    </Button>
                  </>
                }
              >
                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <TextLabel>
                      {t('datasetCreation.stepTwo.parentChunkForContext')}
                    </TextLabel>
                    <RadioCard
                      icon={<Image src={Note} alt='' />}
                      title={t('datasetCreation.stepTwo.paragraph')}
                      description={t('datasetCreation.stepTwo.paragraphTip')}
                      isChosen={parentChildConfig.chunkForContext === 'paragraph'}
                      onChosen={() => setParentChildConfig(
                        {
                          ...parentChildConfig,
                          chunkForContext: 'paragraph',
                        },
                      )}
                      chosenConfig={
                        <div className='flex gap-2'>
                          <DelimiterInput
                            value={parentChildConfig.parent.delimiter}
                            onChange={e => setParentChildConfig({
                              ...parentChildConfig,
                              parent: {
                                ...parentChildConfig.parent,
                                delimiter: e.target.value,
                              },
                            })}
                          />
                          <MaxLengthInput
                            value={parentChildConfig.parent.maxLength}
                            onChange={value => setParentChildConfig({
                              ...parentChildConfig,
                              parent: {
                                ...parentChildConfig.parent,
                                maxLength: value,
                              },
                            })}
                          />
                        </div>
                      }
                    />
                    <RadioCard
                      icon={<Image src={FileList} alt='' />}
                      title={t('datasetCreation.stepTwo.fullDoc')}
                      description={t('datasetCreation.stepTwo.fullDocTip')}
                      onChosen={() => setParentChildConfig(
                        {
                          ...parentChildConfig,
                          chunkForContext: 'full_doc',
                        },
                      )}
                      isChosen={parentChildConfig.chunkForContext === 'full_doc'}
                    />
                  </div>

                  <div className='space-y-4'>
                    <TextLabel>
                      {t('datasetCreation.stepTwo.childChunkForRetrieval')}
                    </TextLabel>
                    <div className='flex gap-3 mt-2'>
                      <DelimiterInput
                        value={parentChildConfig.child.delimiter}
                        onChange={e => setParentChildConfig({
                          ...parentChildConfig,
                          child: {
                            ...parentChildConfig.child,
                            delimiter: e.target.value,
                          },
                        })}
                      />
                      <MaxLengthInput
                        value={parentChildConfig.child.maxLength}
                        onChange={value => setParentChildConfig({
                          ...parentChildConfig,
                          child: {
                            ...parentChildConfig.child,
                            maxLength: value,
                          },
                        })}
                      />
                    </div>

                    <div className='space-y-2'>
                      <TextLabel>
                        {t('datasetCreation.stepTwo.rules')}
                      </TextLabel>
                      <div className='space-y-2 mt-2'>
                        {rules.map(rule => (
                          <div key={rule.id} className={s.ruleItem} onClick={() => {
                            ruleChangeHandle(rule.id)
                          }}>
                            <Checkbox
                              checked={rule.enabled}
                            />
                            <label className="ml-2 text-sm font-normal cursor-pointer text-gray-800">{getRuleName(rule.id)}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </OptionCard>
            </div>
          </div>
          <Divider className='my-5' />
          <div className={s.label}>{t('datasetCreation.stepTwo.indexMode')}</div>
          <div className='max-w-[640px]'>
            <div className='flex items-center gap-3 flex-wrap sm:flex-nowrap'>
              {(!hasSetIndexType || (hasSetIndexType && indexingType === IndexingType.QUALIFIED)) && (
                <div
                  className={cn(
                    s.radioItem,
                    s.indexItem,
                    !isAPIKeySet && s.disabled,
                    !hasSetIndexType && indexType === IndexingType.QUALIFIED && s.active,
                    hasSetIndexType && s.disabled,
                    hasSetIndexType && '!w-full !min-h-[96px]',
                  )}
                  onClick={() => {
                    if (isAPIKeySet)
                      setIndexType(IndexingType.QUALIFIED)
                  }}
                >
                  <div className='h-8 p-1.5 bg-white rounded-lg border border-components-panel-border-subtle justify-center items-center inline-flex absolute left-5 top-[18px]'>
                    <Image src={indexMethodIcon.high_quality} alt='Gold Icon' width={20} height={20} />
                  </div>
                  {!hasSetIndexType && <span className={cn(s.radio)} />}
                  <div className={s.typeHeader}>
                    <div className={s.title}>
                      {t('datasetCreation.stepTwo.qualified')}
                      {!hasSetIndexType && <span className={s.recommendTag}>{t('datasetCreation.stepTwo.recommend')}</span>}
                    </div>
                    <div className={s.tip}>{t('datasetCreation.stepTwo.qualifiedTip')}</div>
                  </div>
                  {!isAPIKeySet && (
                    <div className={s.warningTip}>
                      <span>{t('datasetCreation.stepTwo.warning')}&nbsp;</span>
                      <span className={s.click} onClick={onSetting}>{t('datasetCreation.stepTwo.click')}</span>
                    </div>
                  )}
                </div>
              )}

              {(!hasSetIndexType || (hasSetIndexType && indexingType === IndexingType.ECONOMICAL)) && (
                <div
                  className={cn(
                    s.radioItem,
                    s.indexItem,
                    !hasSetIndexType && indexType === IndexingType.ECONOMICAL && s.active,
                    hasSetIndexType && s.disabled,
                    hasSetIndexType && '!w-full !min-h-[96px]',
                  )}
                  onClick={changeToEconomicalType}
                >
                  <div className='h-8 p-1.5 bg-white rounded-lg border border-components-panel-border-subtle justify-center items-center inline-flex absolute left-5 top-[18px]'>
                    <Image src={indexMethodIcon.economical} alt='Economical Icon' width={20} height={20} />
                  </div>
                  {!hasSetIndexType && <span className={cn(s.radio)} />}
                  <div className={s.typeHeader}>
                    <div className={s.title}>{t('datasetCreation.stepTwo.economical')}</div>
                    <div className={s.tip}>{t('datasetCreation.stepTwo.economicalTip')}</div>
                  </div>
                </div>
              )}
            </div>
            {hasSetIndexType && indexType === IndexingType.ECONOMICAL && (
              <div className='mt-2 text-xs text-gray-500 font-medium'>
                {t('datasetCreation.stepTwo.indexSettingTip')}
                <Link className='text-text-accent' href={`/datasets/${datasetId}/settings`}>{t('datasetCreation.stepTwo.datasetSettingLink')}</Link>
              </div>
            )}
            {IS_CE_EDITION && indexType === IndexingType.QUALIFIED && (
              <div className='mt-2 rounded-xl bg-gray-50 border border-gray-100'>
                <div className='flex justify-between items-center px-5 py-4'>
                  <div className='flex justify-center items-center w-8 h-8 rounded-lg bg-indigo-50'>
                    <MessageChatSquare className='w-4 h-4' />
                  </div>
                  <div className='grow mx-3'>
                    <div className='mb-0.5 text-md font-medium text-gray-900'>{t('datasetCreation.stepTwo.QATitle')}</div>
                    <div className='inline-flex items-center text-[13px] leading-[18px] text-gray-500'>
                      <span className='pr-1'>{t('datasetCreation.stepTwo.QALanguage')}</span>
                      <LanguageSelect currentLanguage={docLanguage} onSelect={handleSelect} disabled={isLanguageSelectDisabled} />
                    </div>
                  </div>
                  <Switch
                    defaultValue={docForm === DocForm.QA}
                    onChange={handleDocformSwitch}
                    size='md'
                  />
                </div>
                {docForm === DocForm.QA && !QATipHide && (
                  <div className='flex justify-between items-center px-5 py-2 bg-orange-50 border-t border-amber-100 rounded-b-xl text-[13px] leading-[18px] text-medium text-amber-500'>
                    {t('datasetCreation.stepTwo.QATip')}
                    <RiCloseLine className='w-4 h-4 text-gray-500 cursor-pointer' onClick={() => setQATipHide(true)} />
                  </div>
                )}
              </div>
            )}
            {/* Embedding model */}
            {indexType === IndexingType.QUALIFIED && (
              <div className='mt-6 my-2'>
                <div className={cn(s.label, datasetId && 'flex justify-between items-center')}>{t('datasetSettings.form.embeddingModel')}</div>
                <ModelSelector
                  readonly={!!datasetId}
                  defaultModel={embeddingModel}
                  modelList={embeddingModelList}
                  onSelect={(model: DefaultModel) => {
                    setEmbeddingModel(model)
                  }}
                />
                {!!datasetId && (
                  <div className='mt-2 text-xs text-gray-500 font-medium'>
                    {t('datasetCreation.stepTwo.indexSettingTip')}
                    <Link className='text-text-accent' href={`/datasets/${datasetId}/settings`}>{t('datasetCreation.stepTwo.datasetSettingLink')}</Link>
                  </div>
                )}
              </div>
            )}
            <Divider className='my-5' />
            {/* Retrieval Method Config */}
            <div>
              {!datasetId
                ? (
                  <div className={s.label}>
                    <div className='shrink-0 mr-4'>{t('datasetSettings.form.retrievalSetting.title')}</div>
                    <div className='leading-[18px] text-xs font-normal text-gray-500'>
                      <a target='_blank' rel='noopener noreferrer' href='https://docs.dify.ai/guides/knowledge-base/create-knowledge-and-upload-documents#id-4-retrieval-settings' className='text-text-accent'>{t('datasetSettings.form.retrievalSetting.learnMore')}</a>
                      {t('datasetSettings.form.retrievalSetting.longDescription')}
                    </div>
                  </div>
                )
                : (
                  <div className={cn(s.label, 'flex justify-between items-center')}>
                    <div>{t('datasetSettings.form.retrievalSetting.title')}</div>
                  </div>
                )}

              <div className='max-w-[640px]'>
                {
                  getIndexing_technique() === IndexingType.QUALIFIED
                    ? (
                      <RetrievalMethodConfig
                        value={retrievalConfig}
                        onChange={setRetrievalConfig}
                      />
                    )
                    : (
                      <EconomicalRetrievalMethodConfig
                        value={retrievalConfig}
                        onChange={setRetrievalConfig}
                      />
                    )
                }
              </div>
            </div>

            {!isSetting
              ? (
                <div className='flex items-center mt-8 py-2'>
                  <Button onClick={() => onStepChange && onStepChange(-1)}>
                    <RiArrowLeftLine className='w-4 h-4 mr-1' />
                    {t('datasetCreation.stepTwo.previousStep')}
                  </Button>
                  <Button className='ml-auto' loading={isCreating} variant='primary' onClick={createHandle}>{t('datasetCreation.stepTwo.nextStep')}</Button>
                </div>
              )
              : (
                <div className='flex items-center mt-8 py-2'>
                  <Button loading={isCreating} variant='primary' onClick={createHandle}>{t('datasetCreation.stepTwo.save')}</Button>
                  <Button className='ml-2' onClick={onCancel}>{t('datasetCreation.stepTwo.cancel')}</Button>
                </div>
              )}
          </div>
        </div>
      </div>
      <FloatRightContainer isMobile={isMobile} isOpen={true} onClose={() => { }} footer={null}>
        <PreviewContainer
          header={<PreviewHeader
            title='Preview'
          >
            <div className='flex items-center gap-2'>
              <DocumentPicker datasetId={datasetId || ''} value={{}} onChange={console.log} />
              <Badge text='276 Estimated chunks' />
            </div>
          </PreviewHeader>}
          className={cn(s.previewWrap, isMobile && s.isMobile, 'relative h-full overflow-y-scroll space-y-4')}
        >
          {qaPreviewSwitched && docForm === DocForm.QA && estimate?.qa_preview && (
            estimate?.qa_preview.map(item => (
              <QAPreview key={item.question} qa={item} />
            ))
          )}
          {(docForm === DocForm.TEXT || !qaPreviewSwitched) && estimate?.preview && (
            estimate?.preview.map((item, index) => (
              <ChunkContainer
                key={item}
                label={`Chunk-${index + 1}`}
                characterCount={item.length}
              >
                {item}
              </ChunkContainer>
            ))
          )}
          {qaPreviewSwitched && docForm === DocForm.QA && !estimate?.qa_preview && (
            <div className='flex items-center justify-center h-[200px]'>
              <Loading type='area' />
            </div>
          )}
          {/* {!qaPreviewSwitched && !estimate?.preview && (
            <div className='flex items-center justify-center h-[200px]'>
              <Loading type='area' />
            </div>
          )} */}
          {currentEstimateMutation.isIdle && (
            <div className='h-full w-full flex items-center justify-center'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <RiSearchEyeLine className='size-10 text-text-empty-state-icon' />
                <p className='text-sm text-text-tertiary'>{'Click the \'Preview Chunk\' button on the left to load the preview'}</p>
              </div>
            </div>
          )}
          {currentEstimateMutation.isPending && (
            <div className='space-y-6'>
              {Array.from({ length: 10 }, (_, i) => (
                <SkeletonContanier key={i}>
                  <SkeletonRow>
                    <SkeletonRectangle className="w-20" />
                    <SkeletonCircle />
                    <SkeletonRectangle className="w-24" />
                  </SkeletonRow>
                  <SkeletonRectangle className="w-full" />
                  <SkeletonRectangle className="w-full" />
                  <SkeletonRectangle className="w-[422px]" />
                </SkeletonContanier>
              ))}
            </div>
          )}
        </PreviewContainer>
      </FloatRightContainer>
    </div>
  )
}

export default StepTwo
