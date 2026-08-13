import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const COLORS = {
  navy: '#0F1F35',
  ink: '#16243A',
  cyan: '#18B8F2',
  blue: '#3478F6',
  violet: '#8B5CF6',
  magenta: '#D946EF',
  orange: '#FF8A3D',
}

export default function SchoolManagementSystem() {
  const modules = [
    {
      number: '01',
      title: 'Admissions & Student Records',
      text:
        'Manage applications, enrolment, student profiles, guardians, classes, documents, transfers and historical records from one structured system.',
      features: [
        'Online admissions',
        'Student profiles',
        'Guardian records',
        'Class allocation',
        'Document storage',
        'Student history',
      ],
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Fees & Payments',
      text:
        'Create clearer financial workflows around fee structures, invoices, balances, receipts, payment records and approved payment integrations.',
      features: [
        'Fee structures',
        'Invoices & receipts',
        'Balance tracking',
        'M-Pesa integration',
        'Payment history',
        'Financial reporting',
      ],
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Academics & Assessment',
      text:
        'Structure academic information around classes, subjects, assessments, marks, reports and the curriculum workflows required by the institution.',
      features: [
        'Subjects & classes',
        'Assessment records',
        'Marks entry',
        'Report generation',
        'Academic history',
        'Teacher workflows',
      ],
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Attendance',
      text:
        'Record and review attendance for learners and, where required, staff through simple administrative and teacher-facing workflows.',
      features: [
        'Student attendance',
        'Class registers',
        'Absence records',
        'Attendance reports',
        'Teacher access',
        'Notifications',
      ],
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Parent & Student Portals',
      text:
        'Give families appropriate access to the information and services the school chooses to make available digitally.',
      features: [
        'Parent accounts',
        'Student accounts',
        'Fee balances',
        'Academic reports',
        'Attendance visibility',
        'School notices',
      ],
      accent: COLORS.orange,
    },
    {
      number: '06',
      title: 'Staff & Administration',
      text:
        'Support administrators, teachers, finance teams and other staff through role-based access and clearly defined responsibilities.',
      features: [
        'Staff records',
        'User roles',
        'Permissions',
        'Departments',
        'Administrative workflows',
        'Audit records',
      ],
      accent: COLORS.cyan,
    },
  ]

  const roles = [
    {
      title: 'School Administration',
      text:
        'Admissions, student records, classes, users, reports, settings and oversight.',
      accent: COLORS.cyan,
    },
    {
      title: 'Teachers',
      text:
        'Attendance, class information, academic records, marks and relevant learner information.',
      accent: COLORS.blue,
    },
    {
      title: 'Finance Team',
      text:
        'Fee structures, balances, payment records, receipts and financial reporting.',
      accent: COLORS.violet,
    },
    {
      title: 'Parents',
      text:
        'Secure access to the information and communication channels approved by the school.',
      accent: COLORS.magenta,
    },
    {
      title: 'Students',
      text:
        'Age-appropriate access to academic information, notices and approved digital services.',
      accent: COLORS.orange,
    },
  ]

  const architecture = [
    {
      label: 'ADMIN PLATFORM',
      title: 'School Control Centre',
      text:
        'The central administrative environment for records, users, settings, reporting and school operations.',
      accent: COLORS.cyan,
    },
    {
      label: 'STAFF EXPERIENCE',
      title: 'Teacher & Staff Portal',
      text:
        'Role-specific tools for teachers and staff without exposing unnecessary administrative controls.',
      accent: COLORS.blue,
    },
    {
      label: 'FAMILY EXPERIENCE',
      title: 'Parent Portal',
      text:
        'A secure parent-facing environment for the information and services the school chooses to provide.',
      accent: COLORS.violet,
    },
    {
      label: 'LEARNER EXPERIENCE',
      title: 'Student Portal',
      text:
        'A focused student experience where appropriate to the age group and institution.',
      accent: COLORS.magenta,
    },
    {
      label: 'TRANSACTIONS',
      title: 'Payments & Integrations',
      text:
        'M-Pesa, card payments, messaging and external services can be connected where required and technically available.',
      accent: COLORS.orange,
    },
    {
      label: 'FOUNDATION',
      title: 'Database & APIs',
      text:
        'A shared data and application layer connecting the relevant school systems securely.',
      accent: COLORS.cyan,
    },
  ]

  const benefits = [
    {
      title: 'One source of information',
      text:
        'Reduce dependence on disconnected spreadsheets, paper records and duplicate data entry.',
      accent: COLORS.cyan,
    },
    {
      title: 'Clearer fee visibility',
      text:
        'Give authorised teams a structured view of invoices, payments, balances and financial records.',
      accent: COLORS.blue,
    },
    {
      title: 'Better parent experience',
      text:
        'Provide families with clear digital access to the information and services the school approves.',
      accent: COLORS.violet,
    },
    {
      title: 'Role-based access',
      text:
        'Different users receive different levels of access according to their responsibilities.',
      accent: COLORS.magenta,
    },
    {
      title: 'Less administrative friction',
      text:
        'Automate repetitive workflows and make important information easier to retrieve.',
      accent: COLORS.orange,
    },
    {
      title: 'Room to grow',
      text:
        'A well-structured platform can be expanded as the school and its digital requirements evolve.',
      accent: COLORS.cyan,
    },
  ]

  const process = [
    {
      number: '01',
      title: 'Understand the school',
      text:
        'We examine the institution, users, current processes, pain points and priorities.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Define the system',
      text:
        'We determine which modules, roles, integrations and workflows belong in the first release.',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Design the journeys',
      text:
        'Administrator, teacher, parent and student experiences are structured around their actual tasks.',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Build & integrate',
      text:
        'The application, database, permissions, payments and agreed integrations are developed.',
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Test & migrate',
      text:
        'Critical workflows are reviewed and any agreed migration or initial data setup is completed.',
      accent: COLORS.orange,
    },
    {
      number: '06',
      title: 'Launch & support',
      text:
        'The platform is deployed, handed over and can continue evolving after launch.',
      accent: COLORS.cyan,
    },
  ]

  const faqs = [
    {
      question: 'How much does a school management system cost in Kenya?',
      answer:
        'The cost depends on the modules, number of user roles, integrations, data migration, reporting requirements and whether mobile applications are required. Sterlings Studio publishes web-application starting ranges on the Pricing page, while complete school platforms are quoted after scope is defined.',
    },
    {
      question: 'Can the system integrate with M-Pesa?',
      answer:
        'Yes. M-Pesa can be integrated where appropriate through suitable approved payment providers or Safaricom Daraja. The exact implementation depends on the school’s payment workflow, accounts and technical requirements.',
    },
    {
      question: 'Can parents have their own portal?',
      answer:
        'Yes. A parent portal can provide secure access to selected information such as fee balances, receipts, academic reports, attendance information, notices and other services approved by the school.',
    },
    {
      question: 'Can teachers have different access from administrators?',
      answer:
        'Yes. Role-based permissions can ensure teachers, administrators, finance staff, parents and students only access the information and actions appropriate to their responsibilities.',
    },
    {
      question: 'Can you support CBC or CBE academic workflows?',
      answer:
        'Academic and assessment workflows can be designed around the curriculum and reporting requirements supplied by the institution. The exact implementation is defined during project discovery rather than assumed as a generic one-size-fits-all module.',
    },
    {
      question: 'Can an existing school system be replaced?',
      answer:
        'Yes. We can assess an existing platform and plan a replacement or phased migration. Data migration depends on the quality, structure and accessibility of the existing records.',
    },
  ]

  const structuredData = [
    {
      '@type': 'Service',
      '@id':
        'https://sterlingsstudio.com/solutions/school-management-system#service',
      name: 'School Management System Development',
      serviceType: 'Custom School Management Software Development',
      url:
        'https://sterlingsstudio.com/solutions/school-management-system',
      description:
        'Custom school management system development for schools in Kenya, including admissions, student records, fees, M-Pesa integration, academic workflows, attendance, parent portals and administration.',
      provider: {
        '@id': 'https://sterlingsstudio.com/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Kenya',
      },
    },
    {
      '@type': 'FAQPage',
      '@id':
        'https://sterlingsstudio.com/solutions/school-management-system#faq',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ]

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <SEO
        title="School Management System Development Kenya | Sterlings Studio"
        description="Custom school management system development in Kenya for admissions, student records, fees, M-Pesa, academics, attendance, parent portals, staff and administration."
        canonical="https://sterlingsstudio.com/solutions/school-management-system"
        ogImage="/alkebula-school-work.png"
        structuredData={structuredData}
      />

      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.violet }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[0.57fr_0.43fr] gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-10 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF)',
                  }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  SCHOOL MANAGEMENT SYSTEM KENYA
                </div>
              </div>

              <h1 className="mt-5 max-w-[850px] text-[35px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                A school management system built around how your school
                actually works.
              </h1>

              <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-500">
                Bring admissions, student records, fees, academics,
                attendance, parents, teachers and administration into one
                structured digital platform.
              </p>

              <p className="mt-3 max-w-[720px] text-[13px] leading-7 text-slate-500">
                Sterlings Studio develops custom school management systems for
                institutions that need more control than a generic
                one-size-fits-all product can provide.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5"
                >
                  Discuss your school system →
                </Link>

                <a
                  href="#modules"
                  className="inline-flex rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-[#16243A]"
                >
                  Explore modules ↓
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-[21px] border border-slate-200 bg-white">
                {[
                  ['STUDENTS', 'Structured records', COLORS.cyan],
                  ['PAYMENTS', 'M-Pesa capable', COLORS.blue],
                  ['ACCESS', 'Role based', COLORS.violet],
                ].map(([label, value, accent], index) => (
                  <div
                    key={label}
                    className={`relative p-4 ${
                      index > 0 ? 'border-l border-slate-200' : ''
                    }`}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-[3px]"
                      style={{ background: accent }}
                    />

                    <div className="text-[7px] font-bold tracking-[0.15em] text-slate-400">
                      {label}
                    </div>

                    <div className="mt-2 text-[10px] sm:text-[11px] font-bold text-[#16243A]">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[29px] bg-[#F4F7FA] p-3">
              <div className="relative overflow-hidden rounded-[22px] bg-white">
                <img
                  src="/alkebula-school-work.png"
                  alt="Education technology platform demonstrating Sterlings Studio's experience with multi-role education systems"
                  className="block w-full h-[445px] lg:h-[505px] object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081526]/95 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[9px] font-bold tracking-[0.18em] text-white/60">
                    EDUCATION TECHNOLOGY EXPERIENCE
                  </div>

                  <blockquote className="mt-2 max-w-[500px] text-[20px] font-semibold leading-7 text-white">
                    “Different people need different views of the same school.”
                  </blockquote>

                  <Link
                    to="/work"
                    className="mt-4 inline-flex text-[9px] font-bold text-white/80"
                  >
                    See our education-platform work →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROBLEM
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-12">
          <div className="grid lg:grid-cols-[0.39fr_0.61fr] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#18B8F2]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  FROM FRAGMENTED TO CONNECTED
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                One school.
                <br />
                Too many disconnected records.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Student records in spreadsheets',
                'Fees tracked in separate systems',
                'Attendance on paper',
                'Reports prepared manually',
                'Parent communication scattered across channels',
                'Staff with no central operational view',
              ].map((item, index) => {
                const accents = [
                  COLORS.cyan,
                  COLORS.blue,
                  COLORS.violet,
                  COLORS.magenta,
                  COLORS.orange,
                  COLORS.cyan,
                ]

                return (
                  <div
                    key={item}
                    className="relative overflow-hidden rounded-[17px] border border-slate-200 bg-white px-5 py-4 text-[10px] font-semibold leading-5 text-slate-600"
                  >
                    <span
                      className="absolute inset-y-0 left-0 w-[3px]"
                      style={{ background: accents[index] }}
                    />

                    {item}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          MODULES
      ====================================================== */}
      <section
        id="modules"
        className="scroll-mt-24 max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14"
      >
        <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-7 items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#3478F6]" />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                SCHOOL MANAGEMENT MODULES
              </div>
            </div>

            <h2 className="mt-3 max-w-[780px] text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Build the modules your institution genuinely needs.
            </h2>
          </div>

          <p className="max-w-[440px] lg:ml-auto text-[11px] leading-6 text-slate-500">
            These are examples, not a compulsory bundle. The final system is
            scoped around the institution, users and operational priorities.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {modules.map((module) => (
            <article
              key={module.number}
              className="relative overflow-hidden rounded-[23px] border border-slate-200 bg-white p-6"
            >
              <div
                className="absolute inset-y-0 left-0 w-[4px]"
                style={{ background: module.accent }}
              />

              <div className="flex items-start justify-between gap-5">
                <div>
                  <div
                    className="text-[8px] font-bold tracking-[0.15em]"
                    style={{ color: module.accent }}
                  >
                    MODULE {module.number}
                  </div>

                  <h3 className="mt-3 text-[18px] font-bold text-[#16243A]">
                    {module.title}
                  </h3>
                </div>

                <span
                  className="text-[10px] font-bold"
                  style={{ color: module.accent }}
                >
                  {module.number}
                </span>
              </div>

              <p className="mt-3 text-[11px] leading-6 text-slate-500">
                {module.text}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {module.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[12px] border border-slate-200 bg-[#F8FAFC] px-3 py-2.5 text-[9px] font-semibold text-slate-600"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ======================================================
          ROLE BASED
      ====================================================== */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-10">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                ROLE-BASED EXPERIENCE
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08]">
                One system does not mean one screen for everyone.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-300">
                A principal, teacher, accountant, parent and student have
                different responsibilities. The platform should reflect that.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {roles.map((role, index) => (
                <article
                  key={role.title}
                  className={`relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] p-5 ${
                    index === roles.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: role.accent }}
                  />

                  <h3 className="text-[13px] font-bold">{role.title}</h3>

                  <p className="mt-2 text-[10px] leading-5 text-slate-300">
                    {role.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ARCHITECTURE
      ====================================================== */}
      <section className="border-b border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="max-w-[800px]">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#8B5CF6]" />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                PLATFORM ARCHITECTURE
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              A complete school platform can be several connected products.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              The exact architecture depends on the institution. A smaller
              school may need one web platform, while a larger organisation may
              require several specialised interfaces connected to the same
              data foundation.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {architecture.map((item) => (
              <article
                key={item.label}
                className="relative overflow-hidden rounded-[19px] border border-slate-200 bg-white p-5"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: item.accent }}
                />

                <div
                  className="text-[8px] font-bold tracking-[0.15em]"
                  style={{ color: item.accent }}
                >
                  {item.label}
                </div>

                <h3 className="mt-3 text-[15px] font-bold text-[#16243A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[9px] leading-5 text-slate-500">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          BENEFITS
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#FF8A3D]" />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                WHY DIGITISE?
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              The goal is not more software.
              <br />
              It is a better-run school.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              A management system should reduce administrative friction and
              improve access to reliable information.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-[#F8FAFC] p-5"
              >
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{ background: item.accent }}
                />

                <h3 className="text-[12px] font-bold text-[#16243A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[9px] leading-5 text-slate-500">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          KENYA CONTEXT
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11">
          <div className="overflow-hidden rounded-[27px] bg-[#0F1F35] text-white">
            <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
              <div className="p-7 lg:p-8">
                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  BUILT FOR THE LOCAL OPERATING ENVIRONMENT
                </div>

                <h2 className="mt-4 text-[26px] lg:text-[30px] font-bold leading-[1.08]">
                  Kenya-first where it matters.
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 border-t lg:border-l lg:border-t-0 border-white/10">
                {[
                  {
                    title: 'M-Pesa',
                    text:
                      'Payment workflows can be designed around appropriate M-Pesa integrations.',
                    accent: COLORS.cyan,
                  },
                  {
                    title: 'Academic workflows',
                    text:
                      'Assessment and reporting requirements are scoped around the institution and curriculum.',
                    accent: COLORS.violet,
                  },
                  {
                    title: 'Connectivity',
                    text:
                      'Interfaces can be designed with practical mobile and bandwidth considerations in mind.',
                    accent: COLORS.orange,
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`relative p-6 ${
                      index > 0
                        ? 'border-t sm:border-l sm:border-t-0 border-white/10'
                        : ''
                    }`}
                  >
                    <div
                      className="h-[3px] w-8 rounded-full"
                      style={{ background: item.accent }}
                    />

                    <h3 className="mt-4 text-[13px] font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[9px] leading-5 text-slate-300">
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
          PROCESS
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#3478F6]" />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                FROM SCHOOL TO SYSTEM
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              We do not begin with the software.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              We begin by understanding what the institution is trying to
              manage, improve or replace.
            </p>

            <Link
              to="/process"
              className="mt-6 inline-flex rounded-full border border-slate-200 px-6 py-3 text-[10px] font-bold text-[#16243A]"
            >
              See our full process →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {process.map((item) => (
              <article
                key={item.number}
                className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-[#F8FAFC] p-5"
              >
                <div className="flex gap-4">
                  <div
                    className="text-[9px] font-bold"
                    style={{ color: item.accent }}
                  >
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-[12px] font-bold text-[#16243A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[9px] leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          INVESTMENT
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11">
          <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-8 items-center">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                PROJECT INVESTMENT
              </div>

              <h2 className="mt-3 text-[27px] lg:text-[32px] font-bold leading-[1.08] text-[#16243A]">
                Price the school system you actually need.
              </h2>

              <p className="mt-4 max-w-[720px] text-[11px] leading-6 text-slate-500">
                A basic administration platform and a multi-campus system with
                payments, parent portals, mobile apps, migration and extensive
                reporting are different projects. We define scope before
                preparing the final quotation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/pricing"
                className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-[10px] font-bold text-[#16243A]"
              >
                View pricing principles
              </Link>

              <Link
                to="/contact"
                className="inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
              >
                Request quotation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FAQ
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#D946EF]" />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                FREQUENTLY ASKED QUESTIONS
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              School management system questions.
            </h2>

            <Link
              to="/faq"
              className="mt-6 inline-flex text-[10px] font-bold text-[#16243A] underline underline-offset-4"
            >
              View all FAQs →
            </Link>
          </div>

          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const accents = [
                COLORS.cyan,
                COLORS.blue,
                COLORS.violet,
                COLORS.magenta,
                COLORS.orange,
                COLORS.cyan,
              ]

              return (
                <article
                  key={faq.question}
                  className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-[#F8FAFC] p-5"
                >
                  <div
                    className="absolute inset-y-0 left-0 w-[3px]"
                    style={{ background: accents[index] }}
                  />

                  <h3 className="text-[12px] font-bold text-[#16243A]">
                    {faq.question}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-slate-500">
                    {faq.answer}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          OTHER SOLUTIONS
      ====================================================== */}
      <section className="border-t border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-3 gap-3">
            <Link
              to="/solutions#hospital-management"
              className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#18B8F2]" />

              <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                NEXT SOLUTION
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[13px] font-bold text-[#16243A]">
                  Hospital Systems
                </span>

                <span className="text-[#18B8F2] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>

            <Link
              to="/solutions#sacco-management"
              className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#8B5CF6]" />

              <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                NEXT SOLUTION
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[13px] font-bold text-[#16243A]">
                  SACCO Platforms
                </span>

                <span className="text-[#8B5CF6] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>

            <Link
              to="/solutions"
              className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#FF8A3D]" />

              <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                ALL SOLUTIONS
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[13px] font-bold text-[#16243A]">
                  Explore all solutions
                </span>

                <span className="text-[#FF8A3D] transition group-hover:translate-x-1">
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
                  SCHOOL MANAGEMENT SYSTEM DEVELOPMENT
                </div>
              </div>

              <h2 className="mt-4 max-w-[900px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                Tell us how your school works today.
                <br />
                We will help define what should work better tomorrow.
              </h2>

              <p className="mt-5 max-w-[700px] text-[13px] leading-7 text-slate-300">
                Whether you are replacing spreadsheets, improving an existing
                system or planning a complete digital school platform, we can
                help define the right architecture and delivery approach.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Discuss your school system →
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