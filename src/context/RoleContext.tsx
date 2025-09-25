import React, { createContext, useContext, useEffect, useState } from 'react'

type Role = 'citizen' | 'policy' | null
type Ctx = { role: Role; setRole: (r: Role)=>void }
const RoleContext = createContext<Ctx>({ role: null, setRole: ()=>{} })

export function RoleProvider({ children }: React.PropsWithChildren){
  const [role, setRole] = useState<Role>(null)
  useEffect(()=>{ setRole((localStorage.getItem('role') as Role) ?? null) }, [])
  useEffect(()=>{ if(role) localStorage.setItem('role', role) }, [role])
  return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>
}

export function useRole(){ return useContext(RoleContext) }


