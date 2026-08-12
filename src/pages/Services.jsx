import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

const COLORS = {
  navy: '#0F1F35',
  ink: '#16243A',
  cyan: '#18B8F2',
  blue: '#3478F6',
  violet: '#8B5CF6',
  magenta: '#D946EF',
  orange: '#FF8A3D',
}

export default function Services() {
  const serviceDirectory = [
    {
      number: '01',
      title: 'Websites',
      href: '#websites',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Web Applications',
      href: '#web-applications',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Android Apps',
      href: '#android-apps',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'iOS Apps',
      href: '#ios-apps',
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Connected Platforms',
      href: '#connected-platforms',
      accent: COLORS.orange,
    },
  ]

  const websiteFeatures = [
    'Corporate websites',
    'School & university websites',
    'Government & institutional websites',
    'NGO websites',
    'E-commerce websites',
    'Political & leadership websites',
    'Online applications',
    'Search-engine foundations',
    'Analytics',
    'Content management',
  ]

  const webAppFeatures = [
    'Customer portals',
    'Staff portals',
    'Admin dashboards',
    'Online marketplaces',
    'Booking systems',
    'Management systems',
    'Workflow automation',
    'Role-based access',
    'Reporting',
    'API integrations',
  ]

  const androidFeatures = [
    'Customer applications',
    'Driver & rider apps',
    'Staff applications',
    'Push notifications',
    'M-Pesa payments',
    'Maps & GPS',
    'Camera & file uploads',
    'Offline capability',
    'Secure accounts',
    'Play Store deployment',
  ]

  const iosFeatures = [
    'iPhone applications',
    'iPad applications',
    'Customer journeys',
    'Push notifications',
    'Secure authentication',
    'Payments',
    'Maps & location',
    'Media uploads',
    'Connected APIs',
    'App Store deployment',
  ]

  const concepts = [
    {
      name: 'SokoMart KE',
      category: 'RETAIL • WEB + ANDROID',
      image: '/sokomart-work.webp',
      description:
        'A retail-commerce concept showing how a modern web storefront, Android application, M-Pesa checkout and local delivery operation can work as one product.',
      stack: 'Next.js • Flutter • M-Pesa • PostgreSQL',
      accent: COLORS.cyan,
    },
    {
      name: 'LuminaPay',
      category: 'FINTECH • OPERATIONS',
      image: '/prod-fintech.webp',
      description:
        'A fintech product concept centred on transaction operations, M-Pesa integration, administrative workflows, payment visibility and financial reporting.',
      stack: 'Node.js • PostgreSQL • Daraja • M-Pesa',
      accent: COLORS.violet,
    },
    {
      name: 'AURORA',
      category: 'CORPORATE • DIGITAL EXPERIENCE',
      image: '/prod-corporate.webp',
      description:
        'A premium corporate digital experience demonstrating fast front-end delivery, sophisticated presentation, search foundations and lead-focused user journeys.',
      stack: 'Next.js • Tailwind • Vercel • SEO',
      accent: COLORS.orange,
    },
  ]

  const standards = [
    {
      title: 'Performance',
      text:
        'Fast loading, responsive experiences and sensible technical architecture are treated as product requirements.',
      accent: COLORS.cyan,
    },
    {
      title: 'Security',
      text:
        'Access control, protected data flows and appropriate platform permissions are considered from the beginning.',
      accent: COLORS.blue,
    },
    {
      title: 'Ownership',
      text:
        'We favour maintainable systems, clear handover and technology that does not unnecessarily trap the client.',
      accent: COLORS.violet,
    },
    {
      title: 'Integration',
      text:
        'Payments, email, maps, APIs, databases and third-party services can become part of one connected product.',
      accent: COLORS.magenta,
    },
    {
      title: 'Scalability',
      text:
        'Products are structured with future users, features, transactions and operational growth in mind.',
      accent: COLORS.orange,
    },
  ]

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <SEO
        title="Websites, Web Apps, Android & iOS Development | Sterlings Studio"
        description="Sterlings Studio designs and develops professional websites, custom web applications, Android apps, iOS apps and connected digital platforms for organisations in Kenya and internationally."
        canonical="https://sterlingsstudio.com/services"
        ogImage="/sterling-share-preview.png"
      />

      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-10 lg:pt-12 pb-10">
          <div className="grid lg:grid-cols-[0.58fr_0.42fr] gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-10 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                  }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  OUR TECHNICAL CAPABILITIES
                </div>
              </div>

              <h1 className="mt-5 max-w-[800px] text-[35px] sm:text-[40px] lg:text-[45px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                Websites.
                <br />
                Web applications.
                <br />
                Android & iOS apps.
              </h1>

              <p className="mt-5 max-w-[700px] text-[14px] leading-7 text-slate-500">
                Sterlings Studio designs and develops the technology behind
                modern businesses — from public-facing websites to complex
                software platforms and mobile applications.
              </p>

              <p className="mt-3 max-w-[700px] text-[13px] leading-7 text-slate-500">
                Some projects need one website. Others need a website, customer
                app, staff app, administration dashboard, payments and several
                systems working together.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#172C49]"
                >
                  Discuss your project →
                </Link>

                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  Explore solutions
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="relative overflow-hidden rounded-[28px] bg-[#F4F7FA] p-3">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src="/human_team_standup.webp"
                    alt="Digital product development and technical planning"
                    className="block w-full h-[390px] lg:h-[420px] object-cover object-center"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081526]/95 via-[#081526]/40 to-transparent px-6 pt-24 pb-6">
                    <div className="text-[9px] font-bold tracking-[0.18em] text-white/65">
                      TECHNOLOGY WITH A PURPOSE
                    </div>

                    <blockquote className="mt-2 max-w-[480px] text-[19px] font-semibold leading-7 text-white">
                      “We do not begin by asking which framework to use. We
                      begin by asking what the product needs to accomplish.”
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5">
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                  }}
                />

                <div className="text-[8px] font-bold tracking-[0.18em] text-slate-400">
                  IN PLAIN ENGLISH
                </div>

                <p className="mt-2 text-[15px] font-bold leading-6 text-[#16243A]">
                  We build the screens customers see and the systems running
                  behind them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          DIRECTORY
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-9">
          <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
            EXPLORE OUR SERVICES
          </div>

          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {serviceDirectory.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group relative overflow-hidden rounded-[18px] border border-slate-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{ background: item.accent }}
                />

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div
                      className="text-[8px] font-bold"
                      style={{ color: item.accent }}
                    >
                      {item.number}
                    </div>

                    <div className="mt-1 text-[11px] font-bold text-[#16243A]">
                      {item.title}
                    </div>
                  </div>

                  <span
                    className="transition group-hover:translate-y-1"
                    style={{ color: item.accent }}
                  >
                    ↓
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          WEBSITES
      ====================================================== */}
      <section
        id="websites"
        className="scroll-mt-24 max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14"
      >
        <div className="grid lg:grid-cols-[0.46fr_0.54fr] gap-5 items-stretch">
          <div className="relative min-h-[470px] overflow-hidden rounded-[28px] bg-slate-100">
            <img
              src="/human_female_founder.webp"
              alt="Professional business website development"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F1F35]/95 via-[#0F1F35]/30 to-transparent px-7 pt-24 pb-7">
              <div className="text-[9px] font-bold tracking-[0.18em] text-white/65">
                01 • PROFESSIONAL WEBSITES
              </div>

              <blockquote className="mt-2 max-w-[500px] text-[20px] font-semibold leading-7 text-white">
                “Your website often speaks for the organisation before anyone
                from the organisation does.”
              </blockquote>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-7 lg:p-9">
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.cyan }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                WEBSITE DEVELOPMENT
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Professional websites built to create trust and move people
              towards action.
            </h2>

            <p className="mt-5 text-[13px] leading-7 text-slate-500">
              A strong website should communicate clearly, work beautifully on
              mobile devices, load quickly and make the next step obvious.
            </p>

            <p className="mt-3 text-[12px] leading-6 text-slate-500">
              That next step might be an enquiry, application, booking,
              purchase, registration, download or simply understanding the
              organisation better.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
              {websiteFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-[14px] border border-slate-200 bg-white px-4 py-3 text-[10px] font-semibold text-slate-600"
                >
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
              >
                Build a website →
              </Link>

              <Link
                to="/work"
                className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-[10px] font-bold text-[#16243A]"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WEB APPLICATIONS
      ====================================================== */}
      <section
        id="web-applications"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.54fr_0.46fr] gap-5 items-stretch">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 lg:p-9 order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.blue }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  WEB APPLICATION DEVELOPMENT
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Software that runs in the browser and helps the business
                operate.
              </h2>

              <p className="mt-5 text-[13px] leading-7 text-slate-500">
                A web application goes beyond publishing information. Users can
                sign in, submit information, manage records, make payments,
                complete workflows and interact with the organisation.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {webAppFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[14px] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[10px] font-semibold text-slate-600"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[18px] bg-[#0F1F35] p-5 text-white">
                <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
                  EXAMPLES
                </div>

                <p className="mt-2 text-[13px] font-semibold leading-6">
                  School systems. SACCO portals. Marketplaces. Hospital
                  systems. Booking platforms. Employee systems. Admin
                  dashboards.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
                >
                  Build a web application →
                </Link>

                <Link
                  to="/solutions"
                  className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-[10px] font-bold text-[#16243A]"
                >
                  Explore solutions
                </Link>
              </div>
            </div>

            <div className="relative min-h-[470px] overflow-hidden rounded-[28px] bg-slate-100 order-1 lg:order-2">
              <img
                src="/human_team_standup.webp"
                alt="Custom web application planning"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F1F35]/95 via-[#0F1F35]/35 to-transparent px-7 pt-24 pb-7">
                <div className="text-[9px] font-bold tracking-[0.18em] text-white/65">
                  02 • WEB APPLICATIONS
                </div>

                <blockquote className="mt-2 text-[20px] font-semibold leading-7 text-white">
                  “If a spreadsheet has become the centre of the business, it
                  may be time to build software.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          MOBILE APPS
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-5">
          {/* ANDROID */}
          <article
            id="android-apps"
            className="scroll-mt-24 relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-7 lg:p-8"
          >
            <div
              className="absolute inset-x-0 top-0 h-[4px]"
              style={{ background: COLORS.violet }}
            />

            <div className="flex items-center justify-between gap-5">
              <div>
                <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                  03 • ANDROID DEVELOPMENT
                </div>

                <h2 className="mt-3 text-[27px] lg:text-[31px] font-bold tracking-[-0.025em] text-[#16243A]">
                  Android Apps
                </h2>
              </div>

              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-[13px] font-bold text-white"
                style={{ background: COLORS.violet }}
              >
                A
              </div>
            </div>

            <p className="mt-5 text-[12px] leading-6 text-slate-500">
              Android applications for customer journeys, employees, riders,
              drivers, field teams, communities and operational users.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
              {androidFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-[13px] border border-slate-200 bg-white px-4 py-3 text-[10px] font-semibold text-slate-600"
                >
                  {feature}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
            >
              Build an Android app →
            </Link>
          </article>

          {/* IOS */}
          <article
            id="ios-apps"
            className="scroll-mt-24 relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-7 lg:p-8"
          >
            <div
              className="absolute inset-x-0 top-0 h-[4px]"
              style={{ background: COLORS.magenta }}
            />

            <div className="flex items-center justify-between gap-5">
              <div>
                <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                  04 • iOS DEVELOPMENT
                </div>

                <h2 className="mt-3 text-[27px] lg:text-[31px] font-bold tracking-[-0.025em] text-[#16243A]">
                  iOS Apps
                </h2>
              </div>

              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-[13px] font-bold text-white"
                style={{ background: COLORS.magenta }}
              >
                iOS
              </div>
            </div>

            <p className="mt-5 text-[12px] leading-6 text-slate-500">
              iPhone and iPad applications designed around intuitive journeys,
              strong interface quality and dependable integration with the
              wider product.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
              {iosFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-[13px] border border-slate-200 bg-white px-4 py-3 text-[10px] font-semibold text-slate-600"
                >
                  {feature}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
            >
              Build an iOS app →
            </Link>
          </article>
        </div>

        <div className="mt-5 rounded-[22px] border border-slate-200 bg-white p-6">
          <div className="grid lg:grid-cols-[0.68fr_0.32fr] gap-6 items-center">
            <div>
              <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
                ANDROID + iOS
              </div>

              <p className="mt-2 text-[15px] font-bold leading-6 text-[#16243A]">
                One business does not necessarily need two completely separate
                product strategies.
              </p>

              <p className="mt-2 text-[11px] leading-5 text-slate-500">
                Where appropriate, we can use cross-platform architecture while
                preserving the experience users expect on each device.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-[10px] font-bold text-[#16243A]"
              >
                Discuss a mobile product →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CONNECTED DIGITAL PLATFORMS
      ====================================================== */}
      <section
        id="connected-platforms"
        className="scroll-mt-24 bg-[#0F1F35] text-white"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.orange }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  05 • CONNECTED DIGITAL PLATFORMS
                </div>
              </div>

              <h2 className="mt-4 text-[29px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em]">
                Sometimes the product is an ecosystem.
              </h2>

              <p className="mt-5 text-[12px] leading-6 text-slate-300">
                Consider an Uber-style mobility platform or a Glovo-style
                delivery business. The customer sees one brand, but several
                applications may be working behind it.
              </p>

              <blockquote className="mt-6 border-l-[3px] border-[#18B8F2] pl-4 text-[16px] font-semibold leading-7">
                “The screens may be different. The business behind them should
                still feel like one system.”
              </blockquote>

              <Link
                to="/solutions#delivery-platforms"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-[10px] font-bold text-[#0F1F35]"
              >
                See a platform example →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  label: 'PUBLIC WEBSITE',
                  title: 'Discovery',
                  text:
                    'Marketing, information, search visibility and customer acquisition.',
                  accent: COLORS.cyan,
                },
                {
                  label: 'CUSTOMER APP',
                  title: 'Service',
                  text:
                    'Ordering, booking, accounts, payments and customer activity.',
                  accent: COLORS.blue,
                },
                {
                  label: 'STAFF / PARTNER APP',
                  title: 'Fulfilment',
                  text:
                    'Drivers, riders, staff, vendors or operational teams complete the work.',
                  accent: COLORS.violet,
                },
                {
                  label: 'ADMIN PLATFORM',
                  title: 'Control',
                  text:
                    'Users, transactions, operations, approvals, reporting and system configuration.',
                  accent: COLORS.magenta,
                },
                {
                  label: 'PAYMENTS',
                  title: 'Transactions',
                  text:
                    'M-Pesa, cards, invoices, transaction records and reconciliation.',
                  accent: COLORS.orange,
                },
                {
                  label: 'APIs & DATABASE',
                  title: 'Connection',
                  text:
                    'The technical foundation that allows every part of the ecosystem to communicate.',
                  accent: COLORS.cyan,
                },
              ].map((item) => (
                <article
                  key={item.label}
                  className="relative overflow-hidden rounded-[19px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: item.accent }}
                  />

                  <div
                    className="text-[8px] font-bold tracking-[0.15em]"
                    style={{ color: item.accent }}
                  >
                    {item.label}
                  </div>

                  <h3 className="mt-2 text-[15px] font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-slate-300">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PRODUCT CONCEPT LAB
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.66fr_0.34fr] gap-6 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#8B5CF6,#FF8A3D)',
                  }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  PRODUCT CONCEPT LAB
                </div>
              </div>

              <h2 className="mt-3 max-w-[820px] text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Different products demonstrate different technical strengths.
              </h2>

              <p className="mt-4 max-w-[760px] text-[12px] leading-6 text-slate-500">
                Alongside live client platforms, Sterlings Studio develops
                product concepts that explore how web, mobile, payments and
                business systems can work together.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/work"
                className="text-[10px] font-bold text-[#16243A] underline underline-offset-4"
              >
                Explore all work →
              </Link>
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-5">
            {concepts.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,31,53,0.08)]"
              >
                <div className="relative overflow-hidden bg-[#EEF2F6]">
                  <img
                    src={project.image}
                    alt={`${project.name} product concept`}
                    className="block w-full aspect-[16/10] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div
                    className="absolute inset-x-0 top-0 h-[4px]"
                    style={{ background: project.accent }}
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#0F1F35]/90 px-3 py-1 text-[8px] font-bold tracking-[0.12em] text-white">
                    PRODUCT CONCEPT
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[8px] font-bold tracking-[0.14em] text-slate-400">
                    {project.category}
                  </div>

                  <h3 className="mt-3 text-[19px] font-bold text-[#16243A]">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-[11px] leading-5 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <div className="text-[8px] font-bold tracking-[0.13em] text-slate-400">
                      TECHNOLOGY
                    </div>

                    <p
                      className="mt-1.5 text-[10px] font-bold"
                      style={{ color: project.accent }}
                    >
                      {project.stack}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-[20px] border border-slate-200 bg-white px-5 py-4">
            <p className="text-[10px] leading-5 text-slate-500">
              <strong className="font-bold text-[#16243A]">
                Live work and product concepts are presented separately.
              </strong>{' '}
              Product concepts demonstrate design and technical capability;
              they are not presented as commissioned client platforms unless
              specifically identified as such.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          HOW THE CONCEPTS MAP TO SERVICES
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.violet }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                CAPABILITIES IN PRACTICE
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              One product can use several Sterlings services.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              This is why we separate Services from Solutions. The service is
              the technical capability. The solution is what those
              capabilities achieve for the business.
            </p>

            <Link
              to="/solutions"
              className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
            >
              Explore business solutions →
            </Link>
          </div>

          <div className="grid gap-3">
            <article className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-5">
              <div
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{ background: COLORS.cyan }}
              />

              <div className="grid sm:grid-cols-[0.28fr_0.72fr] gap-4">
                <div>
                  <div className="text-[9px] font-bold text-[#18B8F2]">
                    SOKOMART KE
                  </div>
                </div>

                <p className="text-[11px] leading-5 text-slate-500">
                  E-commerce website + Android app + M-Pesa + inventory +
                  delivery workflows.
                </p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-5">
              <div
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{ background: COLORS.violet }}
              />

              <div className="grid sm:grid-cols-[0.28fr_0.72fr] gap-4">
                <div>
                  <div className="text-[9px] font-bold text-[#8B5CF6]">
                    LUMINAPAY
                  </div>
                </div>

                <p className="text-[11px] leading-5 text-slate-500">
                  Web application + transaction operations + database + M-Pesa
                  integration + administrative dashboard.
                </p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-5">
              <div
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{ background: COLORS.orange }}
              />

              <div className="grid sm:grid-cols-[0.28fr_0.72fr] gap-4">
                <div>
                  <div className="text-[9px] font-bold text-[#FF8A3D]">
                    AURORA
                  </div>
                </div>

                <p className="text-[11px] leading-5 text-slate-500">
                  Premium corporate website + performance engineering + SEO +
                  lead-generation journeys.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ======================================================
          ENGINEERING STANDARD
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-8">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                HOW WE BUILD
              </div>

              <h2 className="mt-3 text-[27px] lg:text-[31px] font-bold leading-[1.1] text-[#16243A]">
                The engineering matters as much as the interface.
              </h2>

              <blockquote className="mt-5 border-l-[3px] border-[#18B8F2] pl-4 text-[15px] font-semibold leading-6 text-[#16243A]">
                “A polished product should remain polished when real users,
                real data and real transactions arrive.”
              </blockquote>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {standards.map((item) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-white p-5"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: item.accent }}
                  />

                  <h3 className="text-[12px] font-bold text-[#16243A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[9px] leading-5 text-slate-500">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICES VS SOLUTIONS
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 lg:p-9">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                SERVICES
              </div>

              <h2 className="mt-3 text-[25px] font-bold text-[#16243A]">
                How we build.
              </h2>

              <p className="mt-3 text-[12px] leading-6 text-slate-500">
                Websites, web applications, Android apps, iOS apps and
                connected digital platforms.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  'Websites',
                  'Web Apps',
                  'Android',
                  'iOS',
                  'APIs',
                  'Payments',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-[9px] font-bold text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative border-t lg:border-l lg:border-t-0 border-slate-200 bg-[#0F1F35] p-7 lg:p-9 text-white">
              <div
                className="absolute inset-x-0 top-0 lg:inset-x-auto lg:inset-y-0 lg:left-0 h-[4px] lg:h-auto lg:w-[4px]"
                style={{
                  background:
                    'linear-gradient(180deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                SOLUTIONS
              </div>

              <h2 className="mt-3 text-[25px] font-bold">
                What we can build for your business.
              </h2>

              <p className="mt-3 text-[12px] leading-6 text-slate-300">
                School systems, hospital systems, SACCO platforms,
                marketplaces, delivery apps, fleet systems, e-commerce,
                booking platforms and much more.
              </p>

              <Link
                to="/solutions"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-[10px] font-bold text-[#0F1F35]"
              >
                Explore solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0F1F35] text-white">
        <div
          aria-hidden="true"
          className="absolute -left-24 -top-32 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-20 -bottom-36 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.72fr_0.28fr] gap-8 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-10 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                  }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  WHAT TECHNOLOGY DOES YOUR IDEA NEED?
                </div>
              </div>

              <h2 className="mt-4 max-w-[880px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                Website?
                <br />
                Web application?
                <br />
                Android, iOS — or all of them?
              </h2>

              <p className="mt-5 max-w-[680px] text-[13px] leading-7 text-slate-300">
                Tell us what the product needs to accomplish. We will help
                determine the right technical architecture around it.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35]"
              >
                Start your project →
              </Link>

              <div className="mt-3 text-[9px] text-slate-400">
                Nairobi • Kenya • International
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}