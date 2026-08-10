import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function Testimonials() {
  const projects = [
    {
      name: 'Akashi Designs',
      category: 'Architecture & Digital Commerce',
      image: '/human_boardroom_main.webp',
      description:
        'A live architectural marketplace supporting discovery, purchasing and secure digital delivery.',
      website: 'https://akashidesigns.com',
    },
    {
      name: 'The Alkebula School',
      category: 'Education Technology',
      image: '/human_team_collab.webp',
      description:
        'A connected tutoring platform supporting parents, educators, applications and international curricula.',
      website: 'https://alkebulaschool.com',
    },
    {
      name: 'Sunscape Car Rentals',
      category: 'Transport & Travel',
      image: '/human_founder_smile.webp',
      description:
        'A booking-led vehicle rental platform designed around trust, vehicle discovery and fast enquiry.',
      website: 'https://sunscape.co.ke',
    },
  ]

  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Client Confidence | Sterlings Studio"
        description="See the live platforms, working standards and project evidence behind Sterlings Studio."
        canonical="https://sterlingsstudio.com/testimonials"
      />

      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 lg:pt-14 pb-12">
        <div className="grid lg:grid-cols-[0.58fr_0.42fr] gap-8 lg:gap-12 items-stretch">
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              CLIENT CONFIDENCE
            </div>

            <h1 className="mt-4 max-w-[700px] text-[32px] lg:text-[38px] font-bold leading-[1.06] tracking-[-0.025em] text-slate-800">
              Trust is earned through the quality of the work and the experience behind it.
            </h1>

            <p className="mt-5 max-w-[700px] text-[15px] leading-7 text-slate-500">
              Sterlings Studio works closely with businesses and organisations to turn complex
              requirements into clear, dependable digital products.
            </p>

            <p className="mt-3 max-w-[700px] text-[14px] leading-7 text-slate-500">
              Rather than publish exaggerated promises, we invite prospective clients to examine
              the platforms we have built, the problems they solve and the standards that guide
              every engagement.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex rounded-full bg-[#0F1F35] px-7 py-3.5 text-[12px] font-bold text-white"
              >
                View selected work
              </Link>

              <Link
                to="/contact"
                className="inline-flex rounded-full border border-slate-300 px-7 py-3.5 text-[12px] font-bold text-slate-700"
              >
                Discuss your project →
              </Link>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                ['LIVE WORK', 'Real platforms'],
                ['PROCESS', 'Clear communication'],
                ['HANDOVER', 'Built for ownership'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-slate-200 bg-[#F8FAFC] p-4">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-slate-400">
                    {label}
                  </div>
                  <div className="mt-1.5 text-[12px] font-semibold text-slate-700">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 overflow-hidden rounded-[24px] border border-slate-200 bg-[#F8FAFC]">
              <img
                src="/human_team_collab.webp"
                alt="Sterlings Studio team collaboration"
                className="block w-full h-[260px] lg:h-[300px] object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[20px] border border-slate-200">
              <img
                src="/human_cafe_laptop.webp"
                alt="Digital product work session"
                className="block w-full h-[150px] object-cover"
              />
            </div>

            <div className="rounded-[20px] bg-[#0F1F35] p-5 text-white">
              <div className="text-[9px] font-bold tracking-[0.17em] text-slate-400">
                OUR STANDARD
              </div>
              <p className="mt-3 text-[16px] font-semibold leading-6">
                Every public claim should be supported by real work, genuine feedback or verifiable evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CLIENT PLATFORMS */}
      <section className="border-y bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-16 items-end">
            <div>
              <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                LIVE CLIENT PLATFORMS
              </div>
              <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-800">
                The strongest testimonial is a product people can see and use.
              </h2>
            </div>

            <div className="lg:text-right">
              <p className="text-[14px] leading-7 text-slate-500 lg:ml-auto max-w-[620px]">
                These live projects demonstrate the breadth of organisations, customer journeys
                and operating requirements Sterlings Studio can support.
              </p>
            </div>
          </div>

          <div className="mt-9 grid lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <article
                key={project.name}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white"
              >
                <img
                  src={project.image}
                  alt={`${project.name} project`}
                  className="block w-full h-[210px] object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="text-[9px] font-bold tracking-[0.15em] text-slate-400">
                    {project.category}
                  </div>
                  <h3 className="mt-3 text-[18px] font-bold text-slate-800">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-slate-500">
                    {project.description}
                  </p>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex text-[11px] font-bold text-slate-800 underline underline-offset-4"
                  >
                    Visit live platform ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[0.55fr_0.45fr] gap-8 lg:gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-[22px] border">
              <img
                src="/human_female_founder.webp"
                alt="Business leader"
                className="block w-full h-[260px] object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[22px] border mt-8">
              <img
                src="/human_pitch_boardroom.webp"
                alt="Project presentation"
                className="block w-full h-[260px] object-cover"
              />
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
              THE EXPERIENCE BEHIND THE WORK
            </div>
            <h2 className="mt-4 text-[28px] lg:text-[32px] font-bold text-slate-800">
              Clear scope. Visible progress. Respectful handover.
            </h2>
            <p className="mt-5 text-[14px] leading-7 text-slate-500">
              Clients should know what is being built, why it matters and what comes next.
              We favour transparent scope, reviewable stages and maintainable foundations.
            </p>
            <Link
              to="/process"
              className="mt-6 inline-flex rounded-full bg-[#0F1F35] px-6 py-3 text-[12px] font-bold text-white"
            >
              See our process →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
