import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ChooseRole(){
  const nav = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <div className="card p-6 cursor-pointer" onClick={()=>{ localStorage.setItem('role','citizen'); nav('/citizen') }}>
          <h3 className="text-xl font-semibold">Citizen</h3>
          <p className="text-slate-400 mt-2">Get hyperlocal AQI, health alerts and safe routes.</p>
        </div>
        <div className="card p-6 cursor-pointer" onClick={()=>{ localStorage.setItem('role','policy'); nav('/policy') }}>
          <h3 className="text-xl font-semibold">Policymaker</h3>
          <p className="text-slate-400 mt-2">See source attribution, run intervention simulations.</p>
        </div>
      </div>
    </div>
  )
}
