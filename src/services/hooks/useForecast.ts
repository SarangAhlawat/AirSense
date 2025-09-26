import { useQuery, UseQueryResult } from '@tanstack/react-query'
import api from '../api'

type ForecastPoint = { hour:number; aqi:number }
type Forecast = { horizon:number; predictions: ForecastPoint[] }

export function useForecast(lat?:number, lon?:number): UseQueryResult<Forecast>{
  return useQuery<Forecast>({
    queryKey: ['forecast', lat, lon],
    queryFn: async () => {
      const r = await api.get(`/citizen/forecast?lat=${lat ?? ''}&lon=${lon ?? ''}`)
      return r.data as Forecast
    },
    enabled: true,
    staleTime: 60_000,
  })
}
