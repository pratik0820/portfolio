import { education } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Credentials"
          title="Education & Certifications"
        />

        <div className="education__grid">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="education__card">
              <span className="education__period">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="education__org">{item.org}</p>
              <p className="education__detail">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
