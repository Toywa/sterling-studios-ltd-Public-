import { useState } from 'react'
export default function Pricing(){
  const [usd,setUsd]=useState(false)
  const rate=130
  const fmt=(kes)=> usd ? `$${Math.round(kes/rate).toLocaleString()}` : `${(kes/1000)}K KES`
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border text-[12px] font-medium">Pricing • Fixed • Premium</div>
          <div className="flex items-center gap-3 text-[13px]"><span className={!usd?'font-bold':'text-slate-400'}>KES</span><button onClick={()=>setUsd(!usd)} className="w-12 h-6 rounded-full bg-slate-200 relative"><div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${usd?'right-0.5':'left-0.5'}`}></div></button><span className={usd?'font-bold':'text-slate-400'}>USD</span></div>
        </div>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mt-6">
          <div>
            <h1 className="text-[44px] lg:text-[60px] font-extrabold leading-[0.95] tracking-tight">Simple, <span className="text-sterlingBlue">fixed pricing</span>.</h1>
            <p className="mt-4 text-[17px] leading-7 text-slate-600 max-w-[560px]">No hourly billing. No surprises. Premium products with M-Pesa, Stripe, and PayPal. Built for growth across Africa.</p>
          </div>
          <div className="rounded-[20px] overflow-hidden border border-slate-200"><img src="/pricing-hero.webp" alt="Pricing" className="w-full h-[280px] object-cover" /></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {name:"Starter", price:85000, tag:"MOST POPULAR • SME", desc:"Website that sells. Next.js, SEO, blog, M-Pesa + WhatsApp forms.", features:["5 pages • Home, Services, Work, Process, Contact","Next.js 14 + Tailwind • 95+","SEO + Blog + Analytics","M-Pesa / WhatsApp forms","Domain + Hosting + SSL","2 weeks"], cta:"Start Starter", highlight:false},
            {name:"Scale", price:280000, tag:"BEST VALUE • GROWING", desc:"Web app + dashboard. Auth, roles, M-Pesa Daraja, admin.", features:["Everything in Starter, plus:","Auth + Roles + RBAC","M-Pesa Daraja STK + Logs","Stripe / PayPal / Bank","Postgres + API","4-6 weeks • Priority"], cta:"Start Scale", highlight:true},
            {name:"Custom", price:0, tag:"AI + MOBILE • COMPLEX", desc:"Flutter apps, AI automations, multi-vendor. For ambitious products.", features:["Flutter iOS + Android","AI Bots • WhatsApp AI","Multi-vendor, Marketplace","Advanced Analytics","Dedicated Team","Custom SLA"], cta:"Get Custom Quote", highlight:false},
          ].map(t=>(
            <div key={t.name} className={`rounded-[24px] border p-8 flex flex-col ${t.highlight?'bg-sterlingNavy text-white border-sterlingNavy shadow-[0_24px_60px_-20px_rgba(15,31,53,0.4)] scale-[1.02]':'bg-white border-slate-200'}`}>
              <div className={`text-[11px] font-bold tracking-widest ${t.highlight?'text-sterlingGold':'text-sterlingBlue'}`}>{t.tag}</div>
              <h3 className="mt-3 text-[28px] font-extrabold">{t.name}</h3>
              <div className="mt-2 text-[32px] font-extrabold">{t.price===0?'Custom':fmt(t.price)}</div>
              <p className={`mt-3 text-[14px] ${t.highlight?'text-white/70':'text-slate-600'}`}>{t.desc}</p>
              <ul className="mt-6 space-y-3 flex-1">{t.features.map(f=><li key={f} className="flex gap-2 text-[13px]"><span className={t.highlight?'text-sterlingGold':'text-green-500'}>✓</span><span className={t.highlight?'text-white/90':'text-slate-700'}>{f}</span></li>)}</ul>
              <a href="https://wa.me/254722114098" className={`mt-8 px-5 py-3 rounded-full text-center font-bold text-sm ${t.highlight?'bg-white text-sterlingNavy':'bg-sterlingNavy text-white'}`}>{t.cta} →</a>
              <div className={`mt-4 text-[11px] text-center ${t.highlight?'text-white/50':'text-slate-400'}`}>M-Pesa • Bank • Stripe • PayPal</div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-[20px] border bg-white p-6 grid md:grid-cols-3 gap-4 text-[13px]">
          <div className="p-4 rounded-xl bg-slate-50 border"><div className="font-semibold">M-Pesa Daraja</div><div className="mt-1 text-slate-600">STK Push, Till, Paybill, callbacks, receipts</div><div className="mt-2 font-bold">+25,000 KES</div></div>
          <div className="p-4 rounded-xl bg-slate-50 border"><div className="font-semibold">WhatsApp API</div><div className="mt-1 text-slate-600">Verified, templates, automations, CRM</div><div className="mt-2 font-bold">+20,000 KES</div></div>
          <div className="p-4 rounded-xl bg-slate-50 border"><div className="font-semibold">Growth Retainer</div><div className="mt-1 text-slate-600">SEO, Ads, content, monthly report</div><div className="mt-2 font-bold">From 45K /mo</div></div>
        </div>
      </section>
    </div>
  )
}
