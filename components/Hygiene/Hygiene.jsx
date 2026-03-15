import styles from './Hygiene.module.css'

const hygienePoints = [
  {
    icon: '🧹',
    title: 'Pulizia ambiente',
    description: 'Il mio studio viene sanificato dopo ogni appuntamento per garantire un ambiente sempre pulito.',
  },
  {
    icon: '🔧',
    title: 'Sterilizzazione strumenti',
    description: 'Tutti gli strumenti vengono sterilizzati in autoclave seguendo i più rigorosi protocolli.',
  },
  {
    icon: '🧤',
    title: 'Materiali monouso',
    description: 'Lime, buffer e altri materiali di consumo sono sempre nuovi e personali per ogni cliente.',
  },
  {
    icon: '✅',
    title: 'Standard professionali',
    description: 'Rispetto scrupolosamente tutte le normative igienico-sanitarie del settore.',
  },
]

export default function Hygiene() {
  return (
    <section className={styles.hygiene}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>La tua sicurezza</span>
          <h2 className={styles.title}>Igiene & Sicurezza</h2>
          <p className={styles.description}>
            La tua salute e il tuo benessere sono la mia priorità assoluta. 
            Per questo motivo, seguo rigorosi protocolli di igiene e sterilizzazione 
            che garantiscono un'esperienza sicura e professionale ad ogni visita.
          </p>
          
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🛡️</span>
            <span>Protocolli certificati di igiene e sicurezza</span>
          </div>
        </div>
        
        <div className={styles.points}>
          {hygienePoints.map((point, index) => (
            <div key={index} className={styles.point}>
              <span className={styles.pointIcon}>{point.icon}</span>
              <div>
                <h3 className={styles.pointTitle}>{point.title}</h3>
                <p className={styles.pointDescription}>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
