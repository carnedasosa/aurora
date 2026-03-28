import styles from './Services.module.css'

const services = [
  {
    name: 'Copertura gel',
    price: '35€',
    description: 'Rinforzo naturale delle unghie con gel di alta qualità per un risultato resistente e luminoso. Unghia corta media e lunga',
    duration: 'variabile',
  },
  {
    name: 'Refil correttivo',
    price: 'da 5€',
    description: 'Correzione strutturale',
    duration: 'variabile',
  },
  {
    name: 'Ricostruzione',
    price: '50€',
    description: 'Allungamento e ricostruzione completa per unghie eleganti, resistenti e dalla forma impeccabile.',
    duration: 'variabile',
  },
  {
    name: 'French muretto',
    price: '50€',
    description: "L'eccellenza della ricostruzione avanzata per una French impeccabile",
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
              {/*  <span className={styles.servicePrice}>{service.price}</span>*/}
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
              Raccontami il risultato che desideri: così potrò consigliarti il trattamento più adatto.
        </p>
          <a 
            href="https://wa.me/393519469634?text=Ciao%20Aurora%2C%20vorrei%20ricevere%20una%20consulenza%20personalizzata.%0A%0ATi%20invio%20le%20foto%20attuali%20delle%20mie%20unghie%3A%0A-%20foto%20frontale%0A-%20foto%20laterale%20destra%0A-%20foto%20laterale%20sinistra%0A%0AInoltre%20ti%20scrivo%20anche%20cosa%20vorrei%20realizzare%20come%20risultato%20finale.%20Cos%C3%AC%20potrai%20consigliarmi%20il%20trattamento%20pi%C3%B9%20adatto."
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
