'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#chi-sono', label: 'Chi sono' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#recensioni', label: 'Recensioni' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
        <img
          src="/logo.png"
          alt="Aurora Tesoro Nail"
          className={styles.logoImage}
        />
        </a>

        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className={styles.navLink}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="https://wa.me/393398274876?text=Ciao%20Aurora%2C%20vorrei%20prenotare%20un%20appuntamento."
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Prenota un appuntamento
        </a>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={styles.mobileNavLink}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/393331234567?text=Ciao%20Aurora%2C%20vorrei%20prenotare%20un%20appuntamento."
            className={styles.mobileCta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Prenota su WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}
