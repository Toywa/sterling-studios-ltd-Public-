import SEO from '../components/SEO.jsx'
export default function ClientPortal(){
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <SEO title="Client Portal — Your Project | Sterling Studios" description="Client portal for project tracking, invoices, M-Pesa payments" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex justify-between items-start">
          <div><div className="text-[11px] tracking-widest font-bold text-slate-400">CLIENT PORTAL • AURORA WEALTH</div><h1 className="mt-2 text-[28px] font-extrabold">Welcome, James — your project is 80% live</h1><div className="mt-2 text-[13px] text-slate-500">Project: AURORA — Strategic Wealth. Elevated. • Next update: Today 5PM on WhatsApp</div></div>
          <a href="https://wa.me/254722114098" className="px-4 py-2 rounded-full bg-green-500 text-white text-[12px] font-bold">Chat on WhatsApp →</a>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-[20px] border p-6">
              <div className="font-bold">Project Progress — 80%</div>
              <div className="mt-4 w-full h-2 rounded-full bg-slate-100 overflow-hidden"><div className="h-2 bg-sterlingNavy w-[80%]"></div></div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-[12px]">
                <div className="p-3 rounded-xl bg-green-50 border border-green-100"><div className="font-bold">✓ Discover</div><div className="text-green-700">Done • Day 1-2</div></div>
                <div className="p-3 rounded-xl bg-green-50 border border-green-100"><div className="font-bold">✓ Design</div><div className="text-green-700">Done • Day 3-5 • Figma approved</div></div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-100"><div className="font-bold">◐ Build</div><div className="text-amber-700">80% • Day 6-12 • Staging link below</div></div>
              </div>
              <div className="mt-4"><img src="/prod-corporate.webp" className="w-full h-[240px] object-cover rounded-[16px] border" /><div className="mt-3 text-[12px] text-slate-500">Staging: aurora.sterlingstudios.co.ke • 95+ Lighthouse • 200+ partners section live</div></div>
            </div>

            <div className="bg-white rounded-[20px] border p-6">
              <div className="font-bold">Files & Deliverables</div>
              <div className="mt-4 space-y-2 text-[13px]">
                <div className="flex justify-between p-3 rounded-xl border"><span>Figma — AURORA Desktop + Mobile</span><span className="text-sterlingBlue">View →</span></div>
                <div className="flex justify-between p-3 rounded-xl border"><span>Content — 5 pages SEO optimized</span><span className="text-sterlingBlue">View →</span></div>
                <div className="flex justify-between p-3 rounded-xl border"><span>Staging Link — 95+ speed</span><span className="text-green-600 font-bold">Live</span></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[20px] border p-6">
              <div className="font-bold">Invoice • Pay via M-Pesa</div>
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border text-[13px] space-y-2">
                <div className="flex justify-between"><span>AURORA Website</span><span className="font-bold">85,000 KES</span></div>
                <div className="flex justify-between"><span>Hosting (1 yr)</span><span>0 KES (included)</span></div>
                <div className="flex justify-between font-bold border-t pt-2 mt-2"><span>Total Paid</span><span className="text-green-600">KES 42,500 • 50%</span></div>
                <div className="flex justify-between"><span>Balance</span><span className="font-bold">KES 42,500</span></div>
              </div>
              <button className="mt-4 w-full py-3 rounded-full bg-green-500 text-white font-bold text-sm">Pay KES 42,500 with M-Pesa →</button>
              <div className="mt-2 text-[11px] text-center text-slate-400">STK Push to 254722114098 • Till 123456 • Receipt auto</div>
            </div>

            <div className="bg-[#0F1F35] rounded-[20px] p-6 text-white">
              <div className="text-[11px] tracking-widest font-bold opacity-60">SUPPORT • 2H REPLY</div>
              <div className="mt-3 font-bold">Need changes? WhatsApp us.</div>
              <div className="mt-2 text-[13px] opacity-70">Daily updates 9AM & 5PM EAT. We reply in 2h. No email delays.</div>
              <a href="https://wa.me/254722114098?text=Hi%20Sterling%20-%20AURORA%20project%20update" className="mt-4 inline-flex px-5 py-2.5 rounded-full bg-white text-[#0F1F35] text-sm font-bold">Open WhatsApp →</a>
            </div>

            <div className="bg-white rounded-[20px] border p-0 overflow-hidden"><img src="/prod-mobile.webp" className="w-full h-[200px] object-cover" /><div className="p-4"><div className="font-bold text-[13px]">Your site will work like SokoMart checkout</div><div className="text-[11px] text-slate-500 mt-1">KES 12,450 • Silk Shirt + Bag • Pay with M-Pesa • STK Push • Secure</div></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
