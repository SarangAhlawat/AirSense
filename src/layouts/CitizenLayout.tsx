import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function CitizenLayout(){
  return (
    <div className="grid md:grid-cols-12 gap-6">
      <aside className="md:col-span-3 lg:col-span-2">
        <div className="card p-4 sticky top-20">
          <div className="text-sm text-slate-400 mb-3">Citizen</div>
          <nav className="flex flex-col gap-2 text-sm">
            <NavLink to="/citizen" end className={({isActive})=>isActive? 'text-cyan-300' : 'text-slate-300 hover:text-white'}>Dashboard</NavLink>
            <NavLink to="/citizen/forecast" className={({isActive})=>isActive? 'text-cyan-300' : 'text-slate-300 hover:text-white'}>Forecast</NavLink>
            <NavLink to="/citizen/health" className={({isActive})=>isActive? 'text-cyan-300' : 'text-slate-300 hover:text-white'}>Health</NavLink>
            <NavLink to="/citizen/profile" className={({isActive})=>isActive? 'text-cyan-300' : 'text-slate-300 hover:text-white'}>Profile</NavLink>
          </nav>
        </div>
      </aside>
      <section className="md:col-span-9 lg:col-span-10">
        <Outlet />
      </section>
    </div>
  )
}


