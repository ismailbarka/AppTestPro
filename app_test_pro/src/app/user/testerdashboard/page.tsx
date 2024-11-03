'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import avatarImage from '../../../assets/avatar.jpeg'
import screen1 from '../../../assets/1.png'

// Dummy data for assignments
const dummyAssignments = [
  {
    id: 1,
    appName: 'SuperApp',
    description: 'A revolutionary task management app',
    instructions: 'Please test the task creation, editing, and completion features. Pay special attention to the drag-and-drop functionality.',
    lastSubmission: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    iconName: 'superapp-icon.png',
    screenshots: ['superapp-screenshot1.png', 'superapp-screenshot2.png']
  },
  {
    id: 2,
    appName: 'FitTrack',
    description: 'Fitness tracking made easy',
    instructions: 'Focus on testing the workout logging feature and the integration with popular fitness devices.',
    lastSubmission: new Date(Date.now() - 23 * 60 * 60 * 1000), // 23 hours ago
    iconName: 'fittrack-icon.png',
    screenshots: ['fittrack-screenshot1.png', 'fittrack-screenshot2.png', 'fittrack-screenshot3.png']
  }
]

// Dummy data for pending apps
const dummyPendingApps = [
  {
    id: 3,
    appName: 'MindMap',
    description: 'Visual thinking and learning tool',
    lastReminder: new Date(Date.now() - 25 * 60 * 60 * 1000), // 25 hours ago
  },
  {
    id: 4,
    appName: 'EcoTracker',
    description: 'Monitor your carbon footprint',
    lastReminder: new Date(Date.now() - 26 * 60 * 60 * 1000), // 26 hours ago
  }
]

function CountdownTimer({ lastSubmission }: { lastSubmission: Date }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(lastSubmission))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(lastSubmission))
    }, 1000)

    return () => clearInterval(timer)
  }, [lastSubmission])

  function calculateTimeLeft(lastSubmission: Date) {
    const difference = 24 * 60 * 60 * 1000 - (Date.now() - lastSubmission.getTime())
    
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  const { hours, minutes, seconds } = timeLeft

  const isNearDeadline = hours === 0 && minutes < 30

  return (
    <div className={`${styles.countdownTimer} ${isNearDeadline ? styles.nearDeadline : ''}`}>
      {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  )
}

export default function TesterDashboard() {
  const [pendingApps, setPendingApps] = useState(dummyPendingApps)

  const handleSendReminder = (appId: number) => {
    setPendingApps(prevApps =>
      prevApps.map(app =>
        app.id === appId ? { ...app, lastReminder: new Date() } : app
      )
    )
  }

  const handleDeleteApp = (appId: number) => {
    setPendingApps(prevApps => prevApps.filter(app => app.id !== appId))
  }

  const canSendReminder = (lastReminder: Date) => {
    const now = new Date()
    const timeDiff = now.getTime() - lastReminder.getTime()
    const hoursDiff = timeDiff / (1000 * 60 * 60)
    return hoursDiff >= 24
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Tester Dashboard</h1>
        <div className={styles.assignmentsContainer}>
          {dummyAssignments.map((assignment) => (
            <AppTestingCard key={assignment.id} assignment={assignment} />
          ))}
        </div>
        <h2 className={styles.title}>Pending Apps</h2>
        <div className={styles.assignmentsContainer}>
          {pendingApps.map((app) => (
            <div key={app.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <Image 
                  src={avatarImage} 
                  alt={`${app.appName} icon`}
                  width={48}
                  height={48}
                  className={styles.appIcon}
                />
                <h2 className={styles.cardTitle}>{app.appName}</h2>
              </div>
              <p className={styles.cardDescription}>{app.description}</p>
              <div className={styles.cardContent}>
                <div>
                  <h4 className={styles.sectionTitle}>Last Reminder:</h4>
                  <p>{app.lastReminder.toLocaleString()}</p>
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    onClick={() => handleSendReminder(app.id)}
                    disabled={!canSendReminder(app.lastReminder)}
                    className={styles.submitButton}
                  >
                    Send Reminder
                  </button>
                  <button
                    onClick={() => handleDeleteApp(app.id)}
                    className={styles.deleteApp}
                  >
                    Delete App
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

function AppTestingCard({ assignment }: { assignment: typeof dummyAssignments[0] }) {
  const [screenshots, setScreenshots] = useState<File[]>([])
  const [review, setReview] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newScreenshots = Array.from(e.target.files)
      setScreenshots([...screenshots, ...newScreenshots])
      
      // Create preview URLs for the new screenshots
      const newPreviewUrls = newScreenshots.map(file => URL.createObjectURL(file))
      setPreviewUrls([...previewUrls, ...newPreviewUrls])
    }
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the review and screenshots here
    console.log('Submitting review for', assignment.appName, ':', review)
    console.log('Screenshots:', screenshots)
    // Reset form and lock submission
    setScreenshots([])
    setReview('')
    setPreviewUrls([])
    setIsSubmitted(true)
  }

  useEffect(() => {
    // Clean up the preview URLs when the component unmounts
    return () => {
      previewUrls.forEach(URL.revokeObjectURL)
    }
  }, [previewUrls])

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image 
          src={avatarImage} 
          alt={`${assignment.appName} icon`}
          width={48}
          height={48}
          className={styles.appIcon}
        />
        <h2 className={styles.cardTitle}>{assignment.appName}</h2>
      </div>
      <p className={styles.cardDescription}>{assignment.description}</p>
      <div className={styles.cardContent}>
        <div>
          <h4 className={styles.sectionTitle}>Testing Instructions:</h4>
          <p>{assignment.instructions}</p>
        </div>
        {/* <div>
          <h4 className={styles.sectionTitle}>App Screenshots:</h4>
          <div className={styles.screenshotGallery}>
            {assignment.screenshots.map((screenshot, index) => (
              <Image
                key={index}
                src={screen1}
                alt={`${assignment.appName} screenshot ${index + 1}`}
                width={100}
                height={200}
                className={styles.screenshot}
              />
            ))}
          </div>
        </div> */}
        <div>
          <h4 className={styles.sectionTitle}>
            {isSubmitted ? 'Time until next submission:' : 'Time remaining:'}
          </h4>
          <CountdownTimer lastSubmission={assignment.lastSubmission} />
        </div>
        {!isSubmitted ? (
          <form onSubmit={handleReviewSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor={`screenshots-${assignment.id}`} className={styles.label}>Upload Screenshots (max 5):</label>
              <input 
                id={`screenshots-${assignment.id}`} 
                type="file" 
                accept="image/*" 
                multiple 
                onChange={handleScreenshotUpload}
                className={styles.fileInput}
              />
              {screenshots.length > 0 && (
                <p className={styles.fileCount}>
                  {screenshots.length} file(s) selected
                </p>
              )}
              {previewUrls.length > 0 && (
                <div className={styles.screenshotGallery}>
                  {previewUrls.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt={`Uploaded screenshot ${index + 1}`}
                      width={100}
                      height={200}
                      className={styles.screenshot}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor={`review-${assignment.id}`} className={styles.label}>Daily Review:</label>
              <textarea 
                id={`review-${assignment.id}`} 
                placeholder="Enter your daily review here..." 
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className={styles.textarea}
              />
            </div>
            <button type="submit" className={styles.submitButton}>Submit Review</button>
          </form>
        ) : (
          <div className={styles.alert}>
            <h4 className={styles.alertTitle}>Review Submitted</h4>
            <p className={styles.alertDescription}>
              Your daily review has been submitted. You can submit another review when the timer reaches zero.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}