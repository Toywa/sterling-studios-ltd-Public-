import { Link } from 'react-router-dom'

const company = {
  name: 'Sterling Studios Ltd',
  location: 'Nairobi, Kenya',
  email: 'hello@sterlingsstudio.com',
  phone: '+254 722 114 098',
  whatsapp: '254722114098',
}

function LegalLayout({
  eyebrow,
  title,
  description,
  updated,
  children,
}) {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b bg-[#F8FAFC]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 pt-16 pb-14">
          <div className="text-[11px] font-bold tracking-widest text-slate-500">
            {eyebrow}
          </div>

          <h1 className="mt-4 text-[42px] lg:text-[54px] font-extrabold leading-[0.95] tracking-tight">
            {title}
          </h1>

          <p className="mt-6 text-[15px] leading-7 text-slate-600 max-w-[72ch]">
            {description}
          </p>

          <div className="mt-6 text-[11px] text-slate-500">
            Last updated: {updated}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1000px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[0.28fr_0.72fr] gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-[100px]">
              <div className="text-[11px] font-bold tracking-widest text-slate-400">
                LEGAL
              </div>

              <nav className="mt-4 flex flex-col gap-3">
                <Link
                  to="/privacy"
                  className="text-[13px] font-semibold text-slate-600 hover:text-slate-900"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms"
                  className="text-[13px] font-semibold text-slate-600 hover:text-slate-900"
                >
                  Terms of Service
                </Link>

                <Link
                  to="/contact"
                  className="text-[13px] font-semibold text-slate-600 hover:text-slate-900"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </aside>

          <article className="space-y-10 text-[14px] leading-7 text-slate-700">
            {children}
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t bg-[#0F1F35] text-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 py-12">
          <div className="text-[11px] font-bold tracking-widest text-slate-300">
            QUESTIONS ABOUT THESE TERMS?
          </div>

          <h2 className="mt-3 text-[26px] font-extrabold">
            Contact Sterling Studios.
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${company.email}`}
              className="inline-flex px-5 py-2.5 rounded-full bg-white text-[#0F1F35] text-[12px] font-bold"
            >
              {company.email}
            </a>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-5 py-2.5 rounded-full border border-white/20 text-white text-[12px] font-bold"
            >
              WhatsApp us â†’
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function LegalSection({ number, title, children }) {
  return (
    <section>
      <div className="text-[10px] font-bold tracking-widest text-slate-400">
        {number}
      </div>

      <h2 className="mt-2 text-[22px] font-extrabold text-slate-900">
        {title}
      </h2>

      <div className="mt-4 space-y-4">
        {children}
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <LegalLayout
      eyebrow="LEGAL â€¢ PRIVACY"
      title="Privacy Policy"
      description="This Privacy Policy explains how Sterling Studios Ltd may collect, use, protect and manage information when you visit our website, contact us or engage us for digital services."
      updated="7 August 2026"
    >
      <LegalSection number="01" title="Who we are">
        <p>
          Sterling Studios Ltd is a web design and software development company
          based in Nairobi, Kenya. We provide professional websites, custom web
          applications, mobile applications and related digital services.
        </p>

        <p>
          References to â€œSterling Studiosâ€, â€œweâ€, â€œourâ€ or â€œusâ€ in this policy
          refer to Sterling Studios Ltd.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Information we may collect">
        <p>
          We may collect information that you voluntarily provide when you
          contact us, request a quotation, begin a project or communicate with
          our team.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Your name and contact information</li>
          <li>Business or organisation name</li>
          <li>Email address and telephone number</li>
          <li>Project requirements and budget information</li>
          <li>Documents, content and files supplied for a project</li>
          <li>Billing and transaction-related information</li>
          <li>Support and correspondence records</li>
        </ul>

        <p>
          We may also receive technical information such as browser type,
          device information, general location, referring pages and website
          usage through analytics and security tools.
        </p>
      </LegalSection>

      <LegalSection number="03" title="How we use information">
        <p>
          Information may be used to:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Respond to enquiries and requests for quotations</li>
          <li>Assess and plan proposed projects</li>
          <li>Deliver contracted services</li>
          <li>Communicate about project progress and support</li>
          <li>Prepare invoices and maintain business records</li>
          <li>Improve our website, products and services</li>
          <li>Protect our systems against misuse or security threats</li>
          <li>Meet applicable regulatory and legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection number="04" title="Project information and confidential material">
        <p>
          During a project, clients may provide business information, content,
          designs, photographs, technical specifications, credentials or other
          materials required to perform the agreed work.
        </p>

        <p>
          We take reasonable measures to restrict access to such information to
          people and service providers who require it for project delivery.
          Where additional confidentiality obligations are required, these may
          be documented separately in the project agreement or a
          non-disclosure agreement.
        </p>

        <div className="rounded-[18px] border bg-[#F8FAFC] p-5">
          <strong className="text-slate-900">
            Please do not send passwords, payment PINs, private keys or other
            highly sensitive credentials through ordinary website enquiry
            forms.
          </strong>
        </div>
      </LegalSection>

      <LegalSection number="05" title="Third-party service providers">
        <p>
          Digital projects may depend on third-party technology providers,
          including hosting providers, domain registrars, database services,
          analytics platforms, email services, payment gateways and messaging
          providers.
        </p>

        <p>
          These providers may process information according to their own terms
          and privacy policies. Examples may include hosting infrastructure,
          cloud database providers, payment processors and communication
          services selected for a particular project.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Payments">
        <p>
          Where payments are accepted through an external payment provider,
          payment-card or mobile-money credentials are ordinarily processed by
          that provider rather than directly stored by Sterling Studios.
        </p>

        <p>
          We may retain transaction references, invoice details, payment status
          and other records necessary for accounting and project
          administration.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Cookies and analytics">
        <p>
          Our website may use cookies, analytics technologies or similar tools
          to understand how visitors use the site, improve performance and
          protect the service.
        </p>

        <p>
          Where legally required, visitors may be provided with appropriate
          choices concerning optional tracking technologies.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Data retention">
        <p>
          We retain information only for as long as reasonably necessary for
          project delivery, business administration, support, accounting,
          dispute resolution, security and applicable legal obligations.
        </p>

        <p>
          Retention periods may differ depending on the nature of the
          information and our relationship with the client.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Security">
        <p>
          We use reasonable technical and organisational measures intended to
          protect information against unauthorised access, loss, misuse or
          alteration.
        </p>

        <p>
          No internet-based system can be guaranteed to be completely secure.
          Clients are also responsible for protecting credentials and access
          provided to their own systems and accounts.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Your rights and requests">
        <p>
          Depending on applicable law and the circumstances, you may request
          access to, correction of or deletion of certain personal information
          held by Sterling Studios.
        </p>

        <p>
          Requests can be sent to{' '}
          <a
            href={`mailto:${company.email}`}
            className="font-bold underline"
          >
            {company.email}
          </a>
          . We may need to confirm your identity before acting on a request.
        </p>
      </LegalSection>

      <LegalSection number="11" title="International clients">
        <p>
          Sterling Studios may work with clients and technology providers in
          different countries. As a result, information may be processed or
          stored outside the country in which it was originally supplied,
          subject to applicable requirements and the safeguards of the
          relevant service provider.
        </p>
      </LegalSection>

      <LegalSection number="12" title="Changes to this policy">
        <p>
          We may update this Privacy Policy when our services, technology or
          legal obligations change. The latest version will be published on
          this page together with its revision date.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}

export function Terms() {
  return (
    <LegalLayout
      eyebrow="LEGAL â€¢ TERMS"
      title="Terms of Service"
      description="These Terms of Service provide the general conditions governing the Sterling Studios website, project enquiries and digital-development services. Specific client projects may also be governed by a separate proposal, scope of work or agreement."
      updated="7 August 2026"
    >
      <LegalSection number="01" title="About these terms">
        <p>
          These terms apply to the use of the Sterling Studios website and,
          where relevant, to enquiries and services provided by Sterling
          Studios Ltd.
        </p>

        <p>
          A formal project proposal, statement of work, quotation or agreement
          may contain additional or more specific conditions. Where there is a
          conflict, the signed project-specific agreement will normally govern
          that project.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Project proposals and scope">
        <p>
          A project begins only after the applicable scope, commercial terms
          and commencement requirements have been agreed.
        </p>

        <p>
          A proposal may define:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Project objectives</li>
          <li>Pages, features and functionality</li>
          <li>Design and content responsibilities</li>
          <li>Integrations and third-party services</li>
          <li>Delivery stages and estimated timelines</li>
          <li>Pricing and payment milestones</li>
          <li>Support and handover arrangements</li>
        </ul>
      </LegalSection>

      <LegalSection number="03" title="Pricing">
        <p>
          Prices displayed on the Sterling Studios website are indicative
          starting points and do not constitute a binding quotation.
        </p>

        <p>
          Final pricing depends on project scope, functionality, complexity,
          integrations, content requirements, design requirements, delivery
          schedule and other relevant factors.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Payments">
        <p>
          Projects may require an initial deposit before work begins. Larger
          projects may be divided into milestone payments as described in the
          project proposal.
        </p>

        <p>
          Unless otherwise agreed, third-party fees such as domain
          registration, hosting, payment-provider fees, email services,
          messaging costs, app-store accounts and external software
          subscriptions are separate from Sterling Studios development fees.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Project timelines">
        <p>
          Delivery schedules are estimates based on the agreed scope and
          assumptions available when the proposal is prepared.
        </p>

        <p>
          Timelines may be affected by factors including delayed client
          feedback, unavailable content, changes to scope, external provider
          approvals, third-party outages or additional technical requirements.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Client responsibilities">
        <p>
          Clients are responsible for providing accurate information,
          authorised content and reasonably timely feedback required to
          complete the project.
        </p>

        <p>
          The client must ensure that materials supplied to Sterling Studios
          can lawfully be used for the intended project, including logos,
          photographs, text, databases, trademarks and other intellectual
          property.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Changes to project scope">
        <p>
          Requests outside the approved scope may require additional time and
          fees.
        </p>

        <p>
          Where a requested change materially affects the project, Sterling
          Studios may provide a revised quotation, variation or delivery
          schedule before implementing it.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Intellectual property and ownership">
        <p>
          Ownership and licensing terms are confirmed in the applicable project
          agreement.
        </p>

        <p>
          Subject to full payment and the agreed terms, clients will ordinarily
          receive the rights and access specified for the completed project.
          Sterling Studios may retain ownership of reusable development tools,
          general libraries, frameworks, methods and pre-existing intellectual
          property not created specifically for the client.
        </p>

        <p>
          Third-party software, libraries, fonts, photographs or services
          remain subject to their respective licences.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Portfolio and project references">
        <p>
          Unless confidentiality or project terms require otherwise, Sterling
          Studios may request permission to identify completed work in its
          portfolio, case studies or marketing materials.
        </p>

        <p>
          Confidential information, private credentials and sensitive internal
          project information will not be intentionally published as part of a
          portfolio presentation.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Third-party platforms and services">
        <p>
          Projects may integrate services operated by third parties, including
          payment gateways, hosting providers, domain registrars, databases,
          email platforms, messaging providers, mapping services and app
          stores.
        </p>

        <p>
          Sterling Studios does not control the ongoing availability, pricing,
          policies or technical changes of independent third-party providers.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Payment integrations">
        <p>
          Payment features are subject to approval, terms and compliance
          requirements imposed by the relevant payment provider.
        </p>

        <p>
          Sterling Studios cannot guarantee that a bank, mobile-money provider,
          card processor or payment gateway will approve, maintain or continue
          providing services to a client.
        </p>
      </LegalSection>

      <LegalSection number="12" title="Political and campaign platforms">
        <p>
          Sterling Studios may develop websites and digital platforms for
          political candidates, elected leaders and campaign organisations.
        </p>

        <p>
          The client remains responsible for ensuring that fundraising,
          donations, supporter communications, merchandise sales, campaign
          content and data-processing activities comply with applicable laws,
          electoral regulations and payment-provider requirements.
        </p>
      </LegalSection>

      <LegalSection number="13" title="Testing and acceptance">
        <p>
          Projects are tested according to their agreed scope before launch or
          handover. Clients are expected to review relevant functionality and
          report material issues during the agreed review period.
        </p>

        <p>
          New functionality or changes requested after acceptance may be
          treated as additional development work.
        </p>
      </LegalSection>

      <LegalSection number="14" title="Support and maintenance">
        <p>
          Unless specifically included in the project agreement, ongoing
          maintenance, content updates, monitoring and future development are
          separate services.
        </p>

        <p>
          Support packages may be agreed where a client requires continued
          technical assistance after launch.
        </p>
      </LegalSection>

      <LegalSection number="15" title="No guarantee of business results">
        <p>
          Sterling Studios designs digital products intended to support client
          objectives, but does not guarantee particular levels of revenue,
          sales, enquiries, search ranking, traffic, fundraising, conversion or
          other commercial outcomes.
        </p>

        <p>
          Business performance depends on many factors outside website or
          software development, including pricing, market conditions, product
          quality, advertising, competition and organisational execution.
        </p>
      </LegalSection>

      <LegalSection number="16" title="Limitation and reasonable responsibility">
        <p>
          Sterling Studios will exercise reasonable professional care when
          delivering agreed services. However, digital systems can be affected
          by external services, user actions, internet infrastructure,
          cybersecurity events and circumstances outside our reasonable
          control.
        </p>

        <p>
          Any project-specific limitations, warranties or liability provisions
          should be interpreted together with the applicable signed agreement
          and relevant law.
        </p>
      </LegalSection>

      <LegalSection number="17" title="Suspension or termination">
        <p>
          Work may be suspended where required payments, materials, approvals or
          client obligations remain outstanding, or where continued work would
          involve unlawful or materially inappropriate activity.
        </p>

        <p>
          Project termination and any amounts due will be handled according to
          the applicable proposal or agreement.
        </p>
      </LegalSection>

      <LegalSection number="18" title="Governing framework">
        <p>
          Sterling Studios Ltd operates from Nairobi, Kenya. These general
          terms are intended to be interpreted consistently with applicable
          Kenyan law, subject to any different governing-law provisions
          expressly agreed for a specific engagement.
        </p>
      </LegalSection>

      <LegalSection number="19" title="Changes to these terms">
        <p>
          Sterling Studios may revise these website Terms of Service from time
          to time. Updated terms will be published on this page together with
          the applicable revision date.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}

export default Privacy
