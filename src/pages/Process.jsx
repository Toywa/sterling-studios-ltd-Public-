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

export default function Process() {
  const stages = [
    {
      number: '01',
      shortTitle: 'Discover',
      id: 'discovery',
      title: 'Discovery',
      subtitle: 'Understand the business before designing the product.',
      description:
        'We begin by understanding your organisation, customers, operational challenges, commercial objectives and existing digital environment.',
      items: [
        'Business & stakeholder consultation',
        'Customer & user requirements',
        'Existing systems review',
        'Competitor & market context',
        'Commercial objectives',
        'Success criteria',
      ],
      deliverable:
        'A shared understanding of the problem, users, priorities and project objectives.',
      decision:
        'Do we understand the business problem well enough to define the product?',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      shortTitle: 'Define',
      id: 'strategy-scope',
      title: 'Strategy & Scope',
      subtitle: 'Define exactly what should be built — and what should not.',
      description:
        'We translate the brief into a practical product structure covering functionality, user journeys, integrations, technology and delivery priorities.',
      items: [
        'Product architecture',
        'Pages & functionality',
        'User roles',
        'User journeys',
        'Technology recommendations',
        'Delivery stages',
      ],
      deliverable:
        'A defined project scope, technical direction, commercial proposal and delivery structure.',
      decision:
        'Are scope, responsibilities, cost and expected outcomes clear enough to proceed?',
      accent: COLORS.blue,
    },
    {
      number: '03',
      shortTitle: 'Design',
      id: 'design',
      title: 'Content & Experience Design',
      subtitle: 'Shape how people understand and use the product.',
      description:
        'We structure content, interfaces and journeys around the people who will use the product and the actions the business needs them to take.',
      items: [
        'Content architecture',
        'Messaging hierarchy',
        'Desktop layouts',
        'Mobile layouts',
        'Interface direction',
        'Review checkpoints',
      ],
      deliverable:
        'An approved visual and experience direction before full development proceeds.',
      decision:
        'Does the proposed experience communicate clearly and support the intended user journey?',
      accent: COLORS.violet,
    },
    {
      number: '04',
      shortTitle: 'Develop',
      id: 'development',
      title: 'Development',
      subtitle: 'Turn the approved direction into a dependable product.',
      description:
        'The approved experience is developed into a responsive website, web application, Android app, iOS app or connected digital platform.',
      items: [
        'Front-end development',
        'Application logic',
        'Database architecture',
        'User authentication',
        'Payment integrations',
        'Administration tools',
      ],
      deliverable:
        'A functional product environment where the agreed features and journeys can be tested.',
      decision:
        'Does the developed product behave as defined in the approved project scope?',
      accent: COLORS.magenta,
    },
    {
      number: '05',
      shortTitle: 'Test',
      id: 'testing',
      title: 'Testing & Refinement',
      subtitle: 'Test the important journeys before real users depend on them.',
      description:
        'We test across devices, user roles, forms, payments, permissions and operational workflows before the product becomes public.',
      items: [
        'Mobile & desktop testing',
        'Forms & links',
        'Role permissions',
        'Payment journeys',
        'Performance checks',
        'Usability refinement',
      ],
      deliverable:
        'A reviewed release candidate with critical journeys tested and outstanding issues resolved.',
      decision:
        'Is the product ready for production use and final client approval?',
      accent: COLORS.orange,
    },
    {
      number: '06',
      shortTitle: 'Launch',
      id: 'launch',
      title: 'Launch & Support',
      subtitle: 'Deploy carefully, hand over clearly and keep improving.',
      description:
        'After final approval, the product is moved into its production environment. We then complete handover, monitoring and any agreed post-launch support.',
      items: [
        'Production deployment',
        'Domain configuration',
        'Analytics setup',
        'Administrative handover',
        'Team guidance',
        'Maintenance options',
      ],
      deliverable:
        'A live production product together with agreed access, documentation and operational handover.',
      decision:
        'Has the organisation received what it needs to operate and grow the product confidently?',
      accent: COLORS.cyan,
    },
  ]

  const visibility = [
    {
      title: 'Defined milestones',
      text:
        'Important delivery stages are agreed before development begins.',
      accent: COLORS.cyan,
    },
    {
      title: 'Regular communication',
      text:
        'Progress, decisions and dependencies are communicated through an agreed channel.',
      accent: COLORS.blue,
    },
    {
      title: 'Structured approvals',
      text:
        'Important decisions are reviewed before the project moves into the next phase.',
      accent: COLORS.violet,
    },
    {
      title: 'Controlled changes',
      text:
        'New requirements are evaluated for their effect on cost, complexity and delivery.',
      accent: COLORS.orange,
    },
  ]

  const clientRole = [
    'A clear project decision-maker',
    'Timely feedback and approvals',
    'Brand assets and business information',
    'Access to required third-party accounts',
    'Accurate product and service information',
    'Early disclosure of important constraints',
  ]

  const sterlingsRole = [
    'Product and technical guidance',
    'Clear scope and recommendations',
    'Design and development',
    'Integration management',
    'Quality assurance and testing',
    'Professional deployment and handover',
  ]

  const handover = [
    {
      title: 'Production-ready product',
      text:
        'A tested website, application or platform prepared for its intended users.',
      accent: COLORS.cyan,
    },
    {
      title: 'Administrative access',
      text:
        'Access to the dashboards, tools and systems required to operate the product.',
      accent: COLORS.blue,
    },
    {
      title: 'Project ownership',
      text:
        'Agreed access to domains, hosting, accounts and essential project assets.',
      accent: COLORS.violet,
    },
    {
      title: 'Operational clarity',
      text:
        'Guidance on important workflows, administration and day-to-day use.',
      accent: COLORS.magenta,
    },
    {
      title: 'Analytics & visibility',
      text:
        'Where applicable, tools for understanding traffic, activity and product performance.',
      accent: COLORS.orange,
    },
    {
      title: 'Continued support',
      text:
        'Optional maintenance, monitoring, improvements and future development after launch.',
      accent: COLORS.cyan,
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
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[0.58fr_0.42fr] gap-8 lg:gap-10 items-center">
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
                  HOW WE WORK
                </div>
              </div>

              <h1 className="mt-5 max-w-[850px] text-[35px] sm:text-[40px] lg:text-[45px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                From first conversation to confident launch.
              </h1>

              <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-500">
                Successful digital products are not created through guesswork.
                Sterlings Studio follows a structured process that connects
                business strategy, user experience, design, development and
                testing around one clear objective.
              </p>

              <p className="mt-3 max-w-[720px] text-[13px] leading-7 text-slate-500">
                You remain involved in the decisions that matter without having
                to become the project manager or technical lead.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5"
                >
                  Discuss your project →
                </Link>

                <a
                  href="#delivery-journey"
                  className="inline-flex rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-[#16243A]"
                >
                  See the process ↓
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-[29px] bg-[#F4F7FA] p-3">
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src="/human_pitch_boardroom.webp"
                  alt="Digital project strategy and planning"
                  className="block w-full h-[430px] lg:h-[470px] object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081526]/95 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[9px] font-bold tracking-[0.18em] text-white/60">
                    THE STERLINGS APPROACH
                  </div>

                  <blockquote className="mt-2 max-w-[500px] text-[21px] font-semibold leading-7 text-white">
                    “Clear scope. Visible progress. Thoughtful approvals. No
                    unnecessary complexity.”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROCESS NAVIGATION
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {stages.map((stage) => (
              <a
                key={stage.number}
                href={`#${stage.id}`}
                className="group relative overflow-hidden rounded-[18px] border border-slate-200 bg-white px-4 py-4 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: stage.accent }}
                />

                <div className="flex items-center justify-between">
                  <div
                    className="text-[8px] font-bold"
                    style={{ color: stage.accent }}
                  >
                    {stage.number}
                  </div>

                  <span
                    className="text-[10px] transition group-hover:translate-y-1"
                    style={{ color: stage.accent }}
                  >
                    ↓
                  </span>
                </div>

                <div className="mt-2 text-[11px] font-bold text-[#16243A]">
                  {stage.shortTitle}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          BEFORE DEVELOPMENT
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-12">
        <div className="overflow-hidden rounded-[28px] bg-[#0F1F35] text-white">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            <div className="p-7 lg:p-9">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                BEFORE CODE
              </div>

              <h2 className="mt-4 text-[27px] lg:text-[31px] font-bold leading-[1.08] tracking-[-0.025em]">
                Development should not begin with unanswered business
                questions.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-300">
                The early stages reduce expensive assumptions later. We want to
                know what we are building, who will use it and what success
                should look like.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 border-t lg:border-l lg:border-t-0 border-white/10">
              {[
                {
                  number: '01',
                  title: 'The problem',
                  text:
                    'What is difficult, inefficient or missing today?',
                  accent: COLORS.cyan,
                },
                {
                  number: '02',
                  title: 'The product',
                  text:
                    'What should users be able to accomplish digitally?',
                  accent: COLORS.violet,
                },
                {
                  number: '03',
                  title: 'The scope',
                  text:
                    'What belongs in this release — and what can wait?',
                  accent: COLORS.orange,
                },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={`relative p-7 ${
                    index > 0
                      ? 'border-t sm:border-l sm:border-t-0 border-white/10'
                      : ''
                  }`}
                >
                  <div
                    className="text-[9px] font-bold"
                    style={{ color: item.accent }}
                  >
                    {item.number}
                  </div>

                  <h3 className="mt-3 text-[16px] font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          DETAILED JOURNEY
      ====================================================== */}
      <section
        id="delivery-journey"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.65fr_0.35fr] gap-7 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.blue }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  THE DELIVERY JOURNEY
                </div>
              </div>

              <h2 className="mt-3 max-w-[820px] text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Every stage has a purpose, a deliverable and a decision point.
              </h2>
            </div>

            <p className="max-w-[440px] lg:ml-auto text-[11px] leading-6 text-slate-500">
              The exact depth of each stage changes with the project. A
              corporate website and a multi-role mobile platform do not require
              identical processes.
            </p>
          </div>

          <div className="mt-9 grid gap-5">
            {stages.map((stage, index) => (
              <article
                id={stage.id}
                key={stage.number}
                className="scroll-mt-24 overflow-hidden rounded-[26px] border border-slate-200 bg-white"
              >
                <div
                  className={`grid lg:grid-cols-[0.34fr_0.66fr] ${
                    index % 2 !== 0 ? 'lg:grid-cols-[0.66fr_0.34fr]' : ''
                  }`}
                >
                  {/* STAGE INTRO */}
                  <div
                    className={`relative p-7 lg:p-8 ${
                      index % 2 !== 0
                        ? 'lg:order-2 bg-[#0F1F35] text-white'
                        : 'bg-[#F8FAFC] text-[#16243A]'
                    }`}
                  >
                    <div
                      className="absolute inset-y-0 left-0 w-[4px]"
                      style={{ background: stage.accent }}
                    />

                    <div
                      className="text-[10px] font-bold"
                      style={{ color: stage.accent }}
                    >
                      STAGE {stage.number}
                    </div>

                    <h3 className="mt-4 text-[25px] lg:text-[28px] font-bold tracking-[-0.025em]">
                      {stage.title}
                    </h3>

                    <p
                      className={`mt-3 text-[13px] font-semibold leading-6 ${
                        index % 2 !== 0
                          ? 'text-slate-200'
                          : 'text-slate-600'
                      }`}
                    >
                      {stage.subtitle}
                    </p>

                    <blockquote
                      className={`mt-6 border-l-[3px] pl-4 text-[13px] font-semibold leading-6 ${
                        index % 2 !== 0
                          ? 'text-white'
                          : 'text-[#16243A]'
                      }`}
                      style={{ borderColor: stage.accent }}
                    >
                      “{stage.decision}”
                    </blockquote>
                  </div>

                  {/* DETAIL */}
                  <div
                    className={`p-7 lg:p-8 ${
                      index % 2 !== 0 ? 'lg:order-1' : ''
                    }`}
                  >
                    <p className="max-w-[760px] text-[12px] leading-6 text-slate-500">
                      {stage.description}
                    </p>

                    <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {stage.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-[13px] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[10px] font-semibold text-slate-600"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[17px] border border-slate-200 bg-white p-5">
                      <div
                        className="text-[8px] font-bold tracking-[0.16em]"
                        style={{ color: stage.accent }}
                      >
                        STAGE DELIVERABLE
                      </div>

                      <p className="mt-2 text-[11px] font-semibold leading-5 text-[#16243A]">
                        {stage.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          PROJECT VISIBILITY
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="overflow-hidden rounded-[29px] border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-[0.47fr_0.53fr]">
            <div className="relative min-h-[430px] overflow-hidden bg-[#F4F7FA]">
              <img
                src="/prod-analytics.webp"
                alt="Digital project analytics and performance reporting"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F35]/95 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="text-[9px] font-bold tracking-[0.18em] text-white/60">
                  PROJECT VISIBILITY
                </div>

                <blockquote className="mt-2 text-[20px] font-semibold leading-7 text-white">
                  “You should know what is happening without having to manage
                  the development yourself.”
                </blockquote>
              </div>
            </div>

            <div className="p-7 lg:p-9">
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  VISIBLE PROGRESS
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Involved in the decisions. Free from the technical noise.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                Clear communication helps prevent surprises. You know what is
                being worked on, what requires your approval and what comes
                next.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {visibility.map((item) => (
                  <article
                    key={item.title}
                    className="relative overflow-hidden rounded-[17px] border border-slate-200 bg-[#F8FAFC] p-4"
                  >
                    <div
                      className="absolute inset-y-0 left-0 w-[3px]"
                      style={{ background: item.accent }}
                    />

                    <h3 className="text-[11px] font-bold text-[#16243A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[9px] leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CHANGE CONTROL
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.orange }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  WHEN THE BRIEF CHANGES
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Good projects can evolve without becoming chaotic.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                New ideas often emerge during a build. The important thing is
                to distinguish refinement from additional scope.
              </p>
            </div>

            <div className="overflow-hidden rounded-[25px] bg-[#0F1F35] text-white">
              <div className="grid sm:grid-cols-3">
                {[
                  {
                    number: '01',
                    title: 'Assess',
                    text:
                      'Understand the requested change and why it is needed.',
                    accent: COLORS.cyan,
                  },
                  {
                    number: '02',
                    title: 'Evaluate',
                    text:
                      'Review its effect on complexity, cost and delivery.',
                    accent: COLORS.violet,
                  },
                  {
                    number: '03',
                    title: 'Agree',
                    text:
                      'Proceed only when the change and implications are clear.',
                    accent: COLORS.orange,
                  },
                ].map((item, index) => (
                  <div
                    key={item.number}
                    className={`relative p-6 ${
                      index > 0
                        ? 'border-t sm:border-l sm:border-t-0 border-white/10'
                        : ''
                    }`}
                  >
                    <div
                      className="text-[9px] font-bold"
                      style={{ color: item.accent }}
                    >
                      {item.number}
                    </div>

                    <h3 className="mt-3 text-[15px] font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHO DOES WHAT
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.violet }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                A SHARED PROJECT
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Clear responsibilities make projects move faster.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              Sterlings handles the product and technical process. The client
              brings the business knowledge, decisions and information only
              they can provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* CLIENT */}
            <div className="relative overflow-hidden rounded-[23px] border border-slate-200 bg-[#F8FAFC] p-6">
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: COLORS.cyan }}
              />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                FROM THE CLIENT
              </div>

              <h3 className="mt-3 text-[19px] font-bold text-[#16243A]">
                Business knowledge & decisions
              </h3>

              <div className="mt-5 grid gap-2">
                {clientRole.map((item) => (
                  <div
                    key={item}
                    className="rounded-[13px] border border-slate-200 bg-white px-4 py-3 text-[10px] font-semibold text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* STERLINGS */}
            <div className="relative overflow-hidden rounded-[23px] bg-[#0F1F35] p-6 text-white">
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{
                  background:
                    'linear-gradient(90deg,#3478F6,#8B5CF6,#D946EF,#FF8A3D)',
                }}
              />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                FROM STERLINGS STUDIO
              </div>

              <h3 className="mt-3 text-[19px] font-bold">
                Product & technical delivery
              </h3>

              <div className="mt-5 grid gap-2">
                {sterlingsRole.map((item) => (
                  <div
                    key={item}
                    className="rounded-[13px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[10px] font-semibold text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT YOU RECEIVE
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.58fr_0.42fr] gap-7 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.magenta }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  WHAT YOU RECEIVE
                </div>
              </div>

              <h2 className="mt-3 text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                More than a finished interface.
              </h2>

              <p className="mt-4 max-w-[720px] text-[12px] leading-6 text-slate-500">
                The final handover should leave your organisation with control,
                clarity and a foundation that can support future growth.
              </p>
            </div>

            <blockquote className="lg:ml-auto max-w-[430px] border-l-[3px] border-[#D946EF] pl-4 text-[14px] font-semibold leading-6 text-[#16243A]">
              “Launch should increase your control of the product — not make you
              dependent on mystery.”
            </blockquote>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {handover.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
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
          AFTER LAUNCH
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        <div className="overflow-hidden rounded-[27px] border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            <div className="bg-[#F8FAFC] p-7 lg:p-8">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                AFTER LAUNCH
              </div>

              <h2 className="mt-3 text-[26px] lg:text-[30px] font-bold leading-[1.1] text-[#16243A]">
                Launch is a milestone, not necessarily the end.
              </h2>

              <p className="mt-4 text-[11px] leading-6 text-slate-500">
                As users interact with the product, new opportunities,
                improvements and operational requirements may become visible.
              </p>
            </div>

            <div className="grid sm:grid-cols-4">
              {[
                {
                  title: 'Monitor',
                  text: 'Observe performance and important product activity.',
                  accent: COLORS.cyan,
                },
                {
                  title: 'Maintain',
                  text: 'Keep important software and integrations dependable.',
                  accent: COLORS.blue,
                },
                {
                  title: 'Improve',
                  text: 'Refine experiences using real operational feedback.',
                  accent: COLORS.violet,
                },
                {
                  title: 'Expand',
                  text: 'Add new capabilities when the business is ready.',
                  accent: COLORS.orange,
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`relative p-6 ${
                    index > 0
                      ? 'border-t sm:border-l sm:border-t-0 border-slate-200'
                      : ''
                  }`}
                >
                  <div
                    className="h-[3px] w-8 rounded-full"
                    style={{ background: item.accent }}
                  />

                  <h3 className="mt-4 text-[13px] font-bold text-[#16243A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[9px] leading-5 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICES / WORK BRIDGE
      ====================================================== */}
      <section className="border-t border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/services"
              className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: COLORS.cyan }}
              />

              <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
                WHAT WE BUILD WITH
              </div>

              <div className="mt-2 flex items-end justify-between gap-5">
                <div>
                  <h3 className="text-[18px] font-bold text-[#16243A]">
                    Explore our services.
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    Websites, web applications, Android, iOS and connected
                    platforms.
                  </p>
                </div>

                <span className="text-[#18B8F2] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>

            <Link
              to="/work"
              className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: COLORS.violet }}
              />

              <div className="text-[8px] font-bold tracking-[0.16em] text-slate-400">
                SEE THE RESULT
              </div>

              <div className="mt-2 flex items-end justify-between gap-5">
                <div>
                  <h3 className="text-[18px] font-bold text-[#16243A]">
                    Explore our work.
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500">
                    Live platforms and product concepts across multiple
                    industries.
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
                  READY TO BEGIN?
                </div>
              </div>

              <h2 className="mt-4 max-w-[900px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                Start with the problem.
                <br />
                We will help define what should be built.
              </h2>

              <p className="mt-5 max-w-[700px] text-[13px] leading-7 text-slate-300">
                Share your objectives, intended users and business challenge.
                Sterlings Studio will help shape the right website, application
                or connected digital platform around them.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Start your project →
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