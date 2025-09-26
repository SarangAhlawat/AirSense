import { useQuery, UseQueryResult } from '@tanstack/react-query'
import api from '../api'

export type CurrentAQI = {
  aqi: number
  pm25: number
  category?: string
  station?: { id:number; name:string; lat:number; lon:number }
}

type ByCoords = { lat: number; lon: number; city?: undefined }
type ByCity = { city: string; lat?: undefined; lon?: undefined }
type Params = ByCoords | ByCity

export function useCurrentAQI(params: Params): UseQueryResult<CurrentAQI> {
  const isCity = (p: Params): p is ByCity => typeof (p as any).city === 'string'

  return useQuery<CurrentAQI>({
    queryKey: isCity(params) ? ['currentAQI', params.city] : ['currentAQI', params.lat, params.lon],
    queryFn: async ({ signal }) => {
      const path = isCity(params)
        ? `/citizen/aqi/current?city=${encodeURIComponent(params.city)}`
        : `/aqi/current?lat=${params.lat}&lon=${params.lon}`
      const r = await api.get(path, undefined, signal as AbortSignal)
      return r.data as CurrentAQI
    },
    staleTime: 60_000,
    enabled: isCity(params) ? !!params.city : (params.lat != null && params.lon != null),
  })
}
