'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { Star, MessageCircle, Bell, Settings, LogOut } from 'lucide-react'
import imageAvatar from '../../../assets/avatar.jpeg'
import editImage from '../../../assets/edit.svg'

// Dummy data
const testerData = {
  name: 'John Doe',
  avatar: imageAvatar,
  role: 'Tester',
  joinDate: 'January 2023',
  testedApps: [
    { name: 'SuperApp', rating: 4, reward: 100, date: '2023-05-15' },
    { name: 'FitTrack', rating: 3, reward: 75, date: '2023-06-02' },
    { name: 'BrainBoost', rating: 5, reward: 150, date: '2023-06-20' },
  ],
  totalEarnings: 325,
  completedTests: 15,
  averageRating: 4.2,
  recentActivity: [
    { type: 'test', app: 'MindMaster', date: '2023-06-25' },
    { type: 'payout', amount: 200, date: '2023-06-23' },
    { type: 'badge', name: 'Super Tester', date: '2023-06-21' },
  ],
  badges: ['Quick Responder', 'Bug Hunter', 'Super Tester'],
}

const developerData = {
  name: 'Jane Smith',
  avatar: imageAvatar,
  role: 'Developer',
  joinDate: 'December 2022',
  publishedApps: [
    { name: 'SuperApp', avgRating: 4.2, totalTesters: 15, totalBugs: 7, status: 'Active' },
    { name: 'FitTrack', avgRating: 3.8, totalTesters: 8, totalBugs: 3, status: 'Completed' },
  ],
  totalApps: 2,
  activeTests: 1,
  totalBugsFound: 10,
  recentActivity: [
    { type: 'newTester', app: 'SuperApp', date: '2023-06-26' },
    { type: 'bugFixed', app: 'FitTrack', date: '2023-06-24' },
    { type: 'newReview', app: 'SuperApp', date: '2023-06-22' },
  ],
  earnings: 1500,
}

export default function ProfilePage() {
  const [userType, setUserType] = useState<'tester' | 'developer'>('tester')

  return (
    <div className={styles.container}>
      
      <main className={styles.content}>
        {userType === 'tester' ? <TesterProfile data={testerData} /> : <DeveloperProfile data={developerData} />}
      </main>
    </div>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.starRating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${styles.star} ${star <= rating ? styles.starFilled : ''}`}
          size={16}
        />
      ))}
    </div>
  )
}

function TesterProfile({ data }: { data: typeof testerData }) {
  const [editingName, setEditingName] = useState(false)
  const [editingRole, setEditingRole] = useState(false)
  const [name, setName] = useState(data.name)
  const [role, setRole] = useState(data.role)

  const handleNameSave = () => {
    setEditingName(false)
    // Optionally add logic to save the updated name to a server or state
  }

  const handleRoleSave = () => {
    setEditingRole(false)
    // Optionally add logic to save the updated role to a server or state
  }

  return (
    <div className={styles.profile}>
      <header className={styles.profileHeader}>
        <Image src={data.avatar} alt={data.name} width={100} height={100} className={styles.avatar} />
        <div className={styles.profileInfo}>
          <div className={styles.nameContainer}>
            {!editingName ? (
              <h1 className={styles.profileName}>{name}</h1>
            ) : (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={handleNameSave}
                autoFocus
                className={styles.profileNameInput}
              />
            )}
            <Image
              onClick={() => setEditingName(true)}
              className={styles.editButton}
              src={editImage}
              alt="edit name"
              width={32}
              height={32}
            />
          </div>
          <div className={styles.nameContainer}>
            {!editingRole ? (
              <p className={styles.profileRole}>{role}</p>
            ) : (
              <input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                onBlur={handleRoleSave}
                autoFocus
                className={styles.profileRoleInput}
              />
            )}
            <Image
              onClick={() => setEditingRole(true)}
              className={styles.editButton}
              src={editImage}
              alt="edit role"
              width={17}
              height={17}
            />
          </div>
          <p className={styles.profileJoinDate}>Joined {data.joinDate}</p>
        </div>
      </header>
      <section className={styles.statsSection}>
        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>Total Earnings</h3>
          <p className={styles.statValue}>{data.totalEarnings} coins</p>
        </div>
        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>Completed Tests</h3>
          <p className={styles.statValue}>{data.completedTests}</p>
        </div>
        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>Average Rating</h3>
          <p className={styles.statValue}>{data.averageRating.toFixed(1)}</p>
          <StarRating rating={data.averageRating} />
        </div>
      </section>
      <section className={styles.recentActivitySection}>
        <h2 className={styles.sectionTitle}>Recent Activity</h2>
        <ul className={styles.activityList}>
          {data.recentActivity.map((activity, index) => (
            <li key={index} className={styles.activityItem}>
              {activity.type === 'test' && (
                <>Tested app: {activity.app} on {activity.date}</>
              )}
              {activity.type === 'payout' && (
                <>Received payout: {activity.amount} coins on {activity.date}</>
              )}
              {activity.type === 'badge' && (
                <>Earned badge: {activity.name} on {activity.date}</>
              )}
            </li>
          ))}
        </ul>
      </section>
      {/* <section className={styles.badgesSection}>
        <h2 className={styles.sectionTitle}>Badges</h2>
        <div className={styles.badgeList}>
          {data.badges.map((badge, index) => (
            <span key={index} className={styles.badge}>{badge}</span>
          ))}
        </div>
      </section> */}
      <section className={styles.testedAppsSection}>
        <h2 className={styles.sectionTitle}>Tested Apps</h2>
        <ul className={styles.appList}>
          {data.testedApps.map((app, index) => (
            <li key={index} className={styles.appItem}>
              <h3 className={styles.appName}>{app.name}</h3>
              <p className={styles.appDate}>Tested on: {app.date}</p>
              <StarRating rating={app.rating} />
              <p className={styles.appReward}>Reward: {app.reward} coins</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

 