import styles from './Policy.module.css'

const policies = [
  {
    icon: '⏰',
    title: 'Puntualità',
    description: 'Ti chiedo di arrivare puntuale all\'appuntamento per garantire il tempo necessario al trattamento.',
  },
  {
    icon: '⏳',
    title: 'Ritardi',
    description: 'In caso di ritardo superiore a 10 minuti, il trattamento potrebbe essere ridotto o riprogrammato.',
  },
  {
    icon: '📅',
    title: 'Prenotazione',
    description: 'Gli appuntamenti si prenotano via WhatsApp con conferma. Un acconto potrebbe essere richiesto.',
  },
  {
    icon: '🔄',
    title: 'Spostamenti',
    description: 'Puoi spostare l\'appuntamento con almeno 24 ore di anticipo senza penalità.',
  },
  {
    icon: '❌',
    title: 'Cancellazioni',
    description: 'Cancellazioni con meno di 24 ore comportano la perdita dell\'eventuale acconto versato.',
  },
  {
    icon: '💝',
    title: 'Rispetto reciproco',
    description: 'Il mio studio è un ambiente professionale dove il rispetto reciproco è fondamentale.',
  },
]

export default function Policy() {
  return (
    <section className={styles.policy}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Informazioni</span>
        <h2 className={styles.title}>Policy appuntamenti</h2>
        <p className={styles.subtitle}>
          Per garantire un servizio di qualità e rispettare il tempo di tutti, 
          ti chiedo gentilmente di seguire queste semplici indicazioni.
        </p>
        
        <div className={styles.grid}>
          {policies.map((policy, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.icon}>{policy.icon}</span>
              <div>
                <h3 className={styles.cardTitle}>{policy.title}</h3>
                <p className={styles.cardDescription}>{policy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
