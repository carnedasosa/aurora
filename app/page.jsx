import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import Portfolio from '../components/Portfolio/Portfolio'
import BeforeAfter from '../components/BeforeAfter/BeforeAfter'
import Reviews from '../components/Reviews/Reviews'
import Policy from '../components/Policy/Policy'
import Hygiene from '../components/Hygiene/Hygiene'
import Products from '../components/Products/Products'
import FAQ from '../components/FAQ/FAQ'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import MobileCTA from '../components/MobileCTA/MobileCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Portfolio />
        <BeforeAfter />
        <Reviews />
        <Policy />
        <Hygiene />
        <Products />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
