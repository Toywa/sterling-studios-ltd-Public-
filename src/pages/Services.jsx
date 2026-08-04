export default function Services(){
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[48px] font-extrabold leading-[0.9]">Services built for <span className="text-sterlingBlue">real revenue</span>.</h1>
            <p className="mt-4 text-[16px] leading-7 text-slate-600 max-w-[520px]">We don't sell templates. We build premium products — websites, apps, AI — that convert. Fixed price, daily updates, serving clients worldwide from Nairobi.</p>
          </div>
          <img src="/human-boardroom.webp" className="w-full h-[360px] object-cover rounded-[24px] border" alt="Team strategy" />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 grid md:grid-cols-3 gap-8">
        <div className="rounded-[20px] border p-0 overflow-hidden"><img src="/prod-corporate.webp" className="w-full h-[200px] object-cover" /><div className="p-6"><div className="font-bold">Website That Converts</div><div className="text-[12px] font-bold text-sterlingBlue mt-1">From 85K • 2 weeks</div><div className="mt-3 text-[13px] text-slate-600">AURORA style: Strategic Wealth. Elevated. 200+ partners, global reach, since 2018.</div></div></div>
        <div className="rounded-[20px] border p-0 overflow-hidden"><img src="/prod-fintech.webp" className="w-full h-[200px] object-cover" /><div className="p-6"><div className="font-bold">Fintech + M-Pesa</div><div className="text-[12px] font-bold text-sterlingBlue mt-1">From 280K • 4-6 weeks</div><div className="mt-3 text-[13px] text-slate-600">LuminaPay: KES 12.4M volume, 8,932 txns, 1,284 active users, M-Pesa 72%.</div></div></div>
        <div className="rounded-[20px] border p-0 overflow-hidden"><img src="/prod-analytics.webp" className="w-full h-[200px] object-cover" /><div className="p-6"><div className="font-bold">Analytics + Growth</div><div className="text-[12px] font-bold text-sterlingBlue mt-1">From 45K/mo</div><div className="mt-3 text-[13px] text-slate-600">INSIGHTPRO: KSh 1.28M revenue, 8,742 users, 62% M-Pesa, conversion 3.24%.</div></div></div>
      </section>
    </div>
  )
}
