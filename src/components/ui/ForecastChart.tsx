import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts'
import Card from '../common/Card'
import { AQI_COLORS } from '../../utils/constants'

export default function ForecastChart({ data } : { data: Array<{hour:number, aqi:number}> }){
  return (
    <Card className="p-4">
      <div className="text-sm text-slate-300 mb-2">24–72h Forecast</div>
      <div style={{ width: '100%', height: 240 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
            {AQI_COLORS.map((b, idx) => (
              <ReferenceArea key={idx} y1={idx === 0 ? 0 : AQI_COLORS[idx-1].upto} y2={b.upto} fill={b.color} fillOpacity={0.08} strokeOpacity={0} />
            ))}
            <XAxis dataKey="hour" tick={{ fill: '#cbd5e1' }} />
            <YAxis tick={{ fill: '#cbd5e1' }} domain={[0, 300]} />
            <Tooltip contentStyle={{ background: 'rgba(2,6,23,0.9)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, color: '#e2e8f0' }} />
            <Line type="monotone" dataKey="aqi" stroke="#06b6d4" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
