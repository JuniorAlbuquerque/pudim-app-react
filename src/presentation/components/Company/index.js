import React from 'react'
import { View } from 'react-native'

import { Container, Chip } from './styles'
import { Text } from '../../styles/global'

const offert = [
  { id: 0, name: 'Agitação', check: false },
  { id: 1, name: 'Sossego', check: false },
  { id: 2, name: 'Local Afastado', check: false },
  { id: 3, name: 'Praia', check: false },
  { id: 4, name: 'Lugar normalmente frio', check: false },
  { id: 5, name: 'Contato com a natureza', check: false },
  { id: 6, name: 'Lugar normalmente quente', check: false },
  { id: 7, name: 'Animais de fazenda', check: false },
]

const around = [
  { id: 0, name: 'Pizzaria', check: false },
  { id: 1, name: 'Churrascaria', check: false },
  { id: 2, name: 'Bares', check: false },
  { id: 3, name: 'Sorveteria', check: false },
  { id: 4, name: 'Choperia', check: false },
  { id: 5, name: 'Cinema', check: false },
  { id: 6, name: 'Estádio de futebol', check: false },
  { id: 7, name: 'Quadra de futebol', check: false },
]

const Company = () => {
  const [off, setOff] = React.useState(offert)
  const [aroundItem, setAround] = React.useState(around)

  const change = (id) => {
    const vect = [...off]
    const index = offert.findIndex((obj) => obj.id === id)

    const newData = vect.map((checkbox, i) =>
      i === index
        ? {
            ...checkbox,
            check: !checkbox.check,
          }
        : checkbox,
    )

    setOff(newData)
  }

  const changeAround = (id) => {
    const vect = [...aroundItem]
    const index = around.findIndex((obj) => obj.id === id)

    const newData = vect.map((checkbox, i) =>
      i === index
        ? {
            ...checkbox,
            check: !checkbox.check,
          }
        : checkbox,
    )

    setAround(newData)
  }

  const getItems = (initial, n) =>
    off.slice(initial, n).map((i) => {
      return (
        <Chip key={i.id} active={i.check} onPress={() => change(i.id)}>
          <Text supersmall medium white={i.check} style={{ width: 40 }}>
            {i.name}
          </Text>
        </Chip>
      )
    })

  const getAround = (initial, n) =>
    aroundItem.slice(initial, n).map((i) => {
      return (
        <Chip key={i.id} active={i.check} onPress={() => changeAround(i.id)}>
          <Text supersmall medium white={i.check} style={{ maxWidth: 40 }}>
            {i.name}
          </Text>
        </Chip>
      )
    })

  return (
    <Container>
      <Text small bold style={{ marginBottom: 4 }}>
        O que seu estabelecimento oferece
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 0,
          marginVertical: 4,
          justifyContent: 'space-between',
        }}
      >
        {getItems(0, 4)}
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 0,
          marginVertical: 4,
          justifyContent: 'space-between',
        }}
      >
        {getItems(4, 6)}
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 0,
          marginVertical: 4,
          justifyContent: 'space-between',
        }}
      >
        {getItems(6, 8)}
      </View>

      <Text small bold style={{ marginBottom: 4, marginTop: 10 }}>
        O que se oferece nos arredores do seu estabelecimento:
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 0,
          marginVertical: 4,
          justifyContent: 'space-between',
        }}
      >
        {getAround(0, 4)}
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 0,
          marginVertical: 4,
          justifyContent: 'space-between',
        }}
      >
        {getAround(4, 7)}
      </View>
    </Container>
  )
}

export default Company
