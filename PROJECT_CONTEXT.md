# PROJECT_CONTEXT.md — Pratik Gole Portfolio (keep this updated for any AI / dev resuming work)

> **Purpose:** single file recording the full project context, what is implemented, and what remains.
> If a future AI or developer picks this up: read this file top-to-bottom, do NOT re-extract resume data,
> and update the "Implemented" and "Remaining" tables after every change.

---

## 1. Project context

| Field | Value |
|---|---|
| Owner | Pratik Purushottam Gole — Java Backend Developer, Pune, India |
| Goal | Single-page recruiter-facing portfolio showcasing production fintech backend work |
| Stack | **React 19 + Vite 6, plain CSS, no CSS framework** (user explicitly chose "React + Vite" when asked) |
| Location in workspace | `portfolio/` (sits inside the broader productivity workspace root, alongside job-application files) |
| Hosting target | GitHub Pages, default URL `https://pratik0820.github.io/portfolio/` (no custom domain) |
| Data source | **`Pratik-Gole-Backend-Developer.pdf` ONLY** (owner's explicit instruction). Its text layer was decoded programmatically (ASCII85 + Flate) because the PDF is compressed — do NOT use the `.html` drafts in `resumes/` (they are different variants with different numbers/links). |
| Resume PDF for download | `portfolio/public/Pratik-Gole-Backend-Developer.pdf` (copied from workspace root) |

### Canonical contact / links used on the site
- Email: golepratik8@gmail.com
- Phone: +91 70576 63067
- LinkedIn: https://www.linkedin.com/in/golepratik8 *(resolved — this is what the owner-chosen PDF itself says)*
- GitHub: https://github.com/pratik0820

### Key content decisions (post PDF-only re-alignment)
- **3 featured projects** (per requirements, all named in the PDF): 1) NPCI RuPay Corporate Card Portal, 2) Merchant Compliance & Risk Management Portal, 3) ElJunto Book Club subscription SaaS. All are *proprietary production systems*, so cards show a lock icon + "details on request" instead of fake repo links.
- Experience timeline has **1 entry** (the PDF has no internship listing): Java Backend Developer @ **Prysoms Systems** (per PDF wording, NOT "Prysoms Solutions"), Jan 2024 → present, "2.5+ years" (PDF wording, not "3 years"). The IT Shaala full-stack course stays in Education as a *certification*, as the PDF lists it.
- Skills = the PDF's exact 5 groups (Languages & Frameworks / Architecture & Messaging / Database & Cloud / Tools & Workflow / AI-Assisted with Cursor, Kiro, Codex, Claude) + generic core-stack bars.
- Hero stats from PDF facts only: 2.5+ yrs · 3 production platforms · 5 microservices (Kafka) · 10x faster search on 12 lakh+ records.

---

## 2. File map

```
portfolio/
├── index.html                      # SEO meta + Open Graph + JSON-LD + Google Fonts (Inter, Space Grotesk)
├── package.json                    # react 19, react-dom 19, vite 6, @vitejs/plugin-react
├── vite.config.js                  # base: '/portfolio/'  ← change if repo name ≠ "portfolio"
├── .gitignore                      # node_modules, dist
├── DEPLOYMENT.md                   # step-by-step GitHub Pages instructions
├── .github/workflows/deploy.yml    # Pages deploy on push to main (build => upload => deploy)
├── public/
│   ├── Pratik-Gole-Backend-Developer.pdf   # downloadable resume
│   └── favicon.svg                 # "PG" monogram gradient favicon
└── src/
    ├── main.jsx                    # React root
    ├── App.jsx                     # section order: Navbar→Hero→About→Skills→Projects→Experience→Education→Contact→Footer
    ├── index.css                   # ALL styling: tokens in :root, reveal/btn/blobs/timeline classes, 3 breakpoints (640/900/1000), prefers-reduced-motion
    ├── data/portfolio.js           # SINGLE SOURCE OF TRUTH for all copy (profile, stats, about, skills, projects, experience, education)
    ├── hooks/useReveal.js          # IntersectionObserver fade-in-on-scroll (falls back to visible when reduced-motion / no IO)
    ├── hooks/useTypewriter.js      # rotating role typewriter in Hero (reduced-motion aware)
    └── components/
        ├── Reveal.jsx              # wrapper that applies .reveal + optional stagger delay
        ├── SectionHeading.jsx      # eyebrow/title/rule/subtitle pattern
        ├── Navbar.jsx              # fixed, blur-on-scroll, mobile hamburger, active-section highlight via IO
        ├── Hero.jsx                # availability pill, gradient name, typewriter, CTAs incl. resume download, socials, stats, floating gradient blobs + grid mask
        ├── About.jsx               # 3 summary paragraphs + "Why hire me?" highlights card
        ├── Skills.jsx              # 5 core-stack animated bars + 8 category cards with skill chips
        ├── Projects.jsx            # 3 big cards: badge, metric grid, bullets, stack chips, lock footer
        ├── Experience.jsx          # vertical gradient timeline, pulsing "Current" dot
        ├── Education.jsx           # B.Sc. CGPA 8.26 (SPPU 2023), IBM AI Fundamentals 2026, IT Shaala course
        ├── Contact.jsx             # "Say Hello" mailto CTA + email/phone/LinkedIn/GitHub cards
        └── Footer.jsx              # copyright + links + resume
```

