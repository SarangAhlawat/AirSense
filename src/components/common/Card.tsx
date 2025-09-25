import React from 'react'

type CardProps<T extends keyof JSX.IntrinsicElements = 'div'> = {
  as?: T
  className?: string
  children?: React.ReactNode
} & JSX.IntrinsicElements[T]

export default function Card<T extends keyof JSX.IntrinsicElements = 'div'>({ 
  as, 
  className = '', 
  children, 
  ...rest 
}: CardProps<T>){
  const Tag = (as || 'div') as any
  return (
    <Tag {...rest} className={`card ${className}`.trim()}>
      {children}
    </Tag>
  )
}


