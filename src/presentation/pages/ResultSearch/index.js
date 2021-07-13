import React from 'react'
import { View } from 'react-native'

import { ContainerWithHeader, Text } from '../../styles/global'

import {
  Header,
  SearchBar,
  InputSearch,
  Filter,
  SwipeTypes,
  TypeSearch,
  ShowResult,
  CardResult,
  HeadResult,
  IconResult,
  ImageResult,
  InfoResult,
} from './styles'

import { hp } from '../../styles/global'

import { AntDesign } from '@expo/vector-icons'

import parintins from '../../../assets/images/parintins.jpeg'
import manaus from '../../../assets/images/manaus.jpeg'
import Lamp from '../../../assets/icons/oil-lamp.svg'
import LampCheck from '../../../assets/icons/lamp-search.svg'

const types = [
  { id: 0, name: 'Principais' },
  { id: 1, name: 'Festas' },
  { id: 2, name: 'Passeios' },
]

const partyList = [
  {
    id: 0,
    local: 'Parintins, Amazonas',
    name: 'Festival Folclórico',
    days: '26, 27 e 28 de junho',
    image: parintins,
    wish: true,
  },
  {
    id: 1,
    local: 'Manaus, Amazonas',
    name: 'Carnaboi',
    days: '13, 14 e 15 de fevereiro',
    image: manaus,
    wish: false,
  },
]

const ResultSearch = () => {
  const [activeType, setActiveType] = React.useState(1)

  return (
    <ContainerWithHeader>
      <Header>
        <SearchBar>
          <InputSearch
            onFocus={() => setShowTab('none')}
            placeholder="Digite sua busca"
            placeholderTextColor="#C1C1C1"
            value="Amazonas"
          />
          <AntDesign name="search1" size={hp('2.5%')} color="#B5B5B5" />
        </SearchBar>

        <Filter
          onPress={() => {
            setModalVisible(true)
          }}
        >
          <AntDesign name="filter" size={hp('2.5%')} color="#fff" />
        </Filter>
      </Header>

      <View>
        <SwipeTypes horizontal showsHorizontalScrollIndicator={false}>
          {types.map((item) => (
            <TypeSearch
              key={item.id}
              onPress={() => setActiveType(item.id)}
              active={item.id === activeType}
            >
              <Text
                small
                white={item.id === activeType}
                medium={item.id === activeType}
              >
                {item.name}
              </Text>
            </TypeSearch>
          ))}
        </SwipeTypes>
      </View>

      <ShowResult>
        {partyList.map((item) => (
          <CardResult key={item.id}>
            <ImageResult source={item.image} />
            <InfoResult>
              <HeadResult>
                <Text supersmall>{item.local}</Text>
                <IconResult>
                  {item.wish ? <LampCheck width={22} /> : <Lamp width={22} />}
                </IconResult>
              </HeadResult>
              <Text large bold style={{ marginTop: -2, maxWidth: 200 }}>
                {item.name}
              </Text>
              <Text supersmall style={{ color: '#3dbc77', marginTop: 4 }}>
                26, 27 e 28 de junho
              </Text>
              <Text supersmall style={{ alignSelf: 'flex-end', marginTop: 4 }}>
                Ver mais >
              </Text>
            </InfoResult>
          </CardResult>
        ))}
      </ShowResult>
    </ContainerWithHeader>
  )
}

export default ResultSearch
