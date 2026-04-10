'use client'

import { useState, useEffect } from 'react'
import { useCountUp } from '../../hooks/useCountUp'
import styles from './About.module.css'

const stats = [
  { label: 'anni', value: '8+', numeric: 8 },
  { label: 'clienti soddisfatte', value: '1000+', numeric: 1000 },
]

function StatItem({ stat }) {
  const { count, ref } = useCountUp(stat.numeric, { duration: 1.8 })
  const suffix = stat.value.replace(String(stat.numeric), '')
  return (
    <div ref={ref} className={styles.statItem}>
      <span className={styles.statValue}>{count}{suffix}</span>
      <span className={styles.statLabel}>{stat.label}</span>
    </div>
  )
}

export default function About() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="chi-sono" className={styles.about}>
      {/* Decorative orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder} />
            <div className={styles.floatingCard}>
              <span className={styles.cardIcon}>✨</span>
              <span className={styles.cardText}>Nail Expert & Educator</span>
            </div>
            <div className={styles.imageGlow} />
          </div>
        </div>

        <div className={styles.contentColumn}>
          <h2 className={styles.title}>
            Passione, precisione e un tocco di eleganza
          </h2>

          <div className={styles.authorityBadge}>
            <span className={styles.authorityIcon}>🎓</span>
            <div>
              <strong>Nail Artist & Educator</strong>
              <p>Formatrice certificata con esperienza didattica</p>
            </div>
          </div>

          <div className={styles.description}>
            <p>
              Ciao, sono Aurora. Da anni mi dedico con passione all&apos;arte delle unghie,
              unendo tecnica impeccabile e gusto estetico raffinato. Ogni trattamento
              è per me un&apos;occasione per creare qualcosa di unico e valorizzare la
              bellezza delle tue mani.
            </p>
            <p>
              Oltre al lavoro in salone, sono anche <strong>Educator</strong> e accompagno
              aspiranti professioniste e onicotecniche nel loro percorso di crescita.
              Offro <strong>lezioni individuali</strong> studiate su misura, dove condivido
              tecniche avanzate, metodo e attenzione ai dettagli.
            </p>
            <p>
              Nel mio studio a Sannicandro di Bari troverai un ambiente accogliente
              e professionale, ideale sia per prenderti cura delle tue unghie, sia per
              formarti attraverso percorsi personalizzati.
            </p>
          </div>

          <div className={styles.stats}>
            {mounted && stats.map((stat, i) => <StatItem key={i} stat={stat} />)}
          </div>

          <div className={styles.qualities}>
            {['Precisione', 'Cura dei dettagli', 'Approccio professionale', 'Esperienza'].map(q => (
              <span key={q} className={styles.quality}>{q}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
