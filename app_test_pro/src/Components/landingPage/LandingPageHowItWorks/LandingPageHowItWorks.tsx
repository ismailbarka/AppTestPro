import styles from './LandingPageHowItWorks.module.css';

export default function LandingPageHowItWorks() {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <h2 className={styles.sectionTitle}>How It Works</h2>
      <div className={styles.stepGrid}>
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>1</div>
          <h3 className={styles.stepTitle}>Sign Up</h3>
          <p className={styles.stepDescription}>
            Create an account as a developer or tester. Provide necessary information and verify your email.
          </p>
        </div>
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>2</div>
          <h3 className={styles.stepTitle}>Connect</h3>
          <p className={styles.stepDescription}>
            Developers submit apps for testing. Testers browse and select apps they want to test on their Android devices.
          </p>
        </div>
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>3</div>
          <h3 className={styles.stepTitle}>Test & Review</h3>
          <p className={styles.stepDescription}>
            Testers use the app for 14 days, submitting daily reviews and screenshots. Developers monitor progress and feedback.
          </p>
        </div>
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>4</div>
          <h3 className={styles.stepTitle}>Earn & Improve</h3>
          <p className={styles.stepDescription}>
            Testers earn coins for approved submissions. Developers receive valuable feedback to improve their apps before launch.
          </p>
        </div>
      </div>
    </section>
  )
}