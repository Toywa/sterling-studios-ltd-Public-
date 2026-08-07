import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What does Sterling Studios build?',
      answer:
        'We design and develop professional websites, custom web applications, e-commerce marketplaces, booking systems, education platforms, political campaign platforms and Android and iOS applications. Every solution is structured around the organisation’s users, objectives and operational requirements.',
    },
    {
      question: 'Do you use WordPress or website templates?',
      answer:
        'Our primary focus is custom development rather than generic themes and page-builder templates. This gives us greater control over performance, security, user experience, integrations and future expansion. The recommended technology is always based on the actual project requirements.',
    },
    {
      question: 'How much does a project cost?',
      answer:
        'Professional websites generally begin from KES 180,000, custom web applications from KES 450,000 and mobile applications from KES 600,000. The final quotation depends on the required features, design work, integrations, content, user roles, security needs and delivery schedule.',
    },
    {
      question: 'How long does development take?',
      answer:
        'A professional website commonly requires two to four weeks. Custom web applications may require four to ten weeks, while Android and iOS applications commonly require eight to sixteen weeks. A precise schedule is provided after the project scope and content requirements are understood.',
    },
    {
      question: 'Will we own the completed website or application?',
      answer:
        'Yes. Ownership, administrative access and project handover terms are clearly defined in the proposal. Clients receive agreed access to their domain, hosting environment, administrative tools and essential project assets after the applicable project obligations have been completed.',
    },
    {
      question: 'Do you provide hosting and domain registration?',
      answer:
        'We can assist with domain configuration, hosting deployment, business email setup and production infrastructure. Domains, hosting plans, messaging services and other third-party subscriptions are normally charged separately because they remain ongoing services supplied by external providers.',
    },
    {
      question: 'Can you integrate M-Pesa and card payments?',
      answer:
        'Yes. We can integrate M-Pesa through approved payment providers or Safaricom Daraja where appropriate, together with card-payment gateways such as Paystack, Stripe or other suitable providers. The final gateway depends on the business location, currency, compliance requirements and customer market.',
    },
    {
      question: 'Can you build platforms for political candidates?',
      answer:
        'Yes. We develop professional platforms for candidates, elected leaders and campaign organisations. Features may include manifestos, news, events, volunteer registration, supporter communication, approved donations and merchandise sales. Payment and fundraising functions must comply with applicable laws and provider policies.',
    },
    {
      question: 'Can you redesign an existing website?',
      answer:
        'Yes. We can review an existing website, identify weaknesses in content, structure, usability, performance or technology, and rebuild it into a stronger digital platform. Where necessary, we also plan redirects, content migration and search-engine continuity.',
    },
    {
      question: 'Do you work with clients outside Kenya?',
      answer:
        'Yes. Sterling Studios is based in Nairobi and works remotely with organisations across Africa and international markets. Project communication, demonstrations, approvals and delivery can be managed through video meetings, email, WhatsApp and agreed project-management channels.',
    },
    {
      question: 'Do you provide maintenance after launch?',
      answer:
        'Yes. Ongoing support can include technical maintenance, security updates, backups, content changes, performance monitoring, analytics, search improvements and continued feature development. The appropriate support arrangement depends on the product and level of assistance required.',
    },
    {
      question: 'How do you protect confidential project information?',
      answer:
        'Project information is shared only with the people required to assess and deliver the work. Confidentiality requirements can be documented before sensitive information is exchanged. Clients should never send passwords, payment credentials or production access keys through ordinary enquiry forms.',
    },
    {
      question: 'What is required before a project can begin?',
      answer:
        'We require an approved scope, agreed commercial terms, the applicable project deposit and the materials necessary for the first delivery stage. These may include brand assets, content, photographs, domain information, system requirements and stakeholder contacts.',
    },
    {
      question: 'How do we request a quotation?',
      answer:
        'Complete the project-enquiry form with your organisation, required product, intended users, key features, budget range and preferred timeline. We will review the brief and advise whether a consultation, technical discovery session or formal proposal should follow.',
    },
  ]

  const toggleQuestion = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    )
  }

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t bg-[#F8FAFC]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-12 items-start">
          <div className="lg:sticky lg:top-[100px]">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 className="mt-3 text-[32px] lg:text-[42px] font-extrabold tracking-tight text-slate-900">
              Clear answers before you begin.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-slate-600 max-w-[58ch]">
              These answers explain how Sterling Studios approaches pricing,
              timelines, ownership, technology, payments and long-term support.
            </p>

            <p className="mt-3 text-[14px] leading-6 text-slate-600 max-w-[58ch]">
              Every project is different, so the final scope and commercial
              terms are confirmed only after we understand the organisation and
              product requirements.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-6 py-3 text-[13px] font-bold text-white transition hover:bg-[#172C49]"
              >
                Ask about your project
              </Link>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-[13px] font-bold text-slate-800 transition hover:border-slate-300"
              >
                View pricing →
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              const answerId = `faq-answer-${index}`

              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-[20px] border border-slate-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-[14px] font-extrabold leading-6 text-slate-900">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#F8FAFC] text-[18px] font-medium text-slate-700"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={answerId}
                      className="border-t border-slate-100 px-5 py-5 sm:px-6"
                    >
                      <p className="max-w-[75ch] text-[13px] leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-14 rounded-[26px] bg-[#0F1F35] px-7 py-9 text-white lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-10">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-300">
              STILL HAVE A QUESTION?
            </div>

            <h3 className="mt-3 text-[25px] font-extrabold tracking-tight">
              Tell us what you are considering building.
            </h3>

            <p className="mt-3 max-w-[65ch] text-[13px] leading-6 text-slate-300">
              We will review the requirement and give you practical guidance on
              the likely scope, investment and next step.
            </p>
          </div>

          <Link
            to="/contact"
            className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-3 text-[13px] font-bold text-[#0F1F35] lg:mt-0"
          >
            Contact Sterling Studios →
          </Link>
        </div>
      </div>
    </section>
  )
}