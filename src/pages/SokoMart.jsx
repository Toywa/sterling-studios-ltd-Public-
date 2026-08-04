export default function SokoMart(){
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="text-[11px] tracking-widest font-bold text-slate-400">CASE STUDY • E-COMMERCE • SOKOMART KE</div>
        <h1 className="mt-4 text-[44px] lg:text-[56px] font-extrabold leading-[0.9]">SokoMart KE — <span className="text-sterlingBlue">2.3x orders</span> with M-Pesa.</h1>
        <p className="mt-4 text-[17px] text-slate-600 max-w-[640px]">Grocery e-commerce: Maize Flour KES 180, Cooking Oil KES 350, Sugar KES 280. Problem: COD 40% fail, no delivery tracking. Solution: M-Pesa STK Push checkout, rider flow, admin, mobile-first.</p>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-[520px] text-[13px]">
          <div className="p-4 rounded-xl bg-slate-50 border"><div className="text-[20px] font-bold">KES 1,250</div><div className="text-slate-500 text-[12px]">Avg cart</div></div>
          <div className="p-4 rounded-xl bg-green-50 border border-green-100"><div className="text-[20px] font-bold text-green-800">92%</div><div className="text-green-700 text-[12px]">M-Pesa</div></div>
          <div className="p-4 rounded-xl bg-slate-50 border"><div className="text-[20px] font-bold">2.3x</div><div className="text-slate-500 text-[12px]">Orders</div></div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-8 grid md:grid-cols-2 gap-6">
        <img src="/prod-retail.webp" className="w-full h-[420px] object-cover rounded-[24px] border" />
        <img src="/prod-mobile.webp" className="w-full h-[420px] object-cover rounded-[24px] border" />
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 grid lg:grid-cols-[0.7fr_1.3fr] gap-10">
        <div className="space-y-6 text-[13px]">
          <div><div className="font-bold">Client</div><div className="text-slate-600 mt-1">SokoMart KE • Grocery • Nairobi • 2.3x orders</div></div>
          <div><div className="font-bold">Stack</div><div className="mt-2 flex flex-wrap gap-2"><span className="px-2.5 py-1 rounded-full bg-slate-50 border text-[11px]">Next.js</span><span className="px-2.5 py-1 rounded-full bg-slate-50 border text-[11px]">Flutter</span><span className="px-2.5 py-1 rounded-full bg-slate-50 border text-[11px]">M-Pesa</span><span className="px-2.5 py-1 rounded-full bg-slate-50 border text-[11px]">Postgres</span></div></div>
          <div><div className="font-bold">Flow</div><div className="text-slate-600 mt-1 text-[12px] leading-5">Browse → Cart KES 1,250 → Checkout → STK Push prompt "Enter M-Pesa PIN" → Paid → Rider assigned → Delivered • "How It Works" 1-2-3.</div></div>
          <a href="https://wa.me/254722114098?text=I%20want%20e-commerce%20like%20SokoMart" className="mt-4 inline-flex px-5 py-2.5 rounded-full bg-sterlingNavy text-white text-sm font-bold">Start Similar →</a>
        </div>
        <div className="space-y-8 text-[15px] leading-7 text-slate-700">
          <div><h3 className="font-bold text-[18px] text-slate-900">Challenge</h3><p className="mt-2">40% COD failure, riders lost, no inventory sync, customers asked "where is my order?"</p></div>
          <div><h3 className="font-bold text-[18px] text-slate-900">Solution</h3><p className="mt-2">Built shop + cart + M-Pesa checkout: customer enters phone, STK Push, secure & encrypted payment, transaction complete in 8s. Rider app shows orders, admin shows revenue, stock. Mobile-first, KES pricing.</p></div>
          <div><h3 className="font-bold text-[18px] text-slate-900">Result</h3><p className="mt-2">92% M-Pesa, 2.3x orders, AOV KES 1,250 → KES 1,480, COD 40% → 8%, delivery time 45min avg.</p></div>
        </div>
      </section>
    </div>
  )
}
