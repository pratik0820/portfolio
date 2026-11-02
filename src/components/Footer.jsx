import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name} · Backend that ships.</p>
        <p className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer noopener">GitHub</a>
          <span aria-hidden="true">·</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <span aria-hidden="true">·</span>
          <a href={`${profile.resumePath}`} download="Pratik-Gole-Resume.pdf">Résumé</a>
        </p>
      </div>
    </footer>
  )
}
