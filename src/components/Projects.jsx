import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ExternalLink,
  LockKeyhole,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              <BriefcaseBusiness size={16} />
              Selected Projects
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Systems I have designed,
              <span className="block text-violet-400">
                built and connected.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-zinc-400">
            These projects represent practical work across AI, automation,
            CRM systems, dashboards, integrations and web development. Some
            systems are private because they support internal company
            operations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center lg:p-9">
          <div>
            <h3 className="text-xl font-semibold text-white">
              More projects are being added.
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
              This portfolio will continue expanding with standalone
              websites, full-stack applications, automation tools and public
              demonstrations.
            </p>
          </div>

          <a
            href="https://github.com/jpatrick28"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-500/40 hover:bg-violet-500/10"
          >
            <FaGithub size={18} />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article
      className={`group relative flex min-h-[500px] flex-col overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 lg:p-8 ${
        project.featured
          ? 'border-violet-500/25 bg-gradient-to-br from-violet-500/[0.09] via-white/[0.03] to-blue-500/[0.04]'
          : 'border-white/10 bg-white/[0.03] hover:border-violet-500/30'
      }`}
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-[80px]" />

      <div className="relative flex items-start justify-between gap-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-400">
            {project.category}
          </p>

          <h3 className="mt-4 max-w-lg text-2xl font-semibold leading-tight text-white">
            {project.title}
          </h3>
        </div>

        <StatusBadge status={project.status} />
      </div>

      <p className="relative mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
        {project.description}
      </p>

      <div className="relative mt-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Key work
        </p>

        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
            >
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                <Check size={11} strokeWidth={3} />
              </span>

              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Technologies
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-zinc-950/50 px-3 py-1.5 text-xs font-medium text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-auto flex flex-wrap items-center gap-4 pt-9">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            View live project
            <ExternalLink size={16} />
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-400">
            <LockKeyhole size={16} />
            Private system
          </div>
        )}

        {project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-violet-300"
          >
            <FaGithub size={17} />
            Source code
            <ArrowUpRight size={15} />
          </a>
        )}

        {!project.repositoryUrl && !project.liveUrl && (
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-violet-300"
          >
            Discuss this project
            <ArrowRight size={16} />
          </a>
        )}
      </div>
    </article>
  )
}

function StatusBadge({ status }) {
  const isLive = status === 'Live' || status === 'Production' || status === 'Active'

  return (
    <span
      className={`relative shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold ${
        isLive
          ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
          : 'border-white/10 bg-white/5 text-zinc-400'
      }`}
    >
      {status}
    </span>
  )
}

export default Projects