import { Link } from 'react-router-dom'

export default function Work() {
  const projects = [
    {
      name: 'Akashi Designs',
      category: 'LIVE PLATFORM • ARCHITECTURE & E-COMMERCE',
      headline:
        'A global architectural marketplace built for discovery, purchase and secure digital delivery.',
      description:
        'A purpose-built platform where international customers can explore premium house plans, purchase securely and receive protected digital plan files after payment.',
      image: '/human_boardroom_main.webp',
      alt: 'Akashi Designs architectural marketplace',
      features: [
        'House-plan catalogue',
        'Secure digital delivery',
        'Multiple payment gateways',
        'Administrative management',
      ],
      website: 'https://akashidesigns.com',
      live: true,
    },
    {
      name: 'The Alkebula School',
      category: 'LIVE PLATFORM • EDUCATION TECHNOLOGY',
      headline:
        'A connected learning platform for international tutoring and homeschool support.',
      description:
        'A multi-role education platform bringing together parents, approved educators and administrators through tutor applications, profiles, bookings and academic services.',
      image: '/human_team_collab.webp',
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

  return (
    <div className="bg-white text-slate-900">
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="text-[11px] font-bold tracking-widest text-slate-500">
          SELECTED WORK
        </div>

        <h1 className="mt-3 text-[46px] lg:text-[58px] font-extrabold leading-[0.95] tracking-tight max-w-[980px]">
          Digital platforms shaped around real organisations and meaningful
          business needs.
        </h1>

        <p className="mt-6 text-[15px] leading-7 text-slate-600 max-w-[75ch]">
          Our work spans architectural commerce, international education,
          transport, retail and financial technology. Every project begins with
          a clear business requirement and is designed around the people who
          will use it.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <div className="px-3 py-1.5 rounded-full bg-[#0F1F35] text-white text-[11px] font-bold">
            Live client platforms
          </div>

          <div className="px-3 py-1.5 rounded-full border text-slate-600 text-[11px] font-bold">
            Sterling Studios product concepts
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-24 grid gap-8">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`rounded-[28px] border overflow-hidden grid lg:grid-cols-[1.08fr_0.92fr] ${
              index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'
            }`}
          >
            <div className="overflow-hidden bg-slate-100">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-[340px] lg:h-full min-h-[430px] object-cover object-top"
              />
            </div>

            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-[11px] font-bold tracking-widest text-slate-500">
                  {String(index + 1).padStart(2, '0')} — {project.category}
                </div>

                <div
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    project.live
                      ? 'bg-green-50 text-green-700 border border-green-100'
                      : 'bg-slate-100 text-slate-500 border'
                  }`}
                >
                  {project.live ? 'LIVE PROJECT' : 'PRODUCT CONCEPT'}
                </div>
              </div>

              <div className="mt-5 text-[14px] font-extrabold">
                {project.name}
              </div>

              <h2 className="mt-2 text-[25px] lg:text-[29px] font-extrabold leading-[1.12] tracking-tight">
                {project.headline}
              </h2>

              <p className="mt-4 text-[13px] leading-6 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="px-3 py-2 rounded-xl border bg-white text-[11px] font-semibold text-slate-600"
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
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0F1F35] text-white text-[12px] font-bold"
                  >
                    Visit live platform ↗
                  </a>
                ) : (
                  <Link
                    to={project.route}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0F1F35] text-white text-[12px] font-bold"
                  >
                    Build something similar →
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              YOUR PROJECT COULD BE NEXT
            </div>

            <h2 className="mt-3 text-[30px] lg:text-[38px] font-extrabold tracking-tight max-w-[720px]">
              Bring us the business challenge. We will help shape the right
              digital solution.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-slate-600 max-w-[65ch]">
              Whether you need a company website, marketplace, booking system,
              education platform, internal dashboard or mobile application, we
              will help define and build it around your objectives.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-7 py-3 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold whitespace-nowrap"
          >
            Discuss your project →
          </Link>
        </div>
      </section>
    </div>
  )
}