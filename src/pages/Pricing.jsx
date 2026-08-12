import { useState } from 'react'
import { Link } from 'react-router-dom'

const COLORS = {
  navy: '#0F1F35',
  ink: '#16243A',
  cyan: '#18B8F2',
  blue: '#3478F6',
  violet: '#8B5CF6',
  magenta: '#D946EF',
  orange: '#FF8A3D',
}

export default function Pricing() {
  const [usd, setUsd] = useState(false)

  /*
  |--------------------------------------------------------------------------
  | Currency display
  |--------------------------------------------------------------------------
  |
  | USD values are indicative only.
  |
  */

  const exchangeRate = 130

  const formatPrice = (kesAmount) => {
    if (!kesAmount) {
      return 'Custom quotation'
    }

    if (usd) {
      return `$${Math.round(kesAmount / exchangeRate).toLocaleString()}`
    }

    return `KES ${kesAmount.toLocaleString()}`
  }

  const packages = [
    {
      number: '01',
      category: 'PROFESSIONAL WEBSITES',
      title: 'Business & Institutional Websites',
      price: 180000,
      timeline: 'Typical delivery: 2–4 weeks',
      description:
        'For companies, schools, NGOs, institutions and professional organisations that need a credible, fast and conversion-focused digital presence.',
      features: [
        'Custom responsive design',
        'Content architecture',
        'Mobile optimisation',
        'Contact & enquiry forms',
        'Search-engine foundations',
        'Analytics integration',
        'Administrative controls',
        'Production deployment',
      ],
      accent: COLORS.cyan,
      highlighted: false,
      whatsapp:
        'I would like a quotation for a professional business or institutional website.',
    },
    {
      number: '02',
      category: 'WEB APPLICATIONS',
      title: 'Custom Business Platforms',
      price: 450000,
      timeline: 'Typical delivery: 4–10 weeks',
      description:
        'For organisations that need portals, dashboards, booking systems, management systems, marketplaces, workflows or database-driven products.',
      features: [
        'User accounts & permissions',
        'Custom dashboards',
        'Database architecture',
        'Business logic',
        'Payment integrations',
        'External APIs',
        'Administrative controls',
        'Reporting & audit records',
      ],
      accent: COLORS.blue,
      highlighted: true,
      whatsapp:
        'I would like a quotation for a custom web application or business platform.',
    },
    {
      number: '03',
      category: 'ANDROID & iOS',
      title: 'Mobile Application Development',
      price: 600000,
      timeline: 'Typical delivery: 8–16 weeks',
      description:
        'For businesses that need mobile applications for customers, staff, riders, drivers, transactions, bookings or service delivery.',
      features: [
        'Android application',
        'iOS application',
        'Secure user accounts',
        'Push notifications',
        'Payments',
        'Maps & location',
        'API connectivity',
        'App-store submission support',
      ],
      accent: COLORS.violet,
      highlighted: false,
      whatsapp:
        'I would like a quotation for Android and iOS mobile application development.',
    },
    {
      number: '04',
      category: 'CONNECTED DIGITAL PLATFORMS',
      title: 'Multi-Product Digital Ecosystems',
      price: null,
      timeline: 'Timeline defined after product scoping',
      description:
        'For businesses whose product requires several connected systems — for example a public website, customer app, staff or rider app, payments, database and administrative platform.',
      features: [
        'Customer website or portal',
        'Android & iOS apps',
        'Staff / partner applications',
        'Admin control centre',
        'Payments & transactions',
        'APIs & integrations',
        'Database architecture',
        'Operational reporting',
      ],
      accent: COLORS.orange,
      highlighted: false,
      whatsapp:
        'I would like to discuss a connected digital platform involving multiple applications and systems.',
    },
  ]

  const pricingFactors = [
    {
      title: 'Scope & complexity',
      text:
        'Pages, user roles, workflows, business rules and custom functionality.',
      accent: COLORS.cyan,
    },
    {
      title: 'Design & content',
      text:
        'The amount of interface design, content development and brand work required.',
      accent: COLORS.blue,
    },
    {
      title: 'Integrations',
      text:
        'Payments, maps, messaging, APIs, databases and external services.',
      accent: COLORS.violet,
    },
    {
      title: 'Mobile products',
      text:
        'Whether Android, iOS or additional operational applications are required.',
      accent: COLORS.magenta,
    },
    {
      title: 'Data & security',
      text:
        'User permissions, sensitive data, audit requirements and system architecture.',
      accent: COLORS.orange,
    },
    {
      title: 'Delivery requirements',
      text:
        'Urgency, migrations, approvals, testing depth and deployment complexity.',
      accent: COLORS.cyan,
    },
  ]

  const examples = [
    {
      title: 'School Management System',
      description:
        'Usually combines a web application, database, parent and staff accounts, payments and administration.',
      link: '/solutions#school-management',
      accent: COLORS.cyan,
    },
    {
      title: 'SACCO Platform',
      description:
        'May include member accounts, loans, statements, M-Pesa, approvals, notifications and reporting.',
      link: '/solutions#sacco-management',
      accent: COLORS.blue,
    },
    {
      title: 'Hospital Management System',
      description:
        'May require patients, clinicians, appointments, billing, pharmacy, roles and operational reporting.',
      link: '/solutions#hospital-management',
      accent: COLORS.violet,
    },
    {
      title: 'Fleet Management App',
      description:
        'May combine vehicles, drivers, assignments, bookings, maintenance, maps and reporting.',
      link: '/solutions#fleet-management',
      accent: COLORS.magenta,
    },
    {
      title: 'Online Wines & Spirits Shop',
      description:
        'Can combine e-commerce, inventory, customer accounts, M-Pesa/cards, loyalty and local delivery.',
      link: '/solutions#ecommerce',
      accent: COLORS.orange,
    },
    {
      title: 'Uber / Glovo-style Platform',
      description:
        'Typically requires multiple applications: customer, driver or rider, partner, admin, maps and payments.',
      link: '/solutions#delivery-platforms',
      accent: COLORS.cyan,
    },
  ]

  const included = [
    {
      title: 'Consultation',
      text:
        'Initial discussion to understand the business problem, users and objectives.',
      accent: COLORS.cyan,
    },
    {
      title: 'Defined scope',
      text:
        'A clear project structure, responsibilities, delivery stages and proposal.',
      accent: COLORS.blue,
    },
    {
      title: 'Experience design',
      text:
        'Responsive interfaces designed around the intended users and journeys.',
      accent: COLORS.violet,
    },
    {
      title: 'Development',
      text:
        'The agreed product, logic, integrations and administration tools.',
      accent: COLORS.magenta,
    },
    {
      title: 'Testing',
      text:
        'Review of critical devices, workflows, permissions, forms and integrations.',
      accent: COLORS.orange,
    },
    {
      title: 'Launch & handover',
      text:
        'Production deployment, administrative access and agreed project handover.',
      accent: COLORS.cyan,
    },
  ]

  return (
    <div className="overflow-hidden bg-white text-slate-900">
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
          className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-8 lg:gap-10 items-center">
            {/* LEFT */}
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
                  PROJECT INVESTMENT
                </div>
              </div>

              <h1 className="mt-5 max-w-[820px] text-[35px] sm:text-[40px] lg:text-[45px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                Clear starting points.
                <br />
                <span className="text-slate-400">
                  Precise pricing after we understand the project.
                </span>
              </h1>

              <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-500">
                A five-page corporate website and a multi-role business
                platform are fundamentally different products. Pricing should
                reflect the work the project genuinely requires.
              </p>

              <p className="mt-3 max-w-[720px] text-[13px] leading-7 text-slate-500">
                The figures below are useful starting points for budgeting.
                Your formal quotation is prepared after we understand the
                scope, users, integrations and delivery requirements.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5"
                >
                  Request a quotation →
                </Link>

                <Link
                  to="/process"
                  className="inline-flex rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-[#16243A]"
                >
                  See how we work
                </Link>
              </div>
            </div>

            {/* CURRENCY */}
            <div className="overflow-hidden rounded-[27px] border border-slate-200 bg-[#F8FAFC]">
              <div
                className="h-[4px]"
                style={{
                  background:
                    'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                }}
              />

              <div className="p-7">
                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  CURRENCY DISPLAY
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <span
                    className={`text-[14px] ${
                      !usd
                        ? 'font-bold text-[#16243A]'
                        : 'font-medium text-slate-400'
                    }`}
                  >
                    KES
                  </span>

                  <button
                    type="button"
                    onClick={() => setUsd(!usd)}
                    aria-label="Switch between Kenyan shillings and US dollars"
                    className="relative h-8 w-[60px] rounded-full bg-[#0F1F35]"
                  >
                    <span
                      className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all ${
                        usd ? 'left-[32px]' : 'left-1'
                      }`}
                    />
                  </button>

                  <span
                    className={`text-[14px] ${
                      usd
                        ? 'font-bold text-[#16243A]'
                        : 'font-medium text-slate-400'
                    }`}
                  >
                    USD
                  </span>
                </div>

                <div className="mt-6 rounded-[17px] border border-slate-200 bg-white p-5">
                  <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
                    INTERNATIONAL PROJECTS
                  </div>

                  <p className="mt-2 text-[10px] leading-5 text-slate-500">
                    USD figures are indicative and use approximately KES{' '}
                    {exchangeRate} per US dollar. International quotations use
                    the applicable agreed commercial rate.
                  </p>
                </div>

                <blockquote className="mt-5 border-l-[3px] border-[#8B5CF6] pl-4 text-[14px] font-semibold leading-6 text-[#16243A]">
                  “Price the product that needs to be built — not the label
                  attached to it.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PRICING PRINCIPLE
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                title: 'Starting range',
                text:
                  'Useful for early budgeting before detailed project discovery.',
                accent: COLORS.cyan,
              },
              {
                title: 'Defined scope',
                text:
                  'We establish what the project genuinely requires before committing to final cost.',
                accent: COLORS.violet,
              },
              {
                title: 'Written quotation',
                text:
                  'The agreed scope, investment and commercial terms are documented before work begins.',
                accent: COLORS.orange,
              },
            ].map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-white p-5"
              >
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{ background: item.accent }}
                />

                <h3 className="text-[12px] font-bold text-[#16243A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-slate-500">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CORE PRICING
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-7 items-end">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.cyan }}
              />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                DEVELOPMENT STARTING POINTS
              </div>
            </div>

            <h2 className="mt-3 max-w-[800px] text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Start with the technical product you need.
            </h2>
          </div>

          <p className="max-w-[450px] lg:ml-auto text-[11px] leading-6 text-slate-500">
            Industry-specific products such as school systems, hospital
            systems and marketplaces are quoted according to the services and
            architecture required to build them.
          </p>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-5">
          {packages.map((item) => {
            const whatsappUrl = `https://wa.me/254722114098?text=${encodeURIComponent(
              item.whatsapp
            )}`

            return (
              <article
                key={item.number}
                className={`relative overflow-hidden rounded-[27px] border ${
                  item.highlighted
                    ? 'border-[#0F1F35] bg-[#0F1F35] text-white shadow-[0_24px_60px_rgba(15,31,53,0.16)]'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{ background: item.accent }}
                />

                <div className="p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div
                        className={`text-[8px] font-bold tracking-[0.16em] ${
                          item.highlighted
                            ? 'text-slate-400'
                            : 'text-slate-400'
                        }`}
                      >
                        {item.category}
                      </div>

                      <h3 className="mt-3 text-[22px] lg:text-[24px] font-bold leading-[1.12]">
                        {item.title}
                      </h3>
                    </div>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                        item.highlighted
                          ? 'bg-white/10'
                          : 'bg-[#F8FAFC]'
                      }`}
                      style={{ color: item.accent }}
                    >
                      {item.number}
                    </div>
                  </div>

                  <p
                    className={`mt-4 max-w-[640px] text-[11px] leading-6 ${
                      item.highlighted
                        ? 'text-slate-300'
                        : 'text-slate-500'
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* PRICE */}
                  <div
                    className={`mt-6 rounded-[20px] border p-5 ${
                      item.highlighted
                        ? 'border-white/10 bg-white/[0.04]'
                        : 'border-slate-200 bg-[#F8FAFC]'
                    }`}
                  >
                    <div
                      className={`text-[8px] font-bold tracking-[0.16em] ${
                        item.highlighted
                          ? 'text-slate-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {item.price ? 'STARTING FROM' : 'PROJECT INVESTMENT'}
                    </div>

                    <div
                      className={`mt-2 font-bold tracking-[-0.025em] ${
                        item.price
                          ? 'text-[30px] lg:text-[34px]'
                          : 'text-[24px] lg:text-[27px]'
                      }`}
                    >
                      {formatPrice(item.price)}
                    </div>

                    <div
                      className={`mt-2 text-[9px] ${
                        item.highlighted
                          ? 'text-slate-400'
                          : 'text-slate-500'
                      }`}
                    >
                      {item.timeline}
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
                    {item.features.map((feature) => (
                      <div
                        key={feature}
                        className={`rounded-[13px] border px-4 py-3 text-[10px] font-semibold ${
                          item.highlighted
                            ? 'border-white/10 bg-white/[0.04] text-slate-200'
                            : 'border-slate-200 bg-[#F8FAFC] text-slate-600'
                        }`}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex rounded-full px-6 py-3 text-[10px] font-bold ${
                        item.highlighted
                          ? 'bg-white text-[#0F1F35]'
                          : 'bg-[#0F1F35] text-white'
                      }`}
                    >
                      Request quotation →
                    </a>

                    <Link
                      to="/services"
                      className={`inline-flex rounded-full border px-6 py-3 text-[10px] font-bold ${
                        item.highlighted
                          ? 'border-white/15 text-white'
                          : 'border-slate-200 text-[#16243A]'
                      }`}
                    >
                      Explore service
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* ======================================================
          SERVICES VS SOLUTIONS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr] gap-8 items-start">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.violet }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  HOW SOLUTIONS ARE PRICED
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                A solution is usually a combination of services.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                We do not price a hospital system, SACCO platform or delivery
                app merely because of its industry label. We price the actual
                architecture and functionality required.
              </p>

              <Link
                to="/solutions"
                className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
              >
                Explore solutions →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {examples.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="group relative overflow-hidden rounded-[19px] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <div
                    className="absolute inset-y-0 left-0 w-[3px]"
                    style={{ background: item.accent }}
                  />

                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="text-[13px] font-bold text-[#16243A]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[9px] leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    <span
                      className="shrink-0 transition group-hover:translate-x-1"
                      style={{ color: item.accent }}
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT AFFECTS PRICE
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.orange }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                WHAT DETERMINES COST?
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Similar-looking products can require very different engineering.
            </h2>

            <blockquote className="mt-6 border-l-[3px] border-[#FF8A3D] pl-4 text-[15px] font-semibold leading-6 text-[#16243A]">
              “The interface is only the visible part of the product.”
            </blockquote>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pricingFactors.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[19px] border border-slate-200 bg-[#F8FAFC] p-5"
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
      </section>

      {/* ======================================================
          EXAMPLE ARCHITECTURE
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr] gap-8 lg:gap-10">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                WHY SOME PROJECTS COST MORE
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em]">
                Imagine building the next Glovo.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-300">
                It is not one app. A delivery platform may require several
                products and systems working together.
              </p>

              <p className="mt-3 text-[10px] leading-5 text-slate-400">
                That is why a connected platform is scoped and quoted after
                product discovery rather than priced as a generic mobile app.
              </p>

              <Link
                to="/solutions#delivery-platforms"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-[10px] font-bold text-[#0F1F35]"
              >
                Explore delivery platforms →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  label: 'CUSTOMER PRODUCT',
                  title: 'Web / mobile ordering',
                  accent: COLORS.cyan,
                },
                {
                  label: 'RIDER PRODUCT',
                  title: 'Driver or rider application',
                  accent: COLORS.blue,
                },
                {
                  label: 'MERCHANT PRODUCT',
                  title: 'Partner administration',
                  accent: COLORS.violet,
                },
                {
                  label: 'OPERATIONS',
                  title: 'Dispatch & control dashboard',
                  accent: COLORS.magenta,
                },
                {
                  label: 'INFRASTRUCTURE',
                  title: 'APIs, database & authentication',
                  accent: COLORS.orange,
                },
                {
                  label: 'TRANSACTIONS',
                  title: 'Payments & financial records',
                  accent: COLORS.cyan,
                },
              ].map((item) => (
                <article
                  key={item.label}
                  className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] p-5"
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

                  <div className="mt-2 text-[12px] font-bold text-white">
                    {item.title}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          INCLUDED
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.cyan }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                INCLUDED IN EVERY PROJECT
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Professional delivery from planning through launch.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              We are not simply selling hours of development. The engagement
              includes the thinking, structure and delivery required to move
              from idea to production.
            </p>

            <Link
              to="/process"
              className="mt-6 inline-flex rounded-full border border-slate-200 px-6 py-3 text-[10px] font-bold text-[#16243A]"
            >
              See our process →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {included.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[19px] border border-slate-200 bg-[#F8FAFC] p-5"
              >
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
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
      </section>

      {/* ======================================================
          PAYMENT TERMS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-12">
          <div className="grid lg:grid-cols-[0.31fr_0.69fr] gap-8">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                COMMERCIAL TERMS
              </div>

              <h2 className="mt-3 text-[26px] lg:text-[30px] font-bold leading-[1.1] text-[#16243A]">
                Clear before the project begins.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              <article className="relative overflow-hidden rounded-[19px] border border-slate-200 bg-white p-5">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[#18B8F2]" />

                <div className="text-[9px] font-bold text-[#16243A]">
                  Project deposit
                </div>

                <p className="mt-2 text-[9px] leading-5 text-slate-500">
                  Work begins after the agreed deposit, approved scope and
                  required project materials are received.
                </p>
              </article>

              <article className="relative overflow-hidden rounded-[19px] border border-slate-200 bg-white p-5">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[#8B5CF6]" />

                <div className="text-[9px] font-bold text-[#16243A]">
                  Milestone payments
                </div>

                <p className="mt-2 text-[9px] leading-5 text-slate-500">
                  Larger projects may be divided into agreed delivery stages
                  with payments linked to milestones.
                </p>
              </article>

              <article className="relative overflow-hidden rounded-[19px] border border-slate-200 bg-white p-5">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-[#FF8A3D]" />

                <div className="text-[9px] font-bold text-[#16243A]">
                  Third-party costs
                </div>

                <p className="mt-2 text-[9px] leading-5 text-slate-500">
                  Hosting, domains, app-store accounts, messaging providers and
                  external software charges are identified separately where
                  applicable.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          NO SURPRISES
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11">
        <div className="overflow-hidden rounded-[25px] border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
            <div className="bg-[#F8FAFC] p-6 lg:p-7">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                SCOPE CHANGES
              </div>

              <h3 className="mt-3 text-[21px] font-bold text-[#16243A]">
                What if the project changes?
              </h3>
            </div>

            <div className="p-6 lg:p-7">
              <p className="text-[11px] leading-6 text-slate-500">
                New requirements can emerge during development. Where a change
                materially affects scope, integrations, complexity or
                delivery, we assess the impact and agree it with you before
                additional work proceeds.
              </p>

              <div className="mt-4 text-[12px] font-bold text-[#16243A]">
                No unexplained additions. No surprise final invoice.
              </div>
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
                  NEED A PRECISE FIGURE?
                </div>
              </div>

              <h2 className="mt-4 max-w-[880px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                Tell us what you want to build.
                <br />
                We will tell you what it should take.
              </h2>

              <p className="mt-5 max-w-[700px] text-[13px] leading-7 text-slate-300">
                Share the business objective, intended users and important
                functionality. We will review the project and prepare an
                appropriate scope, delivery approach and quotation.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Request a quotation →
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