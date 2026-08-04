import { Link } from 'react-router-dom'
export default function Navbar(){
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[64px] flex items-center justify-between">
        <Link to="/" className="font-extrabold tracking-tight">STERLING STUDIOS</Link>
        <div className="hidden md:flex items-center gap-6 text-[13px] font-medium">
          <Link to="/services" className="hover:text-slate-900 text-slate-600">Services</Link>
          <Link to="/work" className="hover:text-slate-900 text-slate-600">Work</Link>
          <Link to="/process" className="hover:text-slate-900 text-slate-600">Process</Link>
          <Link to="/pricing" className="hover:text-slate-900 text-slate-600">Pricing</Link>
          <Link to="/m-pesa-demo" className="px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 font-bold text-[11px]">● LIVE M-PESA DEMO</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:inline-flex px-4 py-2 rounded-full border border-slate-200 text-[13px] font-semibold">Contact</Link>
          <a href="https://wa.me/254722114098" className="px-4 py-2 rounded-full bg-sterlingNavy text-white text-[13px] font-bold">Start Project →</a>
        </div>
      </div>
    </div>
  )
}
