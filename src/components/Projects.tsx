import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-label">Featured projects</div>
        <div className="projects-stack">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-item ${project.layout}`}
              style={{ ['--project-accent' as string]: project.accent }}
            >
              <div className="project-visual" aria-label={`${project.title} preview`}>
                <div className="mock-window">
                  <div className="window-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  {project.image ? (
                    <div className="window-body image-body">
                      <img className="project-image" src={project.image} alt={`${project.title} preview`} />
                    </div>
                  ) : (
                    <div className="window-body">
                      <div className="mock-header">
                        <span className="tag">{project.category}</span>
                      </div>
                      <div className="mock-layout">
                        <div className="mock-panel large" />
                        <div className="mock-panel small" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="project-content">
                <p className="eyebrow small">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-context">{project.context}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.liveDemo ? (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                      Live demo
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="link-disabled">Live demo</span>
                  )}
                  {project.sourceCode ? (
                    <a href={project.sourceCode} target="_blank" rel="noreferrer">
                      Source code
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="link-disabled">Source code</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
