import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import ValueProps from './pages/ValueProps'
import Hero from './pages/Hero'
import Personas from './pages/Personas'
import Projects from './pages/Projects'
import Process from './pages/Process'
import Testimonials from './pages/Testimonials'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Hero />
          <Personas />
          <ValueProps />
          <Projects />
          <Process />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  )
}

export default App
