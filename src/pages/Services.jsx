import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div className="bg-white text-slate-900">
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="text-[11px] font-bold tracking-widest text-slate-500">
          OUR SERVICES
        </div>

        <h1 className="mt-3 text-[46px] lg:text-[56px] font-extrabold leading-[0.95] tracking-tight max-w-[900px]">
          Digital products built to solve real business problems.
        </h1>

        <p className="mt-6 text-[15px] leading-7 text-slate-600 max-w-[70ch]">
          Sterling Studios designs and develops professional websites, web
          applications and mobile products for businesses, schools, public
          institutions, political organisations and growing brands.
        </p>

        <p className="mt-3 text-[15px] leading-7 text-slate-600 max-w-[70ch]">
          Every project is planned around its users, commercial objectives,
          security requirements and long-term growth—not simply how it looks on
          launch day.
        </p>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-20 grid gap-6">
        {/* WEB APPLICATIONS */}
        <article className="rounded-[28px] border overflow-hidden bg-[#F8FAFC] grid lg:grid-cols-[0.9fr_1.1fr]">
          <img
            src="/human_team_standup.webp"
            alt="Development team planning a custom web application"
            className="w-full h-[360px] object-cover object-top"
          />

          <div className="p-8 lg:p-10">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              01 — WEB APPLICATION DEVELOPMENT
            </div>

            <h2 className="mt-3 text-[22px] font-extrabold leading-8">
              Custom platforms that simplify operations and support growth.
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-slate-600">
              We develop secure, scalable web applications for organisations
              that need more than a conventional website. From customer portals
              and booking systems to internal dashboards and online
              marketplaces, every platform is built around a defined operational
              need.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-3 text-[12px] text-slate-600">
              <div>• Customer and staff portals</div>
              <div>• Booking and reservation systems</div>
              <div>• Business dashboards</div>
              <div>• Role-based access controls</div>
              <div>• Online marketplaces</div>
              <div>• Workflow automation</div>
              <div>• Payment integrations</div>
              <div>• Reporting and audit records</div>
            </div>

            <div className="mt-6 text-[11px] leading-5 text-slate-500">
              Suitable for businesses, institutions, membership organisations,
              service providers and technology-led ventures.
            </div>
          </div>
        </article>

        {/* BUSINESS AND INSTITUTIONAL WEBSITES */}
        <article className="rounded-[28px] border overflow-hidden bg-[#F8FAFC] grid lg:grid-cols-[0.9fr_1.1fr]">
          <img
            src="/human_female_founder.webp"
            alt="Business leader reviewing a professional website"
            className="w-full h-[360px] object-cover object-top"
          />

          <div className="p-8 lg:p-10">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              02 — PROFESSIONAL WEBSITES
            </div>

            <h2 className="mt-3 text-[22px] font-extrabold leading-8">
              Credible digital platforms for companies, schools and public
              institutions.
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-slate-600">
              We create professional websites that communicate clearly, build
              public confidence and make important information easy to find.
              Each website is designed for its audience, optimised for mobile
              devices and structured to support enquiries, applications,
              registrations or service access.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-3 text-[12px] text-slate-600">
              <div>• Corporate websites</div>
              <div>• School and university websites</div>
              <div>• Government and institutional portals</div>
              <div>• NGO and development-sector websites</div>
              <div>• Online applications and enquiries</div>
              <div>• News and document publishing</div>
              <div>• Search-engine foundations</div>
              <div>• Website analytics and reporting</div>
            </div>

            <div className="mt-6 text-[11px] leading-5 text-slate-500">
              Designed for organisations that require credibility,
              accessibility, dependable performance and professional public
              communication.
            </div>
          </div>
        </article>

        {/* POLITICAL AND CAMPAIGN PLATFORMS */}
        <article className="rounded-[28px] border overflow-hidden bg-[#F8FAFC] grid lg:grid-cols-[0.9fr_1.1fr]">
          <img
            src="/human_boardroom_main.webp"
            alt="Political campaign team discussing digital strategy"
            className="w-full h-[360px] object-cover object-top"
          />

          <div className="p-8 lg:p-10">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              03 — POLITICAL AND CAMPAIGN PLATFORMS
            </div>

            <h2 className="mt-3 text-[22px] font-extrabold leading-8">
              Digital campaign platforms built to inform, mobilise and raise
              support.
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-slate-600">
              We build professional websites and campaign platforms for
              political candidates, elected leaders and political
              organisations. These platforms can communicate policy positions,
              publish campaign updates, recruit volunteers, receive
              contributions and sell branded merchandise.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-3 text-[12px] text-slate-600">
              <div>• Candidate and campaign websites</div>
              <div>• Secure online donation journeys</div>
              <div>• Merchandise stores</div>
              <div>• Volunteer registration</div>
              <div>• Events and campaign schedules</div>
              <div>• Policy and manifesto publishing</div>
              <div>• Supporter databases</div>
              <div>• Contribution and sales reporting</div>
            </div>

            <div className="mt-6 text-[11px] leading-5 text-slate-500">
              Donation, payment and reporting features are configured according
              to the campaign’s approved payment providers and applicable legal
              requirements.
            </div>
          </div>
        </article>

        {/* MOBILE APPLICATIONS */}
        <article className="rounded-[28px] border overflow-hidden bg-[#F8FAFC] grid lg:grid-cols-[0.9fr_1.1fr]">
          <img
            src="/human_pitch_boardroom.webp"
            alt="Product team presenting an Android and iOS application"
            className="w-full h-[360px] object-cover object-top"
          />

          <div className="p-8 lg:p-10">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              04 — ANDROID AND iOS APPLICATIONS
            </div>

            <h2 className="mt-3 text-[22px] font-extrabold leading-8">
              Mobile applications designed for intuitive use and dependable
              performance.
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-slate-600">
              We develop Android and iOS applications for businesses and
              organisations that need to serve customers, teams or communities
              through mobile devices. Applications can include payments,
              location services, notifications, user accounts and offline
              capabilities.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-3 text-[12px] text-slate-600">
              <div>• Android and iOS development</div>
              <div>• Customer and staff applications</div>
              <div>• Secure user accounts</div>
              <div>• Push notifications</div>
              <div>• M-Pesa and card payments</div>
              <div>• Maps and location services</div>
              <div>• Offline functionality</div>
              <div>• App-store deployment support</div>
            </div>

            <div className="mt-6 text-[11px] leading-5 text-slate-500">
              Built for usability, maintainability and future expansion across
              both major mobile platforms.
            </div>
          </div>
        </article>
      </section>

      <section className="border-y bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-300">
              HAVE A PROJECT IN MIND?
            </div>

            <h2 className="mt-3 text-[30px] lg:text-[38px] font-extrabold tracking-tight max-w-[700px]">
              Let us build the digital platform your organisation needs next.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-slate-300 max-w-[65ch]">
              Tell us about your objectives, intended users and required
              features. We will review the project and recommend an appropriate
              solution, scope and delivery approach.
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