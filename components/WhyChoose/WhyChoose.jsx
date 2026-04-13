'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import TiltCard from '../shared/TiltCard';
import styles from './WhyChoose.module.css';

const reasons = [
  {
    title: 'Qualità del risultato',
    description: 'Ogni trattamento è eseguito con precisione e attenzione per garantirti unghie impeccabili e durature.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l2.75 8.26H23l-7 5.09 2.75 8.26L12 17.52l-6.75 5.09L8 14.35 1 9.26h8.25z"/>
      </svg>
    ),
  },
  {
    title: 'Cura estetica',
    description: 'Un occhio attento ai dettagli e alle tendenze per creare look eleganti e personalizzati.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    title: 'Precisione tecnica',
    description: 'Formazione continua e tecniche all\'avanguardia per risultati professionali e curati.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Igiene garantita',
    description: 'Massima attenzione alla sterilizzazione e all\'igiene per la tua sicurezza e benessere.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Esperienza da Educator',
    description: 'La mia attività come formatrice mi permette di offrirti le tecniche più avanzate del settore.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    title: 'Esperienza premium',
    description: 'Un ambiente accogliente e un\'attenzione personalizzata per farti sentire speciale.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function WhyChoose() {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.eyebrow}>I vantaggi</span>
          <h2 className={styles.title}>Perché scegliere <em>Aurora</em></h2>
          <p className={styles.subtitle}>
            Professionalità, passione e dedizione in ogni dettaglio per offrirti
            un&apos;esperienza unica e risultati che parlano da soli.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <TiltCard className={styles.card} intensity={5}>
                <span className={styles.icon}>{reason.icon}</span>
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardDescription}>{reason.description}</p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className={styles.cta}>
            <p>Vuoi vedere i miei lavori? Seguimi su Instagram!</p>
            <motion.a
              href="https://instagram.com/auroratesoronails"
              className={styles.instagramButton}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, textShadow: 'var(--prismatic)' }}
              whileTap={{ scale: 0.96 }}
            >
              <InstagramIcon />
              @auroratesoronails
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
