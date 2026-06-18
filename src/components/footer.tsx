import styles from './footer.module.css'

const footerColumns = [
  {
    title: 'Product',
    links: ['Overview', 'Pricing', 'Integrations', 'Demo'],
  },
  {
    title: 'Features',
    links: ['Core Features', 'Advanced Features', 'Customization', 'Updates'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Team', 'Careers', 'Contact Us'],
  },
  {
    title: 'Support',
    links: ['Knowledge Base', 'Help Center', 'Contact Support'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Whitepapers', 'Webinars', 'Case Studies'],
  },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h2>How can we help? Contact us</h2>
        </div>

        <div className={styles.grid}>
          {footerColumns.map((column) => (
            <div key={column.title} className={styles.column}>
              <span className={styles.title}>{column.title}</span>
              {column.links.map((link) => (
                <a key={link} href="#" className={styles.link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© Finos 2025</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
