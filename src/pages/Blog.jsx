import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
export default function Blog(){
  return (
    <div className="bg-white">
      <SEO title="Blog — M-Pesa Daraja, Next.js, Fintech | Sterling Studios Nairobi" description="Guides on M-Pesa Daraja STK Push integration Nairobi, building fintech dashboards like LuminaPay KES 12.4M, 95+ Lighthouse speed. By Sterling Studios." canonical="https://sterlingstudios.co.ke/blog" />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="text-[11px] tracking-widest font-bold text-slate-400">BLOG • SEO • M-PESA DARAJA NAIROBI</div>
        <h1 className="mt-4 text-[44px] font-extrabold leading-[0.9]">Guides to build <span className="text-sterlingBlue">products that convert</span>.</h1>
        <p className="mt-4 text-[16px] text-slate-600 max-w-[600px]">We share how we build M-Pesa Daraja integrations, fintech dashboards like LuminaPay KES 12.4M, and 95+ speed sites like AURORA. No fluff.</p>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 grid md:grid-cols-3 gap-8">
        <Link to="/blog/m-pesa-daraja-integration-nairobi" className="rounded-[20px] border overflow-hidden hover:shadow-lg transition group">
          <img src="/prod-fintech.webp" className="w-full h-[200px] object-cover" />
          <div className="p-6"><div className="text-[11px] font-bold tracking-widest text-green-600">M-PESA DARAJA • MOST READ</div><div className="mt-2 font-bold text-[18px] leading-tight group-hover:text-sterlingBlue">M-Pesa Daraja Integration Nairobi: STK Push Guide 2026</div><div className="mt-2 text-[13px] text-slate-600">Step-by-step: BusinessShortCode, STK Push, Callback, Postgres, SMS receipt. Used for LuminaPay KES 12.4M.</div><div className="mt-4 text-[11px] text-slate-400">8 min • Jan 2026 • By David Toywa</div></div>
        </Link>
        <Link to="/blog/how-we-built-luminapay-kes-12m" className="rounded-[20px] border overflow-hidden hover:shadow-lg transition group">
          <img src="/prod-analytics.webp" className="w-full h-[200px] object-cover" />
          <div className="p-6"><div className="text-[11px] font-bold tracking-widest text-slate-400">CASE STUDY • FINTECH</div><div className="mt-2 font-bold text-[18px] leading-tight group-hover:text-sterlingBlue">How We Built LuminaPay: KES 12.4M Weekly via M-Pesa</div><div className="mt-2 text-[13px] text-slate-600">From 3h Excel reconciliation to 8 min. 96.4% success, 8s STK, -60% support calls. Stack: Node, Postgres, Daraja.</div><div className="mt-4 text-[11px] text-slate-400">6 min • Dec 2025 • Case study</div></div>
        </Link>
        <Link to="/blog/why-95-lighthouse-speed-matters" className="rounded-[20px] border overflow-hidden hover:shadow-lg transition group">
          <img src="/prod-corporate.webp" className="w-full h-[200px] object-cover" />
          <div className="p-6"><div className="text-[11px] font-bold tracking-widest text-slate-400">PERFORMANCE • SEO</div><div className="mt-2 font-bold text-[18px] leading-tight group-hover:text-sterlingBlue">Why 95+ Lighthouse Speed Matters: AURORA 3x Enquiries</div><div className="mt-2 text-[13px] text-slate-600">Old WordPress 62 score → Next.js 95+. 3x enquiries, 42% longer time on site. How we did it.</div><div className="mt-4 text-[11px] text-slate-400">5 min • Nov 2025 • Performance</div></div>
        </Link>
      </section>
    </div>
  )
}
