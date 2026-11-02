import { useEffect, useState } from 'react'

/**
 * Simple typewriter effect cycling through a list of strings.
 * Returns the currently displayed partial string.
 */
export function useTypewriter(strings, typeMs = 65, holdMs = 1800, deleteMs = 30) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // No animation for reduced-motion users — show the full phrase.
      setText(strings[index])
      return
    }

    const current = strings[index % strings.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % strings.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
        },
        deleting ? deleteMs : typeMs
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, strings, typeMs, holdMs, deleteMs])

  return text
}
