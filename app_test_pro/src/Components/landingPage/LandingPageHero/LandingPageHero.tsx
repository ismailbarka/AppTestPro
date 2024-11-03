import Link from 'next/link';
import styles from './LandingPageHero.module.css';

export default function LandingPageHero() {
  return (
    <section className={styles.hero}>
      <h2 className={styles.heroTitle}>Connect. Test. Earn.</h2>
      <p className={styles.heroText}>
        AppTestPro brings developers and testers together for better app experiences and rewarding opportunities.
        Meet Google Play Console's 20 tester requirement for 14 days with ease.
      </p>
      <div className={styles.heroButtons}>
        <Link href="/signup" className={`${styles.button} ${styles.primaryButton}`}>
          Get Started
        </Link>
        <Link href="#how-it-works" className={`${styles.button} ${styles.secondaryButton}`}>
          Learn More
        </Link>
      </div>
    </section>
  )
}