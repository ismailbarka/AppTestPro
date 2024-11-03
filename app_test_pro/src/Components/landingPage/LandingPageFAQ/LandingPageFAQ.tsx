"use client"
import { useState } from 'react';
import styles from './LandingPageFAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How does AppTestPro work?",
    answer: "AppTestPro connects Android app developers with testers. Developers submit their apps, and testers choose apps to test on their devices. Testers provide daily feedback and screenshots for 14 days, helping developers meet Google Play Console requirements and improve their apps before launch."
  },
  {
    question: "How do testers earn money?",
    answer: "Testers earn coins for approved daily reviews and screenshots. These coins can be converted to real money once a minimum threshold of 200 coins is reached. The exact value of coins may vary based on the complexity of the app and the quality of feedback provided."
  },
  {
    question: "Is AppTestPro only for Android apps?",
    answer: "Currently, AppTestPro focuses on Android app testing to help developers meet Google Play Console requirements. We may expand to other platforms in the future."
  },
  {
    question: "How does AppTestPro ensure the quality of testing?",
    answer: "We have a review process for tester submissions. Developers can approve or reject submissions based on quality. Consistently high-quality testers may receive bonuses or priority for future testing opportunities."
  },
  {
    question: "Can I test apps from outside my country?",
    answer: "In most cases, yes. However, some apps may have regional restrictions. The app listings will specify any country limitations for testing."
  }
];

export default function LandingPageFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggleItem(index)}
              aria-expanded={openItem === index}
            >
              {item.question}
              <span className={styles.faqIcon}>{openItem === index ? '−' : '+'}</span>
            </button>
            {openItem === index && (
              <div className={styles.faqAnswer}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}