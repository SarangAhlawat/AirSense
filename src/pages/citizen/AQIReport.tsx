import React from 'react'
import MapView from '../../components/map/MapView'
import { useStations } from '../../services/hooks/useStations'

export default function AQIReport(){
  const stationsQ = useStations()
  const stations = stationsQ.data ?? []
  return (
    <div className="space-y-4">
      <div className="text-sm text-slate-300">Interactive AQI map of Delhi-NCR (heatmap coming soon)</div>
      <MapView stations={stations} center={[28.65,77.2]} zoom={10} />
    </div>
  )
}


