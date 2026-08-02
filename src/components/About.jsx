import {
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Workflow,
  Wrench,
} from 'lucide-react'

const capabilities = [
  {
    icon: BrainCircuit,
    title: 'AI Systems',
    description:
      'AI assistants, agent workflows, prompt systems, RAG pipelines and intelligent business tools.',
  },
  {
    icon: Workflow,
    title: 'Automation',
    description:
      'CRM workflows, webhooks, Zapier integrations and automated lead management systems.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Responsive websites, web applications, dashboards, funnels and custom user experiences.',
  },
  {
    icon: Database,
    title: 'Data & Integrations',
    description:
      'API connections, structured data flows, reporting systems and database-backed applications.',
  },
]

const stats = [
  {
    value: '9+',
    label: 'Years in remote operations',
  },
  {
    value: '3+',
    label: 'Years building software',
  },
  {
    value: '20+',
    label: 'Platforms and tools',
  },
  {
    value: 'End-to-End',
    label: 'Project ownership',
  },
]

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              <Layers3 size={16} />
              About Me
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              I connect technology with
              <span className="block text-violet-400">
                real business operations.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-zinc-400">
              <p>
                I’m J Patrick Magadia, an AI Automation and Full-Stack
                Developer with experience across web development, CRM systems,
                technical operations, executive support and business
                automation.
              </p>

              <p>
                My strength is not limited to writing code. I understand how
                businesses actually operate, where manual work slows teams
                down, and how disconnected tools create unnecessary problems.
              </p>

              <p>
                I design practical systems that connect people, data and
                platforms. That includes AI assistants, automated workflows,
                lead funnels, dashboards, integrations and custom web
                applications.
              </p>
            </div>

            <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Wrench size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Business-first development
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    I focus on building systems that solve operational
                    problems, not technology that looks impressive but adds no
                    real value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon

                return (
                  <article
                    key={capability.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-violet-500/[0.05]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/20">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {capability.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      {capability.description}
                    </p>
                  </article>
                )
              })}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5"
                >
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About