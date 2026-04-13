import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import Reviews from '../components/Reviews/Reviews'
import Policy from '../components/Policy/Policy'
import Hygiene from '../components/Hygiene/Hygiene'
import FAQ from '../components/FAQ/FAQ'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import MobileCTA from '../components/MobileCTA/MobileCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home" style={{ position: 'absolute', top: 0 }} />
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Reviews />
        <Policy />
        <Hygiene />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
