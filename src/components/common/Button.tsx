import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({ variant='primary', className='', ...rest }: Props){
  const styles =
    variant === 'primary' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:opacity-90' :
    variant === 'secondary' ? 'bg-slate-800 text-white hover:bg-slate-700' :
    'bg-transparent text-slate-300 hover:text-white'

  return (
    <button {...rest} className={`px-4 py-2 rounded-xl font-semibold transition ${styles} ${className}`.trim()} />
  )
}


