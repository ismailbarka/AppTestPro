import styles from './LandingPageFeatures.module.css';

export default function LandingPageFeatures() {
  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.sectionTitle}>Key Features</h2>
      <div className={styles.featureGrid}>
        <div className={styles.featureCard}>
          <h3 className={styles.featureTitle}>For Developers</h3>
          <ul className={styles.featureList}>
            <li>Access a diverse pool of real Android device testers</li>
            <li>Meet Google Play Console's 20 tester requirement for 14 days</li>
            <li>Receive daily reviews and screenshots</li>
            <li>Set custom coin rewards for testers</li>
            <li>Track testing progress and statistics</li>
          </ul>
        </div>
        <div className={styles.featureCard}>
          <h3 className={styles.featureTitle}>For Testers</h3>
          <ul className={styles.featureList}>
            <li>Choose from a variety of Android apps to test</li>
            <li>Earn coins for approved daily reviews and screenshots</li>
            <li>Convert coins to real money</li>
            <li>Gain early access to new and exciting apps</li>
            <li>Flexible testing schedule with 24-hour submission windows</li>
          </ul>
        </div>
      </div>
    </section>
  )
}