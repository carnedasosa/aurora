import styles from './Reviews.module.css'

const reviews = [
  {
    name: 'Giulia M.',
    rating: 5,
    text: 'Aurora è una vera professionista! Le mie unghie non sono mai state così belle. Precisione, eleganza e attenzione ai dettagli. Consigliatissima!',
    service: 'Ricostruzione',
  },
  {
    name: 'Francesca L.',
    rating: 5,
    text: 'Finalmente ho trovato chi capisce esattamente cosa voglio. Ambiente curato, prodotti di qualità e risultato impeccabile che dura settimane.',
    service: 'Semipermanente',
  },
  {
    name: 'Sara D.',
    rating: 5,
    text: 'Le unghie per il mio matrimonio erano perfette! Aurora ha interpretato perfettamente il mio stile. Un\'esperienza premium dall\'inizio alla fine.',
    service: 'Nail Art Sposa',
  },
  {
    name: 'Valentina R.',
    rating: 5,
    text: 'Professionalità e gentilezza uniche. Aurora ti fa sentire a tuo agio e il risultato è sempre al di sopra delle aspettative. Non tornerei mai indietro!',
    service: 'Copertura gel',
  },
]

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#C7A86D">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

export default function Reviews() {
  return (
    <section id="recensioni" className={styles.reviews}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Testimonianze</span>
        <h2 className={styles.title}>Recensioni</h2>
        <p className={styles.subtitle}>
          Cosa dicono le mie clienti della loro esperienza. 
          La soddisfazione di chi si affida a me è la mia priorità.
        </p>
        
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.rating}>
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className={styles.text}>"{review.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.service}>{review.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.trustBadge}>
          <span className={styles.trustIcon}>⭐</span>
          <span>Valutazione media <strong>5.0</strong> su oltre 100 recensioni</span>
        </div>
      </div>
    </section>
  )
}
