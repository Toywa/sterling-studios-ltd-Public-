import { useState, useEffect } from 'react'
import SEO from '../components/SEO.jsx'
import { supabase } from '../lib/supabaseClient.js'

const FALLBACK_PROJECTS = [
  { id:'1', name:'AURORA â€” Wealth', client_name:'James AURORA', status:'Live', progress:100, revenue:85000, mpesa_volume:0, staging_url:'https://aurora.sterling.co.ke' },
  { id:'2', name:'LuminaPay â€” Fintech', client_name:'LuminaPay Ltd', status:'In Progress', progress:80, revenue:280000, mpesa_volume:12400000, staging_url:'https://luminapay.staging' },
  { id:'3', name:'SokoMart KE â€” Retail', client_name:'SokoMart', status:'Live', progress:100, revenue:150000, mpesa_volume:1250000, staging_url:'https://sokomart.co.ke' },
]

export default function Admin(){
  const [projects,setProjects]=useState(FALLBACK_PROJECTS)
  const [tab,setTab]=useState('overview')

  useEffect(()=>{
    async function load(){
      if(!supabase) return
      const { data } = await supabase.from('projects').select('*').limit(20)
      if(data && data.length) setProjects(data)
    }
    load()
  },[])

  const logout=()=>{ localStorage.removeItem('sterling_admin'); window.location.href='/admin-login' }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <SEO title="Admin Dashboard â€” Sterlings Studio" description="Admin dashboard" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid lg:grid-cols-[240px_1fr] gap-8">
        <div className="hidden lg:block bg-white rounded-[20px] border p-4 h-fit sticky top-20">
          <div className="font-extrabold text-[13px]">STERLING ADMIN</div>
          <div className="mt-6 space-y-1 text-[13px]">
            {['overview','projects','mpesa','invoices'].map(k=><button key={k} onClick={()=>setTab(k)} className={`w-full text-left px-3 py-2 rounded-xl ${tab===k?'bg-[#0F1F35] text-white font-bold':'text-slate-600 hover:bg-slate-50'}`}>{k.toUpperCase()}</button>)}
          </div>
          <button onClick={logout} className="mt-6 w-full py-2 rounded-full border text-[12px]">Logout</button>
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-center"><h1 className="text-[28px] font-extrabold">Admin â€¢ {supabase?'Postgres Live':'Fallback Data'}</h1><div className="text-[11px] px-2 py-1 rounded-full bg-green-50 border border-green-200 text-green-700">{supabase?'Supabase Connected':'Set VITE_SUPABASE_URL to go live'}</div></div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-[16px] border p-5"><div className="text-[11px] font-bold text-slate-400">REVENUE</div><div className="text-[22px] font-bold">KSh {projects.reduce((s,p)=>s+p.revenue,0).toLocaleString()}</div></div>
            <div className="bg-white rounded-[16px] border p-5"><div className="text-[11px] font-bold text-slate-400">M-PESA VOL</div><div className="text-[22px] font-bold">KSh {(projects.reduce((s,p)=>s+p.mpesa_volume,0)/1000).toFixed(0)}k</div></div>
            <div className="bg-white rounded-[16px] border p-5"><div className="text-[11px] font-bold text-slate-400">PROJECTS</div><div className="text-[22px] font-bold">{projects.length}</div></div>
            <div className="bg-white rounded-[16px] border p-5"><div className="text-[11px] font-bold text-slate-400">CLIENTS</div><div className="text-[22px] font-bold">12</div></div>
          </div>
          <div className="bg-white rounded-[20px] border p-6">
            <div className="font-bold">Projects Table â€” Postgres</div>
            <div className="mt-4 space-y-2 text-[13px]">
              {projects.map(p=><div key={p.id} className="flex justify-between p-3 rounded-xl bg-slate-50 border"><span>{p.name} â€¢ {p.client_name} â€¢ {p.progress}%</span><span className="font-bold">{p.status}</span></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

