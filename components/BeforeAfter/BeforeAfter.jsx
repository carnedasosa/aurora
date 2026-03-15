import styles from './BeforeAfter.module.css'

const transformations = [
  {
    id: 1,
    title: 'Ricostruzione completa',
    description: 'Da unghie fragili a mani eleganti',
    beforeImage: '/before1.png',
    beforeAlt: 'Prima della ricostruzione completa',
    afterImage: '/after1.png',
    afterAlt: 'Dopo la ricostruzione completa',
  },
  {
    id: 2,
    title: 'French raffinato',
    description: 'Risultato naturale e impeccabile',
    beforeImage: '/images/before-after/before-2.jpg',
    beforeAlt: 'Prima del french raffinato',
    afterImage: '/images/before-after/after-2.jpg',
    afterAlt: 'Dopo il french raffinato',
  },
  {
    id: 3,
    title: 'Copertura gel',
    description: 'Rinforzo e brillantezza duratura',
    beforeImage: '/images/before-after/before-3.jpg',
    beforeAlt: 'Prima della copertura gel',
    afterImage: '/images/before-after/after-3.jpg',
    afterAlt: 'Dopo la copertura gel',
  },
]

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12,5 19,12 12,19"/>
    </svg>
  )
}

export default function BeforeAfter() {
  return (
    <section className={styles.beforeAfter}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Trasformazioni</span>
        <h2 className={styles.title}>Prima & Dopo</h2>
        <p className={styles.subtitle}>
          Scopri la differenza che un trattamento professionale può fare. 
          Ogni trasformazione racconta una storia di cura e precisione.
        </p>
        
        <div className={styles.grid}>
          {transformations.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.comparison}>
                <div className={styles.beforeImage}>
                  <div className={styles.imagePlaceholder}>
                    <img
                      src={item.beforeImage}
                      alt={item.beforeAlt}
                      className={styles.image}
                    />
                  </div>
                  <span className={styles.label}>Prima</span>
                </div>

                <div className={styles.divider}>
                  <ArrowIcon />
                </div>

                <div className={styles.afterImage}>
                  <div className={styles.imagePlaceholder}>
                    <img
                      src={item.afterImage}
                      alt={item.afterAlt}
                      className={styles.image}
                    />
                  </div>
                  <span className={styles.label}>Dopo</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
