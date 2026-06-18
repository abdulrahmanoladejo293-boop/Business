import { FiHeadphones, FiRefreshCcw, FiBarChart2, FiShoppingBag, FiArrowRight } from 'react-icons/fi'
import customerImage from '../assets/customer.jpg'
import styles from './customer.module.css'

const cards = [
  {
    title: 'Customer Service',
    description: 'Deliver exceptional support with a 360-degree view of interactions.',
    icon: <FiHeadphones />,
    bg: 'rgba(226, 244, 255, 0.9)',
  },
  {
    title: 'Workflow',
    description: 'Look like a pro with branded client galleries and file transfers.',
    icon: <FiRefreshCcw />,
    bg: 'rgba(255, 237, 244, 0.9)',
  },
  {
    title: 'Enhanced insights',
    description: 'Gain a comprehensive understanding of the true desires and needs.',
    icon: <FiBarChart2 />,
    bg: 'rgba(232, 251, 240, 0.9)',
  },
  {
    title: 'Selling',
    description: 'Sell your products, services, and digital downloads online.',
    icon: <FiShoppingBag />,
    bg: 'rgba(255, 247, 230, 0.9)',
  },
]

const Customer = () => {
  return (
    <section className={styles.customerSection} id="info">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>A thriving business hub designed for the expansion</h2>
          <p>
            Finos is a complete platform that connects marketing, sales, content management,
            and customer service.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={customerImage} alt="Customer collaboration" className={styles.image} />
          </div>

          <div className={styles.cards}>
            {cards.map((card) => (
              <article
                key={card.title}
                className={styles.card}
                style={{ background: card.bg }}
              >
                <div className={styles.cardIcon}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.cta}>
            Start Building Your Online Portfolio
            <FiArrowRight className={styles.ctaIcon} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Customer
