import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { WhatIBuild } from './components/WhatIBuild'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Learning } from './components/Learning'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <TechStack />
        <Projects />
        <Experience />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
