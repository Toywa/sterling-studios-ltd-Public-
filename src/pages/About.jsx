import { Link } from 'react-router-dom'

export default function About() {
  const principles = [
    {
      number: '01',
      title: 'Business before decoration',
      text: 'Every project begins with the organisation’s objectives, users and operational needs. Design decisions must support a clear commercial or institutional purpose.',
    },
    {
      number: '02',
      title: 'Clarity before complexity',
      text: 'We simplify difficult ideas, customer journeys and internal processes into digital experiences that people can understand and use confidently.',
    },
    {
      number: '03',
      title: 'Quality built into the foundation',
      text: 'Performance, security, responsive design and maintainability are considered from the beginning—not added as an afterthought before launch.',
    },
    {
      number: '04',
      title: 'Partnership beyond launch',
      text: 'We remain available for maintenance, analysis and future development as the organisation, audience and digital product continue to evolve.',
    },
  ]

  const capabilities = [
    'Corporate and institutional websites',
    'Custom web applications',
    'Customer and staff portals',
    'Education platforms',
    'E-commerce marketplaces',
    'Booking and reservation systems',
    'Political and campaign platforms',
    'Android and iOS applications',
  ]

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-16">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-end">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              ABOUT STERLING STUDIOS
            </div>

            <h1 className="mt-4 text-[46px] lg:text-[60px] font-extrabold leading-[0.95] tracking-tight max-w-[920px]">
              We build digital products that help serious organisations move
              forward.
            </h1>

            <p className="mt-6 text-[16px] leading-7 text-slate-600 max-w-[72ch]">
              Sterling Studios Ltd is a Nairobi-based web design and software
              development company creating professional websites, custom web
              platforms and mobile applications for businesses, institutions
              and growing organisations.
            </p>

            <p className="mt-4 text-[16px] leading-7 text-slate-600 max-w-[72ch]">
              We combine strategy, content, interface design and dependable
              development to create digital products that strengthen
              credibility, improve customer experience and support real
              operational goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold"
              >
                View our work
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border text-[13px] font-bold"
              >
                Work with us →
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border bg-[#F8FAFC] p-7 lg:p-8">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              OUR POSITION
            </div>

            <p className="mt-4 text-[22px] leading-8 font-extrabold">
              A website should not merely exist. It should earn trust, make
              information clear and help people take the next step.
            </p>

            <p className="mt-4 text-[13px] leading-6 text-slate-600">
              That principle guides how we approach corporate websites,
              marketplaces, education systems, booking platforms, dashboards
              and mobile applications.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM AND WORKING IMAGES */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <img
            src="/human_boardroom_main.webp"
            alt="Digital strategy presentation in a Nairobi boardroom"
            className="h-[210px] lg:h-[250px] w-full object-cover object-top rounded-[20px] border"
          />

          <img
            src="/human_cafe_laptop.webp"
            alt="Professional reviewing a website project on a laptop"
            className="h-[210px] lg:h-[250px] w-full object-cover object-top rounded-[20px] border"
          />

          <img
            src="/human_handshake_deal.webp"
            alt="Business representatives confirming a digital project partnership"
            className="h-[210px] lg:h-[250px] w-full object-cover object-top rounded-[20px] border"
          />

          <img
            src="/human_support_team.webp"
            alt="Digital support team collaborating on a client project"
            className="h-[210px] lg:h-[250px] w-full object-cover object-top rounded-[20px] border"
          />
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-18 lg:py-20">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 items-start">
            <div>
              <div className="text-[11px] font-bold tracking-widest text-slate-500">
                WHO WE ARE
              </div>

              <h2 className="mt-3 text-[32px] lg:text-[42px] font-extrabold tracking-tight">
                A technology partner—not a template factory.
              </h2>
            </div>

            <div className="space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                Sterling Studios works with clients who need more than a
                generic online presence. Our projects often involve specific
                customer journeys, business processes, user roles, payments,
                databases, booking systems or administrative requirements.
              </p>

              <p>
                We take time to understand how the organisation works before
                recommending how its digital product should be structured. The
                result may be a focused corporate website, a complex web
                application, a mobile platform or a connected combination of
                several systems.
              </p>

              <p>
                Technology is selected according to the needs of the project.
                We do not add complexity merely to appear sophisticated, and we
                do not force important businesses into systems that cannot
                support their long-term requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-[780px]">
          <div className="text-[11px] font-bold tracking-widest text-slate-500">
            HOW WE THINK
          </div>

          <h2 className="mt-3 text-[32px] lg:text-[42px] font-extrabold tracking-tight">
            The principles behind every Sterling Studios project.
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-slate-600">
            Good digital work requires more than technical ability. It requires
            sound judgement, careful communication and respect for the business
            behind the product.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="rounded-[24px] border bg-white p-7 lg:p-8"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0F1F35] text-white flex items-center justify-center text-[12px] font-bold">
                {principle.number}
              </div>

              <h3 className="mt-5 text-[20px] font-extrabold">
                {principle.title}
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-slate-600">
                {principle.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <div className="text-[11px] font-bold tracking-widest text-slate-500">
                WHAT WE BUILD
              </div>

              <h2 className="mt-3 text-[32px] lg:text-[42px] font-extrabold tracking-tight">
                Different products. One consistent standard.
              </h2>

              <p className="mt-4 text-[14px] leading-6 text-slate-600">
                Our capabilities support organisations at different stages—from
                establishing a professional online presence to developing a
                complete digital operating platform.
              </p>

              <Link
                to="/services"
                className="mt-7 inline-flex px-6 py-3 rounded-full border text-[13px] font-bold"
              >
                Explore our services →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="rounded-2xl border bg-white px-5 py-5 text-[13px] font-bold text-slate-700"
                >
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NAIROBI / GLOBAL */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="rounded-[28px] overflow-hidden border grid lg:grid-cols-[1.1fr_0.9fr] bg-[#0F1F35] text-white">
          <img
            src="/skyline_golden.webp"
            alt="Nairobi skyline representing Sterling Studios' home and global outlook"
            className="w-full h-[360px] lg:h-full min-h-[470px] object-cover object-center"
          />

          <div className="p-8 lg:p-11 flex flex-col justify-center">
            <div className="text-[11px] font-bold tracking-widest text-slate-300">
              BUILT IN NAIROBI
            </div>

            <h2 className="mt-3 text-[30px] lg:text-[40px] font-extrabold leading-tight">
              African context. International standards.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-slate-300">
              Our location gives us a practical understanding of the markets,
              payment systems, connectivity conditions and customer behaviours
              that shape digital products across East Africa.
            </p>

            <p className="mt-4 text-[14px] leading-7 text-slate-300">
              At the same time, our work is built for organisations serving
              customers, partners and communities beyond national borders. We
              design for professional expectations wherever the audience may
              be.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                'Nairobi-based',
                'Africa-aware',
                'Globally accessible',
                'Remote collaboration',
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-2 rounded-full border border-white/15 bg-white/5 text-[11px] font-semibold text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT OWNERSHIP */}
      <section className="border-y bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
          <div className="max-w-[760px]">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">
              CLIENT CONFIDENCE
            </div>

            <h2 className="mt-3 text-[30px] lg:text-[38px] font-extrabold tracking-tight">
              Your organisation should remain in control of its digital assets.
            </h2>
          </div>

          <div className="mt-9 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Clear project scope',
                text: 'Responsibilities, deliverables and commercial terms are defined before work begins.',
              },
              {
                title: 'Visible progress',
                text: 'Important stages and approvals remain clear throughout the project.',
              },
              {
                title: 'Access and ownership',
                text: 'Agreed access to domains, hosting, systems and essential project assets is maintained.',
              },
              {
                title: 'Long-term support',
                text: 'Maintenance and continued development can be provided as the product evolves.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border bg-[#F8FAFC] p-6"
              >
                <h3 className="font-bold">{item.title}</h3>

                <p className="mt-2 text-[12px] leading-5 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-300">
              WORK WITH STERLING STUDIOS
            </div>

            <h2 className="mt-3 text-[30px] lg:text-[40px] font-extrabold tracking-tight max-w-[780px]">
              Let us build a digital product worthy of the organisation behind
              it.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-slate-300 max-w-[66ch]">
              Tell us about your organisation, the challenge you need to solve
              and the people the product must serve. We will help define an
              appropriate next step.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-7 py-3 rounded-full bg-white text-[#0F1F35] text-[13px] font-bold whitespace-nowrap"
          >
            Start the conversation →
          </Link>
        </div>
      </section>
    </div>
  )
}