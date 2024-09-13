import {
  useCallback,
} from 'react'
import {
  RiLink,
  RiUploadCloud2Line,
} from '@remixicon/react'
import { useTranslation } from 'react-i18next'
import FileFromLinkOrLocal from '../file-from-link-or-local'
import {
  FileContextProvider,
  useStore,
} from '../store'
import type { FileEntity } from '../types'
import FileInput from '../file-input'
import { useFile } from '../hooks'
import FileItem from './file-item'
import Button from '@/app/components/base/button'
import cn from '@/utils/classnames'

type Option = {
  value: string
  label: string
  icon: JSX.Element
}
const FileUploaderInAttachment = () => {
  const { t } = useTranslation()
  const files = useStore(s => s.files)
  const {
    handleRemoveFile,
    handleReUploadFile,
  } = useFile()
  const options = [
    {
      value: 'local',
      label: t('common.fileUploader.uploadFromComputer'),
      icon: <RiUploadCloud2Line className='w-4 h-4' />,
    },
    {
      value: 'link',
      label: t('common.fileUploader.pasteFileLink'),
      icon: <RiLink className='w-4 h-4' />,
    },
  ]

  const renderButton = useCallback((option: Option, open?: boolean) => {
    return (
      <Button
        key={option.value}
        variant='tertiary'
        className={cn('basis-1/2 relative', open && 'bg-components-button-tertiary-bg-hover')}
      >
        {option.icon}
        <span className='ml-1'>{option.label}</span>
        {
          option.value === 'local' && (
            <FileInput />
          )
        }
      </Button>
    )
  }, [])
  const renderTrigger = useCallback((option: Option) => {
    return (open: boolean) => renderButton(option, open)
  }, [renderButton])
  const renderOption = useCallback((option: Option) => {
    if (option.value === 'local')
      return renderButton(option)

    if (option.value === 'link') {
      return (
        <FileFromLinkOrLocal
          key={option.value}
          showFromLocal={false}
          trigger={renderTrigger(option)}
        />
      )
    }
  }, [renderButton, renderTrigger])

  return (
    <div>
      <div className='flex items-center space-x-1'>
        {options.map(renderOption)}
      </div>
      <div className='mt-1 space-y-1'>
        {
          files.map(file => (
            <FileItem
              key={file.fileId}
              fileId={file.fileId}
              file={file.file}
              progress={file.progress}
              imageUrl={file.base64Url}
              showDeleteAction
              showDownloadAction={false}
              onRemove={() => handleRemoveFile(file.fileId)}
              onReUpload={() => handleReUploadFile(file.fileId)}
            />
          ))
        }
      </div>
    </div>
  )
}

type FileUploaderInAttachmentWrapperProps = {
  onChange: (files: FileEntity[]) => void
}
const FileUploaderInAttachmentWrapper = ({
  onChange,
}: FileUploaderInAttachmentWrapperProps) => {
  return (
    <FileContextProvider onChange={onChange}>
      <FileUploaderInAttachment />
    </FileContextProvider>
  )
}

export default FileUploaderInAttachmentWrapper
