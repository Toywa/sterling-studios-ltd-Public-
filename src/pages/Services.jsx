export default function Services(){
  const services = [
    {
      title: "Website That Converts",
      price: "From 85,000 KES",
      badge: "MOST POPULAR",
      img: "/service-website.webp",
      desc: "High-performance Next.js website built for trust and conversion. 95+ Lighthouse, SEO, blog, and lead forms that actually close.",
      features: ["Next.js 14 + Tailwind • 95+ Speed", "SEO + Blog + Analytics", "M-Pesa / WhatsApp Lead Forms", "Domain + Hosting + SSL"],
      timeline: "2 weeks"
    },
    {
      title: "Web App + Dashboard",
      price: "From 280,000 KES",
      badge: "SCALE",
      img: "/service-dashboard.webp",
      desc: "For fintech, logistics, and growing operations. Auth, roles, transactions, real-time analytics — like the KES 12.4M dashboard.",
      features: ["Auth + Roles + RBAC", "M-Pesa Daraja + Admin Logs", "Postgres + API + File Uploads", "Real-time Revenue + Settlements"],
      timeline: "4-6 weeks"
    },
    {
      title: "Android & iOS Apps",
      price: "Custom Quote",
      badge: "FLUTTER",
      img: "/service-mobile.webp",
      desc: "One codebase, two platforms. Flutter apps with M-Pesa STK Push, push notifications, and in-app purchases.",
      features: ["Flutter • iOS + Android", "Push Notifications + Deep Links", "M-Pesa + In-App Purchase", "Play Store + App Store Deploy"],
      timeline: "6-8 weeks"
    },
    {
      title: "AI Products & Automations",
      price: "Custom Quote",
      badge: "AI • PYTHON",
      img: "/service-ai.webp",
      desc: "WhatsApp AI bots, document AI, lead scoring. Automate support and sales — not just a chatbot, a conversion engine.",
      features: ["WhatsApp AI Assistant", "Document / Data AI", "Lead Scoring + CRM", "Python + OpenAI API"],
      timeline: "3-5 weeks"
    },
    {
      title: "M-Pesa & Payments Stack",
      price: "From 25,000 KES",
      badge: "KENYA STACK",
      img: "/service-mpesa.webp",
      desc: "The payment layer every Kenyan business needs. Lipa Na M-Pesa, STK Push, Till, Paybill, callbacks, auto receipts.",
      features: ["Daraja STK Push + Callbacks", "Till / Paybill Integration", "Auto Receipts + SMS", "Reconciliation Dashboard"],
      timeline: "1 week add-on"
    },
    {
      title: "Growth & Marketing",
      price: "From 45,000 KES / mo",
      badge: "RETAINER",
      img: "/service-growth.webp",
      desc: "We don't disappear after launch. SEO, Google Ads, content, and monthly growth reporting. 126.4k sessions case study.",
      features: ["SEO + Google Business", "Google Ads + Conversions", "Content + Email Flows", "Monthly Growth Report"],
      timeline: "Monthly"
    }
  ]

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[12px] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-sterlingBlue"></span>
          Services • Premium • Fixed Pricing
        </div>
        <h1 className="mt-6 text-[44px] lg:text-[56px] font-extrabold leading-[0.95] tracking-tight">
          Premium products, <span className="text-sterlingBlue">built to convert</span>.
        </h1>
        <p className="mt-4 text-[17px] leading-7 text-slate-600 max-w-[640px]">
          We design and ship websites, web apps, mobile apps, and AI automations for ambitious brands across Africa. Fixed price, fast delivery, M-Pesa native.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s,i)=>(
            <div key={s.title} className="group rounded-[24px] border border-slate-200 bg-white overflow-hidden hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)] hover:border-slate-300 transition">
              <div className="relative">
                <img src={s.img} alt={s.title} className="w-full h-[220px] object-cover group-hover:scale-[1.02] transition duration-500" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold tracking-widest border border-slate-200">{s.badge}</div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-semibold">{s.timeline}</div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[18px] leading-tight">{s.title}</h3>
                <div className="mt-1 font-extrabold text-[13px] text-sterlingBlue">{s.price}</div>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-slate-600">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.features.map(f=>(
                    <li key={f} className="flex gap-2 text-[12px] text-slate-700"><span className="text-green-500">✓</span> {f}</li>
                  ))}
                </ul>
                <a href="https://wa.me/254722114098" className="mt-6 flex w-full justify-center px-4 py-2.5 rounded-full bg-sterlingNavy text-white text-[13px] font-semibold hover:bg-black transition">Enquire →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[24px] bg-[#0F1F35] p-8 lg:p-10 text-white flex flex-col lg:flex-row justify-between gap-6 items-center">
          <div>
            <div className="text-[13px] tracking-widest opacity-60 font-semibold">NEED SOMETHING CUSTOM?</div>
            <div className="mt-2 text-[22px] font-bold leading-tight max-w-[560px]">Tell us your business in one WhatsApp message. We reply in 2 hours with scope, fixed price, and timeline.</div>
          </div>
          <a href="https://wa.me/254722114098" className="shrink-0 px-7 py-3 rounded-full bg-white text-sterlingNavy font-bold text-sm">Chat on WhatsApp</a>
        </div>
      </section>
    </div>
  )
}
