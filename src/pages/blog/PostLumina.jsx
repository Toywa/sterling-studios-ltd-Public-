import SEO from '../../components/SEO.jsx'
export default function PostLumina(){
  return (
    <div className="bg-white">
      <SEO title="How We Built LuminaPay: KES 12.4M Weekly via M-Pesa | Sterlings Studio Nairobi" description="Case study: LuminaPay fintech dashboard KES 12.4M weekly, 8,932 txns, 1,284 active users, 96.4% M-Pesa success, 8s STK Push. Built with Node, Postgres, Daraja. By Sterlings Studio." canonical="https://sterlingsstudio.com/blog/how-we-built-luminapay-kes-12m" />
      <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-16 pb-20">
        <div className="text-[11px] tracking-widest font-bold text-slate-400">CASE STUDY â€¢ FINTECH â€¢ LUMINAPAY</div>
        <h1 className="mt-4 text-[36px] lg:text-[44px] font-extrabold leading-[0.95]">How We Built LuminaPay: KES 12.4M Weekly via M-Pesa</h1>
        <div className="mt-4 text-[13px] text-slate-500">Case study â€¢ 6 min â€¢ Dec 2025</div>
        <img src="/prod-analytics.webp" className="mt-8 w-full h-[380px] object-cover rounded-[20px] border" />
        <div className="mt-10 space-y-6 text-[16px] leading-8 text-slate-700">
          <p><b>Challenge:</b> Finance team spent 3h daily reconciling M-Pesa Tills on Excel. 40+ "where is my payment?" calls/day. No real-time dashboard.</p>
          <p><b>Solution:</b> Built dashboard you saw: Overview (Total Balance KES 124,850.20, Total Transactions 2,847, Success Rate 96.4%, Total Volume KES 5.24M), Transaction Volume Over Time graph, Transactions by Category pie (Buy Goods, Paybill, Airtime), Recent Transactions table.</p>
          <p><b>Stack:</b> Next.js + Node.js API + Postgres + Daraja STK Push + Africa's Talking SMS + Vercel.</p>
          <p><b>Result:</b> 3h â†’ 8 min reconciliation, 96.4% success, 8s avg, -60% support calls, KES 12.4M weekly now tracked.</p>
          <div className="p-6 rounded-[20px] bg-slate-50 border"><div className="font-bold">Want similar dashboard?</div><div className="text-[14px] mt-2"><a href="/work/luminapay" className="underline">See full case study â†’</a> or <a href="https://wa.me/254722114098" className="underline font-bold">WhatsApp us</a></div></div>
        </div>
      </article>
    </div>
  )
}

