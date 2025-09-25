import React from 'react'
import Badge from '../common/Badge'
import Card from '../common/Card'

export type Advice = {
  title: string
  message: string
  severity?: 'info' | 'warning' | 'danger'
}

export default function HealthAdviceCard({ advice }: { advice: Advice }){
  const variant = advice.severity === 'danger' ? 'danger' : advice.severity === 'warning' ? 'warning' : 'info'
  return (
    <Card className="p-4">
      <div className="flex items-start gap-3">
        <Badge variant={variant}>{advice.title}</Badge>
        <div className="text-sm text-slate-300">{advice.message}</div>
      </div>
    </Card>
  )
}


