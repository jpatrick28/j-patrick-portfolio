import { useEffect, useState } from 'react'
import {
  Download,
  Menu,
  X,
} from 'lucide-react'

const navLinks = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Process',
    href: '#process',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

function Navbar() {
  const [
    isMenuOpen,
    setIsMenuOpen,
  ] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const previousOverflow =
      document.body.style.overflow

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'

    window.addEventListener(
      'keydown',
      handleEscape,
    )

    return () => {
      document.body.style.overflow =
        previousOverflow

      window.removeEventListener(
        'keydown',
        handleEscape,
      )
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/85 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        <a
          href="#top"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight text-white"
        >
          J
          <span className="text-violet-400">
            .
          </span>
          Patrick
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/J-Patrick-Magadia-Resume.pdf"
            download="J-Patrick-Magadia-Resume.pdf"
            className="hidden min-h-[40px] items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-medium text-white transition hover:border-violet-500/50 hover:bg-violet-500/10 sm:flex"
          >
            <Download size={16} />
            Résumé
          </a>

          <button
            type="button"
            onClick={() =>
              setIsMenuOpen(
                (current) => !current,
              )
            }
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition hover:border-violet-500/40 hover:text-white md:hidden"
          >
            {isMenuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-zinc-950 px-6 pb-7 pt-3 md:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col"
          >
            {navLinks.map(
              (link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-white/10 py-4 text-base font-medium text-zinc-300 transition hover:text-white"
                >
                  <span>
                    {link.label}
                  </span>

                  <span className="text-[10px] font-semibold tracking-[0.16em] text-zinc-700 transition group-hover:text-violet-400">
                    {String(
                      index + 1,
                    ).padStart(2, '0')}
                  </span>
                </a>
              ),
            )}

            <a
              href="/J-Patrick-Magadia-Resume.pdf"
              download="J-Patrick-Magadia-Resume.pdf"
              onClick={closeMenu}
              className="mt-5 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              <Download size={17} />
              Download Résumé
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar