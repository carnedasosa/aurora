import styles from './About.module.css'

const stats = [
  { label: 'Esperienza', value: '5+', suffix: 'anni' },
  { label: 'Clienti', value: '500+', suffix: 'soddisfatte' },
  { label: 'Corsi', value: '10+', suffix: 'tenuti' },
]

export default function About() {
  return (
    <section id="chi-sono" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.floatingCard}>
              <span className={styles.cardIcon}>✨</span>
              <span className={styles.cardText}>Nail Artist & Educator</span>
            </div>
          </div>
        </div>
        
        <div className={styles.contentColumn}>
          <span className={styles.eyebrow}>Chi sono</span>
          <h2 className={styles.title}>
            Passione, precisione e un tocco di eleganza
          </h2>
          
          <div className={styles.authorityBadge}>
            <span className={styles.authorityIcon}>🎓</span>
            <div>
              <strong>Nail Artist & Educator</strong>
              <p>Formatrice certificata con esperienza didattica</p>
            </div>
          </div>
          
          <div className={styles.description}>
            <p>
              Ciao, sono Aurora. Da anni mi dedico con passione all'arte delle unghie, 
              unendo tecnica impeccabile e gusto estetico raffinato. Ogni trattamento 
              è per me un'occasione per creare qualcosa di unico e valorizzare la 
              bellezza delle tue mani.
            </p>
            <p>
              La mia esperienza come <strong>Educator</strong> mi ha permesso di 
              approfondire ogni aspetto della professione, dalle tecniche più 
              innovative agli standard qualitativi più elevati. Questo bagaglio 
              formativo si riflette nella cura e nella precisione di ogni 
              trattamento che offro.
            </p>
            <p>
              Nel mio studio a Sannicandro di Bari troverai un ambiente accogliente 
              e professionale, dove potrai rilassarti mentre mi prendo cura delle 
              tue unghie con la massima attenzione ai dettagli.
            </p>
          </div>
          
          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.suffix}</span>
              </div>
            ))}
          </div>
          
          <div className={styles.qualities}>
            <span className={styles.quality}>Precisione</span>
            <span className={styles.quality}>Cura dei dettagli</span>
            <span className={styles.quality}>Approccio professionale</span>
            <span className={styles.quality}>Esperienza</span>
          </div>
        </div>
      </div>
    </section>
  )
}
