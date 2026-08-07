import { Link } from 'react-router-dom'
import SEO from '../../components/SEO.jsx'

export default function PostAlkebula() {
  return (
    <div className="bg-white text-slate-900">
      <SEO
        title="Building The Alkebula School Education Platform | Sterling Studios"
        description="How Sterling Studios designed a multi-role education platform for international-curriculum tutoring, tutor applications, parent bookings and homeschool support."
        canonical="https://sterlingsstudio.com/blog/building-alkebula-school-platform"
        ogImage="/human_team_collab.webp"
      />

      <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-16 pb-20">
        <div className="text-[11px] tracking-widest font-bold text-slate-400">
          LIVE PROJECT • EDUCATION TECHNOLOGY • INTERNATIONAL TUTORING
        </div>

        <h1 className="mt-4 text-[36px] lg:text-[46px] font-extrabold leading-[0.95] tracking-tight">
          Building The Alkebula School: A Connected Platform for Parents,
          Tutors and Academic Administration
        </h1>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          The Alkebula School required a connected education system—not simply
          a public school website. The platform had to support international
          families, professional educators and administrators through clearly
          separated user journeys.
        </p>

        <div className="mt-5 text-[12px] text-slate-500">
          Sterling Studios case study • Education technology
        </div>

        <img
          src="/human_team_collab.webp"
          alt="Education technology team collaborating on a digital platform"
          className="mt-9 w-full h-[380px] object-cover object-top rounded-[22px] border"
        />

        <div className="mt-12 space-y-8 text-[15px] leading-8 text-slate-700">
          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              More than a tutor directory
            </h2>

            <p className="mt-3">
              The school supports learners following Cambridge, Edexcel, A
              Level, IB and structured homeschool programmes. Each family may
              require a different combination of curriculum, subject, academic
              level, tutor experience, schedule and timezone.
            </p>

            <p className="mt-4">
              A simple list of tutor names would not be enough. Parents needed
              professional profiles, curriculum information, subject packages,
              availability and a structured path towards booking.
            </p>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Three connected user experiences
            </h2>

            <div className="mt-5 grid gap-4">
              <div className="rounded-[18px] border bg-[#F8FAFC] p-5">
                <h3 className="font-extrabold">Parents</h3>
                <p className="mt-2 text-[13px] leading-6">
                  Parents can explore programmes and educators, request
                  matching support, select suitable lesson packages and manage
                  their relationship with the school.
                </p>
              </div>

              <div className="rounded-[18px] border bg-[#F8FAFC] p-5">
                <h3 className="font-extrabold">Educators</h3>
                <p className="mt-2 text-[13px] leading-6">
                  Tutors can submit professional applications, qualifications,
                  subjects, curricula, rates, biographies and availability for
                  administrative review.
                </p>
              </div>

              <div className="rounded-[18px] border bg-[#F8FAFC] p-5">
                <h3 className="font-extrabold">Administrators</h3>
                <p className="mt-2 text-[13px] leading-6">
                  Administrators require visibility over tutor applications,
                  profiles, bookings, invoices, notifications and academic
                  operations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Tutor applications and professional profiles
            </h2>

            <p className="mt-3">
              The tutor-application process was designed to collect more than a
              short biography. Applicants provide qualifications, experience,
              subjects, curricula, year groups, location, professional
              documents and proposed hourly rates.
            </p>

            <p className="mt-4">
              Approved information is then translated into a parent-facing
              profile that helps families understand the educator’s suitability
              before beginning a booking journey.
            </p>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Curriculum-specific booking
            </h2>

            <p className="mt-3">
              International education requires more precision than selecting a
              subject name. Mathematics at Cambridge IGCSE, Edexcel IGCSE, A
              Level and IB may involve different packages, rates and educator
              expertise.
            </p>

            <p className="mt-4">
              The booking structure therefore connects the tutor, curriculum,
              subject package, lesson rate, date and available time. Timezone
              handling is especially important when parents and educators are
              located in different countries.
            </p>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Supporting structured homeschool programmes
            </h2>

            <p className="mt-3">
              The homeschool service extends beyond individual tutoring. It is
              designed around programme planning, syllabus tracking, teaching,
              practice, assessment, tutor notes and parent reporting.
            </p>

            <p className="mt-4">
              This requirement influenced the platform architecture because the
              school needs to support both lesson-based tutoring and longer-term
              academic management within the same digital environment.
            </p>
          </section>

          <section>
            <h2 className="text-[23px] font-extrabold text-slate-900">
              Technology serving the academic model
            </h2>

            <p className="mt-3">
              The platform combines a modern public website with account-based
              workflows, database records, private document storage, email
              notifications and role-specific administrative tools.
            </p>

            <p className="mt-4">
              The most important lesson from the project is that education
              technology must reflect how the school actually works. Features
              should support safeguarding, academic quality and parent
              confidence—not merely add technical complexity.
            </p>
          </section>

          <div className="rounded-[22px] bg-[#0F1F35] text-white p-7">
            <div className="text-[11px] font-bold tracking-widest text-slate-300">
              BUILDING AN EDUCATION PLATFORM?
            </div>

            <h3 className="mt-3 text-[21px] font-extrabold">
              We develop connected systems for schools, tutors, learners and
              academic administration.
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://alkebulaschool.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-5 py-2.5 rounded-full bg-white text-[#0F1F35] text-[12px] font-bold"
              >
                Visit The Alkebula School ↗
              </a>

              <Link
                to="/contact"
                className="inline-flex px-5 py-2.5 rounded-full border border-white/20 text-[12px] font-bold"
              >
                Discuss an education platform →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}