import React from 'react'

export default function ChartCard({ title, children }: React.PropsWithChildren<{ title: string }>){
  return (
    <div className="card p-4">
      <div className="text-sm text-slate-300 mb-2">{title}</div>
      {children}
    </div>
  )
}


