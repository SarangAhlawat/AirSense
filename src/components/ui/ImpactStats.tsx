import React, { useEffect, useState } from 'react'

function useCounter(target:number, duration=1200){
  const [value, setValue] = useState(0)
  useEffect(()=>{
    let raf:number, start:number|undefined
    function tick(ts:number){
      if(start===undefined) start = ts
      const p = Math.min(1, (ts - start)/duration)
      setValue(Math.floor(p*target))
      if(p<1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return ()=> cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

export default function ImpactStats(){
  const a = useCounter(1500000)
  const b = useCounter(120)
  const c = useCounter(45)
  const d = useCounter(6)
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="card p-4 text-center"><div className="text-2xl font-bold">{a.toLocaleString()}</div><div className="text-xs text-slate-400">Lives impacted</div></div>
      <div className="card p-4 text-center"><div className="text-2xl font-bold">{b} Cr</div><div className="text-xs text-slate-400">Potential savings</div></div>
      <div className="card p-4 text-center"><div className="text-2xl font-bold">{c}</div><div className="text-xs text-slate-400">Districts covered</div></div>
      <div className="card p-4 text-center"><div className="text-2xl font-bold">{d}+</div><div className="text-xs text-slate-400">Years of data</div></div>
    </div>
  )
}
