import Link from 'next/link';
import styles from './LandingPageCTA.module.css';

export default function LandingPageCTA() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
      <p className={styles.ctaText}>
        Join AppTestPro today and be part of the app testing revolution. 
        Whether you're a developer looking to improve your app or a tester eager to earn while exploring new apps, 
        we've got you covered.
      </p>
      <div className={styles.ctaButtons}>
        <Link href="/signup" className={`${styles.button} ${styles.primaryButton}`}>
          Sign Up Now
        </Link>
        <Link href="/contact" className={`${styles.button} ${styles.secondaryButton}`}>
          Contact Us
        </Link>
      </div>
    </section>
  )
}