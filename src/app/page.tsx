"use client"
import Dashboard from './useContext/Dashboard'
import { DashboardContext } from './useContext/context'
import { useState } from 'react'

export default function Home() {
  const [user,setUser]=useState({
    isSuscribed:true,
    name:'Rajan'
  })
  return (
    <main className='p-5'>
      <h1>State Mananagement in NextJs.</h1>
      <div>
       <DashboardContext.Provider value={user}>
        <Dashboard />
       </DashboardContext.Provider>
      </div>
    </main>
  )
}
