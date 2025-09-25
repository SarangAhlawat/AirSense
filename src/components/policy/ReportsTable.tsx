import React from 'react'
import Card from '../common/Card'
import Button from '../common/Button'

type Row = Record<string, string | number | null | undefined>

function toCsv(rows: Row[]): string{
  if(rows.length === 0) return ''
  const headers = Object.keys(rows[0])
  const escape = (v: unknown) => {
    const s = v == null ? '' : String(v)
    if(/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"'
    return s
  }
  return [headers.join(','), ...rows.map(r => headers.map(h => escape(r[h])).join(','))].join('\n')
}

export default function ReportsTable({ rows }: { rows: Row[] }){
  const headers = rows[0] ? Object.keys(rows[0]) : []

  function downloadCsv(){
    const csv = toCsv(rows)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'reports.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-slate-300">Historical Reports</div>
        <Button onClick={downloadCsv} variant="secondary">Download CSV</Button>
      </div>
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-slate-300">
            <tr>
              {headers.map(h => (
                <th key={h} className="text-left font-medium py-2 pr-6">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="border-t border-white/5 hover:bg-white/5">
                {headers.map(h => (
                  <td key={h} className="py-2 pr-6 text-slate-200">{r[h] as any}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}


