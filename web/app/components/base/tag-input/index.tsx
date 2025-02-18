import { useState } from 'react'
import type { ChangeEvent, FC, KeyboardEvent } from 'react'
import { } from 'use-context-selector'
import { useTranslation } from 'react-i18next'
import AutosizeInput from 'react-18-input-autosize'
import { RiAddLine, RiCloseLine } from '@remixicon/react'
import cn from '@/utils/classnames'
import { useToastContext } from '@/app/components/base/toast'

interface TagInputProps {
  items: string[]
  onChange: (items: string[]) => void
  disableRemove?: boolean
  disableAdd?: boolean
  customizedConfirmKey?: 'Enter' | 'Tab'
  isInWorkflow?: boolean
  placeholder?: string
}

const TagInput: FC<TagInputProps> = ({
  items,
  onChange,
  disableAdd,
  disableRemove,
  customizedConfirmKey = 'Enter',
  isInWorkflow,
  placeholder,
}) => {
  const { t } = useTranslation()
  const { notify } = useToastContext()
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)

  const isSpecialMode = customizedConfirmKey === 'Tab'

  const handleRemove = (index: number) => {
    const copyItems = [...items]
    copyItems.splice(index, 1)

    onChange(copyItems)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isSpecialMode && e.key === 'Enter')
      setValue(`${value}↵`)

    if (e.key === customizedConfirmKey) {
      if (isSpecialMode)
        e.preventDefault()

      const valueTrimmed = value.trim()
      if (!valueTrimmed || (items.find(item => item === valueTrimmed)))
        return

      if (valueTrimmed.length > 20) {
        notify({ type: 'error', message: t('datasetDocuments.segment.keywordError') })
        return
      }

      onChange([...items, valueTrimmed])
      setTimeout(() => {
        setValue('')
      })
    }
  }

  const handleBlur = () => {
    setValue('')
    setFocused(false)
  }

  return (
    <div className={cn('flex flex-wrap', !isInWorkflow && 'min-w-[200px]', isSpecialMode ? 'rounded-lg bg-gray-100 pb-1 pl-1' : '')}>
      {
        (items || []).map((item, index) => (
          <div
            key={item}
            className={cn('system-xs-regular text-text-secondary border-divider-deep bg-components-badge-white-to-dark mr-1 mt-1 flex items-center rounded-md border py-1 pl-1.5 pr-1')}
          >
            {item}
            {
              !disableRemove && (
                <div className='flex h-4 w-4 cursor-pointer items-center justify-center' onClick={() => handleRemove(index)}>
                  <RiCloseLine className='text-text-tertiary ml-0.5 h-3.5 w-3.5' />
                </div>
              )
            }
          </div>
        ))
      }
      {
        !disableAdd && (
          <div className={cn('group/tag-add mt-1 flex items-center gap-x-0.5', !isSpecialMode ? 'border-divider-deep rounded-md border border-dashed px-1.5' : '')}>
            {!isSpecialMode && !focused && <RiAddLine className='text-text-placeholder group-hover/tag-add:text-text-secondary h-3.5 w-3.5' />}
            <AutosizeInput
              inputClassName={cn('placeholder:text-text-placeholder group-hover/tag-add:placeholder:text-text-secondary appearance-none caret-[#295EFF] outline-none', isSpecialMode ? 'bg-transparent' : '')}
              className={cn(
                !isInWorkflow && 'max-w-[300px]',
                isInWorkflow && 'max-w-[146px]',
                `
                system-xs-regular overflow-hidden rounded-md py-1
                ${focused && isSpecialMode && 'border-divider-deep border border-dashed px-1.5'}
              `)}
              onFocus={() => setFocused(true)}
              onBlur={handleBlur}
              value={value}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value)
              }}
              onKeyDown={handleKeyDown}
              placeholder={t(placeholder || (isSpecialMode ? 'common.model.params.stop_sequencesPlaceholder' : 'datasetDocuments.segment.addKeyWord'))}
            />
          </div>
        )
      }
    </div>
  )
}

export default TagInput
