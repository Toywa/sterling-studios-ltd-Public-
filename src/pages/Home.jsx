import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

const COLORS = {
  navy: '#0F1F35',
  ink: '#16243A',
  cyan: '#18B8F2',
  blue: '#3478F6',
  violet: '#8B5CF6',
  magenta: '#D946EF',
  orange: '#FF8A3D',
}

export default function Home() {
  const coreServices = [
    {
      number: '01',
      title: 'Websites',
      text:
        'Corporate, institutional, school, government, NGO and e-commerce websites built for credibility and growth.',
      path: '/services#professional-websites',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Web Applications',
      text:
        'Custom portals, dashboards, marketplaces, booking systems and operational business platforms.',
      path: '/services#web-applications',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Android Apps',
      text:
        'Purpose-built Android applications for customers, employees, businesses and communities.',
      path: '/services#mobile-applications',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'iOS Apps',
      text:
        'Premium iPhone and iPad applications designed around intuitive mobile experiences.',
      path: '/services#mobile-applications',
      accent: COLORS.orange,
    },
  ]

  const systems = [
    {
      title: 'School Management Systems',
      text:
        'Admissions, students, parents, teachers, fees, attendance, reports, timetables and communication.',
      path: '/solutions#school-management',
      accent: COLORS.cyan,
    },
    {
      title: 'Pharmacy Management Systems',
      text:
        'Inventory, medicine sales, stock alerts, suppliers, branches, permissions and reporting.',
      path: '/solutions#pharmacy-management',
      accent: COLORS.blue,
    },
    {
      title: 'Employee Management Systems',
      text:
        'Employee records, leave, attendance, approvals, documents and HR workflows.',
      path: '/solutions#employee-management',
      accent: COLORS.violet,
    },
    {
      title: 'SACCO Management Apps',
      text:
        'Member accounts, contributions, loans, statements, M-Pesa, approvals and reporting.',
      path: '/solutions#sacco-management',
      accent: COLORS.magenta,
    },
    {
      title: 'Hospital Management Systems',
      text:
        'Patients, appointments, doctors, billing, pharmacy, departments and medical records.',
      path: '/solutions#hospital-management',
      accent: COLORS.orange,
    },
    {
      title: 'Fleet Management Apps',
      text:
        'Vehicles, drivers, assignments, bookings, maintenance, fuel and operational reporting.',
      path: '/solutions#fleet-management',
      accent: COLORS.cyan,
    },
    {
      title: 'Online Marketplaces',
      text:
        'Retail, wines & spirits, property, services, ticketing and multi-vendor commerce platforms.',
      path: '/solutions#marketplaces',
      accent: COLORS.blue,
    },
    {
      title: 'Delivery & Mobility Apps',
      text:
        'Uber-style ride hailing, Glovo-style delivery, riders, drivers, dispatch, GPS and payments.',
      path: '/solutions#delivery-platforms',
      accent: COLORS.violet,
    },
  ]

  const liveProjects = [
    {
      number: '01',
      name: 'Akashi Designs',
      sector: 'ARCHITECTURE • DIGITAL COMMERCE',
      image: '/akashi-work-banner.png',
      description:
        'A global architectural marketplace supporting plan discovery, secure purchasing and protected digital delivery.',
      website: 'https://akashidesigns.com',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      name: 'The Alkebula School',
      sector: 'EDUCATION TECHNOLOGY',
      image: '/alkebula-school-work.png',
      description:
        'A connected international education platform supporting parents, tutors, bookings and academic workflows.',
      website: 'https://alkebulaschool.com',
      accent: COLORS.violet,
    },
    {
      number: '03',
      name: 'Sunscape Car Rentals',
      sector: 'TRANSPORT • TRAVEL',
      image: '/human_cafe_laptop.webp',
      description:
        'A booking-led vehicle rental platform designed around discovery, enquiry and professional transport services.',
      website: 'https://sunscape.co.ke',
      accent: COLORS.orange,
    },
  ]

  const process = [
    {
      number: '01',
      title: 'Understand',
      text:
        'Your business, users, problem and commercial objective.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Define',
      text:
        'The product, functionality, user journeys and technical architecture.',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Build',
      text:
        'Design, development, integrations, testing and refinement.',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Launch',
      text:
        'Deployment, handover, support and future improvement.',
      accent: COLORS.orange,
    },
  ]

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <SEO
        title="Sterlings Studio | Websites, Web Apps, Android & iOS Development Nairobi"
        description="Sterlings Studio builds websites, custom web applications, Android apps, iOS apps, business management systems, marketplaces and digital platforms in Kenya and beyond."
        canonical="https://sterlingsstudio.com"
        ogImage="/sterling-share-preview.png"
      />

      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full opacity-[0.07] blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full opacity-[0.07] blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-9 lg:py-11">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-10 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <span className="text-[9px] font-bold tracking-[0.17em] text-slate-500">
                  NAIROBI • AFRICA • GLOBAL
                </span>
              </div>

              <h1 className="mt-6 max-w-[710px] text-[39px] sm:text-[46px] lg:text-[52px] xl:text-[57px] font-bold leading-[0.98] tracking-[-0.04em] text-[#16243A]">
                Websites that load in{' '}
                <span
                  style={{
                    background:
                      'linear-gradient(90deg,#FF8A3D,#D946EF,#8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  0.5s.
                </span>
                <br />

                Apps that{' '}
                <span
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#3478F6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  scale.
                </span>
                <br />

                Built to{' '}
                <span
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#FF8A3D,#D946EF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  last.
                </span>
              </h1>

              <p className="mt-6 max-w-[640px] text-[15px] leading-7 text-slate-500">
                <strong className="font-semibold text-[#16243A]">
                  Websites. Web apps. Android apps. iOS apps.
                </strong>{' '}
                Sterlings Studio builds digital products that help businesses
                serve customers, manage operations and grow.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact#start-project"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#172C49]"
                >
                  Start a project →
                </Link>

                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  Explore solutions
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Link
                  to="/services#professional-websites"
                  className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-[9px] font-bold text-slate-600"
                >
                  Websites
                </Link>

                <Link
                  to="/services#web-applications"
                  className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-[9px] font-bold text-slate-600"
                >
                  Web Apps
                </Link>

                <Link
                  to="/services#mobile-applications"
                  className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-[9px] font-bold text-slate-600"
                >
                  Android
                </Link>

                <Link
                  to="/services#mobile-applications"
                  className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-[9px] font-bold text-slate-600"
                >
                  iOS
                </Link>

                <Link
                  to="/solutions"
                  className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-[9px] font-bold text-slate-600"
                >
                  Business Systems
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#F3F6FA] p-3">
              <div className="relative overflow-hidden rounded-[23px]">
                <img
                  src="/human_boardroom_main.webp"
                  alt="Digital product strategy and software development"
                  className="block w-full h-[440px] lg:h-[500px] object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081526]/95 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[9px] font-bold tracking-[0.18em] text-white/65">
                    WHAT DO YOU WANT TO BUILD?
                  </div>

                  <p className="mt-2 max-w-[510px] text-[22px] font-semibold leading-7 text-white">
                    A website? A business system? A mobile app? A platform that
                    could transform an industry?
                  </p>

                  <Link
                    to="/solutions"
                    className="mt-5 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[10px] font-bold text-white backdrop-blur"
                  >
                    See what is possible →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CORE SERVICES
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[0.67fr_0.33fr] gap-6 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  WHAT WE BUILD
                </div>
              </div>

              <h2 className="mt-3 max-w-[820px] text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Websites, web applications, Android apps and iOS apps.
              </h2>

              <p className="mt-4 max-w-[760px] text-[13px] leading-6 text-slate-500">
                From a polished company website to a complex digital ecosystem
                with customer accounts, staff portals, mobile apps, databases,
                payments and administration.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/services"
                className="text-[11px] font-bold text-[#16243A] underline underline-offset-4"
              >
                Explore all services →
              </Link>
            </div>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreServices.map((item) => (
              <Link
                key={item.number}
                to={item.path}
                className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,31,53,0.07)]"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{ background: item.accent }}
                />

                <div className="flex items-center justify-between">
                  <div
                    className="text-[9px] font-bold"
                    style={{ color: item.accent }}
                  >
                    {item.number}
                  </div>

                  <span
                    className="transition-transform group-hover:translate-x-1"
                    style={{ color: item.accent }}
                  >
                    →
                  </span>
                </div>

                <h3 className="mt-4 text-[18px] font-bold text-[#16243A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[11px] leading-5 text-slate-500">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          BIG AMBITION
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
        <div className="overflow-hidden rounded-[30px] bg-[#0F1F35] text-white">
          <div className="grid lg:grid-cols-3">
            <Link
              to="/solutions#delivery-platforms"
              className="group relative p-7 lg:p-8 transition hover:bg-white/[0.03]"
            >
              <div
                className="absolute inset-x-0 top-0 h-[4px]"
                style={{ background: COLORS.cyan }}
              />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                RIDE HAILING
              </div>

              <h2 className="mt-3 text-[22px] font-bold">
                Want to build the next Uber?
              </h2>

              <p className="mt-3 text-[11px] leading-6 text-slate-300">
                Passenger app, driver app, trip requests, GPS, pricing,
                payments and an operations dashboard.
              </p>

              <div className="mt-5 text-[10px] font-bold text-white">
                Explore mobility platforms →
              </div>
            </Link>

            <Link
              to="/solutions#delivery-platforms"
              className="group relative border-t lg:border-l lg:border-t-0 border-white/10 p-7 lg:p-8 transition hover:bg-white/[0.03]"
            >
              <div
                className="absolute inset-x-0 top-0 h-[4px]"
                style={{ background: COLORS.violet }}
              />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                DELIVERY
              </div>

              <h2 className="mt-3 text-[22px] font-bold">
                Something like Glovo?
              </h2>

              <p className="mt-3 text-[11px] leading-6 text-slate-300">
                Customers, merchants, riders, dispatch, payments, live order
                status and delivery operations.
              </p>

              <div className="mt-5 text-[10px] font-bold text-white">
                Explore delivery platforms →
              </div>
            </Link>

            <Link
              to="/solutions#marketplaces"
              className="group relative border-t lg:border-l lg:border-t-0 border-white/10 p-7 lg:p-8 transition hover:bg-white/[0.03]"
            >
              <div
                className="absolute inset-x-0 top-0 h-[4px]"
                style={{ background: COLORS.orange }}
              />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                MARKETPLACES
              </div>

              <h2 className="mt-3 text-[22px] font-bold">
                Build your own digital marketplace.
              </h2>

              <p className="mt-3 text-[11px] leading-6 text-slate-300">
                Retail, food, wines & spirits, services, property, ticketing or
                another legitimate market.
              </p>

              <div className="mt-5 text-[10px] font-bold text-white">
                Explore marketplaces →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          MANAGEMENT SYSTEMS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
          <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-7 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.violet }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  BUSINESS MANAGEMENT SYSTEMS
                </div>
              </div>

              <h2 className="mt-3 max-w-[820px] text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Move the organisation beyond spreadsheets, paperwork and
                disconnected tools.
              </h2>
            </div>

            <p className="max-w-[470px] lg:ml-auto text-[12px] leading-6 text-slate-500">
              Click any system below to see the kinds of workflows and
              functions we can build around it.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {systems.map((system) => (
              <Link
                key={system.title}
                to={system.path}
                className="group relative overflow-hidden rounded-[21px] border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,31,53,0.07)]"
              >
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{ background: system.accent }}
                />

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[14px] font-bold leading-5 text-[#16243A]">
                    {system.title}
                  </h3>

                  <span
                    className="shrink-0 transition-transform group-hover:translate-x-1"
                    style={{ color: system.accent }}
                  >
                    →
                  </span>
                </div>

                <p className="mt-3 text-[10px] leading-5 text-slate-500">
                  {system.text}
                </p>

                <div
                  className="mt-4 text-[9px] font-bold"
                  style={{ color: system.accent }}
                >
                  Explore solution
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 grid md:grid-cols-[0.72fr_0.28fr] gap-4 rounded-[21px] border border-slate-200 bg-white p-5 lg:p-6 items-center">
            <div>
              <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                SOMETHING ELSE?
              </div>

              <p className="mt-2 text-[15px] font-bold text-[#16243A]">
                Tell us how your organisation operates. We can scope custom
                software around the real workflow.
              </p>
            </div>

            <div className="md:text-right">
              <Link
                to="/contact#start-project"
                className="inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
              >
                Discuss a custom system →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          MARKETPLACE EXAMPLE
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
        <div className="grid lg:grid-cols-[0.48fr_0.52fr] gap-5">
          <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-7 lg:p-9">
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.orange }}
              />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                E-COMMERCE & MARKETPLACES
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Your physical business can become a digital business.
            </h2>

            <p className="mt-5 text-[13px] leading-7 text-slate-500">
              Imagine a wines & spirits shop where customers browse stock
              online, pay through M-Pesa or card, earn loyalty rewards and
              request local delivery from their phones.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                'Product catalogue',
                'Stock management',
                'M-Pesa & cards',
                'Customer accounts',
                'Delivery zones',
                'Loyalty & promotions',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[15px] border border-slate-200 bg-white px-4 py-3 text-[10px] font-semibold text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/solutions#marketplaces"
              className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
            >
              Explore marketplace solutions →
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-[#0F1F35] p-7 lg:p-9 text-white">
            <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
              FROM IDEA TO ECOSYSTEM
            </div>

            <blockquote className="mt-4 max-w-[600px] text-[25px] lg:text-[29px] font-semibold leading-[1.17]">
              “A marketplace is not just a website. It is customers, inventory,
              payments, fulfilment and administration working together.”
            </blockquote>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <Link
                to="/solutions#marketplaces"
                className="rounded-[16px] border border-white/10 bg-white/5 p-4"
              >
                <div className="text-[9px] font-bold text-[#18B8F2]">
                  RETAIL
                </div>
                <div className="mt-2 text-[12px] font-bold">
                  Online stores
                </div>
              </Link>

              <Link
                to="/solutions#marketplaces"
                className="rounded-[16px] border border-white/10 bg-white/5 p-4"
              >
                <div className="text-[9px] font-bold text-[#8B5CF6]">
                  MULTI-VENDOR
                </div>
                <div className="mt-2 text-[12px] font-bold">
                  Marketplaces
                </div>
              </Link>

              <Link
                to="/solutions#marketplaces"
                className="rounded-[16px] border border-white/10 bg-white/5 p-4"
              >
                <div className="text-[9px] font-bold text-[#D946EF]">
                  SERVICES
                </div>
                <div className="mt-2 text-[12px] font-bold">
                  Provider platforms
                </div>
              </Link>

              <Link
                to="/solutions#marketplaces"
                className="rounded-[16px] border border-white/10 bg-white/5 p-4"
              >
                <div className="text-[9px] font-bold text-[#FF8A3D]">
                  SPECIALIST
                </div>
                <div className="mt-2 text-[12px] font-bold">
                  Niche commerce
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          LIVE WORK
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
          <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-6 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  LIVE PRODUCTS
                </div>
              </div>

              <h2 className="mt-3 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                We do not only talk about software.
                <br />
                We build it.
              </h2>
            </div>

            <p className="max-w-[470px] lg:ml-auto text-[12px] leading-6 text-slate-500">
              Examine live platforms serving different industries, users and
              operational requirements.
            </p>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-4">
            {liveProjects.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,31,53,0.08)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="block w-full aspect-[16/10] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div
                    className="absolute inset-x-0 top-0 h-[4px]"
                    style={{ background: project.accent }}
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#0F1F35]/90 px-3 py-1 text-[8px] font-bold text-white">
                    LIVE
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between gap-4">
                    <div className="text-[8px] font-bold tracking-[0.13em] text-slate-400">
                      {project.sector}
                    </div>

                    <div
                      className="text-[9px] font-bold"
                      style={{ color: project.accent }}
                    >
                      {project.number}
                    </div>
                  </div>

                  <h3 className="mt-3 text-[18px] font-bold text-[#16243A]">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    {project.description}
                  </p>

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-[#16243A]"
                  >
                    Visit live platform
                    <span style={{ color: project.accent }}>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 text-right">
            <Link
              to="/work"
              className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-[10px] font-bold text-[#16243A]"
            >
              Explore our portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROCESS
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
        <div className="grid lg:grid-cols-[0.37fr_0.63fr] gap-8 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.orange }}
              />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                FROM IDEA TO SOFTWARE
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              You bring the business problem.
              <br />
              We shape the product.
            </h2>

            <blockquote className="mt-6 border-l-[3px] border-[#8B5CF6] pl-4 text-[16px] font-semibold leading-7 text-[#16243A]">
              “Good software begins with understanding what people are trying
              to accomplish.”
            </blockquote>

            <Link
              to="/process"
              className="mt-6 inline-flex rounded-full border border-slate-200 px-5 py-2.5 text-[10px] font-bold text-[#16243A]"
            >
              See how we work →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {process.map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-5"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: step.accent }}
                />

                <div
                  className="text-[9px] font-bold"
                  style={{ color: step.accent }}
                >
                  {step.number}
                </div>

                <h3 className="mt-3 text-[15px] font-bold text-[#16243A]">
                  {step.title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-slate-500">
                  {step.text}
                </p>
              </article>
            ))}
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
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                WHAT DO YOU WANT TO BUILD?
              </div>

              <h2 className="mt-4 max-w-[880px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                The next Uber?
                <br />
                A hospital system?
                <br />
                Or something nobody has built yet?
              </h2>

              <p className="mt-5 max-w-[670px] text-[13px] leading-7 text-slate-300">
                Tell us the idea, the business problem or the process you want
                to improve. We will help define the website, web app, Android
                app, iOS app or connected platform needed to make it work.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact#start-project"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35]"
              >
                Build with Sterlings →
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