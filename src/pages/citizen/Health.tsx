import React from 'react'
import KpiCard from '../../components/ui/KpiCard'
import HealthAdviceCard from '../../components/health/HealthAdviceCard'
import SafeRouteMap from '../../components/health/SafeRouteMap'

export default function Health(){
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-3 gap-4">
        <KpiCard label="Health Risk" value="High" sub="Avoid outdoor exercise 6–9 AM" />
        <KpiCard label="Mask Recommendation" value="N95" sub="Carry a spare on high AQI days" />
        <KpiCard label="Safe Outdoor Window" value="2–4 PM" sub="Lower PM levels expected" />
      </div>
      <HealthAdviceCard advice={{ title: 'Best time to exercise', message: 'Tomorrow 6–8 AM shows lowest AQI window.', severity: 'info' }} />
      <SafeRouteMap routes={[
        { label: 'Park Loop', points: [
          { lat: 28.646, lon: 77.21, aqi: 80 }, { lat: 28.651, lon: 77.215, aqi: 95 }, { lat: 28.655, lon: 77.22, aqi: 70 }
        ]},
        { label: 'River Walk', points: [
          { lat: 28.66, lon: 77.2, aqi: 150 }, { lat: 28.664, lon: 77.205, aqi: 140 }, { lat: 28.668, lon: 77.21, aqi: 160 }
        ]}
      ]} />
    </div>
  )
}


