import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import { hasActiveBanner } from './vacation.config.js'
import Nav from './components/Nav'
import VacationBanner from './components/VacationBanner'
import VacationPopup from './components/VacationPopup'
import HiringBanner from './components/HiringBanner'
import Hero from './components/Hero'
import Pain from './components/Pain'
import About from './components/About'
import Services from './components/Services'
import HeilpraktikUSP from './components/HeilpraktikUSP'
import Reviews from './components/Reviews'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

function Home() {
  return (
    <div className="bg-bg min-h-[100dvh]">
      <Nav />
      <div className="pt-[72px]">
        {hasActiveBanner() ? <VacationBanner /> : <HiringBanner />}
        <VacationPopup />
        <main>
          <Hero />
          <Pain />
          <About />
          <Services />
          <HeilpraktikUSP />
          <Reviews />
          <Process />
          <FAQ />
          <Location />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </BrowserRouter>
  )
}
