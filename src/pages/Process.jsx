export default function Process(){
  const steps = [
    {n:"01", title:"Discover", time:"Day 1-2", img:"/process-discover.webp", desc:"We map your business, customers, and M-Pesa flow. Competitor audit + user journey + fixed quote.", you:"Business goals, content, M-Pesa Till/Paybill", we:"Wireframes, sitemap, scope, fixed price"},
    {n:"02", title:"Design", time:"Day 3-5", img:"/process-design.webp", desc:"Premium Figma designs in your brand. Desktop + mobile. You approve in 24h, we iterate fast.", you:"Feedback on Figma, copy approval", we:"Figma UI, copywriting, SEO structure"},
    {n:"03", title:"Build", time:"Day 6-12", img:"/process-build.webp", desc:"Next.js + Tailwind, 95+ Lighthouse, M-Pesa Daraja + WhatsApp API. Daily staging link on WhatsApp.", you:"Review staging, test M-Pesa sandbox", we:"Code, CMS, payments, hosting, domain"},
    {n:"04", title:"Grow", time:"Day 13+ Monthly", img:"/process-grow.webp", desc:"Launch + SEO + Ads + analytics. We don't vanish after launch. Monthly retainer for growth.", you:"Go live, share leads", we:"Launch, training, SEO + Ads + support"}
  ]
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[12px] font-medium"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Process • 14 days • Fixed Price</div>
        <h1 className="mt-6 text-[44px] lg:text-[60px] font-extrabold leading-[0.95] tracking-tight">From idea to <span className="text-sterlingBlue">live in 14 days</span>.</h1>
        <p className="mt-4 text-[17px] leading-7 text-slate-600 max-w-[600px]">A premium, transparent process used by fast-moving brands. No agency fluff. Daily updates, fixed price, 95+ performance.</p>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map(s=>(
            <div key={s.n} className="rounded-[24px] border border-slate-200 bg-white overflow-hidden hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.12)] transition">
              <img src={s.img} alt={s.title} className="w-full h-[220px] object-cover" />
              <div className="p-8">
                <div className="flex justify-between items-start"><div className="w-10 h-10 rounded-xl bg-sterlingNavy text-white flex items-center justify-center font-bold text-sm">{s.n}</div><div className="text-[11px] font-bold tracking-widest px-3 py-1 rounded-full bg-slate-50 border">{s.time}</div></div>
                <h3 className="mt-5 text-[22px] font-bold">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-slate-600">{s.desc}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-[12px]">
                  <div className="p-3 rounded-xl bg-slate-50"><div className="text-[10px] font-bold tracking-widest text-slate-400">YOU PROVIDE</div><div className="mt-1 leading-5 text-slate-700">{s.you}</div></div>
                  <div className="p-3 rounded-xl bg-[#F0F7FF]"><div className="text-[10px] font-bold tracking-widest opacity-60">WE DELIVER</div><div className="mt-1 leading-5">{s.we}</div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-slate-50 border"><div className="font-bold">Fixed Price</div><div className="mt-2 text-[13px] text-slate-600">85K Starter, 280K Scale, Custom for complex. M-Pesa, Bank, Stripe, PayPal.</div></div>
          <div className="p-6 rounded-2xl bg-slate-50 border"><div className="font-bold">Daily Updates</div><div className="mt-2 text-[13px] text-slate-600">WhatsApp group + staging link daily. You see progress, not silence.</div></div>
          <div className="p-6 rounded-2xl bg-slate-50 border"><div className="font-bold">95+ & SEO</div><div className="mt-2 text-[13px] text-slate-600">95+ Lighthouse, SEO, analytics from day one. Built to convert.</div></div>
        </div>
      </section>
    </div>
  )
}
