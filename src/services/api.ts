import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL ?? ''

const api = axios.create({
  baseURL,
  timeout: 10000,
})

// simple helper: if no baseURL, return mock data instead of throwing
export default {
  async get(path: string, params?: any) {
    if (!baseURL) {
      // mock behavior for endpoints used by frontend
      if (path.startsWith('/aqi/current')) {
        return { data: { aqi: 180, pm25: 110, category: 'Unhealthy', station: { id: 1, name: 'Kashmere Gate', lat:28.66, lon:77.23 } } }
      }
      if (path.startsWith('/stations')) {
        return { data: [
          { id:1, name:'Kashmere Gate', lat:28.66, lon:77.23, pm25:110 },
          { id:2, name:'Saket', lat:28.52, lon:77.21, pm25:95 },
          { id:3, name:'Gurgaon', lat:28.45, lon:77.03, pm25:130 }
        ]}
      }
      if (path.startsWith('/forecast')) {
        return { data: { horizon:72, predictions: Array.from({length:72}).map((_,i)=>({hour:i, aqi: 100 + Math.round(40*Math.sin(i/6))})) } }
      }
      if (path.startsWith('/attribution')) {
        return { data: { stubble: 0.55, traffic: 0.25, industry: 0.15, dust: 0.05 } }
      }
      // fallback
      return { data: {} }
    }
    const res = await api.get(path, { params })
    return res
  },
  // post for simulate etc
  async post(path:string, body?: any){
    if (!baseURL) {
      if (path === '/simulate-intervention') {
        // return a simple simulated forecast change
        return { data: { baseline: [200,190,210], scenario: [160,150,170], reductionPercent: 20 } }
      }
      return { data: {} }
    }
    const res = await api.post(path, body)
    return res
  }
}
