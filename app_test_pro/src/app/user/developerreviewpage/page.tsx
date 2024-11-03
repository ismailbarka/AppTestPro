'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import screenshotImage from '../../../assets/avatar.jpeg'
import {dummySubmissions} from '../../../../data'
import SubmissionCard from '../../../Components/SubmissionCard/SubmissionCard'


// Dummy data for tester submissions


export default function DeveloperReviewPage() {
  const [submissions, setSubmissions] = useState(dummySubmissions)

  const handleValidate = (id: number) => {
    setSubmissions(submissions.filter(submission => submission.id !== id))
    // In a real app, you would send this validation to your backend
    console.log(`Validated submission ${id}`)
  }

  const handleReject = (id: number) => {
    setSubmissions(submissions.filter(submission => submission.id !== id))
    // In a real app, you would send this rejection to your backend
    console.log(`Rejected submission ${id}`)
  }

  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <h1 className={styles.title}>Developer Review Dashboard</h1>
        <div className={styles.submissionsContainer}>
          {submissions.map((submission) => (
            <SubmissionCard
              key={submission.id}
              submission={submission}
              onValidate={() => handleValidate(submission.id)}
              onReject={() => handleReject(submission.id)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

