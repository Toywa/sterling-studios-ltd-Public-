import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Blog', path: '/blog' },
  ]

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Allow the Escape key to close the menu.
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }

    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* MAIN HEADER */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-4">
        <Link
          to="/"
          aria-label="Sterling Studios homepage"
          className="shrink-0 text-[13px] sm:text-[14px] font-extrabold tracking-tight text-slate-900"
        >
          STERLING STUDIOS
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-5 text-[13px] font-medium text-slate-600"
        >
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`whitespace-nowrap transition-colors ${
                isActive(item.path)
                  ? 'font-bold text-slate-900'
                  : 'hover:text-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Link
            to="/contact"
            className="hidden xl:inline-flex items-center justify-center px-4 py-2 rounded-full border border-slate-200 text-[13px] font-bold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold whitespace-nowrap transition-colors hover:bg-[#172C49]"
          >
            Start a project →
          </Link>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[#0F1F35] text-white text-[12px] font-bold whitespace-nowrap transition-colors hover:bg-[#172C49]"
          >
            Start a project
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="w-11 h-11 rounded-full border border-slate-200 bg-white flex flex-col items-center justify-center gap-[5px] transition-colors hover:border-slate-300"
          >
            <span
              className={`block h-[2px] w-5 rounded-full bg-slate-900 transition-transform duration-200 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />

            <span
              className={`block h-[2px] w-5 rounded-full bg-slate-900 transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />

            <span
              className={`block h-[2px] w-5 rounded-full bg-slate-900 transition-transform duration-200 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-slate-200 bg-white"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-5">
            <nav
              aria-label="Mobile navigation"
              className="grid gap-1"
            >
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[14px] transition-colors ${
                    isActive(item.path)
                      ? 'bg-[#F1F5F9] font-extrabold text-slate-900'
                      : 'font-semibold text-slate-700 hover:bg-[#F8FAFC] hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true" className="text-slate-400">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-5 pt-5 border-t border-slate-200 grid sm:grid-cols-2 gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-slate-200 text-[13px] font-bold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
              >
                Contact Sterling Studios
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold transition-colors hover:bg-[#172C49]"
              >
                Start a project →
              </Link>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4">
              <div className="text-[10px] font-bold tracking-widest text-slate-400">
                DIRECT CONTACT
              </div>

              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="mailto:hello@sterlingstudios.co.ke"
                  className="text-[12px] font-semibold text-slate-700 hover:text-slate-900"
                >
                  hello@sterlingstudios.co.ke
                </a>

                <a
                  href="https://wa.me/254722114098?text=Hello%20Sterling%20Studios.%20I%20would%20like%20to%20discuss%20a%20digital%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] font-semibold text-slate-700 hover:text-slate-900"
                >
                  WhatsApp: +254 722 114 098
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}