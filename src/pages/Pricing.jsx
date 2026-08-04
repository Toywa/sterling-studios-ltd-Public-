import { useState } from 'react'
export default function Pricing(){
  const [usd,setUsd]=useState(false)
  const rate=130
  const fmt=(k)=> usd? `$${Math.round(k/rate)}` : `${k/1000}K KES`
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <h1 className="text-[48px] font-extrabold leading-[0.9]">Simple, <span className="text-sterlingBlue">fixed pricing</span>.</h1>
        <p className="mt-4 text-[16px] text-slate-600 max-w-[520px]">No hourly. No surprises. Premium quality, worldwide delivery. M-Pesa, Stripe, PayPal.</p>
        <div className="mt-6 flex items-center gap-3 text-[13px]"><span className={!usd?'font-bold':''}>KES</span><button onClick={()=>setUsd(!usd)} className="w-12 h-6 rounded-full bg-slate-200 relative"><div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition ${usd?'right-0.5':'left-0.5'}`}></div></button><span className={usd?'font-bold':''}>USD</span></div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-[20px] border p-7 bg-white"><div className="text-[11px] font-bold tracking-widest text-slate-400">STARTER • MOST POPULAR</div><div className="mt-3 text-[32px] font-extrabold">{fmt(85000)}</div><div className="mt-3 text-[13px] text-slate-600 leading-5">Website like AURORA: Strategic Wealth. Elevated. 200+ partners, global reach. 5 pages, 95+ speed, SEO.</div><div className="mt-6 p-4 rounded-xl bg-slate-50 border text-[12px]">✓ Next.js + Tailwind<br/>✓ SEO + Blog<br/>✓ M-Pesa / Stripe forms<br/>✓ 2 weeks</div><a href="https://wa.me/254722114098" className="mt-6 block text-center py-3 rounded-full bg-sterlingNavy text-white text-sm font-bold">Start Starter →</a></div>
          <div className="rounded-[20px] border p-7 bg-sterlingNavy text-white scale-[1.02] shadow-xl"><div className="text-[11px] font-bold tracking-widest text-sterlingGold">SCALE • BEST VALUE</div><div className="mt-3 text-[32px] font-extrabold">{fmt(280000)}</div><div className="mt-3 text-[13px] text-white/70 leading-5">Dashboard like LuminaPay: KES 12.4M volume, 8,932 txns, 1,284 active users, revenue trend.</div><div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/10 text-[12px] text-white/80">✓ Auth + Roles + RBAC<br/>✓ M-Pesa Daraja STK<br/>✓ Postgres + API<br/>✓ 4-6 weeks</div><a href="https://wa.me/254722114098" className="mt-6 block text-center py-3 rounded-full bg-white text-sterlingNavy text-sm font-bold">Start Scale →</a></div>
          <div className="rounded-[20px] border p-7 bg-white"><div className="text-[11px] font-bold tracking-widest text-slate-400">CUSTOM • MOBILE + AI</div><div className="mt-3 text-[32px] font-extrabold">Custom</div><div className="mt-3 text-[13px] text-slate-600 leading-5">App like SokoMart KE + Shopping Cart: KES 12,450 checkout, STK Push, rider flow.</div><div className="mt-6 p-4 rounded-xl bg-slate-50 border text-[12px]">✓ Flutter iOS + Android<br/>✓ E-commerce + M-Pesa<br/>✓ AI automations<br/>✓ Custom SLA</div><a href="https://wa.me/254722114098" className="mt-6 block text-center py-3 rounded-full border border-slate-200 text-sm font-bold">Get Quote →</a></div>
        </div>
      </section>
    </div>
  )
}
