import { profile, heroRoles, heroStats } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import Reveal from './Reveal'

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.13v3.16c0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Hero() {
  const typed = useTypewriter(heroRoles)

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
        <span className="hero__blob hero__blob--3" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__content">
        <Reveal>
          <p className="hero__availability">
            <span className="hero__pulse" aria-hidden="true" />
            Open to Backend / Software Engineering roles
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="hero__name">
            Hi, I&apos;m <span className="hero__name-gradient">{profile.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="hero__role" aria-live="off">
            {typed}
            <span className="hero__cursor" aria-hidden="true">|</span>
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="hero__tagline">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={400}>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">View My Work</a>
            <a
              href={profile.resumePath}
              className="btn btn--outline"
              download="Pratik-Gole-Resume.pdf"
            >
              Download R&eacute;sum&eacute;
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="hero__socials">
            <a href={profile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub profile">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile">
              <LinkedinIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send email">
              <MailIcon />
            </a>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <dl className="hero__stats">
            {heroStats.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span aria-hidden="true">&#8595;</span>
      </a>
    </section>
  )
}
