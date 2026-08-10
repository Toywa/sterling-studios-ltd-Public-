import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    website: '',
    message: '',
  })

  const whatsappNumber = '254722114098'
  const emailAddress = 'hello@sterlingsstudio.com'

  const projectTypes = [
    'Professional business website',
    'School or education platform',
    'Government or institutional website',
    'Custom web application',
    'E-commerce marketplace',
    'Political or campaign platform',
    'Android and iOS application',
    'Website redesign',
    'Maintenance and continued development',
    'Other digital project',
  ]

  const budgetRanges = [
    'Below KES 180,000',
    'KES 180,000 - 300,000',
    'KES 300,000 - 500,000',
    'KES 500,000 - 800,000',
    'KES 800,000 - 1,500,000',
    'Above KES 1,500,000',
    'Budget not yet determined',
  ]

  const timelines = [
    'As soon as reasonably possible',
    'Within 1 month',
    'Within 2-3 months',
    'Within 3-6 months',
    'More than 6 months',
    'Timeline not yet determined',
  ]

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const enquiry = [
      'Hello Sterling Studios,',
      '',
      'I would like to discuss a digital project.',
      '',
      `Name: ${form.name}`,
      `Organisation: ${form.organisation || 'Not provided'}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Project type: ${form.projectType}`,
      `Estimated budget: ${form.budget}`,
      `Preferred timeline: ${form.timeline}`,
      `Existing website: ${form.website || 'None provided'}`,
      '',
      'Project brief:',
      form.message,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      enquiry
    )}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-14">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-end">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              START A PROJECT
            </div>

            <h1 className="mt-4 text-[46px] lg:text-[60px] font-extrabold leading-[0.95] tracking-tight max-w-[900px]">
              Tell us what your organisation needs to build next.
            </h1>

            <p className="mt-6 text-[16px] leading-7 text-slate-600 max-w-[70ch]">
              Share your business objective, intended users and required
              features. Sterling Studios will review the brief and recommend an
              appropriate solution, scope and delivery approach.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  'Hello Sterling Studios. I would like to discuss a digital project.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold"
              >
                Message us on WhatsApp
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border text-[13px] font-bold"
              >
                Send an email â†’
              </a>
            </div>
          </div>

          <div className="rounded-[24px] overflow-hidden border">
            <img
              src="/human_founder_smile.webp"
              alt="Sterling Studios project consultation"
              className="w-full h-[330px] object-cover object-top"
            />

            <div className="p-5 bg-[#F8FAFC]">
              <div className="text-[11px] font-bold tracking-widest text-slate-500">
                DIRECT PROJECT COMMUNICATION
              </div>

              <p className="mt-2 text-[13px] leading-6 text-slate-600">
                Your enquiry is reviewed by the project team, ensuring that the
                first response is practical, relevant and based on your actual
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT AND FORM */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-[0.72fr_1.28fr] gap-10 lg:gap-14 items-start">
          {/* CONTACT DETAILS */}
          <aside className="space-y-5">
            <div>
              <div className="text-[11px] font-bold tracking-widest text-slate-500">
                CONTACT DETAILS
              </div>

              <h2 className="mt-3 text-[30px] lg:text-[38px] font-extrabold tracking-tight">
                Begin with a clear conversation.
              </h2>

              <p className="mt-4 text-[13px] leading-6 text-slate-600">
                A useful initial brief helps us understand the scale, priorities
                and commercial context of the project before recommending the
                next step.
              </p>
            </div>

            <div className="rounded-[20px] border bg-white p-6">
              <div className="text-[10px] font-bold tracking-widest text-slate-400">
                EMAIL
              </div>

              <a
                href={`mailto:${emailAddress}`}
                className="mt-2 block text-[15px] font-extrabold break-all"
              >
                {emailAddress}
              </a>

              <p className="mt-2 text-[12px] leading-5 text-slate-500">
                Suitable for formal briefs, documents and detailed project
                requirements.
              </p>
            </div>

            <div className="rounded-[20px] border bg-white p-6">
              <div className="text-[10px] font-bold tracking-widest text-slate-400">
                WHATSAPP
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-[15px] font-extrabold"
              >
                +254 722 114 098
              </a>

              <p className="mt-2 text-[12px] leading-5 text-slate-500">
                Suitable for an initial conversation, quick questions or
                arranging a consultation.
              </p>
            </div>

            <div className="rounded-[20px] border bg-white p-6">
              <div className="text-[10px] font-bold tracking-widest text-slate-400">
                LOCATION
              </div>

              <div className="mt-2 text-[15px] font-extrabold">
                Nairobi, Kenya
              </div>

              <p className="mt-2 text-[12px] leading-5 text-slate-500">
                Serving organisations across Kenya, Africa and international
                markets.
              </p>
            </div>

            <div className="rounded-[20px] border bg-[#0F1F35] text-white p-6">
              <div className="text-[10px] font-bold tracking-widest text-slate-300">
                INDICATIVE INVESTMENT
              </div>

              <div className="mt-4 space-y-3 text-[12px] text-slate-200">
                <div className="flex justify-between gap-4">
                  <span>Professional websites</span>
                  <span className="font-bold whitespace-nowrap">
                    From KES 180,000
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Web applications</span>
                  <span className="font-bold whitespace-nowrap">
                    From KES 450,000
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Mobile applications</span>
                  <span className="font-bold whitespace-nowrap">
                    From KES 600,000
                  </span>
                </div>
              </div>

              <Link
                to="/pricing"
                className="mt-6 inline-flex text-[12px] font-bold underline"
              >
                View full pricing guidance â†’
              </Link>
            </div>
          </aside>

          {/* PROJECT FORM */}
          <div className="rounded-[28px] border bg-white p-7 lg:p-9">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              PROJECT ENQUIRY
            </div>

            <h2 className="mt-3 text-[28px] lg:text-[34px] font-extrabold tracking-tight">
              Give us a clear picture of what you need.
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-slate-600">
              Complete the form below. When submitted, your project brief will
              open securely in WhatsApp for you to review and send.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-[12px] font-bold">
                    Full name <span className="text-red-500">*</span>
                  </span>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-[13px] outline-none transition focus:border-slate-500"
                  />
                </label>

                <label className="block">
                  <span className="text-[12px] font-bold">
                    Business or organisation
                  </span>

                  <input
                    type="text"
                    name="organisation"
                    value={form.organisation}
                    onChange={handleChange}
                    autoComplete="organization"
                    placeholder="Organisation name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-[13px] outline-none transition focus:border-slate-500"
                  />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-[12px] font-bold">
                    Email address <span className="text-red-500">*</span>
                  </span>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="name@organisation.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-[13px] outline-none transition focus:border-slate-500"
                  />
                </label>

                <label className="block">
                  <span className="text-[12px] font-bold">
                    Telephone or WhatsApp
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="+254..."
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-[13px] outline-none transition focus:border-slate-500"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-[12px] font-bold">
                  Type of project <span className="text-red-500">*</span>
                </span>

                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-[13px] bg-white outline-none transition focus:border-slate-500"
                >
                  <option value="">Select the closest option</option>

                  {projectTypes.map((projectType) => (
                    <option key={projectType} value={projectType}>
                      {projectType}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-[12px] font-bold">
                    Estimated budget <span className="text-red-500">*</span>
                  </span>

                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-[13px] bg-white outline-none transition focus:border-slate-500"
                  >
                    <option value="">Select a budget range</option>

                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-[12px] font-bold">
                    Preferred timeline <span className="text-red-500">*</span>
                  </span>

                  <select
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-[13px] bg-white outline-none transition focus:border-slate-500"
                  >
                    <option value="">Select a preferred timeline</option>

                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-[12px] font-bold">
                  Existing website or platform
                </span>

                <input
                  type="url"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-[13px] outline-none transition focus:border-slate-500"
                />
              </label>

              <label className="block">
                <span className="text-[12px] font-bold">
                  Project brief <span className="text-red-500">*</span>
                </span>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="7"
                  placeholder="Describe the organisation, the problem you need to solve, the intended users and the main features you require."
                  className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-[13px] leading-6 outline-none transition focus:border-slate-500"
                />
              </label>

              <div className="rounded-2xl border bg-[#F8FAFC] p-4">
                <p className="text-[11px] leading-5 text-slate-500">
                  Your information is used only to assess and respond to your
                  project enquiry. Do not include passwords, payment credentials
                  or other confidential access details in this form.
                </p>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#0F1F35] px-7 py-3.5 text-[13px] font-bold text-white transition hover:bg-[#172C49]"
              >
                Review and send on WhatsApp â†’
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-[780px]">
          <div className="text-[11px] font-bold tracking-widest text-slate-500">
            WHAT HAPPENS NEXT?
          </div>

          <h2 className="mt-3 text-[32px] lg:text-[42px] font-extrabold tracking-tight">
            A practical review before any commitment is made.
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-slate-600">
            The purpose of the first conversation is to establish whether
            Sterling Studios is the right fit and what the project genuinely
            requires.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              number: '01',
              title: 'Brief review',
              text: 'We review the objective, expected users, required features and available budget.',
            },
            {
              number: '02',
              title: 'Initial response',
              text: 'We respond with questions, practical observations or a recommendation for the next discussion.',
            },
            {
              number: '03',
              title: 'Project consultation',
              text: 'Suitable projects proceed to a focused conversation covering scope and delivery priorities.',
            },
            {
              number: '04',
              title: 'Formal proposal',
              text: 'A written proposal defines the deliverables, investment, responsibilities and delivery stages.',
            },
          ].map((item) => (
            <article
              key={item.number}
              className="rounded-[20px] border bg-[#F8FAFC] p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0F1F35] text-white flex items-center justify-center text-[11px] font-bold">
                {item.number}
              </div>

              <h3 className="mt-4 font-extrabold">{item.title}</h3>

              <p className="mt-2 text-[12px] leading-5 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL REASSURANCE */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 text-center">
          <div className="text-[11px] font-bold tracking-widest text-slate-300">
            A SERIOUS PROJECT DESERVES A CLEAR START
          </div>

          <h2 className="mt-3 text-[30px] lg:text-[42px] font-extrabold tracking-tight max-w-[850px] mx-auto">
            No pressure. No vague promises. Just a practical conversation about
            what should be built.
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-slate-300 max-w-[680px] mx-auto">
            Sterling Studios will recommend the next step only after
            understanding the organisation, opportunity and level of work
            required.
          </p>
        </div>
      </section>
    </div>
  )
}
