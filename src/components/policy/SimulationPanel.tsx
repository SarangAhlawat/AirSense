import React, { useState } from 'react'
import Button from '../common/Button'
import api from '../../services/api'

export default function SimulationPanel(){
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  async function run(){
    setLoading(true)
    try {
      const res = await api.post('/simulate-intervention', { type: 'stubble_cut', value: 0.5 })
      setResult(res.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">Intervention Simulator</div>
          <div className="text-slate-400 text-sm">Estimate AQI impact for a simple scenario</div>
        </div>
        <Button onClick={run} disabled={loading}>{loading? 'Running...' : 'Run Simulation'}</Button>
      </div>
      {result ? (
        <div className="mt-4 text-sm text-slate-300">
          <div>Baseline: {JSON.stringify(result.baseline)}</div>
          <div>Scenario: {JSON.stringify(result.scenario)}</div>
          <div className="mt-1">Reduction: {result.reductionPercent}%</div>
        </div>
      ) : null}
    </div>
  )
}


