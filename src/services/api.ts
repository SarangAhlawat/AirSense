import axios, { type AxiosError } from 'axios'

// Base URL: prefer env, fallback to local FastAPI
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

// Axios instance
export const api = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

let authToken: string | null = null

export function setAuthToken(token: string | null){
  authToken = token
}

// Request interceptor: attach Authorization and request id
api.interceptors.request.use((config) => {
  if (authToken) {
    config.headers = config.headers ?? {}
    config.headers['Authorization'] = `Bearer ${authToken}`
  }
  config.headers = config.headers ?? {}
  if (!config.headers['X-Request-Id']) {
    config.headers['X-Request-Id'] = Math.random().toString(36).slice(2)
  }
  return config
})

// Response interceptor: normalize errors
api.interceptors.response.use(
  (r) => r,
  (error: AxiosError) => {
    const status = error.response?.status
    const message = (error.response as any)?.data?.message || error.message || 'Request failed'
    return Promise.reject({ status, message, error })
  }
)

// Mock helpers when VITE_API_URL is intentionally empty
function isMockMode(){
  return !import.meta.env.VITE_API_URL
}

async function mockGet(path: string){
  if (path.startsWith('/aqi/current')) {
    return { data: { aqi: 180, pm25: 110, category: 'Unhealthy', station: { id: 1, name: 'Kashmere Gate', lat:28.66, lon:77.23 } } }
  }
  if (path.startsWith('/citizen/stations') || path === '/stations') {
    return { data: [
      { id:1, name:'Kashmere Gate', lat:28.66, lon:77.23, pm25:110 },
      { id:2, name:'Saket', lat:28.52, lon:77.21, pm25:95 },
      { id:3, name:'Gurgaon', lat:28.45, lon:77.03, pm25:130 }
    ]}
  }
  if (path.startsWith('/citizen/forecast') || path.startsWith('/forecast')) {
    return { data: { horizon:72, predictions: Array.from({length:72}).map((_,i)=>({hour:i, aqi: 100 + Math.round(40*Math.sin(i/6))})) } }
  }
  if (path.startsWith('/attribution')) {
    return { data: { stubble: 0.55, traffic: 0.25, industry: 0.15, dust: 0.05 } }
  }
  return { data: {} }
}

async function mockPost(path: string){
  if (path === '/simulate-intervention') {
    return { data: { baseline: [200,190,210], scenario: [160,150,170], reductionPercent: 20 } }
  }
  return { data: {} }
}

// Thin wrapper with abort support
export default {
  async get(path: string, params?: Record<string, unknown>, signal?: AbortSignal){
    if (isMockMode()) return mockGet(path)
    const res = await api.get(path, { params, signal })
    return res
  },
  async post(path: string, body?: any, signal?: AbortSignal){
    if (isMockMode()) return mockPost(path)
    const res = await api.post(path, body, { signal })
    return res
  },
  async put(path: string, body?: any, signal?: AbortSignal){
    if (isMockMode()) return { data: {} }
    const res = await api.put(path, body, { signal })
    return res
  },
  async del(path: string, signal?: AbortSignal){
    if (isMockMode()) return { data: {} }
    const res = await api.delete(path, { signal })
    return res
  }
}
