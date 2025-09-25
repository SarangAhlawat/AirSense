import React from 'react'
import { useForecast } from '../../services/hooks/useForecast'
import ChartCard from '../../components/ui/ChartCard'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts'
import { AQI_COLORS } from '../../utils/constants'

export default function Forecast(){
  const { data } = useForecast(28.65, 77.2)
  const series = (data?.predictions ?? []).slice(0,72)
  return (
    <div className="space-y-4">
      <ChartCard title="72h AQI Forecast">
        <div style={{ width: '100%', height: 280 }}>
          <ResponsiveContainer>
            <LineChart data={series} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
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
      </ChartCard>
    </div>
  )
}


