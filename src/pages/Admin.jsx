import { useState } from 'react'
import SEO from '../components/SEO.jsx'
export default function Admin(){
  const [tab,setTab]=useState('overview')
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <SEO title="Admin Dashboard — Sterling Studios" description="Admin dashboard for Sterling Studios Ltd" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid lg:grid-cols-[240px_1fr] gap-8">
        {/* Sidebar */}
        <div className="hidden lg:block bg-white rounded-[20px] border p-4 h-fit sticky top-20">
          <div className="font-extrabold text-[13px]">STERLING ADMIN</div>
          <div className="mt-6 space-y-1 text-[13px]">
            {[
              ['overview','Overview'],
              ['projects','Projects (8)'],
              ['mpesa','M-Pesa • KES 12.4M'],
              ['clients','Clients (12)'],
              ['invoices','Invoices'],
            ].map(([k,l])=><button key={k} onClick={()=>setTab(k)} className={`w-full text-left px-3 py-2 rounded-xl ${tab===k?'bg-[#0F1F35] text-white font-bold':'text-slate-600 hover:bg-slate-50'}`}>{l}</button>)}
          </div>
          <div className="mt-6 p-3 rounded-xl bg-green-50 border border-green-100 text-[11px]"><div className="font-bold text-green-800">Live M-Pesa</div><div className="text-green-700 mt-1">96.4% success • 8s avg • KES 5.24M today</div></div>
        </div>

        {/* Main */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div><h1 className="text-[28px] font-extrabold">Admin Overview</h1><div className="text-[13px] text-slate-500">Welcome back, David — 8 active projects • 3 due this week</div></div>
            <a href="/m-pesa-demo" className="px-4 py-2 rounded-full bg-green-500 text-white text-[12px] font-bold">Live Demo →</a>
          </div>

          {/* Metrics like INSIGHTPRO + LuminaPay */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-[16px] border p-5"><div className="text-[11px] tracking-widest font-bold text-slate-400">TOTAL REVENUE</div><div className="mt-2 text-[22px] font-bold">KSh 1,284,500</div><div className="text-[11px] text-green-600 mt-1">↑ +12.4% vs last month</div></div>
            <div className="bg-white rounded-[16px] border p-5"><div className="text-[11px] tracking-widest font-bold text-slate-400">M-PESA VOLUME</div><div className="mt-2 text-[22px] font-bold">KSh 632,100</div><div className="text-[11px] text-green-600 mt-1">↑ +15.7% • 72% of total</div></div>
            <div className="bg-white rounded-[16px] border p-5"><div className="text-[11px] tracking-widest font-bold text-slate-400">ACTIVE CLIENTS</div><div className="mt-2 text-[22px] font-bold">12</div><div className="text-[11px] text-slate-500 mt-1">8 projects • 3 in review</div></div>
            <div className="bg-white rounded-[16px] border p-5"><div className="text-[11px] tracking-widest font-bold text-slate-400">CONVERSION RATE</div><div className="mt-2 text-[22px] font-bold">3.24%</div><div className="text-[11px] text-green-600 mt-1">↑ +0.6% • AURORA 3x</div></div>
          </div>

          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6">
            <div className="bg-white rounded-[20px] border p-0 overflow-hidden"><img src="/prod-analytics.webp" className="w-full h-[260px] object-cover" /><div className="p-5"><div className="font-bold">Revenue Trend (Last 6 Months) — Like INSIGHTPRO</div><div className="text-[12px] text-slate-500 mt-1">Jan-Jun • KSh 1.28M this month • M-Pesa 62%</div></div></div>
            <div className="bg-white rounded-[20px] border p-0 overflow-hidden"><img src="/prod-fintech.webp" className="w-full h-[260px] object-cover" /><div className="p-5"><div className="font-bold">LuminaPay Live — KES 12.4M</div><div className="text-[12px] text-slate-500 mt-1">8,932 txns • 1,284 users • Recent: Aisha Wambui KES 3,500 Success</div></div></div>
          </div>

          <div className="bg-white rounded-[20px] border p-6">
            <div className="flex justify-between items-center"><div className="font-bold">Projects • 8 active</div><div className="text-[11px] px-2.5 py-1 rounded-full bg-slate-50 border">View all →</div></div>
            <div className="mt-4 space-y-3 text-[13px]">
              <div className="flex justify-between p-3 rounded-xl bg-slate-50 border"><span>AURORA — Wealth • 95+ speed • 3x enquiries</span><span className="text-green-600 font-bold">Live</span></div>
              <div className="flex justify-between p-3 rounded-xl bg-slate-50 border"><span>LuminaPay — KES 12.4M • 8,932 txns • 96.4%</span><span className="text-amber-600 font-bold">In Progress</span></div>
              <div className="flex justify-between p-3 rounded-xl bg-slate-50 border"><span>SokoMart KE — KES 1,250 cart • 92% M-Pesa • 2.3x</span><span className="text-green-600 font-bold">Live</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
