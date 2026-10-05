import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container about-shell">
        <div className="section-label">About</div>
        <div className="about-grid">
          <div className="about-copy">
            <h3>I am a junior frontend developer who started with the fundamentals and is building
              toward better product thinking, cleaner interfaces and more thoughtful user experiences.</h3>
          </div>

          <div className="about-content">
            <p>
              My work has grown from practical frontend basics into React, Next.js and TypeScript,
              with a growing understanding of full-stack workflows using Node.js, Express and MongoDB.
            </p>
            <p>
              I learn by building. A lot of the work I do is shaped by real problems, ideas and
              interfaces that need to be useful, clear and responsive. I am actively looking for
              opportunities to contribute, learn quickly and help a team build meaningful digital
              products.
            </p>
          </div>
        </div>

        <div className="about-note">
          <span className="note-kicker">What I value</span>
          <p>Thoughtful UI, clear systems, and interfaces that solve real problems.</p>
          <ArrowRight size={16} />
        </div>
      </div>
    </motion.section>
  )
}
