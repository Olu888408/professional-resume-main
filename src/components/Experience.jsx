function WrenchIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
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

function GraduationIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

const experiences = [
  {
    title: 'IT / computer technology experience',
    type: 'Practical experience',
    icon: 'it',
    points: [
      'Windows installation and configuration',
      'Microsoft Office installation',
      'Antivirus installation',
      'Basic computer hardware troubleshooting',
      'RAM and storage replacement',
      'Computer maintenance',
      'Software installation and configuration',
    ],
  },
  {
    title: 'Independent UI/UX & web design practice',
    type: 'Independent projects',
    icon: 'design',
    points: [
      'UI design practice',
      'Responsive web design',
      'Framer projects',
      'Portfolio development',
      'AI-assisted website development',
      'Digital product exploration',
    ],
  },
]

const education = [
  {
    institution: 'Veritas University, Abuja',
    degree: 'B.Sc. Computer Science',
    detail: 'Second Class | CGPA: 2.80/5.00',
    icon: 'graduation',
  },
  {
    institution: 'Government Science Secondary School, Pyakasa, Maitama',
    degree: 'Senior Secondary School Certificate (SSCE)',
    detail: 'Secondary education',
    icon: 'book',
  },
]

function ExpIcon({ name }) {
  if (name === 'it') return <WrenchIcon />
  if (name === 'design') return <PaletteIcon />
  if (name === 'graduation') return <GraduationIcon />
  return <BookIcon />
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <h2 className="heading-lg text-ink-900 dark:text-paper">My background</h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-500 dark:text-ink-400">
          Practical experience and education that have shaped my approach to design, web, and technology.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {experiences.map((exp) => (
            <div key={exp.title} className="frame p-6">
              <div className="flex items-center gap-3">
                <span className="text-line-600 dark:text-line-300">
                  <ExpIcon name={exp.icon} />
                </span>
                <div>
                  <p className="meta-label">{exp.type}</p>
                  <h3 className="font-display text-base font-semibold text-ink-900 dark:text-paper">{exp.title}</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    <span className="mt-2.5 h-px w-2.5 shrink-0 bg-ink-400 dark:bg-ink-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">Education</h3>
          <div className="mt-4 border-t border-ink-200 dark:border-ink-700">
            {education.map((edu) => (
              <div key={edu.institution} className="row-item">
                <span className="mt-0.5 text-ink-400">
                  <ExpIcon name={edu.icon} />
                </span>
                <div>
                  <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">{edu.institution}</h4>
                  <p className="mt-0.5 text-sm text-ink-600 dark:text-ink-300">{edu.degree}</p>
                  <p className="mt-0.5 text-sm text-ink-400 dark:text-ink-500">{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
