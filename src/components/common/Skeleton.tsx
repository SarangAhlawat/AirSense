import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const radius: Record<NonNullable<Props['rounded']>, string> = {
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full'
}

export default function Skeleton({ className='', rounded='lg', ...rest }: Props){
  return (
    <div {...rest} className={`animate-pulse bg-white/5 ${radius[rounded]} ${className}`.trim()} />
  )
}


