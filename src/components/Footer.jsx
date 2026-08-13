import { Link } from 'react-router-dom'

const COLORS = {
  navy: '#0F1F35',
  cyan: '#18B8F2',
  blue: '#3478F6',
  violet: '#8B5CF6',
  magenta: '#D946EF',
  orange: '#FF8A3D',
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { label: 'About', path: '/about' },
    { label: 'Our Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'FAQs', path: '/faq' },
  ]

  const serviceLinks = [
    {
      label: 'Professional Websites',
      path: '/services#websites',
    },
    {
      label: 'Web Applications',
      path: '/services#web-applications',
    },
    {
      label: 'Android Apps',
      path: '/services#android-apps',
    },
    {
      label: 'iOS Apps',
      path: '/services#ios-apps',
    },
    {
      label: 'Connected Platforms',
      path: '/services#connected-platforms',
    },
  ]

  const solutionLinks = [
    {
      label: 'School Management Systems',
      path: '/solutions/school-management-system',
    },
    {
      label: 'Supermarket E-commerce',
      path: '/solutions/supermarket-ecommerce-website',
    },
    {
      label: 'Wines & Spirits E-commerce',
      path: '/solutions/wines-and-spirits-ecommerce-website',
    },
    {
      label: 'Pharmacy E-commerce',
      path: '/solutions/pharmacy-ecommerce-website',
    },
    {
      label: 'SACCO Platforms',
      path: '/solutions#sacco-management',
    },
    {
      label: 'Hospital Systems',
      path: '/solutions#hospital-management',
    },
    {
      label: 'Fleet Management',
      path: '/solutions#fleet-management',
    },
    {
      label: 'Marketplaces',
      path: '/solutions#marketplaces',
    },
    {
      label: 'Delivery & Mobility',
      path: '/solutions#delivery-platforms',
    },
  ]

  const socialLinks = [
    {
      label: 'LinkedIn',
      handle: 'Sterlings Studio',
      href: 'https://www.linkedin.com/company/sterlings-studio',
    },
    {
      label: 'Facebook',
      handle: '@sterlingsstudio',
      href: 'https://www.facebook.com/sterlingsstudio',
    },
    {
      label: 'X',
      handle: '@Sterlings254',
      href: 'https://x.com/Sterlings254',
    },
  ]

  const whatsappMessage = encodeURIComponent(
    'Hello Sterlings Studio. I would like to discuss a digital project.'
  )

  const whatsappUrl = `https://wa.me/254722114098?text=${whatsappMessage}`

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-900">
      {/* ======================================================
          BRAND COLOUR RULE
      ====================================================== */}
      <div
        className="h-[4px] w-full"
        style={{
          background:
            'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
        }}
      />

      {/* ======================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.72fr_0.92fr_1fr_1.08fr] lg:gap-8">
          {/* ==================================================
              BRAND
          ================================================== */}
          <div className="sm:col-span-2 lg:col-span-1 max-w-[390px]">
            <Link
              to="/"
              aria-label="Sterlings Studio homepage"
              className="inline-flex items-center gap-3"
            >
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  background:
                    'linear-gradient(135deg,#18B8F2,#8B5CF6,#D946EF,#FF8A3D)',
                }}
              />

              <span className="text-[15px] font-bold tracking-[-0.02em] text-[#0F1F35]">
                STERLINGS STUDIO
              </span>
            </Link>

            <p className="mt-5 text-[12px] leading-6 text-slate-500">
              A Nairobi-based digital studio building professional websites,
              web applications, Android apps, iOS apps and connected business
              platforms for organisations in Kenya and internationally.
            </p>

            <div className="mt-5 border-l-[3px] border-[#18B8F2] pl-4">
              <p className="text-[13px] font-bold leading-6 text-[#16243A]">
                Websites that load in 0.5s.
                <br />
                Apps that scale.
                <br />
                Built to last.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Nairobi', 'Africa', 'Global'].map((item, index) => {
                const accents = [
                  COLORS.cyan,
                  COLORS.violet,
                  COLORS.orange,
                ]

                return (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-[8px] font-bold tracking-[0.12em] text-slate-500"
                  >
                    <span
                      className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: accents[index] }}
                    />
                    {item.toUpperCase()}
                  </span>
                )
              })}
            </div>

            <Link
              to="/contact#start-project"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#172C49]"
            >
              Start a project →
            </Link>
          </div>

          {/* ==================================================
              COMPANY
          ================================================== */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-[3px] w-5 rounded-full bg-[#18B8F2]" />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                COMPANY
              </div>
            </div>

            <nav className="mt-5 flex flex-col gap-3">
              {companyLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[11px] font-medium text-slate-500 transition hover:translate-x-0.5 hover:text-[#16243A]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ==================================================
              SERVICES
          ================================================== */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-[3px] w-5 rounded-full bg-[#3478F6]" />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                SERVICES
              </div>
            </div>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                to="/services"
                className="text-[11px] font-bold text-[#16243A]"
              >
                All Services
              </Link>

              {serviceLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[11px] font-medium leading-5 text-slate-500 transition hover:translate-x-0.5 hover:text-[#16243A]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ==================================================
              SOLUTIONS
          ================================================== */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-[3px] w-5 rounded-full bg-[#8B5CF6]" />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                SOLUTIONS
              </div>
            </div>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                to="/solutions"
                className="text-[11px] font-bold text-[#16243A]"
              >
                All Solutions
              </Link>

              {solutionLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[11px] font-medium leading-5 text-slate-500 transition hover:translate-x-0.5 hover:text-[#16243A]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ==================================================
              CONTACT
          ================================================== */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-[3px] w-5 rounded-full bg-[#FF8A3D]" />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                CONTACT
              </div>
            </div>

            <div className="mt-5 space-y-5">
              {/* EMAIL */}
              <div>
                <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                  EMAIL
                </div>

                <a
                  href="mailto:hello@sterlingsstudio.com"
                  className="mt-1.5 inline-block break-all text-[11px] font-semibold text-[#16243A] transition hover:text-[#3478F6]"
                >
                  hello@sterlingsstudio.com
                </a>
              </div>

              {/* WHATSAPP */}
              <div>
                <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                  WHATSAPP
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-2 text-[11px] font-semibold text-[#16243A] transition hover:text-[#3478F6]"
                >
                  +254 722 114 098
                  <span className="text-[9px] text-slate-400">↗</span>
                </a>
              </div>

              {/* BASE */}
              <div>
                <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                  BASE
                </div>

                <div className="mt-1.5 text-[11px] font-semibold text-[#16243A]">
                  Nairobi, Kenya
                </div>
              </div>

              {/* SOCIAL */}
              <div>
                <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                  FOLLOW
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Sterlings Studio on ${social.label}`}
                      title={`${social.label} — ${social.handle}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[9px] font-bold text-[#16243A] transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                    >
                      {social.label}
                      <span className="text-[8px] text-slate-400">↗</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* AVAILABILITY */}
              <div className="relative overflow-hidden rounded-[17px] border border-slate-200 bg-[#F8FAFC] p-4">
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{
                    background:
                      'linear-gradient(180deg,#18B8F2,#8B5CF6,#FF8A3D)',
                  }}
                />

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#18B8F2]" />

                  <div className="text-[9px] font-bold text-[#16243A]">
                    New project enquiries
                  </div>
                </div>

                <p className="mt-2 text-[9px] leading-5 text-slate-500">
                  Websites, platforms, apps and custom digital products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          EXPLORE BAND
      ====================================================== */}
      <div className="border-t border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-6">
          <div className="grid gap-4 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
            <div>
              <div className="text-[8px] font-bold tracking-[0.17em] text-slate-400">
                NOT SURE WHERE TO START?
              </div>

              <div className="mt-1 text-[12px] font-bold text-[#16243A]">
                Start with what you are trying to accomplish.
              </div>
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
              <Link
                to="/services"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[9px] font-bold text-slate-600 transition hover:text-[#16243A]"
              >
                How we build
              </Link>

              <Link
                to="/solutions"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[9px] font-bold text-slate-600 transition hover:text-[#16243A]"
              >
                What we can build
              </Link>

              <Link
                to="/work"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[9px] font-bold text-slate-600 transition hover:text-[#16243A]"
              >
                See the proof
              </Link>

              <Link
                to="/pricing"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[9px] font-bold text-slate-600 transition hover:text-[#16243A]"
              >
                Understand pricing
              </Link>

              <Link
                to="/contact#start-project"
                className="rounded-full bg-[#0F1F35] px-4 py-2 text-[9px] font-bold text-white"
              >
                Talk to us →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          LOWER FOOTER
      ====================================================== */}
      <div className="border-t border-slate-200 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* COPYRIGHT */}
            <div className="text-[9px] leading-5 text-slate-400">
              © {currentYear} Sterlings Studio Limited. All rights reserved.
            </div>

            {/* LEGAL */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                to="/privacy"
                className="text-[9px] font-medium text-slate-400 transition hover:text-[#16243A]"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-[9px] font-medium text-slate-400 transition hover:text-[#16243A]"
              >
                Terms of Service
              </Link>

              <Link
                to="/pricing"
                className="text-[9px] font-medium text-slate-400 transition hover:text-[#16243A]"
              >
                Pricing
              </Link>

              <Link
                to="/faq"
                className="text-[9px] font-medium text-slate-400 transition hover:text-[#16243A]"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}