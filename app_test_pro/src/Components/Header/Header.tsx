'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import NotifImage from '../../assets/notification-bell.svg'
import avatar from '../../assets/avatar.jpeg'
import coinImage from '../../assets/coin.svg'

const rolee = "developer";

export default function Header() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const profileRef = useRef(null)
  const notificationRef = useRef(null)

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
    setIsNotificationsOpen(false)
  }

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen)
    setIsProfileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false)
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>AppTestPro</h1>
      </div>
      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        ☰
      </button>
      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <Link href="/user/homepage" className={styles.navLink}>Home</Link>
        <Link href={rolee === "developer" ? "/user/developerreviewpage" : "/user/testerdashboard"} className={styles.navLink}>My Apps</Link>
        <Link href="/user/profilepage" className={styles.navLink}>Profile</Link>
      </nav>
      <div className={styles.userInfo}>
        <div className={styles.notificationIcon} onClick={toggleNotifications} ref={notificationRef}>
          <Image src={NotifImage} alt="Notifications" width={24} height={24} />
          {isNotificationsOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownItem}>New notification 1</div>
              <div className={styles.dropdownItem}>New notification 2</div>
            </div>
          )}
        </div>
        <div className={styles.coinBalance}>
          <Image src={coinImage} alt="Coin" width={20} height={20} />
          <span>150</span>
        </div>
        <div className={styles.avatar} onClick={toggleProfileMenu} ref={profileRef}>
          <Image src={avatar} alt="User Avatar" width={32} height={32} />
          {isProfileMenuOpen && (
            <div className={styles.dropdown}>
              <Link href="/user/settings" className={styles.dropdownItem}>Settings</Link>
              <div className={styles.dropdownItem}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}