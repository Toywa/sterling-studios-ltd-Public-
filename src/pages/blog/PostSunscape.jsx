import { Link } from 'react-router-dom'
import SEO from '../../components/SEO.jsx'

export default function PostSunscape() {
  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Building Sunscape Car Rentals: A Booking-Led Fleet Website | Sterlings Studio"
        description="How Sterlings Studio structured Sunscape Car Rentals around vehicle discovery, customer trust, booking enquiries, WhatsApp and travel-focused content."
        canonical="https://sterlingsstudio.com/blog/building-sunscape-car-rentals-website"
        ogImage="/human_founder_smile.webp"
      />

      <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-16 pb-20">
        <div className="text-[11px] tracking-widest font-bold text-slate-400">
          LIVE PROJECT â€¢ CAR RENTAL â€¢ TRAVEL
        </div>

        <h1 className="mt-4 text-[36px] lg:text-[46px] font-extrabold leading-[0.95] tracking-tight">
          Building Sunscape Car Rentals: Turning Fleet Discovery into Booking
          Enquiries
        </h1>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          A car-rental website must do more than display vehicle photographs.
          Customers need to understand which vehicle suits the journey, what
          services are available and how to begin a booking with confidence.
        </p>

        <div className="mt-5 text-[12px] text-slate-500">
          Sterlings Studio case study â€¢ Transport and travel
        </div>

        <img
          src="/human_founder_smile.webp"
          alt="Customer discussing a travel and vehicle-booking service"
          className="mt-9 w-full h-[380px] object-cover object-top rounded-[22px] border"
        />

        <div className="mt-12 space-y-8 text-[15px] leading-8 text-slate-700">
          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Understanding the customerâ€™s journey
            </h2>

            <p className="mt-3">
              Sunscape serves customers with very different transport needs.
              Some require an airport transfer, while others need a seven-seat
              family vehicle, executive transport, an upcountry rental or
              several vehicles for an organisation.
            </p>

            <p className="mt-4">
              The website therefore had to explain both the fleet and the
              service context surrounding each vehicle.
            </p>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Presenting the fleet as a solution
            </h2>

            <p className="mt-3">
              Vehicle pages should help customers compare capacity, comfort,
              intended use and journey suitability. The objective is not simply
              to present a Mazda CX-5, Mazda CX-8, Toyota Harrier or Toyota
              Prado, but to help the customer recognise which option fits the
              trip.
            </p>

            <div className="mt-5 rounded-[20px] border bg-[#F8FAFC] p-6">
              <div className="text-[11px] font-bold tracking-widest text-slate-500">
                IMPORTANT CUSTOMER JOURNEYS
              </div>

              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-[13px]">
                <li>â€¢ Airport and hotel transfers</li>
                <li>â€¢ Corporate and NGO transport</li>
                <li>â€¢ Family and seven-seat travel</li>
                <li>â€¢ Weddings and special events</li>
                <li>â€¢ School and scheduled transport</li>
                <li>â€¢ Weekend and upcountry journeys</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Making enquiry simple
            </h2>

            <p className="mt-3">
              Travellers often browse from a mobile phone and may need a
              vehicle quickly. The website therefore prioritises clear contact
              options, WhatsApp communication and structured booking
              information.
            </p>

            <p className="mt-4">
              Customers should be able to specify the preferred vehicle,
              journey dates, destination and transport requirement without
              navigating a complicated process.
            </p>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Building confidence before contact
            </h2>

            <p className="mt-3">
              Car hire requires trust. Customers may be arriving at an airport,
              travelling with family or arranging transport on behalf of an
              organisation.
            </p>

            <p className="mt-4">
              Clear company information, fleet photographs, service
              explanations, testimonials, location information and professional
              policies all contribute to confidence before the first enquiry is
              submitted.
            </p>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Supporting search and destination discovery
            </h2>

            <p className="mt-3">
              Travel customers do not always begin by searching for a company
              name. They may search for airport transfers, a seven-seater in
              Nairobi or vehicle hire for a destination such as Amboseli,
              Samburu, Bungoma or Kisumu.
            </p>

            <p className="mt-4">
              Service and destination content gives the website a stronger
              foundation for those customer-intent searches while helping
              visitors understand what Sunscape can arrange.
            </p>
          </section>

          <div className="rounded-[22px] bg-[#0F1F35] text-white p-7">
            <div className="text-[11px] font-bold tracking-widest text-slate-300">
              NEED A BOOKING-LED WEBSITE?
            </div>

            <h3 className="mt-3 text-[21px] font-extrabold">
              We design service websites that guide customers from discovery
              towards a clear enquiry or reservation.
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://sunscape.co.ke"
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-5 py-2.5 rounded-full bg-white text-[#0F1F35] text-[12px] font-bold"
              >
                Visit Sunscape Car Rentals â†—
              </a>

              <Link
                to="/contact"
                className="inline-flex px-5 py-2.5 rounded-full border border-white/20 text-[12px] font-bold"
              >
                Discuss a booking website â†’
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
