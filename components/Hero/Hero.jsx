'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';

const badges = [
  'Nail Artist & Educator',
  'Esperienza professionale',
];

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: i * 0.03,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// Simplified line variant for mobile performance
const lineVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5 + (i * 0.2),
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const line1 = "Aurora";
  const line2 = "Tesoro,";
  const line3 = "la tua Nail Expert.";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={styles.hero}>
      {!isMobile && (
        <>
          <motion.div
            animate={{
              x: [0, 60, -40, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.1, 0.95, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={styles.orb1}
            style={{ translateZ: 0 }}
          />
          <motion.div
            animate={{
              x: [0, -50, 60, 0],
              y: [0, 30, -50, 0],
              scale: [1, 0.9, 1.1, 1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className={styles.orb2}
            style={{ translateZ: 0 }}
          />
        </>
      )}

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.badges}
          >
            {badges.map((badge, index) => (
              <span key={index} className={styles.badge}>{badge}</span>
            ))}
          </motion.div>

          <h1 className={styles.headline}>
            <span className={styles.line}>
              {isMobile ? (
                <motion.span
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  style={{ display: 'inline-block' }}
                >
                  {line1} {line2}
                </motion.span>
              ) : (
                line1.split('').map((char, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))
              )}
            </span>

            {!isMobile && (
              <span className={styles.line}>
                {line2.split('').map((char, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    custom={i + line1.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            )}

            <span className={`${styles.line} ${styles.italic}`}>
              {isMobile ? (
                <motion.span
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  style={{ display: 'inline-block' }}
                >
                  {line3}
                </motion.span>
              ) : (
                line3.split('').map((char, i) => (
                  <motion.span
                    key={`l3-${i}`}
                    custom={i + line1.length + line2.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))
              )}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: isMobile ? 1 : 1.5 }}
            className={styles.subheadline}
          >
            Benvenuta nel mio spazio dedicato all&apos;eleganza e alla cura tecnica.
            Offro trattamenti unghie premium a Sannicandro di Bari per chi cerca precisione,
            risultati raffinati e un&apos;esperienza professionale su misura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: isMobile ? 1.2 : 1.8 }}
            className={styles.ctas}
          >
            <motion.a
              href="https://wa.me/393398274876?text=Ciao%20Aurora%2C%20vorrei%20prenotare%20un%20appuntamento."
              className={styles.primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, textShadow: "var(--prismatic)" }}
              whileTap={{ scale: 0.95 }}
            >
              <WhatsAppIcon />
              Prenota ora
            </motion.a>
            <a href="#servizi" className={styles.secondaryCta}>
              Scopri i servizi
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 50 : 0, rotate: isMobile ? 0 : 5 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.imageWrapper}
        >
          <div className={styles.imagePlaceholder}>
            <Image
              src="/heroImage.png"
              alt="Aurora tesoro nail"
              fill
              sizes="(max-width: 968px) 100vw, 50vw"
              priority
              style={{ objectFit: 'contain', objectPosition: isMobile ? 'center 20%' : 'center' }}
            />
          </div>
          {!isMobile && (
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className={styles.imageAccent}
              style={{ translateZ: 0 }}
            />
          )}
          <div className={styles.chromaticOrb} />
        </motion.div>
      </div>
    </section>
  )
}
