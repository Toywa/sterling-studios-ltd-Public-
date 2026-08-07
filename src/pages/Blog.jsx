import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function Blog() {
  const posts = [
    {
      category: 'LIVE PROJECT • ARCHITECTURE',
      title:
        'Building Akashi Designs: From House-Plan Catalogue to Global Marketplace',
      description:
        'How Sterling Studios structured a specialist architectural marketplace around plan discovery, secure checkout and protected digital delivery.',
      image: '/human_cafe_laptop.webp',
      alt: 'Akashi Designs architectural marketplace',
      route: '/blog/building-akashi-designs-marketplace',
      type: 'CASE STUDY',
    },
    {
      category: 'LIVE PROJECT • EDUCATION TECHNOLOGY',
      title:
        'Building The Alkebula School: A Connected Platform for Parents and Tutors',
      description:
        'Inside the design of a multi-role education platform supporting tutor applications, parent bookings and international-curriculum services.',
      image: '/human_team_collab.webp',
      alt: 'The Alkebula School education platform',
      route: '/blog/building-alkebula-school-platform',
      type: 'CASE STUDY',
    },
    {
      category: 'LIVE PROJECT • TRANSPORT',
      title:
        'Building Sunscape Car Rentals: Turning Fleet Discovery into Enquiries',
      description:
        'How a booking-led website can help travellers choose vehicles, understand services and begin a rental enquiry with confidence.',
      image: '/human_founder_smile.webp',
      alt: 'Sunscape Car Rentals booking website',
      route: '/blog/building-sunscape-car-rentals-website',
      type: 'CASE STUDY',
    },
    {
      category: 'PAYMENTS • M-PESA DARAJA',
      title: 'M-Pesa Daraja Integration: Understanding the STK Push Journey',
      description:
        'A practical introduction to access tokens, STK Push requests, customer prompts, callbacks, payment records and reconciliation.',
      image: '/prod-fintech.webp',
      alt: 'M-Pesa collections and payments dashboard',
      route: '/blog/m-pesa-daraja-integration-nairobi',
      type: 'TECHNICAL GUIDE',
    },
    {
      category: 'PRODUCT CONCEPT • FINTECH',
      title: 'How LuminaPay Was Designed as a Real-Time Collections Dashboard',
      description:
        'A product-concept review covering M-Pesa collections, verified callbacks, automated receipts and financial reporting.',
      image: '/prod-analytics.webp',
      alt: 'LuminaPay financial dashboard concept',
      route: '/blog/how-we-built-luminapay-kes-12m',
      type: 'PRODUCT CONCEPT',
    },
    {
      category: 'PERFORMANCE • CORPORATE WEBSITES',
      title: 'Why Website Performance Matters to Trust and Conversion',
      description:
        'How image optimisation, restrained interfaces, efficient code and dependable hosting contribute to a stronger customer experience.',
      image: '/prod-corporate.webp',
      alt: 'Corporate website performance concept',
      route: '/blog/why-95-lighthouse-speed-matters',
      type: 'INSIGHT',
    },
  ]

  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Web Design, Platforms and Digital Growth Insights | Sterling Studios"
        description="Insights and case studies from Sterling Studios covering websites, web applications, M-Pesa, education technology, marketplaces, mobile applications and digital strategy."
        canonical="https://sterlingstudios.co.ke/blog"
        ogImage="/human_boardroom_main.webp"
      />

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-14">
        <div className="text-[11px] font-bold tracking-widest text-slate-500">
          INSIGHTS AND CASE STUDIES
        </div>

        <h1 className="mt-4 text-[46px] lg:text-[58px] font-extrabold leading-[0.95] tracking-tight max-w-[980px]">
          Practical thinking behind the digital products we build.
        </h1>

        <p className="mt-6 text-[16px] leading-7 text-slate-600 max-w-[74ch]">
          Explore client projects, product concepts and technical guidance
          covering web development, digital commerce, education platforms,
          payments, mobile applications and online business growth.
        </p>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.route}
              className="rounded-[24px] border bg-white overflow-hidden flex flex-col"
            >
              <Link to={post.route} className="block overflow-hidden">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-[230px] object-cover object-top transition duration-500 hover:scale-[1.02]"
                />
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-[10px] font-bold tracking-widest text-slate-400">
                    {post.category}
                  </div>

                  <span className="px-2 py-1 rounded-full border bg-[#F8FAFC] text-[9px] font-bold text-slate-500">
                    {post.type}
                  </span>
                </div>

                <h2 className="mt-4 text-[20px] font-extrabold leading-7">
                  <Link to={post.route} className="hover:text-slate-600">
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-slate-600">
                  {post.description}
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    to={post.route}
                    className="inline-flex text-[12px] font-bold underline"
                  >
                    Read article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-300">
              HAVE A DIGITAL PROJECT IN MIND?
            </div>

            <h2 className="mt-3 text-[30px] lg:text-[40px] font-extrabold tracking-tight max-w-[760px]">
              Let us apply this thinking to your organisation.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-slate-300 max-w-[65ch]">
              Tell us what you need to launch, improve or automate. We will help
              define the right website, platform or mobile application.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-7 py-3 rounded-full bg-white text-[#0F1F35] text-[13px] font-bold whitespace-nowrap"
          >
            Discuss your project →
          </Link>
        </div>
      </section>
    </div>
  )
}