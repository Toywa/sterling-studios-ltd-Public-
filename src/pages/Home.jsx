import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="bg-white">
      {/* HERO - Public facing */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7FF] border border-blue-100 text-[12px] font-medium text-sterlingNavy">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Nairobi HQ • Pinetree Plaza • Serving clients across Africa
            </div>
            <h1 className="mt-6 text-[42px] lg:text-[64px] font-extrabold leading-[0.9] tracking-tight">
              We build <span className="bg-gradient-to-r from-sterlingBlue to-sterlingGold bg-clip-text text-transparent">AI products</span> that grow your business.
            </h1>
            <p className="mt-5 text-[18px] leading-7 text-slate-600 max-w-[560px]">
              Websites, web apps, Android & iOS, and AI automations — all with M-Pesa, WhatsApp, and SEO built in. From idea to live in 14 days. Fixed price, daily updates from our team at 8th Floor, Pinetree Plaza.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://wa.me/254722114098" className="px-6 py-3 rounded-full bg-sterlingNavy text-white text-sm font-semibold hover:bg-black transition">Start Your Project →</a>
              <Link to="/work" className="px-6 py-3 rounded-full border border-slate-200 text-sm font-semibold hover:border-slate-300">View Our Work</Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-[13px] text-slate-500">
              <div className="flex items-center gap-2"><span className="font-bold text-sterlingNavy">12+</span> Products Shipped</div>
              <div className="w-px h-4 bg-slate-200"></div>
              <div className="flex items-center gap-2"><span className="font-bold text-sterlingNavy">95+ </span> Lighthouse Score</div>
              <div className="w-px h-4 bg-slate-200"></div>
              <div className="flex items-center gap-2"><span className="font-bold text-sterlingNavy">M-Pesa</span> & WhatsApp Native</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[24px] overflow-hidden border border-slate-200 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.2)]">
              <img src="/home-dashboard.webp" alt="Sterling Studios products" className="w-full h-[420px] lg:h-[520px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden lg:block rounded-2xl bg-white border border-slate-200 p-4 shadow-xl w-[240px]">
              <div className="text-[11px] font-bold tracking-widest text-slate-400">LIVE TODAY</div>
              <div className="mt-2 text-[13px] font-semibold">KES 5.24M processed via M-Pesa this week</div>
              <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full w-[88%] bg-green-500"></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS / TRUST */}
      <section className="border-y border-slate-100 bg-[#FBFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4 text-[12px] tracking-widest text-slate-400 font-semibold">
          <span>TRUSTED BY GROWING BRANDS IN</span>
          <div className="flex flex-wrap gap-6 text-slate-600 font-medium tracking-normal text-[13px]">
            <span>Nairobi</span><span>•</span><span>Mombasa</span><span>•</span><span>Kisumu</span><span>•</span><span>Kigali</span><span>•</span><span>Lagos</span><span>•</span><span>Remote Global</span>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <h2 className="text-[32px] font-extrabold leading-tight">What we build for you</h2>
          <Link to="/services" className="text-sm font-semibold underline">Explore all services →</Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {t:"Websites That Sell", d:"5-page Next.js, SEO, blog, M-Pesa + WhatsApp forms. From 85K KES, 2 weeks.", img:"/home-corporate.webp"},
            {t:"Web Apps + M-Pesa", d:"Dashboard, auth, Daraja STK Push, admin. From 280K KES, 4-6 weeks.", img:"/home-fintech.webp"},
            {t:"E-commerce + Apps", d:"Shop + rider app + M-Pesa checkout. Flutter + Next.js. Custom quote.", img:"/home-ecommerce.webp"},
          ].map(c=>(
            <div key={c.t} className="rounded-[20px] border border-slate-200 overflow-hidden bg-white hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.12)] transition">
              <img src={c.img} alt={c.t} className="w-full h-[200px] object-cover" />
              <div className="p-6">
                <div className="font-bold">{c.t}</div>
                <div className="mt-2 text-[13px] leading-5 text-slate-600">{c.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="rounded-[28px] bg-sterlingNavy text-white p-8 lg:p-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="text-[12px] tracking-widest opacity-60 font-bold">WHY STERLING STUDIOS LTD</div>
            <h3 className="mt-4 text-[30px] lg:text-[36px] font-bold leading-[1.05]">We ship from Nairobi. We support like family. We build for M-Pesa economy.</h3>
            <ul className="mt-6 space-y-3 text-[14px] leading-6 text-white/80">
              <li>✓ Fixed price, no hourly — 85K Starter, 280K Scale, Custom for complex</li>
              <li>✓ M-Pesa Daraja, WhatsApp Cloud API, Till / Paybill native — not add-ons</li>
              <li>✓ Daily WhatsApp updates, staging link, 95+ Lighthouse, SEO from day 1</li>
              <li>✓ Office: 8th Floor, Pinetree Plaza, Kaburu Dr, Off Ngong Rd — visit anytime</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="https://wa.me/254722114098" className="px-6 py-3 rounded-full bg-white text-sterlingNavy font-bold text-sm">Start on WhatsApp</a>
              <Link to="/process" className="px-6 py-3 rounded-full border border-white/20 text-sm font-semibold">How we work →</Link>
            </div>
          </div>
          <div className="rounded-[20px] overflow-hidden">
            <img src="/home-team.webp" alt="Team at Pinetree Plaza" className="w-full h-[360px] object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-[24px] border border-slate-200 bg-white p-8 lg:p-10 flex flex-col lg:flex-row justify-between gap-6 items-center">
          <div>
            <div className="text-[22px] font-bold">Ready to start? Your slot is this Monday.</div>
            <div className="mt-2 text-[14px] text-slate-600">3 projects per month. Fixed price. Reply in 2 hours. M-Pesa, Bank, Stripe, PayPal.</div>
          </div>
          <a href="https://wa.me/254722114098" className="px-7 py-3 rounded-full bg-sterlingBlue text-white font-bold text-sm hover:bg-sterlingBlueDark">Get Fixed Quote on WhatsApp</a>
        </div>
      </section>
    </div>
  )
}
