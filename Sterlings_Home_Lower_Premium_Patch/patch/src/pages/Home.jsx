import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function Home() {
  const services = [
    {
      number: '01',
      title: 'Professional Websites',
      description:
        'High-quality corporate and institutional websites designed around credibility, clarity, performance and business goals.',
      link: '/services',
      detail: 'Corporate • Schools • Government • NGOs',
      image: '/prod-corporate.webp',
      alt: 'Professional corporate website experience',
    },
    {
      number: '02',
      title: 'Web Applications',
      description:
        'Custom digital platforms that replace manual processes, connect teams and turn complex workflows into usable software.',
      link: '/services',
      detail: 'Portals • Dashboards • Marketplaces • Automation',
      image: '/prod-analytics.webp',
      alt: 'Custom analytics and web application platform',
    },
    {
      number: '03',
      title: 'Android & iOS Apps',
      description:
        'Purpose-built mobile applications for customers, teams and organisations, designed around how people actually use them.',
      link: '/services',
      detail: 'Android • iOS • Cross-platform',
      image: '/human_pitch_boardroom.webp',
      alt: 'Mobile application product presentation',
    },
    {
      number: '04',
      title: 'Political Platforms',
      description:
        'Professional campaign and leadership platforms supporting communication, supporters, donations, merchandise and mobilisation.',
      link: '/services',
      detail: 'Campaigns • Donations • Merchandise • Supporters',
      image: '/kenya_campaign_strategy_briefing.png',
      alt: 'Kenyan political campaign strategy platform',
    },
  ]

  const projects = [
    {
      name: 'Akashi Designs',
      category: 'ARCHITECTURE • DIGITAL COMMERCE',
      description:
        'A specialist architectural marketplace built around house-plan discovery, digital purchasing and secure product delivery.',
      image: '/human_cafe_laptop.webp',
      website: 'https://akashidesigns.com',
    },
    {
      name: 'The Alkebula School',
      category: 'EDUCATION TECHNOLOGY',
      description:
        'A connected education platform supporting parents, tutors, international curricula, applications and academic workflows.',
      image: '/human_team_collab.webp',
      website: 'https://alkebulaschool.com',
    },
    {
      name: 'Sunscape Car Rentals',
      category: 'TRANSPORT • BOOKINGS',
      description:
        'A booking-led vehicle rental website designed to help customers discover the right vehicle and move quickly towards enquiry.',
      image: '/human_founder_smile.webp',
      website: 'https://sunscape.co.ke',
    },
  ]

  const process = [
    {
      number: '01',
      title: 'Understand',
      description:
        'We begin with the business problem, audience, priorities and commercial objective.',
    },
    {
      number: '02',
      title: 'Structure',
      description:
        'We define the product, user journey, content, functionality and technical architecture.',
    },
    {
      number: '03',
      title: 'Build',
      description:
        'Design and development move together through focused, reviewable stages.',
    },
    {
      number: '04',
      title: 'Launch',
      description:
        'We test, refine, deploy and hand over a product built for real-world use.',
    },
  ]

  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Sterlings Studio | Websites that load in 0.5s. Apps that scale."
        description="Sterlings Studio builds fast, secure and scalable websites, web applications, mobile apps and digital platforms for businesses and organisations in Kenya and beyond."
        canonical="https://sterlingsstudio.com"
        ogImage="/sterling-share-preview.png"
      />

      {/* HERO — PRESERVED */}
      <section className="relative bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 lg:pt-14 pb-14 lg:pb-16">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 xl:gap-16 items-center">
            <div className="max-w-[650px]">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.17em] text-slate-400">
                  NAIROBI • BUILDING FOR AFRICA & BEYOND
                </span>
              </div>

              <h1 className="mt-6 max-w-[600px] text-[36px] sm:text-[40px] lg:text-[44px] xl:text-[46px] font-bold leading-[1.04] tracking-[-0.03em] text-slate-800">
                Digital products built for serious business.
              </h1>

              <p className="mt-6 max-w-[590px] text-[15px] sm:text-[16px] leading-7 text-slate-500">
                Sterlings Studio designs and develops professional websites,
                custom web applications and mobile products for organisations
                that need technology to do more than simply look good.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-7 py-3.5 text-[12px] font-bold text-white transition-colors hover:bg-[#172C49]"
                >
                  Start a project →
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-[12px] font-bold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
                >
                  Explore our work
                </Link>
              </div>

              <div className="mt-8 rounded-[20px] border border-slate-200 bg-[#F8FAFC] px-5 py-4">
                <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                  OUR PERFORMANCE STANDARD
                </div>

                <p className="mt-2 text-[14px] sm:text-[15px] font-bold leading-6 text-slate-700">
                  Websites that load in{' '}
                  <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                    0.5s.
                  </span>{' '}
                  Apps that scale. Built to last.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <div className="text-[9px] font-bold tracking-widest text-slate-400">
                      BASED IN
                    </div>
                    <div className="mt-1.5 text-[12px] font-semibold text-slate-700">
                      Nairobi, Kenya
                    </div>
                  </div>

                  <div>
                    <div className="text-[9px] font-bold tracking-widest text-slate-400">
                      SPECIALISING IN
                    </div>
                    <div className="mt-1.5 text-[12px] font-semibold text-slate-700">
                      Digital Products
                    </div>
                  </div>

                  <div>
                    <div className="text-[9px] font-bold tracking-widest text-slate-400">
                      WORKING WITH
                    </div>
                    <div className="mt-1.5 text-[12px] font-semibold text-slate-700">
                      Kenya & International
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="rounded-[28px] overflow-hidden border border-slate-200 bg-[#F8FAFC]">
                <img
                  src="/human_boardroom_main.webp"
                  alt="Sterlings Studio digital project collaboration"
                  className="block w-full h-auto object-contain"
                />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-[20px] border border-slate-200 bg-[#F8FAFC] px-5 py-4">
                <div>
                  <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                    OUR APPROACH
                  </div>
                  <p className="mt-1.5 text-[13px] leading-5 font-semibold text-slate-700">
                    Understand the business first. Build the technology around it.
                  </p>
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

      {/* POSITIONING — PRESERVED */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-10 lg:gap-20">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                WHAT WE BELIEVE
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold leading-tight tracking-[-0.02em] text-slate-800">
                Your website should be part of the business.
              </h2>
            </div>

            <div>
              <p className="text-[16px] lg:text-[17px] leading-8 text-slate-600">
                The best digital products do not sit on the edge of an
                organisation. They help customers buy, teams work, information
                move and businesses operate better.
              </p>

              <p className="mt-5 text-[14px] leading-7 text-slate-500">
                That is why we approach projects as business systems, not
                collections of pages. Design, technology, content and user
                experience have to work together.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex text-[12px] font-bold text-slate-700 underline underline-offset-4"
              >
                More about Sterlings Studio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD — NEW MAGAZINE LAYOUT */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-8 items-end">
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              WHAT WE BUILD
            </div>

            <h2 className="mt-4 max-w-[760px] text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-800">
              Technology shaped around how your organisation actually works.
            </h2>
          </div>

          <div className="lg:text-right">
            <Link
              to="/services"
              className="text-[12px] font-bold text-slate-700 underline underline-offset-4"
            >
              Explore all services →
            </Link>
          </div>
        </div>

        <div className="mt-9 grid lg:grid-cols-12 gap-5">
          {services.map((service, index) => {
            const spans = [
              'lg:col-span-7',
              'lg:col-span-5',
              'lg:col-span-5',
              'lg:col-span-7',
            ]

            return (
              <Link
                key={service.number}
                to={service.link}
                className={`group overflow-hidden rounded-[26px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${spans[index]}`}
              >
                <div className="relative overflow-hidden bg-[#EEF2F6]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="block w-full h-[235px] sm:h-[270px] lg:h-[300px] object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F35]/40 via-transparent to-transparent" />

                  <div className="absolute top-5 left-5 rounded-full border border-white/40 bg-white/90 px-3 py-2 text-[9px] font-bold tracking-widest text-[#0F1F35] backdrop-blur">
                    {service.number}
                  </div>

                  <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F1F35] shadow-sm transition-transform group-hover:translate-x-1">
                    →
                  </div>
                </div>

                <div className="p-6 lg:p-7">
                  <h3 className="text-[18px] lg:text-[20px] font-bold text-slate-800">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[58ch] text-[13px] leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4 text-[9px] font-bold tracking-[0.12em] text-slate-400">
                    {service.detail}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* SELECTED WORK — NEW LIGHT MAGAZINE LAYOUT */}
      <section className="border-y border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.58fr_0.42fr] gap-8 items-end">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                SELECTED LIVE WORK
              </div>

              <h2 className="mt-4 max-w-[760px] text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-800">
                Real platforms. Different industries. One standard of thinking.
              </h2>
            </div>

            <div className="lg:text-right">
              <p className="text-[13px] leading-6 text-slate-500 lg:ml-auto max-w-[520px]">
                Architecture, education and transport — each shaped around a
                different customer journey and commercial requirement.
              </p>

              <Link
                to="/work"
                className="mt-3 inline-flex text-[11px] font-bold text-slate-700 underline underline-offset-4"
              >
                View all work →
              </Link>
            </div>
          </div>

          <div className="mt-9 grid lg:grid-cols-[1.22fr_0.78fr] gap-5">
            {/* FEATURED PROJECT */}
            <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={`${projects[0].name} project`}
                  className="block w-full h-[330px] lg:h-[430px] object-cover"
                />

                <div className="absolute top-5 left-5 rounded-full border border-white/40 bg-white/90 px-3 py-2 text-[9px] font-bold tracking-[0.14em] text-[#0F1F35] backdrop-blur">
                  FEATURED LIVE PROJECT
                </div>
              </div>

              <div className="p-7 lg:p-8">
                <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                  {projects[0].category}
                </div>

                <h3 className="mt-3 text-[23px] lg:text-[26px] font-bold text-slate-800">
                  {projects[0].name}
                </h3>

                <p className="mt-3 max-w-[66ch] text-[13px] leading-6 text-slate-500">
                  {projects[0].description}
                </p>

                <a
                  href={projects[0].website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-full bg-[#0F1F35] px-5 py-3 text-[11px] font-bold text-white"
                >
                  Visit live platform ↗
                </a>
              </div>
            </article>

            {/* RIGHT STACK */}
            <div className="grid gap-5">
              {projects.slice(1).map((project) => (
                <article
                  key={project.name}
                  className="grid sm:grid-cols-[0.43fr_0.57fr] overflow-hidden rounded-[24px] border border-slate-200 bg-white"
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} project`}
                      className="block w-full h-[220px] sm:h-full min-h-[220px] object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-[9px] font-bold tracking-[0.15em] text-slate-400">
                      {project.category}
                    </div>

                    <h3 className="mt-3 text-[18px] font-bold text-slate-800">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-[12px] leading-6 text-slate-500">
                      {project.description}
                    </p>

                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-[10px] font-bold text-slate-800 underline underline-offset-4"
                    >
                      Visit live platform ↗
                    </a>
                  </div>
                </article>
              ))}

              <div className="rounded-[24px] bg-[#0F1F35] p-6 text-white">
                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  THE COMMON THREAD
                </div>

                <p className="mt-3 text-[18px] font-semibold leading-7">
                  Different businesses need different products. The discipline
                  is understanding what matters before writing the code.
                </p>

                <Link
                  to="/work"
                  className="mt-5 inline-flex text-[10px] font-bold underline underline-offset-4"
                >
                  Explore the portfolio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STERLINGS */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-[24px] border bg-[#F8FAFC]">
              <img
                src="/human_female_founder.webp"
                alt="Professional digital project planning"
                className="block w-full h-[340px] object-cover"
              />
            </div>

            <div className="grid gap-4 pt-8">
              <div className="overflow-hidden rounded-[22px] border">
                <img
                  src="/human_team_collab.webp"
                  alt="Collaborative product planning"
                  className="block w-full h-[180px] object-cover"
                />
              </div>

              <div className="rounded-[22px] bg-[#0F1F35] p-5 text-white">
                <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                  WHY STERLINGS
                </div>

                <p className="mt-3 text-[16px] font-semibold leading-6">
                  Small enough to care. Serious enough to deliver.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              HOW WE PARTNER
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-800">
              Clear thinking, custom execution and a product you can own.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-slate-500">
              Clients should not have to translate their business into developer
              language. Our role is to understand what needs to happen, design
              the right solution and communicate clearly throughout the build.
            </p>

            <div className="mt-7 grid sm:grid-cols-3 gap-3">
              {[
                ['01', 'Business first'],
                ['02', 'Custom where it matters'],
                ['03', 'Built for ownership'],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="rounded-[18px] border border-slate-200 bg-[#F8FAFC] p-4"
                >
                  <div className="text-[9px] font-bold tracking-widest text-slate-400">
                    {number}
                  </div>
                  <div className="mt-2 text-[12px] font-semibold text-slate-700">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/process"
              className="mt-7 inline-flex rounded-full border border-slate-300 px-6 py-3 text-[12px] font-bold text-slate-700 hover:border-slate-400"
            >
              See how we work →
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr] gap-10">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                FROM IDEA TO LAUNCH
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-800">
                A clear process. No mystery.
              </h2>

              <p className="mt-4 text-[14px] leading-7 text-slate-500">
                Good digital work comes from clear decisions, disciplined
                execution and continuous communication.
              </p>

              <Link
                to="/process"
                className="mt-6 inline-flex text-[11px] font-bold underline underline-offset-4"
              >
                Explore our process →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[20px] border border-slate-200 bg-white p-5"
                >
                  <div className="text-[9px] font-bold tracking-widest text-slate-400">
                    {step.number}
                  </div>

                  <h3 className="mt-3 text-[17px] font-bold text-slate-800">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-slate-500">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[0.48fr_0.52fr] gap-8 lg:gap-12 items-center">
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              IDEAS & INSIGHTS
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-800">
              We share the thinking behind the work.
            </h2>

            <p className="mt-4 text-[14px] leading-7 text-slate-500">
              Explore practical thinking on websites, web applications, M-Pesa,
              digital commerce, education technology, performance and building
              better online businesses.
            </p>

            <Link
              to="/blog"
              className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[12px] font-bold text-white"
            >
              Visit the journal →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-[24px] border">
              <img
                src="/prod-analytics.webp"
                alt="Digital product strategy and analytics"
                className="block w-full h-[300px] object-cover"
              />
            </div>

            <div className="grid gap-4 pt-8">
              <div className="overflow-hidden rounded-[22px] border">
                <img
                  src="/prod-fintech.webp"
                  alt="Fintech digital product"
                  className="block w-full h-[145px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[22px] border">
                <img
                  src="/prod-corporate.webp"
                  alt="Corporate digital experience"
                  className="block w-full h-[145px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="border-t">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <div className="rounded-[26px] bg-[#F8FAFC] border px-7 py-8 lg:px-10 lg:py-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                BEFORE WE START
              </div>

              <h2 className="mt-3 text-[24px] lg:text-[28px] font-bold tracking-[-0.02em] text-slate-800">
                Questions about cost, timelines, ownership or support?
              </h2>

              <p className="mt-3 text-[13px] leading-6 text-slate-500 max-w-[700px]">
                We have answered the questions clients most commonly ask before
                starting a website, application or digital-platform project.
              </p>
            </div>

            <Link
              to="/faq"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white border border-slate-300 px-6 py-3 text-[12px] font-bold text-slate-700"
            >
              Read the FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.7fr_0.3fr] gap-8 items-end">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                YOUR NEXT DIGITAL PRODUCT
              </div>

              <h2 className="mt-4 text-[29px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.02em] max-w-[820px]">
                Bring us the business problem. We’ll help build the solution.
              </h2>

              <p className="mt-5 text-[14px] leading-7 text-slate-300 max-w-[680px]">
                Whether you need a professional company website, operational
                platform, mobile application or something that has not yet found
                a neat category, start with the conversation.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[13px] font-bold text-[#0F1F35]"
              >
                Start a project →
              </Link>

              <div className="mt-4 text-[11px] text-slate-400">
                Nairobi • Kenya • International
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
