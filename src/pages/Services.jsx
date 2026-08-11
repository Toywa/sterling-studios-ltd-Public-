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

export default function Services() {
  const serviceNav = [
    {
      number: '01',
      label: 'Web Applications',
      href: '#web-applications',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      label: 'Professional Websites',
      href: '#professional-websites',
      accent: COLORS.blue,
    },
    {
      number: '03',
      label: 'Political Platforms',
      href: '#political-platforms',
      accent: COLORS.violet,
    },
    {
      number: '04',
      label: 'Android & iOS',
      href: '#mobile-applications',
      accent: COLORS.orange,
    },
  ]

  const serviceStandards = [
    {
      title: 'Business-led',
      text: 'We start with what the organisation needs to achieve.',
      accent: COLORS.cyan,
    },
    {
      title: 'Custom-built',
      text: 'The product follows the workflow rather than forcing a template.',
      accent: COLORS.violet,
    },
    {
      title: 'Performance-minded',
      text: 'Speed, usability and maintainability are treated as product features.',
      accent: COLORS.magenta,
    },
    {
      title: 'Built beyond launch',
      text: 'Architecture and handover consider what happens after go-live.',
      accent: COLORS.orange,
    },
  ]

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <SEO
        title="Services | Sterlings Studio"
        description="Sterlings Studio designs professional websites, custom web applications, political and campaign platforms, and Android and iOS applications for organisations in Kenya and beyond."
        canonical="https://sterlingsstudio.com/services"
        ogImage="/sterling-share-preview.png"
      />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full opacity-[0.055] blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-4 h-80 w-80 rounded-full opacity-[0.055] blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-10 lg:pt-12 pb-10">
          <div className="grid lg:grid-cols-[0.58fr_0.42fr] gap-8 lg:gap-10 items-stretch">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-10 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                  }}
                />

                <div className="text-[10px] font-bold tracking-[0.19em] text-slate-400">
                  OUR SERVICES
                </div>
              </div>

              <h1 className="mt-5 max-w-[820px] text-[34px] sm:text-[39px] lg:text-[43px] xl:text-[46px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                Digital products built to solve real business problems.
              </h1>

              <p className="mt-5 max-w-[690px] text-[14px] leading-7 text-slate-500">
                Sterlings Studio designs and develops professional websites,
                custom web applications and mobile products for businesses,
                schools, public institutions, political organisations and
                growing brands.
              </p>

              <p className="mt-3 max-w-[690px] text-[13px] leading-7 text-slate-500">
                Every project is shaped around its users, commercial objectives,
                security requirements and long-term growth - not simply how it
                looks on launch day.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#172C49]"
                >
                  Discuss your project →
                </Link>

                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  View pricing
                </Link>
              </div>

              {/* SERVICE NAV */}
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {serviceNav.map((item) => (
                  <a
                    key={item.number}
                    href={item.href}
                    className="group relative overflow-hidden rounded-[18px] border border-slate-200 bg-[#F8FAFC] px-5 py-4 transition hover:bg-white hover:shadow-sm"
                  >
                    <div
                      className="absolute inset-y-0 left-0 w-[3px]"
                      style={{ background: item.accent }}
                    />

                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div
                          className="text-[9px] font-bold"
                          style={{ color: item.accent }}
                        >
                          {item.number}
                        </div>

                        <div className="mt-1 text-[12px] font-bold text-[#16243A]">
                          {item.label}
                        </div>
                      </div>

                      <span
                        className="transition-transform group-hover:translate-x-1"
                        style={{ color: item.accent }}
                      >
                        ↓
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[28px] bg-[#F4F7FA] p-3">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src="/human_team_standup.webp"
                    alt="Sterlings Studio digital product planning"
                    className="block w-full h-[360px] lg:h-[390px] object-cover object-center"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1728]/95 via-[#0B1728]/42 to-transparent px-6 pt-24 pb-6">
                    <div className="text-[9px] font-bold tracking-[0.18em] text-white/65">
                      OUR PRODUCT PHILOSOPHY
                    </div>

                    <blockquote className="mt-2 max-w-[460px] text-[19px] font-semibold leading-7 text-white">
                      “Understand the business first. Then build the technology
                      around it.”
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-5">
                <div
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                  }}
                />

                <div className="text-[8px] font-bold tracking-[0.18em] text-slate-400">
                  PERFORMANCE MATTERS
                </div>

                <div className="mt-2 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                  <p className="text-[15px] font-bold text-[#16243A]">
                    Websites that load in{' '}
                    <span style={{ color: COLORS.blue }}>0.5s.</span> Apps that
                    scale. Built to last.
                  </p>

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
          SERVICE STANDARD
      ========================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-[24px] border border-slate-200 bg-white">
            {serviceStandards.map((item, index) => (
              <div
                key={item.title}
                className={`relative p-5 ${
                  index !== 0
                    ? 'border-t sm:border-t-0 sm:border-l border-slate-200'
                    : ''
                }`}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: item.accent }}
                />

                <h3 className="text-[12px] font-bold text-[#16243A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          01 WEB APPLICATIONS
      ========================================================== */}
      <section
        id="web-applications"
        className="scroll-mt-24 max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16"
      >
        <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-[0.48fr_0.52fr]">
            {/* IMAGE */}
            <div className="relative min-h-[500px] bg-slate-100">
              <img
                src="/human_team_standup.webp"
                alt="Team planning a custom web application"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F35]/90 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#16243A] shadow-sm">
                01
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="text-[9px] font-bold tracking-[0.17em] text-white/65">
                  CUSTOM SOFTWARE
                </div>

                <blockquote className="mt-2 max-w-[470px] text-[21px] font-semibold leading-7 text-white">
                  “Software should remove friction from the operation, not add
                  another layer of it.”
                </blockquote>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                  WEB APPLICATION DEVELOPMENT
                </div>
              </div>

              <h2 className="mt-4 max-w-[620px] text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Custom platforms that simplify operations and support growth.
              </h2>

              <p className="mt-5 text-[13px] leading-7 text-slate-500">
                We develop secure, scalable web applications for organisations
                that need more than a conventional website. From customer
                portals and booking systems to internal dashboards and online
                marketplaces, every platform is built around a defined
                operational need.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                {[
                  'Customer and staff portals',
                  'Booking and reservation systems',
                  'Business dashboards',
                  'Role-based access controls',
                  'Online marketplaces',
                  'Workflow automation',
                  'Payment integrations',
                  'Reporting and audit records',
                ].map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[14px] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[11px] font-semibold text-slate-600"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-slate-200 pt-5">
                <div className="text-[9px] font-bold tracking-[0.15em] text-slate-400">
                  BEST SUITED TO
                </div>

                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  Businesses, institutions, membership organisations, service
                  providers and technology-led ventures.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[11px] font-bold text-white"
                >
                  Discuss a web application →
                </Link>

                <Link
                  to="/work"
                  className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-[11px] font-bold text-[#16243A]"
                >
                  See related work
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* =========================================================
          EDITORIAL QUOTE
      ========================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-14">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0F1F35] px-7 py-9 lg:px-10 lg:py-10 text-white">
          <div
            className="absolute left-0 top-0 h-full w-[5px]"
            style={{
              background:
                'linear-gradient(180deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
            }}
          />

          <div className="grid lg:grid-cols-[0.7fr_0.3fr] gap-8 items-end">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                DIGITAL PRODUCTS, NOT DECORATION
              </div>

              <blockquote className="mt-4 max-w-[850px] text-[25px] sm:text-[28px] lg:text-[32px] font-semibold leading-[1.16] tracking-[-0.02em]">
                “The question is not simply what should the website look like?
                The better question is: what should it help the organisation
                accomplish?”
              </blockquote>
            </div>

            <div className="lg:text-right">
              <Link
                to="/process"
                className="inline-flex text-[11px] font-bold text-white underline underline-offset-4"
              >
                See how we think →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 PROFESSIONAL WEBSITES
      ========================================================== */}
      <section
        id="professional-websites"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[0.52fr_0.48fr]">
              {/* CONTENT FIRST */}
              <div className="p-7 sm:p-8 lg:p-10 order-2 lg:order-1">
                <div className="flex items-center gap-3">
                  <span
                    className="h-[3px] w-9 rounded-full"
                    style={{ background: COLORS.blue }}
                  />

                  <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                    PROFESSIONAL WEBSITES
                  </div>
                </div>

                <h2 className="mt-4 max-w-[620px] text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                  Credible digital platforms for companies, schools and public
                  institutions.
                </h2>

                <p className="mt-5 text-[13px] leading-7 text-slate-500">
                  We create professional websites that communicate clearly,
                  build public confidence and make important information easy
                  to find. Each site is structured around its audience and the
                  actions that matter most.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {[
                    'Corporate websites',
                    'School and university websites',
                    'Government and institutional portals',
                    'NGO and development-sector websites',
                    'Applications and enquiries',
                    'News and document publishing',
                    'Search-engine foundations',
                    'Analytics and reporting',
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="rounded-[14px] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[11px] font-semibold text-slate-600"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-[18px] border border-slate-200 bg-[#F8FAFC] p-5">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                    OUR VIEW
                  </div>

                  <p className="mt-2 text-[15px] font-semibold leading-6 text-[#16243A]">
                    A professional website should earn trust before the first
                    conversation begins.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[11px] font-bold text-white"
                >
                  Build your website →
                </Link>
              </div>

              {/* IMAGE */}
              <div className="relative min-h-[500px] bg-slate-100 order-1 lg:order-2">
                <img
                  src="/human_female_founder.webp"
                  alt="Business leader representing professional website clients"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#16243A] shadow-sm">
                  02
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F1F35]/90 via-[#0F1F35]/25 to-transparent p-7 pt-24">
                  <div className="text-[9px] font-bold tracking-[0.17em] text-white/65">
                    CREDIBILITY • CLARITY • PERFORMANCE
                  </div>

                  <p className="mt-2 max-w-[430px] text-[18px] font-semibold leading-6 text-white">
                    Built to represent the organisation as seriously online as
                    it operates offline.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          03 POLITICAL PLATFORMS
      ========================================================== */}
      <section
        id="political-platforms"
        className="scroll-mt-24 max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16"
      >
        <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-[0.48fr_0.52fr]">
            {/* IMAGE */}
            <div className="relative min-h-[500px] bg-slate-100">
              <img
                src="/human_boardroom_main.webp"
                alt="Political strategy and campaign planning team"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F35]/88 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#16243A] shadow-sm">
                03
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="text-[9px] font-bold tracking-[0.17em] text-white/65">
                  CAMPAIGNS • LEADERSHIP • MOBILISATION
                </div>

                <blockquote className="mt-2 max-w-[460px] text-[20px] font-semibold leading-7 text-white">
                  “A campaign platform should turn attention into informed
                  participation.”
                </blockquote>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.violet }}
                />

                <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                  POLITICAL & CAMPAIGN PLATFORMS
                </div>
              </div>

              <h2 className="mt-4 max-w-[650px] text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Digital campaign platforms built to inform, mobilise and raise
                support.
              </h2>

              <p className="mt-5 text-[13px] leading-7 text-slate-500">
                We build professional websites and digital platforms for
                political candidates, elected leaders and political
                organisations. They can communicate policy positions, publish
                campaign updates, recruit volunteers, receive contributions
                and support merchandise sales.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                {[
                  'Candidate and campaign websites',
                  'Secure contribution journeys',
                  'Merchandise stores',
                  'Volunteer registration',
                  'Events and campaign schedules',
                  'Policy and manifesto publishing',
                  'Supporter databases',
                  'Contribution and sales reporting',
                ].map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[14px] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[11px] font-semibold text-slate-600"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-7 relative overflow-hidden rounded-[18px] border border-slate-200 bg-[#F8FAFC] p-5">
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{ background: COLORS.violet }}
                />

                <div className="text-[9px] font-bold tracking-[0.15em] text-slate-400">
                  COMPLIANCE MATTERS
                </div>

                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  Contribution, payment and reporting functionality is
                  configured around approved payment providers and applicable
                  legal requirements.
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[11px] font-bold text-white"
              >
                Discuss a campaign platform →
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* =========================================================
          04 MOBILE
      ========================================================== */}
      <section
        id="mobile-applications"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[0.52fr_0.48fr]">
              {/* CONTENT */}
              <div className="p-7 sm:p-8 lg:p-10 order-2 lg:order-1">
                <div className="flex items-center gap-3">
                  <span
                    className="h-[3px] w-9 rounded-full"
                    style={{ background: COLORS.orange }}
                  />

                  <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                    ANDROID & iOS APPLICATIONS
                  </div>
                </div>

                <h2 className="mt-4 max-w-[620px] text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                  Mobile applications designed for intuitive use and dependable
                  performance.
                </h2>

                <p className="mt-5 text-[13px] leading-7 text-slate-500">
                  We develop mobile applications for organisations that need to
                  serve customers, teams or communities through phones and
                  tablets. The product is designed around practical mobile
                  behaviour, not simply a smaller version of a website.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {[
                    'Android and iOS development',
                    'Customer and staff applications',
                    'Secure user accounts',
                    'Push notifications',
                    'M-Pesa and card payments',
                    'Maps and location services',
                    'Offline functionality',
                    'App-store deployment support',
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="rounded-[14px] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[11px] font-semibold text-slate-600"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-[18px] bg-[#0F1F35] p-5 text-white">
                  <div className="text-[9px] font-bold tracking-[0.15em] text-slate-400">
                    MOBILE FIRST MEANS
                  </div>

                  <p className="mt-2 text-[15px] font-semibold leading-6">
                    Fewer taps. Clearer journeys. Faster decisions.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[11px] font-bold text-white"
                >
                  Discuss your app →
                </Link>
              </div>

              {/* IMAGE */}
              <div className="relative min-h-[500px] bg-slate-100 order-1 lg:order-2">
                <img
                  src="/human_pitch_boardroom.webp"
                  alt="Team presenting a mobile application concept"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#16243A] shadow-sm">
                  04
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F1F35]/90 via-transparent to-transparent p-7 pt-24">
                  <div className="text-[9px] font-bold tracking-[0.17em] text-white/65">
                    ANDROID • iOS • CROSS-PLATFORM
                  </div>

                  <p className="mt-2 max-w-[430px] text-[18px] font-semibold leading-6 text-white">
                    Designed around the way people actually use mobile devices.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          CHOOSING THE RIGHT PRODUCT
      ========================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-12 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.magenta }}
              />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                NOT SURE WHAT YOU NEED?
              </div>
            </div>

            <h2 className="mt-4 text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.02em] text-[#16243A]">
              Start with the problem, not the product category.
            </h2>

            <p className="mt-4 max-w-[520px] text-[13px] leading-7 text-slate-500">
              You do not need to arrive knowing whether the answer is a
              website, portal, mobile application or custom platform. That is
              part of the discovery process.
            </p>

            <blockquote className="mt-6 border-l-[3px] border-[#D946EF] pl-5 text-[17px] font-semibold leading-7 text-[#16243A]">
              “Tell us what is difficult today. We will help define what should
              exist tomorrow.”
            </blockquote>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Need more enquiries?',
                answer: 'A stronger public website may be enough.',
                accent: COLORS.cyan,
              },
              {
                title: 'Manual workflow slowing you down?',
                answer: 'A custom web application may be the better investment.',
                accent: COLORS.blue,
              },
              {
                title: 'Users live on their phones?',
                answer: 'A mobile-first product may make more sense.',
                accent: COLORS.violet,
              },
              {
                title: 'Multiple systems need to connect?',
                answer:
                  'We can scope an integrated digital platform around the workflow.',
                accent: COLORS.orange,
              },
            ].map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[21px] border border-slate-200 bg-[#F8FAFC] p-6"
              >
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{ background: item.accent }}
                />

                <h3 className="text-[14px] font-bold text-[#16243A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICING / PROCESS STRIP
      ========================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/pricing"
              className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: COLORS.cyan }}
              />

              <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                COMMERCIAL CLARITY
              </div>

              <div className="mt-2 flex items-end justify-between gap-5">
                <div>
                  <h3 className="text-[18px] font-bold text-[#16243A]">
                    Understand our pricing.
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                    See starting points, project types and what affects scope.
                  </p>
                </div>

                <span className="text-[#18B8F2] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>

            <Link
              to="/process"
              className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: COLORS.violet }}
              />

              <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                HOW WE WORK
              </div>

              <div className="mt-2 flex items-end justify-between gap-5">
                <div>
                  <h3 className="text-[18px] font-bold text-[#16243A]">
                    See the complete process.
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                    Discovery, scope, design, development, testing and launch.
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

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0F1F35] text-white">
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-32 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 -bottom-40 h-96 w-96 rounded-full opacity-10 blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.7fr_0.3fr] gap-8 items-end">
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
                  HAVE A PROJECT IN MIND?
                </div>
              </div>

              <h2 className="mt-4 max-w-[850px] text-[31px] sm:text-[35px] lg:text-[40px] font-bold leading-[1.03] tracking-[-0.03em]">
                Tell us what the organisation needs to achieve.
                <br />
                We will help shape the right digital product.
              </h2>

              <p className="mt-5 max-w-[700px] text-[13px] leading-7 text-slate-300">
                Share your objectives, intended users and current challenges.
                We will help define the appropriate solution, scope and delivery
                approach.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[12px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Discuss your project →
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