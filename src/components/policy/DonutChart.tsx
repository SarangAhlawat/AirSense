import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

type Slice = { name: string; value: number }
const COLORS = ['#06b6d4', '#7c3aed', '#22c55e', '#eab308']

export default function DonutChart({ data }: { data: Slice[] }){
  return (
    <div style={{ width: '100%', height: 220 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" nameKey="name">
            {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}


