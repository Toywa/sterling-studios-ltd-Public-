import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function Process() {
  const steps = [
    ['01', 'Discover', 'Understand the organisation, users, problem and commercial objective.'],
    ['02', 'Define', 'Agree the scope, user journeys, content, integrations and priorities.'],
    ['03', 'Design', 'Shape the interface, structure and experience around real use cases.'],
    ['04', 'Develop', 'Build the product in reviewable stages with maintainable foundations.'],
    ['05', 'Test', 'Check functionality, responsiveness, content, performance and edge cases.'],
    ['06', 'Launch', 'Deploy, verify, hand over and support the transition into real-world use.'],
  ]

  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Our Process | Sterlings Studio"
        description="A clear, disciplined process from discovery and definition through design, development, testing and launch."
        canonical="https://sterlingsstudio.com/process"
      />

      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 lg:pt-14 pb-12">
        <div className="grid lg:grid-cols-[0.56fr_0.44fr] gap-8 lg:gap-12 items-stretch">
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              HOW WE WORK
            </div>

            <h1 className="mt-4 max-w-[720px] text-[32px] lg:text-[38px] font-bold leading-[1.06] tracking-[-0.025em] text-slate-800">
              A disciplined process from first conversation to confident launch.
            </h1>

            <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-slate-500">
              Successful digital products are not created through guesswork. Sterlings Studio
              follows a structured process that brings strategy, content, design, development and
              testing together around one clear business objective.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[12px] font-bold text-white"
              >
                Discuss your project
              </Link>
              <Link
                to="/work"
                className="inline-flex rounded-full border border-slate-300 px-7 py-3.5 text-[12px] font-bold text-slate-700"
              >
                View our work →
              </Link>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                ['SCOPE', 'Defined early'],
                ['REVIEWS', 'Visible progress'],
                ['HANDOVER', 'Built for ownership'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border bg-[#F8FAFC] p-4">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">{label}</div>
                  <div className="mt-1.5 text-[12px] font-semibold text-slate-700">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="overflow-hidden rounded-[24px] border">
              <img
                src="/human_pitch_boardroom.webp"
                alt="Digital product presentation"
                className="block w-full h-[280px] object-cover"
              />
            </div>

            <div className="rounded-[22px] border bg-[#F8FAFC] p-6">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                OUR APPROACH
              </div>
              <p className="mt-3 text-[18px] font-semibold leading-7 text-slate-800">
                Clear scope. Visible progress. Thoughtful approvals. No unnecessary complexity.
              </p>
              <p className="mt-3 text-[12px] leading-6 text-slate-500">
                Project duration depends on complexity, integrations, content readiness and review times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map(([number, title, description]) => (
              <article key={number} className="rounded-[22px] border bg-white p-6">
                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">{number}</div>
                <h2 className="mt-3 text-[18px] font-bold text-slate-800">{title}</h2>
                <p className="mt-3 text-[13px] leading-6 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MAGAZINE */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[0.46fr_0.54fr] gap-6 items-stretch">
          <div className="grid gap-6">
            <div className="rounded-[24px] bg-[#0F1F35] p-7 text-white">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                WHAT YOU RECEIVE
              </div>
              <h2 className="mt-4 text-[27px] font-bold">A build you can understand and own.</h2>
              <p className="mt-4 text-[13px] leading-6 text-slate-300">
                Clear decisions, practical documentation, reviewable delivery stages and a sensible handover.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-[12px] font-bold text-[#0F1F35]"
              >
                Start the conversation →
              </Link>
            </div>

            <div className="overflow-hidden rounded-[22px] border">
              <img
                src="/human_cafe_laptop.webp"
                alt="Focused product development"
                className="block w-full h-[220px] object-cover"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[26px] border">
            <img
              src="/human_team_standup.webp"
              alt="Team planning and delivery"
              className="block w-full h-full min-h-[470px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
