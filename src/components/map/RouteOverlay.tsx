import React from 'react'
import { Polyline, Tooltip as LeafletTooltip } from 'react-leaflet'

export type RoutePoint = { lat: number, lon: number, aqi?: number }

function strokeFor(aqi?: number){
  if(aqi == null) return '#60a5fa'
  if(aqi <= 50) return '#22c55e'
  if(aqi <= 100) return '#eab308'
  if(aqi <= 150) return '#f97316'
  return '#ef4444'
}

export default function RouteOverlay({ points, label }: { points: RoutePoint[], label?: string }){
  const color = strokeFor(points.reduce((acc, p) => acc + (p.aqi ?? 100), 0) / Math.max(points.length, 1))
  return (
    <Polyline positions={points.map(p => [p.lat, p.lon]) as [number, number][]} pathOptions={{ color, weight: 6, opacity: 0.7 }}>
      {label && <LeafletTooltip>{label}</LeafletTooltip>}
    </Polyline>
  )
}


