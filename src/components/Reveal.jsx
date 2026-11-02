import { useReveal } from '../hooks/useReveal'

/**
 * Wrapper that applies a staggered fade-in-on-scroll to its children.
 * delay: milliseconds, staggered via CSS transition-delay inline style.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const { ref, revealed } = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${revealed ? 'revealed' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
