'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import LandingPageHeader from '@/Components/landingPage/LandingPageHeader/LandingPageHeader'
import LandingPageFooter from '@/Components/landingPage/LandingPageFooter/LandingPageFooter'
import LoginSingUpHeader from '@/Components/LoginSingUpHeader/LoginSingUpHeader'
import googleLogo from '../../../assets/google.png'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login submitted:', { email, password })
  }

  const handleGoogleLogin = () => {
    console.log('Google login initiated')
    // Implement Google login logic here
  }

  return (
    <div className={styles.container}>
      <LoginSingUpHeader />
      <main className={styles.main}>
        <div className={styles.formSection}>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Log in to your AppTestPro account</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                placeholder='email@example.com'
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                placeholder='*********'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.submitButton}>Log In</button>
          </form>
          <div className={styles.divider}>
            <span>OR</span>
          </div>
          <button onClick={handleGoogleLogin} className={styles.googleButton}>
            <Image src={googleLogo} alt="Google" width={20} height={20} />
            Log in with Google
          </button>
          <p className={styles.signupPrompt}>
            Don't have an account? <Link href="/auth/signup" className={styles.signupLink}>Sign up</Link>
          </p>
        </div>
      </main>
      <LandingPageFooter />
    </div>
  )
}