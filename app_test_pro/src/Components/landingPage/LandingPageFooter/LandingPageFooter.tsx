import Link from 'next/link';
import styles from './LandingPageFooter.module.css';

export default function LandingPageFooter(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
            © 2024 AppTestPro. All rights reserved.
            </div>
        </footer>
    )
  }