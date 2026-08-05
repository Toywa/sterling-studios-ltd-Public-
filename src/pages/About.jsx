import SEO from '../components/SEO.jsx'
import { Link } from 'react-router-dom'
export default function About(){
  return (
    <div className="bg-white">
      <SEO title="About — David Toywa | Sterling Studios" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border text-[11px] font-bold tracking-widest">BASED • NAIROBI, KENYA</div>
        <h1 className="mt-6 text-[48px] lg:text-[72px] font-extrabold leading-[0.9] tracking-[-0.03em]">We build sites that<br/><span className="text-slate-300">make M-Pesa ring.</span></h1>
        <p className="mt-6 text-[16px] leading-7 text-slate-600 max-w-[52ch]">Not Dribbble shots. Not WordPress. Real KES in dashboard.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.3fr_0.7fr] gap-12 pb-20">
        <div className="space-y-6 text-[14px] leading-7 text-slate-700">
          <p className="text-[20px] leading-8 font-medium text-[#0F1F35]">I am David Toywa — founder, developer, M-Pesa specialist based in Nairobi.</p>
          <p>Sterling exists because Kenyan business sites look premium but do not convert. Wealth firms lose HNW leads to slow Elementor. Fintechs lose 20 percent of M-Pesa revenue to broken Daraja callbacks. Retailers lose 40 percent checkout to Till number confusion.</p>
          <p>We fix that with <span className="font-bold">Next.js 14 + Supabase + Daraja + Vercel Edge</span> — 0.8s load on Tecno, STK push in 8s, dashboard showing KES 12.4M processed, 96.4 percent success, 8,932 transactions.</p>
          
          <div className="grid grid-cols-3 gap-8 border-y py-8 mt-8">
            <div><div className="text-[32px] font-extrabold tracking-tight">KES 12.4M</div><div className="text-[11px] font-bold tracking-widest opacity-60 mt-1">M-PESA PROCESSED</div></div>
            <div><div className="text-[32px] font-extrabold tracking-tight">96.4%</div><div className="text-[11px] font-bold tracking-widest opacity-60 mt-1">STK SUCCESS</div></div>
            <div><div className="text-[32px] font-extrabold tracking-tight">95+</div><div className="text-[11px] font-bold tracking-widest opacity-60 mt-1">LIGHTHOUSE</div></div>
          </div>

          <div className="pt-4">
            <Link to="/work" className="inline-flex px-6 py-3 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold">See work — AURORA, LuminaPay</Link>
            <Link to="/contact" className="inline-flex ml-3 px-6 py-3 rounded-full border text-[13px] font-bold">Let us talk</Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[24px] border bg-[#F8FAFC] p-8">
            <div className="text-[11px] font-bold tracking-[0.2em] opacity-60">STACK</div>
            <div className="mt-4 space-y-2 text-[13px]"><div>• Next.js 14 + Tailwind + Framer Motion</div><div>• Supabase Postgres + RLS</div><div>• Daraja API STK / C2B / B2C / Transaction Status</div><div>• Vercel Edge + Analytics</div><div>• Africa's Talking SMS receipts</div></div>
            <div className="mt-8 text-[11px] font-bold tracking-[0.2em] opacity-60">VALUES</div>
            <div className="mt-3 flex flex-wrap gap-2"><span className="px-3 py-1 bg-white border rounded-full text-[11px] font-bold">Speed over Pretty</span><span className="px-3 py-1 bg-white border rounded-full text-[11px] font-bold">KES over Clicks</span><span className="px-3 py-1 bg-white border rounded-full text-[11px] font-bold">Ship in 2 weeks</span><span className="px-3 py-1 bg-white border rounded-full text-[11px] font-bold">WhatsApp-first</span></div>
          </div>

          <div className="rounded-[24px] border p-8">
            <div className="text-[11px] font-bold tracking-[0.2em] opacity-60">CONTACT</div>
            <div className="mt-3 text-[13px] leading-6">Nairobi, Kenya<br/>hello@sterlingstudios.com<br/>+254 722 114 098</div>
            <a href="https://wa.me/254722114098" target="_blank" className="mt-4 inline-flex px-4 py-2 rounded-full bg-[#25D366] text-[#0F1F35] text-[12px] font-bold">WhatsApp — 2h reply</a>
          </div>
        </div>
      </div>
    </div>
  )
}
