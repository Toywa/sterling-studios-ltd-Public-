import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function AdminLogin(){
  const [pass,setPass]=useState('')
  const [error,setError]=useState('')
  const nav=useNavigate()
  const login=()=>{
    // TODO: Replace with real Supabase Auth. For now env check.
    // Set VITE_ADMIN_PASS in Vercel env to your real password
    const correct = import.meta.env.VITE_ADMIN_PASS || 'Sterling2026!'
    if(pass===correct){
      localStorage.setItem('sterling_admin','true')
      nav('/admin')
    } else setError('Wrong password. Hint: check VITE_ADMIN_PASS or use Sterling2026! in dev')
  }
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div className="bg-white rounded-[24px] border p-8 w-full max-w-[380px]">
        <div className="font-extrabold">STERLING ADMIN • LOGIN</div>
        <div className="mt-2 text-[13px] text-slate-500">Enter admin password. Set VITE_ADMIN_PASS in Vercel for production.</div>
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Admin password" className="mt-6 w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" onKeyDown={e=>e.key==='Enter'&&login()} />
        {error&&<div className="mt-3 text-[12px] text-red-600">{error}</div>}
        <button onClick={login} className="mt-4 w-full py-3 rounded-full bg-[#0F1F35] text-white font-bold text-sm">Login → Dashboard</button>
        <div className="mt-4 text-[11px] text-slate-400">Dev default: Sterling2026! • Production: use env</div>
      </div>
    </div>
  )
}
