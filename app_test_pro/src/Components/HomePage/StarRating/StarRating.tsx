import { Star, AlertTriangle } from 'lucide-react'
import styles from './StarRating.module.css'
export default function StarRating({ rating }: { rating: number }) {
    return (
      <div className={styles.starRating} aria-label={`Rating: ${rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${styles.star} ${star <= rating ? styles.starFilled : ''}`}
            aria-hidden="true"
          />
        ))}
      </div>
    )
  }
  