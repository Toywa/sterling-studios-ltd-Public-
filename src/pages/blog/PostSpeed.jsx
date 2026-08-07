import SEO from '../../components/SEO.jsx'
export default function PostSpeed(){
  return (
    <div className="bg-white">
      <SEO title="Why 95+ Lighthouse Speed Matters: AURORA 3x Enquiries | Sterling Studios" description="How we rebuilt AURORA wealth site from 62 to 95+ Lighthouse, 3x enquiries, 42% longer time. Next.js, Tailwind, Vercel, SEO. By Sterling Studios Nairobi." canonical="https://sterlingsstudio.com/blog/why-95-lighthouse-speed-matters" />
      <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-16 pb-20">
        <div className="text-[11px] tracking-widest font-bold text-slate-400">PERFORMANCE • AURORA • SEO</div>
        <h1 className="mt-4 text-[36px] lg:text-[44px] font-extrabold leading-[0.95]">Why 95+ Lighthouse Speed Matters: AURORA 3x Enquiries</h1>
        <div className="mt-4 text-[13px] text-slate-500">5 min • Nov 2025</div>
        <img src="/prod-corporate.webp" className="mt-8 w-full h-[380px] object-cover rounded-[20px] border" />
        <div className="mt-10 space-y-6 text-[16px] leading-8 text-slate-700">
          <p><b>AURORA</b> had a 2008-era WordPress, 62 Lighthouse, 8s bounce. High-net-worth clients left. We rebuilt in Next.js 14, Tailwind, luxury blue/gold (#004E89/#D4A017), 200+ partners section, global reach.</p>
          <p><b>Result:</b> 95+ Lighthouse, 3x enquiries in 30 days, 42% longer time on site, ranked for "wealth management Nairobi".</p>
          <p><b>How:</b> Next.js Image optimization, font subset, edge caching on Vercel, no heavy sliders, SEO schema, blog.</p>
          <div className="p-6 rounded-[20px] bg-slate-50 border"><div className="font-bold">Want 95+ speed?</div><div className="text-[14px] mt-2"><a href="/work/aurora" className="underline">See AURORA case study →</a></div></div>
        </div>
      </article>
    </div>
  )
}
