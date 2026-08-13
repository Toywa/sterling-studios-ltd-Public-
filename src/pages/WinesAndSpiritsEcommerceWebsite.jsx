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

export default function WinesAndSpiritsEcommerceWebsite() {
  const capabilities = [
    {
      number: '01',
      title: 'Alcohol Product Catalogue',
      text:
        'Organise wines, whisky, gin, vodka, rum, brandy, beer, liqueurs, mixers and other permitted products into a premium searchable catalogue.',
      features: [
        'Product categories',
        'Brands',
        'Bottle sizes',
        'Product variants',
        'Search & filters',
        'Stock visibility',
      ],
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Age-Controlled Commerce',
      text:
        'Build responsible age controls into the customer journey rather than treating alcohol like an unrestricted retail product.',
      features: [
        '18+ entry notice',
        'Age declaration',
        'Checkout controls',
        'ID verification workflow',
        'Delivery verification',
        'Responsible-sale notices',
      ],
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Payments & Checkout',
      text:
        'Create a fast checkout experience around customer details, delivery location, order totals and approved payment methods.',
      features: [
        'Shopping cart',
        'M-Pesa payments',
        'Card payments',
        'Order confirmation',
        'Payment records',
        'Digital receipts',
      ],
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Delivery Management',
      text:
        'Control exactly where orders can be delivered, the applicable fee and when fulfilment is available.',
      features: [
        'Delivery zones',
        'Distance rules',
        'Delivery fees',
        'Operating windows',
        'Order status',
        'Delivery verification',
      ],
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Offers & Customer Retention',
      text:
        'Support lawful promotions and repeat-customer programmes while keeping responsible alcohol marketing at the centre of the platform.',
      features: [
        'Promo codes',
        'Special pricing',
        'Customer accounts',
        'Order history',
        'Compliant loyalty',
        'Repeat ordering',
      ],
      accent: COLORS.orange,
    },
    {
      number: '06',
      title: 'Store Administration',
      text:
        'Give authorised staff one operational environment for products, inventory, orders, customers, payments and fulfilment.',
      features: [
        'Product management',
        'Inventory controls',
        'Order management',
        'Staff roles',
        'Customer records',
        'Sales reporting',
      ],
      accent: COLORS.cyan,
    },
  ]

  const categories = [
    {
      title: 'Whisky',
      text: 'Brands, bottle sizes, origins and available variants.',
      accent: COLORS.cyan,
    },
    {
      title: 'Wine',
      text: 'Red, white, rosé, sparkling and other retailer-defined collections.',
      accent: COLORS.blue,
    },
    {
      title: 'Gin',
      text: 'Premium, standard and craft selections organised clearly.',
      accent: COLORS.violet,
    },
    {
      title: 'Vodka',
      text: 'Searchable products with brand and bottle-size variations.',
      accent: COLORS.magenta,
    },
    {
      title: 'Rum & Brandy',
      text: 'Structured catalogues across different brands and price ranges.',
      accent: COLORS.orange,
    },
    {
      title: 'Beer & Mixers',
      text: 'Where legally permitted, complete the catalogue with complementary products.',
      accent: COLORS.cyan,
    },
  ]

  const responsibleCommerce = [
    {
      number: '01',
      title: 'Age notice',
      text:
        'Make the age restriction clear before customers begin the purchasing journey.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Age declaration',
      text:
        'Require customers to confirm eligibility when entering or purchasing through the platform.',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Checkout controls',
      text:
        'Place responsible-sale information and appropriate checks within checkout.',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Delivery verification',
      text:
        'Create a handover workflow that allows the retailer or rider to verify eligibility before completing delivery.',
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Sales windows',
      text:
        'Configure ordering and fulfilment availability around the retailer’s applicable licence and operating requirements.',
      accent: COLORS.orange,
    },
    {
      number: '06',
      title: 'Responsible messaging',
      text:
        'Keep required warnings and responsible alcohol messaging visible in appropriate parts of the customer journey.',
      accent: COLORS.cyan,
    },
  ]

  const architecture = [
    {
      label: 'CUSTOMER',
      title: 'Online Liquor Store',
      text:
        'The customer-facing storefront for product discovery, search, basket, checkout and account management.',
      accent: COLORS.cyan,
    },
    {
      label: 'COMMERCE',
      title: 'Orders & Checkout',
      text:
        'The transactional layer connecting products, customers, delivery rules and payments.',
      accent: COLORS.blue,
    },
    {
      label: 'STOCK',
      title: 'Inventory Platform',
      text:
        'Product availability, variants, quantities and stock-management workflows.',
      accent: COLORS.violet,
    },
    {
      label: 'FULFILMENT',
      title: 'Delivery Operations',
      text:
        'Delivery zones, fees, order assignment, status and responsible handover workflows.',
      accent: COLORS.magenta,
    },
    {
      label: 'PAYMENTS',
      title: 'M-Pesa & Cards',
      text:
        'Approved payment integrations connected directly to customer orders and transaction records.',
      accent: COLORS.orange,
    },
    {
      label: 'CONTROL',
      title: 'Admin Dashboard',
      text:
        'Central management for catalogue, customers, orders, promotions, staff and reporting.',
      accent: COLORS.cyan,
    },
  ]

  const deliveryFeatures = [
    {
      title: 'Defined delivery areas',
      text:
        'Serve only locations the retailer has chosen and can fulfil reliably.',
      accent: COLORS.cyan,
    },
    {
      title: 'Zone-based pricing',
      text:
        'Set different delivery charges for different areas or distance ranges.',
      accent: COLORS.blue,
    },
    {
      title: 'Free-delivery rules',
      text:
        'Configure basket-value thresholds where commercially and legally appropriate.',
      accent: COLORS.violet,
    },
    {
      title: 'Ordering windows',
      text:
        'Prevent orders from being accepted outside configured sales or fulfilment periods.',
      accent: COLORS.magenta,
    },
    {
      title: 'Order tracking',
      text:
        'Customers and staff can follow the order from confirmation through fulfilment.',
      accent: COLORS.orange,
    },
    {
      title: 'Handover controls',
      text:
        'Support responsible delivery completion, including required verification steps.',
      accent: COLORS.cyan,
    },
  ]

  const operations = [
    {
      title: 'Live catalogue control',
      text:
        'Add, update, remove or temporarily disable products without changing website code.',
      accent: COLORS.cyan,
    },
    {
      title: 'Inventory visibility',
      text:
        'Reduce orders for products that are unavailable by connecting stock status to the storefront.',
      accent: COLORS.blue,
    },
    {
      title: 'Order dashboard',
      text:
        'Move new orders through received, confirmed, preparing, dispatched and completed stages.',
      accent: COLORS.violet,
    },
    {
      title: 'Customer history',
      text:
        'Maintain appropriate customer and order records for account and service workflows.',
      accent: COLORS.magenta,
    },
    {
      title: 'Payment records',
      text:
        'Connect payment confirmation and transaction information directly to the corresponding order.',
      accent: COLORS.orange,
    },
    {
      title: 'Business reporting',
      text:
        'Understand products, orders and digital sales performance through structured reporting.',
      accent: COLORS.cyan,
    },
  ]

  const process = [
    {
      number: '01',
      title: 'Understand the business',
      text:
        'We examine licensing context, products, stock, delivery coverage, customers, payments and operating model.',
      accent: COLORS.cyan,
    },
    {
      number: '02',
      title: 'Define responsible commerce',
      text:
        'Age controls, sales windows, fulfilment rules and required customer notices are included in the system scope.',
      accent: COLORS.blue,
    },
    {
      number: '03',
      title: 'Design the shopping journey',
      text:
        'Categories, product discovery, basket, checkout and delivery are designed around fast repeat purchasing.',
      accent: COLORS.violet,
    },
    {
      number: '04',
      title: 'Build & integrate',
      text:
        'The storefront, administration, database, payments and fulfilment workflows are developed.',
      accent: COLORS.magenta,
    },
    {
      number: '05',
      title: 'Test real workflows',
      text:
        'Orders, payments, stock states, delivery rules and responsible-sale controls are tested before launch.',
      accent: COLORS.orange,
    },
    {
      number: '06',
      title: 'Launch & improve',
      text:
        'The retailer launches its own digital sales channel and can continue improving it using operating data.',
      accent: COLORS.cyan,
    },
  ]

  const faqs = [
    {
      question:
        'Can Sterlings Studio build an online wines and spirits store in Kenya?',
      answer:
        'Yes. We can develop a custom e-commerce platform for a properly licensed wines and spirits retailer, including catalogue management, inventory, payments, delivery zones, customer accounts, administration and responsible-sale controls.',
    },
    {
      question:
        'Can a wines and spirits website accept M-Pesa payments?',
      answer:
        'Yes. M-Pesa can be connected through an appropriate approved payment provider or Safaricom Daraja. Card payments can also be integrated depending on the merchant account and payment provider.',
    },
    {
      question:
        'Can the website prevent people under 18 from ordering alcohol?',
      answer:
        'The platform can incorporate age notices, customer declarations, checkout controls and delivery-verification workflows. The licensed retailer remains responsible for ensuring its sales and fulfilment procedures comply with applicable law.',
    },
    {
      question:
        'Can ordering automatically close outside permitted hours?',
      answer:
        'Yes. Ordering and fulfilment windows can be configured around the hours applicable to the retailer. The platform does not assume that every alcohol licence has the same permitted hours.',
    },
    {
      question:
        'Can customers search by alcohol category and brand?',
      answer:
        'Yes. Products can be organised by categories such as whisky, wine, gin, vodka, rum, brandy and beer, with additional filtering by brand, bottle size, price and other useful attributes.',
    },
    {
      question:
        'Can the platform manage local alcohol delivery?',
      answer:
        'Yes. Delivery areas, charges, order status, delivery assignment and handover controls can be incorporated according to the retailer’s operational and legal requirements.',
    },
    {
      question:
        'Can we offer loyalty points and promotions?',
      answer:
        'The software can support retailer-defined loyalty and promotional mechanisms, but alcohol promotions must be structured and operated in accordance with applicable advertising, licensing and responsible-sale requirements.',
    },
    {
      question:
        'Can the same platform later have an Android or iPhone app?',
      answer:
        'Yes. The commerce platform can be structured so future Android and iOS applications connect to the same products, customers, orders, payments and administration systems.',
    },
  ]

  const structuredData = [
    {
      '@type': 'Service',
      '@id':
        'https://sterlingsstudio.com/solutions/wines-and-spirits-ecommerce-website#service',
      name: 'Wines and Spirits E-commerce Website Development',
      serviceType:
        'Custom Wines and Spirits E-commerce Website Development',
      url:
        'https://sterlingsstudio.com/solutions/wines-and-spirits-ecommerce-website',
      description:
        'Custom wines and spirits e-commerce website development in Kenya with alcohol product catalogues, inventory, M-Pesa and card payments, age controls, delivery zones, customer accounts and store administration.',
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
        'https://sterlingsstudio.com/solutions/wines-and-spirits-ecommerce-website#breadcrumb',
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
          name: 'Wines and Spirits E-commerce Website',
          item:
            'https://sterlingsstudio.com/solutions/wines-and-spirits-ecommerce-website',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id':
        'https://sterlingsstudio.com/solutions/wines-and-spirits-ecommerce-website#faq',
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
        title="Wines & Spirits E-commerce Website Development Kenya | Sterlings Studio"
        description="Custom wines and spirits e-commerce website development in Kenya with product catalogues, M-Pesa, card payments, age controls, delivery zones, inventory and store administration."
        canonical="https://sterlingsstudio.com/solutions/wines-and-spirits-ecommerce-website"
        ogImage="/prod-retail.webp"
        structuredData={structuredData}
      />

      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.violet }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: COLORS.orange }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[0.58fr_0.42fr] gap-8 lg:gap-10 items-center">
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
                  WINES & SPIRITS E-COMMERCE KENYA
                </div>
              </div>

              <h1 className="mt-5 max-w-[880px] text-[35px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.02] tracking-[-0.032em] text-[#16243A]">
                Take your wines and spirits business online — responsibly.
              </h1>

              <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-500">
                Give eligible customers a fast way to discover products,
                order, pay and receive deliveries while keeping responsible
                alcohol retail controls built into the platform.
              </p>

              <p className="mt-3 max-w-[720px] text-[13px] leading-7 text-slate-500">
                Sterlings Studio develops custom e-commerce platforms for
                licensed wines and spirits retailers around their products,
                stock, payments, delivery areas and operating model.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[11px] font-bold text-white transition hover:-translate-y-0.5"
                >
                  Build your liquor store online →
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
                  ['ELIGIBILITY', '18+ controls', COLORS.cyan],
                  ['PAYMENTS', 'M-Pesa & cards', COLORS.violet],
                  ['DELIVERY', 'Zone controlled', COLORS.orange],
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
              <div className="relative min-h-[470px] overflow-hidden rounded-[22px] bg-[#0F1F35]">
                <img
                  src="/prod-retail.webp"
                  alt="Premium e-commerce platform concept by Sterlings Studio"
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081526] via-[#081526]/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[9px] font-bold tracking-[0.18em] text-white/60">
                    RESPONSIBLE DIGITAL COMMERCE
                  </div>

                  <div className="mt-3 text-[22px] font-semibold leading-7 text-white">
                    Premium retail.
                    <br />
                    Controlled fulfilment.
                    <br />
                    One connected platform.
                  </div>

                  <div className="mt-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-[9px] font-bold text-white">
                    18+ • Licensed retailers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          POSITIONING
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11">
          <div className="grid lg:grid-cols-[0.40fr_0.60fr] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#8B5CF6]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  BEYOND A BASIC ONLINE SHOP
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Alcohol e-commerce needs more control than ordinary retail.
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  title: 'Eligibility',
                  text: 'Age-aware customer and handover workflows.',
                  accent: COLORS.cyan,
                },
                {
                  title: 'Availability',
                  text: 'Products, stock, zones and operating windows.',
                  accent: COLORS.violet,
                },
                {
                  title: 'Fulfilment',
                  text: 'Payment, delivery and responsible handover.',
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
          CATEGORIES
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#18B8F2]" />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                PRODUCT DISCOVERY
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              Make a large drinks catalogue easy to shop.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              Customers should be able to browse naturally by category, brand,
              price and bottle size rather than scrolling through one endless
              product list.
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
      </section>

      {/* ======================================================
          PLATFORM CAPABILITIES
      ====================================================== */}
      <section
        id="platform"
        className="scroll-mt-24 border-y border-slate-200 bg-[#F7F9FC]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#3478F6]" />

              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                E-COMMERCE CAPABILITIES
              </div>
            </div>

            <h2 className="mt-3 max-w-[820px] text-[28px] lg:text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-[#16243A]">
              Commerce, compliance and fulfilment in one platform.
            </h2>
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

      {/* ======================================================
          RESPONSIBLE COMMERCE
      ====================================================== */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8 lg:gap-10">
            <div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                RESPONSIBLE ALCOHOL COMMERCE
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08]">
                Age controls should extend all the way to delivery.
              </h2>

              <p className="mt-4 text-[12px] leading-6 text-slate-300">
                A website notice is only one part of responsible fulfilment.
                The complete workflow can support checks from entry through
                customer handover.
              </p>

              <div className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-[9px] font-bold text-white/80">
                Not for sale to persons under 18 years
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {responsibleCommerce.map((item) => (
                <article
                  key={item.number}
                  className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: item.accent }}
                  />

                  <div
                    className="text-[8px] font-bold"
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
          DELIVERY
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#D946EF]" />

              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                LOCAL DELIVERY
              </div>
            </div>

            <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
              Decide where, when and how you deliver.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              Delivery rules can be configured around the retailer’s actual
              service area and permitted operating model.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {deliveryFeatures.map((item) => (
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
          PAYMENTS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-11">
          <div className="overflow-hidden rounded-[27px] bg-[#0F1F35] text-white">
            <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
              <div className="p-7 lg:p-8">
                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  CHECKOUT & PAYMENTS
                </div>

                <h2 className="mt-4 text-[26px] lg:text-[30px] font-bold leading-[1.08]">
                  Make payment easy.
                  <br />
                  Keep the order traceable.
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 border-t lg:border-l lg:border-t-0 border-white/10">
                {[
                  {
                    title: 'M-Pesa',
                    text:
                      'Connect appropriate M-Pesa payment flows to customer orders.',
                    accent: COLORS.cyan,
                  },
                  {
                    title: 'Cards',
                    text:
                      'Integrate supported card-payment providers where required.',
                    accent: COLORS.violet,
                  },
                  {
                    title: 'Reconciliation',
                    text:
                      'Keep payment status connected to the corresponding customer order.',
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
          PLATFORM ARCHITECTURE
      ====================================================== */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="max-w-[800px]">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-9 rounded-full bg-[#8B5CF6]" />

            <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
              PLATFORM ARCHITECTURE
            </div>
          </div>

          <h2 className="mt-4 text-[28px] lg:text-[34px] font-bold leading-[1.08] text-[#16243A]">
            The online shop is only the customer-facing layer.
          </h2>

          <p className="mt-4 text-[12px] leading-6 text-slate-500">
            Products, payments, inventory, delivery and administration work
            behind it as one connected commerce system.
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
          OPERATIONS
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#FF8A3D]" />

                <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                  STORE OPERATIONS
                </div>
              </div>

              <h2 className="mt-4 text-[28px] lg:text-[33px] font-bold leading-[1.08] text-[#16243A]">
                Give the retailer control behind the scenes.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {operations.map((item) => (
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
              We begin with the licensed business, not a template.
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-slate-500">
              The catalogue, payments, delivery coverage, operating model and
              responsible-sale requirements define the system.
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
          LEGAL / RESPONSIBILITY
      ====================================================== */}
      <section className="border-y border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="rounded-[22px] border border-slate-200 bg-white p-6 lg:p-7">
            <div className="grid lg:grid-cols-[0.25fr_0.75fr] gap-5">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                RESPONSIBILITY
              </div>

              <div>
                <h2 className="text-[17px] font-bold text-[#16243A]">
                  Technology supports compliance. It does not replace the
                  retailer’s legal responsibilities.
                </h2>

                <p className="mt-3 text-[10px] leading-6 text-slate-500">
                  The retailer remains responsible for licensing, lawful
                  products, permitted trading and delivery practices, age
                  verification, advertising requirements and other obligations
                  applicable to its business. Sterlings Studio can build the
                  agreed technical controls into the platform.
                </p>
              </div>
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
              Wines & spirits e-commerce questions.
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
              to="/solutions/supermarket-ecommerce-website"
              className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#18B8F2]" />

              <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                RETAIL E-COMMERCE
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[13px] font-bold text-[#16243A]">
                  Supermarket E-commerce
                </span>

                <span className="text-[#18B8F2]">→</span>
              </div>
            </Link>

            <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#8B5CF6]" />

              <div className="text-[8px] font-bold tracking-[0.15em] text-slate-400">
                COMING LATER
              </div>

              <div className="mt-2 text-[13px] font-bold text-[#16243A]">
                Pharmacy E-commerce
              </div>
            </div>

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
                  WINES & SPIRITS E-COMMERCE DEVELOPMENT
                </div>
              </div>

              <h2 className="mt-4 max-w-[900px] text-[31px] sm:text-[36px] lg:text-[41px] font-bold leading-[1.03] tracking-[-0.03em]">
                Your stock is already on the shelf.
                <br />
                Build the digital store around it.
              </h2>

              <p className="mt-5 max-w-[700px] text-[13px] leading-7 text-slate-300">
                We can help a licensed wines and spirits retailer move from
                walk-in sales and messaging-based orders to a structured
                digital commerce, payment and delivery platform.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold text-[#0F1F35] transition hover:-translate-y-0.5"
              >
                Discuss your liquor platform →
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