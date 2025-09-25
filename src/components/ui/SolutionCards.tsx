import React from 'react'
import { Activity, Brain, Map, Shield } from 'lucide-react'

const items = [
  { icon: Brain, title: 'AI Attribution', desc: 'Breakdown by stubble, traffic, industry, dust' },
  { icon: Activity, title: 'Forecasts', desc: '24–72h AQI predictions with uncertainty' },
  { icon: Map, title: 'Hyperlocal Maps', desc: 'Station overlays and upcoming hotspots' },
  { icon: Shield, title: 'Health Advisory', desc: 'Personalized, conservative recommendations' },
]

export default function SolutionCards(){
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((it,i)=>{
        const Ico = it.icon
        return (
          <div key={i} className="card p-4">
            <div className="flex items-center gap-3">
              <Ico size={20} className="text-cyan-300" />
              <div className="font-semibold">{it.title}</div>
            </div>
            <div className="text-sm text-slate-400 mt-2">{it.desc}</div>
          </div>
        )
      })}
    </div>
  )
}
