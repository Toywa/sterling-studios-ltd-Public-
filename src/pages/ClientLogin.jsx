import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function ClientLogin(){
  const [code,setCode]=useState('')
  const nav=useNavigate()
  const login=()=>{
    // Simple client access: client code or phone
    // Replace with Supabase magic link later
    if(code.length>=4){
      localStorage.setItem('sterling_client','true')
      localStorage.setItem('sterling_client_code',code)
      nav('/client')
    }
  }
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div className="bg-white rounded-[24px] border p-8 w-full max-w-[380px]">
        <div className="font-extrabold">CLIENT PORTAL • LOGIN</div>
        <div className="mt-2 text-[13px] text-slate-500">Enter your project code sent on WhatsApp. Eg: AURORA-80</div>
        <input value={code} onChange={e=>setCode(e.target.value)} placeholder="Project code or phone" className="mt-6 w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
        <button onClick={login} className="mt-4 w-full py-3 rounded-full bg-green-500 text-white font-bold text-sm">Open My Project →</button>
      </div>
    </div>
  )
}
