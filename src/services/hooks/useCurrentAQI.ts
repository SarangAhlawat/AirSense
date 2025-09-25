import { useQuery, UseQueryResult } from '@tanstack/react-query'
import api from '../api'

type CurrentAQI = {
  aqi: number
  pm25: number
  category?: string
  station?: { id:number; name:string; lat:number; lon:number }
}

export function useCurrentAQI(lat?: number, lon?: number): UseQueryResult<CurrentAQI> {
  return useQuery<CurrentAQI>({
    queryKey: ['currentAQI', lat, lon],
    queryFn: async () => {
      const r = await api.get(`/aqi/current?lat=${lat ?? ''}&lon=${lon ?? ''}`)
      return r.data as CurrentAQI
    },
    staleTime: 60_000,
    enabled: true,
  })
}
