import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function Pricing() {
  const [currency, setCurrency] = useState('KES')
  const exchangeRate = 130

  const packages = [
    {
      label: 'PROFESSIONAL WEBSITE',
      name: 'Professional Website',
      kes: 180000,
      timeline: '2–4 weeks',
      description:
        'For companies, schools, institutions and organisations that need a credible, polished public-facing website.',
      features: [
        'Responsive custom design',
        'Core company or institutional pages',
        'Contact and enquiry journeys',
        'Basic SEO foundations',
        'Analytics setup',
        'Deployment support',
      ],
    },
    {
      label: 'CUSTOM WEB APPLICATION',
      name: 'Web Application',
      kes: 450000,
      timeline: '4–10 weeks',
      featured: true,
      description:
        'For organisations replacing manual processes or building portals, dashboards, marketplaces and operational systems.',
      features: [
        'Product scoping',
        'Custom user journeys',
        'Role-based functionality',
        'Database-backed workflows',
        'Payment or service integrations',
        'Testing and deployment',
      ],
    },
    {
      label: 'MOBILE • CAMPAIGN • SPECIALIST',
      name: 'Custom Digital Product',
      kes: 600000,
      timeline: 'From 6 weeks',
      description:
        'For mobile applications, political platforms and specialist builds requiring deeper functionality or integrations.',
      features: [
        'Android and iOS options',
        'Campaign or membership systems',
        'M-Pesa and payment integration',
        'Notifications and location services',
        'Custom dashboards',
        'Deployment and handover',
      ],
    },
  ]

  const formatPrice = (kes) => {
    if (currency === 'KES') return `KES ${kes.toLocaleString()}`
    return `USD ${Math.round(kes / exchangeRate).toLocaleString()}`
  }

  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Pricing | Sterlings Studio"
        description="Clear project-based pricing for websites, web applications and custom digital products."
        canonical="https://sterlingsstudio.com/pricing"
      />

      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 lg:pt-14 pb-10">
        <div className="grid lg:grid-cols-[0.56fr_0.44fr] gap-8 lg:gap-12 items-stretch">
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              PROJECT PRICING
            </div>
            <h1 className="mt-4 text-[32px] lg:text-[38px] font-bold leading-[1.06] tracking-[-0.025em] text-slate-800">
              Simple, fixed pricing.
            </h1>
            <p className="mt-5 max-w-[680px] text-[15px] leading-7 text-slate-500">
              Clear project scope. Clear commercial expectations. No hourly billing surprises.
              Final pricing depends on functionality, integrations, content readiness and delivery requirements.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-[#F8FAFC] p-1">
                <button
                  type="button"
                  onClick={() => setCurrency('KES')}
                  className={`rounded-full px-4 py-2 text-[11px] font-bold ${
                    currency === 'KES' ? 'bg-[#0F1F35] text-white' : 'text-slate-500'
                  }`}
                >
                  KES
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`rounded-full px-4 py-2 text-[11px] font-bold ${
                    currency === 'USD' ? 'bg-[#0F1F35] text-white' : 'text-slate-500'
                  }`}
                >
                  USD
                </button>
              </div>

              <span className="text-[11px] text-slate-400">
                USD display uses an indicative rate of KES {exchangeRate}/USD.
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[12px] font-bold text-white"
              >
                Request a quotation →
              </Link>
              <Link
                to="/services"
                className="inline-flex rounded-full border border-slate-300 px-7 py-3.5 text-[12px] font-bold text-slate-700"
              >
                Compare services
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 overflow-hidden rounded-[24px] border">
              <img
                src="/human_cafe_laptop.webp"
                alt="Project planning and pricing discussion"
                className="block w-full h-[250px] object-cover"
              />
            </div>
            <div className="rounded-[20px] bg-[#0F1F35] p-5 text-white">
              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                COMMERCIAL PRINCIPLE
              </div>
              <p className="mt-3 text-[15px] font-semibold leading-6">
                Price the defined outcome, not the number of hours spent typing code.
              </p>
            </div>
            <div className="overflow-hidden rounded-[20px] border">
              <img
                src="/human_female_founder.webp"
                alt="Business owner reviewing a digital project"
                className="block w-full h-[155px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-5">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`rounded-[26px] border p-7 ${
                pkg.featured
                  ? 'bg-[#0F1F35] text-white border-[#0F1F35]'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className={`text-[9px] font-bold tracking-[0.17em] ${
                pkg.featured ? 'text-amber-300' : 'text-slate-400'
              }`}>
                {pkg.label}
              </div>

              <h2 className="mt-4 text-[22px] font-bold">{pkg.name}</h2>
              <div className="mt-5 text-[28px] font-bold tracking-tight">
                From {formatPrice(pkg.kes)}
              </div>
              <div className={`mt-2 text-[11px] ${
                pkg.featured ? 'text-slate-300' : 'text-slate-400'
              }`}>
                Typical delivery: {pkg.timeline}
              </div>

              <p className={`mt-5 text-[13px] leading-6 ${
                pkg.featured ? 'text-slate-300' : 'text-slate-500'
              }`}>
                {pkg.description}
              </p>

              <div className={`mt-6 border-t pt-5 ${
                pkg.featured ? 'border-white/10' : 'border-slate-100'
              }`}>
                <div className="space-y-3">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-[12px]">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className={`mt-7 inline-flex rounded-full px-5 py-3 text-[11px] font-bold ${
                  pkg.featured
                    ? 'bg-white text-[#0F1F35]'
                    : 'bg-[#0F1F35] text-white'
                }`}
              >
                Discuss this package →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* WHAT CHANGES PRICE */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-16">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                WHAT CHANGES THE PRICE
              </div>
              <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold text-slate-800">
                Complexity should be visible before development begins.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Number and complexity of user journeys',
                'Custom dashboards or role-based access',
                'Payment, M-Pesa or third-party integrations',
                'Content migration and data preparation',
                'Mobile application requirements',
                'Ongoing support or maintenance needs',
              ].map((item) => (
                <div key={item} className="rounded-[18px] border bg-white p-4 text-[12px] leading-6 text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
