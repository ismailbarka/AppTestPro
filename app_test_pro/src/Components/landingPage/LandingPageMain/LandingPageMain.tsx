import Link from 'next/link';
import styles from './LandingPageMain.module.css';

export default function LandingPageMain(){
    return(
      <main className={styles.main}>
      <section className={styles.hero}>
        <h2 className={styles.heroTitle}>Connect. Test. Earn.</h2>
        <p className={styles.heroText}>
          AppTestPro brings developers and testers together for better app experiences and rewarding opportunities.
        </p>
        <Link href="/signup" className={`${styles.button} ${styles.largeButton}`}>
          Get Started
        </Link>
      </section>
      <section className={styles.cardGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>For Developers</h3>
            <p className={styles.cardDescription}>Get your app tested by real users</p>
          </div>
          <div className={styles.cardContent}>
            <ul className={styles.featureList}>
              <li>Access a diverse pool of testers</li>
              <li>Receive daily reviews and screenshots</li>
              <li>Approve or reject submissions to ensure quality</li>
              <li>Set custom coin rewards for testers</li>
              <li>Track testing progress and statistics</li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>For Testers</h3>
            <p className={styles.cardDescription}>Test apps and earn real money</p>
          </div>
          <div className={styles.cardContent}>
            <ul className={styles.featureList}>
              <li>Choose from a variety of apps to test</li>
              <li>Earn coins for approved daily reviews and screenshots</li>
              <li>Convert coins to real money</li>
              <li>Gain early access to new and exciting apps</li>
              <li>Flexible testing schedule with 24-hour submission windows</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.howItWorks}>
        <h3 className={styles.sectionTitle}>How It Works</h3>
        <div className={styles.stepGrid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>1. Sign Up</h3>
            </div>
            <div className={styles.cardContent}>
              Create an account as a developer or tester
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>2. Connect</h3>
            </div>
            <div className={styles.cardContent}>
              Developers submit apps, testers choose apps to test
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>3. Earn & Improve</h3>
            </div>
            <div className={styles.cardContent}>
              Testers submit daily reviews, earn coins, and help improve apps
            </div>
          </div>
        </div>
      </section>
    </main>
    )
  }