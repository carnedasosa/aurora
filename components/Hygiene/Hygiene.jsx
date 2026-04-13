'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import styles from './Hygiene.module.css';

const hygienePoints = [
  {
    title: 'Pulizia ambiente',
    description: 'Il mio studio viene sanificato dopo ogni appuntamento per garantire un ambiente sempre pulito.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: 'Sterilizzazione strumenti',
    description: 'Tutti gli strumenti vengono sterilizzati in autoclave seguendo i più rigorosi protocolli.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Materiali monouso',
    description: 'Lime, buffer e altri materiali di consumo sono sempre nuovi e personali per ogni cliente.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
  {
    title: 'Standard professionali',
    description: 'Rispetto scrupolosamente tutte le normative igienico-sanitarie del settore.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
];

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}

export default function Hygiene() {
  return (
    <section className={styles.hygiene}>
      <div className={styles.container}>
        <ScrollReveal className={styles.content}>
          <span className={styles.eyebrow}>La tua sicurezza</span>
          <h2 className={styles.title}>Igiene &amp; Sicurezza</h2>
          <p className={styles.description}>
            La tua salute e il tuo benessere sono la mia priorità assoluta.
            Per questo motivo, seguo rigorosi protocolli di igiene e sterilizzazione
            che garantiscono un&apos;esperienza sicura e professionale ad ogni visita.
          </p>
          <motion.div
            className={styles.badge}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ShieldIcon />
            <span>Protocolli certificati di igiene e sicurezza</span>
          </motion.div>
        </ScrollReveal>

        <div className={styles.points}>
          {hygienePoints.map((point, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className={styles.point}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className={styles.pointIcon}>{point.icon}</span>
                <div>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <p className={styles.pointDescription}>{point.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
