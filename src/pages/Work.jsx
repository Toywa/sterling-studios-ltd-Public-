export default function Work(){
  const projects = [
    {
      title: "Corporate Platform",
      tag: "WEBSITE • CONVERSION",
      desc: "Premium corporate website designed for trust and SEO. 95+ Lighthouse, blog, lead forms that close — not just look good.",
      img: "/work-corporate.webp",
      metrics: "3x enquiries • 95+ Speed • 14 days",
      stack: ["Next.js","Tailwind","SEO","Vercel"]
    },
    {
      title: "Fintech Dashboard",
      tag: "WEB APP • M-PESA",
      desc: "Transaction analytics, STK Push, settlements. Dark mode dashboard processing KES 5.24M weekly with 96.4% success rate.",
      img: "/work-fintech.webp",
      metrics: "KES 5.24M • 96.4% • 8s STK",
      stack: ["Node","Postgres","Daraja","Dashboard"]
    },
    {
      title: "Retail Commerce",
      tag: "E-COMMERCE • MOBILE",
      desc: "Shop + cart + M-Pesa checkout + rider flow. Mobile-first commerce with KES pricing and real-time delivery.",
      img: "/work-ecommerce.webp",
      metrics: "1,250 KES AOV • 92% M-Pesa • 2.3x orders",
      stack: ["E-commerce","M-Pesa","Mobile","Admin"]
    }
  ]
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[12px] font-medium">Selected Work • Live Products</div>
        <h1 className="mt-6 text-[44px] lg:text-[60px] font-extrabold leading-[0.95] tracking-tight">Products that <span className="text-sterlingBlue">convert</span>, not just look good.</h1>
        <p className="mt-4 text-[17px] leading-7 text-slate-600 max-w-[600px]">Real client products. Websites, dashboards, commerce — all with M-Pesa and WhatsApp native. No mockups, no theory.</p>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 space-y-12">
        {projects.map((p,i)=>(
          <div key={p.title} className="rounded-[28px] border border-slate-200 bg-white overflow-hidden hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)] transition">
            <div className={`grid lg:grid-cols-[1.2fr_0.8fr] ${i%2===1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative bg-slate-50"><img src={p.img} alt={p.title} className="w-full h-[340px] lg:h-[440px] object-cover" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur border text-[10px] font-bold tracking-widest">{p.tag}</div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-[28px] font-bold leading-tight">{p.title}</h3>
                <p className="mt-4 text-[15px] leading-6 text-slate-600">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">{p.stack.map(s=><span key={s} className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-medium">{s}</span>)}</div>
                <div className="mt-6 p-3 rounded-xl bg-green-50 border border-green-100"><div className="text-[11px] font-bold tracking-widest text-green-700">RESULT</div><div className="mt-1 text-[13px] font-semibold text-green-900">{p.metrics}</div></div>
                <a href="https://wa.me/254722114098" className="mt-6 inline-flex px-5 py-2.5 rounded-full bg-sterlingNavy text-white text-sm font-semibold">Start Similar Project →</a>
              </div>
            </div>
          </div>
        ))}
        <div className="rounded-[24px] bg-sterlingNavy p-8 lg:p-10 text-white flex justify-between flex-col lg:flex-row gap-6"><div><div className="text-[13px] tracking-widest opacity-60 font-semibold">YOUR PROJECT NEXT?</div><div className="mt-2 text-[22px] font-bold max-w-[520px]">3 slots per month. We reply in 2 hours with fixed scope and price.</div></div><a href="https://wa.me/254722114098" className="px-6 py-3 rounded-full bg-white text-sterlingNavy font-bold h-fit">Chat on WhatsApp</a></div>
      </section>
    </div>
  )
}
