import { ArrowUp, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-white"
            >
              J<span className="text-violet-400">.</span>Patrick
            </a>

            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
              AI automation, full-stack development, CRM systems and technical
              operations built around real business needs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:j.patrickmagadia28@gmail.com"
              aria-label="Send email"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              <Mail size={19} />
            </a>

            <a
              href="https://github.com/jpatrick28"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/jpatrickmagadia/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              <FaLinkedin size={19} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="ml-1 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-violet-500/40 hover:bg-violet-500/10"
            >
              Back to top
              <ArrowUp size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center">
          <p>
            © {currentYear} J Patrick Magadia. All rights reserved.
          </p>

          <p>
            Built with React, Vite and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer