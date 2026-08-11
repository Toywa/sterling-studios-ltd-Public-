import { Link } from 'react-router-dom'

const ACCENTS = {
  cyan: '#18B8F2',
  blue: '#3478F6',
  violet: '#8B5CF6',
  magenta: '#D946EF',
  orange: '#FF8A3D',
  navy: '#0F1F35',
}

export default function Testimonials() {
  const clientPlatforms = [
    {
      number: '01',
      name: 'Akashi Designs',
      sector: 'Architecture & Digital Commerce',
      description:
        'A global architectural marketplace supporting plan discovery, secure checkout, automated invoicing and protected digital delivery.',
      value:
        'Sterlings Studio translated a specialist architectural business into a structured digital-commerce platform capable of serving customers across different markets.',
      website: 'https://akashidesigns.com',
      accent: ACCENTS.cyan,
    },
    {
      number: '02',
      name: 'The Alkebula School',
      sector: 'Education Technology',
      description:
        'A connected education platform bringing together parents, international-curriculum tutors and academic administration.',
      value:
        'The project demonstrates our ability to design complex multi-role systems around real educational workflows, bookings, profiles and parent support.',
      website: 'https://alkebulaschool.com',
      accent: ACCENTS.violet,
    },
    {
      number: '03',
      name: 'Sunscape Car Rentals',
      sector: 'Transport & Travel',
      description:
        'A booking-led fleet website for airport transfers, corporate transport, family travel and vehicle hire across Kenya.',
      value:
        'The website gives customers a clearer path from vehicle discovery to quotation and booking enquiry while presenting the fleet professionally.',
      website: 'https://sunscape.co.ke',
      accent: ACCENTS.orange,
    },
  ]

  const experienceStandards = [
    {
      number: '01',
      title: 'Clear communication',
      text:
        'Clients receive practical updates, defined approval points and clarity about what is required at each project stage.',
      accent: ACCENTS.cyan,
    },
    {
      number: '02',
      title: 'Business-focused thinking',
      text:
        'Recommendations are based on organisational objectives, customers and operating requirements - not design trends alone.',
      accent: ACCENTS.blue,
    },
    {
      number: '03',
      title: 'Professional execution',
      text:
        'Every project is developed with attention to usability, responsive presentation, security and long-term maintainability.',
      accent: ACCENTS.violet,
    },
    {
      number: '04',
      title: 'Continued partnership',
      text:
        'Support can continue after launch through maintenance, improvements, analytics and future product development.',
      accent: ACCENTS.magenta,
    },
  ]

  const verificationItems = [
    'Client or authorised representative',
    'Business or organisation',
    'Project delivered',
    'Specific experience or outcome',
    'Permission to publish',
  ]

  const reasons = [
    {
      title: 'Strategic understanding',
      text:
        'We examine the business objective before recommending the digital solution.',
    },
    {
      title: 'Custom development',
      text:
        'Important products are structured around their actual users, workflows and requirements.',
    },
    {
      title: 'Commercial clarity',
      text:
        'Scope, responsibilities, milestones and costs are discussed before development begins.',
    },
    {
      title: 'Long-term thinking',
      text:
        'Products are designed to remain maintainable and capable of future improvement.',
    },
  ]

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-8 h-64 w-64 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: ACCENTS.violet }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[42%] top-36 h-48 w-48 rounded-full opacity-[0.05] blur-3xl"
          style={{ background: ACCENTS.cyan }}
        />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-10 lg:pt-12 pb-12">
          <div className="grid lg:grid-cols-[1.04fr_0.96fr] gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, #18B8F2, #8B5CF6, #D946EF)',
                  }}
                />

                <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400">
                  CLIENT CONFIDENCE
                </div>
              </div>

              <h1 className="mt-5 max-w-[730px] text-[32px] sm:text-[36px] lg:text-[40px] xl:text-[42px] font-bold leading-[1.04] tracking-[-0.03em] text-[#16243A]">
                Trust is earned through the quality of the work and the
                experience behind it.
              </h1>

              <p className="mt-6 max-w-[690px] text-[14px] leading-7 text-slate-500">
                Sterlings Studio works closely with businesses and
                organisations to turn complex requirements into clear,
                dependable digital products.
              </p>

              <p className="mt-3 max-w-[690px] text-[14px] leading-7 text-slate-500">
                Rather than publish exaggerated promises, we invite prospective
                clients to examine the platforms we have built, the problems
                they solve and the standards that guide every engagement.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-6 py-3 text-[11px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#172C49]"
                >
                  View selected work
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-[11px] font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Discuss your project →
                </Link>
              </div>

              {/* PROOF STRIP */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 overflow-hidden rounded-[22px] border border-slate-200 bg-white">
                <div className="relative p-5">
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: ACCENTS.cyan }}
                  />

                  <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                    REAL WORK
                  </div>

                  <div className="mt-2 text-[13px] font-bold text-[#16243A]">
                    Live platforms
                  </div>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                    Products you can visit and examine.
                  </p>
                </div>

                <div className="relative border-t sm:border-l sm:border-t-0 border-slate-200 p-5">
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: ACCENTS.violet }}
                  />

                  <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                    CLEAR PROCESS
                  </div>

                  <div className="mt-2 text-[13px] font-bold text-[#16243A]">
                    Visible progress
                  </div>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                    Defined stages, approvals and decisions.
                  </p>
                </div>

                <div className="relative border-t sm:border-l sm:border-t-0 border-slate-200 p-5">
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: ACCENTS.orange }}
                  />

                  <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                    OWNERSHIP
                  </div>

                  <div className="mt-2 text-[13px] font-bold text-[#16243A]">
                    Practical handover
                  </div>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                    Built for use beyond launch day.
                  </p>
                </div>
              </div>

              {/* NEW FILLER BLOCK FOR THE BLANK AREA */}
              <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-[#F8FAFC]">
                <div
                  className="h-[4px]"
                  style={{
                    background:
                      'linear-gradient(90deg, #18B8F2, #3478F6, #8B5CF6, #D946EF, #FF8A3D)',
                  }}
                />

                <div className="p-6 lg:p-7">
                  <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                    A SIMPLE TEST
                  </div>

                  <h3 className="mt-3 max-w-[560px] text-[22px] lg:text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-[#16243A]">
                    Before choosing a studio, ask one question:
                    <span className="block mt-1 text-slate-500 font-medium">
                      can they show work that proves their claims?
                    </span>
                  </h3>

                  <p className="mt-4 max-w-[600px] text-[13px] leading-7 text-slate-500">
                    We believe confidence should come from what you can review,
                    compare and verify - not from polished language alone.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      to="/work"
                      className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-5 py-2.5 text-[11px] font-bold text-white transition hover:bg-[#172C49]"
                    >
                      Explore live work →
                    </Link>

                    <Link
                      to="/process"
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[11px] font-bold text-slate-700 transition hover:bg-slate-50"
                    >
                      See how we work
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[28px] bg-[#F4F7FA] p-3">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src="/human_founder_smile.webp"
                    alt="Business leader representing client confidence and professional partnership"
                    className="block w-full h-auto"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1728]/95 via-[#0B1728]/45 to-transparent px-6 pt-24 pb-6">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <div className="text-[9px] font-bold tracking-[0.18em] text-white/65">
                          OUR WORKING PRINCIPLE
                        </div>

                        <p className="mt-2 text-[19px] font-semibold text-white">
                          Proof before promises.
                        </p>
                      </div>

                      <div className="flex gap-1.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: ACCENTS.cyan }}
                        />
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: ACCENTS.violet }}
                        />
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: ACCENTS.magenta }}
                        />
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: ACCENTS.orange }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6">
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-full w-[4px]"
                  style={{
                    background:
                      'linear-gradient(180deg, #18B8F2, #8B5CF6, #D946EF, #FF8A3D)',
                  }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  OUR STANDARD
                </div>

                <p className="mt-3 max-w-[540px] text-[17px] font-bold leading-7 text-[#16243A]">
                  Every public claim should be supported by real work, genuine
                  feedback or verifiable project evidence.
                </p>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-t border-slate-200 pt-4">
                  <p className="max-w-[450px] text-[10px] leading-5 text-slate-500">
                    Client quotations are published only with permission.
                    Performance figures are displayed only where reliable data
                    is available.
                  </p>

                  <Link
                    to="/work"
                    className="shrink-0 text-[10px] font-bold text-[#16243A] underline underline-offset-4"
                  >
                    Examine the work →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CLIENT PLATFORMS */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.54fr_0.46fr] gap-8 lg:gap-14 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: ACCENTS.cyan }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  LIVE CLIENT PLATFORMS
                </div>
              </div>

              <h2 className="mt-4 max-w-[650px] text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.02em] text-[#16243A]">
                The strongest testimonial is a product people can see and use.
              </h2>
            </div>

            <p className="max-w-[600px] lg:ml-auto text-[13px] leading-7 text-slate-500">
              These live projects demonstrate the breadth of organisations,
              customer journeys and operating requirements Sterlings Studio can
              support.
            </p>
          </div>

          <div className="mt-9 grid lg:grid-cols-3 gap-5">
            {clientPlatforms.map((project) => (
              <article
                key={project.name}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 lg:p-7 flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,31,53,0.08)]"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{ background: project.accent }}
                />

                <div className="flex items-center justify-between gap-4">
                  <div className="text-[9px] font-bold tracking-[0.15em] text-slate-400">
                    {project.sector}
                  </div>

                  <div
                    className="text-[11px] font-bold"
                    style={{ color: project.accent }}
                  >
                    {project.number}
                  </div>
                </div>

                <h3 className="mt-5 text-[18px] font-bold text-[#16243A]">
                  {project.name}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="text-[9px] font-bold tracking-[0.15em] text-slate-400">
                    PROJECT VALUE
                  </div>

                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    {project.value}
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] font-bold text-[#16243A]"
                  >
                    Visit live platform
                    <span style={{ color: project.accent }}>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT EXPERIENCE */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="overflow-hidden rounded-[30px] bg-[#0F1F35] text-white">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            <div className="relative p-7 sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-[5px]"
                style={{
                  background:
                    'linear-gradient(180deg, #18B8F2, #3478F6, #8B5CF6, #D946EF, #FF8A3D)',
                }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                THE CLIENT EXPERIENCE
              </div>

              <h2 className="mt-4 max-w-[470px] text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.02em]">
                What organisations should expect when working with us.
              </h2>

              <p className="mt-4 max-w-[470px] text-[13px] leading-7 text-slate-300">
                Strong project relationships are built through transparency,
                professional judgement and consistent delivery - not dramatic
                promises.
              </p>

              <Link
                to="/process"
                className="mt-6 inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[11px] font-bold text-white transition hover:bg-white/10"
              >
                See our process →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 border-t lg:border-l lg:border-t-0 border-white/10">
              {experienceStandards.map((item, index) => (
                <article
                  key={item.title}
                  className={`relative p-6 lg:p-7 ${
                    index === 0 || index === 1
                      ? 'border-b border-white/10'
                      : ''
                  } ${
                    index === 0 || index === 2
                      ? 'sm:border-r sm:border-white/10'
                      : ''
                  }`}
                >
                  <div
                    className="text-[10px] font-bold"
                    style={{ color: item.accent }}
                  >
                    {item.number}
                  </div>

                  <h3 className="mt-4 text-[16px] font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-6 text-slate-300">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL POLICY */}
      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.58fr_0.42fr] gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: ACCENTS.magenta }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  GENUINE CLIENT FEEDBACK
                </div>
              </div>

              <h2 className="mt-4 max-w-[700px] text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.02em] text-[#16243A]">
                Client testimonials should always be published with context and
                permission.
              </h2>

              <p className="mt-4 max-w-[65ch] text-[13px] leading-7 text-slate-500">
                Where a client authorises publication, feedback should identify
                the project, industry and aspect of the engagement being
                discussed. Anonymous or unverifiable praise should never be
                used to create artificial confidence.
              </p>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-[#F8FAFC]">
              <div
                className="h-[4px]"
                style={{
                  background:
                    'linear-gradient(90deg, #18B8F2, #3478F6, #8B5CF6, #D946EF, #FF8A3D)',
                }}
              />

              <div className="p-6">
                <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                  A VERIFIED TESTIMONIAL SHOULD INCLUDE
                </div>

                <div className="mt-5 grid gap-3">
                  {verificationItems.map((item, index) => {
                    const colours = [
                      ACCENTS.cyan,
                      ACCENTS.blue,
                      ACCENTS.violet,
                      ACCENTS.magenta,
                      ACCENTS.orange,
                    ]

                    return (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-[12px] text-slate-600"
                      >
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                          style={{ background: colours[index] }}
                        >
                          ✓
                        </span>

                        <span>{item}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STERLINGS */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-10 lg:gap-14">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: ACCENTS.orange }}
              />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                WHY STERLINGS STUDIO
              </div>
            </div>

            <h2 className="mt-4 max-w-[560px] text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.02em] text-[#16243A]">
              Serious digital work requires a partner who understands more than
              code.
            </h2>

            <p className="mt-4 max-w-[520px] text-[13px] leading-7 text-slate-500">
              Good technology begins with understanding the organisation,
              customers and commercial objective behind it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((item, index) => {
              const colours = [
                ACCENTS.cyan,
                ACCENTS.violet,
                ACCENTS.magenta,
                ACCENTS.orange,
              ]

              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[21px] border border-slate-200 bg-white p-6"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-[3px]"
                    style={{ background: colours[index] }}
                  />

                  <div
                    className="text-[9px] font-bold"
                    style={{ color: colours[index] }}
                  >
                    0{index + 1}
                  </div>

                  <h3 className="mt-3 text-[15px] font-bold text-[#16243A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-6 text-slate-500">
                    {item.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#0F1F35] text-white">
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-32 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ background: ACCENTS.cyan }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-16 -bottom-40 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: ACCENTS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.7fr_0.3fr] gap-8 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-10 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, #18B8F2, #8B5CF6, #D946EF, #FF8A3D)',
                  }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  BEGIN WITH A CONVERSATION
                </div>
              </div>

              <h2 className="mt-4 max-w-[760px] text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.02em]">
                Let your own project become the next example of thoughtful
                digital work.
              </h2>

              <p className="mt-4 max-w-[66ch] text-[13px] leading-7 text-slate-300">
                Tell us what your organisation needs to launch, improve or
                simplify. We will help define the right digital product and the
                most practical route towards it.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[12px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
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