import { Link } from 'react-router-dom'
import SEO from '../../components/SEO.jsx'

export default function PostAkashi() {
  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Building Akashi Designs: A Global House-Plan Marketplace | Sterling Studios"
        description="How Sterling Studios developed Akashi Designs into a premium architectural marketplace with plan discovery, secure checkout, digital delivery and administrative controls."
        canonical="https://sterlingsstudio.com/blog/building-akashi-designs-marketplace"
        ogImage="/human_cafe_laptop.webp"
      />

      <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-16 pb-20">
        <div className="text-[11px] tracking-widest font-bold text-slate-400">
          LIVE PROJECT • ARCHITECTURE • DIGITAL COMMERCE
        </div>

        <h1 className="mt-4 text-[36px] lg:text-[46px] font-extrabold leading-[0.95] tracking-tight">
          Building Akashi Designs: From House-Plan Catalogue to Global
          Architectural Marketplace
        </h1>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          Akashi Designs required more than an attractive portfolio. It needed
          a complete digital-commerce system capable of presenting detailed
          architectural products, serving international customers and securely
          delivering valuable plan files after purchase.
        </p>

        <div className="mt-5 text-[12px] text-slate-500">
          Sterling Studios case study • Architecture and e-commerce
        </div>

        <img
          src="/human_cafe_laptop.webp"
          alt="Architectural marketplace being reviewed on a laptop"
          className="mt-9 w-full h-[380px] object-cover object-top rounded-[22px] border"
        />

        <div className="mt-12 space-y-8 text-[15px] leading-8 text-slate-700">
          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              The business requirement
            </h2>

            <p className="mt-3">
              Architectural plans are more complex than ordinary retail
              products. Every listing may require floor-plan information,
              dimensions, bedroom and bathroom counts, architectural style,
              garage information, galleries, technical descriptions,
              customisation options and secure downloadable files.
            </p>

            <p className="mt-4">
              Akashi Designs also serves customers in different countries. The
              customer journey therefore had to communicate trust clearly,
              support international payments and explain exactly what a buyer
              receives after completing a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Moving beyond a conventional online store
            </h2>

            <p className="mt-3">
              The project was structured as a specialist architectural
              marketplace rather than a generic product shop. Customers can
              explore plans by style, size and room requirements before opening
              a detailed plan page.
            </p>

            <div className="mt-5 rounded-[20px] border bg-[#F8FAFC] p-6">
              <div className="text-[11px] font-bold tracking-widest text-slate-500">
                CORE PLATFORM CAPABILITIES
              </div>

              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-[13px]">
                <li>• Searchable house-plan catalogue</li>
                <li>• Detailed architectural product pages</li>
                <li>• Favourites and shopping cart</li>
                <li>• Structured checkout journeys</li>
                <li>• Multiple payment gateways</li>
                <li>• Automated customer invoicing</li>
                <li>• Secure digital-file delivery</li>
                <li>• Administrative plan management</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Designing for architectural buyers
            </h2>

            <p className="mt-3">
              A buyer considering a house plan is making a significant and
              emotional decision. The interface therefore had to balance strong
              visual presentation with practical technical information.
            </p>

            <p className="mt-4">
              The page structure helps customers understand the character of
              the home, its room arrangement, size, features and plan package
              before proceeding to checkout. Clear customisation pathways also
              allow buyers to request modifications where the standard plan
              does not fully meet their needs.
            </p>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Secure post-purchase fulfilment
            </h2>

            <p className="mt-3">
              Digital architectural files require controlled delivery. The
              platform was planned around verified orders, invoices, customer
              notifications and protected access to the purchased plan
              documents.
            </p>

            <p className="mt-4">
              The administrative environment also gives the business greater
              visibility over plans, orders, customers and fulfilment activity.
              This creates a stronger operational foundation than managing
              purchases and file delivery manually.
            </p>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Building for future expansion
            </h2>

            <p className="mt-3">
              Akashi Designs was developed with a wider marketplace vision in
              mind. The platform can continue evolving through additional
              designers, richer filters, customer reviews, collections,
              improved analytics and more advanced administrative tools.
            </p>
          </section>

          <div className="rounded-[22px] bg-[#0F1F35] text-white p-7">
            <div className="text-[11px] font-bold tracking-widest text-slate-300">
              NEED A SPECIALIST MARKETPLACE?
            </div>

            <h3 className="mt-3 text-[21px] font-extrabold">
              We build digital-commerce platforms around the products and
              workflows of the business.
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://akashidesigns.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-5 py-2.5 rounded-full bg-white text-[#0F1F35] text-[12px] font-bold"
              >
                Visit Akashi Designs ↗
              </a>

              <Link
                to="/contact"
                className="inline-flex px-5 py-2.5 rounded-full border border-white/20 text-[12px] font-bold"
              >
                Discuss a similar platform →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}