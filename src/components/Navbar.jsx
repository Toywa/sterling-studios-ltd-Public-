import { Link, useLocation } from 'react-router-dom'
export default function Navbar(){
  const loc = useLocation()
  const linkCls = (path) => `text-sm font-medium transition ${loc.pathname===path ? 'text-sterlingNavy' : 'text-sterlingNavy/70 hover:text-sterlingNavy'}`
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sterlingNavy flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M8 6C12 2 20 1 26 7L24 13C20 9 14 8 10 11C6 14 8 19 16 22C24 25 28 30 20 32C14 34 6 32 2 24L6 18C9 22 15 25 19 22C23 19 21 14 13 11C5 8 2 2 8 6Z" fill="#6AAFE6"/>
              <path d="M16 16.5L26 22C28 26 26 31 18 32" fill="#E8C05A" opacity="0.95"/>
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-bold text-[14px] tracking-tight">STERLING STUDIOS LTD</div>
            <div className="text-[11px] text-slate-500 -mt-[1px]">sterlingstudios.com</div>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/services" className={linkCls('/services')}>Services</Link>
          <Link to="/work" className={linkCls('/work')}>Work</Link>
          <Link to="/process" className={linkCls('/process')}>Process</Link>
          <Link to="/pricing" className={linkCls('/pricing')}>Pricing</Link>
          <Link to="/contact" className={linkCls('/contact')}>Contact</Link>
          <a href="https://wa.me/254722114098" target="_blank" className="ml-2 px-5 py-2.5 rounded-full bg-sterlingBlue text-white text-sm font-semibold hover:bg-sterlingBlueDark transition">Start Project</a>
        </div>
      </div>
    </nav>
  )
}
