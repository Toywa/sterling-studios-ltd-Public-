import { Link, useLocation } from 'react-router-dom'
export default function Navbar(){
  const loc=useLocation()
  const cls=(p)=> `text-sm font-medium ${loc.pathname===p?'text-slate-900':'text-slate-600 hover:text-slate-900'}`
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-sterlingNavy flex items-center justify-center text-white font-bold">S</div><div className="leading-tight"><div className="font-bold text-[14px]">STERLING STUDIOS LTD</div><div className="text-[11px] text-slate-500 -mt-0.5">Nairobi • Africa</div></div></Link>
        <div className="hidden md:flex items-center gap-6"><Link to="/services" className={cls('/services')}>Services</Link><Link to="/work" className={cls('/work')}>Work</Link><Link to="/process" className={cls('/process')}>Process</Link><Link to="/pricing" className={cls('/pricing')}>Pricing</Link><Link to="/contact" className={cls('/contact')}>Contact</Link><a href="https://wa.me/254722114098" className="ml-2 px-5 py-2.5 rounded-full bg-sterlingBlue text-white text-sm font-semibold">Start Project</a></div>
      </div>
    </nav>
  )
}
