import { projects } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What I've built"
          title="Featured Projects"
          subtitle="Three production systems — a payments platform, a regulatory compliance portal, and a sole-owned subscription backend running live on AWS."
        />

        <div className="projects">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i * 100}
              as="article"
              className={`project-card ${i % 2 ? 'project-card--flip' : ''}`}
            >
              <div className="project-card__body">
                <p className="project-card__badge">{project.badge}</p>
                <h3>{project.title}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>

                <ul className="project-card__metrics">
                  {project.metrics.map((m) => (
                    <li key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </li>
                  ))}
                </ul>

                <ul className="project-card__bullets">
                  {project.bullets.map((b) => (
                    <li key={b.slice(0, 32)}>{b}</li>
                  ))}
                </ul>

                <div className="project-card__stack" aria-label="Technology stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>

                <p className="project-card__footer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  {project.footer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
