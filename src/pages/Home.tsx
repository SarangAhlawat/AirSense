import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import ImpactStats from '../components/ui/ImpactStats'
import SolutionCards from '../components/ui/SolutionCards'

export default function Home(){
  const nav = useNavigate()
  return (
    <>
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs mb-4 border border-slate-700">SIH 2025 • Clean Air</div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">AirSense</h1>
        <p className="text-slate-300 mb-8 text-lg">Hyperlocal AQI, source attribution & forecasts for Delhi-NCR.</p>
        <div className="flex gap-4 justify-center">
          <Button onClick={()=>nav('/choose')}>Open Portal</Button>
          <Button variant="ghost" onClick={()=>nav('/policy')}>View Policy Dashboard</Button>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <div>
        <div className="text-xl font-semibold mb-3">Why AirSense?</div>
        <SolutionCards />
      </div>
      <div>
        <div className="text-xl font-semibold mb-3">Impact</div>
        <ImpactStats />
      </div>
      <div className="text-center text-slate-500 text-sm">Backers & Partners — coming soon</div>
    </div>
    </>
  )
}
