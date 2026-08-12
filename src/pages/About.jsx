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

export default function About() {
  const principles = [
    {
      number: '01',
      title: 'Business before decoration',
      text:
        'Every project begins with the organisation, its users, its commercial or institutional objectives and the problem technology needs to solve.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Clarity before complexity',
      text:
        'We simplify difficult ideas, workflows and customer journeys before adding technology. Sophistication should make a product easier to use, not harder to understand.',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Quality in the foundation',
      text:
        'Performance, security, responsive design, maintainability and future growth are considered from the beginning rather than added shortly before launch.',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Partnership beyond launch',
      text:
        'A digital product continues to evolve after release. We can remain involved through maintenance, analysis, refinement and future development.',
      accent: COLORS.orange,
    },
  ]

  const services = [
    {
      title: 'Websites',
      text:
        'Corporate, institutional, school, NGO, government and commercial websites.',
      link: '/services#websites',
      accent: COLORS.cyan,
    },
    {
      title: 'Web Applications',
      text:
        'Portals, dashboards, management systems, marketplaces and operational platforms.',
      link: '/services#web-applications',
      accent: COLORS.blue,
    },
    {
      title: 'Android Apps',
      text:
        'Customer, employee, rider, driver and operational Android applications.',
      link: '/services#android-apps',
      accent: COLORS.violet,
    },
    {
      title: 'iOS Apps',
      text:
        'iPhone and iPad applications connected to the wider business platform.',
      link: '/services#ios-apps',
      accent: COLORS.magenta,
    },
    {
      title: 'Connected Platforms',
      text:
        'Websites, apps, dashboards, payments and databases working as one ecosystem.',
      link: '/services#connected-platforms',
      accent: COLORS.orange,
    },
  ]

  const solutionExamples = [
    'School Management Systems',
    'Hospital Management Systems',
    'SACCO Platforms',
    'Fleet Management Apps',
    'E-commerce Platforms',
    'Online Marketplaces',
    'Booking Systems',
    'Delivery & Mobility Apps',
  ]

  const proof = [
    {
      number: '01',
      name: 'Akashi Designs',
      category: 'DIGITAL COMMERCE',
      text:
        'A global architectural marketplace combining discovery, checkout, administration and secure digital delivery.',
      link: 'https://akashidesigns.com',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      name: 'The Alkebula School',
      category: 'EDUCATION TECHNOLOGY',
      text:
        'A multi-role education platform connecting parents, educators, bookings and academic administration.',
      link: 'https://alkebulaschool.com',
      accent: COLORS.violet,
    },
    {
      number: '03',
      name: 'Sunscape Car Rentals',
      category: 'TRANSPORT & TRAVEL',
      text:
        'A booking-led digital experience designed around fleet discovery, transport services and customer enquiry.',
      link: 'https://sunscape.co.ke',
      accent: COLORS.orange,
    },
  ]

  const confidence = [
    {
      title: 'Clear scope',
      text:
        'Responsibilities, deliverables, commercial terms and important dependencies are defined before development begins.',
      accent: COLORS.cyan,
    },
    {
      title: 'Visible progress',
      text:
        'Important stages, approvals and decisions remain clear throughout the project.',
      accent: COLORS.blue,
    },
    {
      title: 'Access & ownership',
      text:
        'Agreed access to domains, hosting, systems and essential digital assets remains with the organisation.',
      accent: COLORS.violet,
    },
    {
      title: 'Long-term thinking',
      text:
        'Products are designed with future maintenance, additional functionality and organisational growth in mind.',
      accent: COLORS.magenta,
    },
    {
      title: 'Professional handover',
      text:
        'Launch should leave your organisation with greater control of its digital product, not less.',
      accent: COLORS.orange,
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
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[0.56fr_0.44fr] gap-8 lg:gap-10 items-center">
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
                  ABOUT STERLINGS STUDIO
                </div>
              </div>

              <h1 className="mt-5 max-w-[850px] text-[35px] sm:text-[40px] lg:text-[45px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                We build digital products worthy of the organisations behind
                them.
              </h1>

              <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-500">
                <strong className="font-semibold text-[#16243A]">
                  Sterlings Studio Limited
                </strong>{' '}
                is a Nairobi-based digital studio designing and developing
                professional websites, web applications, Android apps, iOS
                apps and connected business platforms.
              </p>

              <p className="mt-3 max-w-[720px] text-[13px] leading-7 text-slate-500">
                We work with businesses, institutions and growing organisations
                that need technology to do more than look impressive. It should
                improve credibility, make services easier to access and help
                the organisation operate better.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/work"
                  className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5"
                >
                  Explore our work →
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-[#16243A]"
                >
                  Work with us
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-[29px] bg-[#F4F7FA] p-3">
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src="/human_boardroom_main.webp"
                  alt="Sterlings Studio digital product strategy"
                  className="block w-full h-[440px] lg:h-[485px] object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081526]/95 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[9px] font-bold tracking-[0.18em] text-white/60">
                    OUR POSITION
                  </div>

                  <blockquote className="mt-2 max-w-[500px] text-[21px] font-semibold leading-7 text-white">
                    “Technology has value when it makes something that matters
                    work better.”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          IDENTITY STRIP
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                label: 'BASE',
                value: 'Nairobi, Kenya',
                accent: COLORS.cyan,
              },
              {
                label: 'FOCUS',
                value: 'Digital Products',
                accent: COLORS.blue,
              },
              {
                label: 'MARKET',
                value: 'Africa & Global',
                accent: COLORS.violet,
              },
              {
                label: 'APPROACH',
                value: 'Business First',
                accent: COLORS.orange,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-white p-5"
              >
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{ background: item.accent }}
                />

                <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
                  {item.label}
                </div>

                <div className="mt-2 text-[13px] font-bold text-[#16243A]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          WHO WE ARE
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-12 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.cyan }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                WHO WE ARE
              </div>
            </div>

            <h2 className="mt-4 text-[29px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              A technology partner.
              <br />
              Not a template factory.
            </h2>

            <blockquote className="mt-6 border-l-[3px] border-[#18B8F2] pl-4 text-[15px] font-semibold leading-6 text-[#16243A]">
              “The technology should fit the organisation — not force the
              organisation to fit the technology.”
            </blockquote>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-[23px] border border-slate-200 bg-[#F8FAFC] p-6">
              <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
                BUSINESS FIRST
              </div>

              <p className="mt-3 text-[13px] leading-7 text-slate-500">
                Our projects often involve specific customer journeys,
                operational processes, user roles, payments, databases,
                bookings or administrative requirements.
              </p>

              <p className="mt-4 text-[13px] leading-7 text-slate-500">
                Before recommending technology, we want to understand how the
                organisation actually works and what the product needs to
                accomplish.
              </p>
            </div>

            <div className="rounded-[23px] bg-[#0F1F35] p-6 text-white">
              <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
                RIGHT-SIZED TECHNOLOGY
              </div>

              <p className="mt-3 text-[13px] leading-7 text-slate-300">
                The result may be a focused corporate website, a complex web
                application, a mobile product or several connected systems
                working together.
              </p>

              <p className="mt-4 text-[13px] leading-7 text-slate-300">
                We do not add complexity simply to appear sophisticated. The
                architecture should serve the product and its future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          HUMAN / WORKING COLLAGE
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-12 lg:pb-14">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-5 overflow-hidden rounded-[24px]">
            <img
              src="/human_cafe_laptop.webp"
              alt="Professional reviewing a digital product on a laptop"
              className="block h-[230px] lg:h-[330px] w-full object-cover object-center"
            />
          </div>

          <div className="lg:col-span-3 overflow-hidden rounded-[24px]">
            <img
              src="/human_handshake_deal.webp"
              alt="Business partnership and project collaboration"
              className="block h-[230px] lg:h-[330px] w-full object-cover object-center"
            />
          </div>

          <div className="col-span-2 lg:col-span-4 overflow-hidden rounded-[24px]">
            <img
              src="/human_support_team.webp"
              alt="Digital support team working together"
              className="block h-[220px] lg:h-[330px] w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          HOW WE THINK
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-7 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.violet }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  HOW WE THINK
                </div>
              </div>

              <h2 className="mt-3 max-w-[800px] text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                The principles behind every Sterlings Studio project.
              </h2>
            </div>

            <p className="max-w-[450px] lg:ml-auto text-[11px] leading-6 text-slate-500">
              Technical ability matters. Judgement, communication and respect
              for the organisation behind the product matter just as much.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="relative overflow-hidden rounded-[23px] border border-slate-200 bg-white p-6 lg:p-7"
              >
                <div
                  className="absolute inset-y-0 left-0 w-[4px]"
                  style={{ background: principle.accent }}
                />

                <div className="flex items-start gap-5">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ background: principle.accent }}
                  >
                    {principle.number}
                  </div>

                  <div>
                    <h3 className="text-[18px] font-bold text-[#16243A]">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-6 text-slate-500">
                      {principle.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT WE ACTUALLY BUILD
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.37fr_0.63fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.blue }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                WHAT WE ACTUALLY BUILD
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Different products.
              <br />
              One consistent standard.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              Sterlings Studio can support an organisation from its first
              professional website through to a complete multi-application
              digital ecosystem.
            </p>

            <Link
              to="/services"
              className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
            >
              Explore our services →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.link}
                className={`group relative overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-5 ${
                  index === services.length - 1
                    ? 'sm:col-span-2'
                    : ''
                }`}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: service.accent }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[14px] font-bold text-[#16243A]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-slate-500">
                      {service.text}
                    </p>
                  </div>

                  <span
                    className="shrink-0 transition group-hover:translate-x-1"
                    style={{ color: service.accent }}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICES VS SOLUTIONS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-12">
          <div className="overflow-hidden rounded-[27px] border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
              <div className="p-7 lg:p-8">
                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  SERVICES
                </div>

                <h2 className="mt-3 text-[24px] font-bold text-[#16243A]">
                  How we build.
                </h2>

                <p className="mt-3 text-[11px] leading-6 text-slate-500">
                  Websites, web applications, Android apps, iOS apps and
                  connected digital platforms.
                </p>

                <Link
                  to="/services"
                  className="mt-5 inline-flex text-[10px] font-bold text-[#16243A] underline underline-offset-4"
                >
                  Explore services →
                </Link>
              </div>

              <div className="relative bg-[#0F1F35] p-7 lg:p-8 text-white">
                <div
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                  }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  SOLUTIONS
                </div>

                <h2 className="mt-3 text-[24px] font-bold">
                  What those capabilities can become.
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {solutionExamples.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[9px] font-semibold text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  to="/solutions"
                  className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-[10px] font-bold text-[#0F1F35]"
                >
                  Explore solutions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROOF / LIVE WORK
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.63fr_0.37fr] gap-7 items-end">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.cyan }}
              />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                PROOF IN THE WORK
              </div>
            </div>

            <h2 className="mt-3 max-w-[800px] text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Different industries demand different digital thinking.
            </h2>
          </div>

          <p className="max-w-[440px] lg:ml-auto text-[11px] leading-6 text-slate-500">
            Architecture, education and transport are very different
            businesses. Their products should not look or behave as though
            they came from the same template.
          </p>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-4">
          {proof.map((item) => (
            <article
              key={item.name}
              className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-[#F8FAFC] p-6"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: item.accent }}
              />

              <div className="flex items-center justify-between gap-5">
                <div
                  className="text-[8px] font-bold tracking-[0.14em]"
                  style={{ color: item.accent }}
                >
                  {item.category}
                </div>

                <span
                  className="text-[9px] font-bold"
                  style={{ color: item.accent }}
                >
                  {item.number}
                </span>
              </div>

              <h3 className="mt-4 text-[18px] font-bold text-[#16243A]">
                {item.name}
              </h3>

              <p className="mt-3 text-[10px] leading-5 text-slate-500">
                {item.text}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-[9px] font-bold text-[#16243A]"
              >
                Visit live platform ↗
              </a>
            </article>
          ))}
        </div>

        <div className="mt-5 text-right">
          <Link
            to="/work"
            className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-[10px] font-bold text-[#16243A]"
          >
            Explore our full portfolio →
          </Link>
        </div>
      </section>

      {/* ======================================================
          NAIROBI / GLOBAL
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="overflow-hidden rounded-[29px] bg-[#0F1F35] text-white">
            <div className="grid lg:grid-cols-[0.53fr_0.47fr]">
              <div className="relative min-h-[430px] lg:min-h-[500px] overflow-hidden">
                <img
                  src="/skyline_golden.webp"
                  alt="Nairobi skyline representing Sterlings Studio's African base and international outlook"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F35]/85 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[9px] font-bold tracking-[0.18em] text-white/65">
                    NAIROBI • KENYA
                  </div>

                  <blockquote className="mt-2 max-w-[520px] text-[20px] font-semibold leading-7 text-white">
                    “African-built technology does not need to think small.”
                  </blockquote>
                </div>
              </div>

              <div className="p-7 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span
                    className="h-[3px] w-9 rounded-full"
                    style={{ background: COLORS.orange }}
                  />

                  <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                    BUILT IN NAIROBI
                  </div>
                </div>

                <h2 className="mt-4 text-[29px] lg:text-[35px] font-bold leading-[1.08] tracking-[-0.025em]">
                  African context.
                  <br />
                  International standards.
                </h2>

                <p className="mt-5 text-[12px] leading-6 text-slate-300">
                  Being based in Nairobi gives us practical familiarity with
                  mobile-first markets, M-Pesa, connectivity realities and the
                  ways customers interact with digital services across East
                  Africa.
                </p>

                <p className="mt-4 text-[12px] leading-6 text-slate-300">
                  At the same time, digital products do not stop at national
                  borders. Our work can serve customers, partners and
                  organisations internationally.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  {[
                    'Nairobi-based',
                    'Africa-aware',
                    'Global delivery',
                    'Remote collaboration',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[13px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[9px] font-semibold text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CLIENT CONTROL
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
                CLIENT CONFIDENCE
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Your organisation should remain in control.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              Technology relationships work better when scope, progress,
              ownership and responsibilities are clear.
            </p>

            <blockquote className="mt-6 border-l-[3px] border-[#D946EF] pl-4 text-[15px] font-semibold leading-6 text-[#16243A]">
              “A good technology partner should increase your confidence in
              your digital product.”
            </blockquote>

            <Link
              to="/process"
              className="mt-6 inline-flex rounded-full border border-slate-200 px-6 py-3 text-[10px] font-bold text-[#16243A]"
            >
              See how we work →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {confidence.map((item, index) => (
              <article
                key={item.title}
                className={`relative overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-5 ${
                  index === confidence.length - 1
                    ? 'sm:col-span-2'
                    : ''
                }`}
              >
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{ background: item.accent }}
                />

                <h3 className="text-[13px] font-bold text-[#16243A]">
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
          PHILOSOPHY STATEMENT
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11">
          <div className="relative overflow-hidden rounded-[27px] bg-white border border-slate-200 p-7 lg:p-9">
            <div
              className="absolute inset-x-0 top-0 h-[4px]"
              style={{
                background:
                  'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
              }}
            />

            <div className="grid lg:grid-cols-[0.26fr_0.74fr] gap-7 items-start">
              <div>
                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  THE STERLINGS STANDARD
                </div>
              </div>

              <blockquote className="text-[23px] sm:text-[27px] lg:text-[31px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#16243A]">
                “Build it beautifully. Make it useful. Keep it fast. Leave it
                ready for what comes next.”
              </blockquote>
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
                  WORK WITH STERLINGS STUDIO
                </div>
              </div>

              <h2 className="mt-4 max-w-[900px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                Bring us the organisation.
                <br />
                The problem.
                <br />
                Or simply the idea.
              </h2>

              <p className="mt-5 max-w-[700px] text-[13px] leading-7 text-slate-300">
                We will help determine what should be built, how the product
                should work and which combination of website, web application,
                Android app, iOS app or connected systems will best serve the
                objective.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Start the conversation →
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