import { useState } from 'react'
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

export default function FAQ() {
  const [openId, setOpenId] = useState('general-1')

  const sections = [
    {
      id: 'general',
      label: '01',
      title: 'Sterlings Studio',
      intro:
        'What we build, who we work with and how our services are structured.',
      accent: COLORS.cyan,
      questions: [
        {
          id: 'general-1',
          question: 'What does Sterlings Studio build?',
          answer:
            'Sterlings Studio designs and develops professional websites, custom web applications, Android apps, iOS apps and connected digital platforms. These capabilities can be combined to create management systems, marketplaces, e-commerce platforms, booking systems, education technology, mobility products and other custom business solutions.',
        },
        {
          id: 'general-2',
          question: 'What is the difference between Services and Solutions?',
          answer:
            'Services describe how we build: websites, web applications, Android apps, iOS apps and connected platforms. Solutions describe what those capabilities can become for a business, such as a school management system, hospital system, SACCO platform, fleet application, marketplace or delivery platform.',
        },
        {
          id: 'general-3',
          question: 'Who does Sterlings Studio work with?',
          answer:
            'We work with businesses, schools, institutions, NGOs, professional organisations, entrepreneurs and organisations developing new digital products. A project can range from a focused professional website to a multi-application technology platform.',
        },
        {
          id: 'general-4',
          question: 'Do you work with clients outside Kenya?',
          answer:
            'Yes. Sterlings Studio is based in Nairobi and can work remotely with organisations across Africa and international markets. Meetings, demonstrations, reviews, approvals and delivery can be managed through video calls, email, WhatsApp and other agreed collaboration channels.',
        },
        {
          id: 'general-5',
          question: 'Do you use WordPress or website templates?',
          answer:
            'Our primary focus is custom development rather than forcing important projects into generic themes or page-builder templates. The technology used is selected according to the project requirements, performance needs, integrations, maintainability and expected future growth.',
        },
        {
          id: 'general-6',
          question: 'Can you redesign an existing website or platform?',
          answer:
            'Yes. We can review an existing product, identify weaknesses in content, structure, usability, performance or technology, and rebuild it into a stronger digital experience. Where required, we can also plan content migration, redirects and search-engine continuity.',
        },
      ],
    },

    {
      id: 'solutions',
      label: '02',
      title: 'Platforms & Solutions',
      intro:
        'Questions about management systems, marketplaces, mobility and complex digital products.',
      accent: COLORS.blue,
      questions: [
        {
          id: 'solutions-1',
          question: 'Can you build management systems for organisations?',
          answer:
            'Yes. We can design custom systems around real organisational workflows. Examples include school management systems, hospital and clinic systems, employee management platforms, pharmacy systems, SACCO platforms and fleet-management applications.',
        },
        {
          id: 'solutions-2',
          question: 'Can you build something similar in concept to Uber or Glovo?',
          answer:
            'Yes. Mobility and delivery businesses normally require several connected products rather than one application. A project may include a customer app, driver or rider app, partner portal, administrative control centre, payments, maps, notifications, APIs and a shared database. The business model, branding and customer experience remain specific to your own product.',
        },
        {
          id: 'solutions-3',
          question: 'Can you build an online marketplace?',
          answer:
            'Yes. Marketplace platforms may connect buyers with sellers, service providers, property owners, merchants or other participants. Depending on the product, functionality can include listings, customer accounts, vendor dashboards, payments, commissions, bookings, fulfilment, ratings and marketplace administration.',
        },
        {
          id: 'solutions-4',
          question: 'Can you build e-commerce platforms?',
          answer:
            'Yes. E-commerce projects can include product catalogues, inventory, customer accounts, M-Pesa and card checkout, promotions, loyalty programmes, delivery zones, order management and administrative tools. Regulated products must also include any legally required controls such as appropriate age-verification processes.',
        },
        {
          id: 'solutions-5',
          question: 'Can you build platforms for political candidates or leaders?',
          answer:
            'Yes. Political and leadership platforms can include candidate information, manifestos, policy publishing, campaign news, events, volunteer registration, supporter communication, merchandise and other approved functionality. Any contribution or fundraising functionality must comply with applicable law and payment-provider requirements.',
        },
        {
          id: 'solutions-6',
          question: 'What if our idea does not fit one of the solutions on the website?',
          answer:
            'That is completely fine. The examples on our Solutions page are intended to show what is possible, not to limit what can be built. Tell us what users need to accomplish, what is difficult today and what the business wants to improve. We can then determine the appropriate product architecture.',
        },
      ],
    },

    {
      id: 'pricing',
      label: '03',
      title: 'Pricing & Delivery',
      intro:
        'Investment, schedules, quotations, deposits and project scope.',
      accent: COLORS.violet,
      questions: [
        {
          id: 'pricing-1',
          question: 'How much does a project cost?',
          answer:
            'Professional websites currently start from KES 180,000, custom web applications from KES 450,000 and Android plus iOS application development from KES 600,000. Larger connected platforms are quoted after product discovery because their architecture can involve several applications, integrations and operational systems.',
        },
        {
          id: 'pricing-2',
          question: 'Why do you publish starting prices rather than fixed prices?',
          answer:
            'Two projects with similar names can require completely different levels of design, user permissions, data management, integrations, security, business logic and testing. Starting prices help with early budgeting, while the final quotation reflects the actual work required.',
        },
        {
          id: 'pricing-3',
          question: 'How long does development take?',
          answer:
            'A professional website commonly requires about two to four weeks. Custom web applications may require approximately four to ten weeks, while Android and iOS products commonly require eight to sixteen weeks. Larger connected platforms are scheduled after scope, integrations and product architecture are understood.',
        },
        {
          id: 'pricing-4',
          question: 'What determines the final quotation?',
          answer:
            'Important factors include project scope, number of users and roles, workflows, design requirements, content, databases, payments, external APIs, mobile applications, security requirements, migrations, testing and delivery deadlines.',
        },
        {
          id: 'pricing-5',
          question: 'What is required before a project can begin?',
          answer:
            'We normally require an approved project scope, agreed commercial terms, the applicable deposit and the materials required for the first stage. Depending on the project, this may include content, branding, photographs, system requirements, domain information or access to relevant third-party services.',
        },
        {
          id: 'pricing-6',
          question: 'What happens if we request additional features during development?',
          answer:
            'Projects can evolve. Where a new requirement materially changes the agreed scope, complexity, integrations or delivery schedule, we assess the impact first. Any additional cost or timeline implication is discussed before the additional work proceeds.',
        },
        {
          id: 'pricing-7',
          question: 'How do we request a quotation?',
          answer:
            'Send us a project enquiry describing your organisation, intended users, business objective, important features, preferred timeline and any available budget guidance. We will review the requirement and recommend the appropriate next step, which may be a consultation, discovery session or formal proposal.',
        },
      ],
    },

    {
      id: 'technology',
      label: '04',
      title: 'Technology & Payments',
      intro:
        'Hosting, infrastructure, integrations, payments, performance and security.',
      accent: COLORS.magenta,
      questions: [
        {
          id: 'technology-1',
          question: 'Can you integrate M-Pesa and card payments?',
          answer:
            'Yes. We can integrate M-Pesa through suitable approved providers or Safaricom Daraja where appropriate, together with card-payment gateways such as Paystack, Stripe or other suitable providers. The final choice depends on the business location, currencies, customer market, provider availability and compliance requirements.',
        },
        {
          id: 'technology-2',
          question: 'Do you provide hosting and domain registration?',
          answer:
            'We can assist with domain configuration, hosting deployment, business email setup and production infrastructure. Domains, hosting plans, messaging services and other third-party subscriptions are normally identified separately because they are ongoing services supplied by external providers.',
        },
        {
          id: 'technology-3',
          question: 'Can you integrate other software or APIs?',
          answer:
            'Yes. Depending on the project, integrations may include payments, email, SMS, maps, analytics, accounting systems, external databases, authentication providers and other APIs. We review the technical documentation and access requirements before confirming an integration.',
        },
        {
          id: 'technology-4',
          question: 'Do you build for both desktop and mobile devices?',
          answer:
            'Yes. Websites and web applications are designed responsively for relevant screen sizes. Where the product requires dedicated mobile functionality, we can also develop Android and iOS applications connected to the wider platform.',
        },
        {
          id: 'technology-5',
          question: 'How do you approach performance?',
          answer:
            'Performance is considered during architecture, interface design, development, asset handling and deployment rather than treated as a final cosmetic optimisation. The exact performance characteristics still depend on the product, third-party services, content and hosting environment.',
        },
        {
          id: 'technology-6',
          question: 'How do you protect confidential project information?',
          answer:
            'Project information is shared only with the people required to assess and deliver the work. Specific confidentiality requirements can be documented before sensitive information is exchanged. Passwords, payment credentials and production secrets should not be sent through ordinary enquiry forms.',
        },
      ],
    },

    {
      id: 'ownership',
      label: '05',
      title: 'Ownership & Support',
      intro:
        'What happens at handover, after launch and as the product grows.',
      accent: COLORS.orange,
      questions: [
        {
          id: 'ownership-1',
          question: 'Will we own the completed website or application?',
          answer:
            'Ownership, administrative access and handover terms are defined in the project proposal. After the applicable project obligations are completed, clients receive the agreed access to their domain, hosting environment, administration tools and essential project assets.',
        },
        {
          id: 'ownership-2',
          question: 'Will we be able to manage the product ourselves?',
          answer:
            'Where administration is part of the agreed scope, the product is built with appropriate tools for managing content, users, records, products, bookings or other operational information. The exact level of administration depends on the product being developed.',
        },
        {
          id: 'ownership-3',
          question: 'Do you provide maintenance after launch?',
          answer:
            'Yes. Ongoing support can include technical maintenance, updates, backups, performance monitoring, analytics, content changes and additional development. The appropriate support arrangement depends on the product and the level of assistance required.',
        },
        {
          id: 'ownership-4',
          question: 'Can the platform be expanded later?',
          answer:
            'Yes, where the underlying architecture supports the proposed expansion. We deliberately consider maintainability and future development during the initial build so that sensible new functionality can be introduced as the organisation grows.',
        },
        {
          id: 'ownership-5',
          question: 'Are third-party accounts created in our organisation’s name?',
          answer:
            'Where practical and appropriate, important third-party services such as domains, hosting, payment providers, app-store accounts or other operational accounts should remain under the organisation’s control. The exact setup depends on each provider and project arrangement.',
        },
      ],
    },
  ]

  const toggleQuestion = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <div
      id="faq"
      className="scroll-mt-24 overflow-hidden bg-white text-slate-900"
    >
      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[0.6fr_0.4fr] gap-8 lg:gap-10 items-center">
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
                  FREQUENTLY ASKED QUESTIONS
                </div>
              </div>

              <h1 className="mt-5 max-w-[830px] text-[35px] sm:text-[40px] lg:text-[45px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                Clear answers before you commit to a project.
              </h1>

              <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-500">
                Understand what Sterlings Studio builds, how projects are
                priced, how long development takes, what happens at handover
                and how more complex digital products are approached.
              </p>

              <p className="mt-3 max-w-[720px] text-[13px] leading-7 text-slate-500">
                Every project is different, but the principles around scope,
                communication, ownership and professional delivery should be
                clear before work begins.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5"
                >
                  Ask about your project →
                </Link>

                <Link
                  to="/pricing"
                  className="inline-flex rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-[#16243A]"
                >
                  View pricing
                </Link>
              </div>
            </div>

            {/* QUICK ANSWER CARD */}
            <div className="overflow-hidden rounded-[27px] border border-slate-200 bg-[#F8FAFC]">
              <div
                className="h-[4px]"
                style={{
                  background:
                    'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                }}
              />

              <div className="p-7">
                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  THE SHORT VERSION
                </div>

                <blockquote className="mt-4 text-[21px] font-semibold leading-7 text-[#16243A]">
                  “Start with what the business needs to accomplish. The
                  technology comes after.”
                </blockquote>

                <div className="mt-6 grid grid-cols-2 gap-2.5">
                  {[
                    ['WEBSITES', COLORS.cyan],
                    ['WEB APPS', COLORS.blue],
                    ['ANDROID', COLORS.violet],
                    ['iOS', COLORS.magenta],
                    ['SYSTEMS', COLORS.orange],
                    ['PLATFORMS', COLORS.cyan],
                  ].map(([label, accent]) => (
                    <div
                      key={label}
                      className="rounded-[13px] border border-slate-200 bg-white px-3 py-2.5 text-[9px] font-bold text-slate-600"
                    >
                      <span
                        className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
                        style={{ background: accent }}
                      />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FAQ DIRECTORY
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
          <div className="text-[8px] font-bold tracking-[0.17em] text-slate-400">
            JUMP TO A TOPIC
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#faq-${section.id}`}
                className="group relative overflow-hidden rounded-[17px] border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: section.accent }}
                />

                <div
                  className="text-[8px] font-bold"
                  style={{ color: section.accent }}
                >
                  {section.label}
                </div>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <div className="text-[10px] font-bold text-[#16243A]">
                    {section.title}
                  </div>

                  <span
                    className="text-[9px] transition group-hover:translate-y-1"
                    style={{ color: section.accent }}
                  >
                    ↓
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FAQ SECTIONS
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid gap-12 lg:gap-14">
          {sections.map((section) => (
            <section
              key={section.id}
              id={`faq-${section.id}`}
              className="scroll-mt-24"
            >
              <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-7 lg:gap-10 items-start">
                {/* SECTION INTRO */}
                <div className="lg:sticky lg:top-[105px]">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-[3px] w-9 rounded-full"
                      style={{ background: section.accent }}
                    />

                    <div
                      className="text-[9px] font-bold tracking-[0.16em]"
                      style={{ color: section.accent }}
                    >
                      {section.label}
                    </div>
                  </div>

                  <h2 className="mt-4 text-[25px] lg:text-[29px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                    {section.title}
                  </h2>

                  <p className="mt-3 max-w-[390px] text-[11px] leading-6 text-slate-500">
                    {section.intro}
                  </p>
                </div>

                {/* ACCORDION */}
                <div className="grid gap-3">
                  {section.questions.map((faq) => {
                    const isOpen = openId === faq.id
                    const answerId = `faq-answer-${faq.id}`

                    return (
                      <article
                        key={faq.id}
                        className={`relative overflow-hidden rounded-[20px] border bg-white transition ${
                          isOpen
                            ? 'border-slate-300 shadow-[0_12px_35px_rgba(15,31,53,0.05)]'
                            : 'border-slate-200'
                        }`}
                      >
                        <div
                          className={`absolute inset-y-0 left-0 w-[3px] transition-opacity ${
                            isOpen ? 'opacity-100' : 'opacity-40'
                          }`}
                          style={{ background: section.accent }}
                        />

                        <button
                          type="button"
                          onClick={() => toggleQuestion(faq.id)}
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          className="flex w-full items-center justify-between gap-5 px-5 py-5 sm:px-6 text-left"
                        >
                          <span
                            className={`text-[13px] sm:text-[14px] font-bold leading-6 ${
                              isOpen
                                ? 'text-[#16243A]'
                                : 'text-slate-700'
                            }`}
                          >
                            {faq.question}
                          </span>

                          <span
                            aria-hidden="true"
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[16px] font-medium transition ${
                              isOpen
                                ? 'border-[#0F1F35] bg-[#0F1F35] text-white'
                                : 'border-slate-200 bg-[#F8FAFC] text-slate-600'
                            }`}
                          >
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>

                        {isOpen && (
                          <div
                            id={answerId}
                            className="border-t border-slate-100 px-5 py-5 sm:px-6"
                          >
                            <p className="max-w-[78ch] text-[12px] leading-6 text-slate-500">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </article>
                    )
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* ======================================================
          DECISION GUIDE
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-12">
          <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.violet }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  NOT SURE WHAT YOU NEED?
                </div>
              </div>

              <h2 className="mt-4 text-[27px] lg:text-[31px] font-bold leading-[1.08] text-[#16243A]">
                Start with the business problem.
              </h2>

              <p className="mt-4 text-[11px] leading-6 text-slate-500">
                You do not need to arrive with the technical architecture
                already decided.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  question: 'Need credibility or customer enquiries?',
                  answer: 'Start with a professional website.',
                  link: '/services#websites',
                  accent: COLORS.cyan,
                },
                {
                  question: 'Need users to log in and do something?',
                  answer: 'You probably need a web application.',
                  link: '/services#web-applications',
                  accent: COLORS.blue,
                },
                {
                  question: 'Need customers or staff on phones?',
                  answer: 'Consider Android and iOS applications.',
                  link: '/services#android-apps',
                  accent: COLORS.violet,
                },
                {
                  question: 'Need several apps working together?',
                  answer: 'You may need a connected digital platform.',
                  link: '/services#connected-platforms',
                  accent: COLORS.orange,
                },
              ].map((item) => (
                <Link
                  key={item.question}
                  to={item.link}
                  className="group relative overflow-hidden rounded-[18px] border border-slate-200 bg-white p-5"
                >
                  <div
                    className="absolute inset-y-0 left-0 w-[3px]"
                    style={{ background: item.accent }}
                  />

                  <h3 className="text-[11px] font-bold text-[#16243A]">
                    {item.question}
                  </h3>

                  <div className="mt-2 flex items-end justify-between gap-4">
                    <p className="text-[9px] leading-5 text-slate-500">
                      {item.answer}
                    </p>

                    <span
                      className="shrink-0 transition group-hover:translate-x-1"
                      style={{ color: item.accent }}
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICES / SOLUTIONS / PRICING
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-3 gap-3">
          <Link
            to="/services"
            className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-[#18B8F2]" />

            <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
              TECHNICAL CAPABILITIES
            </div>

            <div className="mt-2 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-[15px] font-bold text-[#16243A]">
                  Explore Services
                </h3>

                <p className="mt-1 text-[9px] leading-5 text-slate-500">
                  How Sterlings builds digital products.
                </p>
              </div>

              <span className="text-[#18B8F2] transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>

          <Link
            to="/solutions"
            className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-[#8B5CF6]" />

            <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
              BUSINESS PRODUCTS
            </div>

            <div className="mt-2 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-[15px] font-bold text-[#16243A]">
                  Explore Solutions
                </h3>

                <p className="mt-1 text-[9px] leading-5 text-slate-500">
                  See what those capabilities can become.
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
            <div className="absolute inset-x-0 top-0 h-[3px] bg-[#FF8A3D]" />

            <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
              PROJECT INVESTMENT
            </div>

            <div className="mt-2 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-[15px] font-bold text-[#16243A]">
                  Review Pricing
                </h3>

                <p className="mt-1 text-[9px] leading-5 text-slate-500">
                  Starting ranges and quotation principles.
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
                  STILL HAVE A QUESTION?
                </div>
              </div>

              <h2 className="mt-4 max-w-[850px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                Tell us what you are considering building.
              </h2>

              <p className="mt-5 max-w-[690px] text-[13px] leading-7 text-slate-300">
                We will help you understand the likely product structure,
                investment range, development approach and sensible next step.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Contact Sterlings Studio →
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