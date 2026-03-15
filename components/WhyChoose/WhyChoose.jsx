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
      </div>
    </section>
  )
}
