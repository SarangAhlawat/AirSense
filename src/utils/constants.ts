export const AQI_COLORS = [
    { upto: 50, color: '#16a34a', label: 'Good' },
    { upto: 100, color: '#f59e0b', label: 'Moderate' },
    { upto: 200, color: '#f97316', label: 'Unhealthy' },
    { upto: 300, color: '#ef4444', label: 'Very Unhealthy' },
    { upto: 500, color: '#7f1d1d', label: 'Hazardous' },
  ]
  
  export function colorForAQI(aqi:number){
    return AQI_COLORS.find(c=> aqi <= c.upto)?.color ?? '#7f1d1d'
  }
  