import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Code2, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="topbar">
      <div className="container nav-shell">
        <a className="brand" href="#top" aria-label="Hellen Kerubo home">
          HELLEN KERUBO
        </a>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions" aria-label="Social links">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Code2 size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <BriefcaseBusiness size={16} />
          </a>
          <a href="#contact" aria-label="Contact" className="nav-cta">
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-panel">
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:hello@hellenkerubo.dev">Email</a>
          </div>
        </div>
      )}
    </header>
  )
}
