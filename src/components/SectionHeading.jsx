import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title">{title}</h2>
      <span className="section-heading__rule" aria-hidden="true" />
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </Reveal>
  )
}
