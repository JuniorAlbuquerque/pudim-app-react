import React from 'react'

import Header from '../../components/HeaderHome'
import Posts from '../../components/Posts'

import { Container } from '../../styles/global'

function Home() {
  return (
    <Container nopading>
      <Header />
      <Posts />
    </Container>
  )
}

export default Home
