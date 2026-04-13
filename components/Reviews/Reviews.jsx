'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import TiltCard from '../shared/TiltCard';
import styles from './Reviews.module.css';

const reviews = [
  {
    name: 'Giulia M.',
    rating: 5,
    text: 'Aurora è una vera professionista! Le mie unghie non sono mai state così belle. Precisione, eleganza e attenzione ai dettagli. Consigliatissima!',
    service: 'Ricostruzione',
    initial: 'G',
  },
  {
    name: 'Francesca L.',
    rating: 5,
    text: 'Finalmente ho trovato chi capisce esattamente cosa voglio. Ambiente curato, prodotti di qualità e risultato impeccabile che dura settimane.',
    service: 'Semipermanente',
    initial: 'F',
  },
  {
    name: 'Sara D.',
    rating: 5,
    text: 'Le unghie per il mio matrimonio erano perfette! Aurora ha interpretato perfettamente il mio stile. Un\'esperienza premium dall\'inizio alla fine.',
    service: 'Nail Art Sposa',
    initial: 'S',
  },
  {
    name: 'Valentina R.',
    rating: 5,
    text: 'Professionalità e gentilezza uniche. Aurora ti fa sentire a tuo agio e il risultato è sempre al di sopra delle aspettative. Non tornerei mai indietro!',
    service: 'Copertura gel',
    initial: 'V',
  },
];

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#C7A86D">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor" className="quoteIcon">
      <path d="M0 24V14.4C0 6.4 4.267 1.6 12.8 0l1.6 2.4C10.133 3.6 7.467 6.267 7.467 10.667H12.8V24H0zm19.2 0V14.4C19.2 6.4 23.467 1.6 32 0l1.6 2.4C29.333 3.6 26.667 6.267 26.667 10.667H32V24H19.2z" opacity=".15"/>
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="recensioni" className={styles.reviews}>
      <div className={styles.orb} />
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.eyebrow}>Testimonianze</span>
          <h2 className={styles.title}>Cosa dicono le <em>clienti</em></h2>
          <p className={styles.subtitle}>
            La soddisfazione di chi si affida a me è la mia priorità.
            Ogni recensione è una storia di cura e fiducia.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <TiltCard className={styles.card} intensity={6}>
                <div className={styles.quoteDecor}>
                  <QuoteIcon />
                </div>
                <div className={styles.rating}>
                  {[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{review.initial}</div>
                  <div>
                    <span className={styles.name}>{review.name}</span>
                    <span className={styles.service}>{review.service}</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className={styles.trustBadge}>
            <div className={styles.starsRow}>
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <span>Valutazione media <strong>5.0</strong> su oltre 100 recensioni</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
