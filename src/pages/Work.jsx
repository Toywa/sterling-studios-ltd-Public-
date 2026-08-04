export default function Work(){
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <img src="/human-skyline.webp" className="w-full h-[380px] object-cover rounded-[24px] border" alt="Nairobi skyline" />
        <div className="mt-8 max-w-[640px]"><h1 className="text-[48px] font-extrabold leading-[0.9]">Work that <span className="text-sterlingBlue">converts</span>.</h1><p className="mt-4 text-[16px] text-slate-600">Products shipped for clients worldwide. No mockups, no theory. Built by our Nairobi team, trusted globally.</p></div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 grid md:grid-cols-2 gap-10">
        <div><img src="/prod-corporate.webp" className="w-full h-[320px] object-cover rounded-[20px] border" /><div className="mt-4"><div className="font-bold text-[18px]">AURORA — Strategic Wealth</div><div className="text-[13px] text-slate-600 mt-1">Corporate • 95+ Speed • 200+ partners • Global reach</div></div></div>
        <div><img src="/prod-fintech.webp" className="w-full h-[320px] object-cover rounded-[20px] border" /><div className="mt-4"><div className="font-bold text-[18px]">LuminaPay — Fintech</div><div className="text-[13px] text-slate-600 mt-1">KES 12.4M volume • 8,932 transactions • 96.4% success</div></div></div>
        <div><img src="/prod-retail.webp" className="w-full h-[320px] object-cover rounded-[20px] border" /><div className="mt-4"><div className="font-bold text-[18px]">SokoMart KE — Retail</div><div className="text-[13px] text-slate-600 mt-1">Maize Flour KES 180 • Cart KES 1,250 • M-Pesa STK Push</div></div></div>
        <div><img src="/prod-mobile.webp" className="w-full h-[320px] object-cover rounded-[20px] border" /><div className="mt-4"><div className="font-bold text-[18px]">Mobile Checkout — Fashion</div><div className="text-[13px] text-slate-600 mt-1">Silk Shirt KES 4,500 + Bag KES 6,200 • KES 12,450 total</div></div></div>
      </section>
    </div>
  )
}
