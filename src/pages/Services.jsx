import { Link } from 'react-router-dom'

const services = [
  {
    title: "Website That Sells",
    tag: "Most Popular • 85K KES",
    desc: "5-page Next.js site, SEO-ready, 95+ Lighthouse, M-Pesa + WhatsApp forms, Vercel hosting. For startups & SMEs who need leads, not just a pretty site.",
    includes: ["Next.js 14 + Tailwind", "SEO + Blog setup", "M-Pesa / WhatsApp Forms", "Vercel Hosting + Domain"],
    timeline: "2 weeks",
    price: "From 85,000 KES",
    color: "blue"
  },
  {
    title: "Web App + Dashboard",
    tag: "Scale • 280K KES",
    desc: "Auth, roles, payments, real-time data. For fintech, logistics, edtech. Built on Next.js + Node + Postgres + M-Pesa API.",
    includes: ["Auth + Roles + RBAC", "Stripe / PayPal / M-Pesa Daraja", "Admin Dashboard", "API + Postgres"],
    timeline: "4-6 weeks",
    price: "From 280,000 KES",
    color: "gold"
  },
  {
    title: "Android & iOS Apps",
    tag: "Flutter • Cross-Platform",
    desc: "One codebase, two platforms. For businesses needing mobile reach. Flutter + Firebase + M-Pesa integration.",
    includes: ["Flutter App", "Push Notifications", "M-Pesa + In-App Purchase", "Play Store + App Store Deploy"],
    timeline: "6-8 weeks",
    price: "Custom Quote",
    color: "blue"
  },
  {
    title: "AI Products & Automations",
    tag: "AI • Python",
    desc: "AI chatbots, document AI, lead scoring, WhatsApp AI. For ambitious brands automating support and sales.",
    includes: ["WhatsApp AI Bot", "Document / Data AI", "Lead Scoring", "Python + OpenAI API"],
    timeline: "3-5 weeks",
    price: "Custom Quote",
    color: "gold"
  },
  {
    title: "M-Pesa + WhatsApp API",
    tag: "Kenya Stack • 25K add-on",
    desc: "Lipa Na M-Pesa Online, STK Push, WhatsApp Cloud API, Bulk SMS. The Kenya conversion stack every site needs.",
    includes: ["Daraja API STK Push", "WhatsApp Cloud API", "Auto Receipts + SMS", "Mpesa + CRM Logs"],
    timeline: "1 week add-on",
    price: "From 25,000 KES",
    color: "blue"
  },
  {
    title: "Growth & Marketing",
    tag: "Retainer • SEO + Ads",
    desc: "SEO, Google Ads, content, email. Not just build — we grow. Monthly retainer with reporting from Pinetree Plaza.",
    includes: ["SEO + Google Business", "Google Ads Setup", "Content + Email Flows", "Monthly Growth Report"],
    timeline: "Monthly",
    price: "From 45,000 KES/mo",
    color: "gold"
  },
]

export default function Services(){
  return (
    <div className="bg-[#FBFDFF]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[12px] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-sterlingBlue"></span>
          Services • Nairobi HQ + Global Remote
        </div>
        <h1 className="mt-6 text-[40px] lg:text-[56px] font-extrabold leading-[0.95] tracking-tight">
          Services that <span className="text-sterlingBlue">convert</span>, not just look good.
        </h1>
        <p className="mt-4 text-[17px] leading-7 text-slate-600 max-w-[640px]">
          Everything we build at 8th Floor, Pinetree Plaza — websites, apps, AI. Fixed pricing for Starter & Scale, custom for complex. M-Pesa, Stripe, PayPal accepted.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-[13px]">
          <a href="https://wa.me/254722114098" className="px-5 py-2.5 rounded-full bg-sterlingNavy text-white font-semibold">Get Quote on WhatsApp</a>
          <Link to="/pricing" className="px-5 py-2.5 rounded-full border border-slate-200 bg-white font-semibold">Compare Pricing →</Link>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s,i)=>(
            <div key={s.title} className="group rounded-[20px] border border-slate-200 bg-white p-6 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] hover:border-slate-300 transition">
              <div className="flex justify-between items-start">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-[13px] ${s.color==='blue' ? 'bg-sterlingBlue' : 'bg-sterlingGold text-sterlingNavy'}`}>
                  {i+1}
                </div>
                <div className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200">{s.timeline}</div>
              </div>
              <h3 className="mt-5 font-bold text-[18px] leading-tight">{s.title}</h3>
              <div className={`mt-2 text-[11px] font-bold tracking-widest ${s.color==='blue' ? 'text-sterlingBlue' : 'text-sterlingGoldDark'}`}>{s.tag.toUpperCase()}</div>
              <p className="mt-3 text-[14px] leading-6 text-slate-600">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.includes.map(item=>(
                  <li key={item} className="flex gap-2 text-[13px] text-slate-700">
                    <span className="text-green-500 mt-[1px]">✓</span> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <div className="font-extrabold text-[14px]">{s.price}</div>
                <a href="https://wa.me/254722114098" className="text-[13px] font-semibold text-sterlingNavy hover:text-sterlingBlue">Enquire →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-[24px] bg-sterlingNavy p-8 lg:p-10 text-white flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <div className="text-[13px] tracking-widest opacity-60 font-semibold">NOT SURE WHAT YOU NEED?</div>
            <div className="mt-2 text-[22px] font-bold leading-tight max-w-[520px]">Tell us your business on WhatsApp. We reply in 2 hours with a fixed quote and timeline.</div>
            <div className="mt-3 text-[13px] opacity-70">+254722114098 • info@sterlingstudios.com • Pinetree Plaza, Ngong Rd</div>
          </div>
          <div className="flex items-start lg:items-center">
            <a href="https://wa.me/254722114098" className="px-6 py-3 rounded-full bg-white text-sterlingNavy font-bold">Chat Now — Free Quote</a>
          </div>
        </div>
      </section>
    </div>
  )
}
