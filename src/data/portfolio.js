// Central content file — single source of truth for all site copy.
// DATA SOURCE: "Pratik-Gole-Backend-Developer.pdf" ONLY (owner's instruction).
// Content below was extracted verbatim/near-verbatim from that PDF's text layer.
// Do not pull copy from the .html resumes in /resumes — they are different drafts.

export const profile = {
  name: 'Pratik Gole',
  title: 'Java Backend Developer',
  tagline: 'Backend developer for fintech, payments and subscription platforms — owning systems from design through to AWS deployment.',
  location: 'Pune, India',
  email: 'golepratik8@gmail.com',
  phone: '+91 70576 63067',
  linkedin: 'https://www.linkedin.com/in/golepratik8',
  github: 'https://github.com/pratik0820',
  resumePath: '/portfolio/Pratik-Gole-Backend-Developer.pdf',
}

export const heroRoles = [
  'Java Backend Developer',
  'Spring Boot Microservices Developer',
  'Event-Driven Systems — Kafka & Redis',
  'Production SaaS Owner on AWS',
]

export const heroStats = [
  { value: '2.5+', label: 'Years building fintech backends' },
  { value: '3', label: 'Production platforms owned' },
  { value: '5', label: 'Microservices on the card platform' },
  { value: '10x', label: 'Faster search on 12 lakh+ records' },
]

export const about = {
  paragraphs: [
    "I'm a Java backend developer with 2.5+ years building secure, scalable Spring Boot microservices for fintech, payments and subscription platforms. I've built event-driven pipelines with Kafka and Redis for a corporate card platform, a compliance and risk portal with a configurable rule engine, and sole-owned a production subscription backend on AWS.",
    'My core strengths are REST API design, API security (JWT, TOTP two-factor authentication), multi-tenant systems and multithreading — backed by PostgreSQL and MySQL on AWS (EC2, S3, RDS, Secrets Manager, SES). I own backend modules end to end: from design and development to production deployment.',
    'I keep quality non-negotiable: automated testing with JUnit 5 and Mockito, SonarQube gates enforcing 80%+ coverage, and releases shipped through GitLab CI/CD. I also automate the paperwork developers hate — MIS reports in Excel, PDF and CSV, and zero-downtime database upgrades.',
  ],
  highlights: [
    '3 production platforms: payments, regulatory technology, subscriptions',
    '10x faster book search on a 12 lakh+ record catalog',
    'SonarQube gates enforcing 80%+ coverage',
    'Owns modules end to end — design to AWS deployment',
  ],
}

