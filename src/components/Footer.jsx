
export default function Footer(){
  return (
    <footer className="bg-[#0F1F35] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
        <div>
          <div className="font-extrabold tracking-widest text-[13px]">STERLING STUDIOS LTD</div>
          <div className="mt-4 text-[14px] leading-7 opacity-70 max-w-[52ch]">We build websites that load in 0.8s, web applications that scale, and mobile apps that feel native. For teams in East Africa, across Africa, and globally. Speed, aesthetics, and security — built in from day one.</div>
          <div className="mt-8 flex gap-8">
            <div><div className="text-[20px] font-bold">0.8s</div><div className="text-[10px] opacity-50 tracking-widest">AVG LOAD</div></div>
            <div><div className="text-[20px] font-bold">95+</div><div className="text-[10px] opacity-50 tracking-widest">LIGHTHOUSE</div></div>
            <div><div className="text-[20px] font-bold">2wk</div><div className="text-[10px] opacity-50 tracking-widest">TO SHIP</div></div>
          </div>
        </div>
        <div className="rounded-[20px] overflow-hidden border border-white/10">
          <img src="/human_team_collab.webp" alt="Sterling team" className="w-full h-[180px] object-cover object-top opacity-80" />
          <div className="p-4 bg-white/[0.05] text-[12px] leading-5 opacity-70">Built by developers in Nairobi. Designed for humans who use the product.</div>
        </div>
      </div>
    </footer>
  )
}
