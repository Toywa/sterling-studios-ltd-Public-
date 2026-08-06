
export default function Blog(){
  return (
    <div className="bg-white max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
      <div className="text-[11px] font-bold tracking-widest text-slate-500">BLOG</div>
      <h1 className="mt-3 text-[40px] font-extrabold">Guides to build products that convert.</h1>
      <p className="mt-3 text-[14px] text-slate-600">Real data from real builds. No fluff.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="rounded-[20px] border overflow-hidden"><img src="/human_female_founder.webp" className="w-full h-[200px] object-cover object-top" /><div className="p-5"><div className="text-[11px] font-bold text-green-600">CASE STUDY</div><div className="mt-2 font-bold text-[14px]">How we cut load time from 4.2s to 0.8s and tripled leads</div></div></div>
        <div className="rounded-[20px] border overflow-hidden"><img src="/human_team_standup.webp" className="w-full h-[200px] object-cover object-top" /><div className="p-5"><div className="text-[11px] font-bold">TEAM • PROCESS</div><div className="mt-2 font-bold text-[14px]">From boardroom to launch in 3 weeks</div></div></div>
        <div className="rounded-[20px] border overflow-hidden"><img src="/human_dev_coding.webp" className="w-full h-[200px] object-cover object-top" /><div className="p-5"><div className="text-[11px] font-bold">ENGINEERING</div><div className="mt-2 font-bold text-[14px]">Why we hard-code instead of using WordPress</div></div></div>
      </div>
    </div>
  )
}
