import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      number: '01',
      eyebrow: 'WEB APPLICATION DEVELOPMENT',
      title:
        'Custom platforms that simplify operations and support growth.',
      description:
        'We develop secure, scalable web applications for organisations that need more than a conventional website. From customer portals and booking systems to internal dashboards and online marketplaces, every platform is built around a defined operational need.',
      image: '/prod-analytics.webp',
      alt: 'Custom web application and analytics dashboard',
      features: [
        'Customer and staff portals',
        'Booking and reservation systems',
        'Business dashboards',
        'Role-based access controls',
        'Online marketplaces',
        'Workflow automation',
        'Payment integrations',
        'Reporting and audit records',
      ],
      note:
        'Suitable for businesses, institutions, membership organisations, service providers and technology-led ventures.',
    },
    {
      number: '02',
      eyebrow: 'PROFESSIONAL WEBSITES',
      title:
        'Credible digital platforms for companies, schools and public institutions.',
      description:
        'We create professional websites that communicate clearly, build public confidence and make important information easy to find. Each website is designed for its audience, optimised for mobile devices and structured to support enquiries, applications, registrations or service access.',
      image: '/prod-corporate.webp',
      alt: 'Professional corporate and institutional website',
      features: [
        'Corporate websites',
        'School and university websites',
        'Government and institutional portals',
        'NGO and development-sector websites',
        'Online applications and enquiries',
        'News and document publishing',
        'Search-engine foundations',
        'Website analytics and reporting',
      ],
      note:
        'Designed for organisations that require credibility, accessibility, dependable performance and professional public communication.',
    },
    {
      number: '03',
      eyebrow: 'POLITICAL & CAMPAIGN PLATFORMS',
      title:
        'Digital campaign platforms built to inform, mobilise and raise support.',
      description:
        'We build professional websites and digital platforms for political candidates, elected leaders and political organisations. These platforms can communicate policy positions, publish campaign updates, recruit volunteers, receive contributions and sell branded merchandise.',
      image: '/kenya_campaign_strategy_briefing.png',
      alt: 'Kenyan political strategy team reviewing campaign and voter data',
      features: [
        'Candidate and campaign websites',
        'Secure online donation journeys',
        'Merchandise stores',
        'Volunteer registration',
        'Events and campaign schedules',
        'Policy and manifesto publishing',
        'Supporter databases',
        'Contribution and sales reporting',
      ],
      note:
        'Donation, payment and reporting features are configured according to approved payment providers and applicable legal requirements.',
    },
    {
      number: '04',
      eyebrow: 'ANDROID & iOS APPLICATIONS',
      title:
        'Mobile applications designed for intuitive use and dependable performance.',
      description:
        'We develop Android and iOS applications for businesses and organisations that need to serve customers, teams or communities through mobile devices. Applications can include payments, location services, notifications, secure user accounts and offline capabilities.',
      image: '/human_pitch_boardroom.webp',
      alt: 'Product team presenting an Android and iOS application',
      features: [
        'Android and iOS development',
        'Customer and staff applications',
        'Secure user accounts',
        'Push notifications',
        'M-Pesa and card payments',
        'Maps and location services',
        'Offline functionality',
        'App-store deployment support',
      ],
      note:
        'Built for usability, maintainability and future expansion across both major mobile platforms.',
    },
  ]

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-14 lg:pt-16 pb-16">
        <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
          OUR SERVICES
        </div>

        <h1 className="mt-4 text-[29px] sm:text-[32px] lg:text-[34px] xl:text-[36px] font-bold leading-[1.08] tracking-[-0.025em] text-slate-800 xl:whitespace-nowrap">
          Digital products built to solve real business problems.
        </h1>

        <div className="mt-10 grid lg:grid-cols-[0.57fr_0.43fr] gap-10 lg:gap-14 xl:gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="max-w-[720px]">
            {/* PHILOSOPHY */}
            <div className="rounded-[24px] bg-[#0F1F35] px-7 py-7 sm:px-8 sm:py-8 text-white">
              <div className="text-[9px] font-bold tracking-[0.19em] text-slate-400">
                OUR POINT OF VIEW
              </div>

              <p className="mt-4 max-w-[620px] text-[20px] sm:text-[22px] lg:text-[23px] font-semibold leading-[1.35] tracking-[-0.015em] text-white">
                Technology earns its place when it makes the business clearer,
                faster and easier to run.
              </p>

              <div className="mt-6 h-px w-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />

              <p className="mt-5 max-w-[600px] text-[12px] leading-6 text-slate-300">
                We design around the outcome first—then choose the technology,
                architecture and experience required to deliver it.
              </p>
            </div>

            {/* INTRODUCTION */}
            <div className="mt-8">
              <p className="text-[15px] sm:text-[16px] leading-8 text-slate-500">
                Sterlings Studio designs and develops professional websites,
                custom web applications and mobile products for businesses,
                schools, public institutions, political organisations and
                growing brands.
              </p>

              <p className="mt-4 text-[14px] leading-7 text-slate-500">
                Every project is shaped around its users, commercial objectives,
                security requirements and long-term growth—not simply how it
                looks on launch day.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-7 py-3.5 text-[12px] font-bold text-white transition-colors hover:bg-[#172C49]"
              >
                Discuss your project →
              </Link>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-[12px] font-bold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
              >
                View pricing
              </Link>
            </div>

            {/* DELIVERY PRINCIPLES */}
            <div className="mt-9 border-t border-slate-200 pt-6">
              <div className="grid grid-cols-3 gap-5 sm:gap-8">
                <div>
                  <div className="text-[9px] font-bold tracking-widest text-slate-400">
                    DESIGN
                  </div>

                  <div className="mt-1.5 text-[12px] font-semibold text-slate-700">
                    Purposeful
                  </div>
                </div>

                <div>
                  <div className="text-[9px] font-bold tracking-widest text-slate-400">
                    DEVELOPMENT
                  </div>

                  <div className="mt-1.5 text-[12px] font-semibold text-slate-700">
                    Scalable
                  </div>
                </div>

                <div>
                  <div className="text-[9px] font-bold tracking-widest text-slate-400">
                    DELIVERY
                  </div>

                  <div className="mt-1.5 text-[12px] font-semibold text-slate-700">
                    Dependable
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full">
            <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-[#F8FAFC]">
              <img
                src="/human_female_founder.webp"
                alt="Business leader discussing a digital project"
                className="block w-full h-auto object-contain"
              />
            </div>

            <div className="mt-4 rounded-[19px] border border-slate-200 bg-[#F8FAFC] px-5 py-4">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                    BUILT AROUND THE BUSINESS
                  </div>

                  <div className="mt-1.5 text-[12px] font-semibold text-slate-700">
                    Strategy first. Technology second.
                  </div>
                </div>

                <Link
                  to="/process"
                  className="shrink-0 text-[11px] font-bold text-[#0F1F35] underline underline-offset-4"
                >
                  Our process →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="border-y border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-7">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                PERFORMANCE MATTERS
              </div>

              <div className="mt-2 text-[16px] sm:text-[18px] font-bold text-slate-700">
                Websites that load in{' '}
                <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                  0.5s.
                </span>{' '}
                Apps that scale. Built to last.
              </div>
            </div>

            <Link
              to="/work"
              className="text-[11px] font-bold text-slate-700 underline underline-offset-4"
            >
              See what we build →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="mb-10">
          <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
            CAPABILITIES
          </div>

          <h2 className="mt-4 max-w-[680px] text-[27px] lg:text-[32px] font-bold tracking-[-0.02em] text-slate-800">
            What we can build for your organisation.
          </h2>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-[#F8FAFC]"
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1
                    ? 'lg:[&>*:first-child]:order-2'
                    : ''
                }`}
              >
                {/* IMAGE */}
                <div className="relative flex items-center justify-center overflow-hidden bg-[#EEF2F6]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="block w-full h-auto max-h-[520px] object-contain"
                  />

                  <div className="absolute top-5 left-5 flex h-10 min-w-10 items-center justify-center rounded-full border border-white/50 bg-white/90 px-3 text-[10px] font-extrabold tracking-widest text-[#0F1F35] shadow-sm backdrop-blur">
                    {service.number}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7 sm:p-8 lg:p-10 xl:p-12">
                  <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                    {service.eyebrow}
                  </div>

                  <h2 className="mt-4 text-[25px] lg:text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-slate-800">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-[14px] leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-[12px] leading-5 text-slate-600"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F1F35]" />

                        <span>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-slate-200 pt-5">
                    <p className="text-[11px] leading-5 text-slate-400">
                      {service.note}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center text-[12px] font-bold text-[#0F1F35] underline underline-offset-4"
                  >
                    Discuss this service →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRINCIPLE */}
      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-10 lg:gap-20">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                ONE PRINCIPLE
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[36px] font-bold leading-tight tracking-[-0.015em] text-slate-800">
                Technology should make the organisation work better.
              </h2>
            </div>

            <div>
              <p className="text-[16px] leading-8 text-slate-600">
                We do not begin with a framework, template or feature list. We
                begin by understanding what the organisation needs its digital
                product to accomplish.
              </p>

              <p className="mt-5 text-[14px] leading-7 text-slate-500">
                The right solution may be a focused company website, a complex
                operational platform, a mobile application or a combination of
                systems. Architecture follows the business requirement.
              </p>

              <Link
                to="/process"
                className="mt-7 inline-flex text-[12px] font-bold text-slate-700 underline underline-offset-4"
              >
                See our development process →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                HAVE A PROJECT IN MIND?
              </div>

              <h2 className="mt-4 max-w-[760px] text-[28px] lg:text-[36px] font-bold leading-tight tracking-[-0.015em] text-slate-100">
                Let us build the digital platform your organisation needs next.
              </h2>

              <p className="mt-5 max-w-[68ch] text-[14px] leading-7 text-slate-300">
                Tell us about your objectives, intended users and required
                features. We will review the project and recommend an
                appropriate solution, scope and delivery approach.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-[13px] font-bold text-[#0F1F35]"
            >
              Discuss your project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}