'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import LandingPageHeader from '@/Components/landingPage/LandingPageHeader/LandingPageHeader'
import LandingPageFooter from '@/Components/landingPage/LandingPageFooter/LandingPageFooter'
import LoginSingUpHeader from '@/Components/LoginSingUpHeader/LoginSingUpHeader'
import googleLogo from '../../../assets/google.png'


const phoneModels = ['Google Pixel 6', 'Google Pixel 7', 'OnePlus 9', 'OnePlus 10']

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState<'developer' | 'tester' | ''>('')
  const [phoneModel, setPhoneModel] = useState('')
  const [step, setStep] = useState(1)
  const [verificationCode, setVerificationCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    console.log('Form submitted:', { name, email, role, phoneModel })
    setStep(2)
  }

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Verification code submitted:', verificationCode)
    setStep(3)
  }

  const handleGoogleSignUp = () => {
    console.log('Google sign up initiated')
    // Implement Google sign up logic here
  }

  return (
    <div className={styles.container}>
      <LoginSingUpHeader />
      <main className={styles.main}>
        <div className={styles.formSection}>
          <h1 className={styles.title}>Join AppTestPro</h1>
          <p className={styles.subtitle}>Connect with app developers and testers</p>
          {step === 1 && (
            <>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    placeholder='John Doe'
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
                <div className={styles.formGroup}>
                  <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                  <input
                    placeholder='*********'
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as 'developer' | 'tester')}
                    required
                    className={styles.select}
                  >
                    <option value="">Select a role</option>
                    <option value="developer">Developer</option>
                    <option value="tester">Tester</option>
                  </select>
                </div>
                {role === 'tester' && (
                  <div className={styles.formGroup}>
                    <label htmlFor="phoneModel" className={styles.label}>Phone Model</label>
                    <select
                      id="phoneModel"
                      value={phoneModel}
                      onChange={(e) => setPhoneModel(e.target.value)}
                      required
                      className={styles.select}
                    >
                      <option value="">Select a phone model</option>
                      {phoneModels.map((model) => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </select>
                  </div>
                )}
                <button type="submit" className={styles.submitButton}>Sign Up</button>
              </form>
              <div className={styles.divider}>
                <span>OR</span>
              </div>
              <button onClick={handleGoogleSignUp} className={styles.googleButton}>
                <Image src={googleLogo} alt="Google" width={20} height={20} />
                Sign up with Google
              </button>
            </>
          )}
          {step === 2 && (
            <form className={styles.form} onSubmit={handleVerification}>
              <h2 className={styles.subtitle}>Verify Your Email</h2>
              <p>We've sent a verification code to your email. Please enter it below:</p>
              <div className={styles.formGroup}>
                <label htmlFor="verificationCode" className={styles.label}>Verification Code</label>
                <input
                  type="text"
                  id="verificationCode"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <button type="submit" className={styles.submitButton}>Verify</button>
            </form>
          )}
          {step === 3 && (
            <div className={styles.successMessage}>
              <h2>Registration Successful!</h2>
              <p>Your email has been verified. You can now log in to your account.</p>
              <Link href="/auth/login" className={styles.loginLink}>Go to Login</Link>
            </div>
          )}
          <p className={styles.loginPrompt}>
            {/* Already have an account? <Link href="/auth/login" className={styles.loginLink}>Log in</Link> */}
          </p>
        </div>
      </main>
      <LandingPageFooter />
    </div>
  )
}