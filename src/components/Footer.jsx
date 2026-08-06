import { ArrowUp, Mail } from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  function scrollToTop() {
    document
      .getElementById('top')
      ?.scrollIntoView({
        behavior: 'smooth',
      })
  }

  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-left text-lg font-bold tracking-tight text-white"
            >
              J
              <span className="text-violet-400">
                .
              </span>
              Patrick
            </button>

            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
              AI automation, full-stack development,
              CRM systems and technical operations
              built around real business needs,
              reliable workflows and scalable
              implementation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <FooterLink
              href="mailto:j.patrickmagadia28@gmail.com"
              label="Send email"
              icon={<Mail size={19} />}
            />

            <FooterLink
              href="https://github.com/jpatrick28"
              label="Open GitHub profile"
              icon={<FaGithub size={19} />}
              external
            />

            <FooterLink
              href="https://www.linkedin.com/in/jpatrickmagadia/"
              label="Open LinkedIn profile"
              icon={<FaLinkedin size={19} />}
              external
            />

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-1 inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-violet-500/40 hover:bg-violet-500/10"
            >
              Back to top
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center">
          <p>
            © {currentYear} J Patrick Magadia. All
            rights reserved.
          </p>

          <p>
            Built with React, Vite, Tailwind CSS and
            deployed through Cloudflare Pages.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  label,
  icon,
  external = false,
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
    >
      {icon}
    </a>
  )
}

export default Footer