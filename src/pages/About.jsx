
export default function About(){
  return (
    <div className="bg-white max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
      <h1 className="text-[46px] font-extrabold leading-[0.9]">We are developers<br/>at Sterling Studios.</h1>
      <p className="mt-6 text-[15px] leading-7 text-slate-600 max-w-[60ch]">We believe speed, aesthetics, and security are not features. They are the foundation. We build everything hard-coded because we want it to last.</p>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src="/human_boardroom_main.webp" className="h-[200px] w-full object-cover object-top rounded-[16px] border" />
        <img src="/human_cafe_laptop.webp" className="h-[200px] w-full object-cover object-top rounded-[16px] border" />
        <img src="/human_handshake_deal.webp" className="h-[200px] w-full object-cover object-top rounded-[16px] border" />
        <img src="/human_support_team.webp" className="h-[200px] w-full object-cover object-top rounded-[16px] border" />
      </div>
      <div className="mt-8 rounded-[24px] overflow-hidden border"><img src="/skyline_golden.webp" className="w-full h-[380px] object-cover object-center" /></div>
    </div>
  )
}
