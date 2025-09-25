import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export default function Card({ className = '', children, ...rest }: CardProps){
  return (
    <div {...rest} className={`card ${className}`.trim()}>
      {children}
    </div>
  )
}


