import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  MapPin,
} from 'lucide-react'
import { earlierExperience, experiences } from '../data/experience'

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              <BriefcaseBusiness size={16} />
              Work Experience
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Technical experience built through
              <span className="block text-violet-400">
                real business operations.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-zinc-400 lg:justify-self-end">
            My background combines development, automation, data, operations
            and executive support. That allows me to understand both the
            technical system and the people who need to use it.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm font-semibold text-white">
                Career direction
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                My work has evolved from administration and operations into
                full technical ownership across AI, automation, integrations
                and application development.
              </p>

              <div className="mt-6 space-y-4">
                <CareerStep label="Operations" active />
                <CareerStep label="Data & systems" active />
                <CareerStep label="Automation" active />
                <CareerStep label="AI & development" active />
              </div>
            </div>
          </aside>

          <div className="relative">
            <div className="absolute bottom-0 left-[19px] top-2 w-px bg-gradient-to-b from-violet-500 via-violet-500/30 to-transparent" />

            <div className="space-y-8">
              {experiences.map((experience) => (
                <ExperienceItem
                  key={experience.id}
                  experience={experience}
                />
              ))}
            </div>

            <div className="relative mt-8 pl-14">
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-500">
                <ChevronRight size={18} />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-white">
                  Earlier experience
                </h3>

                <p className="mt-2 text-sm leading-7 text-zinc-500">
                  Additional roles that built my foundation in customer
                  service, administration, communication and business
                  operations.
                </p>

                <div className="mt-6 divide-y divide-white/10">
                  {earlierExperience.map((experience) => (
                    <div
                      key={`${experience.role}-${experience.period}`}
                      className="flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-center"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {experience.role}
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                          {experience.company}
                        </p>
                      </div>

                      <p className="text-sm font-medium text-zinc-500">
                        {experience.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ experience }) {
  return (
    <article className="relative pl-14">
      <div
        className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border ${
          experience.current
            ? 'border-violet-500/40 bg-violet-500/15 text-violet-300'
            : 'border-white/10 bg-zinc-900 text-zinc-500'
        }`}
      >
        <BriefcaseBusiness size={18} />
      </div>

      <div
        className={`rounded-3xl border p-6 lg:p-8 ${
          experience.current
            ? 'border-violet-500/30 bg-gradient-to-br from-violet-500/[0.09] via-white/[0.03] to-blue-500/[0.03]'
            : 'border-white/10 bg-white/[0.03]'
        }`}
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                {experience.role}
              </h3>

              {experience.current && (
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  Current
                </span>
              )}
            </div>

            <p className="mt-2 font-medium text-violet-300">
              {experience.company}
            </p>
          </div>

          <div className="space-y-2 text-sm text-zinc-500 md:text-right">
            <p className="flex items-center gap-2 md:justify-end">
              <CalendarDays size={15} />
              {experience.period}
            </p>

            <p className="flex items-center gap-2 md:justify-end">
              <MapPin size={15} />
              {experience.location}
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-400">
          {experience.summary}
        </p>

        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Responsibilities and results
          </p>

          <ul className="mt-4 grid gap-3">
            {experience.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex items-start gap-3 text-sm leading-7 text-zinc-400"
              >
                <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                  <Check size={11} strokeWidth={3} />
                </span>

                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-zinc-950/50 px-3 py-1.5 text-xs font-medium text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function CareerStep({ label, active }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          active ? 'bg-violet-400' : 'bg-zinc-700'
        }`}
      />

      <span className="text-sm text-zinc-400">{label}</span>
    </div>
  )
}

export default Experience