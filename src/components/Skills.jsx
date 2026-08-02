import {
  Blocks,
  Bot,
  Braces,
  CloudCog,
  Database,
  GitBranch,
  Workflow,
  Wrench,
} from 'lucide-react'
import { featuredSkills, skillGroups } from '../data/skills'

const groupIcons = [
  Bot,
  Braces,
  Database,
  Workflow,
  CloudCog,
  Wrench,
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              <Blocks size={16} />
              Technical Skills
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              The tools behind the
              <span className="block text-violet-400">
                systems I build.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-zinc-400 lg:justify-self-end">
            My experience covers more than individual technologies. I work
            across development, automation, data, AI and business operations
            to connect platforms into complete working systems.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-white/[0.03] to-blue-500/5 p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
              <GitBranch size={22} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Core technology stack
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                The technologies I currently use most often.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {featuredSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[index]

            return (
              <article
                key={group.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-violet-500/[0.04] lg:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/20">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-7 text-zinc-500">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-zinc-950/60 px-3 py-1.5 text-xs font-medium text-zinc-400 transition group-hover:border-violet-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-7 lg:p-9">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">
                I choose tools based on the problem.
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-400">
                I am not locked into one platform. I evaluate the business
                requirement, available integrations, cost, maintainability and
                deployment needs before selecting the stack.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-500/40 hover:bg-violet-500/10"
            >
              Discuss your stack
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills