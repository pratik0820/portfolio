import { useEffect, useRef, useState } from 'react'

/**
 * Adds the CSS class `revealed` when the element scrolls into view.
 * Used with .reveal styles in index.css for fade-in-on-scroll effects.
 */
export function useReveal(threshold = 0.15, once = true) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If reduced motion is preferred or IntersectionObserver is missing,
    // reveal immediately so content is never hidden.
    const prefersReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'

    if (prefersReduced) {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setRevealed(false)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, revealed }
}
