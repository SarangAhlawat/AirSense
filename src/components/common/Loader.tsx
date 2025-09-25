import React from 'react'

export default function Loader(){
  return (
    <div className="flex items-center gap-2 text-slate-400">
      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.2s]"></div>
      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></div>
      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></div>
      <span className="text-sm">Loading...</span>
    </div>
  )
}


