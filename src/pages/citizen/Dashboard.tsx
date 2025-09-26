import React, { useMemo, useState } from 'react'
import AQICard from '../../components/ui/AQICard'
import MapView from '../../components/map/MapView'
import ForecastChart from '../../components/ui/ForecastChart'
import { useCurrentAQI } from '../../services/hooks/useCurrentAQI'
import { useStations, type Station } from '../../services/hooks/useStations'
import { useForecast } from '../../services/hooks/useForecast'
import HealthAdviceCard from '../../components/health/HealthAdviceCard'
import { motion } from 'framer-motion'

export default function CitizenDashboard(){
  // for MVP we use fixed coords (Delhi center). Later, use geolocation.
  const lat = 28.65, lon = 77.2
  const aqiQ = useCurrentAQI({ lat, lon })
  const stationsQ = useStations()
  const forecastQ = useForecast(lat, lon)

  const stations = (stationsQ.data ?? []) as Station[]
  const forecast = (forecastQ.data?.predictions ?? []).slice(0,24)

  const [pollutant, setPollutant] = useState<'pm25' | 'no2' | 'o3'>('pm25')
  const advice = useMemo(() => {
    const a = aqiQ.data?.aqi ?? 0
    if(a > 200) return { title: 'Health Advisory', message: 'Sensitive groups should avoid outdoor activities. Consider wearing a mask.', severity: 'danger' as const }
    if(a > 100) return { title: 'Caution', message: 'Limit prolonged outdoor exertion during the afternoon peak.', severity: 'warning' as const }
    return { title: 'Good Air', message: 'Air quality is acceptable. Enjoy outdoor activities.', severity: 'info' as const }
  }, [aqiQ.data?.aqi])

  return (
    <div className="p-6 space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <motion.div className="md:col-span-1" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          {aqiQ.data ? <AQICard aqi={aqiQ.data.aqi} pm25={aqiQ.data.pm25} station={aqiQ.data.station}/> : <div className="card p-6">Loading...</div>}
          <div className="mt-3">
            <HealthAdviceCard advice={advice} />
          </div>
        </motion.div>
        <motion.div className="md:col-span-2" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <ForecastChart data={forecast} />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Map — Delhi-NCR</h2>
          <div className="flex items-center gap-2">
            <button className={`px-3 py-1 rounded-lg text-sm ${pollutant==='pm25'?'bg-cyan-500/20 text-cyan-200':'bg-white/5 text-slate-300'}`} onClick={() => setPollutant('pm25')}>PM2.5</button>
            <button className={`px-3 py-1 rounded-lg text-sm ${pollutant==='no2'?'bg-cyan-500/20 text-cyan-200':'bg-white/5 text-slate-300'}`} onClick={() => setPollutant('no2')}>NO2</button>
            <button className={`px-3 py-1 rounded-lg text-sm ${pollutant==='o3'?'bg-cyan-500/20 text-cyan-200':'bg-white/5 text-slate-300'}`} onClick={() => setPollutant('o3')}>O3</button>
          </div>
        </div>
        <MapView stations={stations} center={[28.65,77.2]} zoom={10} pollutant={pollutant} />
      </motion.div>
    </div>
  )
}
