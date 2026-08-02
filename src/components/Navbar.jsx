import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight text-white"
        >
          J<span className="text-violet-400">.</span>Patrick
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
            className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-violet-500/50 hover:bg-violet-500/10 sm:flex"
          >
            <Download size={16} />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:border-violet-500/40 hover:text-white md:hidden"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-zinc-950 px-6 pb-6 pt-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 text-base font-medium text-zinc-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/J-Patrick-Magadia-Resume.pdf"
              download="J-Patrick-Magadia-Resume.pdf"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              <Download size={17} />
              Download Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar