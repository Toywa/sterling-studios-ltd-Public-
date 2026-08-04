import { Link } from 'react-router-dom'
export default function Work(){
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <img src="/human-skyline.webp" className="w-full h-[380px] object-cover rounded-[24px] border" alt="Nairobi skyline" />
        <div className="mt-8 max-w-[640px]"><h1 className="text-[48px] font-extrabold leading-[0.9]">Work that <span className="text-sterlingBlue">converts</span>.</h1><p className="mt-4 text-[16px] text-slate-600">Click any project for full case study — metrics, stack, story. Built in Nairobi, trusted worldwide.</p></div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 grid md:grid-cols-3 gap-8">
        <Link to="/work/aurora" className="group"><img src="/prod-corporate.webp" className="w-full h-[280px] object-cover rounded-[20px] border group-hover:shadow-lg transition" /><div className="mt-4"><div className="font-bold flex justify-between"><span>AURORA — Wealth</span><span className="text-sterlingBlue">→</span></div><div className="text-[12px] text-slate-500 mt-1">3x enquiries • 95+ Speed • Case study</div></div></Link>
        <Link to="/work/luminapay" className="group"><img src="/prod-fintech.webp" className="w-full h-[280px] object-cover rounded-[20px] border group-hover:shadow-lg transition" /><div className="mt-4"><div className="font-bold flex justify-between"><span>LuminaPay — Fintech</span><span className="text-sterlingBlue">→</span></div><div className="text-[12px] text-slate-500 mt-1">KES 12.4M • 96.4% • Case study</div></div></Link>
        <Link to="/work/sokomart" className="group"><img src="/prod-retail.webp" className="w-full h-[280px] object-cover rounded-[20px] border group-hover:shadow-lg transition" /><div className="mt-4"><div className="font-bold flex justify-between"><span>SokoMart KE — Retail</span><span className="text-sterlingBlue">→</span></div><div className="text-[12px] text-slate-500 mt-1">2.3x orders • 92% M-Pesa • Case study</div></div></Link>
      </section>
    </div>
  )
}
