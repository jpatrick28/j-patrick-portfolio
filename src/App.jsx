import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Process from './components/Process'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div
      id="top"
      className="min-h-screen bg-zinc-950 text-white"
    >
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Process />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App