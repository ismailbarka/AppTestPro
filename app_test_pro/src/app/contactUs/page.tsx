'use client'

import { useState } from 'react'
import styles from './ContactUs.module.css'
import LandingPageHeader from '@/Components/landingPage/LandingPageHeader/LandingPageHeader'
import LandingPageFooter from '@/Components/landingPage/LandingPageFooter/LandingPageFooter'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message })
    setSubmitted(true)
  }

  return (
    <div className={styles.container}>
      <LandingPageHeader />
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        {submitted ? (
          <div className={styles.successMessage}>
            <h2>Thank you for your message!</h2>
            <p>We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        )}
      </main>
      <LandingPageFooter />
    </div>
  )
}