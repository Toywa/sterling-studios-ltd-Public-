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
    },
    {
      number: '02',
      title: 'Web Applications',
      description:
        'Custom digital platforms that replace manual processes, connect teams and turn complex workflows into usable software.',
      link: '/services',
      detail: 'Portals • Dashboards • Marketplaces • Automation',
    },
    {
      number: '03',
      title: 'Android & iOS Apps',
      description:
        'Purpose-built mobile applications for customers, teams and organisations, designed around how people actually use them.',
      link: '/services',
      detail: 'Android • iOS • Cross-platform',
    },
    {
      number: '04',
      title: 'Political Platforms',
      description:
        'Professional campaign and leadership platforms supporting communication, supporters, donations, merchandise and mobilisation.',
      link: '/services',
      detail: 'Campaigns • Donations • Merchandise • Supporters',
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

      {/* HERO */}
      <section className="relative bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 lg:pt-14 pb-14 lg:pb-16">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 xl:gap-16 items-center">
            {/* LEFT */}
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

              {/* PERFORMANCE */}
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

            {/* RIGHT */}
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

      {/* POSITIONING */}
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

      {/* SERVICES */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              WHAT WE BUILD
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.02em] max-w-[760px] text-slate-800">
              Technology shaped around how your organisation actually works.
            </h2>
          </div>

          <Link
            to="/services"
            className="text-[12px] font-bold underline underline-offset-4 whitespace-nowrap"
          >
            Explore all services →
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {services.map((service) => (
            <Link
              key={service.number}
              to={service.link}
              className="group rounded-[26px] border border-slate-200 p-7 lg:p-8 transition-all hover:border-slate-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-[10px] font-bold tracking-widest text-slate-400">
                  {service.number}
                </span>

                <span className="text-[18px] text-slate-300 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-8 text-[20px] font-bold tracking-tight text-slate-800">
                {service.title}
              </h3>

              <p className="mt-4 text-[14px] leading-7 text-slate-500 max-w-[56ch]">
                {service.description}
              </p>

              <div className="mt-7 pt-5 border-t border-slate-100 text-[10px] font-bold tracking-wider text-slate-400">
                {service.detail}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[0.75fr_0.25fr] gap-8 items-end">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                SELECTED LIVE WORK
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.02em] max-w-[820px]">
                Real platforms built around real organisations.
              </h2>

              <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-300">
                Different industries. Different users. Different commercial
                requirements. The common thread is building the right digital
                product for the business.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/work"
                className="inline-flex text-[12px] font-bold text-white underline underline-offset-4"
              >
                View all work →
              </Link>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-[26px] overflow-hidden border border-white/10 bg-white/[0.04]"
              >
                <div className="overflow-hidden bg-white">
                  <img
                    src={project.image}
                    alt={`${project.name} project`}
                    className="block w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                      {project.category}
                    </div>

                    <span className="rounded-full border border-white/15 px-2.5 py-1 text-[9px] font-bold text-slate-300">
                      LIVE
                    </span>
                  </div>

                  <h3 className="mt-4 text-[19px] font-bold">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-slate-300">
                    {project.description}
                  </p>

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex text-[12px] font-bold text-white underline underline-offset-4"
                  >
                    Visit live platform ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STERLINGS */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-[28px] overflow-hidden border bg-[#F8FAFC]">
            <img
              src="/human_female_founder.webp"
              alt="Professional digital project planning"
              className="block w-full h-auto object-contain"
            />
          </div>

          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              WHY STERLINGS
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-800">
              Small enough to care. Serious enough to deliver.
            </h2>

            <p className="mt-6 text-[14px] leading-7 text-slate-500">
              Clients should not have to translate their business into
              developer language. Our role is to understand what needs to
              happen, design the right solution and communicate clearly
              throughout the build.
            </p>

            <div className="mt-8 space-y-6">
              <div className="border-t pt-5">
                <h3 className="text-[15px] font-bold text-slate-800">
                  Business before decoration
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-slate-500">
                  We begin with objectives and user behaviour before choosing
                  visual treatments or technology.
                </p>
              </div>

              <div className="border-t pt-5">
                <h3 className="text-[15px] font-bold text-slate-800">
                  Custom where it matters
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-slate-500">
                  The product is structured around your workflow instead of
                  forcing your organisation into a generic template.
                </p>
              </div>

              <div className="border-t pt-5">
                <h3 className="text-[15px] font-bold text-slate-800">
                  Built for ownership
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-slate-500">
                  We favour maintainable foundations, clear handover and
                  sensible long-term architecture.
                </p>
              </div>
            </div>

            <Link
              to="/process"
              className="mt-8 inline-flex rounded-full border border-slate-300 px-6 py-3 text-[12px] font-bold hover:border-slate-400"
            >
              See how we work →
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-[760px]">
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              FROM IDEA TO LAUNCH
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-800">
              A clear process. No mystery.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-slate-500">
              Good digital work comes from clear decisions, disciplined
              execution and continuous communication.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.number}
                className={`py-6 lg:px-6 ${
                  index !== 0 ? 'lg:border-l border-slate-200' : ''
                }`}
              >
                <div className="text-[10px] font-bold tracking-widest text-slate-400">
                  {step.number}
                </div>

                <h3 className="mt-5 text-[18px] font-bold text-slate-800">
                  {step.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/process"
              className="inline-flex text-[12px] font-bold underline underline-offset-4"
            >
              Explore our complete process →
            </Link>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[0.55fr_0.45fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              IDEAS & INSIGHTS
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-800">
              We share the thinking behind the work.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-slate-500">
              Explore practical thinking on websites, web applications,
              M-Pesa, digital commerce, education technology, performance and
              building better online businesses.
            </p>

            <Link
              to="/blog"
              className="mt-7 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[12px] font-bold text-white hover:bg-[#172C49]"
            >
              Visit the journal →
            </Link>
          </div>

          <div className="rounded-[26px] overflow-hidden border bg-[#F8FAFC]">
            <img
              src="/prod-analytics.webp"
              alt="Digital product strategy and analytics"
              className="block w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="border-t">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14">
          <div className="rounded-[28px] bg-[#F8FAFC] border px-7 py-9 lg:px-12 lg:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                BEFORE WE START
              </div>

              <h2 className="mt-3 text-[25px] lg:text-[29px] font-bold tracking-[-0.02em] text-slate-800">
                Questions about cost, timelines, ownership or support?
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-slate-500 max-w-[700px]">
                We have answered the questions clients most commonly ask before
                starting a website, application or digital-platform project.
              </p>
            </div>

            <Link
              to="/faq"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-[12px] font-bold hover:border-slate-400"
            >
              Read the FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[0.72fr_0.28fr] gap-10 items-end">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                YOUR NEXT DIGITAL PRODUCT
              </div>

              <h2 className="mt-4 text-[30px] sm:text-[32px] lg:text-[36px] font-bold leading-[1.08] tracking-[-0.02em] max-w-[820px]">
                Bring us the business problem. We’ll help build the solution.
              </h2>

              <p className="mt-6 text-[14px] leading-7 text-slate-300 max-w-[680px]">
                Whether you need a professional company website, operational
                platform, mobile application or something that has not yet
                found a neat category, start with the conversation.
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