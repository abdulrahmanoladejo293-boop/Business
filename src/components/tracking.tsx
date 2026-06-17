import styles from './tracking.module.css'
import trackingImage from '../assets/tracking.png'

const features = [
  {
    title: 'Lead tracking',
    detail:
      'Improve the management and assessment of leads to prioritize and concentrate on the most promising prospects.',
  },
  {
    title: 'Follow-ups',
    detail:
      'Streamline your workflow by automating follow-ups, which not only boosts engagement but also significantly saves time.',
  },
  {
    title: 'Sites built.',
    detail:
      'Develop tailored lead nurturing workflows to facilitate personalized and meaningful interactions with potential clients.',
  },
]

const Tracking = () => {
  return (
    <section className={styles.trackingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Unlock the power of Finos CRM with key features</h2>
          <p className={styles.subtitle}>
            With Finos CRM’s robust automation tools, propel streamline your business operations,
            enhance customer relationships.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <h3 className={styles.heading}>
              Streamlined and automated processes for managing potential customer leads
            </h3>
            <p className={styles.copyText}>
              Leverage Finos CRM’s powerful automation tools to optimize operations,
              strengthen customer relationships, and accelerate growth.
            </p>

            <div className={styles.features}>
              {features.map((feature) => (
                <div key={feature.title} className={styles.feature}>
                  <div className={styles.bullet} />
                  <div className={styles.featureContent}>
                    <h4>{feature.title}</h4>
                    <p>{feature.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <img src={trackingImage} alt="Sales tracking dashboard" className={styles.image} />
              <div className={styles.statsCard}>
                <div className={styles.statsHeader}>Sales pipeline</div>
                <div className={styles.statRow}>
                  <span>Leads</span>
                  <div className={styles.bar}>
                    <span className={`${styles.fill} ${styles.fillLeads}`} />
                  </div>
                  <span>60%</span>
                </div>
                <div className={styles.statRow}>
                  <span>Chances</span>
                  <div className={styles.bar}>
                    <span className={`${styles.fill} ${styles.fillChances}`} />
                  </div>
                  <span>40%</span>
                </div>
                <div className={styles.statRow}>
                  <span>Offers</span>
                  <div className={styles.bar}>
                    <span className={`${styles.fill} ${styles.fillOffers}`} />
                  </div>
                  <span>30%</span>
                </div>
                <div className={styles.statRow}>
                  <span>Avenues</span>
                  <div className={styles.bar}>
                    <span className={`${styles.fill} ${styles.fillAvenues}`} />
                  </div>
                  <span>20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracking
