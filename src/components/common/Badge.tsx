import React from 'react'

type Variant = 'success' | 'warning' | 'danger' | 'info' | 'neutral'

const variantToClasses: Record<Variant, string> = {
  success: 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30',
  warning: 'bg-amber-500/20 text-amber-300 ring-1 ring-amber-400/30',
  danger: 'bg-rose-500/20 text-rose-300 ring-1 ring-rose-400/30',
  info: 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/30',
  neutral: 'bg-slate-500/20 text-slate-300 ring-1 ring-slate-400/30'
}

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant
}

export default function Badge({ variant='neutral', className='', children, ...rest }: Props){
  const base = 'inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium backdrop-blur'
  return (
    <span {...rest} className={`${base} ${variantToClasses[variant]} ${className}`.trim()}>
      {children}
    </span>
  )
}


