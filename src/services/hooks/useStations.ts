import { useQuery, UseQueryResult } from '@tanstack/react-query'
import api from '../api'

export type Station = { id:number, lat:number, lon:number, name:string, pm25:number }

export function useStations(): UseQueryResult<Station[]> {
  return useQuery<Station[]>({
    queryKey: ['stations'],
    queryFn: async () => {
      const r = await api.get('/citizen/stations')
      return r.data as Station[]
    },
    staleTime: 5*60_000,
  })
}
