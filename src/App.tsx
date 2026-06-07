import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from './data/projects'
import './App.css'

const experience = [
  {
    title: 'Frontend Engineer',
    company: 'Creative Solutions Studio',
    period: '2024 – Present',
    summary:
      'Leading web application development with modern React architecture, design systems, and polished user experiences.',
  },
  {
    title: 'UI Developer',
    company: 'Growth Marketing Agency',
    period: '2022 – 2024',
    summary:
      'Built high-conversion landing pages, interactive dashboards, and reusable component libraries for digital campaigns.',
  },
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          Simon Preece
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Software engineer · interface design · React</p>
            <h1>Hi, I’m Simon.</h1>
            <p>
              I create dependable web products and polished user experiences for
              startups, personal brands, and digital teams. My work blends
              design-driven thinking with strong technical implementation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="#contact">
                Let’s Talk
              </a>
            </div>
          </div>
          <div className="hero-stats">
            <div>
              <strong>5+</strong>
              <span>years crafting interfaces</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>web projects delivered</span>
            </div>
            <div>
              <strong>React & TypeScript</strong>
              <span>preferred stack</span>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-header">
            <p className="section-label">About me</p>
            <h2>Professional approach and strengths</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I help teams move from concept to launch with clean, accessible
                code and thoughtful product interaction. My focus is on building
                performant interfaces that feel intuitive and scale with growth.
              </p>
            </div>
            <div>
              <h3>Core capabilities</h3>
              <ul>
                <li>React application architecture and state management</li>
                <li>Responsive layouts, animations, and micro-interactions</li>
                <li>REST and GraphQL API integration</li>
                <li>Design system implementation and component libraries</li>
              </ul>
            </div>
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
        <span>Built with React and Vite</span>
      </footer>
    </div>
  )
}

export default App
