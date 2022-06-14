import type { NextPage } from 'next'
import { Dishe, PageTemplate } from '@/components'

const Home: NextPage = () => {
  return (
    <PageTemplate>
      <h1>Encontre opções em Delivery próximos a você.</h1>
      <h2>
        Encontre seu novo delivery favorito, milhares de opções a um clique
      </h2>
      <Dishe />
    </PageTemplate>
  )
}

export default Home
