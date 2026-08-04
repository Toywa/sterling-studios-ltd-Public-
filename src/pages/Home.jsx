export default function Home(){
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-[11px] tracking-widest font-bold text-slate-400">STERLING STUDIOS LTD • NAIROBI • GLOBAL</div>
          <h1 className="mt-5 text-[48px] lg:text-[64px] font-extrabold leading-[0.9] tracking-tight">Premium products that <span className="text-sterlingBlue">grow businesses</span>.</h1>
          <p className="mt-6 text-[18px] leading-7 text-slate-600">We build websites, web apps, mobile apps, and AI — fast, fixed price, with M-Pesa, Stripe, and WhatsApp native. Live in 14 days.</p>
          <div className="mt-8 flex gap-3"><a href="https://wa.me/254722114098" className="px-7 py-3 rounded-full bg-sterlingNavy text-white text-sm font-bold">Start Project →</a><a href="/work" className="px-7 py-3 rounded-full border border-slate-200 text-sm font-semibold">View Work</a></div>
        </div>
        <div className="relative">
          <img src="/human-founder.webp" className="w-full h-[520px] object-cover rounded-[24px] border border-slate-100" alt="Founder dashboard" />
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-slate-200 p-4 shadow-lg hidden lg:block"><div className="text-[11px] font-bold tracking-widest text-slate-400">LIVE DASHBOARD</div><div className="mt-1 text-[13px] font-semibold">KSh 124,560 • Fintech • M-Pesa 62%</div></div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div><img src="/prod-corporate.webp" className="w-full h-[240px] object-cover rounded-2xl border" /><div className="mt-4"><div className="font-bold">Corporate Websites</div><div className="mt-1 text-[13px] text-slate-600">AURORA style • 95+ speed • From 85K • 2 weeks</div></div></div>
          <div><img src="/prod-fintech.webp" className="w-full h-[240px] object-cover rounded-2xl border" /><div className="mt-4"><div className="font-bold">Fintech Dashboards</div><div className="mt-1 text-[13px] text-slate-600">LuminaPay • KES 12.4M • From 280K</div></div></div>
          <div><img src="/prod-retail.webp" className="w-full h-[240px] object-cover rounded-2xl border" /><div className="mt-4"><div className="font-bold">E-commerce + M-Pesa</div><div className="mt-1 text-[13px] text-slate-600">SokoMart KE • Custom • STK Push</div></div></div>
        </div>
      </section>
    </div>
  )
}
