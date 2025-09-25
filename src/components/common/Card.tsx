import React from 'react'

export default function Card(props: {
  className?: string
  children?: React.ReactNode
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>){
  const { className = '', children, ...rest } = props
  return (
    <div {...rest} className={`card ${className}`.trim()}>
      {children}
    </div>
  )
}