export const skillCategories = [
  {
    title: 'Languages & Frameworks',
    gradient: 'cyan',
    skills: ['Java 8/17', 'SQL', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate'],
  },
  {
    title: 'Architecture & Messaging',
    gradient: 'violet',
    skills: ['Microservices', 'REST APIs', 'Multi-Tenant Systems', 'Multithreading', 'Apache Kafka', 'Redis', 'WebSocket', 'JWT'],
  },
  {
    title: 'Database & Cloud',
    gradient: 'pink',
    skills: ['PostgreSQL', 'MySQL', 'AWS EC2', 'S3', 'RDS', 'IAM', 'Secrets Manager', 'SES'],
  },
  {
    title: 'Tools & Workflow',
    gradient: 'cyan',
    skills: ['GitLab CI/CD', 'Docker', 'Maven', 'Nginx', 'JUnit 5', 'Mockito', 'SonarQube', 'Postman'],
  },
  {
    title: 'AI-Assisted Development',
    gradient: 'violet',
    skills: ['Cursor', 'Kiro', 'Codex', 'Claude'],
  },
]

export const coreStack = [
  { name: 'Java 8/17 & Spring Boot', level: 92 },
  { name: 'Apache Kafka & Redis Pipelines', level: 88 },
  { name: 'API Security (JWT / TOTP 2FA)', level: 90 },
  { name: 'PostgreSQL & MySQL', level: 88 },
  { name: 'AWS (EC2 · S3 · RDS)', level: 85 },
]

export const projects = [
  {
    id: 'npci-rupay',
    badge: 'Fintech · Payments',
    title: 'NPCI RuPay Corporate Card Portal',
    subtitle: 'Microservices platform for the corporate card lifecycle',
    stack: ['Java 17', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL'],
    metrics: [
      { value: '5', label: 'services in the platform' },
      { value: '4', label: 'Kafka pipeline flows' },
      { value: 'Redis', label: 'live counters + failover' },
      { value: 'PGP', label: 'secure file exchange' },
    ],
    bullets: [
      'Built backend modules for issuer onboarding, BIN management, card issuance and corporate employee mapping across the orchestration, admin, issuer, notification and scheduler services.',
      'Implemented Kafka event pipelines for bulk card processing, transactions, report generation and audit trails, plus Redis-backed live counters with health-check failover.',
      'Developed multithreaded asynchronous schedulers (CompletableFuture, thread pools) for card-status synchronisation and transaction ingestion, and a PGP utility for secure cardholder file exchange.',
    ],
    footer: 'Production payment platform · details on request',
  },
  {
    id: 'merchant-compliance',
    badge: 'Fintech · RegTech',
    title: 'Merchant Compliance & Risk Management Portal',
    subtitle: 'Transaction monitoring with a configurable rule engine',
    stack: ['Java 8/17', 'Spring Boot', 'Spring Security', 'MySQL', 'AWS EC2/S3', 'Apache POI', 'Jasypt'],
    metrics: [
      { value: '3', label: 'report formats (Excel/PDF/CSV)' },
      { value: '2FA', label: 'TOTP two-factor auth' },
      { value: 'RBAC', label: 'role-based access control' },
      { value: '0', label: 'downtime DDL upgrades' },
    ],
    bullets: [
      'Developed the transaction-monitoring backend, including a configurable rule engine that generates compliance alerts and routes flagged transactions through review and case-management workflows.',
      "Implemented role-based access control, JWT with refresh-token rotation and TOTP two-factor authentication; encrypted sensitive configuration with Jasypt.",
      'Automated regulatory MIS reporting in Excel, PDF and CSV (Apache POI) with scheduled emails; delivered schema-migration scripts for zero-downtime upgrades.',
    ],
    footer: 'Production compliance system · details on request',
  },
  {
    id: 'eljunto',
    badge: 'SaaS · Sole Backend Developer',
    title: 'ElJunto Book Club — Subscription SaaS Platform',
    subtitle: 'Live subscription platform owned end to end on AWS',
    stack: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'AWS', 'Elasticsearch', 'WebSocket', 'Firebase'],
    metrics: [
      { value: '2', label: 'app stores verified (iOS + Android)' },
      { value: '10x', label: 'faster full-text search' },
      { value: '5', label: 'AWS services integrated' },
      { value: 'Live', label: 'production SaaS' },
    ],
    bullets: [
      'Implemented Apple App Store and Google Play subscription verification with server-side receipt validation, lifecycle state management and billing webhooks that keep user entitlements in sync.',
      'Integrated AWS Secrets Manager, S3, SES, Elasticsearch full-text search, WebSocket real-time features and Firebase push notifications; deployed on EC2 with PostgreSQL on RDS via GitLab CI/CD.',
    ],
    footer: 'Live in production · sole backend developer',
  },
]

export const experience = [
  {
    role: 'Java Backend Developer',
    org: 'Prysoms Systems',
    location: 'Pune, India',
    period: 'Jan 2024 — Present',
    duration: '2.5+ years',
    current: true,
    bullets: [
      'Own backend delivery across 3 production platforms in payments, regulatory technology and subscriptions, taking features from design through to AWS deployment.',
      'Cut book search time from 1–2 seconds to 100–200 ms (about 10x faster) on a catalog of 12 lakh+ records by introducing Elasticsearch full-text search on the ElJunto Book Club platform.',
      'Built event-driven pipelines with Kafka across 5 microservices on the NPCI RuPay corporate card platform, decoupling services and enabling near-real-time dashboards.',
      'Delivered compliance and regulatory reporting for a merchant risk portal, with automated MIS reports in 3 formats (Excel, PDF, CSV) and zero-downtime database upgrades.',
      'Secured platforms handling financial and subscription data with role-based access control, two-factor authentication and tenant-level data isolation.',
      'Maintained code quality through automated testing, SonarQube quality gates enforcing 80%+ coverage, and GitLab CI/CD releases.',
    ],
  },
]

export const education = [
  {
    title: 'B.Sc. Computer Science',
    org: 'Savitribai Phule Pune University',
    period: '2023',
    detail: 'CGPA: 8.26 / 10',
  },
  {
    title: 'Java Full Stack Developer Course',
    org: 'IT Shaala, Pune',
    period: 'Jul 2023 — Dec 2023',
    detail: 'Certification',
  },
  {
    title: 'AI Fundamentals',
    org: 'IBM SkillsBuild',
    period: '2026',
    detail: 'Certification',
  },
]
