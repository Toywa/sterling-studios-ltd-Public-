import { useState } from 'react'

export default function Pricing(){
  const [usd, setUsd] = useState(false)
  const rate = 130
  const fmt = (kes) => usd ? `$${Math.round(kes/rate).toLocaleString()}` : `${(kes/1000)}K KES`

  const tiers = [
    {
      name: "Starter",
      priceKES: 85000,
      tag: "For SMEs • Most Popular",
      desc: "Website that sells. 5-page Next.js, SEO, blog, M-Pesa + WhatsApp forms, Vercel hosting.",
      features: ["5 pages • Home, Services, Work, Process, Contact", "Next.js 14 + Tailwind • 95+ Lighthouse", "SEO + Blog + Google Business", "M-Pesa / WhatsApp lead forms", "Domain + Vercel hosting setup", "2 weeks • 1 revision round"],
      cta: "Start Starter — 85K",
      highlight: false
    },
    {
      name: "Scale",
      priceKES: 280000,
      tag: "For Growing Brands • Best Value",
      desc: "Web app + dashboard. Auth, roles, payments, admin. For fintech, logistics, edtech with M-Pesa Daraja.",
      features: ["Everything in Starter, plus:", "Auth + Roles + RBAC + Dashboard", "M-Pesa Daraja STK Push + Admin logs", "Stripe / PayPal / Bank integration", "Postgres + API + File uploads", "4-6 weeks • Priority support"],
      cta: "Start Scale — 280K",
      highlight: true
    },
    {
      name: "Custom",
      priceKES: 0,
      tag: "For Ambitious Products • AI + Mobile",
      desc: "Flutter apps, AI automations, multi-vendor, AI chatbots. For complex products needing mobile + AI.",
      features: ["Flutter iOS + Android • One codebase", "AI bots • WhatsApp AI • Doc AI", "Multi-vendor, marketplace, logistics", "Advanced analytics + Growth retainer", "Team from Pinetree Plaza + Remote", "Custom timeline + SLA"],
      cta: "Get Custom Quote",
      highlight: false
    }
  ]

  return (
    <div className="bg-[#FBFDFF]">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[12px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Pricing • Fixed • No hourly • Nairobi HQ
          </div>
          <div className="flex items-center gap-3 text-[13px]">
            <span className={!usd ? 'font-bold' : 'text-slate-500'}>KES</span>
            <button onClick={()=>setUsd(!usd)} className="w-12 h-6 rounded-full bg-slate-200 relative">
              <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition ${usd ? 'right-0.5' : 'left-0.5'}`}></div>
            </button>
            <span className={usd ? 'font-bold' : 'text-slate-500'}>USD</span>
          </div>
        </div>

        <h1 className="mt-6 text-[40px] lg:text-[56px] font-extrabold leading-[0.95] tracking-tight">
          Simple pricing. <span className="text-sterlingBlue">Fixed price</span>, no surprises.
        </h1>
        <p className="mt-4 text-[17px] leading-7 text-slate-600 max-w-[640px]">
          85K Starter, 280K Scale, Custom for complex. M-Pesa, Bank, Stripe, PayPal. Invoices from Sterling Studios Ltd, Pinetree Plaza, Ngong Rd.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map(t=>(
            <div key={t.name} className={`rounded-[24px] border p-8 flex flex-col ${t.highlight ? 'bg-sterlingNavy text-white border-sterlingNavy shadow-[0_24px_60px_-20px_rgba(15,31,53,0.4)] scale-[1.02]' : 'bg-white border-slate-200'}`}>
              <div className={`text-[11px] font-bold tracking-widest ${t.highlight ? 'text-sterlingGold' : 'text-sterlingBlue'}`}>{t.tag.toUpperCase()}</div>
              <h3 className="mt-3 text-[28px] font-extrabold">{t.name}</h3>
              <div className="mt-2">
                {t.priceKES === 0 ? (
                  <div className="text-[32px] font-extrabold">Custom</div>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-[32px] font-extrabold">{fmt(t.priceKES)}</span>
                    <span className={`text-[13px] ${t.highlight ? 'text-white/60' : 'text-slate-500'}`}>{usd ? '' : '/ project'}</span>
                  </div>
                )}
              </div>
              <p className={`mt-3 text-[14px] leading-5 ${t.highlight ? 'text-white/70' : 'text-slate-600'}`}>{t.desc}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map(f=>(
                  <li key={f} className="flex gap-2 text-[13px] leading-5">
                    <span className={t.highlight ? 'text-sterlingGold' : 'text-green-500'}>✓</span>
                    <span className={t.highlight ? 'text-white/90' : 'text-slate-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/254722114098" className={`mt-8 px-5 py-3 rounded-full text-center font-bold text-sm ${t.highlight ? 'bg-white text-sterlingNavy hover:bg-slate-100' : 'bg-sterlingNavy text-white hover:bg-black'}`}>
                {t.cta}
              </a>

              <div className={`mt-4 text-[11px] text-center ${t.highlight ? 'text-white/50' : 'text-slate-400'}`}>M-Pesa • Bank • Stripe • PayPal</div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-12 rounded-[20px] border border-slate-200 bg-white p-6 lg:p-8">
          <h4 className="font-bold text-[18px]">Add-ons • Kenya Stack</h4>
          <div className="mt-4 grid md:grid-cols-3 gap-4 text-[13px]">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="font-semibold">M-Pesa Daraja Integration</div>
              <div className="mt-1 text-slate-600">STK Push, Till, Paybill, callbacks, receipts, admin logs</div>
              <div className="mt-2 font-bold">+25,000 KES</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="font-semibold">WhatsApp Cloud API + Bulk</div>
              <div className="mt-1 text-slate-600">Verified, templates, automations, CRM logging</div>
              <div className="mt-2 font-bold">+20,000 KES</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="font-semibold">Growth Retainer</div>
              <div className="mt-1 text-slate-600">SEO, Google Ads, content, monthly report from HQ</div>
              <div className="mt-2 font-bold">From 45,000 KES/mo</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="text-[13px] text-slate-500">📍 8th Floor, Pinetree Plaza, Kaburu Dr, Off Ngong Rd, Nairobi • Invoices from Sterling Studios Ltd</div>
          <div className="mt-2 text-[13px] text-slate-500">+254722114098 • info@sterlingstudios.com • KES & USD • M-Pesa, Bank, Stripe, PayPal</div>
        </div>
      </section>
    </div>
  )
}
