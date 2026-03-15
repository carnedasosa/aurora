import styles from './Products.module.css'

const brands = [
  { name: 'Luxe Nails Pro', category: 'Gel & Smalti' },
  { name: 'Premium Polish', category: 'Semipermanenti' },
  { name: 'Elite Builder', category: 'Ricostruzione' },
  { name: 'Beauty Care', category: 'Cura unghie' },
  { name: 'Nail Art Studio', category: 'Decorazioni' },
]

export default function Products() {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Qualità garantita</span>
        <h2 className={styles.title}>Prodotti utilizzati</h2>
        <p className={styles.subtitle}>
          Utilizzo esclusivamente prodotti professionali di alta qualità, 
          selezionati per garantirti risultati impeccabili e duraturi.
        </p>
        
        <div className={styles.grid}>
          {brands.map((brand, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.logoPlaceholder}>
                <span>{brand.name.charAt(0)}</span>
              </div>
              <h3 className={styles.brandName}>{brand.name}</h3>
              <span className={styles.category}>{brand.category}</span>
            </div>
          ))}
        </div>
        
        <div className={styles.note}>
          <span className={styles.noteIcon}>💎</span>
          <p>
            Tutti i prodotti sono certificati, cruelty-free e selezionati 
            per la loro qualità professionale e sicurezza.
          </p>
        </div>
      </div>
    </section>
  )
}
