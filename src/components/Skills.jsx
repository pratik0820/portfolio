import { skillCategories, coreStack } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="What I work with"
          title="Technical Skills"
          subtitle="The stack behind three production platforms — from cards and compliance to a live subscription SaaS."
        />

        <Reveal className="core-stack">
          {coreStack.map((s) => (
            <div key={s.name} className="core-stack__item">
              <div className="core-stack__labels">
                <span>{s.name}</span>
                <span className="accent">{s.level}%</span>
              </div>
              <div
                className="core-stack__bar"
                role="img"
                aria-label={`${s.name}: ${s.level} percent`}
              >
                <span style={{ '--level': `${s.level}%` }} />
              </div>
            </div>
          ))}
        </Reveal>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 4) * 80} className={`skill-card skill-card--${cat.gradient}`}>
              <h3>{cat.title}</h3>
              <ul className="skill-card__chips">
                {cat.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
