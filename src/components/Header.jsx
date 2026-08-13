import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigation = [
    { label: 'Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Testimonials', path: '/testimonials' },
  ]

  const closeMenu = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="h-[76px] flex items-center justify-between gap-6">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Sterlings Studio homepage"
            className="shrink-0"
          >
            <img
              src="/sterlings-studio-logo.png"
              alt="Sterlings Studio Limited"
              className="block w-[205px] sm:w-[225px] h-auto"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-6"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative whitespace-nowrap text-[12px] font-semibold transition-colors ${
                    isActive
                      ? 'text-[#0F1F35]'
                      : 'text-slate-500 hover:text-[#0F1F35]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {isActive && (
                      <span
                        className="absolute -bottom-[12px] left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full"
                        style={{
                          background:
                            'linear-gradient(90deg,#18B8F2,#8B5CF6,#D946EF)',
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[11px] font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Contact
            </Link>

            <Link
              to="/contact#start-project"
              className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-6 py-3 text-[11px] font-bold text-white transition hover:bg-[#172C49]"
            >
              Start a project →
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white"
          >
            <span className="sr-only">
              {mobileOpen ? 'Close menu' : 'Open menu'}
            </span>

            <div className="flex flex-col gap-[5px]">
              <span
                className={`block h-[2px] w-5 bg-[#0F1F35] transition ${
                  mobileOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />

              <span
                className={`block h-[2px] w-5 bg-[#0F1F35] transition ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />

              <span
                className={`block h-[2px] w-5 bg-[#0F1F35] transition ${
                  mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
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
          className="lg:hidden border-t border-slate-200 bg-white"
        >
          <div className="max-w-[1280px] mx-auto px-6 py-6">
            <nav className="grid gap-1">
              {navigation.map((item, index) => {
                const accents = [
                  '#18B8F2',
                  '#3478F6',
                  '#8B5CF6',
                  '#D946EF',
                  '#FF8A3D',
                  '#18B8F2',
                  '#8B5CF6',
                ]

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `relative overflow-hidden rounded-[16px] px-5 py-4 text-[13px] font-bold transition ${
                        isActive
                          ? 'bg-[#F8FAFC] text-[#0F1F35]'
                          : 'text-slate-600 hover:bg-[#F8FAFC]'
                      }`
                    }
                  >
                    <span
                      className="absolute inset-y-0 left-0 w-[3px]"
                      style={{ background: accents[index] }}
                    />

                    <span className="flex items-center justify-between">
                      {item.label}
                      <span className="text-slate-300">→</span>
                    </span>
                  </NavLink>
                )
              })}
            </nav>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-[11px] font-bold text-[#0F1F35]"
              >
                Contact
              </Link>

              <Link
                to="/contact#start-project"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-6 py-3 text-[11px] font-bold text-white"
              >
                Start a project →
              </Link>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-5">
              <div className="text-[8px] font-bold tracking-[0.17em] text-slate-400">
                STERLINGS STUDIO
              </div>

              <p className="mt-2 text-[10px] text-slate-500">
                Websites • Web Apps • Android • iOS • Business Systems
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
