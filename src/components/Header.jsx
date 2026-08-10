import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
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

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="h-[72px] flex items-center justify-between gap-5">
          {/* LOGO */}
          <Link
            to="/"
            aria-label="Sterlings Studio homepage"
            className="shrink-0 flex items-center"
          >
            <img
              src="/sterlings-studio-logo.png"
              alt="Sterlings Studio"
              className="block w-[155px] sm:w-[175px] lg:w-[195px] h-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-6 text-[12px] font-medium text-slate-500"
          >
            {navigation.map((item) => {
              const active = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`whitespace-nowrap transition-colors ${
                    active
                      ? 'text-[#0F1F35] font-bold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className="hidden xl:inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-[12px] font-bold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-5 py-2.5 text-[12px] font-bold text-white transition-colors hover:bg-[#172C49]"
            >
              Start a project →
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((current) => !current)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0F1F35]"
            >
              <span className="sr-only">
                {mobileOpen ? 'Close menu' : 'Open menu'}
              </span>

              <div className="flex w-4 flex-col gap-[4px]">
                <span
                  className={`block h-[1.5px] w-full bg-current transition-transform ${
                    mobileOpen
                      ? 'translate-y-[5.5px] rotate-45'
                      : ''
                  }`}
                />

                <span
                  className={`block h-[1.5px] w-full bg-current transition-opacity ${
                    mobileOpen ? 'opacity-0' : ''
                  }`}
                />

                <span
                  className={`block h-[1.5px] w-full bg-current transition-transform ${
                    mobileOpen
                      ? '-translate-y-[5.5px] -rotate-45'
                      : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden border-t border-slate-100 py-5"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col"
            >
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="border-b border-slate-100 py-3.5 text-[13px] font-semibold text-slate-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-3 text-[12px] font-bold text-slate-700"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-4 py-3 text-[12px] font-bold text-white"
              >
                Start a project →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}