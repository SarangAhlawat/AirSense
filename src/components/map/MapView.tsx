import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import type { Station } from '../../services/hooks/useStations'
import StationMarker from './StationMarker'

export default function MapView({ stations = [], center = [28.65,77.2] as [number,number], zoom=10, pollutant='pm25' }: { stations?: Station[], center?: [number,number], zoom?: number, pollutant?: 'pm25' | 'no2' | 'o3' }){
  return (
    <div className="card h-[420px]">
      <MapContainer center={center} zoom={zoom} style={{ height: '100%', borderRadius: '12px' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map(s => (
          <StationMarker key={s.id} s={{ id: s.id, name: s.name, lat: s.lat, lon: s.lon, pm25: s.pm25 }} />
        ))}
      </MapContainer>
    </div>
  )
}
