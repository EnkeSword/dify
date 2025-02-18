'use client'
import type { FC } from 'react'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  RiArrowLeftLine,
  RiCloseLine,
} from '@remixicon/react'
import Drawer from '@/app/components/base/drawer'
import ActionButton from '@/app/components/base/action-button'
import Icon from '@/app/components/plugins/card/base/card-icon'
import Description from '@/app/components/plugins/card/base/description'
import Divider from '@/app/components/base/divider'
import type {
  StrategyDetail,
} from '@/app/components/plugins/types'
import type { Locale } from '@/i18n'
import { useRenderI18nObject } from '@/hooks/use-i18n'
import { API_PREFIX } from '@/config'
import cn from '@/utils/classnames'

type Props = {
  provider: {
    author: string
    name: string
    description: Record<Locale, string>
    tenant_id: string
    icon: string
    label: Record<Locale, string>
    tags: string[]
  }
  detail: StrategyDetail
  onHide: () => void
}

const StrategyDetail: FC<Props> = ({
  provider,
  detail,
  onHide,
}) => {
  const getValueFromI18nObject = useRenderI18nObject()
  const { t } = useTranslation()

  const outputSchema = useMemo(() => {
    const res: any[] = []
    if (!detail.output_schema)
      return []
    Object.keys(detail.output_schema.properties).forEach((outputKey) => {
      const output = detail.output_schema.properties[outputKey]
      res.push({
        name: outputKey,
        type: output.type === 'array'
          ? `Array[${output.items?.type.slice(0, 1).toLocaleUpperCase()}${output.items?.type.slice(1)}]`
          : `${output.type.slice(0, 1).toLocaleUpperCase()}${output.type.slice(1)}`,
        description: output.description,
      })
    })
    return res
  }, [detail.output_schema])

  const getType = (type: string) => {
    if (type === 'number-input')
      return t('tools.setBuiltInTools.number')
    if (type === 'text-input')
      return t('tools.setBuiltInTools.string')
    if (type === 'file')
      return t('tools.setBuiltInTools.file')
    if (type === 'array[tools]')
      return 'multiple-tool-select'
    return type
  }

  return (
    <Drawer
      isOpen
      clickOutsideNotOpen={false}
      onClose={onHide}
      footer={null}
      mask={false}
      positionCenter={false}
      panelClassname={cn('!bg-components-panel-bg border-components-panel-border mb-2 mr-2 mt-[64px] !w-[420px] !max-w-[420px] justify-start rounded-2xl border-[0.5px] !p-0 shadow-xl')}
    >
      <>
        {/* header */}
        <div className='border-divider-subtle relative border-b p-4 pb-3'>
          <div className='absolute right-3 top-3'>
            <ActionButton onClick={onHide}>
              <RiCloseLine className='h-4 w-4' />
            </ActionButton>
          </div>
          <div
            className='text-text-accent-secondary system-xs-semibold-uppercase mb-2 flex cursor-pointer items-center gap-1'
            onClick={onHide}
          >
            <RiArrowLeftLine className='h-4 w-4' />
            BACK
          </div>
          <div className='flex items-center gap-1'>
            <Icon size='tiny' className='h-6 w-6' src={`${API_PREFIX}/workspaces/current/plugin/icon?tenant_id=${provider.tenant_id}&filename=${provider.icon}`} />
            <div className=''>{getValueFromI18nObject(provider.label)}</div>
          </div>
          <div className='text-text-primary system-md-semibold mt-1'>{getValueFromI18nObject(detail.identity.label)}</div>
          <Description className='mt-3' text={getValueFromI18nObject(detail.description)} descriptionLineRows={2}></Description>
        </div>
        {/* form */}
        <div className='h-full'>
          <div className='flex h-full flex-col overflow-y-auto'>
            <div className='text-text-primary system-sm-semibold-uppercase p-4 pb-1'>{t('tools.setBuiltInTools.parameters')}</div>
            <div className='px-4'>
              {detail.parameters.length > 0 && (
                <div className='space-y-1 py-2'>
                  {detail.parameters.map((item: any, index) => (
                    <div key={index} className='py-1'>
                      <div className='flex items-center gap-2'>
                        <div className='text-text-secondary code-sm-semibold'>{getValueFromI18nObject(item.label)}</div>
                        <div className='text-text-tertiary system-xs-regular'>
                          {getType(item.type)}
                        </div>
                        {item.required && (
                          <div className='text-text-warning-secondary system-xs-medium'>{t('tools.setBuiltInTools.required')}</div>
                        )}
                      </div>
                      {item.human_description && (
                        <div className='text-text-tertiary system-xs-regular mt-0.5'>
                          {getValueFromI18nObject(item.human_description)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {detail.output_schema && (
              <>
                <div className='px-4'>
                  <Divider className="!mt-2" />
                </div>
                <div className='text-text-primary system-sm-semibold-uppercase p-4 pb-1'>OUTPUT</div>
                {outputSchema.length > 0 && (
                  <div className='space-y-1 px-4 py-2'>
                    {outputSchema.map((outputItem, index) => (
                      <div key={index} className='py-1'>
                        <div className='flex items-center gap-2'>
                          <div className='text-text-secondary code-sm-semibold'>{outputItem.name}</div>
                          <div className='text-text-tertiary system-xs-regular'>{outputItem.type}</div>
                        </div>
                        {outputItem.description && (
                          <div className='text-text-tertiary system-xs-regular mt-0.5'>
                            {outputItem.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </>
    </Drawer>
  )
}
export default StrategyDetail
