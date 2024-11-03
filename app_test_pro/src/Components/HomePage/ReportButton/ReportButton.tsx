"use client"
import { useState } from "react"
import { Star, AlertTriangle } from 'lucide-react'
import styles from './ReportButton.module.css'

export default function ReportButton({ role, appName }: { role: 'developer' | 'tester', appName: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const [reportReason, setReportReason] = useState('')
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log(`Report submitted for ${appName}: ${reportReason}`)
      setIsOpen(false)
      setReportReason('')
    }
  
    return (
      <>
        <button className={styles.reportButton} onClick={() => setIsOpen(true)}>
          <AlertTriangle className="w-4 h-4 mr-2" />
          Report
        </button>
        {isOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2 className={styles.modalTitle}>Report {role === 'developer' ? 'Tester' : 'App'}</h2>
              <p className={styles.modalDescription}>
                Please provide a reason for your report. We'll review it as soon as possible.
              </p>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="reason" className={styles.label}>Reason for report</label>
                  <textarea
                    id="reason"
                    value={reportReason}
                    onChange={(e) => setReportReason(e.target.value)}
                    placeholder="Describe the issue..."
                    required
                    className={styles.textarea}
                  />
                </div>
                <div className={styles.modalActions}>
                  <button type="button" className={styles.cancelButton} onClick={() => setIsOpen(false)}>Cancel</button>
                  <button type="submit" className={styles.submitButton}>Submit Report</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    )
  }