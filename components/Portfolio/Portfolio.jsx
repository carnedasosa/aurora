'use client'

import { useState } from 'react'
import styles from './Portfolio.module.css'

const categories = ['Tutti', 'Nude', 'Eleganti', 'Sposa', 'Nail Art', 'Colorate']

const portfolioItems = [
  {
    id: 1,
    category: 'Nude',
    title: 'French Classico',
    image: '/frenchNail.png',
    alt: 'French classico nude'
  },
  {
    id: 2,
    category: 'Eleganti',
    title: 'Minimal Chic',
    image: '/minimalChic.png',
    alt: 'Unghie eleganti minimal chic'
  },
  {
    id: 3,
    category: 'Sposa',
    title: 'Wedding Day',
    image: '/weddingDay.png',
    alt: 'Unghie da sposa wedding day'
  },
  {
    id: 4,
    category: 'Nail Art',
    title: 'Fiori Delicati',
    image: '/nailart.png',
    alt: 'Nail art con fiori delicati'
  },
  {
    id: 5,
    category: 'Colorate',
    title: 'Summer Vibes',
    image: '/summerVibes.png',
    alt: 'Unghie colorate summer vibes'
  },
  {
    id: 6,
    category: 'Nude',
    title: 'Baby Boomer',
    image: '/babyBoomer.png',
    alt: 'Unghie nude baby boomer'
  },
  {
    id: 7,
    category: 'Eleganti',
    title: 'Gold Accent',
    image: '/goldNail.png',
    alt: 'Unghie eleganti con dettaglio oro'
  },
  {
    id: 8,
    category: 'Nail Art',
    title: 'Abstract Design',
    image: '/abstractDesign.png',
    alt: 'Nail art abstract design'
  },
  {
    id: 9,
    category: 'Sposa',
    title: 'Lace Inspiration',
    image: '/portfolio9.png',
    alt: 'Unghie da sposa lace inspiration'
  },
]

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Tutti')

  const filteredItems = activeCategory === 'Tutti' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Il mio lavoro</span>
        <h2 className={styles.title}>Portfolio</h2>
        <p className={styles.subtitle}>
          Una selezione dei miei lavori più recenti. Ogni realizzazione 
          è unica e pensata per valorizzare lo stile personale.
        </p>
        
        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.imagePlaceholder}>
                <img src={item.image} alt={item.alt} className={styles.image} />
              </div>
              <div className={styles.overlay}>
                <span className={styles.itemCategory}>{item.category}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <p>Vuoi vedere altri lavori? Seguimi su Instagram!</p>
          <a 
            href="https://instagram.com/auroratesoronails" 
            className={styles.instagramButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            @auroratesoronails
          </a>
        </div>
      </div>
    </section>
  )
}
