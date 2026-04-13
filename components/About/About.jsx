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

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1l2.75 8.26H23l-7 5.09 2.75 8.26L12 17.52l-6.75 5.09L8 14.35 1 9.26h8.25z"/>
    </svg>
  );
}

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

const revealVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function About() {
  return (
    <section id="chi-sono" className={styles.about}>
      <div className={styles.decorOrb} />
      <div className={styles.container}>
        <div className={styles.editorialGrid}>
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px' }}
            variants={revealVariants}
            className={styles.imageSection}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/profilo.jpg"
                  alt="Aurora Profilo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className={styles.floatingCard}
              >
                <SparkleIcon />
                <span className={styles.cardText}>Formazione d&apos;Eccellenza</span>
              </motion.div>
            </div>
            <div className={styles.imageStripe} />
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
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
                &ldquo;La bellezza delle mani non è solo estetica, è una forma di cura personale e fiducia in se stesse.&rdquo;
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
      </div>
    </section>
  );
}
