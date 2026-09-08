const skillGroups = [
  {
    title: 'UI/UX',
    skills: ['User interface design', 'User experience design', 'Wireframing', 'Prototyping', 'Visual hierarchy', 'Responsive design'],
  },
  {
    title: 'Web',
    skills: ['Framer', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Responsive web design'],
  },
  {
    title: 'AI & tools',
    skills: ['AI-assisted development', 'Vibe coding', 'AI productivity tools', 'CapCut'],
  },
  {
    title: 'Technical',
    skills: ['Hardware troubleshooting', 'Windows installation', 'Microsoft Office', 'Cybersecurity fundamentals'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-paper-dim dark:bg-ink-900/40">
      <div className="section-container">
        <div className="max-w-xl">
          <h2 className="heading-lg text-ink-900 dark:text-paper">What I work with</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-500 dark:text-ink-400">
            A practical toolkit across design, web, AI, and technical skills — each chosen to help turn ideas into clear, working solutions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t border-ink-200 pt-4 dark:border-ink-700">
              <h3 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
