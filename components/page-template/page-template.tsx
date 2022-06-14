import { Footer, Header } from '@/components'
import { Props } from './types'

export function PageTemplate({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  )
}
