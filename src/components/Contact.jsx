import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const contactCards = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
  { label: 'GitHub', value: '@pratik0820', href: profile.github },
]

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Let's talk"
          title="Get In Touch"
          subtitle="I'm actively open to backend and software engineering opportunities. Whether it's a role, a project or a question — my inbox is always open."
        />

        <Reveal delay={100} className="contact__cta">
          <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}?subject=${encodeURIComponent('Opportunity — Backend Developer role')}`}>
            Say Hello
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="m5 12h14m0 0-5-5m5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>

        <div className="contact__grid">
          {contactCards.map((card, i) => (
            <Reveal key={card.label} delay={i * 80} className="contact__card" as="div">
              <span className="contact__label">{card.label}</span>
              {card.href.startsWith('http') ? (
                <a href={card.href} target="_blank" rel="noreferrer noopener">{card.value}</a>
              ) : (
                <a href={card.href}>{card.value}</a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
