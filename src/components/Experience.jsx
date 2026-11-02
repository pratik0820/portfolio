import { experience } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Where I've worked"
          title="Experience Timeline"
        />

        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.org} as="li" delay={i * 120} className="timeline__item">
              <span className={`timeline__dot ${job.current ? 'timeline__dot--current' : ''}`} aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__head">
                  <span className="timeline__period">{job.period} · {job.duration}</span>
                  {job.current && <span className="timeline__current">Current</span>}
                </div>
                <h3>{job.role}</h3>
                <p className="timeline__org">{job.org} · {job.location}</p>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 32)}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
