'use client'

import { useState, useEffect } from 'react'
import styles from './TesterView.module.css'
import Image from 'next/image'
import Link from 'next/link'
import avatarImage from '../../../assets/avatar.jpeg'
import screenshotImage from '../../../assets/1.png'

const dummyApps = [
  { id: 1, name: 'SuperApp', description: 'A revolutionary task management app', reward: 100, icon: avatarImage, screenshots: [screenshotImage, screenshotImage], rating: 4.5, days: 14 },
  { id: 2, name: 'FitTrack', description: 'Fitness tracking made easy', reward: 75, icon: avatarImage, screenshots: [screenshotImage], rating: 3.8, days: 14 },
  { id: 3, name: 'BrainBoost', description: 'Improve your memory and cognitive skills', reward: 150, icon: avatarImage, screenshots: [screenshotImage, screenshotImage, screenshotImage], rating: 4.2, days: 14 },
]

const dummyPendingApps = [
  { id: 4, name: 'MindMap', description: 'Visual thinking and learning tool', reward: 120, icon: avatarImage, lastReminder: new Date(Date.now() - 25 * 60 * 60 * 1000) },
  { id: 5, name: 'EcoTracker', description: 'Monitor your carbon footprint', reward: 90, icon: avatarImage, lastReminder: new Date(Date.now() - 26 * 60 * 60 * 1000) },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.starRating} aria-label={`Rating: ${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${styles.star} ${star <= rating ? styles.starFilled : ''}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function TesterView() {
  const [selectedAppToTest, setSelectedAppToTest] = useState({
    name: '',
    icon: '',
    desc: '',
    reward: '',
    days: '',
    avatar: '',
    screenshots: [],
  });
  const [pendingApps, setPendingApps] = useState(dummyPendingApps);

  const handleStartTesting = (app) => {
    setSelectedAppToTest({
      name: app.name,
      icon: app.icon,
      desc: app.description,
      reward: app.reward,
      days: app.days,
      screenshots: app.screenshots
    });
  }

  const handleSendReminder = (appId) => {
    setPendingApps(prevApps => 
      prevApps.map(app => 
        app.id === appId ? {...app, lastReminder: new Date()} : app
      )
    );
  }

  const handleDeleteApp = (appId) => {
    setPendingApps(prevApps => prevApps.filter(app => app.id !== appId));
  }

  const canSendReminder = (lastReminder) => {
    const now = new Date();
    const timeDiff = now.getTime() - lastReminder.getTime();
    const hoursDiff = timeDiff / (1000 * 3600);
    return hoursDiff >= 24;
  }

  return (
    <div className={styles.testerView}>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Available Apps for Testing</h2>
        <p className={styles.cardDescription}>Choose an app to start testing</p>
        <div className={styles.appList}>
          {dummyApps.map((app) => (
            <div key={app.id} className={styles.appCard}>
              <div className={styles.titleContainer}>
                <Image src={app.icon} alt={`${app.name} icon`} width={64} height={64} className={styles.appIcon} />
                <h3 className={styles.appName}>{app.name}</h3>
              </div>
              <p className={styles.appDescription}>{app.description}</p>
              <p className={styles.appReward}>Reward: {app.reward} coins</p>
              <p className={styles.appReward}>Test days: {app.days} </p>
              <StarRating rating={app.rating} />
              <div className={styles.appActions}>
                <button className={styles.startTestingButton} onClick={() => handleStartTesting(app)}>Start testing</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Pending Apps</h2>
        <p className={styles.cardDescription}>Apps you're currently testing</p>
        <div className={styles.appList}>
          {pendingApps.map((app) => (
            <div key={app.id} className={styles.appCard}>
              <div className={styles.titleContainer}>
                <Image src={app.icon} alt={`${app.name} icon`} width={64} height={64} className={styles.appIcon} />
                <h3 className={styles.appName}>{app.name}</h3>
              </div>
              <p className={styles.appDescription}>{app.description}</p>
              <p className={styles.appReward}>Reward: {app.reward} coins</p>
              <div className={styles.appActions}>
                <button 
                  className={styles.startTestingButton} 
                  onClick={() => handleSendReminder(app.id)}
                  disabled={!canSendReminder(app.lastReminder)}
                >
                  Send Reminder
                </button>
                <button className={styles.cancelButton} onClick={() => handleDeleteApp(app.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAppToTest.name && 
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.nameAndIcon}>
              <Image
                src={selectedAppToTest.icon}
                alt='icon'
                width={50}
                height={50}
                className={styles.icon}
              />
              <h2 className={styles.modalTitle}>{selectedAppToTest.name}</h2>
            </div>
            <p className={styles.modalDescription}>
              {selectedAppToTest.desc}
            </p>
            <form className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label htmlFor="screenshots" className={styles.label}>Screenshots:</label>
                <div className={styles.screenshotsContainer}>
                  {selectedAppToTest.screenshots.map((item, index) => (
                    <Image className={styles.screenshot} key={index} alt="screenshot" src={item} width={100} height={150} />
                  ))}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="Reward" className={styles.label}>Reward</label>
                <input disabled={true} value={selectedAppToTest.reward} className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="Days" className={styles.label}>Days</label>
                <input disabled={true} value={selectedAppToTest.days} className={styles.input} />
              </div>
              <div className={styles.buttonsContainer}>
                <button type="button" className={styles.cancelButton} onClick={() => setSelectedAppToTest({
                  name: '',
                  icon: '',
                  desc: '',
                  reward: '',
                  days: '',
                  avatar: '',
                  screenshots: [],
                })}>Cancel</button>
                <button type="button" className={styles.submitButton} onClick={() => setSelectedAppToTest({
                  name: '',
                  icon: '',
                  desc: '',
                  reward: '',
                  days: '',
                  avatar: '',
                  screenshots: [],
                })}>Start testing</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  )
}