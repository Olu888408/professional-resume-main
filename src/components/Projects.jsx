import { useState, useEffect, useCallback } from 'react'

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

const projects = [
  {
    title: 'Personal professional portfolio',
    tags: ['UI/UX', 'Framer', 'Responsive'],
    description:
      'A responsive personal portfolio designed to present professional skills, projects, experience, and career goals in a clean recruiter-focused experience.',
    caseStudy: {
      overview:
        'A self-initiated portfolio project to establish a professional online presence that communicates my skills, projects, and career goals to recruiters and potential employers.',
      problem:
        'As an emerging designer, I needed a professional online presence that clearly communicates who I am, what I can do, and what I am looking for — without exaggerating my experience.',
      goals: [
        'Present a clean, recruiter-friendly overview of my skills and projects',
        'Demonstrate practical UI/UX and web design ability through the portfolio itself',
        'Make contact and CV download effortless for hiring managers',
      ],
      role: 'Sole designer and builder — responsible for research, design, content, and implementation.',
      process: [
        'Researched recruiter-friendly portfolio patterns and structures',
        'Sketched wireframes and established a clean visual hierarchy',
        'Iterated on typography, spacing, and color to achieve a premium minimal aesthetic',
        'Built and tested responsively across desktop, tablet, and mobile',
      ],
      solution:
        'A responsive portfolio with clear sections — hero, about, skills, projects, experience, and contact — using a restrained professional color system, generous whitespace, and subtle animations.',
      tools: ['Framer', 'UI/UX design', 'Responsive design', 'AI-assisted development'],
      result:
        'A polished, recruiter-ready portfolio I can confidently share with hiring managers and include on my CV.',
      learned:
        'I learned how to structure a portfolio for clarity and scannability, balance aesthetics with professionalism, and use AI-assisted tools to speed up development without sacrificing quality.',
    },
  },
  {
    title: 'Professional profile website',
    tags: ['Web design', 'Responsive', 'HTML', 'CSS'],
    description:
      'A modern professional profile experience focused on clear information architecture, responsive layouts, and strong visual presentation.',
    caseStudy: {
      overview:
        'A profile website project focused on presenting professional information with clear structure, responsive layout, and strong visual presentation.',
      problem:
        'Many personal profile sites lack clear information architecture, making it hard for visitors to quickly find relevant details.',
      goals: [
        'Build a clean, responsive profile layout',
        'Practice information architecture and visual hierarchy',
        'Ensure readability across all device sizes',
      ],
      role: 'Sole designer and developer — responsible for structure, design, and implementation.',
      process: [
        'Planned the information architecture and content sections',
        'Designed responsive layouts for mobile, tablet, and desktop',
        'Built with HTML and CSS, focusing on clean structure',
      ],
      solution:
        'A responsive profile website with a clear content structure, readable typography, and a layout that adapts smoothly across devices.',
      tools: ['HTML', 'CSS', 'Responsive design'],
      result:
        'A clean, responsive profile site that demonstrates my ability to structure and present professional information effectively.',
      learned:
        'I strengthened my understanding of responsive layouts, information architecture, and the importance of designing for different screen sizes from the start.',
    },
  },
  {
    title: 'AI-assisted web project',
    tags: ['AI', 'Web development', 'Vibe coding'],
    description:
      'A practical web project exploring AI-assisted development and modern website-building workflows.',
    caseStudy: {
      overview:
        'An exploratory project using AI-assisted development tools to build a functional web project efficiently.',
      problem:
        'I wanted to understand how AI-assisted tools can be used practically in a real web project — not just as a novelty, but as part of a productive workflow.',
      goals: [
        'Explore AI-assisted development in a practical context',
        'Build a functional web project using modern AI tools',
        'Evaluate where AI helps and where human judgment is still essential',
      ],
      role: 'Sole creator — responsible for planning, prompting, reviewing, and refining the output.',
      process: [
        'Defined the project scope and key features',
        'Used AI-assisted tools to generate and iterate on the build',
        'Reviewed and refined the output for quality and correctness',
      ],
      solution:
        'A functional web project built with AI-assisted workflows, demonstrating how modern tools can accelerate development while still requiring design judgment.',
      tools: ['AI-assisted development', 'Vibe coding', 'Web development'],
      result:
        'A working web project that shows my ability to integrate AI tools into a practical development workflow.',
      learned:
        'I learned how to effectively prompt, review, and refine AI-generated output, and where human design judgment remains essential in the process.',
    },
  },
]

function ProjectPreview({ index }) {
  return (
    <div className="relative flex h-36 items-center justify-center border-b border-ink-200 dark:border-ink-700">
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          color: '#C9CDD4',
        }}
        aria-hidden="true"
      />
      <span className="relative font-mono text-xs text-ink-400 dark:text-ink-500">
        fig. {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  )
}

function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const cs = project.caseStudy

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink-950/50 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — case study`}
    >
      <div
        className="relative my-8 w-full max-w-2xl border border-ink-200 bg-paper dark:border-ink-700 dark:bg-ink-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-ink-200 bg-paper/95 p-6 backdrop-blur dark:border-ink-700 dark:bg-ink-900/95">
          <div>
            <p className="meta-label">Case study</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink-900 dark:text-paper">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink-200 text-ink-500 transition-colors hover:border-ink-900 hover:text-ink-900 dark:border-ink-700 dark:text-ink-400 dark:hover:border-paper dark:hover:text-paper"
            aria-label="Close case study"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="space-y-7 p-6">
          <section>
            <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">Overview</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{cs.overview}</p>
          </section>

          <section>
            <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">Problem</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{cs.problem}</p>
          </section>

          <section>
            <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">Goals</h4>
            <ul className="mt-2 space-y-2">
              {cs.goals.map((g) => (
                <li key={g} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  <span className="mt-2.5 h-px w-2.5 shrink-0 bg-ink-400" />
                  {g}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">My role</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{cs.role}</p>
          </section>

          <section>
            <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">Design process</h4>
            <ol className="mt-2 space-y-2">
              {cs.process.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-line-600 dark:text-line-300">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">Solution</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{cs.solution}</p>
          </section>

          <section>
            <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">Tools used</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {cs.tools.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </section>

          <section>
            <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">Final result</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{cs.result}</p>
          </section>

          <section>
            <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-paper">What I learned</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{cs.learned}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const handleClose = useCallback(() => setActiveProject(null), [])

  return (
    <section id="projects" className="section-padding bg-paper-dim dark:bg-ink-900/40">
      <div className="section-container">
        <div className="max-w-xl">
          <h2 className="heading-lg text-ink-900 dark:text-paper">Selected work</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-500 dark:text-ink-400">
            A few projects that reflect how I approach design and web development — each focused on clarity and real-world usefulness.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article key={project.title} className="frame flex flex-col overflow-hidden">
              <ProjectPreview index={i} />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-semibold text-ink-900 dark:text-paper">{project.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="link-underline mt-5 self-start"
                >
                  View project
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && <CaseStudyModal project={activeProject} onClose={handleClose} />}
    </section>
  )
}
