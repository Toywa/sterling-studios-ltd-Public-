import { Link } from 'react-router-dom'
export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#0F1F35] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="text-[15px] font-extrabold tracking-tight">STERLING STUDIOS LTD</div>
          <div className="mt-3 text-[13px] leading-6 text-slate-300 max-w-[32ch]">Nairobi studio shipping Next.js + Supabase + Daraja. 0.8s load, 96.4 percent STK success, KES 12.4M processed for AURORA and LuminaPay.</div>
          <div className="mt-6 flex gap-2">
            <a href="https://instagram.com/davidtoywa" target="_blank" title="IG @davidtoywa" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-bold hover:bg-white hover:text-[#0F1F35] transition">IG</a>
            <a href="https://facebook.com/davidmtoywa" target="_blank" title="FB davidmtoywa" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-bold hover:bg-white hover:text-[#0F1F35] transition">FB</a>
            <a href="https://threads.com/@davidtoywa" target="_blank" title="Threads @davidtoywa" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-bold hover:bg-white hover:text-[#0F1F35] transition">TH</a>
            <a href="https://linkedin.com/in/davidtoywa" target="_blank" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-bold hover:bg-white hover:text-[#0F1F35] transition">LI</a>
            <a href="https://x.com/davidtoywa" target="_blank" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-bold hover:bg-white hover:text-[#0F1F35] transition">X</a>
          </div>
          <div className="mt-6 text-[11px] leading-5 text-slate-400">Nairobi, Kenya<br/>hello@sterlingstudios.com • +254 722 114 098</div>
        </div>
        <div><div className="text-[11px] font-bold tracking-widest opacity-50">STUDIO</div><div className="mt-4 space-y-2 text-[13px] text-slate-300"><Link to="/about" className="block hover:text-white">About / Story</Link><Link to="/work" className="block hover:text-white">Work - AURORA, LuminaPay, SokoMart</Link><Link to="/testimonials" className="block hover:text-white">Testimonials - founder stories</Link><Link to="/pricing" className="block hover:text-white">Pricing - 85k / 185k / 380k</Link><Link to="/blog" className="block hover:text-white">Blog - Daraja, Speed, Growth</Link></div></div>
        <div><div className="text-[11px] font-bold tracking-widest opacity-50">BUILD</div><div className="mt-4 space-y-2 text-[13px] text-slate-300"><Link to="/m-pesa-demo" className="block hover:text-white">Live M-Pesa Demo - 8s STK</Link><Link to="/process" className="block hover:text-white">Process - 2 week ship</Link><Link to="/admin-login" className="block hover:text-white">Admin - revenue</Link><Link to="/client-login" className="block hover:text-white">Client Portal</Link><a href="/sitemap.xml" className="block hover:text-white">Sitemap.xml + Robots.txt</a></div></div>
        <div><div className="text-[11px] font-bold tracking-widest opacity-50">CONTACT</div><div className="mt-4 space-y-3 text-[13px] text-slate-300"><div>WhatsApp-first - 2h reply, 8am-9pm EAT</div><a href="https://wa.me/254722114098" target="_blank" className="inline-flex px-4 py-2 rounded-full bg-[#25D366] text-[#0F1F35] text-[12px] font-bold">WhatsApp - 0722114098</a><div className="text-[11px] text-slate-400">M-Pesa Till 543543 • PayBill 400200<br/>50 percent upfront, 50 percent on launch</div></div></div>
      </div>
      <div className="border-t border-white/10"><div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex justify-between text-[11px] text-slate-400"><div>© {year} STERLING STUDIOS LTD • Nairobi, KE</div><div className="hidden md:block">95 plus LH • 0.8s • 96.4 percent STK • sterlingstudios.com</div></div></div>
    </footer>
  )
}
