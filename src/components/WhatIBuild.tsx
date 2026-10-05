import { motion } from 'framer-motion'

const buildItems = [
  {
    index: '01',
    title: 'Interactive web applications',
    text: 'Interfaces that feel straightforward, responsive and useful from the first click.',
  },
  {
    index: '02',
    title: 'Responsive frontend experiences',
    text: 'Worked on layouts and interfaces designed to stay strong across devices and screen sizes.',
  },
  {
    index: '03',
    title: 'API-powered applications',
    text: 'Apps that connect UI patterns to real data, search flows and dynamic content.',
  },
  {
    index: '04',
    title: 'Full-stack experiments',
    text: 'Building end-to-end ideas that help me understand how frontend and backend fit together.',
  },
]

export function WhatIBuild() {
  return (
    <motion.section
      id="work"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-label">What I build</div>
        <div className="build-grid">
          {buildItems.map((item) => (
            <article key={item.index} className="build-item">
              <div className="build-index">{item.index}</div>
              <div className="build-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
