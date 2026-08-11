import { Link } from 'react-router-dom'

export default function Testimonials() {
  const clientPlatforms = [
    {
      name: 'Akashi Designs',
      sector: 'Architecture and Digital Commerce',
      description:
        'A global architectural marketplace supporting plan discovery, secure checkout, automated invoicing and protected digital delivery.',
      value:
        'Sterlings Studio translated a specialist architectural business into a structured digital-commerce platform capable of serving customers across different markets.',
      website: 'https://akashidesigns.com',
    },
    {
      name: 'The Alkebula School',
      sector: 'Education Technology',
      description:
        'A connected education platform bringing together parents, international-curriculum tutors and academic administration.',
      value:
        'The project demonstrates our ability to design complex multi-role systems around real educational workflows, bookings, profiles and parent support.',
      website: 'https://alkebulaschool.com',
    },
    {
      name: 'Sunscape Car Rentals',
      sector: 'Transport and Travel',
      description:
        'A booking-led fleet website for airport transfers, corporate transport, family travel and vehicle hire across Kenya.',
      value:
        'The website gives customers a clearer path from vehicle discovery to quotation and booking enquiry while presenting the fleet professionally.',
      website: 'https://sunscape.co.ke',
    },
  ]

  const experienceStandards = [
    {
      title: 'Clear communication',
      text: 'Clients receive practical updates, defined approval points and clarity about what is required at each project stage.',
    },
    {
      title: 'Business-focused thinking',
      text: 'Recommendations are based on the organisationâ€™s objectives, customers and operating requirementsâ€”not design trends alone.',
    },
    {
      title: 'Professional execution',
      text: 'Every project is developed with attention to usability, responsive presentation, security and long-term maintainability.',
    },
    {
      title: 'Continued partnership',
      text: 'Support can continue after launch through maintenance, improvements, analytics and future product development.',
    },
  ]

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-14">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-end">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              CLIENT CONFIDENCE
            </div>

            <h1 className="mt-4 text-[46px] lg:text-[58px] font-extrabold leading-[0.95] tracking-tight max-w-[920px]">
              Trust is earned through the quality of the work and the experience
              behind it.
            </h1>

            <p className="mt-6 text-[16px] leading-7 text-slate-600 max-w-[72ch]">
              Sterlings Studio works closely with businesses and organisations
              to turn complex requirements into clear, dependable digital
              products.
            </p>

            <p className="mt-4 text-[16px] leading-7 text-slate-600 max-w-[72ch]">
              Rather than publish exaggerated promises, we invite prospective
              clients to examine the platforms we have built, the problems they
              solve and the standards that guide every engagement.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold"
              >
                View selected work
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border text-[13px] font-bold"
              >
                Discuss your project â†’
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border bg-[#F8FAFC] p-7 lg:p-8">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              OUR STANDARD
            </div>

            <p className="mt-4 text-[22px] leading-8 font-extrabold">
              Every public claim should be supported by real work, genuine
              feedback or verifiable project evidence.
            </p>

            <p className="mt-4 text-[13px] leading-6 text-slate-600">
              Client quotations are published only with permission. Performance
              figures are displayed only where reliable data is available.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT PROJECTS */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-[820px]">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              LIVE CLIENT PLATFORMS
            </div>

            <h2 className="mt-3 text-[32px] lg:text-[42px] font-extrabold tracking-tight">
              The strongest testimonial is a product people can see and use.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-slate-600">
              These live projects demonstrate the breadth of organisations,
              customer journeys and operating requirements Sterlings Studio can
              support.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {clientPlatforms.map((project) => (
              <article
                key={project.name}
                className="rounded-[24px] border bg-white p-7 flex flex-col"
              >
                <div className="text-[10px] font-bold tracking-widest text-slate-400">
                  {project.sector}
                </div>

                <h3 className="mt-3 text-[21px] font-extrabold">
                  {project.name}
                </h3>

                <p className="mt-4 text-[13px] leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 pt-5 border-t">
                  <div className="text-[10px] font-bold tracking-widest text-slate-400">
                    PROJECT VALUE
                  </div>

                  <p className="mt-2 text-[12px] leading-5 text-slate-600">
                    {project.value}
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border text-[12px] font-bold"
                  >
                    Visit live platform â†—
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING EXPERIENCE */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              THE CLIENT EXPERIENCE
            </div>

            <h2 className="mt-3 text-[32px] lg:text-[42px] font-extrabold tracking-tight">
              What organisations should expect when working with us.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-slate-600">
              Strong project relationships are built through transparency,
              professional judgement and consistent deliveryâ€”not dramatic
              promises.
            </p>

            <Link
              to="/process"
              className="mt-7 inline-flex px-6 py-3 rounded-full border text-[13px] font-bold"
            >
              See our process â†’
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {experienceStandards.map((item) => (
              <article
                key={item.title}
                className="rounded-[22px] border bg-[#F8FAFC] p-6"
              >
                <h3 className="text-[17px] font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-3 text-[12px] leading-5 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL POLICY */}
      <section className="border-y bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
          <div className="rounded-[28px] bg-[#0F1F35] text-white p-8 lg:p-12 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
            <div>
              <div className="text-[11px] font-bold tracking-widest text-slate-300">
                GENUINE CLIENT FEEDBACK
              </div>

              <h2 className="mt-3 text-[30px] lg:text-[40px] font-extrabold tracking-tight">
                Client testimonials will always be published with context and
                permission.
              </h2>

              <p className="mt-4 text-[14px] leading-6 text-slate-300 max-w-[65ch]">
                Where a client authorises publication, feedback should identify
                the project, industry and aspect of the engagement being
                discussed. Anonymous or unverifiable praise should never be
                used to create artificial confidence.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-white/5 p-6">
              <div className="text-[11px] font-bold tracking-widest text-slate-300">
                A VERIFIED TESTIMONIAL SHOULD INCLUDE
              </div>

              <div className="mt-5 space-y-3 text-[13px] text-slate-200">
                <div>âœ“ Client or authorised representative</div>
                <div>âœ“ Business or organisation</div>
                <div>âœ“ Project delivered</div>
                <div>âœ“ Specific experience or outcome</div>
                <div>âœ“ Permission to publish</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE STERLING */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-[780px]">
          <div className="text-[11px] font-bold tracking-widest text-slate-500">
            WHY STERLINGS STUDIO
          </div>

          <h2 className="mt-3 text-[32px] lg:text-[42px] font-extrabold tracking-tight">
            Serious digital work requires a partner who understands more than
            code.
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: 'Strategic understanding',
              text: 'We examine the business objective before recommending the digital solution.',
            },
            {
              title: 'Custom development',
              text: 'Important products are structured around their actual users, workflows and requirements.',
            },
            {
              title: 'Commercial clarity',
              text: 'Scope, responsibilities, milestones and costs are discussed before development begins.',
            },
            {
              title: 'Long-term thinking',
              text: 'Products are designed to remain maintainable and capable of future improvement.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[20px] border bg-[#F8FAFC] p-6"
            >
              <h3 className="font-bold">{item.title}</h3>

              <p className="mt-2 text-[12px] leading-5 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-300">
              BEGIN WITH A CONVERSATION
            </div>

            <h2 className="mt-3 text-[30px] lg:text-[40px] font-extrabold tracking-tight max-w-[760px]">
              Let your own project become the next example of thoughtful digital
              work.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-slate-300 max-w-[66ch]">
              Tell us what your organisation needs to launch, improve or
              simplify. We will help define the right digital product and the
              most practical route towards it.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-7 py-3 rounded-full bg-white text-[#0F1F35] text-[13px] font-bold whitespace-nowrap"
          >
            Discuss your project â†’
          </Link>
        </div>
      </section>
    </div>
  )
}
