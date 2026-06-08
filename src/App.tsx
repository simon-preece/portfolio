import { useEffect, useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaMoon,
  FaSun,
} from 'react-icons/fa'
import { projects } from './data/projects'
import { about, experience, hero, skills } from './data/siteContent'
import './App.css'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark'
    const stored = window.localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const { eyebrow, greeting, description, primaryCta, secondaryCta, stats } = hero

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          Simon Preece
        </a>
        <div className="topbar-actions">
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{greeting}</h1>
            <p>{description}</p>
            <div className="hero-actions">
              <a className="button primary" href={primaryCta.href}>
                {primaryCta.label}
              </a>
              <a className="button secondary" href={secondaryCta.href}>
                {secondaryCta.label}
              </a>
            </div>
          </div>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-header">
            <p className="section-label">{about.label}</p>
            <h2>{about.title}</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>{about.summary}</p>
            </div>
            <div>
              <h3>Core capabilities</h3>
              <ul>
                {about.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-header">
            <p className="section-label">{skills.label}</p>
            <h2>{skills.title}</h2>
          </div>
          <div className="skills-grid">
            {skills.items.map((skill) => (
              <article key={skill.title} className="skill-card">
                <strong>{skill.title}</strong>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-header">
            <p className="section-label">Featured work</p>
            <h2>Selected projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-card-top">
                  <h3>{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt aria-hidden="true" />
                    View repo
                  </a>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-header">
            <p className="section-label">Experience</p>
            <h2>Recent roles</h2>
          </div>
          <div className="experience-grid">
            {experience.map((item) => (
              <div key={item.title} className="experience-card">
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <strong>{item.company}</strong>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-header">
            <p className="section-label">Get in touch</p>
            <h2>Let’s work together</h2>
          </div>
          <div className="contact-panel">
            <div>
              <p>
                I’m available for freelance and full-time opportunities. Send a
                message and I’ll reply within one business day.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:hello@simonpreece.dev">
                <FaEnvelope aria-hidden="true" /> hello@simonpreece.dev
              </a>
              <a
                href="https://www.linkedin.com/in/simon-preece-214526235/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin aria-hidden="true" /> linkedin.com/in/simon-preece-214526235
              </a>
              <a href="https://github.com/simon-preece" target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" /> github.com/simon-preece
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Simon Preece</span>
        <span>Built with React and Vite - <a href="https://github.com/simon-preece/portfolio" target="_blank" rel="noreferrer">View Source</a></span>
      </footer>
    </div>
  )
}

export default App
