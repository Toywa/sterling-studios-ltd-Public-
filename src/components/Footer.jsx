import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { label: 'About', path: '/about' },
    { label: 'Our Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'FAQs', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ]

  const serviceLinks = [
    { label: 'All Services', path: '/services' },
    { label: 'Web Applications', path: '/services' },
    { label: 'Professional Websites', path: '/services' },
    { label: 'Political Platforms', path: '/services' },
    { label: 'Android & iOS Apps', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
  ]

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      {/* MAIN FOOTER */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr]">
          {/* BRAND */}
          <div>
            <Link
              to="/"
              aria-label="Sterling Studios homepage"
              className="text-[15px] font-extrabold tracking-tight"
            >
              STERLING STUDIOS
            </Link>

            <p className="mt-5 max-w-[44ch] text-[13px] leading-6 text-slate-600">
              Professional websites, custom web platforms and mobile
              applications for businesses, institutions and ambitious
              organisations.
            </p>

            <p className="mt-4 max-w-[44ch] text-[13px] leading-6 text-slate-600">
              Built in Nairobi for clients across Kenya, Africa and
              international markets.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-5 py-2.5 text-[12px] font-bold text-white transition-colors hover:bg-[#172C49]"
              >
                Start a project →
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2.5 text-[12px] font-bold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
              >
                View our work
              </Link>
            </div>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-400">
              COMPANY
            </div>

            <nav
              aria-label="Company footer navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              {companyLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[13px] text-slate-600 transition-colors hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-400">
              SERVICES
            </div>

            <nav
              aria-label="Services footer navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              {serviceLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-[13px] text-slate-600 transition-colors hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-400">
              CONTACT
            </div>

            <div className="mt-5 space-y-5">
              <div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400">
                  EMAIL
                </div>

                <a
                  href="mailto:hello@sterlingstudios.co.ke"
                  className="mt-1 block break-all text-[13px] font-semibold text-slate-700 hover:text-slate-900"
                >
                  hello@sterlingstudios.co.ke
                </a>
              </div>

              <div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400">
                  WHATSAPP
                </div>

                <a
                  href="https://wa.me/254722114098?text=Hello%20Sterling%20Studios.%20I%20would%20like%20to%20discuss%20a%20digital%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-[13px] font-semibold text-slate-700 hover:text-slate-900"
                >
                  +254 722 114 098
                </a>
              </div>

              <div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400">
                  LOCATION
                </div>

                <div className="mt-1 text-[13px] font-semibold text-slate-700">
                  Nairobi, Kenya
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LOWER FOOTER */}
      <div className="border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-slate-500">
            © {currentYear} Sterling Studios Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/privacy"
              className="text-[11px] text-slate-500 transition-colors hover:text-slate-900"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-[11px] text-slate-500 transition-colors hover:text-slate-900"
            >
              Terms of Service
            </Link>

            <Link
              to="/pricing"
              className="text-[11px] text-slate-500 transition-colors hover:text-slate-900"
            >
              Pricing
            </Link>

            <Link
              to="/faq"
              className="text-[11px] text-slate-500 transition-colors hover:text-slate-900"
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}