import styles from './sectiontwo.module.css'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

const logos = [
  { src: reactLogo, label: 'Logoipsum' },
  { src: viteLogo, label: 'Logoipsum' },
  { src: reactLogo, label: 'Logoipsum' },
  { src: viteLogo, label: 'Logoipsum' },
  { src: reactLogo, label: 'Logoipsum' },
]

const SectionTwo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Integrate with the tools you already use</h2>
          <p>Get more done in a day by connecting Capsule to all your favorite software.</p>
        </div>

        <div className={styles.logoRow}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoCard}>
              <img src={logo.src} alt={logo.label} className={styles.logoImage} />
              <span>{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
