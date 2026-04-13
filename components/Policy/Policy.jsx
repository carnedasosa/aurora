'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import styles from './Policy.module.css';

const policies = [
  {
    title: 'Puntualità',
    description: 'Ti chiedo di arrivare puntuale all\'appuntamento per garantire il tempo necessario al trattamento.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'Ritardi',
    description: 'In caso di ritardo superiore a 10 minuti, il trattamento potrebbe essere ridotto o riprogrammato.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    title: 'Prenotazione',
    description: 'Gli appuntamenti si prenotano via WhatsApp con conferma. Un acconto potrebbe essere richiesto.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Spostamenti',
    description: 'Puoi spostare l\'appuntamento con almeno 24 ore di anticipo senza penalità.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
  },
  {
    title: 'Cancellazioni',
    description: 'Cancellazioni con meno di 24 ore comportano la perdita dell\'eventuale acconto versato.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
    ),
  },
  {
    title: 'Rispetto reciproco',
    description: 'Il mio studio è un ambiente professionale dove il rispetto reciproco è fondamentale.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

export default function Policy() {
  return (
    <section className={styles.policy}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.eyebrow}>Informazioni</span>
          <h2 className={styles.title}>Policy appuntamenti</h2>
          <p className={styles.subtitle}>
            Per garantire un servizio di qualità e rispettare il tempo di tutti,
            ti chiedo gentilmente di seguire queste semplici indicazioni.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          {policies.map((policy, index) => (
            <ScrollReveal key={index} delay={index * 0.07}>
              <motion.div
                className={styles.card}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-luxury-md)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className={styles.icon}>{policy.icon}</span>
                <div>
                  <h3 className={styles.cardTitle}>{policy.title}</h3>
                  <p className={styles.cardDescription}>{policy.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
