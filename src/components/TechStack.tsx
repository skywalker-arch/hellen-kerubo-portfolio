import { motion } from 'framer-motion'
import { stackGroups } from '../data/technologies'

export function TechStack() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container tech-shell">
        <div className="section-label">Tech stack</div>
        <div className="tech-grid">
          {stackGroups.map((group) => (
            <div key={group.title} className="tech-group">
              <p className="tech-title">{group.title}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
