import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = [...links.map((l) => l.id), 'hero']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="container navbar__inner" aria-label="Main navigation">
        <a href="#hero" className="navbar__logo" onClick={close}>
          <span className="navbar__logo-mark" aria-hidden="true">PG</span>
          <span>Pratik<span className="accent">.dev</span></span>
        </a>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="navbar__hamb" />
        </button>

        <ul id="nav-menu" className={`navbar__menu ${open ? 'navbar__menu--open' : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumePath}
              className="navbar__cta"
              download="Pratik-Gole-Resume.pdf"
              onClick={close}
            >
              R&eacute;sum&eacute;
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
