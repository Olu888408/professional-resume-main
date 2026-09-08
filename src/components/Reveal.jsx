import { useInView } from '../hooks/useInView'

// Used only for the hero's single orchestrated entrance sequence —
// not applied to every section on scroll.
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, ...props }) {
  const [ref, inView] = useInView()
  const base = 'opacity-0'
  const visible = 'animate-fade-in'
  const style = { animationDelay: `${delay}ms` }

  return (
    <Tag
      ref={ref}
      className={`${base} ${inView ? visible : ''} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  )
}
