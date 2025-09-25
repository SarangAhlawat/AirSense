import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function MainLayout(){
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 bg-[var(--bg)]/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight">AirSense</Link>
          <nav className="flex items-center gap-6 text-sm">
            <NavLink to="/" className={({isActive})=>isActive? 'text-cyan-300' : 'text-slate-300 hover:text-white'}>Home</NavLink>
            <NavLink to="/citizen" className={({isActive})=>isActive? 'text-cyan-300' : 'text-slate-300 hover:text-white'}>Citizen</NavLink>
            <NavLink to="/policy" className={({isActive})=>isActive? 'text-cyan-300' : 'text-slate-300 hover:text-white'}>Policy</NavLink>
            <NavLink to="/choose" className={({isActive})=>isActive? 'text-cyan-300' : 'text-slate-300 hover:text-white'}>Choose</NavLink>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        Built for Smart India Hackathon — Transparency • Impact • Trust
      </footer>
    </div>
  )
}


