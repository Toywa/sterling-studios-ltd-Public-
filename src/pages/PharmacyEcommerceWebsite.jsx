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

export default function PharmacyEcommerceWebsite() {
  const capabilities = [
    {
      number: '01',
      title: 'Pharmacy Product Catalogue',
      text:
        'Create a structured catalogue for permitted medicines, healthcare products, personal care, mother and baby, medical devices and other pharmacy inventory.',
      features: [
        'Product categories',
        'Search & filters',
        'Brands',
        'Product variants',
        'Stock visibility',
        'Product information',
      ],
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Prescription Workflow',
      text:
        'Route prescription-dependent purchases through a controlled review process rather than treating them like unrestricted online retail.',
      features: [
        'Secure upload',
        'Prescription records',
        'Review queue',
        'Customer clarification',
        'Approval workflow',
        'Order linkage',
      ],
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Pharmacist Review',
      text:
        'Give authorised pharmacy professionals a dedicated workspace for reviewing prescription requests before appropriate fulfilment.',
      features: [
        'Review dashboard',
        'Role-based access',
        'Customer communication',
        'Order approval',
        'Review history',
        'Internal notes',
      ],
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Checkout & Payments',
      text:
        'Connect approved orders and ordinary permitted retail purchases to a clear checkout journey with appropriate payment integrations.',
      features: [
        'Shopping cart',
        'M-Pesa',
        'Card payments',
        'Payment status',
        'Order confirmation',
        'Digital receipts',
      ],
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Delivery & Collection',
      text:
        'Manage delivery areas, collection options, fulfilment status and handover workflows around the pharmacy’s operating model.',
      features: [
        'Delivery zones',
        'Delivery charges',
        'Store collection',
        'Order tracking',
        'Dispatch status',
        'Handover records',
      ],
      accent: COLORS.orange,
    },
    {
      number: '06',
      title: 'Pharmacy Administration',
      text:
        'Bring products, inventory, customers, prescriptions, orders, staff access and reporting into one controlled operational platform.',
      features: [
        'Inventory controls',
        'Order management',
        'Staff permissions',
        'Customer records',
        'Prescription records',
        'Reporting',
      ],
      accent: COLORS.cyan,
    },
  ]

  const categories = [
    {
      title: 'OTC & General Pharmacy',
      text:
        'A searchable catalogue for permitted non-prescription pharmacy products.',
      accent: COLORS.cyan,
    },
    {
      title: 'Prescription Fulfilment',
      text:
        'A separate professional review journey for items requiring prescription handling.',
      accent: COLORS.blue,
    },
    {
      title: 'Personal Care',
      text:
        'Personal hygiene, oral care and other retailer-approved health and care products.',
      accent: COLORS.violet,
    },
    {
      title: 'Mother & Baby',
      text:
        'Baby care, maternal care and related pharmacy retail products.',
      accent: COLORS.magenta,
    },
    {
      title: 'Medical Devices',
      text:
        'Approved home-health and medical-device products carried by the pharmacy.',
      accent: COLORS.orange,
    },
    {
      title: 'Health & Wellness',
      text:
        'Other permitted wellness products organised around the pharmacy’s catalogue.',
      accent: COLORS.cyan,
    },
  ]

  const prescriptionJourney = [
    {
      number: '01',
      title: 'Submit',
      text:
        'The customer securely submits the prescription or starts a prescription request.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Receive',
      text:
        'The request enters the pharmacy’s controlled prescription review queue.',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Review',
      text:
        'An authorised pharmacy professional reviews the request and relevant information.',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Clarify',
      text:
        'Where necessary, the pharmacy can contact the customer before the order proceeds.',
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Approve',
      text:
        'An appropriate approved order can proceed to payment and preparation.',
      accent: COLORS.orange,
    },
    {
      number: '06',
      title: 'Fulfil',
      text:
        'The pharmacy prepares the approved order for collection or permitted delivery.',
      accent: COLORS.cyan,
    },
  ]

  const privacyFeatures = [
    {
      title: 'Controlled access',
      text:
        'Prescription and health-related information should only be visible to authorised users who require it.',
      accent: COLORS.cyan,
    },
    {
      title: 'Secure uploads',
      text:
        'Prescription files can be handled through controlled storage rather than public links or ordinary product-image storage.',
      accent: COLORS.blue,
    },
    {
      title: 'Role separation',
      text:
        'Pharmacists, administrators, fulfilment teams and delivery personnel can receive different levels of access.',
      accent: COLORS.violet,
    },
    {
      title: 'Auditability',
      text:
        'Important actions can be recorded so the pharmacy has a clearer history of review and fulfilment activity.',
      accent: COLORS.magenta,
    },
    {
      title: 'Data minimisation',
      text:
        'The platform can be designed to collect only the information required for the agreed pharmacy workflow.',
      accent: COLORS.orange,
    },
    {
      title: 'Retention controls',
      text:
        'Data-management rules can be incorporated around the pharmacy’s legal and operational requirements.',
      accent: COLORS.cyan,
    },
  ]

  const architecture = [
    {
      label: 'CUSTOMER',
      title: 'Online Pharmacy',
      text:
        'The public storefront for product discovery, customer accounts, basket, checkout and prescription submission.',
      accent: COLORS.cyan,
    },
    {
      label: 'PROFESSIONAL',
      title: 'Pharmacist Workspace',
      text:
        'A restricted environment for prescription review, customer clarification and appropriate approval workflows.',
      accent: COLORS.blue,
    },
    {
      label: 'COMMERCE',
      title: 'Orders & Payments',
      text:
        'The transaction layer connecting approved products, customer orders, payments and fulfilment.',
      accent: COLORS.violet,
    },
    {
      label: 'STOCK',
      title: 'Inventory Platform',
      text:
        'Product availability, quantities, variants and other pharmacy inventory information.',
      accent: COLORS.magenta,
    },
    {
      label: 'FULFILMENT',
      title: 'Delivery & Collection',
      text:
        'Delivery zones, collection options, dispatch stages and order handover workflows.',
      accent: COLORS.orange,
    },
    {
      label: 'CONTROL',
      title: 'Administration',
      text:
        'Products, staff, permissions, customers, orders, reporting and platform configuration.',
      accent: COLORS.cyan,
    },
  ]

  const inventoryFeatures = [
    {
      title: 'Product availability',
      text:
        'Keep the customer catalogue aligned with what the pharmacy can actually fulfil.',
      accent: COLORS.cyan,
    },
    {
      title: 'Stock quantities',
      text:
        'Give authorised teams structured visibility into available inventory.',
      accent: COLORS.blue,
    },
    {
      title: 'Low-stock awareness',
      text:
        'Support alerts or operational views for items approaching configured stock thresholds.',
      accent: COLORS.violet,
    },
    {
      title: 'Batch & expiry fields',
      text:
        'Where required by the pharmacy workflow, product records can include relevant batch and expiry information.',
      accent: COLORS.magenta,
    },
    {
      title: 'Unavailable products',
      text:
        'Products can be hidden, disabled or marked unavailable instead of accepting impossible orders.',
      accent: COLORS.orange,
    },
    {
      title: 'Branch inventory',
      text:
        'Larger pharmacy groups can be structured around different stock positions at different branches.',
      accent: COLORS.cyan,
    },
  ]

  const fulfilmentFeatures = [
    {
      title: 'Delivery zones',
      text:
        'Define the areas where the pharmacy is prepared and permitted to deliver.',
      accent: COLORS.cyan,
    },
    {
      title: 'Store collection',
      text:
        'Allow customers to collect prepared orders from an appropriate pharmacy location.',
      accent: COLORS.blue,
    },
    {
      title: 'Delivery charges',
      text:
        'Configure fees according to location, zone or other agreed commercial rules.',
      accent: COLORS.violet,
    },
    {
      title: 'Order status',
      text:
        'Move orders through clear stages from review and preparation to dispatch or collection.',
      accent: COLORS.magenta,
    },
    {
      title: 'Customer notifications',
      text:
        'Keep customers informed as their approved order progresses through fulfilment.',
      accent: COLORS.orange,
    },
    {
      title: 'Special handling',
      text:
        'Products requiring specialised transport can be separated from ordinary delivery workflows.',
      accent: COLORS.cyan,
    },
  ]

  const operations = [
    {
      title: 'Product management',
      text:
        'Create, update, categorise or disable catalogue items without editing website code.',
      accent: COLORS.cyan,
    },
    {
      title: 'Prescription queue',
      text:
        'Keep requests requiring professional review separate from ordinary retail orders.',
      accent: COLORS.blue,
    },
    {
      title: 'Order dashboard',
      text:
        'Give the pharmacy a structured view of pending, approved, preparing and completed orders.',
      accent: COLORS.violet,
    },
    {
      title: 'Staff permissions',
      text:
        'Control which members of the team can access sensitive or operational functions.',
      accent: COLORS.magenta,
    },
    {
      title: 'Payment reconciliation',
      text:
        'Connect payment status directly to the corresponding customer order.',
      accent: COLORS.orange,
    },
    {
      title: 'Operational reporting',
      text:
        'Review digital sales, fulfilment and product activity through structured reporting.',
      accent: COLORS.cyan,
    },
  ]

  const process = [
    {
      number: '01',
      title: 'Understand the pharmacy',
      text:
        'We examine premises, professional workflows, products, prescriptions, inventory, payments and fulfilment.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Define access & controls',
      text:
        'We determine which products can follow ordinary commerce and which workflows require professional review.',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Design the journeys',
      text:
        'Customer, pharmacist, administration and fulfilment experiences are designed around their different responsibilities.',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Build & integrate',
      text:
        'The storefront, prescription workflow, administration, database, payments and fulfilment tools are developed.',
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Test carefully',
      text:
        'Permissions, prescriptions, orders, payments, stock states and fulfilment journeys are tested before launch.',
      accent: COLORS.orange,
    },
    {
      number: '06',
      title: 'Launch & support',
      text:
        'The pharmacy launches its digital platform and can continue improving it as operational needs evolve.',
      accent: COLORS.cyan,
    },
  ]

  const faqs = [
    {
      question:
        'Can Sterlings Studio build an online pharmacy website in Kenya?',
      answer:
        'Yes. We can develop a custom e-commerce and prescription-request platform for an appropriately licensed pharmacy, including product catalogues, customer accounts, prescription workflows, payments, inventory, delivery and administration.',
    },
    {
      question:
        'Can customers upload prescriptions through the website?',
      answer:
        'Yes. The platform can provide a secure prescription-upload workflow that routes the request to authorised pharmacy personnel for review rather than treating prescription-dependent products as ordinary unrestricted purchases.',
    },
    {
      question:
        'Can prescription medicines be reviewed before payment?',
      answer:
        'Yes. The workflow can separate prescription submission from final order approval so the pharmacy can review the request, communicate with the customer where necessary and determine the appropriate next step before fulfilment.',
    },
    {
      question:
        'Can the pharmacy accept M-Pesa?',
      answer:
        'Yes. Appropriate M-Pesa payment integrations can be connected to approved customer orders. Supported card-payment providers can also be integrated where required.',
    },
    {
      question:
        'Can the system manage OTC products as normal e-commerce?',
      answer:
        'The platform can provide a standard catalogue, basket and checkout journey for products the pharmacy is permitted to sell through that workflow, while keeping products requiring additional controls in a separate process.',
    },
    {
      question:
        'Can different staff members have different permissions?',
      answer:
        'Yes. Pharmacists, administrators, inventory staff and fulfilment teams can have role-based access so sensitive functions and information are not unnecessarily available to every user.',
    },
    {
      question:
        'Can the platform support several pharmacy branches?',
      answer:
        'Yes. A multi-branch architecture can support branch-specific inventory, fulfilment areas, staff access and order routing where required.',
    },
    {
      question:
        'Can you build an Android or iPhone pharmacy app later?',
      answer:
        'Yes. The underlying commerce and pharmacy systems can be designed so future Android and iOS applications connect to the same customers, products, prescriptions, orders, payments and administration infrastructure.',
    },
  ]

  const structuredData = [
    {
      '@type': 'Service',
      '@id':
        'https://sterlingsstudio.com/solutions/pharmacy-ecommerce-website#service',
      name: 'Pharmacy E-commerce Website Development',
      serviceType:
        'Custom Pharmacy E-commerce and Prescription Workflow Development',
      url:
        'https://sterlingsstudio.com/solutions/pharmacy-ecommerce-website',
      description:
        'Custom pharmacy e-commerce website development in Kenya with product catalogues, prescription workflows, pharmacist review, inventory, M-Pesa and card payments, delivery and secure administration.',
      provider: {
        '@id': 'https://sterlingsstudio.com/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Kenya',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://sterlingsstudio.com/solutions/pharmacy-ecommerce-website#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://sterlingsstudio.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Solutions',
          item: 'https://sterlingsstudio.com/solutions',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Pharmacy E-commerce Website',
          item:
            'https://sterlingsstudio.com/solutions/pharmacy-ecommerce-website',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id':
        'https://sterlingsstudio.com/solutions/pharmacy-ecommerce-website#faq',
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
        title="Pharmacy E-commerce Website Development Kenya | Sterlings Studio"
        description="Custom pharmacy e-commerce website development in Kenya with prescription upload, pharmacist review, inventory, M-Pesa, card payments, delivery and secure administration."
        canonical="https://sterlingsstudio.com/solutions/pharmacy-ecommerce-website"
        ogImage="/prod-retail.webp"
        structuredData={structuredData}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.violet }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[0.58fr_0.42fr] gap-8 lg:gap-10 items-center">
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
                  PHARMACY E-COMMERCE WEBSITE KENYA
                </div>
              </div>

              <h1 className="mt-5 max-w-[900px] text-[35px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                Take your pharmacy online without turning healthcare into
                ordinary retail.
              </h1>

              <p className="mt-5 max-w-[740px] text-[14px] leading-7 text-slate-500">
                Create a professional digital pharmacy where customers can
                discover permitted products, submit prescriptions, receive
                pharmacy review, pay and arrange fulfilment through one
                connected platform.
              </p>

              <p className="mt-3 max-w-[740px] text-[13px] leading-7 text-slate-500">
                Sterlings Studio develops custom pharmacy e-commerce platforms
                around the licensed pharmacy, its professional workflows,
                inventory, customers, payments and delivery model.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5"
                >
                  Build your online pharmacy →
                </Link>

                <a
                  href="#platform"
                  className="inline-flex rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-[#16243A]"
                >
                  Explore the platform ↓
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-[21px] border border-slate-200 bg-white">
                {[
                  ['SHOP', 'Product catalogue', COLORS.cyan],
                  ['PRESCRIPTION', 'Review workflow', COLORS.blue],
                  ['FULFILMENT', 'Pay & deliver', COLORS.violet],
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
              <div className="relative min-h-[480px] overflow-hidden rounded-[22px] bg-[#0F1F35]">
                <img
                  src="/prod-retail.webp"
                  alt="Digital pharmacy e-commerce platform concept by Sterlings Studio"
                  className="absolute inset-0 h-full w-full object-cover opacity-65"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081526] via-[#081526]/35 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[9px] font-bold tracking-[0.18em] text-white/60">
                    DIGITAL PHARMACY PLATFORM
                  </div>

                  <div className="mt-3 text-[22px] font-semibold leading-7 text-white">
                    Commerce where appropriate.
                    <br />
                    Professional review where required.
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      'Prescription workflow',
                      'Role based',
                      'M-Pesa',
                      'Delivery',
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 px-3 py-2 text-[8px] font-bold text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOT ORDINARY COMMERCE */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11">
          <div className="grid lg:grid-cols-[0.40fr_0.60fr] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#18B8F2]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  NOT ORDINARY E-COMMERCE
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Different products can require different journeys.
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  title: 'Retail',
                  text:
                    'Permitted ordinary products can follow a familiar shopping journey.',
                  accent: COLORS.cyan,
                },
                {
                  title: 'Prescription',
                  text:
                    'Prescription requests can enter a professional review workflow.',
                  accent: COLORS.blue,
                },
                {
                  title: 'Fulfilment',
                  text:
                    'Approved orders proceed through payment, preparation and appropriate handover.',
                  accent: COLORS.violet,
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-white p-5"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: item.accent }}
                  />

                  <h3 className="text-[13px] font-bold text-[#16243A]">
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
      </section>

      {/* CATEGORIES */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#3478F6]" />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                PHARMACY CATALOGUE
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              Make a large pharmacy catalogue easy to navigate.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              Clear categories, search and filtering help customers find
              appropriate products without turning the platform into an
              endless product list.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map((item) => (
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

      {/* CAPABILITIES */}
      <section
        id="platform"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-7 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#8B5CF6]" />

                <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                  PHARMACY PLATFORM CAPABILITIES
                </div>
              </div>

              <h2 className="mt-3 max-w-[820px] text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Customer convenience without removing professional control.
              </h2>
            </div>

            <p className="max-w-[450px] lg:ml-auto text-[11px] leading-6 text-slate-500">
              The final modules depend on the pharmacy, products, professional
              workflows and fulfilment model.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="relative overflow-hidden rounded-[23px] border border-slate-200 bg-white p-6"
              >
                <div
                  className="absolute inset-y-0 left-0 w-[4px]"
                  style={{ background: item.accent }}
                />

                <div className="flex justify-between gap-5">
                  <div>
                    <div
                      className="text-[8px] font-bold tracking-[0.15em]"
                      style={{ color: item.accent }}
                    >
                      CAPABILITY {item.number}
                    </div>

                    <h3 className="mt-3 text-[18px] font-bold text-[#16243A]">
                      {item.title}
                    </h3>
                  </div>

                  <span
                    className="text-[10px] font-bold"
                    style={{ color: item.accent }}
                  >
                    {item.number}
                  </span>
                </div>

                <p className="mt-3 text-[11px] leading-6 text-slate-500">
                  {item.text}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {item.features.map((feature) => (
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
        </div>
      </section>

      {/* PRESCRIPTION WORKFLOW */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-10">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                PRESCRIPTION JOURNEY
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08]">
                Upload should begin the review — not bypass it.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-300">
                The platform can place the pharmacy professional between the
                prescription request and fulfilment rather than automatically
                treating the submission as an approved order.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {prescriptionJourney.map((item, index) => (
                <article
                  key={item.number}
                  className={`relative p-5 ${
                    index >= 3 ? 'border-t border-white/10' : ''
                  } ${
                    index % 3 !== 0
                      ? 'lg:border-l lg:border-white/10'
                      : ''
                  }`}
                >
                  <div
                    className="text-[9px] font-bold"
                    style={{ color: item.accent }}
                  >
                    {item.number}
                  </div>

                  <h3 className="mt-3 text-[13px] font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[9px] leading-5 text-slate-300">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="border-b border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#D946EF]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  SENSITIVE INFORMATION
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Prescription data should not behave like ordinary shopping
                data.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                The architecture can separate sensitive pharmacy workflows
                from ordinary catalogue and fulfilment functions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {privacyFeatures.map((item) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-white p-5"
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
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="max-w-[820px]">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-9 rounded-full bg-[#8B5CF6]" />

            <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
              PLATFORM ARCHITECTURE
            </div>
          </div>

          <h2 className="mt-4 text-[28px] lg:text-[34px] font-bold leading-[1.08] text-[#16243A]">
            One pharmacy platform. Different controlled environments.
          </h2>

          <p className="mt-4 text-[12px] leading-6 text-slate-500">
            Customers, pharmacists, administrators and fulfilment teams do not
            need the same interface or the same access.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {architecture.map((item) => (
            <article
              key={item.label}
              className="relative overflow-hidden rounded-[19px] border border-slate-200 bg-[#F8FAFC] p-5"
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
      </section>

      {/* INVENTORY */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#3478F6]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  INVENTORY
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Do not sell online what the pharmacy cannot fulfil.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                Stock visibility should connect the digital catalogue to
                practical pharmacy operations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {inventoryFeatures.map((item) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-white p-5"
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
        </div>
      </section>

      {/* PAYMENTS */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11">
        <div className="overflow-hidden rounded-[27px] bg-[#0F1F35] text-white">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            <div className="p-7 lg:p-8">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                PAYMENTS
              </div>

              <h2 className="mt-4 text-[26px] lg:text-[30px] font-bold leading-[1.08]">
                Connect payment to the approved order.
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 border-t lg:border-l lg:border-t-0 border-white/10">
              {[
                {
                  title: 'M-Pesa',
                  text:
                    'Appropriate M-Pesa payment flows can be connected directly to customer orders.',
                  accent: COLORS.cyan,
                },
                {
                  title: 'Cards',
                  text:
                    'Supported card-payment providers can be integrated where required.',
                  accent: COLORS.violet,
                },
                {
                  title: 'Order records',
                  text:
                    'Payment status remains tied to the corresponding order for clearer reconciliation.',
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
      </section>

      {/* FULFILMENT */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#FF8A3D]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  DELIVERY & COLLECTION
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Fulfilment designed around the pharmacy.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {fulfilmentFeatures.map((item) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-white p-5"
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
        </div>
      </section>

      {/* OPERATIONS */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#18B8F2]" />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                BEHIND THE COUNTER
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              Give the pharmacy team operational control.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {operations.map((item) => (
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

      {/* PROCESS */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#3478F6]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  FROM PHARMACY TO PLATFORM
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                We begin with the professional workflow.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                The system should reflect how the pharmacy is licensed,
                staffed, stocked and operated before we decide how the digital
                experience should work.
              </p>

              <Link
                to="/process"
                className="mt-6 inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-[10px] font-bold text-[#16243A]"
              >
                See our full process →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {process.map((item) => (
                <article
                  key={item.number}
                  className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-white p-5"
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
        </div>
      </section>

      {/* RESPONSIBILITY */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
        <div className="rounded-[22px] border border-slate-200 bg-white p-6 lg:p-7">
          <div className="grid lg:grid-cols-[0.24fr_0.76fr] gap-5">
            <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
              RESPONSIBILITY
            </div>

            <div>
              <h2 className="text-[17px] font-bold text-[#16243A]">
                Technology supports pharmacy operations. It does not replace
                professional or regulatory responsibility.
              </h2>

              <p className="mt-3 text-[10px] leading-6 text-slate-500">
                The pharmacy and its authorised professionals remain
                responsible for licensing, prescription assessment,
                dispensing, product restrictions, professional decisions,
                patient information and fulfilment requirements. Sterlings
                Studio develops the agreed digital controls and workflows
                around those responsibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#D946EF]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  FREQUENTLY ASKED QUESTIONS
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Pharmacy e-commerce questions.
              </h2>
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
                  COLORS.violet,
                  COLORS.orange,
                ]

                return (
                  <article
                    key={faq.question}
                    className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-white p-5"
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
        </div>
      </section>

      {/* RELATED SOLUTIONS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-3 gap-3">
            <Link
              to="/solutions/supermarket-ecommerce-website"
              className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#18B8F2]" />

              <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                RETAIL COMMERCE
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[13px] font-bold text-[#16243A]">
                  Supermarket E-commerce
                </span>

                <span className="text-[#18B8F2]">→</span>
              </div>
            </Link>

            <Link
              to="/solutions/wines-and-spirits-ecommerce-website"
              className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#8B5CF6]" />

              <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                REGULATED COMMERCE
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[13px] font-bold text-[#16243A]">
                  Wines & Spirits
                </span>

                <span className="text-[#8B5CF6]">→</span>
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

                <span className="text-[#FF8A3D]">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#0F1F35] text-white">
        <div
          aria-hidden="true"
          className="absolute -left-24 -top-32 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ background: COLORS.cyan }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-20 -bottom-36 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: COLORS.violet }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.72fr_0.28fr] gap-8 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-[3px] w-10 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg,#18B8F2,#3478F6,#8B5CF6,#D946EF)',
                  }}
                />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  PHARMACY E-COMMERCE DEVELOPMENT
                </div>
              </div>

              <h2 className="mt-4 max-w-[900px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                Put the pharmacy online.
                <br />
                Keep the pharmacist in the workflow.
              </h2>

              <p className="mt-5 max-w-[720px] text-[13px] leading-7 text-slate-300">
                We can help an appropriately licensed pharmacy build a
                structured digital channel for products, prescription
                requests, payments, inventory and fulfilment.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Discuss your pharmacy platform →
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