import { motion } from 'framer-motion'

const experiencePoints = [
  'Contributing to reusable frontend components and UI patterns.',
  'Collaborating through GitHub workflows, pull requests and code review cycles.',
  'Supporting responsive interfaces and user-facing polish in shared frontend work.',
  'Improving familiarity with accessibility, testing and clean development habits.',
]

export function Experience() {
  return (
    <motion.section
      id="experience"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container experience-shell">
        <div className="section-label">Experience</div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-stem">
              <span className="timeline-dot" />
            </div>
            <div className="timeline-panel">
              <div className="panel-header">
                <div>
                  <p className="eyebrow small">CITA Tech</p>
                  <h3>Junior Frontend Developer</h3>
                </div>
                <span className="panel-tag">Frontend</span>
              </div>

              <ul className="timeline-list">
                {experiencePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <p className="timeline-note">
                Editable detail: add your exact project ownership and role specifics as your work
                evolves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
