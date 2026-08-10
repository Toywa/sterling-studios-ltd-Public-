import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function About() {
  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="About Sterlings Studio | Nairobi Digital Product Studio"
        description="Sterlings Studio builds professional websites, web applications and mobile products for organisations in Kenya and beyond."
        canonical="https://sterlingsstudio.com/about"
      />

      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 lg:pt-14 pb-12">
        <div className="grid lg:grid-cols-[0.56fr_0.44fr] gap-8 lg:gap-12 items-stretch">
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              ABOUT STERLINGS STUDIO
            </div>

            <h1 className="mt-4 max-w-[720px] text-[32px] lg:text-[38px] font-bold leading-[1.06] tracking-[-0.025em] text-slate-800">
              We build digital products that help serious organisations move forward.
            </h1>

            <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-slate-500">
              Sterlings Studio is a Nairobi-based web design and software development company
              creating professional websites, custom web platforms and mobile applications for
              businesses, institutions and growing organisations.
            </p>

            <p className="mt-3 max-w-[720px] text-[14px] leading-7 text-slate-500">
              We combine strategy, content, interface design and dependable development to create
              digital products that strengthen credibility, improve customer experience and support
              real operational goals.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[12px] font-bold text-white"
              >
                View our work
              </Link>
              <Link
                to="/contact"
                className="inline-flex rounded-full border border-slate-300 px-7 py-3.5 text-[12px] font-bold text-slate-700"
              >
                Work with us →
              </Link>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                ['BASED IN', 'Nairobi, Kenya'],
                ['FOCUS', 'Digital products'],
                ['REACH', 'Kenya & international'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border bg-[#F8FAFC] p-4">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">{label}</div>
                  <div className="mt-1.5 text-[12px] font-semibold text-slate-700">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 overflow-hidden rounded-[24px] border">
              <img
                src="/human_boardroom_main.webp"
                alt="Sterlings Studio strategy discussion"
                className="block w-full h-[285px] object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[20px] border">
              <img
                src="/human_female_founder.webp"
                alt="Business leadership"
                className="block w-full h-[155px] object-cover"
              />
            </div>
            <div className="rounded-[20px] bg-[#F8FAFC] border p-5">
              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                OUR POSITION
              </div>
              <p className="mt-3 text-[15px] font-semibold leading-6 text-slate-800">
                A website should earn trust, make information clear and help people take the next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BELIEF */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-16">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                WHAT WE BELIEVE
              </div>
              <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold text-slate-800">
                Technology should support the organisation, not distract from it.
              </h2>
            </div>
            <div>
              <p className="text-[16px] leading-8 text-slate-600">
                The right digital product should make an organisation easier to understand, easier
                to engage with and easier to operate.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-slate-500">
                That principle guides how we approach corporate websites, marketplaces, education
                systems, booking platforms, dashboards and mobile applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAGAZINE GRID */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[0.52fr_0.48fr] gap-6">
          <div className="overflow-hidden rounded-[26px] border">
            <img
              src="/human_team_collab.webp"
              alt="Collaborative digital product work"
              className="block w-full h-[390px] object-cover"
            />
          </div>

          <div className="grid gap-6">
            <div className="rounded-[24px] bg-[#0F1F35] text-white p-7">
              <div className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                HOW WE THINK
              </div>
              <p className="mt-4 text-[22px] font-semibold leading-[1.35]">
                Business before decoration. Clarity before complexity. Ownership after launch.
              </p>
              <Link
                to="/process"
                className="mt-6 inline-flex text-[11px] font-bold underline underline-offset-4"
              >
                See how we work →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-[22px] border">
                <img
                  src="/human_cafe_laptop.webp"
                  alt="Product design work"
                  className="block w-full h-[190px] object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[22px] border">
                <img
                  src="/human_pitch_boardroom.webp"
                  alt="Project presentation"
                  className="block w-full h-[190px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
