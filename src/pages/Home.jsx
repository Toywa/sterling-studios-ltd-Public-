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
  const capabilities = [
    {
      number: '01',
      title: 'High-performance websites',
      text:
        'Professional digital experiences built for credibility, speed, search visibility and conversion.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Custom digital platforms',
      text:
        'Portals, marketplaces, dashboards and operational systems shaped around real business workflows.',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Mobile products',
      text:
        'Android and iOS experiences designed around how customers and teams actually use their phones.',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Commerce & integrations',
      text:
        'Digital commerce, M-Pesa, payment journeys, bookings and connected business services.',
      accent: COLORS.orange,
    },
  ]

  const work = [
    {
      number: '01',
      name: 'Akashi Designs',
      sector: 'ARCHITECTURE • DIGITAL COMMERCE',
      image: '/akashi-work-banner.png',
      description:
        'A global architectural marketplace built around premium house-plan discovery, purchasing and secure digital delivery.',
      website: 'https://akashidesigns.com',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      name: 'The Alkebula School',
      sector: 'EDUCATION TECHNOLOGY',
      image: '/alkebula-school-work.png',
      description:
        'A connected international learning platform bringing together parents, educators, bookings and academic services.',
      website: 'https://alkebulaschool.com',
      accent: COLORS.violet,
    },
    {
      number: '03',
      name: 'Sunscape Car Rentals',
      sector: 'TRANSPORT • TRAVEL',
      image: '/human_cafe_laptop.webp',
      description:
        'A booking-led digital experience for vehicle hire, airport transfers and professional transport services.',
      website: 'https://sunscape.co.ke',
      accent: COLORS.orange,
    },
  ]

  const process = [
    {
      number: '01',
      title: 'Understand',
      text:
        'We begin with the business, users, challenge and outcome.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Shape',
      text:
        'We define the right experience, architecture and product scope.',
      accent: COLORS.violet,
    },
    {
      number: '03',
      title: 'Build',
      text:
        'We design, develop, test and refine through visible stages.',
      accent: COLORS.magenta,
    },
    {
      number: '04',
      title: 'Launch',
      text:
        'We deploy, hand over and support what comes next.',
      accent: COLORS.orange,
    },
  ]

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <SEO
        title="Sterlings Studio | Web Design, Web Apps & Mobile Development Nairobi"
        description="Sterlings Studio builds fast professional websites, custom web applications, mobile apps and scalable digital products for organisations in Kenya and beyond."
        canonical="https://sterlingsstudio.com"
        ogImage="/sterling-share-preview.png"
      />

      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full opacity-[0.07] blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-90px] top-0 h-80 w-80 rounded-full opacity-[0.07] blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-9 lg:py-11">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <span className="text-[9px] font-bold tracking-[0.17em] text-slate-500">
                  NAIROBI • AFRICA • GLOBAL
                </span>
              </div>

              <h1 className="mt-6 max-w-[710px] text-[39px] sm:text-[46px] lg:text-[52px] xl:text-[58px] font-bold leading-[0.98] tracking-[-0.04em] text-[#16243A]">
                Websites that load in{' '}
                <span
                  style={{
                    background:
                      'linear-gradient(90deg,#FF8A3D,#D946EF,#8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  0.5s.
                </span>
                <br />

                Apps that{' '}
                <span
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#3478F6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  scale.
                </span>
                <br />

                Built to{' '}
                <span
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#FF8A3D,#D946EF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  last.
                </span>
              </h1>

              <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-slate-500">
                We build fast, secure and scalable digital products for
                organisations that want technology to feel effortless,
                credible and ready for growth.
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
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  View our work
                </Link>
              </div>

              {/* SMALL PROOF STRIP */}
              <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC]">
                <div className="relative p-4">
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: COLORS.cyan }}
                  />

                  <div className="text-[8px] font-bold tracking-[0.14em] text-slate-400">
                    PERFORMANCE
                  </div>

                  <div className="mt-1.5 text-[11px] font-bold text-[#16243A]">
                    Built fast
                  </div>
                </div>

                <div className="relative border-l border-slate-200 p-4">
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: COLORS.violet }}
                  />

                  <div className="text-[8px] font-bold tracking-[0.14em] text-slate-400">
                    FOUNDATION
                  </div>

                  <div className="mt-1.5 text-[11px] font-bold text-[#16243A]">
                    Secure by design
                  </div>
                </div>

                <div className="relative border-l border-slate-200 p-4">
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: COLORS.orange }}
                  />

                  <div className="text-[8px] font-bold tracking-[0.14em] text-slate-400">
                    AMBITION
                  </div>

                  <div className="mt-1.5 text-[11px] font-bold text-[#16243A]">
                    Built to scale
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="relative overflow-hidden rounded-[30px] bg-[#F3F6FA] p-3">
                <div className="relative overflow-hidden rounded-[23px]">
                  <img
                    src="/human_boardroom_main.webp"
                    alt="Sterlings Studio digital strategy and business technology"
                    className="block w-full h-[440px] lg:h-[500px] object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081526]/95 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <div className="text-[9px] font-bold tracking-[0.18em] text-white/65">
                          DIGITAL PRODUCTS FOR REAL BUSINESS
                        </div>

                        <p className="mt-2 max-w-[490px] text-[21px] sm:text-[23px] font-semibold leading-7 text-white">
                          Ideas become useful when technology makes them easier
                          to experience, operate and grow.
                        </p>
                      </div>

                      <div className="hidden sm:flex gap-1.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: COLORS.cyan }}
                        />
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: COLORS.blue }}
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
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          BRAND STATEMENT
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-10">
        <div className="relative overflow-hidden rounded-[29px] bg-[#0F1F35] text-white">
          <div
            className="absolute left-0 top-0 h-full w-[5px]"
            style={{
              background:
                'linear-gradient(180deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
            }}
          />

          <div className="grid lg:grid-cols-[0.47fr_0.53fr]">
            <div className="p-7 lg:p-9">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                WHAT WE BELIEVE
              </div>

              <blockquote className="mt-4 text-[23px] sm:text-[26px] lg:text-[29px] font-semibold leading-[1.15] tracking-[-0.02em]">
                “A digital product should make the organisation behind it feel
                stronger.”
              </blockquote>
            </div>

            <div className="border-t lg:border-l lg:border-t-0 border-white/10 p-7 lg:p-9 flex flex-col justify-center">
              <p className="max-w-[680px] text-[13px] leading-7 text-slate-300">
                Better credibility. Better customer journeys. Better access to
                information. Better operational flow. Technology has value when
                it improves something that matters.
              </p>

              <Link
                to="/about"
                className="mt-5 inline-flex self-start text-[10px] font-bold text-white underline underline-offset-4"
              >
                Meet Sterlings Studio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CAPABILITIES PREVIEW
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
          <div className="grid lg:grid-cols-[0.68fr_0.32fr] gap-6 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  WHAT WE CAN BUILD
                </div>
              </div>

              <h2 className="mt-3 max-w-[780px] text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                From the first customer click to the systems running behind the
                scenes.
              </h2>
            </div>

            <div className="lg:text-right">
              <Link
                to="/services"
                className="inline-flex text-[11px] font-bold text-[#16243A] underline underline-offset-4"
              >
                Explore services →
              </Link>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{ background: item.accent }}
                />

                <div
                  className="text-[9px] font-bold"
                  style={{ color: item.accent }}
                >
                  {item.number}
                </div>

                <h3 className="mt-5 text-[17px] font-bold leading-6 text-[#16243A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[11px] leading-5 text-slate-500">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          NAIROBI / GLOBAL POSITION
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
        <div className="grid lg:grid-cols-[0.54fr_0.46fr] gap-5 items-stretch">
          <div className="relative overflow-hidden rounded-[28px]">
            <img
              src="/human_female_founder.webp"
              alt="Business leader in Nairobi"
              className="block w-full h-full min-h-[460px] object-cover object-center"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F1F35]/95 via-[#0F1F35]/35 to-transparent px-7 pt-24 pb-7">
              <div className="text-[9px] font-bold tracking-[0.18em] text-white/65">
                BUILT FROM NAIROBI
              </div>

              <blockquote className="mt-2 max-w-[500px] text-[21px] font-semibold leading-7 text-white">
                “African-built technology does not need to think small.”
              </blockquote>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-7 lg:p-9 flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.magenta }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                NAIROBI • AFRICA • BEYOND
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Local understanding.
              <br />
              Global standards.
            </h2>

            <p className="mt-5 text-[13px] leading-7 text-slate-500">
              We understand M-Pesa, mobile-first audiences and the realities of
              building digital products for African markets.
            </p>

            <p className="mt-3 text-[13px] leading-7 text-slate-500">
              We also build for organisations serving international customers,
              remote teams and audiences far beyond Kenya.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              <div className="rounded-[17px] border border-slate-200 bg-white p-4">
                <div className="text-[8px] font-bold tracking-[0.14em] text-slate-400">
                  AFRICAN CONTEXT
                </div>

                <div className="mt-2 text-[12px] font-bold text-[#16243A]">
                  Payments. Mobile. Connectivity.
                </div>
              </div>

              <div className="rounded-[17px] border border-slate-200 bg-white p-4">
                <div className="text-[8px] font-bold tracking-[0.14em] text-slate-400">
                  GLOBAL DELIVERY
                </div>

                <div className="mt-2 text-[12px] font-bold text-[#16243A]">
                  Performance. Quality. Scale.
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="mt-6 inline-flex self-start rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
            >
              About the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          SELECTED WORK
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
          <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-6 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.violet }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  SELECTED WORK
                </div>
              </div>

              <h2 className="mt-3 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Different businesses.
                <br />
                Different problems.
              </h2>
            </div>

            <p className="max-w-[470px] lg:ml-auto text-[12px] leading-6 text-slate-500">
              The common thread is not an industry or visual style. It is
              building the right product around the organisation using it.
            </p>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-4">
            {work.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,31,53,0.08)]"
              >
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="block w-full aspect-[16/10] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div
                    className="absolute inset-x-0 top-0 h-[4px]"
                    style={{ background: project.accent }}
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#0F1F35]/90 px-3 py-1 text-[8px] font-bold text-white">
                    LIVE
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between gap-4">
                    <div className="text-[8px] font-bold tracking-[0.13em] text-slate-400">
                      {project.sector}
                    </div>

                    <span
                      className="text-[9px] font-bold"
                      style={{ color: project.accent }}
                    >
                      {project.number}
                    </span>
                  </div>

                  <h3 className="mt-3 text-[18px] font-bold text-[#16243A]">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    {project.description}
                  </p>

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-[#16243A]"
                  >
                    Visit live platform
                    <span style={{ color: project.accent }}>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-[20px] border border-slate-200 bg-white px-5 py-4">
            <div>
              <div className="text-[8px] font-bold tracking-[0.14em] text-slate-400">
                MORE THAN THREE PROJECTS
              </div>

              <p className="mt-1 text-[11px] text-slate-500">
                Explore live client platforms and Sterlings Studio product
                concepts.
              </p>
            </div>

            <Link
              to="/work"
              className="text-[10px] font-bold text-[#16243A] underline underline-offset-4"
            >
              View the complete portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROCESS
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
        <div className="grid lg:grid-cols-[0.37fr_0.63fr] gap-8 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.orange }}
              />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                HOW IDEAS BECOME PRODUCTS
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Clarity before complexity.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              You should always understand where the project is, why a decision
              is being made and what happens next.
            </p>

            <blockquote className="mt-6 border-l-[3px] border-[#8B5CF6] pl-4 text-[16px] font-semibold leading-7 text-[#16243A]">
              “Good development begins long before the first line of code.”
            </blockquote>

            <Link
              to="/process"
              className="mt-6 inline-flex rounded-full border border-slate-200 px-5 py-2.5 text-[10px] font-bold text-[#16243A]"
            >
              See our process →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {process.map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-5"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: step.accent }}
                />

                <div
                  className="text-[9px] font-bold"
                  style={{ color: step.accent }}
                >
                  {step.number}
                </div>

                <h3 className="mt-3 text-[15px] font-bold text-[#16243A]">
                  {step.title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-slate-500">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CLOSING BRAND PROMISE
      ====================================================== */}
      <section className="border-t border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-9">
          <div className="grid lg:grid-cols-[0.7fr_0.3fr] gap-7 items-center rounded-[25px] border border-slate-200 bg-white p-6 lg:p-8">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#8B5CF6,#D946EF,#FF8A3D)',
                  }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  THE STERLINGS STANDARD
                </div>
              </div>

              <blockquote className="mt-3 max-w-[800px] text-[21px] lg:text-[25px] font-semibold leading-[1.2] text-[#16243A]">
                “Build it beautifully. Make it useful. Keep it fast. Leave it
                ready for what comes next.”
              </blockquote>
            </div>

            <div className="lg:text-right">
              <Link
                to="/testimonials"
                className="inline-flex text-[10px] font-bold text-[#16243A] underline underline-offset-4"
              >
                Our standards & client confidence →
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
                  LET’S BUILD SOMETHING USEFUL
                </div>
              </div>

              <h2 className="mt-4 max-w-[830px] text-[31px] sm:text-[35px] lg:text-[40px] font-bold leading-[1.03] tracking-[-0.03em]">
                Your business already has the idea.
                <br />
                Let’s give it the right digital form.
              </h2>

              <p className="mt-5 max-w-[670px] text-[12px] leading-6 text-slate-300">
                Tell us what you want customers, teams or technology to do
                better. We will help define the product that gets you there.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Start a project →
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