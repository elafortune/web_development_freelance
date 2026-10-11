import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Marquee from './components/common/Marquee'
import StickyCta from './components/common/StickyCta'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Process from './pages/Process'
import Offer from './pages/Offer'
import Testimonials from './pages/Testimonials'
import About from './pages/About'
import Faq from './pages/Faq'
import Contact from './pages/Contact'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-clip">
        <Navigation />
        <main>
          <Hero />
          <Marquee />
          <Projects />
          <Process />
          <Offer />
          <Testimonials />
          <About />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <StickyCta />
      </div>
    </LanguageProvider>
  )
}

export default App
