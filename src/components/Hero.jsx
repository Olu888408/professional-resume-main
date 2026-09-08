import Reveal from './Reveal'

function DownloadIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}

function ArtboardStamp() {
  return (
    <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
      <div className="frame p-8 sm:p-10">
        <div className="flex h-32 w-32 items-center justify-center border border-ink-900 font-display text-3xl font-semibold text-ink-900 dark:border-paper dark:text-paper sm:h-36 sm:w-36">
          O.I
        </div>
        <div className="mt-6 space-y-1.5">
          <p className="meta-label">Oluwasegun Iluyomade</p>
          <p className="meta-label">UI/UX &amp; Web Design</p>
        </div>
      </div>
      {/* Ruler ticks along the right edge, like a canvas dimension marker */}
      <div className="pointer-events-none absolute -right-3 top-8 hidden flex-col gap-3 sm:flex" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-px w-2 bg-ink-300 dark:bg-ink-600" />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
      {/* Faint graph-paper backdrop, masked toward a vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            color: '#2F5FE0',
            maskImage: 'radial-gradient(ellipse 70% 55% at 50% 30%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 30%, black 20%, transparent 70%)',
          }}
        />
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 text-center lg:text-left">
            <Reveal as="p" className="meta-label">
              Abuja, Nigeria — currently open to internships and junior roles
            </Reveal>

            <Reveal as="h1" delay={80} className="mt-5 heading-xl text-ink-900 dark:text-paper">
              Hi, I'm Oluwasegun.
            </Reveal>

            <Reveal as="p" delay={140} className="mt-3 font-display text-xl font-medium text-line-600 dark:text-line-300 sm:text-2xl">
              UI/UX Designer &amp; Web Designer
            </Reveal>

            <Reveal as="p" delay={200} className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg lg:mx-0">
              I design clean, user-focused digital experiences and build modern websites using UI/UX principles, Framer, and AI-assisted web development.
            </Reveal>

            <Reveal as="div" delay={280} className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a href="#projects" onClick={(e) => scrollTo(e, '#projects')} className="btn-primary w-full sm:w-auto">
                View my work
              </a>
              <a href="/Iluyomade_Oluwasegun_Academic_CV.docx" download className="btn-secondary w-full sm:w-auto">
                <DownloadIcon />
                Download CV
              </a>
            </Reveal>

            <Reveal as="div" delay={340} className="mt-6 flex justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="link-underline"
              >
                Let's work together
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal as="div" delay={220}>
              <ArtboardStamp />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
