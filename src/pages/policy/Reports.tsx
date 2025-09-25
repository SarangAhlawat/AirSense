import React from 'react'
import Button from '../../components/common/Button'
import ReportsTable from '../../components/policy/ReportsTable'

export default function Reports(){
  function download(kind:'csv'|'pdf'){
    // placeholder: integrate with backend /reports endpoint
    alert(`Generating ${kind.toUpperCase()} report...`)
  }
  return (
    <div className="space-y-4">
      <div className="card p-4">
        <div className="font-semibold mb-2">Reports</div>
        <div className="flex gap-3">
          <Button onClick={()=>download('csv')}>Download CSV</Button>
          <Button variant="secondary" onClick={()=>download('pdf')}>Download PDF</Button>
        </div>
      </div>
      <ReportsTable rows={[
        { date: '2025-09-20', region: 'Zone A', avg_aqi: 182, pm25: 95 },
        { date: '2025-09-21', region: 'Zone B', avg_aqi: 132, pm25: 64 },
        { date: '2025-09-22', region: 'Zone C', avg_aqi: 96, pm25: 41 }
      ]} />
    </div>
  )
}


