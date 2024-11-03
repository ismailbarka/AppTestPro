import Image from "next/image";
import styles from './SubmitNewApp.module.css'

export default function SubmitNewApp({appIcon, appIconPreview, screenshots, screenshotPreviews, appName, appDesc, reward, setIsSubmitting}: {
    appIcon: File | null,
    appIconPreview: string | null,
    screenshots: File[],
    screenshotPreviews: string[],
    appName: string,
    appDesc: string,
    reward: number,
    setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>, 
  }) {
  
  
    const handleConfirm = () =>{
      console.log("confermed");
    }
  
    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Confirm App Submission</h2>
          <p className={styles.modalDescription}>
            Please review the details of your app submission:
          </p>
          <div className={styles.confirmationContent}>
            <p><strong>App Name:</strong> {appName}</p>
            <p><strong>Description:</strong> {appDesc}</p>
            <p><strong>Reward: {reward}</strong> coins</p>
            {appIconPreview && (
              <div>
                <p><strong>App Icon:</strong></p>
                <Image src={appIconPreview} alt="App icon" width={100} height={100} className={styles.iconPreview} />
              </div>
            )}
            {screenshotPreviews.length > 0 && (
              <div>
                <p><strong>Screenshots:</strong></p>
                <div className={styles.screenshotPreviews}>
                  {screenshotPreviews.map((preview, index) => (
                    <Image key={index} src={preview} alt={`Screenshot ${index + 1}`} width={100} height={150} className={styles.screenshotPreviewscreens} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={styles.modalActions}>
            <button className={styles.cancelButton} onClick={() => setIsSubmitting(false)}>Cancel</button>
            <button className={styles.confirmButton} onClick={handleConfirm}>Confirm Submission</button>
          </div>
        </div>
      </div>
    )
  }