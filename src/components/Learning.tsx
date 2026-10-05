import { motion } from 'framer-motion'

const learningTags = [
  'TypeScript',
  'Next.js',
  'Backend development',
  'Node.js',
  'Express',
  'MongoDB',
  'Modern web development',
]

export function Learning() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container learning-shell">
        <div className="section-label">Currently exploring</div>
        <div className="learning-content">
          <p className="learning-line">I am still learning, and I build while I learn.</p>
          <div className="tag-wrap">
            {learningTags.map((tag) => (
              <span key={tag} className="tag-item">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
