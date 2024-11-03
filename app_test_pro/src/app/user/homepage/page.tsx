'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { Star, AlertTriangle } from 'lucide-react'
import avatarImage from '../../../assets/avatar.jpeg'
import TesterView from '../../../Components/HomePage/TesterView/TesterView'
import {dummyStats, popularPhones, countries} from '../../../../data'
import DeveloperView from '@/Components/HomePage/DeveloperView/DeveloperView'

export default function HomePage() {
  const [isFirstLogin, setIsFirstLogin] = useState(true)
  const [userRoleTmp, setUserRoleTmp] = useState<'developer' | 'tester' | null>(null)
  const [userRole, setUserRole] = useState<'developer' | 'tester' | null>(null)
  const [name, setName] = useState('');
  const [phoneModel, setPhoneModel] = useState('')
  const [country, setCountry] = useState('')
  const [avatar, setAvatar] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const role = "tester";
  useEffect(() => {
    setIsFirstLogin(true)
  }, [])

  const handleRoleSelection = (e: React.FormEvent) => {
    e.preventDefault()
    setUserRole(userRoleTmp)
    setIsFirstLogin(false)
    // Here you would typically send the user data to your backend
    console.log('User data:', { name, phoneModel, country, userRole: userRoleTmp, avatar })
  }

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setAvatar(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {role === 'developer' ? (
          <DeveloperView />
        ) : role === 'tester' ? (
          <TesterView />
        ) : (
          <div className={styles.welcome}>
            <h2 className={styles.welcomeTitle}>Welcome to AppTestPro</h2>
            <p className={styles.welcomeDescription}>Please select your role to continue.</p>
          </div>
        )}
      </main>

      {/* {isFirstLogin && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>Welcome to AppTestPro</h2>
            <p className={styles.modalDescription}>
              Please fill in your information and select your role to get started.
            </p>
            <form className={styles.modalForm} onSubmit={handleRoleSelection}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input 
                  id="name" 
                  type="text"
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="avatar" className={styles.label}>Avatar</label>
                <input 
                  id="avatar" 
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className={styles.fileInput}
                />
                {avatarPreview && (
                  <Image src={avatarPreview} alt="Avatar preview" width={100} height={100} className={styles.avatarPreview} />
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="country" className={styles.label}>Country</label>
                <select 
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className={styles.select}
                >
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div className={styles.roleSelection}>
                <label className={styles.radioLabel}>
                  <input 
                    type="radio" 
                    name="role" 
                    value="developer" 
                    onChange={() => setUserRoleTmp("developer")} 
                    className={styles.radioInput}
                  />
                  <span className={styles.radioCustom}></span>
                  Developer
                </label>
                <label className={styles.radioLabel}>
                  <input 
                    type="radio" 
                    name="role" 
                    value="tester" 
                    onChange={() => setUserRoleTmp("tester")} 
                    className={styles.radioInput}
                  />
                  <span className={styles.radioCustom}></span>
                  Tester
                </label>
              </div>
              {userRoleTmp === "tester" && (
                <div className={styles.formGroup}>
                  <label htmlFor="phoneModel" className={styles.label}>Phone Model</label>
                  <select 
                    id="phoneModel"
                    value={phoneModel}
                    onChange={(e) => setPhoneModel(e.target.value)}
                    required
                    className={styles.select}
                  >
                    <option value="">Select your phone model</option>
                    {popularPhones.map((model) => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>
              )}
              <button type="submit" className={styles.submitButton}>Get Started</button>
            </form>
          </div>
        </div>
      )} */}
    </div>
  )
}

// function StarRating({ rating }: { rating: number }) {
//   return (
//     <div className={styles.starRating} aria-label={`Rating: ${rating} out of 5 stars`}>
//       {[1, 2, 3, 4, 5].map((star) => (
//         <Star
//           key={star}
//           className={`${styles.star} ${star <= rating ? styles.starFilled : ''}`}
//           aria-hidden="true"
//         />
//       ))}
//     </div>
//   )
// }





