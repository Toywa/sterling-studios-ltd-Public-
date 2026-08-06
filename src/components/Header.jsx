
import { Link } from 'react-router-dom'
export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">
        <Link to="/" className="font-extrabold tracking-tight text-[14px]">STERLING STUDIOS</Link>
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-slate-600">
          <Link to="/services" className="hover:text-slate-900">Services</Link>
          <Link to="/work" className="hover:text-slate-900">Work</Link>
          <Link to="/about" className="hover:text-slate-900">About</Link>
          <Link to="/blog" className="hover:text-slate-900">Blog</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden md:inline px-4 py-2 rounded-full border border-slate-200 text-[13px] font-bold">Contact</Link>
          <Link to="/contact" className="px-5 py-2.5 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold">Start a project →</Link>
        </div>
      </div>
    </header>
  )
}
