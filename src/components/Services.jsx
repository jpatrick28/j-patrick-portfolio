import {
  ArrowUpRight,
  Bot,
  Code2,
  DatabaseZap,
  Gauge,
  PanelsTopLeft,
  Workflow,
} from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Bot,
    title: 'AI Systems & Assistants',
    description:
      'Custom AI assistants, knowledge-based chat systems, prompt architecture and agent workflows designed around real business processes.',
    features: [
      'AI assistants and chatbots',
      'RAG and knowledge systems',
      'Prompt and persona development',
      'AI workflow integration',
    ],
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Business Automation',
    description:
      'Automated workflows that reduce repetitive work, move data between platforms and keep teams from relying on manual follow-up.',
    features: [
      'Zapier and webhook workflows',
      'CRM automation',
      'Lead routing and nurturing',
      'Operational notifications',
    ],
  },
  {
    number: '03',
    icon: Code2,
    title: 'Websites & Web Applications',
    description:
      'Responsive websites, dashboards, portals and web applications built around clear business goals and practical user experiences.',
    features: [
      'React websites',
      'Custom web applications',
      'Responsive interfaces',
      'Interactive dashboards',
    ],
  },
  {
    number: '04',
    icon: DatabaseZap,
    title: 'API & Platform Integrations',
    description:
      'Connections between CRMs, scheduling tools, payment systems, databases and third-party platforms using APIs and webhooks.',
    features: [
      'REST API integrations',
      'Webhook implementation',
      'Data mapping and syncing',
      'Third-party platform connections',
    ],
  },
  {
    number: '05',
    icon: PanelsTopLeft,
    title: 'Funnels, Surveys & CRM Systems',
    description:
      'Lead-generation systems that capture, qualify, segment and move contacts through the right follow-up process.',
    features: [
      'Custom survey funnels',
      'Lead qualification logic',
      'GoHighLevel systems',
      'Booking and follow-up flows',
    ],
  },
  {
    number: '06',
    icon: Gauge,
    title: 'Technical Operations',
    description:
      'Technical ownership across deployment, troubleshooting, documentation, optimisation and ongoing system improvements.',
    features: [
      'System troubleshooting',
      'Deployment and hosting',
      'Technical documentation',
      'Performance optimisation',
    ],
  },
]

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Services
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Systems built to solve
              <span className="block text-violet-400">
                actual business problems.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-8 text-zinc-400">
              I work across development, automation and technical operations
              to build connected systems instead of isolated tools. Each
              service is focused on reducing friction, improving visibility
              and making execution easier.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/[0.05]"
              >
                <div className="absolute right-5 top-4 text-5xl font-bold text-white/[0.035] transition group-hover:text-violet-400/[0.08]">
                  {service.number}
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Icon size={23} />
                </div>

                <h3 className="mt-7 max-w-xs text-xl font-semibold leading-8 text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-zinc-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-white transition group-hover:text-violet-300"
                >
                  Discuss this service
                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 to-blue-500/5 p-7 sm:flex-row sm:items-center lg:p-9">
          <div>
            <p className="text-lg font-semibold text-white">
              Need several systems connected together?
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
              I can handle the full workflow—from planning and development to
              integration, automation, testing and deployment.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            Start a project
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services