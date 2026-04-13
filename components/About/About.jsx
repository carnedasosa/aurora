'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import styles from './About.module.css';

const stats = [
  { label: 'ANNI DI ARTE', value: '8+', numeric: 8 },
  { label: 'CLIENTI SOIDDISFATTE', value: '1000+', numeric: 1000 },
];

function StatItem({ stat }) {
  const { count, ref } = useCountUp(stat.numeric, { duration: 1.8 });
  const suffix = stat.value.replace(String(stat.numeric), '');
  return (
    <div ref={ref} className={styles.statItem}>
      <span className={styles.statValue}>{count}{suffix}</span>
      <span className={styles.statLabel}>{stat.label}</span>
    </div>
  );
}

const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="chi-sono" className={styles.about}>
      <div className={styles.container}>
        {/* Editorial Layout: Staggered Content */}
        <div className={styles.editorialGrid}>
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className={styles.imageSection}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder} />
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className={styles.floatingCard}
              >
                <span className={styles.cardIcon}>✨</span>
                <span className={styles.cardText}>Formazione d&apos;Eccellenza</span>
              </motion.div>
            </div>
            <div className={styles.imageStripe} />
          </motion.div>

          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className={styles.contentSection}
          >
            <span className={styles.eyebrow}>CHI SONO</span>
            <h2 className={styles.title}>
              Passione, precisione e un <br />
              <span className={styles.italicTitle}>tocco di eleganza</span>
            </h2>

            <div className={styles.description}>
              <p className={styles.dropCapPara}>
                Ciao, sono Aurora. Da anni mi dedico con passione all&apos;arte delle unghie,
                unendo tecnica impeccabile e gusto estetico raffinato. Ogni trattamento
                è per me un&apos;occasione per creare qualcosa di unico e valorizzare la
                bellezza delle tue mani.
              </p>
              
              <blockquote className={styles.pullQuote}>
                &quot;La bellezza delle mani non è solo estetica, è una forma di cura personale e fiducia in se stesse.&quot;
              </blockquote>

              <p>
                Oltre al lavoro in salone, sono anche <strong>Educator</strong> e accompagno
                aspiranti professioniste nel loro percorso di crescita.
                Offro <strong>lezioni individuali</strong> studiate su misura, dove condivido
                tecniche avanzate e metodo.
              </p>
            </div>

            <div className={styles.statsRow}>
              {mounted && stats.map((stat, i) => <StatItem key={i} stat={stat} />)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
