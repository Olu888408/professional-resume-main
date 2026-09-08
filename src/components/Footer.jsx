function MailIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="border-t border-ink-200 dark:border-ink-700">
      <div className="section-container py-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-flex items-center gap-2.5"
              aria-label="Oluwasegun — home"
            >
              <span className="flex h-8 w-8 items-center justify-center border border-ink-900 font-display text-xs font-semibold text-ink-900 dark:border-paper dark:text-paper">
                O.I
              </span>
              <span className="font-display text-sm font-semibold tracking-tight text-ink-900 dark:text-paper">
                Oluwasegun
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-400 dark:text-ink-500">
              UI/UX designer, web designer, and Framer designer.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-ink-500 transition-colors hover:text-line-600 dark:text-ink-400 dark:hover:text-line-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="mailto:seguniluyomade224@gmail.com"
              className="flex h-9 w-9 items-center justify-center border border-ink-200 text-ink-500 transition-colors hover:border-ink-900 hover:text-ink-900 dark:border-ink-700 dark:text-ink-400 dark:hover:border-paper dark:hover:text-paper"
              aria-label="Email"
            >
              <MailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/iluyomade-segun-78b4393a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center border border-ink-200 text-ink-500 transition-colors hover:border-ink-900 hover:text-ink-900 dark:border-ink-700 dark:text-ink-400 dark:hover:border-paper dark:hover:text-paper"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-ink-100 pt-5 dark:border-ink-800">
          <p className="text-center font-mono text-xs text-ink-400 dark:text-ink-500">
            © 2026 Oluwasegun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
