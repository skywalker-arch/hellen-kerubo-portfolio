import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, Code2, Download, MapPin } from 'lucide-react'

const profileImageSrc = '/picportfolio.jpeg'

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow">Hello, I’m</p>
          <h1>
            Hellen <span>Kerubo</span>
          </h1>
          <h2>Frontend Developer</h2>
          <p className="intro-copy">
            I build responsive and interactive web experiences with React, Next.js and modern
            JavaScript, with experience working with Node.js, Express and MongoDB.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#work">
              View my work
              <ArrowUpRight size={16} />
            </a>
            <a className="button secondary" href="/Hellen-Kerubo-CV.pdf" download>
              Download CV
              <Download size={16} />
            </a>
          </div>

          <div className="social-row" aria-label="Social links">
            <a href="https://github.com/skywalker-arch" target="_blank" rel="noreferrer">
              <Code2 size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/hellen-kerubo-b7b619352?" target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={16} />
              LinkedIn
            </a>
            <span className="location-pill">
              <MapPin size={14} />
              Kenya
            </span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="portrait-frame">
            <div className="portrait-surface">
              <div className="portrait-annotation annotation-top">frontend</div>
              <div className="portrait-annotation annotation-bottom">React / Next.js</div>

              {imageFailed ? (
                <div className="portrait-fallback" aria-label="Portrait placeholder">
                  <span>Hellen</span>
                </div>
              ) : (
                <img
                  className="portrait-image"
                  src={profileImageSrc}
                  alt="Hellen Kerubo portrait"
                  onError={() => setImageFailed(true)}
                />
              )}
            </div>
          </div>
          <div className="code-card">
            <span className="code-label">portfolio.ts</span>
            <code>{`const focus = ['UI', 'UX', 'web apps'];`}</code>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
