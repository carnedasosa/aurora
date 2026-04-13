'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import styles from './FAQ.module.css';

const faqs = [
  { question: 'Quanto dura il trattamento?', answer: 'La durata varia in base al tipo di trattamento: il semipermanente dura circa 2-3 settimane, mentre la ricostruzione e la copertura gel possono durare fino a 3-4 settimane con la giusta cura.' },
  { question: 'Come posso prenotare?', answer: 'Puoi prenotare facilmente via WhatsApp al numero indicato o contattarmi tramite Instagram. Rispondo sempre entro 24 ore per confermare la disponibilità.' },
  { question: 'Quanto tempo richiede una seduta?', answer: 'Un semipermanente richiede circa 45 minuti, una copertura gel circa 60 minuti, mentre per una ricostruzione completa servono circa 90 minuti. Le tempistiche possono variare in base alla complessità.' },
  { question: 'È possibile richiedere nail art personalizzate?', answer: 'Assolutamente sì! Amo creare design personalizzati. Puoi mostrarmi le tue ispirazioni e insieme troveremo il look perfetto per te. I costi variano in base alla complessità.' },
  { question: 'Cosa succede in caso di ritardo?', answer: 'Ti chiedo di avvisarmi sempre in caso di ritardo. Ritardi superiori a 10 minuti potrebbero comportare la riduzione del trattamento o la riprogrammazione dell\'appuntamento.' },
  { question: 'Come funziona in caso di disdetta?', answer: 'Puoi spostare o cancellare l\'appuntamento senza penalità con almeno 24 ore di anticipo. Cancellazioni tardive comportano la perdita dell\'eventuale acconto.' },
  { question: 'Come mantenere il risultato più a lungo?', answer: 'Evita il contatto prolungato con acqua nelle prime ore, usa guanti per le pulizie, applica olio cuticole regolarmente e non usare le unghie come attrezzi.' },
];

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.eyebrow}>Domande frequenti</span>
          <h2 className={styles.title}>FAQ</h2>
          <p className={styles.subtitle}>
            Risposte alle domande più comuni. Non trovi quello che cerchi?
            Contattami direttamente su WhatsApp!
          </p>
        </ScrollReveal>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.04}>
              <div className={`${styles.item} ${openIndex === index ? styles.open : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    className={styles.iconWrapper}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <ChevronIcon />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      className={styles.answer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
