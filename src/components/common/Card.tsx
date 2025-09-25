import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements
}

export default function Card({ as: Tag = 'div', className = '', children, ...rest }: Props){
  return (
    <Tag {...rest} className={`card ${className}`.trim()}>
      {children}
    </Tag>
  )
}


