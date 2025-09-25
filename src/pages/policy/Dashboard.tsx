import React from 'react'
import { useQuery } from '@tanstack/react-query'
import api from '../../services/api'
import MapView from '../../components/map/MapView'
import DonutChart from '../../components/policy/DonutChart'
import SimulationPanel from '../../components/policy/SimulationPanel'
import type { Station } from '../../services/hooks/useStations'

type Attribution = { stubble:number; traffic:number; industry:number; dust:number }

export default function PolicyDashboard(){
  const { data: stations } = useQuery<Station[]>({
    queryKey: ['stations'],
    queryFn: async () => (await api.get('/stations')).data as Station[],
    staleTime: 5*60_000,
  })

  const { data } = useQuery<Attribution>({
    queryKey: ['attribution'],
    queryFn: async () => (await api.get('/attribution?lat=28.65&lon=77.2')).data as Attribution,
    staleTime: 60_000,
  })

  return (
    <div className="p-6 space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-4">
          <h3 className="font-semibold">Source Attribution</h3>
          {data ? (
            <DonutChart data={[
              { name:'Stubble', value: data.stubble },
              { name:'Traffic', value: data.traffic },
              { name:'Industry', value: data.industry },
              { name:'Dust', value: data.dust },
            ]} />
          ) : <div>Loading...</div>}
        </div>

        <SimulationPanel />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">Map — Delhi-NCR</h2>
        <MapView stations={stations ?? []} center={[28.65,77.2]} zoom={10} />
      </div>
    </div>
  )
}
