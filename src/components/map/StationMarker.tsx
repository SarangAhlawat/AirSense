import React from 'react'
import { CircleMarker, Popup } from 'react-leaflet'

export type StationPoint = { id: string | number, name: string, lat: number, lon: number, pm25: number, aqi?: number }

function colorFor(pm25: number){
  if(pm25 <= 35) return '#22c55e'
  if(pm25 <= 75) return '#eab308'
  if(pm25 <= 150) return '#f97316'
  return '#ef4444'
}

export default function StationMarker({ s }: { s: StationPoint }){
  return (
    <CircleMarker center={[s.lat, s.lon]} radius={10} pathOptions={{ color: colorFor(s.pm25), fillOpacity: 0.6 }}>
      <Popup>
        <div>
          <div className="font-semibold">{s.name}</div>
          <div>PM2.5: {s.pm25}</div>
          {s.aqi != null && <div>AQI: {s.aqi}</div>}
        </div>
      </Popup>
    </CircleMarker>
  )
}


