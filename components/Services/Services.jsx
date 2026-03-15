import styles from './Services.module.css'

const services = [
  {
    name: 'Semipermanente',
    price: '25€',
    description: 'Smalto a lunga durata per un colore brillante e impeccabile che dura fino a 3 settimane senza sbeccature.',
    duration: '45 min',
  },
  {
    name: 'Copertura gel',
    price: '35€',
    description: 'Rinforzo naturale delle unghie con gel di alta qualità per un risultato resistente e luminoso.',
    duration: '60 min',
  },
  {
    name: 'Refill',
    price: '40€',
    description: 'Manutenzione della ricostruzione per mantenere le tue unghie sempre perfette e curate.',
    duration: '75 min',
  },
  {
    name: 'Ricostruzione',
    price: '50€',
    description: 'Allungamento e ricostruzione completa per unghie eleganti, resistenti e dalla forma impeccabile.',
    duration: '90 min',
  },
  {
    name: 'Nail art',
    price: 'da 5€',
    description: 'Decorazioni artistiche personalizzate per rendere le tue unghie uniche e in linea con il tuo stile.',
    duration: 'variabile',
  },
]

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  )
}

export default function Services() {
  return (
    <section id="servizi" className={styles.services}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>I miei servizi</span>
        <h2 className={styles.title}>Servizi</h2>
        <p className={styles.subtitle}>
          Ogni trattamento è eseguito con prodotti premium e tecniche professionali 
          per garantirti risultati impeccabili e duraturi.
        </p>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.serviceName}>{service.name}</h3>
                <span className={styles.servicePrice}>{service.price}</span>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.duration}>
                  <ClockIcon />
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Hai domande sui trattamenti o desideri un preventivo personalizzato?
          </p>
          <a 
            href="https://wa.me/393331234567?text=Ciao%20Aurora%2C%20vorrei%20informazioni%20sui%20servizi."
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contattami su WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
