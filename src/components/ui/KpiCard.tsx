import React from 'react'

type Props = { label: string; value: string | number; sub?: string }

export default function KpiCard({ label, value, sub }: Props){
  return (
    <div className="card p-4">
      <div className="text-slate-400 text-xs">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
      {sub ? <div className="text-xs text-slate-500 mt-1">{sub}</div> : null}
    </div>
  )
}


