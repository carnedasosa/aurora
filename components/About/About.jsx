'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCountUp } from '../../hooks/useCountUp';
import styles from './About.module.css';

const stats = [
  { label: 'ANNI DI ARTE', value: '8+', numeric: 8 },
  { label: 'CLIENTI SODDISFATTE', value: '1000+', numeric: 1000 },
];

function StatItem({ stat }) {
  const { count, ref } = useCountUp(stat.numeric, { duration: 1.8 });
  const suffix = stat.value.replace(String(stat.numeric), '');
  return (
    <motion.div
      ref={ref}
      className={styles.statItem}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <span className={styles.statValue}>{count}{suffix}</span>
      <span className={styles.statLabel}>{stat.label}</span>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="chi-sono" className={styles.about}>
      <div className={styles.inner}>

        {/* Hand image — positioned absolutely on the left edge */}
        <motion.div
          className={styles.handCol}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/aboutHand.png"
            alt="Mano Aurora Nail Art"
            width={520}
            height={700}
            style={{ objectFit: 'contain', objectPosition: 'left bottom' }}
            priority
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          className={styles.textCol}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.eyebrow}>CHI SONO</span>
          <h2 className={styles.title}>
            Passione, precisione e un <br />
            <span className={styles.italicTitle}>tocco di eleganza</span>
          </h2>

          <div className={styles.description}>
            <p>
              Il mio percorso nasce dal desiderio di elevare il concetto d&apos;estetica
              e cura della persona. Unendo tecnica impeccabile e un gusto estetico
              raffinato, ogni trattamento è studiato per valorizzare la bellezza
              autentica e la fiducia in se stesse.
            </p>

            <blockquote className={styles.pullQuote}>
              &ldquo;La bellezza delle mani non è solo estetica, è una forma di cura
              personale e fiducia in se stesse.&rdquo;
            </blockquote>

            <p>
              Oltre al lavoro in salone, sono anche <strong>Educator</strong> e accompagno
              aspiranti professioniste nel loro percorso di crescita.
              Offro <strong>lezioni individuali</strong> studiate su misura, dove condivido
              tecniche avanzate e metodo.
            </p>
          </div>

          <div className={styles.statsRow}>
            {stats.map((stat, i) => <StatItem key={i} stat={stat} />)}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
