export default function Process(){
  const steps = [
    {
      n: "01",
      title: "Discover",
      time: "Day 1-2",
      desc: "We jump on WhatsApp call. You share business goals, M-Pesa flow, customers. We audit competitors and map user journey.",
      you: "Share business, logo, content, M-Pesa till / paybill",
      we: "Research, wireframes, sitemap, fixed quote + timeline",
      color: "blue"
    },
    {
      n: "02",
      title: "Design",
      time: "Day 3-5",
      desc: "Figma designs in your blue/gold brand. Homepage + key pages. You approve in 24h, we iterate.",
      you: "Feedback on Figma — approve colors, copy",
      we: "Figma desktop + mobile, copywriting, SEO structure",
      color: "gold"
    },
    {
      n: "03",
      title: "Build",
      time: "Day 6-12",
      desc: "Next.js + Tailwind, 95+ Lighthouse, M-Pesa Daraja + WhatsApp API, forms to email + WhatsApp. Daily updates on WhatsApp.",
      you: "Review staging link, test M-Pesa sandbox",
      we: "Code, CMS, payments, hosting on Vercel, domain",
      color: "blue"
    },
    {
      n: "04",
      title: "Grow",
      time: "Day 13+ & Monthly",
      desc: "Launch, Google Business, SEO, Ads, analytics. We don't disappear after launch — monthly growth retainer.",
      you: "Go live! Share feedback, leads",
      we: "Launch, train your team, SEO + Ads + support",
      color: "gold"
    }
  ]

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[12px] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          Process • 2-6 weeks • Nairobi HQ + Remote
        </div>
        <h1 className="mt-6 text-[40px] lg:text-[56px] font-extrabold leading-[0.95] tracking-tight">
          From idea to <span className="text-sterlingBlue">live in 14 days</span>, not 4 months.
        </h1>
        <p className="mt-4 text-[17px] leading-7 text-slate-600 max-w-[640px]">
          We work from 8th Floor, Pinetree Plaza, Kaburu Dr. Fixed process, daily WhatsApp updates, fixed price. No agency fluff, no surprises.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-2 gap-6">
          {steps.map(s=>(
            <div key={s.n} className="rounded-[24px] border border-slate-200 p-8 bg-white hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.12)] transition">
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-extrabold ${s.color==='blue' ? 'bg-sterlingBlue text-white' : 'bg-sterlingGold text-sterlingNavy'}`}>{s.n}</div>
                <div className="text-[12px] font-bold tracking-widest px-3 py-1 rounded-full bg-slate-50 border border-slate-200">{s.time}</div>
              </div>
              <h3 className="mt-6 text-[24px] font-bold">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-6 text-slate-600">{s.desc}</p>
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-[13px]">
                <div className="p-3 rounded-xl bg-slate-50">
                  <div className="text-[11px] font-bold tracking-widest text-slate-400">YOU PROVIDE</div>
                  <div className="mt-1 leading-5 text-slate-700">{s.you}</div>
                </div>
                <div className={`p-3 rounded-xl ${s.color==='blue' ? 'bg-[#F0F7FF]' : 'bg-[#FFF8E6]'}`}>
                  <div className="text-[11px] font-bold tracking-widest opacity-60">WE DELIVER</div>
                  <div className="mt-1 leading-5 text-slate-800">{s.we}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            {t:"Fixed Price", d:"No hourly. 85K, 280K, or custom quote. M-Pesa, Stripe, PayPal, Bank."},
            {t:"Daily Updates", d:"WhatsApp group. Staging link daily. You see progress, not silence."},
            {t:"95+ Speed + SEO", d:"Lighthouse 95+, SEO, Google Business, analytics from day 1."}
          ].map(c=>(
            <div key={c.t} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-bold">{c.t}</div>
              <div className="mt-2 text-[13px] leading-5 text-slate-600">{c.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[24px] bg-sterlingNavy p-8 lg:p-10 text-white flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <div className="text-[13px] tracking-widest opacity-60 font-semibold">NEXT SLOT</div>
            <div className="mt-2 text-[22px] font-bold leading-tight max-w-[520px]">Kickoff Monday • We take 3 projects/month. Your slot is 2 weeks from WhatsApp to live.</div>
            <div className="mt-3 text-[13px] opacity-70">+254722114098 • info@sterlingstudios.com • Invoices from Sterling Studios Ltd</div>
          </div>
          <div className="flex items-start lg:items-center">
            <a href="https://wa.me/254722114098" className="px-6 py-3 rounded-full bg-white text-sterlingNavy font-bold">Lock My Slot on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
