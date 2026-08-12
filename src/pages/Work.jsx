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

export default function Work() {
  const liveProjects = [
    {
      number: '01',
      name: 'Akashi Designs',
      category: 'ARCHITECTURE • DIGITAL COMMERCE',
      headline:
        'A global architectural marketplace built for discovery, purchase and secure digital delivery.',
      description:
        'A purpose-built platform where international customers can explore premium house plans, purchase securely and receive protected digital plan files after payment.',
      image: '/akashi-work-banner.png',
      alt: 'Akashi Designs premium architectural house plans marketplace',
      website: 'https://akashidesigns.com',
      accent: COLORS.cyan,
      capabilities: [
        'Marketplace architecture',
        'House-plan catalogue',
        'Secure checkout',
        'Digital delivery',
        'Multiple payment gateways',
        'Customer journeys',
        'Administrative tools',
        'International commerce',
      ],
      proves:
        'Complex digital products can still feel elegant, simple and commercially focused.',
    },
    {
      number: '02',
      name: 'The Alkebula School',
      category: 'EDUCATION TECHNOLOGY',
      headline:
        'A connected learning platform bringing parents, educators and academic administration together.',
      description:
        'A multi-role education platform supporting tutor applications, approved educator profiles, international curricula, parent journeys, lesson bookings and academic services.',
      image: '/alkebula-school-work.png',
      alt: 'The Alkebula School international education platform',
      website: 'https://alkebulaschool.com',
      accent: COLORS.violet,
      capabilities: [
        'Parent accounts',
        'Tutor applications',
        'Educator profiles',
        'Booking workflows',
        'Multi-role access',
        'Academic administration',
        'International curricula',
        'Platform management',
      ],
      proves:
        'A serious education product requires far more than an attractive school website.',
    },
    {
      number: '03',
      name: 'Sunscape Car Rentals',
      category: 'TRANSPORT • TRAVEL • BOOKINGS',
      headline:
        'A booking-led digital presence designed around vehicle discovery and customer enquiry.',
      description:
        'A professional customer experience for travellers seeking vehicle hire, airport transfers, corporate transport and family travel across Kenya.',
      image: '/human_cafe_laptop.webp',
      alt: 'Sunscape Car Rentals digital booking experience',
      website: 'https://sunscape.co.ke',
      accent: COLORS.orange,
      capabilities: [
        'Fleet presentation',
        'Vehicle discovery',
        'Booking enquiries',
        'WhatsApp integration',
        'Travel content',
        'Mobile experience',
        'Customer journeys',
        'Lead generation',
      ],
      proves:
        'Even a service business becomes easier to buy from when its digital journey is designed properly.',
    },
  ]

  const concepts = [
    {
      number: '04',
      name: 'SokoMart KE',
      category: 'RETAIL • E-COMMERCE • MOBILE',
      headline:
        'A mobile-first commerce platform built around M-Pesa and local fulfilment.',
      description:
        'A retail product concept demonstrating how product discovery, inventory, M-Pesa checkout, customer ordering, rider assignment and local delivery could operate as one connected platform.',
      image: '/prod-retail.webp',
      alt: 'SokoMart KE retail commerce product concept',
      accent: COLORS.cyan,
      stack: 'Next.js • Flutter • M-Pesa • PostgreSQL',
      capabilities: [
        'Web storefront',
        'Android application',
        'M-Pesa checkout',
        'Inventory',
        'Customer accounts',
        'Order management',
        'Rider workflow',
        'Delivery tracking',
      ],
      idea:
        'Imagine taking a neighbourhood retail business and turning it into a digital operation customers can order from anywhere.',
    },
    {
      number: '05',
      name: 'LuminaPay',
      category: 'FINTECH • PAYMENTS • OPERATIONS',
      headline:
        'A financial operations platform designed to make transaction activity easier to understand and manage.',
      description:
        'A fintech concept exploring M-Pesa transaction flows, verified callbacks, receipts, customer activity, administrative oversight and financial reporting from a central interface.',
      image: '/prod-fintech.webp',
      alt: 'LuminaPay fintech dashboard product concept',
      accent: COLORS.violet,
      stack: 'Node.js • PostgreSQL • Daraja • M-Pesa',
      capabilities: [
        'Transaction dashboard',
        'Daraja integration',
        'Verified callbacks',
        'Customer records',
        'Automated receipts',
        'Payment visibility',
        'Audit records',
        'Reporting',
      ],
      idea:
        'Financial software becomes valuable when transactions stop being scattered events and become usable operational information.',
    },
    {
      number: '06',
      name: 'AURORA',
      category: 'CORPORATE • DIGITAL EXPERIENCE',
      headline:
        'A premium corporate presence built to communicate authority, credibility and confidence.',
      description:
        'A professional-services concept combining refined editorial presentation, strong positioning, thought leadership, performance and qualified enquiry journeys.',
      image: '/prod-corporate.webp',
      alt: 'AURORA premium corporate website concept',
      accent: COLORS.orange,
      stack: 'Next.js • Tailwind • Vercel • SEO',
      capabilities: [
        'Premium web design',
        'Corporate positioning',
        'Service architecture',
        'Performance',
        'Search foundations',
        'Thought leadership',
        'Lead generation',
        'Responsive experience',
      ],
      idea:
        'A corporate website should not merely describe the organisation. It should reinforce why the organisation deserves attention.',
    },
  ]

  const capabilityProof = [
    {
      title: 'Digital Commerce',
      text:
        'Products, customers, checkout, payments, administration and fulfilment.',
      evidence: 'Akashi • SokoMart',
      accent: COLORS.cyan,
    },
    {
      title: 'Multi-role Platforms',
      text:
        'Different user types interacting with the same underlying system.',
      evidence: 'Alkebula • SokoMart',
      accent: COLORS.blue,
    },
    {
      title: 'Payments & Fintech',
      text:
        'M-Pesa, payment records, callbacks, transaction visibility and reporting.',
      evidence: 'LuminaPay • SokoMart',
      accent: COLORS.violet,
    },
    {
      title: 'Bookings & Service Journeys',
      text:
        'Helping customers move from discovery towards booking or enquiry.',
      evidence: 'Sunscape • Alkebula',
      accent: COLORS.magenta,
    },
    {
      title: 'Premium Corporate Web',
      text:
        'Performance, positioning, credibility and sophisticated digital presentation.',
      evidence: 'AURORA',
      accent: COLORS.orange,
    },
  ]

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <SEO
        title="Selected Work & Digital Product Portfolio | Sterlings Studio"
        description="Explore live digital platforms and product concepts from Sterlings Studio across architecture, education, transport, e-commerce, fintech and corporate technology."
        canonical="https://sterlingsstudio.com/work"
        ogImage="/sterling-share-preview.png"
      />

      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-10 lg:pt-12 pb-10">
          <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-8 lg:gap-10 items-end">
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
                  SELECTED WORK
                </div>
              </div>

              <h1 className="mt-5 max-w-[850px] text-[35px] sm:text-[40px] lg:text-[45px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                The best explanation of what we can build is what we have
                already built.
              </h1>

              <p className="mt-5 max-w-[730px] text-[14px] leading-7 text-slate-500">
                Our portfolio spans digital commerce, international education,
                transport, mobile retail, fintech and premium corporate
                experiences.
              </p>

              <p className="mt-3 max-w-[730px] text-[13px] leading-7 text-slate-500">
                Some are live client platforms. Others are Sterlings Studio
                product concepts created to demonstrate how technology can
                solve specific commercial and operational problems.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#live-work"
                  className="inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
                >
                  Explore live work ↓
                </a>

                <a
                  href="#concept-lab"
                  className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-[10px] font-bold text-[#16243A]"
                >
                  Product Concept Lab ↓
                </a>
              </div>
            </div>

            {/* PORTFOLIO LEGEND */}
            <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-[#F8FAFC]">
              <div
                className="h-[4px]"
                style={{
                  background:
                    'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                }}
              />

              <div className="p-6">
                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  THE PORTFOLIO
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-[18px] border border-slate-200 bg-white p-5">
                    <div className="text-[28px] font-bold tracking-[-0.03em] text-[#16243A]">
                      3
                    </div>

                    <div className="mt-1 text-[10px] font-bold text-slate-500">
                      Live platforms
                    </div>

                    <div className="mt-3 h-[3px] w-10 rounded-full bg-[#18B8F2]" />
                  </div>

                  <div className="rounded-[18px] border border-slate-200 bg-white p-5">
                    <div className="text-[28px] font-bold tracking-[-0.03em] text-[#16243A]">
                      3
                    </div>

                    <div className="mt-1 text-[10px] font-bold text-slate-500">
                      Product concepts
                    </div>

                    <div className="mt-3 h-[3px] w-10 rounded-full bg-[#8B5CF6]" />
                  </div>
                </div>

                <blockquote className="mt-5 border-l-[3px] border-[#D946EF] pl-4 text-[14px] font-semibold leading-6 text-[#16243A]">
                  “Proof before promises.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          LIVE WORK INTRO
      ====================================================== */}
      <section
        id="live-work"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-9">
          <div className="grid lg:grid-cols-[0.68fr_0.32fr] gap-6 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  LIVE CLIENT PLATFORMS
                </div>
              </div>

              <h2 className="mt-3 text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Products serving real businesses and real users.
              </h2>
            </div>

            <p className="max-w-[430px] lg:ml-auto text-[11px] leading-6 text-slate-500">
              These platforms can be opened, explored and experienced directly.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FEATURED AKASHI
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-12">
        <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,31,53,0.06)]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* IMAGE */}
            <div className="relative bg-[#F4F7FA] p-4 sm:p-5 lg:p-6">
              <div className="relative overflow-hidden rounded-[23px] bg-white">
                <img
                  src={liveProjects[0].image}
                  alt={liveProjects[0].alt}
                  loading="eager"
                  className="block w-full aspect-video object-cover object-center"
                />

                <div
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{ background: liveProjects[0].accent }}
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#0F1F35]/92 px-3 py-1.5 text-[8px] font-bold tracking-[0.13em] text-white">
                  FEATURED LIVE PLATFORM
                </div>
              </div>

              <div className="flex items-center justify-between gap-5 px-1 pt-4">
                <div>
                  <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                    ARCHITECTURE • DIGITAL COMMERCE
                  </div>

                  <div className="mt-1 text-[12px] font-semibold text-[#16243A]">
                    Global digital marketplace
                  </div>
                </div>

                <span className="text-[10px] font-bold text-[#18B8F2]">
                  01 / 06
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7 sm:p-9 lg:p-10 xl:p-11 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-[8px] font-bold text-cyan-700">
                  LIVE
                </span>

                <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                  {liveProjects[0].category}
                </div>
              </div>

              <div className="mt-5 text-[13px] font-bold text-[#16243A]">
                {liveProjects[0].name}
              </div>

              <h2 className="mt-3 max-w-[630px] text-[28px] lg:text-[32px] font-bold leading-[1.07] tracking-[-0.025em] text-[#16243A]">
                {liveProjects[0].headline}
              </h2>

              <p className="mt-5 text-[13px] leading-7 text-slate-500">
                {liveProjects[0].description}
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {liveProjects[0].capabilities.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[13px] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[10px] font-semibold text-slate-600"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6 relative overflow-hidden rounded-[18px] bg-[#0F1F35] p-5 text-white">
                <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                  WHAT THIS PROJECT DEMONSTRATES
                </div>

                <p className="mt-2 text-[14px] font-semibold leading-6">
                  {liveProjects[0].proves}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={liveProjects[0].website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
                >
                  Visit Akashi Designs ↗
                </a>

                <Link
                  to="/contact"
                  className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-[10px] font-bold text-[#16243A]"
                >
                  Build something similar →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* ======================================================
          ALKEBULA + SUNSCAPE
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-2 gap-5">
          {liveProjects.slice(1).map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-[27px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,31,53,0.07)]"
            >
              <div className="relative overflow-hidden bg-[#F4F7FA]">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="block w-full aspect-[16/10] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{ background: project.accent }}
                />

                <div className="absolute left-5 top-5 rounded-full bg-[#0F1F35]/92 px-3 py-1.5 text-[8px] font-bold text-white">
                  LIVE PLATFORM
                </div>

                <div
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[9px] font-bold shadow-sm"
                  style={{ color: project.accent }}
                >
                  {project.number}
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                  {project.category}
                </div>

                <h2 className="mt-3 text-[22px] lg:text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-[#16243A]">
                  {project.name}
                </h2>

                <p className="mt-2 text-[16px] font-semibold leading-6 text-[#16243A]">
                  {project.headline}
                </p>

                <p className="mt-4 text-[11px] leading-6 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-5 grid sm:grid-cols-2 gap-2">
                  {project.capabilities.slice(0, 6).map((feature) => (
                    <div
                      key={feature}
                      className="rounded-[12px] border border-slate-200 bg-[#F8FAFC] px-3 py-2.5 text-[9px] font-semibold text-slate-600"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <blockquote
                  className="mt-5 border-l-[3px] pl-4 text-[13px] font-semibold leading-6 text-[#16243A]"
                  style={{ borderColor: project.accent }}
                >
                  “{project.proves}”
                </blockquote>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-[#0F1F35] px-5 py-2.5 text-[10px] font-bold text-white"
                  >
                    Visit live platform ↗
                  </a>

                  <Link
                    to="/contact"
                    className="text-[10px] font-bold text-[#16243A] underline underline-offset-4"
                  >
                    Discuss a similar build →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ======================================================
          LIVE WORK BRIDGE
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-12">
        <div className="relative overflow-hidden rounded-[27px] bg-[#0F1F35] px-7 py-8 lg:px-9 lg:py-9 text-white">
          <div
            className="absolute left-0 top-0 h-full w-[5px]"
            style={{
              background:
                'linear-gradient(180deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
            }}
          />

          <div className="grid lg:grid-cols-[0.68fr_0.32fr] gap-8 items-end">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                THREE INDUSTRIES. THREE DIFFERENT PROBLEMS.
              </div>

              <blockquote className="mt-3 max-w-[850px] text-[23px] lg:text-[28px] font-semibold leading-[1.18] tracking-[-0.02em]">
                “Good software does not force every business into the same
                template.”
              </blockquote>
            </div>

            <p className="text-[11px] leading-6 text-slate-300 lg:text-right">
              Architecture, education and transport require completely
              different journeys. The technology should reflect that.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          PRODUCT CONCEPT LAB
      ====================================================== */}
      <section
        id="concept-lab"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.66fr_0.34fr] gap-7 items-end">
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

              <h2 className="mt-3 max-w-[820px] text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                What could we build if the brief started with the opportunity?
              </h2>

              <p className="mt-4 max-w-[750px] text-[12px] leading-6 text-slate-500">
                SokoMart KE, LuminaPay and AURORA explore different commercial
                problems and demonstrate how Sterlings approaches product
                strategy, interface design and technical architecture.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/solutions"
                className="inline-flex text-[10px] font-bold text-[#16243A] underline underline-offset-4"
              >
                Explore possible solutions →
              </Link>
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-5">
            {concepts.map((project) => (
              <article
                key={project.name}
                className="group flex flex-col overflow-hidden rounded-[25px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,31,53,0.08)]"
              >
                <div className="relative overflow-hidden bg-[#EEF2F6]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="block w-full aspect-[16/10] object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                  />

                  <div
                    className="absolute inset-x-0 top-0 h-[4px]"
                    style={{ background: project.accent }}
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#0F1F35]/92 px-3 py-1.5 text-[8px] font-bold tracking-[0.12em] text-white">
                    PRODUCT CONCEPT
                  </div>

                  <div
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[9px] font-bold shadow-sm"
                    style={{ color: project.accent }}
                  >
                    {project.number}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="text-[8px] font-bold tracking-[0.14em] text-slate-400">
                    {project.category}
                  </div>

                  <h3 className="mt-3 text-[21px] font-bold text-[#16243A]">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-[15px] font-semibold leading-6 text-[#16243A]">
                    {project.headline}
                  </p>

                  <p className="mt-4 text-[10px] leading-5 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {project.capabilities.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-[11px] border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-[9px] font-semibold text-slate-600"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <div className="text-[8px] font-bold tracking-[0.14em] text-slate-400">
                      TECHNOLOGY
                    </div>

                    <p
                      className="mt-1.5 text-[9px] font-bold"
                      style={{ color: project.accent }}
                    >
                      {project.stack}
                    </p>
                  </div>

                  <blockquote
                    className="mt-5 border-l-[3px] pl-4 text-[11px] font-semibold leading-5 text-[#16243A]"
                    style={{ borderColor: project.accent }}
                  >
                    “{project.idea}”
                  </blockquote>

                  <div className="mt-auto pt-6">
                    <Link
                      to="/contact"
                      className="inline-flex rounded-full bg-[#0F1F35] px-5 py-2.5 text-[10px] font-bold text-white"
                    >
                      Build something like this →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CONCEPT CLARITY */}
          <div className="mt-5 rounded-[20px] border border-slate-200 bg-white px-5 py-4">
            <p className="text-[10px] leading-5 text-slate-500">
              <strong className="font-bold text-[#16243A]">
                Product concepts are intentionally identified as concepts.
              </strong>{' '}
              They demonstrate Sterlings Studio design, product and technical
              thinking and are not presented as commissioned client platforms.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT THE PORTFOLIO PROVES
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.magenta }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                CAPABILITY EVIDENCE
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Look beyond the industries.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              A project in one sector often demonstrates technology that can be
              applied somewhere completely different.
            </p>

            <blockquote className="mt-6 border-l-[3px] border-[#D946EF] pl-4 text-[15px] font-semibold leading-6 text-[#16243A]">
              “The industry changes. The underlying product thinking travels.”
            </blockquote>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {capabilityProof.map((item, index) => (
              <article
                key={item.title}
                className={`relative overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-5 ${
                  index === capabilityProof.length - 1
                    ? 'sm:col-span-2'
                    : ''
                }`}
              >
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{ background: item.accent }}
                />

                <h3 className="text-[14px] font-bold text-[#16243A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-slate-500">
                  {item.text}
                </p>

                <div
                  className="mt-4 text-[8px] font-bold tracking-[0.12em]"
                  style={{ color: item.accent }}
                >
                  SEEN IN: {item.evidence}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICES / SOLUTIONS BRIDGE
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/services"
              className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: COLORS.cyan }}
              />

              <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
                HOW WE BUILD
              </div>

              <div className="mt-2 flex items-end justify-between gap-5">
                <div>
                  <h3 className="text-[18px] font-bold text-[#16243A]">
                    Explore our services.
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    Websites, web applications, Android, iOS and connected
                    digital platforms.
                  </p>
                </div>

                <span className="text-[#18B8F2] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>

            <Link
              to="/solutions"
              className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: COLORS.violet }}
              />

              <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
                WHAT WE CAN BUILD
              </div>

              <div className="mt-2 flex items-end justify-between gap-5">
                <div>
                  <h3 className="text-[18px] font-bold text-[#16243A]">
                    Explore our solutions.
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    Management systems, marketplaces, mobility, commerce,
                    bookings, fintech and more.
                  </p>
                </div>

                <span className="text-[#8B5CF6] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
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
                  YOUR PROJECT COULD BE NEXT
                </div>
              </div>

              <h2 className="mt-4 max-w-[900px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                Do not ask whether we have built your exact idea before.
                <br />
                Ask whether we understand how to build it.
              </h2>

              <p className="mt-5 max-w-[700px] text-[13px] leading-7 text-slate-300">
                Bring us the business challenge, the opportunity or the idea.
                We will help determine the website, web application, Android
                app, iOS app or connected platform required to turn it into a
                working product.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Discuss your project →
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