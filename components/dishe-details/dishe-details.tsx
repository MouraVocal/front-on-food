import Styles from './dishe-details.module.css'
import { DisheDetailsProps } from './types'
import { IconCategory, IconReviews, IconDelivery } from '@/icons'

export function DisheDetails({ title, type, subtitle }: DisheDetailsProps) {
  const Icon =
    type === 'category'
      ? IconCategory
      : type === 'reviews'
      ? IconReviews
      : IconDelivery
  return (
    <div className={Styles.detail}>
      <div className={Styles.icon}>
        <Icon />
      </div>
      {subtitle && <div className={Styles.subtitle}>{subtitle}</div>}
      {title}
    </div>
  )
}
