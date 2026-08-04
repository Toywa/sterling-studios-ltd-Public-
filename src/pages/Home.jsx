import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[12px] font-medium text-slate-600">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for new projects • Nairobi HQ
            </div>
            <h1 className="mt-6 text-[40px] lg:text-[56px] font-extrabold leading-[0.95] tracking-tight text-sterlingNavy">
              We build <span className="text-sterlingBlue">websites</span> that grow your business.
            </h1>
            <p className="mt-5 text-[18px] leading-7 text-slate-600 max-w-[560px]">
              Sterling Studios Ltd is a Nairobi web studio. Next.js, M-Pesa, WhatsApp API, SEO that actually ranks. From Pinetree Plaza to your customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/254722114098" className="px-6 py-3 rounded-full bg-sterlingNavy text-white font-semibold text-[15px] hover:bg-black transition">Chat on WhatsApp</a>
              <Link to="/pricing" className="px-6 py-3 rounded-full border border-slate-200 font-semibold text-[15px] hover:bg-slate-50 transition">View Pricing</Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-[13px] text-slate-500">
              <div className="flex items-center gap-2"><span className="font-semibold text-sterlingNavy">M-Pesa</span> • Stripe • PayPal • Bank</div>
              <div className="hidden md:flex items-center gap-2">⚡ <span>Hosting on Vercel • 95+ Speed</span></div>
            </div>
          </div>
          {/* RIGHT CARD */}
          <div className="relative">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 lg:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
              <div className="flex justify-between items-start">
                <div className="text-[12px] font-semibold tracking-widest text-slate-400">LIVE PROJECTS</div>
                <div className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-[11px] font-semibold">● 3 active</div>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  {name:"Athi River Ecommerce", status:"Build", price:"85K KES"},
                  {name:"Nairobi Fintech Dashboard", status:"Growth", price:"280K KES"},
                  {name:"Scale — Full Product", status:"Custom", price:"Custom"},
                ].map(r=>(
                  <div key={r.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                    <div>
                      <div className="font-semibold text-[14px]">{r.name}</div>
                      <div className="text-[12px] text-slate-500">{r.status} • {r.price}</div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-sterlingBlue"></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-sterlingNavy text-white">
                <div className="text-[12px] opacity-70">Next slot</div>
                <div className="font-semibold mt-1">Kickoff this Monday • 2-week delivery for Starter</div>
                <div className="mt-2 text-[12px] opacity-70">+254722114098 • info@sterlingstudios.com</div>
              </div>
            </div>
            {/* floating S */}
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center rotate-3">
              <span className="text-2xl font-extrabold text-sterlingBlue">S</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-100 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-wrap gap-6 text-[13px] text-slate-600 items-center justify-center lg:justify-between">
          <span className="font-medium">Built with Next.js • SEO + Speed 95+ • M-Pesa + WhatsApp + Forms</span>
          <span className="text-slate-400">📍 Pinetree Plaza, Kaburu Dr, Ngong Rd, Nairobi</span>
        </div>
      </section>

      {/* WHAT WE DO PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end">
          <h2 className="text-[28px] font-bold tracking-tight">What we do</h2>
          <Link to="/services" className="text-sm font-semibold text-sterlingBlue hover:text-sterlingBlueDark">See all services →</Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {t:"Website that sells", d:"5-page Next.js, SEO, 95+ speed, hosting on Vercel"},
            {t:"Web App + Dashboard", d:"Auth, Payments, Roles, M-Pesa + WhatsApp API"},
            {t:"Growth & Marketing", d:"Google Ads, SEO, automations, full growth team"},
          ].map(c=>(
            <div key={c.t} className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="font-semibold">{c.t}</div>
              <div className="mt-2 text-sm text-slate-600">{c.d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