---

## 3. Implemented (all verified with `npm run build` — 43 modules, exit 0)

| # | Module | Status |
|---|---|---|
| 1 | Resume data extraction (backend + fullstack HTML resumes, D-drive scan) | done |
| 2 | Vite + React 19 project scaffold in `portfolio/` | done |
| 3 | Resume PDF copied to `public/` and wired to download buttons (Navbar, Hero, Contact CTA, Footer) | done |
| 4 | All sections/components (Hero, About, Skills, Projects, Experience, Education, Contact, Footer, Navbar) | done |
| 5 | Dark theme + cyan/violet/pink accent system, gradient headings, floating blobs, grid mask | done |
| 6 | Animations: reveal-on-scroll, typewriter, pulse dots, animated gradient bars/buttons, hover lifts, bob scroll cue | done |
| 7 | Mobile-first responsive (2-col stats at 640px, hamburger→desktop nav at 900px, 4-col metrics at 640px) | done |
| 8 | Accessibility: semibold contrast palette, `:focus-visible`, aria-labels, `prefers-reduced-motion` fallbacks (content always visible) | done |
| 9 | SEO: title/description/keywords/author/theme-color, OG + Twitter tags, JSON-LD Person schema, svg favicon | done |
| 10 | GitHub Actions Pages workflow + DEPLOYMENT.md | done |
| 11 | Production build passes: `npm run build` → 245.4 kB JS (76.5 kB gzip), 18.6 kB CSS (4.5 kB gzip) | done |
| 12 | **Content re-aligned to `Pratik-Gole-Backend-Developer.pdf` only** (per owner): LinkedIn → golepratik8, "2.5+ years" wording, Prysoms Systems, single experience entry, PDF skill groups, PDF-derived hero stats & project metrics; stale content from the `.html` resume drafts removed; meta/OG/JSON-LD updated; rebuild verified | done |

## 4. Remaining / optional polish (in priority order)

| # | Task | Notes |
|---|---|---|
| 1 | **Owner actions (cannot be encoded here):** create GitHub repo `portfolio` under user `pratik0820`, push this folder, enable Pages w/ "GitHub Actions" source — see DEPLOYMENT.md | blocking go-live |
| 2 | ~~VERIFY LinkedIn URL~~ **resolved**: PDF itself says `linkedin.com/in/golepratik8` — already applied everywhere | done |
| 3 | Generate a real `og-image.png` (1200×630) and replace the favicon-as-og:image hack in `index.html` | better link previews |
| 4 | Optional: profile photo → replace the name-only hero; drop the file into `public/` and add an `<img>` in Hero.jsx | owner decision |
| 5 | Optional: screenshots/gallery inside project cards if owner gets permission to share UI images | — |
| 6 | Optional: Lighthouse pass post-deploy; consider `vite-plugin-compression` if Pages serves uncompressed assets | build is already fast |

## 5. How to resume working here

```bash
cd portfolio
npm install        # first time only
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production check — MUST exit 0 after any change
npm run preview    # serve the dist/ build locally to sanity-check paths
```

**Golden rules for any future editor:**
1. All copy lives in `src/data/portfolio.js` — never hard-code content inside components.
2. Visual system lives in `src/index.css` (`:root` custom properties); accent names: `cyan | violet | pink`.
3. If the GitHub repo name is not `portfolio`, update `base` in `vite.config.js` AND the absolute URLs in `index.html` (`og:url`, `og:image`, favicon href, JSON-LD url) AND `resumePath` in `src/data/portfolio.js`.
4. Resume PDF lives at `public/Pratik-Gole-Backend-Developer.pdf` and is referenced via `/portfolio/Pratik-Gole-Backend-Developer.pdf`.
5. After every change: `npm run build` must pass, then update §3/§4 of this file.
