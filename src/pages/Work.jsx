import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function Work() {
  const projects = [
    {
      name: 'Akashi Designs',
      category: 'LIVE PLATFORM • ARCHITECTURE & E-COMMERCE',
      headline:
        'A global architectural marketplace built for discovery, purchase and secure digital delivery.',
      description:
        'A purpose-built platform where international customers can explore premium house plans, purchase securely and receive protected digital plan files after payment.',
      image: '/akashi-work-banner.png',
      alt: 'Akashi Designs premium architectural house plans marketplace',
      features: [
        'House-plan catalogue',
        'Secure digital delivery',
        'Multiple payment gateways',
        'Administrative management',
      ],
      website: 'https://akashidesigns.com',
      live: true,
      featured: true,
    },

    {
      name: 'The Alkebula School',
      category: 'LIVE PLATFORM • EDUCATION TECHNOLOGY',
      headline:
        'A connected learning platform for international tutoring and homeschool support.',
      description:
        'A multi-role education platform bringing together parents, approved educators and administrators through tutor applications, profiles, bookings and academic services.',
      image: '/alkebula-school-work.png',
      alt: 'The Alkebula School education platform',
      features: [
        'Tutor applications',
        'Parent booking journeys',
        'Educator profiles',
        'Academic administration',
      ],
      website: 'https://alkebulaschool.com',
      live: true,
    },

    {
      name: 'Sunscape Car Rentals',
      category: 'LIVE WEBSITE • CAR RENTAL & TRAVEL',
      headline:
        'A booking-led fleet website designed to turn vehicle discovery into enquiries.',
      description:
        'A professional customer journey for travellers seeking airport transfers, corporate transport, family vehicles and car hire across Kenya.',
      image: '/human_cafe_laptop.webp',
      alt: 'Sunscape Car Rentals booking website',
      features: [
        'Fleet presentation',
        'Booking enquiries',
        'WhatsApp integration',
        'Travel-focused content',
      ],
      website: 'https://sunscape.co.ke',
      live: true,
    },

    {
      name: 'SokoMart KE',
      category: 'PRODUCT CONCEPT • E-COMMERCE',
      headline:
        'A mobile-first commerce platform built around M-Pesa and local delivery.',
      description:
        'A retail platform concept combining product discovery, cart management, M-Pesa checkout, inventory visibility, rider assignment and order fulfilment.',
      image: '/prod-retail.webp',
      alt: 'SokoMart e-commerce platform',
      features: [
        'M-Pesa checkout',
        'Inventory management',
        'Rider workflow',
        'Order tracking',
      ],
      route: '/contact',
      live: false,
    },

    {
      name: 'LuminaPay',
      category: 'PRODUCT CONCEPT • FINTECH',
      headline:
        'A real-time collections dashboard designed to replace manual reconciliation.',
      description:
        'A financial-operations concept for managing M-Pesa transactions, verified callbacks, customer receipts, reporting and audit records from one dashboard.',
      image: '/prod-fintech.webp',
      alt: 'LuminaPay collections dashboard',
      features: [
        'Daraja integration',
        'Verified callbacks',
        'Automated receipts',
        'Transaction reporting',
      ],
      route: '/contact',
      live: false,
    },

    {
      name: 'AURORA',
      category: 'PRODUCT CONCEPT • CORPORATE WEBSITE',
      headline:
        'A premium corporate presence designed to communicate confidence and authority.',
      description:
        'A refined professional-services website concept combining strong positioning, service presentation, thought leadership and qualified enquiry pathways.',
      image: '/prod-corporate.webp',
      alt: 'AURORA corporate website concept',
      features: [
        'Premium presentation',
        'Service positioning',
        'Thought leadership',
        'Lead-generation journeys',
      ],
      route: '/contact',
      live: false,
    },
  ]

  const featuredProject = projects.find((project) => project.featured)

  const remainingProjects = projects.filter(
    (project) => !project.featured
  )

  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Selected Work | Sterlings Studio"
        description="Explore live client platforms and digital product concepts built by Sterlings Studio across architecture, education, transport, commerce and fintech."
        canonical="https://sterlingsstudio.com/work"
        ogImage="/sterling-share-preview.png"
      />

      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 lg:pt-14 pb-10 lg:pb-12">
        <div className="max-w-[920px]">
          <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
            SELECTED WORK
          </div>

          <h1 className="mt-4 text-[32px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-slate-800">
            Digital platforms shaped around real organisations and meaningful
            business needs.
          </h1>

          <p className="mt-5 max-w-[75ch] text-[14px] leading-7 text-slate-500">
            Our work spans architectural commerce, international education,
            transport, retail and financial technology. Every project begins
            with a clear business requirement and is designed around the people
            who will use it.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <div className="rounded-full bg-[#0F1F35] px-4 py-2 text-[10px] font-bold text-white">
              Live client platforms
            </div>

            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold text-slate-500">
              Sterlings Studio product concepts
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED AKASHI */}
      {featuredProject && (
        <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-12">
          <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.03fr_0.97fr] lg:items-center">

              {/* IMAGE COLUMN */}
              <div className="bg-[#F4F7FA] p-4 sm:p-5 lg:p-6">
                <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_12px_40px_rgba(15,31,53,0.08)]">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.alt}
                    loading="eager"
                    className="block w-full aspect-video object-cover object-center"
                  />
                </div>

                {/* EDITORIAL CAPTION */}
                <div className="flex items-center justify-between gap-5 px-1 pt-4">
                  <div>
                    <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                      FEATURED LIVE PLATFORM
                    </div>

                    <div className="mt-1 text-[12px] font-semibold text-slate-700">
                      Architecture & digital commerce
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-slate-400">
                    01 / 06
                  </span>
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="px-7 py-9 sm:px-9 lg:px-10 xl:px-12 lg:py-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                    01 / {featuredProject.category}
                  </div>

                  <div className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-[9px] font-bold text-green-700">
                    LIVE PROJECT
                  </div>
                </div>

                <div className="mt-5 text-[14px] font-bold text-slate-800">
                  {featuredProject.name}
                </div>

                <h2 className="mt-3 max-w-[620px] text-[27px] sm:text-[29px] lg:text-[31px] font-bold leading-[1.07] tracking-[-0.025em] text-slate-800">
                  {featuredProject.headline}
                </h2>

                <p className="mt-5 max-w-[58ch] text-[14px] leading-7 text-slate-500">
                  {featuredProject.description}
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {featuredProject.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-[14px] border border-slate-200 bg-white px-4 py-3 text-[12px] font-semibold text-slate-600"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={featuredProject.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-6 py-3 text-[11px] font-bold text-white transition-colors hover:bg-[#172C49]"
                  >
                    Visit Akashi Designs ↗
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-[11px] font-bold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    Discuss a similar project →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* OTHER PROJECTS */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-20">
        <div className="grid gap-7">
          {remainingProjects.map((project, index) => (
            <article
              key={project.name}
              className={`overflow-hidden rounded-[26px] border border-slate-200 grid lg:grid-cols-[1fr_1fr] ${
                index % 2 === 0 ? 'bg-[#F8FAFC]' : 'bg-white'
              }`}
            >
              {/* IMAGE */}
              <div className="overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="block w-full h-[300px] sm:h-[350px] lg:h-full min-h-[400px] object-cover object-center"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7 sm:p-8 lg:p-9 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                    {String(index + 2).padStart(2, '0')} / {project.category}
                  </div>

                  <div
                    className={`rounded-full border px-2.5 py-1 text-[9px] font-bold ${
                      project.live
                        ? 'border-green-100 bg-green-50 text-green-700'
                        : 'border-slate-200 bg-slate-100 text-slate-500'
                    }`}
                  >
                    {project.live ? 'LIVE PROJECT' : 'PRODUCT CONCEPT'}
                  </div>
                </div>

                <div className="mt-5 text-[13px] font-bold text-slate-800">
                  {project.name}
                </div>

                <h2 className="mt-2 max-w-[600px] text-[23px] lg:text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-800">
                  {project.headline}
                </h2>

                <p className="mt-4 max-w-[62ch] text-[13px] leading-6 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[11px] font-semibold text-slate-600"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  {project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-5 py-2.5 text-[11px] font-bold text-white transition-colors hover:bg-[#172C49]"
                    >
                      Visit live platform ↗
                    </a>
                  ) : (
                    <Link
                      to={project.route}
                      className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-5 py-2.5 text-[11px] font-bold text-white transition-colors hover:bg-[#172C49]"
                    >
                      Build something similar →
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-y border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.72fr_0.28fr] gap-8 items-end">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                YOUR PROJECT COULD BE NEXT
              </div>

              <h2 className="mt-4 max-w-[760px] text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-800">
                Bring us the business challenge. We will help shape the right
                digital solution.
              </h2>

              <p className="mt-4 max-w-[65ch] text-[14px] leading-7 text-slate-500">
                Whether you need a company website, marketplace, booking
                system, education platform, internal dashboard or mobile
                application, we will help define and build it around your
                objectives.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-7 py-3.5 text-[12px] font-bold text-white transition-colors hover:bg-[#172C49]"
              >
                Discuss your project →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
