import styles from './LandingPageTestimonials.module.css';

export default function LandingPageTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Android Developer",
      content: "AppTestPro has been a game-changer for my app development process. I easily met Google Play Console's 20 tester requirement, and the feedback I received was invaluable for improving my app before launch.",
    },
    {
      name: "Michael Chen",
      role: "App Tester",
      content: "As a tester on AppTestPro, I've had the opportunity to try out exciting new apps while earning money. The platform is user-friendly, and I love being part of the app development process.",
    },
    {
      name: "Emily Rodriguez",
      role: "Indie Game Developer",
      content: "AppTestPro helped me find dedicated testers for my indie game. The daily reviews and screenshots provided insights that I wouldn't have discovered on my own. It's an essential tool for any app developer.",
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>What Our Users Say</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <p className={styles.testimonialContent}>{testimonial.content}</p>
            <div className={styles.testimonialAuthor}>
              <p className={styles.authorName}>{testimonial.name}</p>
              <p className={styles.authorRole}>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}