import Link from 'next/link';
import styles from './LoginSingUpHeader.module.css';

export default function LoginSingUpHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>AppTestPro</h1>
        {/* <div className={styles.navLinks}>
          <Link href="#features" className={styles.navLink}>Features</Link>
          <Link href="#how-it-works" className={styles.navLink}>How It Works</Link>
          <Link href="#testimonials" className={styles.navLink}>Testimonials</Link>
          <Link href="#faq" className={styles.navLink}>FAQ</Link>
        </div> */}
        <div className={styles.navButtons}>
          {/* <Link href="/auth/login" className={`${styles.button} ${styles.ghostButton}`}>
            Login
          </Link> */}
          {/* <Link href="/auth/signup" className={styles.button}>
            Sign Up
          </Link> */}
        </div>
      </nav>
    </header>
  )
}