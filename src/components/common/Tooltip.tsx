import React, { useState } from 'react'

type Props = {
  content: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export default function Tooltip({ content, children, side='top' }: Props){
  const [open, setOpen] = useState(false)
  const position = side === 'top' ? 'bottom-full mb-2 left-1/2 -translate-x-1/2' :
                   side === 'bottom' ? 'top-full mt-2 left-1/2 -translate-x-1/2' :
                   side === 'left' ? 'right-full mr-2 top-1/2 -translate-y-1/2' :
                   'left-full ml-2 top-1/2 -translate-y-1/2'
  return (
    <span className="relative inline-flex" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {open && (
        <span className={`absolute z-50 px-2 py-1 text-xs text-white bg-slate-800/90 border border-white/10 rounded-lg shadow-lg ${position}`}>
          {content}
        </span>
      )}
      {children}
    </span>
  )
}


