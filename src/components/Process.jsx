import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Compass,
  Layers3,
  Rocket,
  Search,
  Workflow,
} from 'lucide-react'

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand the Problem',
    description:
      'I start by identifying the actual business issue, the current workflow, the people involved and the result the system needs to produce.',
    outputs: [
      'Business requirements',
      'Current-process review',
      'Constraints and priorities',
    ],
  },
  {
    number: '02',
    icon: Compass,
    title: 'Design the Solution',
    description:
      'I map the workflow, define the data movement and choose the simplest technical approach that can solve the problem reliably.',
    outputs: [
      'System architecture',
      'Workflow map',
      'Technology selection',
    ],
  },
  {
    number: '03',
    icon: Layers3,
    title: 'Build the Foundation',
    description:
      'I create the interface, backend structure, CRM setup or automation framework needed to support the complete system.',
    outputs: [
      'Core application',
      'Database or CRM structure',
      'Reusable components',
    ],
  },
  {
    number: '04',
    icon: Workflow,
    title: 'Connect & Automate',
    description:
      'I integrate the required platforms using APIs, webhooks and automation tools so data and actions move without unnecessary manual work.',
    outputs: [
      'Platform integrations',
      'Automated workflows',
      'Data mapping and routing',
    ],
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Test & Refine',
    description:
      'I test the real workflow, identify failure points and improve the experience before the system is treated as complete.',
    outputs: [
      'Functional testing',
      'Error handling',
      'User-flow improvements',
    ],
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Deploy & Improve',
    description:
      'I launch the system, document the important parts and continue improving it based on actual use, performance and feedback.',
    outputs: [
      'Production deployment',
      'Technical documentation',
      'Ongoing optimisation',
    ],
  },
]

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              <Code2 size={16} />
              My Process
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              From unclear problem to
              <span className="block text-violet-400">
                working system.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-zinc-400 lg:justify-self-end">
            I do not jump straight into tools. I first understand the
            operation, then design, build, connect, test and deploy the system
            in a controlled sequence.
          </p>
        </div>

        <div className="relative mt-16">

          <div className="grid gap-5 lg:grid-cols-2">
            {processSteps.map((step) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-violet-500/[0.04] lg:p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                      <Icon size={25} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                          Step {step.number}
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-zinc-500">
                        {step.description}
                      </p>

                      <div className="mt-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                          Deliverables
                        </p>

                        <ul className="mt-4 space-y-3">
                          {step.outputs.map((output) => (
                            <li
                              key={output}
                              className="flex items-center gap-3 text-sm text-zinc-400"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                              {output}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-white/[0.03] to-blue-500/5 p-7 lg:p-9">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-lg font-semibold text-white">
                The goal is not more tools.
              </p>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-400">
                The goal is a working system that people can understand, use
                and maintain without creating more operational confusion.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Start a project
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process