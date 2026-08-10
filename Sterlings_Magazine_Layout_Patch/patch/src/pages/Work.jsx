import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function Work() {
  const projects = [
    {
      name: 'Akashi Designs',
      type: 'LIVE PLATFORM',
      category: 'ARCHITECTURE & E-COMMERCE',
      description:
        'A specialist architectural marketplace supporting plan discovery, digital purchasing and secure file delivery.',
      image: '/human_boardroom_main.webp',
      website: 'https://akashidesigns.com',
      live: true,
    },
    {
      name: 'The Alkebula School',
      type: 'LIVE PLATFORM',
      category: 'EDUCATION TECHNOLOGY',
      description:
        'A tutoring and education platform supporting parents, educators, applications and international curricula.',
      image: '/human_team_collab.webp',
      website: 'https://alkebulaschool.com',
      live: true,
    },
    {
      name: 'Sunscape Car Rentals',
      type: 'LIVE PLATFORM',
      category: 'TRANSPORT & BOOKINGS',
      description:
        'A booking-led vehicle rental website designed around vehicle discovery, trust and fast enquiry.',
      image: '/human_founder_smile.webp',
      website: 'https://sunscape.co.ke',
      live: true,
    },
    {
      name: 'SokoMart KE',
      type: 'PRODUCT CONCEPT',
      category: 'RETAIL & COMMERCE',
      description:
        'A retail product concept exploring mobile-first ordering, M-Pesa checkout and local fulfilment.',
      image: '/prod-retail.webp',
      route: '/contact',
      live: false,
    },
    {
      name: 'LuminaPay',
      type: 'PRODUCT CONCEPT',
      category: 'FINTECH & OPERATIONS',
      description:
        'A fintech dashboard concept exploring transaction visibility, reconciliation and payment operations.',
      image: '/prod-fintech.webp',
      route: '/contact',
      live: false,
    },
    {
      name: 'AURORA',
      type: 'PRODUCT CONCEPT',
      category: 'CORPORATE & ADVISORY',
      description:
        'A premium corporate product concept focused on clarity, authority and strong enquiry journeys.',
      image: '/prod-corporate.webp',
      route: '/contact',
      live: false,
    },
  ]

  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Selected Work | Sterlings Studio"
        description="Explore live client platforms and product concepts designed by Sterlings Studio."
        canonical="https://sterlingsstudio.com/work"
      />

      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 lg:pt-14 pb-12">
        <div className="grid lg:grid-cols-[0.56fr_0.44fr] gap-8 lg:gap-12 items-start">
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              SELECTED WORK
            </div>
            <h1 className="mt-4 max-w-[760px] text-[32px] lg:text-[38px] font-bold leading-[1.06] tracking-[-0.025em] text-slate-800">
              Digital platforms shaped around real organisations and meaningful business needs.
            </h1>
            <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-slate-500">
              Our work spans architectural commerce, international education, transport, retail and
              financial technology. Every project begins with a clear business requirement and is
              designed around the people who will use it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#0F1F35] px-5 py-2.5 text-[11px] font-bold text-white">
                Live client platforms
              </span>
              <span className="rounded-full border border-slate-300 px-5 py-2.5 text-[11px] font-bold text-slate-600">
                Sterlings Studio product concepts
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 overflow-hidden rounded-[24px] border">
              <img
                src="/human_boardroom_main.webp"
                alt="Sterlings Studio project work"
                className="block w-full h-[250px] object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[20px] border">
              <img src="/prod-analytics.webp" alt="Analytics product" className="block w-full h-[150px] object-cover" />
            </div>
            <div className="rounded-[20px] bg-[#0F1F35] p-5 text-white">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">OUR LENS</div>
              <p className="mt-3 text-[15px] font-semibold leading-6">
                Different sectors. Same discipline: solve the right problem well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`overflow-hidden rounded-[26px] border border-slate-200 bg-white ${
                  index === 0 ? 'lg:col-span-2 grid lg:grid-cols-[0.54fr_0.46fr]' : ''
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} project`}
                  className={`block w-full object-cover ${
                    index === 0 ? 'h-[280px] lg:h-full min-h-[360px]' : 'h-[230px]'
                  }`}
                  loading="lazy"
                />
                <div className="p-6 lg:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                      {project.type} • {project.category}
                    </div>
                    <span className={`rounded-full px-3 py-1 text-[9px] font-bold ${
                      project.live
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {project.live ? 'LIVE PROJECT' : 'CONCEPT'}
                    </span>
                  </div>
                  <h2 className="mt-4 text-[22px] font-bold text-slate-800">{project.name}</h2>
                  <p className="mt-3 text-[13px] leading-6 text-slate-500">{project.description}</p>

                  {project.live ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex text-[11px] font-bold text-slate-800 underline underline-offset-4"
                    >
                      Visit live platform ↗
                    </a>
                  ) : (
                    <Link
                      to={project.route}
                      className="mt-5 inline-flex text-[11px] font-bold text-slate-800 underline underline-offset-4"
                    >
                      Discuss a similar build →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-6">
          <div className="rounded-[26px] bg-[#0F1F35] p-8 text-white">
            <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
              YOUR PROJECT
            </div>
            <h2 className="mt-4 text-[28px] font-bold">Bring us the business challenge.</h2>
            <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-slate-300">
              We will help shape the right digital solution around your users, operations and goals.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-[12px] font-bold text-[#0F1F35]"
            >
              Start a project →
            </Link>
          </div>

          <div className="overflow-hidden rounded-[26px] border">
            <img
              src="/human_pitch_boardroom.webp"
              alt="Project discussion"
              className="block w-full h-full min-h-[260px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
