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
      'I identify the real business problem, current workflow, people involved, technical constraints and the outcome the system needs to produce.',
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
      'I map the workflow, define how information should move and choose the simplest reliable architecture for the required outcome.',
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
      'I create the interface, data structure, CRM configuration or automation framework needed to support the complete system.',
    outputs: [
      'Core application',
      'Database or CRM structure',
      'Reusable components',
    ],
  },
  {
    number: '04',
    icon: Workflow,
    title: 'Connect and Automate',
    description:
      'I connect platforms through APIs, webhooks and automation tools so information and actions move without unnecessary manual work.',
    outputs: [
      'Platform integrations',
      'Automated workflows',
      'Data mapping and routing',
    ],
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Test and Refine',
    description:
      'I test complete user journeys, identify failure points and improve reliability, usability and error handling before launch.',
    outputs: [
      'Functional testing',
      'Error handling',
      'User-flow improvements',
    ],
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Deploy and Improve',
    description:
      'I launch the system, document the important parts and improve it using real usage, performance data and stakeholder feedback.',
    outputs: [
      'Production deployment',
      'Technical documentation',
      'Ongoing optimisation',
    ],
  },
]

const processPrinciples = [
  'Solve the workflow before choosing tools',
  'Keep architecture understandable',
  'Test complete real-world journeys',
  'Build for maintenance and growth',
]

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-8rem] top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute bottom-0 left-[-7rem] h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              <Code2 size={16} />
              My Process
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              From an unclear problem to a
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                working production system.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-8 text-zinc-400">
              I do not begin with software or automation tools. I first
              understand the operation, then design, build, connect, test and
              deploy the system in a controlled sequence.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {processPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-3 text-sm text-zinc-500"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-violet-400"
                  />

                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute bottom-8 left-7 top-8 hidden w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-transparent lg:block" />

          <div className="grid gap-5 lg:grid-cols-2">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-violet-500/[0.04] lg:p-8"
                >
                  <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-36 w-36 rounded-full bg-violet-500/10 blur-[60px] opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-5">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition group-hover:border-violet-400/40 group-hover:bg-violet-500/15">
                      <Icon size={25} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                          Step {step.number}
                        </span>

                        <span className="text-xs text-zinc-700">
                          {String(index + 1).padStart(2, '0')} /{' '}
                          {String(processSteps.length).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-zinc-500">
                        {step.description}
                      </p>

                      <div className="mt-6 border-t border-white/10 pt-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                          Deliverables
                        </p>

                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {step.outputs.map((output) => (
                            <li
                              key={output}
                              className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                            >
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                              <span>{output}</span>
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

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-white/[0.03] to-blue-500/10 p-7 lg:p-9">
          <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] h-56 w-56 rounded-full bg-blue-500/15 blur-[90px]" />

          <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-xl font-semibold text-white">
                The goal is not to add more tools.
              </p>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
                The goal is a reliable system that people can understand, use
                and maintain without creating more operational confusion or
                technical debt.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-violet-100"
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