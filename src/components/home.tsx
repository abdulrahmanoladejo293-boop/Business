import { useState } from 'react'
import styles from './home.module.css'
import avatar1 from '../assets/react.svg'
import avatar2 from '../assets/vite.svg'
import avatar3 from '../assets/react.svg'
import avatar4 from '../assets/vite.svg'
import avatar5 from '../assets/react.svg'
import heroImage from '../assets/hero.png'

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5]

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <header className={styles.nav}>
          <span className={styles.brand}>FINOS</span>

          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className={styles.hamburger} />
          </button>

          <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
            <a href="#">Info</a>
          </nav>

          <div className={styles.actions}>
            <button className={styles.login}>Log in</button>
            <button className={styles.signup}>Sign Up</button>
          </div>
        </header>

        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <span className={styles.pretitle}>Business software made simple</span>
            <h1 className={styles.title}>Get a Grip on Your Business Future with Finos CRM</h1>
            <p className={styles.subtitle}>
              Discover software that's effective, not overbearing. Seamlessly connect your data,
              teams, and customers on one platform that grows with your business.
            </p>

            <div className={styles.ctas}>
              <button className={styles.primary}>Get Started</button>
              <button className={styles.secondary}>Learn more</button>
            </div>

            <div className={styles.proofCard}>
              <div className={styles.avatarRow}>
                {avatars.map((avatar, index) => (
                  <img key={index} src={avatar} alt={`Customer ${index + 1}`} className={styles.avatar} />
                ))}
              </div>
              <div className={styles.ratingBlock}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.joined}>Over 1k+ people have joined</span>
              </div>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img src={heroImage} alt="Hero illustration" />
          </div>
        </div>

        <div className={styles.statsCard}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>180+</span>
            <span className={styles.statLabel}>companies use</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>190</span>
            <span className={styles.statLabel}>Country Available</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>2010</span>
            <span className={styles.statLabel}>Founded</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
