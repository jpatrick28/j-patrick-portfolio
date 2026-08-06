import { useMemo, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ExternalLink,
  LockKeyhole,
  Search,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects'

const priorityProjects = [
  'SignalDesk',
  'Aether Archive',
  'Northline Journal',
  'Son of Wisdom AI Coaching System',
]

const categoryLabels = {
  'Customer Support Intelligence Dashboard':
    'SaaS Dashboard',
  'Immersive Digital Exhibition':
    'Immersive Experience',
  'Editorial Publication and Reading Experience':
    'Editorial Platform',
}

function Projects() {
  const [query, setQuery] = useState('')
  const [visibleCount, setVisibleCount] =
    useState(6)

  const orderedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const aPriority =
        priorityProjects.indexOf(a.title)

      const bPriority =
        priorityProjects.indexOf(b.title)

      const safeA =
        aPriority === -1
          ? Number.MAX_SAFE_INTEGER
          : aPriority

      const safeB =
        bPriority === -1
          ? Number.MAX_SAFE_INTEGER
          : bPriority

      if (safeA !== safeB) {
        return safeA - safeB
      }

      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1
      }

      return (
        Number(b.id || 0) -
        Number(a.id || 0)
      )
    })
  }, [])

  const filteredProjects = useMemo(() => {
    const normalizedQuery =
      query.trim().toLowerCase()

    if (!normalizedQuery) {
      return orderedProjects
    }

    return orderedProjects.filter(
      (project) => {
        const searchableText = [
          project.title,
          project.category,
          project.description,
          ...(project.highlights || []),
          ...(project.technologies || []),
        ]
          .join(' ')
          .toLowerCase()

        return searchableText.includes(
          normalizedQuery,
        )
      },
    )
  }, [orderedProjects, query])

  const visibleProjects =
    filteredProjects.slice(0, visibleCount)

  function handleQueryChange(event) {
    setQuery(event.target.value)
    setVisibleCount(6)
  }

  function clearSearch() {
    setQuery('')
    setVisibleCount(6)
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

        <div className="absolute bottom-[-8rem] right-[-6rem] h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              <BriefcaseBusiness size={16} />
              Selected Projects
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Systems I have designed,
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                built and connected.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-zinc-400">
            Live websites, AI products,
            dashboards, automation systems
            and platform integrations built
            around practical business and
            user needs.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-y border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex min-h-[46px] w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 sm:max-w-md">
            <Search
              size={16}
              className="shrink-0 text-zinc-600"
            />

            <input
              type="search"
              value={query}
              onChange={handleQueryChange}
              placeholder="Search projects or technologies"
              aria-label="Search projects"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-700"
            />
          </label>

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
            {filteredProjects.length}{' '}
            {filteredProjects.length === 1
              ? 'project'
              : 'projects'}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map(
            (project, index) => (
              <ProjectCard
                key={
                  project.id ||
                  project.title
                }
                project={project}
                index={index}
              />
            ),
          )}
        </div>

        {visibleProjects.length === 0 && (
          <div className="mt-10 flex min-h-[320px] items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6">
            <div className="text-center">
              <Search
                size={28}
                className="mx-auto text-zinc-700"
              />

              <h3 className="mt-5 text-2xl font-semibold text-white">
                No projects found
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Try another project name,
                service or technology.
              </p>

              <button
                type="button"
                onClick={clearSearch}
                className="mt-6 rounded-xl border border-violet-500/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/15"
              >
                Clear search
              </button>
            </div>
          </div>
        )}

        {visibleProjects.length <
          filteredProjects.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount(
                  (current) => current + 4,
                )
              }
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-violet-500/40 hover:bg-violet-500/10"
            >
              View more projects
              <ArrowRight size={17} />
            </button>
          </div>
        )}

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center lg:p-9">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Explore more technical work
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
              Visit my GitHub profile for
              repositories, experiments and
              ongoing development work across
              React, automation and AI systems.
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

function ProjectCard({
  project,
  index,
}) {
  const category =
    categoryLabels[project.category] ||
    project.category

  const isPriority =
    priorityProjects.includes(
      project.title,
    )

  const highlights =
    project.highlights || []

  const technologies =
    project.technologies || []

  return (
    <article
      className={`group relative flex min-h-[500px] flex-col overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 lg:p-8 ${
        isPriority || project.featured
          ? 'border-violet-500/25 bg-gradient-to-br from-violet-500/[0.09] via-white/[0.03] to-blue-500/[0.05]'
          : 'border-white/10 bg-white/[0.03] hover:border-violet-500/30'
      }`}
    >
      <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-44 w-44 rounded-full bg-violet-500/10 blur-[80px] transition group-hover:bg-violet-500/20" />

      <div className="relative flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">
            Project{' '}
            {String(index + 1).padStart(
              2,
              '0',
            )}
          </p>

          <span className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
            {category}
          </span>
        </div>

        <StatusBadge
          status={project.status}
        />
      </div>

      <div className="relative mt-7">
        <h3 className="max-w-lg text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
          {project.description}
        </p>
      </div>

      {highlights.length > 0 && (
        <div className="relative mt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
            Key work
          </p>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {highlights
              .slice(0, 4)
              .map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                >
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                    <Check
                      size={11}
                      strokeWidth={3}
                    />
                  </span>

                  <span>{highlight}</span>
                </li>
              ))}
          </ul>
        </div>
      )}

      {technologies.length > 0 && (
        <div className="relative mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
            Technologies
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {technologies
              .slice(0, 7)
              .map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/10 bg-zinc-950/50 px-3 py-1.5 text-xs font-medium text-zinc-400"
                >
                  {technology}
                </span>
              ))}
          </div>
        </div>
      )}

      <div className="relative mt-auto flex flex-wrap items-center gap-4 pt-9">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            View live project
            <ExternalLink size={16} />
          </a>
        ) : (
          <div className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-400">
            <LockKeyhole size={16} />
            Private system
          </div>
        )}

        {project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-violet-300"
          >
            <FaGithub size={17} />
            Source code
            <ArrowUpRight size={15} />
          </a>
        )}

        {!project.repositoryUrl &&
          !project.liveUrl && (
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-violet-300"
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
  const isLive = [
    'Live',
    'Production',
    'Active',
  ].includes(status)

  return (
    <span
      className={`relative shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold ${
        isLive
          ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
          : 'border-white/10 bg-white/5 text-zinc-400'
      }`}
    >
      {status || 'Project'}
    </span>
  )
}

export default Projects