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
      sector: 'ARCHITECTURE • DIGITAL COMMERCE',
      description:
        'A global architectural marketplace supporting plan discovery, secure purchasing, administration and protected digital delivery.',
      value:
        'The platform demonstrates how a specialist business can become a structured international digital-commerce product.',
      website: 'https://akashidesigns.com',
      accent: ACCENTS.cyan,
    },
    {
      number: '02',
      name: 'The Alkebula School',
      sector: 'EDUCATION TECHNOLOGY',
      description:
        'A connected international education platform bringing together parents, educators, profiles, bookings and academic administration.',
      value:
        'The product demonstrates our ability to structure complex multi-role workflows around real educational requirements.',
      website: 'https://alkebulaschool.com',
      accent: ACCENTS.violet,
    },
    {
      number: '03',
      name: 'Sunscape Car Rentals',
      sector: 'TRANSPORT • TRAVEL',
      description:
        'A booking-led fleet website helping customers discover vehicles, understand services and move towards enquiry or reservation.',
      value:
        'The project demonstrates how a service business can create a clearer and more professional digital customer journey.',
      website: 'https://sunscape.co.ke',
      accent: ACCENTS.orange,
    },
  ]

  const experienceStandards = [
    {
      number: '01',
      title: 'Clear communication',
      text:
        'You should understand what is being worked on, what requires approval and what happens next.',
      accent: ACCENTS.cyan,
    },
    {
      number: '02',
      title: 'Business-focused thinking',
      text:
        'Recommendations begin with the organisation, users and operating requirements rather than design trends alone.',
      accent: ACCENTS.blue,
    },
    {
      number: '03',
      title: 'Professional execution',
      text:
        'Products are developed with attention to usability, responsiveness, performance, security and maintainability.',
      accent: ACCENTS.violet,
    },
    {
      number: '04',
      title: 'Controlled delivery',
      text:
        'Scope, changes, approvals and important decisions are handled deliberately rather than casually.',
      accent: ACCENTS.magenta,
    },
    {
      number: '05',
      title: 'Client ownership',
      text:
        'The organisation should retain agreed access to its domains, systems, accounts and essential digital assets.',
      accent: ACCENTS.orange,
    },
    {
      number: '06',
      title: 'Support beyond launch',
      text:
        'Where required, the relationship can continue through maintenance, analysis, improvements and future development.',
      accent: ACCENTS.cyan,
    },
  ]

  const verificationItems = [
    {
      title: 'Who said it?',
      text: 'The client or authorised representative should be identifiable.',
      accent: ACCENTS.cyan,
    },
    {
      title: 'For which organisation?',
      text: 'The business or institution should be placed in proper context.',
      accent: ACCENTS.blue,
    },
    {
      title: 'Which project?',
      text: 'The feedback should relate to work that can be explained or verified.',
      accent: ACCENTS.violet,
    },
    {
      title: 'What specifically went well?',
      text: 'Useful feedback describes an experience, result or aspect of delivery.',
      accent: ACCENTS.magenta,
    },
    {
      title: 'Was publication authorised?',
      text: 'Client comments should not be presented publicly without permission.',
      accent: ACCENTS.orange,
    },
  ]

  const trustSignals = [
    {
      title: 'Real work',
      text:
        'Live digital products that prospective clients can visit and examine.',
      accent: ACCENTS.cyan,
    },
    {
      title: 'Clear process',
      text:
        'Defined stages, decision points, approvals and controlled change.',
      accent: ACCENTS.blue,
    },
    {
      title: 'Transparent pricing',
      text:
        'Starting ranges are published and final quotations are based on actual scope.',
      accent: ACCENTS.violet,
    },
    {
      title: 'Practical ownership',
      text:
        'Projects are handed over with agreed access and operational clarity.',
      accent: ACCENTS.orange,
    },
  ]

  const whySterlings = [
    {
      title: 'Strategic understanding',
      text:
        'We examine what the organisation is trying to achieve before deciding what technology should be built.',
      accent: ACCENTS.cyan,
    },
    {
      title: 'Custom development',
      text:
        'Important products are structured around actual users, workflows and business requirements.',
      accent: ACCENTS.blue,
    },
    {
      title: 'Commercial clarity',
      text:
        'Scope, responsibilities, milestones and commercial terms are defined before development begins.',
      accent: ACCENTS.violet,
    },
    {
      title: 'Long-term thinking',
      text:
        'Products are designed with maintainability, future functionality and organisational growth in mind.',
      accent: ACCENTS.orange,
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
          style={{ background: ACCENTS.cyan }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: ACCENTS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[0.58fr_0.42fr] gap-8 lg:gap-10 items-center">
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
                  CLIENT CONFIDENCE
                </div>
              </div>

              <h1 className="mt-5 max-w-[820px] text-[35px] sm:text-[40px] lg:text-[45px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                Trust should come from evidence, not exaggerated promises.
              </h1>

              <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-500">
                Choosing a digital studio means trusting another organisation
                with something important to your business.
              </p>

              <p className="mt-3 max-w-[720px] text-[13px] leading-7 text-slate-500">
                We believe that confidence should come from work you can
                examine, a process you can understand, commercial terms you can
                discuss clearly and genuine feedback published responsibly.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/work"
                  className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5"
                >
                  Examine our work →
                </Link>

                <Link
                  to="/process"
                  className="inline-flex rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-[#16243A]"
                >
                  See how we work
                </Link>
              </div>

              {/* PROOF STRIP */}
              <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-[21px] border border-slate-200 bg-white">
                {[
                  {
                    label: 'LIVE',
                    value: 'Real platforms',
                    accent: ACCENTS.cyan,
                  },
                  {
                    label: 'CLEAR',
                    value: 'Defined process',
                    accent: ACCENTS.violet,
                  },
                  {
                    label: 'CONTROL',
                    value: 'Client ownership',
                    accent: ACCENTS.orange,
                  },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`relative p-4 sm:p-5 ${
                      index > 0 ? 'border-l border-slate-200' : ''
                    }`}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-[3px]"
                      style={{ background: item.accent }}
                    />

                    <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                      {item.label}
                    </div>

                    <div className="mt-2 text-[10px] sm:text-[12px] font-bold text-[#16243A]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-[29px] bg-[#F4F7FA] p-3">
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src="/human_founder_smile.webp"
                  alt="Professional business relationship and client confidence"
                  className="block w-full h-[460px] lg:h-[505px] object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081526]/95 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[9px] font-bold tracking-[0.18em] text-white/60">
                    OUR WORKING PRINCIPLE
                  </div>

                  <blockquote className="mt-2 max-w-[500px] text-[22px] font-semibold leading-7 text-white">
                    “Proof before promises.”
                  </blockquote>

                  <div className="mt-5 flex gap-1.5">
                    {[
                      ACCENTS.cyan,
                      ACCENTS.blue,
                      ACCENTS.violet,
                      ACCENTS.magenta,
                      ACCENTS.orange,
                    ].map((colour) => (
                      <span
                        key={colour}
                        className="h-2 w-2 rounded-full"
                        style={{ background: colour }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          TRUST SIGNALS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-9">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {trustSignals.map((item) => (
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

                <p className="mt-2 text-[9px] leading-5 text-slate-500">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          PHILOSOPHY
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-12">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
            <div className="bg-[#0F1F35] p-7 lg:p-9 text-white">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                A SIMPLE TEST
              </div>

              <h2 className="mt-4 text-[27px] lg:text-[31px] font-bold leading-[1.08]">
                Before choosing a digital studio, ask one question.
              </h2>
            </div>

            <div className="p-7 lg:p-9 flex flex-col justify-center">
              <blockquote className="max-w-[760px] text-[23px] lg:text-[29px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#16243A]">
                “Can they show work that supports what they are promising?”
              </blockquote>

              <p className="mt-5 max-w-[700px] text-[12px] leading-6 text-slate-500">
                Attractive language is easy to publish. A functioning digital
                product is much harder to fake. That is why our live work forms
                an important part of how we establish credibility.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/work"
                  className="inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
                >
                  Explore live work →
                </Link>

                <Link
                  to="/solutions"
                  className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-[10px] font-bold text-[#16243A]"
                >
                  Explore solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          LIVE CLIENT PLATFORMS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-7 items-end">
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

              <h2 className="mt-3 max-w-[820px] text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                The strongest testimonial is often a product you can actually
                use.
              </h2>
            </div>

            <p className="max-w-[440px] lg:ml-auto text-[11px] leading-6 text-slate-500">
              These live platforms demonstrate different industries,
              operational requirements and types of digital product.
            </p>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-5">
            {clientPlatforms.map((project) => (
              <article
                key={project.name}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,31,53,0.08)]"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{ background: project.accent }}
                />

                <div className="flex items-center justify-between gap-4">
                  <div className="text-[8px] font-bold tracking-[0.14em] text-slate-400">
                    {project.sector}
                  </div>

                  <span
                    className="text-[9px] font-bold"
                    style={{ color: project.accent }}
                  >
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-5 text-[19px] font-bold text-[#16243A]">
                  {project.name}
                </h3>

                <p className="mt-3 text-[11px] leading-6 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div
                    className="text-[8px] font-bold tracking-[0.14em]"
                    style={{ color: project.accent }}
                  >
                    WHAT IT DEMONSTRATES
                  </div>

                  <p className="mt-2 text-[10px] leading-5 text-slate-500">
                    {project.value}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-bold text-[#16243A]"
                  >
                    Visit live platform
                    <span style={{ color: project.accent }}>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 text-right">
            <Link
              to="/work"
              className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-[10px] font-bold text-[#16243A]"
            >
              Explore full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          CLIENT EXPERIENCE
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="overflow-hidden rounded-[30px] bg-[#0F1F35] text-white">
          <div className="grid lg:grid-cols-[0.35fr_0.65fr]">
            <div className="relative p-7 lg:p-9">
              <div
                className="absolute inset-y-0 left-0 w-[5px]"
                style={{
                  background:
                    'linear-gradient(180deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                THE CLIENT EXPERIENCE
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.025em]">
                What should working with Sterlings actually feel like?
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-300">
                Good client relationships are built through clarity,
                professional judgement and dependable delivery — not dramatic
                promises.
              </p>

              <Link
                to="/process"
                className="mt-6 inline-flex rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-[10px] font-bold text-white"
              >
                See the full process →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t lg:border-l lg:border-t-0 border-white/10">
              {experienceStandards.map((item, index) => (
                <article
                  key={item.number}
                  className={`relative p-6 ${
                    index >= 3
                      ? 'border-t border-white/10'
                      : ''
                  } ${
                    index % 3 !== 0
                      ? 'lg:border-l lg:border-white/10'
                      : ''
                  } ${
                    index % 2 !== 0
                      ? 'sm:border-l sm:border-white/10'
                      : ''
                  }`}
                >
                  <div
                    className="text-[9px] font-bold"
                    style={{ color: item.accent }}
                  >
                    {item.number}
                  </div>

                  <h3 className="mt-3 text-[14px] font-bold">
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
          HUMAN PARTNERSHIP
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-12 lg:pb-14">
        <div className="grid lg:grid-cols-[0.47fr_0.53fr] gap-5 items-stretch">
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
            <img
              src="/human_handshake_deal.webp"
              alt="Professional client and technology partnership"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F35]/90 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7">
              <div className="text-[9px] font-bold tracking-[0.18em] text-white/60">
                A PROFESSIONAL RELATIONSHIP
              </div>

              <blockquote className="mt-2 max-w-[500px] text-[20px] font-semibold leading-7 text-white">
                “A client should never have to guess whether the project is
                moving forward.”
              </blockquote>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-7 lg:p-9">
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: ACCENTS.orange }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                WHERE TRUST ACTUALLY COMES FROM
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Trust is built in the small moments of a project.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              It comes from responding clearly, explaining difficult technical
              decisions, respecting agreed scope, acknowledging problems and
              following through on commitments.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                {
                  title: 'When something is unclear',
                  text: 'Explain it.',
                  accent: ACCENTS.cyan,
                },
                {
                  title: 'When something changes',
                  text: 'Discuss it.',
                  accent: ACCENTS.blue,
                },
                {
                  title: 'When something goes wrong',
                  text: 'Address it.',
                  accent: ACCENTS.violet,
                },
                {
                  title: 'When something is approved',
                  text: 'Deliver it.',
                  accent: ACCENTS.orange,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-[16px] border border-slate-200 bg-white p-4"
                >
                  <div
                    className="absolute inset-y-0 left-0 w-[3px]"
                    style={{ background: item.accent }}
                  />

                  <div className="text-[10px] font-bold text-[#16243A]">
                    {item.title}
                  </div>

                  <div
                    className="mt-1 text-[10px] font-bold"
                    style={{ color: item.accent }}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          TESTIMONIAL POLICY
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: ACCENTS.magenta }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  GENUINE CLIENT FEEDBACK
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Testimonials should have names, context and permission.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                We would rather publish fewer meaningful testimonials than fill
                a page with anonymous praise that nobody can verify.
              </p>

              <p className="mt-3 text-[11px] leading-6 text-slate-500">
                Where feedback is authorised for publication, it should help a
                prospective client understand who the client was, what project
                was delivered and which aspect of the engagement they are
                describing.
              </p>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
              <div
                className="h-[4px]"
                style={{
                  background:
                    'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                }}
              />

              <div className="p-6 lg:p-7">
                <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                  A PUBLISHED TESTIMONIAL SHOULD ANSWER
                </div>

                <div className="mt-5 grid gap-3">
                  {verificationItems.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-[15px] border border-slate-200 bg-[#F8FAFC] p-4"
                    >
                      <span
                        className="mt-1 h-2 w-2 shrink-0 rounded-full"
                        style={{ background: item.accent }}
                      />

                      <div>
                        <div className="text-[10px] font-bold text-[#16243A]">
                          {item.title}
                        </div>

                        <p className="mt-1 text-[9px] leading-5 text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          VERIFIED FEEDBACK POSITION
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-12">
        <div className="relative overflow-hidden rounded-[27px] border border-slate-200 bg-white p-7 lg:p-9">
          <div
            className="absolute inset-x-0 top-0 h-[4px]"
            style={{
              background:
                'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
            }}
          />

          <div className="grid lg:grid-cols-[0.28fr_0.72fr] gap-7 items-start">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                OUR TESTIMONIAL STANDARD
              </div>
            </div>

            <div>
              <blockquote className="text-[22px] sm:text-[26px] lg:text-[30px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#16243A]">
                “We will never invent a client quote simply because an empty
                testimonial box looks less impressive.”
              </blockquote>

              <p className="mt-5 max-w-[760px] text-[11px] leading-6 text-slate-500">
                Until specific client feedback is authorised for public use,
                our live work, project process and delivery standards remain
                the evidence presented here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHY STERLINGS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: ACCENTS.orange }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  WHY STERLINGS STUDIO
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Serious digital work requires more than code.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                The technical product matters. So does the judgement used to
                decide what should be built in the first place.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-[10px] font-bold text-[#16243A]"
              >
                About Sterlings Studio →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {whySterlings.map((item, index) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
                >
                  <div
                    className="absolute inset-y-0 left-0 w-[3px]"
                    style={{ background: item.accent }}
                  />

                  <div
                    className="text-[8px] font-bold"
                    style={{ color: item.accent }}
                  >
                    0{index + 1}
                  </div>

                  <h3 className="mt-3 text-[14px] font-bold text-[#16243A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-slate-500">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SITE JOURNEY
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-3 gap-3">
          <Link
            to="/work"
            className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
          >
            <div
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{ background: ACCENTS.cyan }}
            />

            <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
              EVIDENCE
            </div>

            <div className="mt-2 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-[15px] font-bold text-[#16243A]">
                  View our work
                </h3>

                <p className="mt-1 text-[9px] leading-5 text-slate-500">
                  Live platforms and product concepts.
                </p>
              </div>

              <span className="text-[#18B8F2] transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>

          <Link
            to="/process"
            className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
          >
            <div
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{ background: ACCENTS.violet }}
            />

            <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
              DELIVERY
            </div>

            <div className="mt-2 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-[15px] font-bold text-[#16243A]">
                  See our process
                </h3>

                <p className="mt-1 text-[9px] leading-5 text-slate-500">
                  Scope, design, development and launch.
                </p>
              </div>

              <span className="text-[#8B5CF6] transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>

          <Link
            to="/pricing"
            className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
          >
            <div
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{ background: ACCENTS.orange }}
            />

            <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
              COMMERCIAL CLARITY
            </div>

            <div className="mt-2 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-[15px] font-bold text-[#16243A]">
                  Review pricing
                </h3>

                <p className="mt-1 text-[9px] leading-5 text-slate-500">
                  Starting points and quotation principles.
                </p>
              </div>

              <span className="text-[#FF8A3D] transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0F1F35] text-white">
        <div
          aria-hidden="true"
          className="absolute -left-24 -top-32 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ background: ACCENTS.cyan }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-20 -bottom-36 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: ACCENTS.magenta }}
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
                  BEGIN WITH A CONVERSATION
                </div>
              </div>

              <h2 className="mt-4 max-w-[880px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                Let your project become the next piece of work we are proud to
                show.
              </h2>

              <p className="mt-5 max-w-[700px] text-[13px] leading-7 text-slate-300">
                Tell us what your organisation needs to launch, improve or
                simplify. We will help define the right product and the most
                practical route towards building it.
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