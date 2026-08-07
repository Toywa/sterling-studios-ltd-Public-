import { Link, useParams } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'

export default function CaseStudy() {
  const { slug } = useParams()

  const project = caseStudies.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="min-h-[65vh] bg-white flex items-center">
        <div className="max-w-[900px] mx-auto px-6 py-20 text-center">
          <div className="text-[11px] font-bold tracking-widest text-slate-500">
            PROJECT NOT FOUND
          </div>

          <h1 className="mt-4 text-[42px] font-extrabold tracking-tight">
            This case study is unavailable.
          </h1>

          <p className="mt-4 text-slate-600">
            Return to our selected work to explore another Sterling Studios
            project.
          </p>

          <Link
            to="/work"
            className="mt-7 inline-flex px-6 py-3 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold"
          >
            View selected work →
          </Link>
        </div>
      </div>
    )
  }

  const whatsappUrl = `https://wa.me/254722114098?text=${encodeURIComponent(
    project.whatsappMessage
  )}`

  return (
    <div className="bg-white text-slate-900">
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-12">
        <Link
          to="/work"
          className="text-[11px] font-bold tracking-widest text-slate-400 hover:text-slate-700"
        >
          ← SELECTED WORK
        </Link>

        <div className="mt-8 text-[11px] tracking-widest font-bold text-slate-400">
          {project.category}
        </div>

        <h1 className="mt-4 text-[44px] lg:text-[58px] font-extrabold leading-[0.95] tracking-tight max-w-[1000px]">
          {project.title}{' '}
          <span className="text-sterlingBlue">{project.accent}</span>
        </h1>

        <p className="mt-6 text-[16px] lg:text-[17px] leading-7 text-slate-600 max-w-[760px]">
          {project.summary}
        </p>

        <div className="mt-9 grid sm:grid-cols-3 gap-4 max-w-[760px]">
          {project.highlights.map((item) => (
            <div
              key={`${item.value}-${item.label}`}
              className="p-4 rounded-2xl bg-slate-50 border"
            >
              <div className="text-[18px] font-extrabold">{item.value}</div>
              <div className="mt-1 text-[11px] text-slate-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`max-w-[1280px] mx-auto px-6 lg:px-8 pb-10 grid gap-6 ${
          project.images.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'
        }`}
      >
        {project.images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="w-full h-[360px] lg:h-[500px] object-cover object-top rounded-[24px] border"
          />
        ))}
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-20 grid lg:grid-cols-[0.72fr_1.28fr] gap-12">
        <aside className="space-y-7 text-[13px]">
          <div>
            <div className="font-bold">Project</div>
            <div className="text-slate-600 mt-1">{project.client}</div>
          </div>

          <div>
            <div className="font-bold">Sector</div>
            <div className="text-slate-600 mt-1">{project.sector}</div>
          </div>

          <div>
            <div className="font-bold">Location</div>
            <div className="text-slate-600 mt-1">{project.location}</div>
          </div>

          <div>
            <div className="font-bold">Project scope</div>
            <div className="text-slate-600 mt-1 leading-5">
              {project.scope}
            </div>
          </div>

          <div>
            <div className="font-bold">Technology and capabilities</div>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-full bg-slate-50 border text-[11px]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-5 py-2.5 rounded-full bg-[#0F1F35] text-white text-[12px] font-bold"
            >
              Start a similar project →
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-5 py-2.5 rounded-full border text-[12px] font-bold"
              >
                Visit live website ↗
              </a>
            )}
          </div>
        </aside>

        <div className="space-y-10 text-[15px] leading-7 text-slate-700">
          <div>
            <div className="text-[10px] font-bold tracking-widest text-slate-400">
              THE CHALLENGE
            </div>

            <h2 className="mt-2 font-extrabold text-[22px] text-slate-900">
              The business requirement
            </h2>

            <p className="mt-3">{project.challenge}</p>
          </div>

          <div>
            <div className="text-[10px] font-bold tracking-widest text-slate-400">
              THE SOLUTION
            </div>

            <h2 className="mt-2 font-extrabold text-[22px] text-slate-900">
              What Sterling Studios built
            </h2>

            <p className="mt-3">{project.solution}</p>
          </div>

          <div>
            <div className="text-[10px] font-bold tracking-widest text-slate-400">
              THE OUTCOME
            </div>

            <h2 className="mt-2 font-extrabold text-[22px] text-slate-900">
              A stronger digital foundation
            </h2>

            <p className="mt-3">{project.result}</p>
          </div>
        </div>
      </section>

      <section className="border-y bg-[#0F1F35] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-slate-300">
              BUILD SOMETHING PURPOSEFUL
            </div>

            <h2 className="mt-3 text-[30px] lg:text-[38px] font-extrabold tracking-tight max-w-[720px]">
              Your organisation deserves a digital product built around its
              real objectives.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-slate-300 max-w-[65ch]">
              Tell us about the business problem, customer journey or internal
              process you want to improve. We will help define the right
              platform and delivery approach.
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