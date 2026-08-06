
export default function Contact(){
  return (
    <div className="bg-white max-w-[1280px] mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
      <div>
        <h1 className="text-[44px] font-extrabold leading-[0.9]">Let's build something<br/><span className="text-slate-400">fast and useful.</span></h1>
        <div className="mt-8 rounded-[16px] border p-5 bg-[#F8FAFC]"><div className="text-[11px] font-bold">EMAIL</div><div className="font-bold mt-1">hello@sterlingstudios.co.ke</div><div className="text-[12px] text-slate-500 mt-1">We reply in 2 hours. You talk directly to developers.</div></div>
        <div className="mt-4 rounded-[16px] border p-5"><div className="text-[11px] font-bold">PRICING</div><div className="text-[12px] mt-2 leading-5 text-slate-600">Websites from KES 180k • Web apps from KES 450k • Mobile from KES 600k. No WordPress fees. You own the code.</div></div>
      </div>
      <div className="rounded-[24px] overflow-hidden border"><img src="/human_founder_smile.webp" alt="Founder" className="w-full h-[360px] object-cover object-top" /><div className="p-4 text-[12px] text-slate-600">Founder to founder — no sales team, just builders.</div></div>
    </div>
  )
}
