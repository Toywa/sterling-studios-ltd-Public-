import { Link } from 'react-router-dom'

export default function Process() {
  const stages = [
    {
      number: '01',
      title: 'Discovery',
      subtitle: 'Understand the business before designing the product.',
      description:
        'We begin by understanding your organisation, customers, operational challenges, commercial objectives and existing digital systems.',
      items: [
        'Business and stakeholder consultation',
        'Customer and user requirements',
        'Competitor and market review',
        'Project goals and success criteria',
      ],
    },
    {
      number: '02',
      title: 'Strategy and Scope',
      subtitle: 'Define exactly what should be built and why.',
      description:
        'We translate the initial brief into a practical project structure covering pages, features, user journeys, integrations and delivery priorities.',
      items: [
        'Website or platform architecture',
        'User journeys and functionality',
        'Technology recommendations',
        'Project scope and delivery stages',
      ],
    },
    {
      number: '03',
      title: 'Content and Design',
      subtitle: 'Create a clear, credible and intuitive experience.',
      description:
        'We shape the messaging, page structure and visual direction around the audience the product must serve and the action they should take.',
      items: [
        'Content structure and messaging',
        'Desktop and mobile layouts',
        'Brand and interface direction',
        'Review and approval checkpoints',
      ],
    },
    {
      number: '04',
      title: 'Development',
      subtitle: 'Turn the approved direction into a dependable product.',
      description:
        'The approved experience is developed into a responsive website, web platform or mobile application using technology appropriate to the project.',
      items: [
        'Responsive front-end development',
        'Database and application logic',
        'Payments and third-party integrations',
        'Administration and user controls',
      ],
    },
    {
      number: '05',
      title: 'Testing and Refinement',
      subtitle: 'Confirm that important journeys work before launch.',
      description:
        'We test the product across devices, user roles, forms, payment journeys and important operational workflows before it becomes public.',
      items: [
        'Mobile and desktop testing',
        'Forms, links and user journeys',
        'Security and access checks',
        'Performance and usability refinement',
      ],
    },
    {
      number: '06',
      title: 'Launch and Support',
      subtitle: 'Deploy carefully, monitor closely and improve continuously.',
      description:
        'After final approval, the product is deployed to its production environment. Continued support can include maintenance, analytics and future improvements.',
      items: [
        'Production deployment',
        'Domain and analytics setup',
        'Team handover and guidance',
        'Maintenance and growth support',
      ],
    },
  ]

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-14">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-end">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              HOW WE WORK
            </div>

            <h1 className="mt-4 text-[46px] lg:text-[60px] font-extrabold leading-[0.95] tracking-tight max-w-[900px]">
              A disciplined process from first conversation to confident
              launch.
            </h1>

            <p className="mt-6 text-[16px] leading-7 text-slate-600 max-w-[68ch]">
              Successful digital products are not created through guesswork.
              Sterlings Studio follows a structured process that brings
              strategy, content, design, development and testing together around
              one clear business objective.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold"
              >
                Discuss your project
              </Link>

              <Link
                to="/work"
                className="px-6 py-3 rounded-full border text-[13px] font-bold"
              >
                View our work â†’
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border bg-[#F8FAFC] p-7">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              OUR APPROACH
            </div>

            <p className="mt-4 text-[20px] leading-8 font-bold">
              Clear scope. Visible progress. Thoughtful approvals. No unnecessary
              complexity.
            </p>

            <p className="mt-4 text-[13px] leading-6 text-slate-600">
              Project duration depends on complexity, integrations, content
              readiness and review times. Before development begins, you receive
              a defined scope, delivery stages and commercial proposal.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS SUMMARY */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              'Discover',
              'Define',
              'Design',
              'Develop',
              'Test',
              'Launch',
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border bg-white px-3 py-4"
              >
                <div className="text-[10px] font-bold tracking-widest text-slate-400">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="mt-1 text-[12px] font-bold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED PROCESS */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-[760px]">
          <div className="text-[11px] font-bold tracking-widest text-slate-500">
            THE DELIVERY JOURNEY
          </div>

          <h2 className="mt-3 text-[32px] lg:text-[42px] font-extrabold tracking-tight">
            Every stage has a purpose, a deliverable and a decision point.
          </h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          {stages.map((stage) => (
            <article
              key={stage.number}
              className="rounded-[24px] border bg-white p-7 lg:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#0F1F35] text-white flex items-center justify-center font-bold text-[12px]">
                  {stage.number}
                </div>

                <div>
                  <h3 className="text-[22px] font-extrabold">
                    {stage.title}
                  </h3>

                  <p className="mt-1 text-[13px] font-semibold text-slate-500">
                    {stage.subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[13px] leading-6 text-slate-600">
                {stage.description}
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-2">
                {stage.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-[#F8FAFC] border px-3 py-2 text-[11px] font-semibold text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VISIBILITY SECTION */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-[28px] border overflow-hidden grid lg:grid-cols-[1.05fr_0.95fr] bg-[#F8FAFC]">
          <img
            src="/prod-analytics.webp"
            alt="Website analytics and performance reporting dashboard"
            className="w-full h-[340px] lg:h-full min-h-[420px] object-cover"
          />

          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              VISIBLE PROJECT PROGRESS
            </div>

            <h2 className="mt-3 text-[28px] lg:text-[34px] font-extrabold leading-tight">
              You remain involved without having to manage the development
              process yourself.
            </h2>

            <p className="mt-4 text-[13px] leading-6 text-slate-600">
              We maintain clear communication throughout the project. You know
              what is being worked on, what requires approval and what comes
              next.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-[12px] text-slate-600">
              <div className="rounded-xl border bg-white p-3">
                <div className="font-bold text-slate-900">
                  Defined milestones
                </div>
                <div className="mt-1">
                  Important delivery stages are agreed before work begins.
                </div>
              </div>

              <div className="rounded-xl border bg-white p-3">
                <div className="font-bold text-slate-900">
                  Regular communication
                </div>
                <div className="mt-1">
                  Updates are provided through an agreed communication channel.
                </div>
              </div>

              <div className="rounded-xl border bg-white p-3">
                <div className="font-bold text-slate-900">
                  Structured approvals
                </div>
                <div className="mt-1">
                  Key decisions are reviewed before the next phase begins.
                </div>
              </div>

              <div className="rounded-xl border bg-white p-3">
                <div className="font-bold text-slate-900">
                  Controlled changes
                </div>
                <div className="mt-1">
                  New requirements are assessed for cost and delivery impact.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CLIENT RECEIVES */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
          <div className="max-w-[750px]">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              WHAT YOU RECEIVE
            </div>

            <h2 className="mt-3 text-[30px] lg:text-[38px] font-extrabold tracking-tight">
              More than a finished interface.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-slate-600">
              The final handover is designed to give your organisation control,
              clarity and a strong foundation for future growth.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'A production-ready product',
                text: 'A tested website, platform or application prepared for its intended users.',
              },
              {
                title: 'Administrative access',
                text: 'Access to the tools and systems required to manage the product.',
              },
              {
                title: 'Project ownership',
                text: 'Agreed access to domains, hosting, accounts and essential project assets.',
              },
              {
                title: 'Continued support',
                text: 'Optional maintenance, monitoring and future development after launch.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border bg-white p-6"
              >
                <h3 className="font-bold">{item.title}</h3>

                <p className="mt-2 text-[12px] leading-5 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-300">
              READY TO BEGIN?
            </div>

            <h2 className="mt-3 text-[30px] lg:text-[40px] font-extrabold tracking-tight max-w-[760px]">
              Let us turn your idea into a clearly defined and professionally
              delivered digital product.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-slate-300 max-w-[65ch]">
              Share your objectives, intended users and required features. We
              will review the opportunity and recommend an appropriate next
              step.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-7 py-3 rounded-full bg-white text-[#0F1F35] text-[13px] font-bold whitespace-nowrap"
          >
            Start your project â†’
          </Link>
        </div>
      </section>
    </div>
  )
}
