'use client'
import Image from "next/image"
import styles from './SubmissionCard.module.css'
import screenshotImage from '../../assets/1.png'
import Link from "next/link"

interface Submission {
    id: number
    testerName: string
    appName: string
    review: string
    screenshots: string[]
    submissionDate: Date
  }
  
  interface SubmissionCardProps {
    submission: Submission
    onValidate: () => void
    onReject: () => void
  }
  
export default  function SubmissionCard({ submission, onValidate, onReject }: SubmissionCardProps) {
    return (
      <div className={styles.card}>
        <div className={styles.titlecontainer}>
        <Image 
          src={screenshotImage} 
          alt={`icon`} 
          width={50} 
          height={50}
          className={styles.icon}
        />
          <h2 className={styles.cardTitle}>{submission.appName} - Review by {submission.testerName}</h2>
        </div>
        <p className={styles.submissionDate}>
          Submitted on: {submission.submissionDate.toLocaleString()} by: <Link className={styles.testerLink} href="/user/profilepage">Ismail Barka</Link>
        </p>
        <div className={styles.reviewText}>
          <h3 className={styles.sectionTitle}>Review:</h3>
          <p>{submission.review}</p>
        </div>
        <div className={styles.screenshots}>
          <h3 className={styles.sectionTitle}>Screenshots:</h3>
          <div className={styles.screenshotGrid}>
            {submission.screenshots.map((screenshot, index) => (
              <div key={index} className={styles.screenshotWrapper}>
                <Image 
                  src={screenshotImage} 
                  alt={`Screenshot ${index + 1}`} 
                  width={150} 
                  height={200} 
                  className={styles.screenshott}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.actions}>
          <button onClick={onValidate} className={`${styles.button} ${styles.validateButton}`}>
            Validate
          </button>
          <button onClick={onReject} className={`${styles.button} ${styles.rejectButton}`}>
            Reject
          </button>
        </div>
      </div>
    )
  }