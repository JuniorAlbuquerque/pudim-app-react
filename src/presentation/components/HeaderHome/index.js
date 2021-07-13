import React, { useState } from 'react'
import {
  Container,
  TextHeader,
  FilterButtons,
  FilterButton,
  TextFilter,
} from './styles'

const HeaderHome = () => {
  const [filterActive, setFilterActive] = useState(0)

  const filters = [
    {
      id: 0,
      text: 'Para você',
    },
    {
      id: 1,
      text: 'Hoje',
    },
    {
      id: 2,
      text: 'Seguindo',
    },
  ]

  const navFilter = filters.map((filt) => {
    return (
      <FilterButton
        key={filt.id}
        onPress={() => setFilterActive(filt.id)}
        active={filterActive === filt.id ? true : false}
        style={{
          marginHorizontal: filt.id === 1 ? 8 : 0,
        }}
      >
        <TextFilter>{filt.text}</TextFilter>
      </FilterButton>
    )
  })

  return (
    <Container>
      <TextHeader>Olá, Júnior</TextHeader>
      <FilterButtons>{navFilter}</FilterButtons>
    </Container>
  )
}

export default HeaderHome
