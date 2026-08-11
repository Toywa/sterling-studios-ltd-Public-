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

export default function Home() {
  const services = [
    {
      number: '01',
      title: 'Professional Websites',
      description:
        'High-quality corporate and institutional websites designed around credibility, clarity, speed and meaningful business outcomes.',
      detail: 'Corporate • Schools • Government • NGOs',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Web Applications',
      description:
        'Custom platforms that replace manual processes, connect teams and turn complex workflows into usable software.',
      detail: 'Portals • Dashboards • Marketplaces • Automation',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Android & iOS Apps',
      description:
        'Purpose-built mobile products for customers, teams and organisations, designed around how people actually use them.',
      detail: 'Android • iOS • Cross-platform',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Political Platforms',
      description:
        'Professional campaign and leadership platforms supporting communication, supporters, contributions, merchandise and mobilisation.',
      detail: 'Campaigns • Donations • Merchandise • Supporters',
      accent: COLORS.orange,
    },
  ]

  const liveProjects = [
    {
      number: '01',
      name: 'Akashi Designs',
      category: 'ARCHITECTURE • DIGITAL COMMERCE',
      description:
        'A specialist architectural marketplace built around house-plan discovery, digital purchasing and secure product delivery.',
      image: '/akashi-work-banner.png',
      website: 'https://akashidesigns.com',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      name: 'The Alkebula School',
      category: 'EDUCATION TECHNOLOGY',
      description:
        'A connected education platform supporting parents, tutors, international curricula, bookings and academic workflows.',
      image: '/alkebula-school-work.png',
      website: 'https://alkebulaschool.com',
      accent: COLORS.violet,
    },
    {
      number: '03',
      name: 'Sunscape Car Rentals',
      category: 'TRANSPORT • BOOKINGS',
      description:
        'A booking-led vehicle rental experience designed to move customers from vehicle discovery towards enquiry quickly and confidently.',
      image: '/human_cafe_laptop.webp',
      website: 'https://sunscape.co.ke',
      accent: COLORS.orange,
    },
  ]

  const process = [
    {
      number: '01',
      title: 'Discover',
      description:
        'Understand the business, audience, problem, priorities and commercial objective.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Define',
      description:
        'Shape the scope, user journeys, functionality, content and technical architecture.',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Design & Build',
      description:
        'Turn the strategy into a polished digital product through reviewable stages.',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Launch & Improve',
      description:
        'Test, deploy, hand over and continue improving where the business requires it.',
      accent: COLORS.orange,
    },
  ]

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <SEO
        title="Sterlings Studio | Web Design, Web Apps & Mobile Development Nairobi"
        description="Sterlings Studio builds premium websites, custom web applications, mobile apps and digital platforms for businesses, schools, institutions and organisations in Kenya and beyond."
        canonical="https://sterlingsstudio.com"
        ogImage="/sterling-share-preview.png"
      />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full opacity-[0.055] blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-4 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-10 lg:pt-12 pb-10">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-8 lg:gap-10 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.17em] text-slate-500">
                  NAIROBI • BUILDING FOR AFRICA & THE WORLD
                </span>
              </div>

              <h1 className="mt-6 max-w-[670px] text-[38px] sm:text-[44px] lg:text-[50px] xl:text-[54px] font-bold leading-[0.99] tracking-[-0.038em] text-[#16243A]">
                Digital products
                <br />
                built for serious
                <br />
                business.
              </h1>

              <p className="mt-5 max-w-[610px] text-[14px] sm:text-[15px] leading-7 text-slate-500">
                Sterlings Studio designs professional websites, custom web
                applications and mobile products for organisations that expect
                technology to improve how business actually works.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#172C49]"
                >
                  Start a project →
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Explore our work
                </Link>
              </div>

              {/* HERO PROOF STRIP */}
              <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC]">
                <div className="relative p-4">
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: COLORS.cyan }}
                  />

                  <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                    BASED IN
                  </div>

                  <div className="mt-1.5 text-[11px] font-bold text-[#16243A]">
                    Nairobi
                  </div>
                </div>

                <div className="relative border-l border-slate-200 p-4">
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: COLORS.violet }}
                  />

                  <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                    BUILT FOR
                  </div>

                  <div className="mt-1.5 text-[11px] font-bold text-[#16243A]">
                    Real operations
                  </div>
                </div>

                <div className="relative border-l border-slate-200 p-4">
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: COLORS.orange }}
                  />

                  <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                    SERVING
                  </div>

                  <div className="mt-1.5 text-[11px] font-bold text-[#16243A]">
                    Global clients
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[28px] bg-[#F4F7FA] p-3">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src="/human_boardroom_main.webp"
                    alt="Sterlings Studio digital strategy and business collaboration"
                    className="block w-full h-auto"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#091628]/95 via-[#091628]/38 to-transparent px-6 pt-20 pb-6">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <div className="text-[9px] font-bold tracking-[0.17em] text-white/65">
                          OUR APPROACH
                        </div>

                        <p className="mt-2 max-w-[460px] text-[17px] font-semibold leading-6 text-white">
                          Strategy first. Technology second.
                        </p>
                      </div>

                      <div className="hidden sm:flex gap-1.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: COLORS.cyan }}
                        />
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: COLORS.violet }}
                        />
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: COLORS.magenta }}
                        />
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: COLORS.orange }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PERFORMANCE PANEL */}
              <div className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-5">
                <div
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-[8px] font-bold tracking-[0.18em] text-slate-400">
                      PERFORMANCE MATTERS
                    </div>

                    <p className="mt-2 text-[15px] sm:text-[17px] font-bold text-[#16243A]">
                      Websites that load in{' '}
                      <span
                        style={{
                          background:
                            'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        0.5s.
                      </span>{' '}
                      Apps that scale. Built to last.
                    </p>
                  </div>

                  <Link
                    to="/work"
                    className="shrink-0 text-[10px] font-bold text-[#16243A] underline underline-offset-4"
                  >
                    See the work →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BRAND PHILOSOPHY
      ========================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-12">
        <div className="overflow-hidden rounded-[30px] bg-[#0F1F35] text-white">
          <div className="grid lg:grid-cols-[0.4fr_0.6fr]">
            <div className="relative p-7 sm:p-8 lg:p-10">
              <div
                className="absolute left-0 top-0 h-full w-[5px]"
                style={{
                  background:
                    'linear-gradient(180deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                OUR POINT OF VIEW
              </div>

              <blockquote className="mt-4 text-[24px] lg:text-[29px] font-bold leading-[1.15] tracking-[-0.02em]">
                “Technology earns its place when it makes the business clearer,
                faster and easier to run.”
              </blockquote>
            </div>

            <div className="border-t lg:border-l lg:border-t-0 border-white/10 p-7 sm:p-8 lg:p-10">
              <p className="max-w-[720px] text-[16px] leading-8 text-slate-200">
                The best digital products do not sit at the edge of an
                organisation. They help customers buy, teams work, information
                move and businesses operate better.
              </p>

              <p className="mt-4 max-w-[720px] text-[13px] leading-7 text-slate-400">
                That is why we approach websites and applications as business
                systems rather than collections of pages. Design, content,
                technology and user experience must work together.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-flex text-[11px] font-bold text-white underline underline-offset-4"
              >
                Discover our philosophy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.7fr_0.3fr] gap-8 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  WHAT WE BUILD
                </div>
              </div>

              <h2 className="mt-4 max-w-[820px] text-[28px] sm:text-[31px] lg:text-[35px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Technology shaped around how your organisation actually works.
              </h2>
            </div>

            <div className="lg:text-right">
              <Link
                to="/services"
                className="inline-flex text-[11px] font-bold text-[#16243A] underline underline-offset-4"
              >
                Explore all services →
              </Link>
            </div>
          </div>

          <div className="mt-9 grid md:grid-cols-2 gap-5">
            {services.map((service) => (
              <Link
                key={service.number}
                to="/services"
                className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 lg:p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,31,53,0.08)]"
              >
                <div
                  className="absolute inset-y-0 left-0 w-[4px]"
                  style={{ background: service.accent }}
                />

                <div className="flex items-center justify-between gap-5">
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: service.accent }}
                  >
                    {service.number}
                  </span>

                  <span
                    className="text-[17px] transition-transform group-hover:translate-x-1"
                    style={{ color: service.accent }}
                  >
                    →
                  </span>
                </div>

                <h3 className="mt-7 text-[20px] font-bold tracking-[-0.015em] text-[#16243A]">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-[58ch] text-[13px] leading-6 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-4 text-[9px] font-bold tracking-[0.12em] text-slate-400">
                  {service.detail}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SELECTED LIVE WORK
      ========================================================== */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.64fr_0.36fr] gap-8 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.violet }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  SELECTED LIVE WORK
                </div>
              </div>

              <h2 className="mt-4 max-w-[760px] text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Proof is more persuasive than promises.
              </h2>
            </div>

            <div>
              <p className="max-w-[500px] lg:ml-auto text-[13px] leading-7 text-slate-500">
                Different industries. Different users. Different commercial
                requirements. Each platform begins with a real organisational
                need.
              </p>
            </div>
          </div>

          <div className="mt-9 grid lg:grid-cols-3 gap-5">
            {liveProjects.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,31,53,0.09)]"
              >
                <div className="relative overflow-hidden bg-[#F3F6F9]">
                  <img
                    src={project.image}
                    alt={`${project.name} live digital platform`}
                    className="block w-full aspect-[16/10] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div
                    className="absolute left-0 top-0 h-[4px] w-full"
                    style={{ background: project.accent }}
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#0F1F35]/90 px-3 py-1.5 text-[8px] font-bold tracking-[0.13em] text-white backdrop-blur">
                    LIVE PLATFORM
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-[8px] font-bold tracking-[0.14em] text-slate-400">
                      {project.category}
                    </div>

                    <div
                      className="text-[10px] font-bold"
                      style={{ color: project.accent }}
                    >
                      {project.number}
                    </div>
                  </div>

                  <h3 className="mt-4 text-[19px] font-bold text-[#16243A]">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-slate-500">
                    {project.description}
                  </p>

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold text-[#16243A]"
                  >
                    Visit live platform
                    <span style={{ color: project.accent }}>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7 text-right">
            <Link
              to="/work"
              className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-[11px] font-bold text-[#16243A] hover:bg-slate-50"
            >
              Explore the complete portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY STERLINGS
      ========================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.48fr_0.52fr] gap-7 lg:gap-9 items-stretch">
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[28px] bg-slate-100">
              <img
                src="/human_female_founder.webp"
                alt="Professional business and digital strategy"
                className="block w-full h-full min-h-[470px] object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F1F35]/95 via-[#0F1F35]/45 to-transparent px-7 pt-24 pb-7">
                <div className="text-[9px] font-bold tracking-[0.18em] text-white/65">
                  BUILT AROUND THE BUSINESS
                </div>

                <blockquote className="mt-2 max-w-[480px] text-[20px] sm:text-[22px] font-semibold leading-7 text-white">
                  “A beautiful interface is useful only when the business behind
                  it works better.”
                </blockquote>
              </div>
            </div>

            {/* CONTENT */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 sm:p-8 lg:p-9">
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.magenta }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  WHY STERLINGS STUDIO
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Small enough to care.
                <br />
                Serious enough to deliver.
              </h2>

              <p className="mt-5 text-[13px] leading-7 text-slate-500">
                Clients should not have to translate their business into
                developer language. Our role is to understand what needs to
                happen, shape the right solution and communicate clearly
                throughout the build.
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  {
                    title: 'Business before decoration',
                    text:
                      'Objectives and user behaviour come before visual treatments or technical choices.',
                    color: COLORS.cyan,
                  },
                  {
                    title: 'Custom where it matters',
                    text:
                      'The product follows your workflow instead of forcing the organisation into a generic template.',
                    color: COLORS.violet,
                  },
                  {
                    title: 'Built for ownership',
                    text:
                      'Maintainable foundations, sensible architecture and practical handover matter after launch.',
                    color: COLORS.orange,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-[#F8FAFC] px-5 py-4"
                  >
                    <div
                      className="absolute inset-y-0 left-0 w-[3px]"
                      style={{ background: item.color }}
                    />

                    <h3 className="text-[13px] font-bold text-[#16243A]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[11px] font-bold text-white"
              >
                Meet Sterlings Studio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[0.38fr_0.62fr] gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.orange }}
              />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                FROM IDEA TO LAUNCH
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              A clear process.
              <br />
              No mystery.
            </h2>

            <p className="mt-4 max-w-[460px] text-[13px] leading-7 text-slate-500">
              Good digital work comes from clear decisions, disciplined
              execution and communication that keeps everyone aligned.
            </p>

            <blockquote className="mt-7 border-l-[3px] border-[#8B5CF6] pl-5 text-[17px] font-semibold leading-7 text-[#16243A]">
              “The client should always know what is being built, why it matters
              and what comes next.”
            </blockquote>

            <Link
              to="/process"
              className="mt-7 inline-flex rounded-full border border-slate-200 px-6 py-3 text-[11px] font-bold text-[#16243A] hover:bg-slate-50"
            >
              Explore the complete process →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-[#F8FAFC] p-6"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: step.accent }}
                />

                <div
                  className="text-[10px] font-bold"
                  style={{ color: step.accent }}
                >
                  {step.number}
                </div>

                <h3 className="mt-4 text-[17px] font-bold text-[#16243A]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[11px] leading-6 text-slate-500">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUESTIONS / FAQ TEASER
      ========================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[0.72fr_0.28fr] gap-7 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  BEFORE WE START
                </div>
              </div>

              <h2 className="mt-3 text-[24px] lg:text-[28px] font-bold tracking-[-0.02em] text-[#16243A]">
                Questions about cost, timelines, ownership or support?
              </h2>

              <p className="mt-3 max-w-[720px] text-[13px] leading-6 text-slate-500">
                We have answered the practical questions organisations usually
                ask before beginning a website, application or custom
                digital-platform project.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/faq"
                className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-6 py-3 text-[11px] font-bold text-[#16243A] hover:bg-slate-50"
              >
                Read the FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0F1F35] text-white">
        <div
          aria-hidden="true"
          className="absolute -left-24 -top-32 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-20 -bottom-40 h-96 w-96 rounded-full opacity-10 blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
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

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  YOUR NEXT DIGITAL PRODUCT
                </div>
              </div>

              <h2 className="mt-4 max-w-[850px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.02] tracking-[-0.03em]">
                Bring us the business problem.
                <br />
                We’ll help build the solution.
              </h2>

              <p className="mt-5 max-w-[680px] text-[13px] leading-7 text-slate-300">
                Whether you need a professional company website, operational
                platform, mobile application or something that does not fit
                neatly into a category, start with the conversation.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[12px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Start a project →
              </Link>

              <div className="mt-4 text-[10px] text-slate-400">
                Nairobi • Kenya • International
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}