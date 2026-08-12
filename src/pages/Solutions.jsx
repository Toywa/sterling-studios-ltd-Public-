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

export default function Solutions() {
  const directory = [
    {
      title: 'School Management',
      href: '#school-management',
      accent: COLORS.cyan,
    },
    {
      title: 'Pharmacy Management',
      href: '#pharmacy-management',
      accent: COLORS.blue,
    },
    {
      title: 'Employee Management',
      href: '#employee-management',
      accent: COLORS.violet,
    },
    {
      title: 'SACCO Management',
      href: '#sacco-management',
      accent: COLORS.magenta,
    },
    {
      title: 'Hospital Management',
      href: '#hospital-management',
      accent: COLORS.orange,
    },
    {
      title: 'Fleet Management',
      href: '#fleet-management',
      accent: COLORS.cyan,
    },
    {
      title: 'E-commerce',
      href: '#ecommerce',
      accent: COLORS.blue,
    },
    {
      title: 'Marketplaces',
      href: '#marketplaces',
      accent: COLORS.violet,
    },
    {
      title: 'Delivery & Mobility',
      href: '#delivery-platforms',
      accent: COLORS.orange,
    },
    {
      title: 'Booking Systems',
      href: '#booking-systems',
      accent: COLORS.cyan,
    },
    {
      title: 'Property Platforms',
      href: '#property-platforms',
      accent: COLORS.magenta,
    },
    {
      title: 'Payments & Fintech',
      href: '#fintech',
      accent: COLORS.blue,
    },
    {
      title: 'Political Platforms',
      href: '#political-platforms',
      accent: COLORS.violet,
    },
    {
      title: 'Regulated Gaming',
      href: '#regulated-gaming',
      accent: COLORS.orange,
    },
  ]

  const managementSystems = [
    {
      id: 'school-management',
      category: 'EDUCATION TECHNOLOGY',
      title: 'School Management Systems',
      intro:
        'A connected digital environment for schools that need to manage students, parents, teachers, fees, communication and academic administration.',
      features: [
        'Online admissions',
        'Student profiles',
        'Parent portal',
        'Teacher accounts',
        'Fee management',
        'Attendance',
        'Timetables',
        'Academic reports',
        'Announcements',
        'Document management',
      ],
      accent: COLORS.cyan,
    },
    {
      id: 'pharmacy-management',
      category: 'HEALTHCARE • RETAIL',
      title: 'Pharmacy Management Systems',
      intro:
        'Custom pharmacy software for managing medicines, stock, sales, suppliers, branches and business reporting from one controlled platform.',
      features: [
        'Medicine inventory',
        'Stock alerts',
        'Batch tracking',
        'Sales management',
        'Supplier records',
        'Branch management',
        'Staff permissions',
        'Reports',
        'Customer records',
        'Product search',
      ],
      accent: COLORS.blue,
    },
    {
      id: 'employee-management',
      category: 'HR • BUSINESS OPERATIONS',
      title: 'Employee Management Systems',
      intro:
        'Centralised employee platforms that reduce paperwork and make staff information, approvals and internal processes easier to manage.',
      features: [
        'Employee records',
        'Leave applications',
        'Attendance',
        'Manager approvals',
        'Document storage',
        'Department records',
        'Staff communication',
        'Role permissions',
        'HR workflows',
        'Management reports',
      ],
      accent: COLORS.violet,
    },
    {
      id: 'sacco-management',
      category: 'MEMBERSHIP • FINANCIAL OPERATIONS',
      title: 'SACCO Management Platforms',
      intro:
        'Member-focused systems for SACCOs that need clearer management of contributions, loans, statements, payments and communication.',
      features: [
        'Member accounts',
        'Contributions',
        'Loan applications',
        'Approval workflows',
        'Statements',
        'M-Pesa integration',
        'Notifications',
        'Member portal',
        'Administration',
        'Financial reporting',
      ],
      accent: COLORS.magenta,
    },
    {
      id: 'hospital-management',
      category: 'HEALTHCARE TECHNOLOGY',
      title: 'Hospital & Clinic Management Systems',
      intro:
        'Integrated platforms connecting patient journeys, clinicians, billing, pharmacy and administrative workflows.',
      features: [
        'Patient registration',
        'Appointments',
        'Doctor schedules',
        'Billing',
        'Pharmacy',
        'Departments',
        'Patient records',
        'User permissions',
        'Notifications',
        'Operational reports',
      ],
      accent: COLORS.orange,
    },
    {
      id: 'fleet-management',
      category: 'TRANSPORT • LOGISTICS',
      title: 'Fleet Management Applications',
      intro:
        'Fleet systems for businesses managing vehicles, drivers, assignments, maintenance, bookings and operational records.',
      features: [
        'Vehicle records',
        'Driver profiles',
        'Trip assignments',
        'Maintenance schedules',
        'Booking management',
        'Fuel records',
        'Location integrations',
        'Incident records',
        'Vehicle availability',
        'Fleet reporting',
      ],
      accent: COLORS.cyan,
    },
  ]

  const commerceExamples = [
    {
      title: 'Online Wines & Spirits Shops',
      text:
        'Catalogue, stock, customer accounts, M-Pesa/card checkout, promotions, loyalty, delivery zones and responsible age-verification journeys.',
      accent: COLORS.orange,
    },
    {
      title: 'Supermarkets & Retail',
      text:
        'Products, categories, stock, checkout, customer accounts, promotions, delivery and store administration.',
      accent: COLORS.cyan,
    },
    {
      title: 'Fashion & Lifestyle',
      text:
        'Product variants, sizes, colours, inventory, checkout, customer accounts and fulfilment.',
      accent: COLORS.magenta,
    },
    {
      title: 'Restaurants & Food',
      text:
        'Menus, ordering, payments, pickup, delivery, order tracking and restaurant administration.',
      accent: COLORS.violet,
    },
  ]

  const marketplaceExamples = [
    {
      title: 'Multi-vendor Retail',
      text:
        'Independent sellers, product listings, orders, commissions, payments and marketplace administration.',
      accent: COLORS.cyan,
    },
    {
      title: 'Service Marketplaces',
      text:
        'Service providers, profiles, availability, customer requests, bookings, payments and ratings.',
      accent: COLORS.blue,
    },
    {
      title: 'Property Marketplaces',
      text:
        'Owners, agents, property listings, search, maps, filters, enquiries and lead management.',
      accent: COLORS.violet,
    },
    {
      title: 'Ticketing Marketplaces',
      text:
        'Events, ticket categories, payments, QR validation, customer accounts and organiser dashboards.',
      accent: COLORS.orange,
    },
  ]

  const mobilityProducts = [
    {
      label: 'CUSTOMER APP',
      title: 'Book or order',
      text:
        'Customers request a ride, delivery or service from Android, iOS or web.',
      accent: COLORS.cyan,
    },
    {
      label: 'DRIVER / RIDER APP',
      title: 'Accept & fulfil',
      text:
        'Drivers or riders receive requests, navigate, update status and complete jobs.',
      accent: COLORS.violet,
    },
    {
      label: 'PARTNER PORTAL',
      title: 'Manage supply',
      text:
        'Merchants, restaurants or service providers manage availability and orders.',
      accent: COLORS.magenta,
    },
    {
      label: 'CONTROL CENTRE',
      title: 'Run the network',
      text:
        'Operations teams oversee users, dispatch, transactions, service quality and reports.',
      accent: COLORS.orange,
    },
  ]

  const bookingExamples = [
    'Car rental reservations',
    'Hotel & accommodation bookings',
    'Doctor appointments',
    'Salon & spa appointments',
    'Tutor & lesson bookings',
    'Restaurant reservations',
    'Event registrations',
    'Equipment hire',
  ]

  const propertyFeatures = [
    'Property listings',
    'Advanced search',
    'Location & maps',
    'Agent profiles',
    'Owner dashboards',
    'Property enquiries',
    'Favourites',
    'Rental listings',
    'Sales listings',
    'Lead management',
  ]

  const fintechFeatures = [
    'M-Pesa integrations',
    'Card payments',
    'Invoices',
    'Payment records',
    'Customer wallets',
    'Transaction histories',
    'Recurring billing',
    'Payment notifications',
    'Reconciliation tools',
    'Administrative reporting',
  ]

  const politicalFeatures = [
    'Candidate website',
    'Manifesto publishing',
    'News & campaign updates',
    'Volunteer registration',
    'Supporter database',
    'Events & schedules',
    'Contribution journeys',
    'Merchandise',
    'Regional organisation',
    'Campaign reporting',
  ]

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <SEO
        title="Digital Business Solutions | Sterlings Studio"
        description="Explore management systems, e-commerce, marketplaces, delivery apps, booking systems, property platforms, payment integrations and custom business software from Sterlings Studio."
        canonical="https://sterlingsstudio.com/solutions"
        ogImage="/sterling-share-preview.png"
      />

      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-16 h-72 w-72 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 top-0 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.magenta }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[0.66fr_0.34fr] gap-8 items-end">
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
                  DIGITAL SOLUTIONS
                </div>
              </div>

              <h1 className="mt-5 max-w-[900px] text-[35px] sm:text-[40px] lg:text-[45px] font-bold leading-[1.02] tracking-[-0.03em] text-[#16243A]">
                What does your business need technology to do?
              </h1>

              <p className="mt-5 max-w-[750px] text-[14px] leading-7 text-slate-500">
                Sterlings Studio builds websites, web applications, Android
                apps, iOS apps and connected business systems around real
                operational needs.
              </p>

              <p className="mt-3 max-w-[750px] text-[13px] leading-7 text-slate-500">
                Start with the problem. We can help determine whether the right
                answer is a website, management system, marketplace, mobile app
                or a complete digital ecosystem.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white"
              >
                Discuss your idea →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SOLUTION DIRECTORY
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-9">
          <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
            EXPLORE SOLUTIONS
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {directory.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[10px] font-bold text-slate-600 transition hover:-translate-y-0.5 hover:text-[#16243A] hover:shadow-sm"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: item.accent }}
                />
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          AMBITIOUS PRODUCTS
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11">
        <div className="overflow-hidden rounded-[30px] bg-[#0F1F35] text-white">
          <div className="grid lg:grid-cols-3">
            <a
              href="#delivery-platforms"
              className="relative p-7 lg:p-8 transition hover:bg-white/[0.03]"
            >
              <div
                className="absolute inset-x-0 top-0 h-[4px]"
                style={{ background: COLORS.cyan }}
              />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                MOBILITY
              </div>

              <h2 className="mt-3 text-[23px] font-bold">
                Want to build something like Uber?
              </h2>

              <p className="mt-3 text-[11px] leading-6 text-slate-300">
                Passenger app, driver app, GPS, trip requests, pricing,
                payments and administration.
              </p>

              <div className="mt-5 text-[10px] font-bold">
                Explore mobility →
              </div>
            </a>

            <a
              href="#delivery-platforms"
              className="relative border-t lg:border-l lg:border-t-0 border-white/10 p-7 lg:p-8 transition hover:bg-white/[0.03]"
            >
              <div
                className="absolute inset-x-0 top-0 h-[4px]"
                style={{ background: COLORS.violet }}
              />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                DELIVERY
              </div>

              <h2 className="mt-3 text-[23px] font-bold">
                Something like Glovo?
              </h2>

              <p className="mt-3 text-[11px] leading-6 text-slate-300">
                Customers, merchants, riders, dispatch, payments, order
                tracking and operations.
              </p>

              <div className="mt-5 text-[10px] font-bold">
                Explore delivery →
              </div>
            </a>

            <a
              href="#marketplaces"
              className="relative border-t lg:border-l lg:border-t-0 border-white/10 p-7 lg:p-8 transition hover:bg-white/[0.03]"
            >
              <div
                className="absolute inset-x-0 top-0 h-[4px]"
                style={{ background: COLORS.orange }}
              />

              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                MARKETPLACES
              </div>

              <h2 className="mt-3 text-[23px] font-bold">
                Build the marketplace for your industry.
              </h2>

              <p className="mt-3 text-[11px] leading-6 text-slate-300">
                Retail, property, services, ticketing, food or another
                legitimate market.
              </p>

              <div className="mt-5 text-[10px] font-bold">
                Explore marketplaces →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          MANAGEMENT SYSTEMS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
          <div className="flex items-center gap-3">
            <span
              className="h-[3px] w-9 rounded-full"
              style={{ background: COLORS.cyan }}
            />

            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              BUSINESS MANAGEMENT SYSTEMS
            </div>
          </div>

          <h2 className="mt-3 max-w-[850px] text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
            Replace fragmented spreadsheets, paperwork and manual processes.
          </h2>

          <p className="mt-4 max-w-[760px] text-[12px] leading-6 text-slate-500">
            Bring records, users, approvals, payments and reporting into one
            controlled platform designed around your organisation.
          </p>

          <div className="mt-8 grid lg:grid-cols-2 gap-5">
            {managementSystems.map((solution) => (
              <article
                id={solution.id}
                key={solution.id}
                className="scroll-mt-24 relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 lg:p-7"
              >
                <div
                  className="absolute inset-y-0 left-0 w-[4px]"
                  style={{ background: solution.accent }}
                />

                <div
                  className="text-[8px] font-bold tracking-[0.15em]"
                  style={{ color: solution.accent }}
                >
                  {solution.category}
                </div>

                <h3 className="mt-3 text-[21px] font-bold text-[#16243A]">
                  {solution.title}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-slate-500">
                  {solution.intro}
                </p>

                <div className="mt-5 grid sm:grid-cols-2 gap-2">
                  {solution.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-[13px] border border-slate-200 bg-[#F8FAFC] px-3 py-2.5 text-[10px] font-semibold text-slate-600"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex text-[10px] font-bold text-[#16243A] underline underline-offset-4"
                >
                  Discuss this system →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          E-COMMERCE
      ====================================================== */}
      <section
        id="ecommerce"
        className="scroll-mt-24 max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13"
      >
        <div className="grid lg:grid-cols-[0.43fr_0.57fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.orange }}
              />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                E-COMMERCE
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              Turn a physical shop into a digital business.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              Customers can discover products, order, pay and request delivery
              without calling or visiting the shop.
            </p>

            <blockquote className="mt-6 border-l-[3px] border-[#FF8A3D] pl-4 text-[16px] font-semibold leading-7 text-[#16243A]">
              “Commerce becomes more valuable when stock, payments, customers
              and fulfilment speak to each other.”
            </blockquote>

            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
            >
              Build an online store →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {commerceExamples.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-5"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: item.accent }}
                />

                <h3 className="text-[14px] font-bold text-[#16243A]">
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
          MARKETPLACES
      ====================================================== */}
      <section
        id="marketplaces"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
          <div className="grid lg:grid-cols-[0.45fr_0.55fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.magenta }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  ONLINE MARKETPLACES
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Connect buyers and sellers through one digital platform.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                A marketplace can manage sellers, listings, customers,
                payments, commissions, fulfilment and administration in one
                ecosystem.
              </p>

              <blockquote className="mt-6 border-l-[3px] border-[#D946EF] pl-4 text-[16px] font-semibold leading-7 text-[#16243A]">
                “The product is not simply the catalogue. It is everything
                between discovery and fulfilment.”
              </blockquote>

              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
              >
                Build a marketplace →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {marketplaceExamples.map((item) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: item.accent }}
                  />

                  <h3 className="text-[14px] font-bold text-[#16243A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-slate-500">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          DELIVERY & MOBILITY
      ====================================================== */}
      <section
        id="delivery-platforms"
        className="scroll-mt-24 max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13"
      >
        <div className="grid lg:grid-cols-[0.38fr_0.62fr] gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.orange }}
              />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                DELIVERY & MOBILITY
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              Build a platform similar in concept to Uber or Glovo.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              These businesses usually require several connected applications,
              not one app.
            </p>

            <p className="mt-3 text-[11px] leading-6 text-slate-500">
              The brand, operating model, pricing logic and user experience
              remain your own. Familiar platforms simply help illustrate the
              kind of digital ecosystem that can be built.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
            >
              Discuss a mobility platform →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {mobilityProducts.map((item) => (
              <article
                key={item.label}
                className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-5"
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

                <h3 className="mt-2 text-[16px] font-bold text-[#16243A]">
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
          BOOKINGS
      ====================================================== */}
      <section
        id="booking-systems"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
          <div className="grid lg:grid-cols-[0.48fr_0.52fr] gap-8">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.cyan }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  BOOKING & RESERVATION SYSTEMS
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Let customers book without calling.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                Availability, dates, time slots, customer details, payments,
                confirmations and administrative control can all live inside
                one booking platform.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
              >
                Build a booking system →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {bookingExamples.map((item, index) => {
                const accents = [
                  COLORS.cyan,
                  COLORS.blue,
                  COLORS.violet,
                  COLORS.magenta,
                  COLORS.orange,
                  COLORS.cyan,
                  COLORS.blue,
                  COLORS.violet,
                ]

                return (
                  <div
                    key={item}
                    className="relative overflow-hidden rounded-[17px] border border-slate-200 bg-white px-5 py-4"
                  >
                    <div
                      className="absolute inset-y-0 left-0 w-[3px]"
                      style={{ background: accents[index] }}
                    />

                    <div className="text-[11px] font-bold text-[#16243A]">
                      {item}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROPERTY
      ====================================================== */}
      <section
        id="property-platforms"
        className="scroll-mt-24 max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13"
      >
        <div className="grid lg:grid-cols-[0.48fr_0.52fr] gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.magenta }}
              />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                PROPERTY & REAL ESTATE
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              Property discovery built for buyers, renters, owners and agents.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              Build a focused agency website or a larger property marketplace
              with agents, owners, search, maps and lead management.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
            >
              Build a property platform →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5">
            {propertyFeatures.map((item) => (
              <div
                key={item}
                className="rounded-[14px] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[10px] font-semibold text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FINTECH / PAYMENTS
      ====================================================== */}
      <section
        id="fintech"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
          <div className="grid lg:grid-cols-[0.48fr_0.52fr] gap-8">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-9 rounded-full"
                  style={{ background: COLORS.blue }}
                />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  PAYMENTS & FINANCIAL WORKFLOWS
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Make payments part of the product experience.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                We can integrate approved payment providers into websites,
                applications and management platforms so transactions connect
                naturally with orders, bookings, memberships or services.
              </p>

              <p className="mt-3 text-[10px] leading-5 text-slate-400">
                Regulated financial services remain subject to the relevant
                licences, providers and compliance requirements.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
              >
                Discuss payment integration →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-2.5">
              {fintechFeatures.map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-slate-200 bg-white px-4 py-3 text-[10px] font-semibold text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          POLITICAL
      ====================================================== */}
      <section
        id="political-platforms"
        className="scroll-mt-24 max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13"
      >
        <div className="grid lg:grid-cols-[0.48fr_0.52fr] gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-[3px] w-9 rounded-full"
                style={{ background: COLORS.violet }}
              />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                POLITICAL & LEADERSHIP PLATFORMS
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              Build the digital infrastructure behind a serious campaign.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              Communicate policy, organise supporters, publish campaign
              activity and manage digital engagement from one professional
              platform.
            </p>

            <p className="mt-3 text-[10px] leading-5 text-slate-400">
              Contribution and payment functionality must follow applicable
              electoral, financial and payment-provider requirements.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[10px] font-bold text-white"
            >
              Discuss a political platform →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5">
            {politicalFeatures.map((item) => (
              <div
                key={item}
                className="rounded-[14px] border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[10px] font-semibold text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          REGULATED GAMING
      ====================================================== */}
      <section
        id="regulated-gaming"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-13">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[0.55fr_0.45fr]">
              <div className="p-7 lg:p-9">
                <div className="flex items-center gap-3">
                  <span
                    className="h-[3px] w-9 rounded-full"
                    style={{ background: COLORS.orange }}
                  />

                  <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                    REGULATED GAMING TECHNOLOGY
                  </div>
                </div>

                <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                  Digital platforms for properly licensed gaming operators.
                </h2>

                <p className="mt-4 text-[12px] leading-6 text-slate-500">
                  Where legally permitted, a regulated platform may require
                  accounts, wallets, event or market presentation, transaction
                  records, reporting and administrative controls.
                </p>

                <p className="mt-4 text-[10px] leading-5 text-slate-400">
                  Projects in regulated gaming are considered only within the
                  applicable legal framework and may require operator
                  licensing, age verification, responsible-gaming controls,
                  approved payment providers and jurisdiction-specific
                  compliance.
                </p>
              </div>

              <div className="bg-[#0F1F35] p-7 lg:p-9 text-white">
                <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                  POSSIBLE COMPONENTS
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    'User accounts',
                    'Age & identity controls',
                    'Wallet / transaction records',
                    'Event & market presentation',
                    'Administrative controls',
                    'Reporting & audit records',
                    'Responsible-gaming features',
                    'Approved payment integrations',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[10px] font-semibold text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ANYTHING ELSE
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11">
        <div className="grid lg:grid-cols-[0.44fr_0.56fr] gap-8 items-center">
          <div>
            <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
              NOT ON THIS PAGE?
            </div>

            <h2 className="mt-3 text-[27px] lg:text-[31px] font-bold leading-[1.1] text-[#16243A]">
              Your idea does not need to fit an existing category.
            </h2>
          </div>

          <div>
            <blockquote className="border-l-[3px] border-[#8B5CF6] pl-5 text-[17px] font-semibold leading-7 text-[#16243A]">
              “Tell us what people need to do, what is difficult today and what
              a better experience would look like.”
            </blockquote>

            <p className="mt-4 text-[11px] leading-6 text-slate-500">
              The answer may be one website, one app, a custom management
              system or several connected products working together.
            </p>
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
                WHAT SHOULD WE BUILD?
              </div>

              <h2 className="mt-4 max-w-[880px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                A school system?
                <br />
                The next mobility platform?
                <br />
                Or an idea that does not exist yet?
              </h2>

              <p className="mt-5 max-w-[680px] text-[13px] leading-7 text-slate-300">
                Start with the business problem. Sterlings Studio can help
                define the website, web application, Android app, iOS app or
                connected digital ecosystem needed to solve it.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35]"
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