'use client'
import React from 'react'
import cn from '@/utils/classnames'

type IRemoveIconProps = {
  className?: string
  onClick: () => void
} & React.HTMLAttributes<HTMLDivElement>

const RemoveIcon = ({
  className,
  onClick,
  ...props
}: IRemoveIconProps) => {
  return (
    <div
      className={cn('flex w-6 h-6 items-center justify-center rounded-md cursor-pointer hover:bg-state-destructive-hover text-text-tertiary hover:text-text-destructive', className)}
      onClick={onClick}
      {...props}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6H14M6 8H18M16.6667 8L16.1991 15.0129C16.129 16.065 16.0939 16.5911 15.8667 16.99C15.6666 17.3412 15.3648 17.6235 15.0011 17.7998C14.588 18 14.0607 18 13.0062 18H10.9938C9.93927 18 9.41202 18 8.99889 17.7998C8.63517 17.6235 8.33339 17.3412 8.13332 16.99C7.90607 16.5911 7.871 16.065 7.80086 15.0129L7.33333 8M10.6667 11V14.3333M13.3333 11V14.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
export default React.memo(RemoveIcon)
