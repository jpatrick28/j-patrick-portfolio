import {
  ArrowDown,
  ArrowRight,
  Bot,
  Braces,
  Download,
  Workflow,
} from 'lucide-react'

import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const portfolioStats = [
  {
    value: '15',
    label: 'Portfolio projects',
  },
  {
    value: '100%',
    label: 'Responsive',
  },
  {
    value: '9+',
    label: 'Live deployments',
  },
  {
    value: 'AI + Web',
    label: 'Specialization',
  },
]

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute bottom-[-12rem] left-[-8rem] h-[360px] w-[360px] rounded-full bg-fuchsia-600/10 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />

            <span className="text-sm font-medium text-violet-200">
              Available for web, AI and automation projects
            </span>
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            AI Automation & Full-Stack Developer
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            I build digital systems that turn
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              manual work into automation.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            I’m J Patrick Magadia. I design and build AI-powered
            applications, responsive websites, SaaS dashboards,
            CRM workflows and business automations that make
            operations faster, cleaner and easier to scale.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white transition hover:bg-violet-500"
            >
              View My Work
              <ArrowRight size={19} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-violet-500/40 hover:bg-violet-500/10"
            >
              Start a Project
            </a>

            <a
              href="/J-Patrick-Magadia-Resume.pdf"
              download="J-Patrick-Magadia-Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-violet-500/40 hover:bg-violet-500/10"
            >
              <Download size={18} />
              Download Résumé
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/jpatrick28"
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
              className="rounded-lg border border-white/10 bg-white/5 p-3 text-zinc-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="#contact"
              aria-label="Go to LinkedIn and contact information"
              className="rounded-lg border border-white/10 bg-white/5 p-3 text-zinc-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#projects"
              className="ml-2 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-violet-300"
            >
              Explore 10 live projects
              <ArrowDown size={16} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-violet-950/30 backdrop-blur sm:p-6">
            <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-48 w-48 rounded-full bg-violet-500/20 blur-[70px]" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500">
                    Portfolio overview
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-white">
                    Production-Ready Systems
                  </h2>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {portfolioStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-zinc-950/50 p-4"
                  >
                    <p className="text-2xl font-bold tracking-tight text-white">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                <CapabilityCard
                  icon={<Bot size={22} />}
                  title="AI Systems"
                  description="AI assistants, agents, RAG systems and intelligent workflows"
                />

                <CapabilityCard
                  icon={<Workflow size={22} />}
                  title="Business Automation"
                  description="n8n, Zapier, GoHighLevel, APIs, webhooks and CRM operations"
                />

                <CapabilityCard
                  icon={<Braces size={22} />}
                  title="Full-Stack Development"
                  description="Responsive websites, SaaS dashboards and backend integrations"
                />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
                <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-zinc-500">
                    Current focus
                  </span>

                  <span className="font-medium text-emerald-400">
                    Building scalable systems
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <RecentProject
                  title="SignalDesk"
                  type="SaaS"
                />

                <RecentProject
                  title="Aether Archive"
                  type="Immersive"
                />

                <RecentProject
                  title="Northline"
                  type="Editorial"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CapabilityCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-white/10 bg-zinc-950/50 p-4 transition hover:border-violet-500/30 hover:bg-violet-500/5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/15">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  )
}

function RecentProject({
  title,
  type,
}) {
  return (
    <a
      href="#projects"
      className="rounded-xl border border-white/10 bg-white/[0.025] p-3 transition hover:border-violet-500/30 hover:bg-violet-500/5"
    >
      <p className="truncate text-xs font-semibold text-white">
        {title}
      </p>

      <p className="mt-1 truncate text-[9px] uppercase tracking-[0.12em] text-zinc-600">
        {type}
      </p>
    </a>
  )
}

export default Hero