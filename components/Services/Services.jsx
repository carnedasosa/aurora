'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import TiltCard from '../shared/TiltCard';
import styles from './Services.module.css';

const services = [
  {
    id: 'ricostruzione',
    name: 'Ricostruzione Completa',
    price: '50€',
    description: 'Allungamento e ricostruzione completa per unghie eleganti, resistenti e dalla forma impeccabile. Ideale per chi desidera trasformare radicalmente l\'aspetto delle proprie mani.',
    duration: '120 min',
    icon: '🌟',
    size: 'large', // 2x2
  },
  {
    id: 'copertura',
    name: 'Copertura Gel',
    price: '35€',
    description: 'Rinforzo naturale delle unghie con gel di alta qualità per un risultato resistente e luminoso.',
    duration: '90 min',
    icon: '💅',
    size: 'wide', // 2x1
  },
  {
    id: 'refil',
    name: 'Refil Correttivo',
    price: 'da 5€',
    description: 'Correzione strutturale per mantenere le tue unghie sempre perfette e in salute.',
    duration: 'variabile',
    icon: '✨',
    size: 'small', // 1x1
  },
  {
    id: 'french',
    name: 'French Muretto',
    price: '50€',
    description: 'L\'eccellenza della ricostruzione avanzata per una French impeccabile definita "ad incastro".',
    duration: '150 min',
    icon: '🤍',
    size: 'small', // 1x1
  },
];

export default function Services() {
  return (
    <section id="servizi" className={styles.services}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.eyebrow}>MENU TRATTAMENTI</span>
            <h2 className={styles.title}>
              L&apos;Arte delle <span className={styles.italicTitle}>Unghie</span>
            </h2>
            <p className={styles.subtitle}>
              Unione di estetica e benessere attraverso tecniche avanzate e materiali di eccellenza.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.bentoGrid}>
          {services.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              delay={index * 0.1}
              className={`${styles.gridItem} ${styles[service.size]}`}
            >
              <TiltCard className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.topRow}>
                    <span className={styles.icon}>{service.icon}</span>
                    <span className={styles.price}>{service.price}</span>
                  </div>
                  <div className={styles.mainInfo}>
                    <h3 className={styles.serviceName}>{service.name}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.duration}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                      {service.duration}
                    </span>
                  </div>
                </div>
                <div className={styles.cardGlow} />
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className={styles.consultancy}>
            <div className={styles.consultancyInner}>
              <h3 className={styles.consultancyTitle}>Cerchi una soluzione su misura?</h3>
              <p className={styles.consultancyText}>
                Descrivimi il risultato che desideri: sarò lieta di consigliarti il trattamento più adatto al tuo stile e alle tue esigenze.
              </p>
              <a
                href="https://wa.me/393398274876"
                className={styles.ctaButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Inizia la Consulenza
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
