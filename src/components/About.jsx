function MonitorIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="1" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

function PaletteIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="10.5" r="2.5" />
      <circle cx="8" cy="7" r="2.5" />
      <circle cx="6.5" cy="12.5" r="2.5" />
      <path d="M12 22a10 10 0 1 1 10-10c0 3-2.5 4-4.5 4H15a2 2 0 0 0-1.6 3.2c.3.4.4.9.1 1.3A2 2 0 0 1 12 22Z" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l1.9 5.8L19.5 10l-5.6 1.2L12 17l-1.9-5.8L4.5 10l5.6-1.2L12 3z" />
      <path d="M19 14l.8 2.2 2.2.8-2.2.8L19 20l-.8-2.2-2.2-.8 2.2-.8L19 14z" />
    </svg>
  )
}

const focusAreas = [
  { label: 'Computer Science', icon: 'cs', description: 'B.Sc. student building a strong technical foundation.' },
  { label: 'UI/UX & Web Design', icon: 'design', description: 'Creating clean, user-focused digital experiences.' },
  { label: 'AI-Assisted Development', icon: 'ai', description: 'Leveraging modern AI tools to build faster.' },
]

function FocusIcon({ name }) {
  if (name === 'cs') return <MonitorIcon />
  if (name === 'design') return <PaletteIcon />
  return <SparklesIcon />
}

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="heading-lg text-ink-900 dark:text-paper">Who I am</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
              <p>
                I'm a Computer Science student and aspiring UI/UX and Web Designer passionate about creating digital experiences that are simple, useful, and visually engaging.
              </p>
              <p>
                I combine design thinking with modern web technologies to turn ideas into functional digital products. I'm currently developing my skills in UI/UX design, Framer, responsive web design, and AI-assisted development.
              </p>
              <p>
                I'm particularly interested in opportunities where I can learn, contribute, solve real problems, and grow as a digital product designer.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-t border-ink-200 dark:border-ink-700">
              {focusAreas.map((area) => (
                <div key={area.label} className="row-item">
                  <span className="mt-0.5 text-ink-400 dark:text-ink-400">
                    <FocusIcon name={area.icon} />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">{area.label}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
