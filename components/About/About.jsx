import styles from './About.module.css'

const stats = [
  { label: 'Esperienza', value: '8+', suffix: 'anni' },
  { label: 'Clienti', value: '1000+', suffix: 'soddisfatte' },
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
              <span className={styles.cardText}>Nail Expert & Educator</span>
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
            Oltre al lavoro in salone, sono anche <strong>Educator</strong> e accompagno 
            aspiranti professioniste e onicotecniche nel loro percorso di crescita. 
            Offro <strong>lezioni individuali</strong> studiate su misura, dove condivido 
            tecniche avanzate, metodo e attenzione ai dettagli, per aiutarti a migliorare 
            concretamente e con sicurezza.
          </p>
          <p>
            Nel mio studio a Sannicandro di Bari troverai un ambiente accogliente 
            e professionale, ideale sia per prenderti cura delle tue unghie, sia per 
            formarti attraverso percorsi personalizzati pensati per valorizzare al massimo 
            il tuo talento.
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
