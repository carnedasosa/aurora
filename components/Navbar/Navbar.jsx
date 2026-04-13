'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#chi-sono', label: 'CHI SONO' },
  { href: '#servizi', label: 'SERVIZI' },
  { href: '#recensioni', label: 'RECENSIONI' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contatti', label: 'CONTATTI' },
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
        <motion.a 
          href="#home" 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/logo.png"
            alt="Aurora Tesoro Nail"
            className={styles.logoImage}
          />
        </motion.a>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className={styles.navLink}
                onClick={handleLinkClick}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.a
          href="https://wa.me/393398274876?text=Ciao%20Aurora%2C%20vorrei%20prenotare%20un%20appuntamento."
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(199, 168, 109, 0.4)" 
          }}
          whileTap={{ scale: 0.98 }}
        >
          Prenota ora
        </motion.a>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="https://wa.me/393398274876?text=Ciao%20Aurora%2C%20vorrei%20prenotare%20un%20appuntamento."
              className={styles.mobileCta}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Prenota su WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
