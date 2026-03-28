import styles from './WhyChoose.module.css'

const reasons = [
  {
    icon: '✨',
    title: 'Qualità del risultato',
    description: 'Ogni trattamento è eseguito con precisione e attenzione per garantirti unghie impeccabili e durature.',
  },
  {
    icon: '🎨',
    title: 'Cura estetica',
    description: 'Un occhio attento ai dettagli e alle tendenze per creare look eleganti e personalizzati.',
  },
  {
    icon: '💎',
    title: 'Precisione tecnica',
    description: 'Formazione continua e tecniche all\'avanguardia per risultati professionali e curati.',
  },
  {
    icon: '🛡️',
    title: 'Igiene garantita',
    description: 'Massima attenzione alla sterilizzazione e all\'igiene per la tua sicurezza e benessere.',
  },
  {
    icon: '🎓',
    title: 'Esperienza da Educator',
    description: 'La mia attività come formatrice mi permette di offrirti le tecniche più avanzate del settore.',
  },
  {
    icon: '💫',
    title: 'Esperienza premium',
    description: 'Un ambiente accogliente e un\'attenzione personalizzata per farti sentire speciale.',
  },
]

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

export default function WhyChoose() {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>I vantaggi</span>
        <h2 className={styles.title}>Perché scegliere Aurora</h2>
        <p className={styles.subtitle}>
          Professionalità, passione e dedizione in ogni dettaglio per offrirti 
          un'esperienza unica e risultati che parlano da soli.
        </p>
        
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.icon}>{reason.icon}</span>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <p>Vuoi vedere i miei lavori? Seguimi su Instagram!</p>
          <a 
            href="https://instagram.com/auroratesoronails" 
            className={styles.instagramButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            @auroratesoronails
          </a>
        </div>
      </div>
    </section>
  )
}
