import React from 'react'
import Card from '../common/Card'
import Badge from '../common/Badge'
import { AQI_COLORS } from '../../utils/constants'

type Props = { aqi: number, pm25?: number, station?: any }

function labelForAQI(aqi: number){
  return AQI_COLORS.find(c => aqi <= c.upto)?.label ?? 'Hazardous'
}

function colorForAQI(aqi: number){
  return AQI_COLORS.find(c => aqi <= c.upto)?.color ?? '#7f1d1d'
}

export default function AQICard({ aqi, pm25, station }: Props){
  const color = colorForAQI(aqi)
  const label = labelForAQI(aqi)
  const badgeVariant = aqi <= 50 ? 'success' : aqi <= 100 ? 'warning' : 'danger'
  return (
    <Card className="p-5 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `radial-gradient(600px 200px at 0% 0%, ${color}, transparent 60%)` }} />
      <div className="relative flex items-center gap-5">
        <div className="w-28 h-28 rounded-2xl flex items-center justify-center text-3xl font-extrabold" style={{ background: color }}>
          <div className="text-white drop-shadow">{aqi}</div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-sm text-slate-300">{station?.name ?? 'Nearest Station'}</div>
            <Badge variant={badgeVariant}>{label}</Badge>
          </div>
          <div className="text-xl font-semibold">Air Quality Index</div>
          <div className="text-sm text-slate-400">PM2.5: {pm25 ?? 'N/A'}</div>
        </div>
      </div>
    </Card>
  )
}
