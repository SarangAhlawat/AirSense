import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import CitizenLayout from './layouts/CitizenLayout'
import PolicyLayout from './layouts/PolicyLayout'
import Forecast from './pages/citizen/Forecast'
import Health from './pages/citizen/Health'
import AQIReport from './pages/citizen/AQIReport'
import PolicySimulation from './pages/policy/Simulation'
import PolicyReports from './pages/policy/Reports'
import PolicyTrends from './pages/policy/Trends'
import Home from './pages/Home'
import ChooseRole from './pages/ChooseRole'
const CitizenDashboard = lazy(() => import('./pages/citizen/Dashboard'))
const PolicyDashboard = lazy(() => import('./pages/policy/Dashboard'))

export default function App(){
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/choose" element={<ChooseRole />} />
          <Route element={<CitizenLayout />}>
            <Route path="/citizen" element={<CitizenDashboard />} />
            <Route path="/citizen/forecast" element={<Forecast />} />
            <Route path="/citizen/health" element={<Health />} />
            <Route path="/citizen/report" element={<AQIReport />} />
          </Route>
          <Route element={<PolicyLayout />}>
            <Route path="/policy" element={<PolicyDashboard />} />
            <Route path="/policy/simulation" element={<PolicySimulation />} />
            <Route path="/policy/reports" element={<PolicyReports />} />
            <Route path="/policy/trends" element={<PolicyTrends />} />
          </Route>
        </Route>
        <Route path="*" element={<div className="p-6">Not found</div>} />
      </Routes>
    </Suspense>
  )
}
