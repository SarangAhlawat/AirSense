import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import RouteOverlay, { type RoutePoint } from '../map/RouteOverlay'

export default function SafeRouteMap({ routes }: { routes: { label: string, points: RoutePoint[] }[] }){
  const center: [number, number] = routes[0]?.points?.[0] ? [routes[0].points[0].lat, routes[0].points[0].lon] : [28.65, 77.2]
  return (
    <div className="card h-[320px]">
      <MapContainer center={center} zoom={12} style={{ height: '100%', borderRadius: '12px' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {routes.map((r, idx) => (
          <RouteOverlay key={idx} points={r.points} label={r.label} />
        ))}
      </MapContainer>
    </div>
  )
}


