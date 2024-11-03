import styles from './page.module.css'
import LandingPageHeader from '@/Components/landingPage/LandingPageHeader/LandingPageHeader'
import LandingPageFooter from '@/Components/landingPage/LandingPageFooter/LandingPageFooter'
import LandingPageHero from '@/Components/landingPage/LandingPageHero/LandingPageHero'
import LandingPageFeatures from '@/Components/landingPage/LandingPageFeatures/LandingPageFeatures'
import LandingPageHowItWorks from '@/Components/landingPage/LandingPageHowItWorks/LandingPageHowItWorks'
import LandingPageTestimonials from '@/Components/landingPage/LandingPageTestimonials/LandingPageTestimonials'
import LandingPageFAQ from '@/Components/landingPage/LandingPageFAQ/LandingPageFAQ'
import LandingPageCTA from '@/Components/landingPage/LandingPageCTA/LandingPageCTA'

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <LandingPageHeader />
      <main className={styles.main}>
        <LandingPageHero />
        <LandingPageFeatures />
        <LandingPageHowItWorks />
        <LandingPageTestimonials />
        <LandingPageFAQ />
        <LandingPageCTA />
      </main>
      <LandingPageFooter />
    </div>
  )
}