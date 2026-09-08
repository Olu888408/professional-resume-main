function UserIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function BookOpenIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 7v14M3 4h18v16H3z" />
      <path d="M3 4l9 3 9-3" />
    </svg>
  )
}

function PuzzleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 2 12c0-.617.236-1.234.706-1.704L4.317 8.685c.23-.23.556-.338.878-.29.493.074.84.504 1.02.968a2.5 2.5 0 1 0 3.237-3.237c-.464-.18-.894-.527-.968-1.02a1.026 1.026 0 0 1 .29-.877l1.611-1.611A2.402 2.402 0 0 1 12 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.878.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.968 1.02z" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
    </svg>
  )
}

const reasons = [
  { title: 'User-focused', description: 'I care about creating interfaces that are clear, useful, and easy to navigate.', icon: 'user' },
  { title: 'Fast learner', description: 'I actively learn new tools and technologies and apply them through practical projects.', icon: 'book' },
  { title: 'Problem solver', description: 'I enjoy breaking down problems and turning ideas into practical digital solutions.', icon: 'puzzle' },
  { title: 'Adaptable', description: 'I can work across design, web, technology, and AI-assisted workflows.', icon: 'layers' },
]

function ReasonIcon({ name }) {
  if (name === 'user') return <UserIcon />
  if (name === 'book') return <BookOpenIcon />
  if (name === 'puzzle') return <PuzzleIcon />
  return <LayersIcon />
}

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="section-padding">
      <div className="section-container">
        <h2 className="heading-lg text-ink-900 dark:text-paper">What I bring to the table</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex items-start gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-ink-200 text-ink-500 dark:border-ink-700 dark:text-ink-300">
                <ReasonIcon name={reason.icon} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink-900 dark:text-paper">{reason.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
