import { profile, about } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="Who I am" title="About Me" />

        <div className="about__grid">
          <Reveal className="about__text">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={150} className="about__card" as="div">
            <h3>Why hire me?</h3>
            <ul>
              {about.highlights.map((h) => (
                <li key={h}>
                  <span className="accent" aria-hidden="true">&#9670;</span> {h}
                </li>
              ))}
            </ul>
            <div className="about__meta">
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
