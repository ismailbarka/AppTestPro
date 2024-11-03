"use client"
import { useState } from "react";
import styles from './DeveloperView.module.css'
import Image from "next/image";
import {dummyStats} from '../../../../data'
import SubmitNewApp from "./SubmitNewApp/SubmitNewApp";

export default function  DeveloperView (){
        const [appName, setAppName] = useState<string>("");
        const [appDesc, setAppDesc] = useState<string>("");
        const [reward, setReward] = useState<number>(0);
        const [appIcon, setAppIcon] = useState<File | null>(null)
        const [appIconPreview, setAppIconPreview] = useState<string | null>(null)
        const [screenshots, setScreenshots] = useState<File[]>([])
        const [screenshotPreviews, setScreenshotPreviews] = useState<string[]>([])
        const [isSubmitting, setIsSubmitting] = useState(false);
      
        const handleAppIconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setAppIcon(file)
            const reader = new FileReader()
            reader.onloadend = () => {
              setAppIconPreview(reader.result as string)
            }
            reader.readAsDataURL(file)
          }
        }
      
        const handleScreenshotsUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
            const files = Array.from(e.target.files)
            setScreenshots(files)
            const previews = files.map(file => URL.createObjectURL(file))
            setScreenshotPreviews(previews)
          }
        }
      
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          setIsSubmitting(true);
        }
         
        return (
          <div className={styles.developerView}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Add New App</h2>
              <p className={styles.cardDescription}>Submit a new app for testing</p>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="appName" className={styles.label}>App Name</label>
                  <input onChange={(e) => setAppName(e.target.value)} id="appName" type="text" placeholder="My Awesome App" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="appDescription" className={styles.label}>Description</label>
                  <textarea onChange={(e) => setAppDesc(e.target.value)} id="appDescription" placeholder="A brief description of your app" required className={styles.textarea}></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="appIcon" className={styles.label}>App Icon</label>
                  <input id="appIcon" type="file" accept="image/*" required className={styles.fileInput} onChange={handleAppIconUpload} />
                  {appIconPreview && (
                    <Image src={appIconPreview} alt="App icon preview" width={100} height={100} className={styles.iconPreview} />
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="appScreenshots" className={styles.label}>Screenshots (up to 5)</label>
                  <input id="appScreenshots" type="file" accept="image/*" multiple required className={styles.fileInput} onChange={handleScreenshotsUpload} />
                  <div className={styles.screenshotPreviews}>
                    {screenshotPreviews.map((preview, index) => (
                      <Image key={index} src={preview} alt={`Screenshot ${index + 1}`} width={100} height={100} className={styles.screenshotPreview} />
                    ))}
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="appReward" className={styles.label}>Reward (in coins)</label>
                  <input onChange={(e) => setReward(Number(e.target.value))} id="appReward" type="number" min="1" placeholder="100" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="appReward" className={styles.label}>days: </label>
                  <input onChange={(e) => setReward(Number(e.target.value))} id="appReward" type="number" min="1" placeholder="14"  required className={styles.input} />
                </div>
                <button type="submit" className={styles.submitButton}>Submit App</button>
              </form>
            </div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>App Statistics</h2>
              <p className={styles.cardDescription}>View key metrics for your submitted apps</p>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>App Name</th>
                    <th>Number of Testers</th>
                    <th>Completion Rate</th>
                    {/* <th>Rating</th> */}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyStats.map((stat, index) => (
                    <tr key={index}>
                      <td>
                        <div className={styles.appNameWithIcon}>
                          <Image src={stat.icon} alt={`${stat.appName} icon`} width={40} height={40} className={styles.appIcon} />
                          <span>{stat.appName}</span>
                        </div>
                      </td>
                      <td>{stat.testers}</td>
                      <td>{stat.completionRate}</td>
                      {/* <td><StarRating  rating={stat.rating} /></td> */}
                      <td>
                        <button className={styles.reviewTestButton}>Review Tests</button>
                        {/* <ReportButton role="developer" appName={stat.appName} /> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {isSubmitting && <SubmitNewApp setIsSubmitting={setIsSubmitting} appIcon={appIcon} appIconPreview={appIconPreview} screenshots={screenshots} screenshotPreviews={screenshotPreviews} appName={appName} appDesc={appDesc} reward={reward} />}
          </div>
        )
      
}