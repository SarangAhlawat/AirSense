import React from 'react'
import ChartCard from '../../components/ui/ChartCard'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const mock = Array.from({length: 30}).map((_,i)=>({ day: i+1, aqi: 120 + Math.round(40*Math.sin(i/5)) }))

export default function Trends(){
  return (
    <div className="space-y-4">
      <ChartCard title="30-day Regional AQI Trend (sample)">
        <div style={{ width: '100%', height: 280 }}>
          <ResponsiveContainer>
            <LineChart data={mock}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="aqi" stroke="#7c3aed" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </div>
  )
}


