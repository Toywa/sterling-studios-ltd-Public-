import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import FAQ from '../components/FAQ.jsx'
export default function Home(){
  return (
    <div className="bg-white">
      <SEO title="Sterling Studios LTD - Nairobi studio for M-Pesa sites" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="inline-flex px-3 py-1 rounded-full bg-[#F8FAFC] border text-[11px] font-bold tracking-widest">NAIROBI STUDIO - WHATSAPP-FIRST</div>
        <h1 className="mt-6 text-[48px] lg:text-[80px] font-extrabold leading-[0.9] tracking-[-0.04em]">We build sites<br/><span className="text-slate-300">that make M-Pesa ring.</span></h1>
        <p className="mt-6 text-[15px] leading-7 text-slate-600 max-w-[48ch]">For founders tired of slow WordPress and broken Daraja. Next.js + Supabase + real M-Pesa - 0.8s on Tecno, STK in 8s.</p>
        <div className="mt-8 flex gap-3">
          <Link to="/work" className="px-6 py-3 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold">See work</Link>
          <Link to="/contact" className="px-6 py-3 rounded-full border text-[13px] font-bold">WhatsApp - 2h reply</Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-12 grid md:grid-cols-3 gap-6">
        <Link to="/work/aurora" className="rounded-[24px] border bg-[#F8FAFC] p-8"><div className="text-[11px] font-bold">AURORA WEALTH</div><div className="mt-3 text-[18px] font-bold">Wealth firm site that closed HNW enquiries.</div></Link>
        <Link to="/work/luminapay" className="rounded-[24px] border bg-[#0F1F35] text-white p-8"><div className="text-[11px] font-bold">LUMINAPAY</div><div className="mt-3 text-[18px] font-bold">Fintech dashboard where every shilling is tracked.</div></Link>
        <Link to="/work/sokomart" className="rounded-[24px] border bg-[#F8FAFC] p-8"><div className="text-[11px] font-bold">SOKOMART KE</div><div className="mt-3 text-[18px] font-bold">Retail checkout that mama mboga can use.</div></Link>
      </div>
      <FAQ />
    </div>
  )
}
