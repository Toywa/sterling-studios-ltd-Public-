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

export default function SupermarketEcommerceWebsite() {
  const capabilities = [
    {
      number: '01',
      title: 'Product Catalogue',
      text:
        'Organise thousands of supermarket products into intuitive departments, categories, brands and searchable product listings.',
      features: [
        'Departments & categories',
        'Product search',
        'Brand filters',
        'Product variants',
        'Images & descriptions',
        'Pricing & offers',
      ],
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Inventory & Availability',
      text:
        'Connect the online catalogue to practical stock workflows so customers can see what is available for purchase.',
      features: [
        'Stock visibility',
        'Branch inventory',
        'Out-of-stock handling',
        'Low-stock alerts',
        'Product availability',
        'Inventory controls',
      ],
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Online Checkout',
      text:
        'Create a clear basket and checkout journey around customer details, delivery location, order totals and approved payment methods.',
      features: [
        'Shopping cart',
        'Customer checkout',
        'M-Pesa payments',
        'Card payments',
        'Order confirmation',
        'Digital receipts',
      ],
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Delivery Management',
      text:
        'Structure fulfilment around delivery zones, branch coverage, fees, time slots and the supermarket’s own operating model.',
      features: [
        'Delivery zones',
        'Delivery fees',
        'Scheduled delivery',
        'Express options',
        'Order assignment',
        'Delivery status',
      ],
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Promotions & Loyalty',
      text:
        'Support repeat purchasing through promotions, campaign pricing, loyalty programmes and personalised customer journeys.',
      features: [
        'Discounts',
        'Promo codes',
        'Special offers',
        'Loyalty points',
        'Customer rewards',
        'Repeat ordering',
      ],
      accent: COLORS.orange,
    },
    {
      number: '06',
      title: 'Store Administration',
      text:
        'Give authorised supermarket teams the tools required to manage products, orders, customers, inventory, promotions and reporting.',
      features: [
        'Product management',
        'Order management',
        'Customer records',
        'Promotion controls',
        'Staff roles',
        'Sales reporting',
      ],
      accent: COLORS.cyan,
    },
  ]

  const shoppingJourney = [
    {
      number: '01',
      title: 'Discover',
      text:
        'Customers browse departments, categories, brands, offers and featured products.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Search',
      text:
        'Fast search and filtering help customers find products without browsing endless pages.',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Build basket',
      text:
        'Customers add groceries, household goods and other available products to one basket.',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Choose fulfilment',
      text:
        'The platform determines the appropriate branch, delivery zone, fee and available time options.',
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Pay',
      text:
        'Customers complete the order using the approved payment methods offered by the retailer.',
      accent: COLORS.orange,
    },
    {
      number: '06',
      title: 'Receive',
      text:
        'Order status, fulfilment and delivery information remain visible through the customer journey.',
      accent: COLORS.cyan,
    },
  ]

  const architecture = [
    {
      label: 'CUSTOMER EXPERIENCE',
      title: 'Online Supermarket',
      text:
        'The public storefront for search, browsing, basket creation, checkout, promotions and customer accounts.',
      accent: COLORS.cyan,
    },
    {
      label: 'OPERATIONS',
      title: 'Order Management',
      text:
        'A controlled environment for receiving, reviewing, preparing and managing customer orders.',
      accent: COLORS.blue,
    },
    {
      label: 'INVENTORY',
      title: 'Products & Stock',
      text:
        'The product, pricing and availability layer that supports the online catalogue.',
      accent: COLORS.violet,
    },
    {
      label: 'DELIVERY',
      title: 'Fulfilment Platform',
      text:
        'Delivery zones, time slots, fees, fulfilment status and operational delivery workflows.',
      accent: COLORS.magenta,
    },
    {
      label: 'TRANSACTIONS',
      title: 'Payments',
      text:
        'M-Pesa, cards and other approved payment providers connected to order and transaction records.',
      accent: COLORS.orange,
    },
    {
      label: 'CONTROL',
      title: 'Administration',
      text:
        'Products, orders, customers, promotions, staff roles, reporting and overall platform configuration.',
      accent: COLORS.cyan,
    },
  ]

  const branchFeatures = [
    {
      title: 'Single store',
      text:
        'A focused online shop connected to one supermarket location and its delivery area.',
      accent: COLORS.cyan,
    },
    {
      title: 'Multiple branches',
      text:
        'Customers can be matched to the appropriate branch according to location, stock and service area.',
      accent: COLORS.blue,
    },
    {
      title: 'Branch-specific stock',
      text:
        'Availability can differ by store rather than presenting one inaccurate inventory view.',
      accent: COLORS.violet,
    },
    {
      title: 'Different delivery zones',
      text:
        'Each store or region can operate with its own coverage, fees and fulfilment rules.',
      accent: COLORS.magenta,
    },
    {
      title: 'Central administration',
      text:
        'Management can retain oversight while allowing appropriate branch-level operational access.',
      accent: COLORS.orange,
    },
    {
      title: 'Scalable expansion',
      text:
        'New branches, categories and service areas can be incorporated as the retail operation grows.',
      accent: COLORS.cyan,
    },
  ]

  const benefits = [
    {
      title: 'Sell beyond the physical aisle',
      text:
        'Customers can shop without travelling to the supermarket before knowing what is available.',
      accent: COLORS.cyan,
    },
    {
      title: 'Reduce checkout friction',
      text:
        'A clear digital shopping journey makes repeat purchasing faster and more convenient.',
      accent: COLORS.blue,
    },
    {
      title: 'Build customer relationships',
      text:
        'Customer accounts, order histories, promotions and loyalty can encourage repeat business.',
      accent: COLORS.violet,
    },
    {
      title: 'Control local delivery',
      text:
        'Define exactly where orders can be delivered and how much each delivery should cost.',
      accent: COLORS.magenta,
    },
    {
      title: 'Improve order visibility',
      text:
        'Give staff a structured operational view instead of handling online orders through disconnected messages.',
      accent: COLORS.orange,
    },
    {
      title: 'Create a digital retail asset',
      text:
        'The retailer develops its own customer channel rather than depending entirely on third-party marketplaces.',
      accent: COLORS.cyan,
    },
  ]

  const commercialFeatures = [
    {
      title: 'Deals & campaigns',
      text:
        'Run promotional prices, category campaigns and time-limited offers.',
      accent: COLORS.cyan,
    },
    {
      title: 'Loyalty',
      text:
        'Reward repeat customers through points or retailer-defined loyalty rules.',
      accent: COLORS.blue,
    },
    {
      title: 'Reordering',
      text:
        'Make recurring household shopping easier by helping customers buy previous items again.',
      accent: COLORS.violet,
    },
    {
      title: 'Free-delivery thresholds',
      text:
        'Use basket value and delivery rules to support commercial promotions.',
      accent: COLORS.magenta,
    },
    {
      title: 'Customer segmentation',
      text:
        'Where appropriate, create more relevant experiences for different customer groups.',
      accent: COLORS.orange,
    },
    {
      title: 'Sales insight',
      text:
        'Use order and product information to understand how the digital channel is performing.',
      accent: COLORS.cyan,
    },
  ]

  const process = [
    {
      number: '01',
      title: 'Understand the supermarket',
      text:
        'We examine branches, catalogue size, stock workflows, customers, payments and fulfilment requirements.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Define the commerce model',
      text:
        'We establish departments, customer journeys, stock rules, delivery logic and required integrations.',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Design the shopping experience',
      text:
        'Search, categories, product pages, basket and checkout are designed around practical grocery shopping.',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Build the platform',
      text:
        'The storefront, customer accounts, administration, database and integrations are developed.',
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Test real orders',
      text:
        'Products, payments, delivery rules and fulfilment journeys are tested before public launch.',
      accent: COLORS.orange,
    },
    {
      number: '06',
      title: 'Launch & improve',
      text:
        'The supermarket launches its digital sales channel and can continue improving it using real operating data.',
      accent: COLORS.cyan,
    },
  ]

  const faqs = [
    {
      question: 'How much does a supermarket e-commerce website cost in Kenya?',
      answer:
        'Cost depends on catalogue size, inventory requirements, branches, delivery logic, payments, customer accounts, promotions and integrations. A simple online shop and a multi-branch supermarket platform are fundamentally different projects, so the final quotation is prepared after scope is defined.',
    },
    {
      question: 'Can the supermarket website accept M-Pesa?',
      answer:
        'Yes. M-Pesa can be integrated through an appropriate approved provider or Safaricom Daraja where suitable. Card payments and other supported payment methods can also be connected according to the retailer’s requirements.',
    },
    {
      question: 'Can customers choose their delivery location?',
      answer:
        'Yes. Delivery can be structured around defined areas, customer addresses, delivery zones, branch coverage and location-based rules. More advanced projects can also incorporate maps and location services.',
    },
    {
      question: 'Can different supermarket branches have different stock?',
      answer:
        'Yes. Multi-branch platforms can be structured so product availability, stock quantities, pricing or fulfilment rules differ by location where the retailer’s operating systems and data support that model.',
    },
    {
      question: 'Can the website support thousands of products?',
      answer:
        'Yes. Catalogue architecture, search, filtering, database structure, image handling and administration can be designed for large product inventories. The exact technical approach depends on catalogue size and integration requirements.',
    },
    {
      question: 'Can customers reorder previous groceries?',
      answer:
        'Yes. Customer accounts and order history can support repeat-order functionality, allowing returning customers to rebuild common baskets more quickly.',
    },
    {
      question: 'Can you build a supermarket mobile app later?',
      answer:
        'Yes. The platform can be architected so Android and iOS applications can connect to the same underlying commerce, customer, payment and order systems when mobile applications become commercially appropriate.',
    },
    {
      question: 'Can regulated products be sold through the supermarket website?',
      answer:
        'Where the retailer is legally permitted to sell regulated or age-restricted products online, the platform can incorporate relevant controls. The retailer remains responsible for applicable licensing, product restrictions, customer verification and regulatory requirements.',
    },
  ]

  const structuredData = [
    {
      '@type': 'Service',
      '@id':
        'https://sterlingsstudio.com/solutions/supermarket-ecommerce-website#service',
      name: 'Supermarket E-commerce Website Development',
      serviceType:
        'Custom Supermarket E-commerce Website and Online Grocery Platform Development',
      url:
        'https://sterlingsstudio.com/solutions/supermarket-ecommerce-website',
      description:
        'Custom supermarket e-commerce website development in Kenya with online grocery catalogues, product search, inventory, M-Pesa and card payments, delivery zones, promotions, loyalty, customer accounts and administration.',
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
        'https://sterlingsstudio.com/solutions/supermarket-ecommerce-website#breadcrumb',
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
          name: 'Supermarket E-commerce Website',
          item:
            'https://sterlingsstudio.com/solutions/supermarket-ecommerce-website',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id':
        'https://sterlingsstudio.com/solutions/supermarket-ecommerce-website#faq',
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
        title="Supermarket E-commerce Website Development Kenya | Sterlings Studio"
        description="Custom supermarket e-commerce website development in Kenya with online grocery shopping, inventory, M-Pesa, card payments, delivery zones, loyalty, promotions and multi-branch administration."
        canonical="https://sterlingsstudio.com/solutions/supermarket-ecommerce-website"
        ogImage="/prod-retail.webp"
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
          style={{ background: COLORS.orange }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[0.57fr_0.43fr] gap-8 lg:gap-10 items-center">
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
                  SUPERMARKET E-COMMERCE WEBSITE KENYA
                </div>
              </div>

              <h1 className="mt-5 max-w-[870px] text-[35px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                Turn your supermarket into a complete online shopping
                experience.
              </h1>

              <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-500">
                Let customers search products, build baskets, pay online,
                select delivery and shop again without needing to visit the
                physical store first.
              </p>

              <p className="mt-3 max-w-[720px] text-[13px] leading-7 text-slate-500">
                Sterlings Studio develops custom supermarket e-commerce
                platforms around your catalogue, branches, inventory,
                customers, payments and delivery model.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5"
                >
                  Build your online supermarket →
                </Link>

                <a
                  href="#commerce-capabilities"
                  className="inline-flex rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[11px] font-bold text-[#16243A]"
                >
                  Explore the platform ↓
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-[21px] border border-slate-200 bg-white">
                {[
                  ['SHOP', 'Search & browse', COLORS.cyan],
                  ['PAY', 'M-Pesa & cards', COLORS.violet],
                  ['DELIVER', 'Local fulfilment', COLORS.orange],
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
                  src="/prod-retail.webp"
                  alt="Digital supermarket and retail e-commerce platform concept by Sterlings Studio"
                  className="block w-full h-[445px] lg:h-[505px] object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081526]/95 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[9px] font-bold tracking-[0.18em] text-white/60">
                    RETAIL TECHNOLOGY
                  </div>

                  <blockquote className="mt-2 max-w-[500px] text-[20px] font-semibold leading-7 text-white">
                    “The digital aisle should be as easy to shop as the physical
                    one.”
                  </blockquote>

                  <Link
                    to="/work"
                    className="mt-4 inline-flex text-[9px] font-bold text-white/80"
                  >
                    Explore our product thinking →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CUSTOMER EXPECTATION
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-12">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#18B8F2]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  THE DIGITAL SUPERMARKET
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
                Customers should be able to complete the whole shop online.
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  title: 'Find it',
                  text:
                    'Search, categories, departments, brands and promotions.',
                  accent: COLORS.cyan,
                },
                {
                  title: 'Buy it',
                  text:
                    'Basket, checkout, customer details and online payments.',
                  accent: COLORS.violet,
                },
                {
                  title: 'Receive it',
                  text:
                    'Delivery location, fees, fulfilment and order status.',
                  accent: COLORS.orange,
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

      {/* ======================================================
          CAPABILITIES
      ====================================================== */}
      <section
        id="commerce-capabilities"
        className="scroll-mt-24 max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14"
      >
        <div className="grid lg:grid-cols-[0.62fr_0.38fr] gap-7 items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#3478F6]" />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                SUPERMARKET E-COMMERCE CAPABILITIES
              </div>
            </div>

            <h2 className="mt-3 max-w-[820px] text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              More than putting products on a website.
            </h2>
          </div>

          <p className="max-w-[450px] lg:ml-auto text-[11px] leading-6 text-slate-500">
            A serious supermarket platform connects customer experience,
            products, stock, transactions and fulfilment.
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

              <div className="flex items-start justify-between gap-5">
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
      </section>

      {/* ======================================================
          SHOPPING JOURNEY
      ====================================================== */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-10">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                CUSTOMER JOURNEY
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08]">
                Grocery shopping is a journey, not a product grid.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-300">
                From search to delivery, every step should feel like part of
                one continuous supermarket experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {shoppingJourney.map((item, index) => (
                <article
                  key={item.number}
                  className={`relative p-5 ${
                    index >= 3
                      ? 'border-t border-white/10'
                      : ''
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

      {/* ======================================================
          MULTI BRANCH
      ====================================================== */}
      <section className="border-b border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#8B5CF6]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  ONE STORE OR MANY
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Build for one supermarket today.
                <br />
                Keep tomorrow possible.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                The right architecture can support a single location or a
                larger retail network with branches operating under one digital
                brand.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {branchFeatures.map((item) => (
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

      {/* ======================================================
          PLATFORM ARCHITECTURE
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="max-w-[820px]">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-9 rounded-full bg-[#D946EF]" />

            <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
              PLATFORM ARCHITECTURE
            </div>
          </div>

          <h2 className="mt-4 text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
            The storefront is only the visible part.
          </h2>

          <p className="mt-4 text-[12px] leading-6 text-slate-500">
            Behind the customer-facing supermarket sits a network of product,
            order, payment, delivery and administration systems.
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

      {/* ======================================================
          COMMERCIAL ENGINE
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#FF8A3D]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  MORE THAN CHECKOUT
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Turn transactions into repeat customers.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-500">
                Supermarket commerce is built around frequency. The digital
                platform can support the commercial tools that encourage
                customers to return.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {commercialFeatures.map((item) => (
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

      {/* ======================================================
          BENEFITS
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#18B8F2]" />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                WHY BUILD YOUR OWN CHANNEL?
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              Your supermarket.
              <br />
              Your customers.
              <br />
              Your digital channel.
            </h2>
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
          SOKOMART CONCEPT
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11 lg:py-12">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[0.48fr_0.52fr]">
              <div className="relative min-h-[390px] overflow-hidden bg-[#F4F7FA]">
                <img
                  src="/prod-retail.webp"
                  alt="SokoMart retail commerce product concept"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F35]/90 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[8px] font-bold tracking-[0.17em] text-white/60">
                    PRODUCT CONCEPT
                  </div>

                  <div className="mt-2 text-[19px] font-bold text-white">
                    SokoMart KE
                  </div>
                </div>
              </div>

              <div className="p-7 lg:p-9 flex flex-col justify-center">
                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  RETAIL PRODUCT THINKING
                </div>

                <h2 className="mt-4 text-[27px] lg:text-[31px] font-bold leading-[1.08] text-[#16243A]">
                  Commerce does not end at the shopping cart.
                </h2>

                <p className="mt-4 text-[11px] leading-6 text-slate-500">
                  Our SokoMart concept explores the wider retail ecosystem:
                  online shopping, payments, product administration and local
                  delivery working as one connected product.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    'Online storefront',
                    'Product catalogue',
                    'M-Pesa',
                    'Customer accounts',
                    'Local delivery',
                    'Administration',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-[9px] font-semibold text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-[9px] leading-5 text-slate-400">
                  SokoMart KE is a Sterlings Studio product concept and is not
                  presented as a commissioned supermarket client platform.
                </p>

                <Link
                  to="/work"
                  className="mt-5 inline-flex text-[10px] font-bold text-[#16243A] underline underline-offset-4"
                >
                  Explore the Product Concept Lab →
                </Link>
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
                FROM STORE TO DIGITAL COMMERCE
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              We begin with how the supermarket operates.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              Products, branches, delivery areas and stock workflows shape the
              architecture before development begins.
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
                Price the retail platform you actually need.
              </h2>

              <p className="mt-4 max-w-[720px] text-[11px] leading-6 text-slate-500">
                Catalogue size, branches, inventory integrations, payments,
                delivery logic, customer accounts and administration all
                influence project scope. We define the system before preparing
                the final quotation.
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
              Supermarket e-commerce questions.
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
                COLORS.violet,
                COLORS.orange,
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
          RELATED SOLUTIONS
      ====================================================== */}
      <section className="border-t border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-3 gap-3">
            <Link
              to="/solutions"
              className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#18B8F2]" />

              <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                E-COMMERCE
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[13px] font-bold text-[#16243A]">
                  Explore E-commerce
                </span>

                <span className="text-[#18B8F2] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>

            <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#8B5CF6]" />

              <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                COMING NEXT
              </div>

              <div className="mt-2 text-[13px] font-bold text-[#16243A]">
                Wines & Spirits E-commerce
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#FF8A3D]" />

              <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                LATER
              </div>

              <div className="mt-2 text-[13px] font-bold text-[#16243A]">
                Pharmacy E-commerce
              </div>
            </div>
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
                  SUPERMARKET E-COMMERCE DEVELOPMENT
                </div>
              </div>

              <h2 className="mt-4 max-w-[900px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                Your shelves are already stocked.
                <br />
                Now open the digital aisle.
              </h2>

              <p className="mt-5 max-w-[700px] text-[13px] leading-7 text-slate-300">
                Whether you operate one supermarket or a growing retail chain,
                we can help define the right online shopping, payment,
                inventory and delivery architecture.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Build your online supermarket →
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