import { DisheDetails } from '@/components'
import Styles from './dishe.module.css'

export function Dishe() {
  return (
    <div className={Styles.dishe}>
      <div className={Styles.wrapper}>image</div>
      <div>
        <div className={Styles.header}>
          <h2>Nome do produto</h2>
        </div>
        <div className={Styles.details}>
          <DisheDetails type="reviews" title="(208)" subtitle="4.5" />
          <DisheDetails type="category" title="Categoria" />
          <DisheDetails type="delivery" title="30 - 40min" />
        </div>
      </div>
    </div>
  )
}
