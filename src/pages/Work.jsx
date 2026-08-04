export default function Work(){
  const projects = [
    {
      title: "Corporate Website • Nairobi HQ",
      client: "Professional Services • 8th Floor, Pinetree Plaza",
      desc: "High-converting corporate site. Next.js, SEO, 95+ Lighthouse, blog, WhatsApp lead forms. Built for trust and Google ranking.",
      image: "/work-corporate.webp",
      tags: ["Next.js", "SEO", "Vercel", "Lead Forms"],
      result: "3x enquiries • 95+ Speed • Live in 14 days",
      cta: "Website That Sells"
    },
    {
      title: "Fintech Dashboard + M-Pesa",
      client: "Financial Services • Kenya",
      desc: "Transactions overview, STK Push, settlements, analytics. Dark mode dashboard with KES 5.24M volume tracking. Real-time M-Pesa reconciliation.",
      image: "/work-fintech.webp",
      tags: ["Node.js", "Postgres", "Daraja API", "Dashboard"],
      result: "KES 5.24M volume • 96.4% success • 8s STK",
      cta: "Web App + Dashboard"
    },
    {
      title: "Retail E-commerce + M-Pesa Checkout",
      client: "Kenyan Retail • Fast Delivery + M-Pesa",
      desc: "Shop, cart, checkout with M-Pesa STK Push. Product grid, KES pricing, delivery tracking. Mobile-first with desktop admin.",
      image: "/work-ecommerce.webp",
      tags: ["E-commerce", "M-Pesa Checkout", "Mobile App", "Admin"],
      result: "1,250 KES AOV • M-Pesa 92% • 2.3x orders",
      cta: "E-commerce + Apps"
    }
  ]

  return (
    <div className="bg-[#FBFDFF]">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[12px] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-sterlingBlue"></span>
          Work • Selected Projects • Nairobi + Global
        </div>
        <h1 className="mt-6 text-[40px] lg:text-[56px] font-extrabold leading-[0.95] tracking-tight">
          We ship <span className="text-sterlingBlue">products that convert</span>, not just look good.
        </h1>
        <p className="mt-4 text-[17px] leading-7 text-slate-600 max-w-[640px]">
          Real client work from Pinetree Plaza. Websites, dashboards, e-commerce with M-Pesa + WhatsApp baked in. No GitHub links, no theory — live products.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 space-y-12">
        {projects.map((p, idx)=>(
          <div key={p.title} className="rounded-[28px] border border-slate-200 bg-white overflow-hidden hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)] transition">
            <div className={`grid lg:grid-cols-[1.2fr_0.8fr] ${idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative bg-slate-50">
                <img src={p.image} alt={p.title} className="w-full h-[320px] lg:h-[420px] object-cover" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-slate-200 text-[11px] font-bold tracking-widest">
                  {p.cta.toUpperCase()}
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="text-[12px] font-semibold tracking-wide text-slate-500">{p.client}</div>
                <h3 className="mt-2 text-[26px] font-bold leading-tight">{p.title}</h3>
                <p className="mt-4 text-[15px] leading-6 text-slate-600">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map(t=>(
                    <span key={t} className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-medium">{t}</span>
                  ))}
                </div>
                <div className="mt-6 p-3 rounded-xl bg-green-50 border border-green-100">
                  <div className="text-[11px] font-bold tracking-widest text-green-700">RESULT</div>
                  <div className="mt-1 text-[13px] font-semibold text-green-900">{p.result}</div>
                </div>
                <div className="mt-6">
                  <a href="https://wa.me/254722114098" className="inline-flex px-5 py-2.5 rounded-full bg-sterlingNavy text-white text-sm font-semibold hover:bg-black transition">Start Similar Project →</a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-[24px] bg-sterlingNavy p-8 lg:p-10 text-white flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <div className="text-[13px] tracking-widest opacity-60 font-semibold">YOUR PROJECT NEXT?</div>
            <div className="mt-2 text-[22px] font-bold leading-tight max-w-[520px]">3 slots per month. Tell us your idea on WhatsApp — we reply in 2 hours with fixed price.</div>
            <div className="mt-3 text-[13px] opacity-70">📍 8th Floor, Pinetree Plaza, Kaburu Dr, Off Ngong Rd • +254722114098</div>
          </div>
          <div className="flex items-start lg:items-center">
            <a href="https://wa.me/254722114098" className="px-6 py-3 rounded-full bg-white text-sterlingNavy font-bold">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
