import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
} from 'react-native'

import { Checkbox } from 'react-native-paper'

import { useShowTab } from '../../../data/hooks/showTabs'

import { Container, Text, hp } from '../../styles/global'

import {
  Header,
  SearchBar,
  InputSearch,
  Filter,
  Buttons,
  ContentButton,
  Button,
  Content,
  Data,
  Image,
  Info,
  ApplyFilter,
} from './styles'

import { AntDesign, MaterialIcons, Fontisto } from '@expo/vector-icons'
import Dj from '../../../assets/icons/dj.svg'
import Museum from '../../../assets/icons/museum.svg'

import parintins from '../../../assets/images/parintins.jpeg'
import pf from '../../../assets/images/pf.jpg'
import manaus from '../../../assets/images/manaus.jpeg'

import Swiper from '../../components/Banner'
import { ScrollView } from 'react-native'

import { LogBox } from 'react-native'

import { imSearch, wish, wishAround } from '../../../data/tests/searchFilters'

function Search() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])

  const { setShowTab } = useShowTab()
  const [modalVisible, setModalVisible] = React.useState(false)
  const [dataSearchFilter, setDataSearchFilter] = React.useState(imSearch)
  const [dataWish, setDataWish] = React.useState(wish)
  const [dataWishAround, setDataWishAround] = React.useState(wishAround)
  const navigation = useNavigation()

  const itens = [
    {
      id: 0,
      name: 'Viagens',
      background: 'rgba(61, 188, 119, 0.21)',
      icon: <MaterialIcons name="airplanemode-on" size={28} color="#3DBC77" />,
    },
    {
      id: 1,
      name: 'Passeios',
      background: 'rgba(78, 181, 204, 0.27);',
      icon: <Fontisto name="sait-boat" size={24} color="#1B8DA6" />,
    },
    // {
    //   id: 2,
    //   name: 'Comida',
    //   background: 'rgba(225, 191, 103, 0.17);',
    //   icon: <MaterialIcons name="food-bank" size={38} color="#FFAD7E" />,
    // },
    // {
    //   id: 3,
    //   name: 'Festas',
    //   background: 'rgba(191, 55, 255, 0.1);',
    //   icon: <Dj />,
    // },
    // {
    //   id: 4,
    //   name: 'Cultura',
    //   background: 'rgba(20, 110, 130, 0.28);',
    //   icon: <Museum width={28} />,
    // },
    // {
    //   id: 5,
    //   name: 'Negócios',
    //   background: 'rgba(12, 0, 37, 0.19);',
    //   icon: <MaterialIcons name="business-center" size={32} color="#2F2E41" />,
    // },
  ]

  const change = (id, type) => {
    let vect = []

    if (type === 'around') {
      vect = [...dataWishAround]
    }

    if (type === 'wish') {
      vect = [...dataWish]
    }

    if (type === 'local') {
      vect = [...dataSearchFilter]
    }

    const index = wish.findIndex((obj) => obj.id === id)

    const newData = vect.map((checkbox, i) =>
      i === index
        ? {
            ...checkbox,
            checked: !checkbox.checked,
          }
        : checkbox,
    )

    if (type === 'around') {
      setDataWishAround(newData)
    }

    if (type === 'wish') {
      setDataWish(newData)
    }

    if (type === 'local') {
      setDataSearchFilter(newData)
    }
  }

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: 160 }}>
      <Checkbox
        status={item.checked ? 'checked' : 'unchecked'}
        onPress={() => change(item.id, item.type)}
        color="#22A45D"
      />
      <Text small style={{ width: 100 }}>
        {item.name}
      </Text>
    </View>
  )

  const renderSearchFilter = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: 140 }}>
      <Checkbox
        status={item.checked ? 'checked' : 'unchecked'}
        onPress={() => change(item.id, item.type)}
        color="#22A45D"
      />
      <Text small>{item.name}</Text>
    </View>
  )

  return (
    <Container nopading>
      <Header>
        <SearchBar>
          <InputSearch
            onFocus={() => setShowTab('none')}
            placeholder="Digite sua busca"
            placeholderTextColor="#C1C1C1"
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

      <Swiper />

      <View>
        <Buttons horizontal showsHorizontalScrollIndicator={false}>
          {itens.map((item) => (
            <ContentButton key={item.id}>
              <Button background={item.background}>{item.icon}</Button>
              <Text small medium>
                {item.name}
              </Text>
            </ContentButton>
          ))}
        </Buttons>
      </View>

      <Content>
        <Data>
          <Image source={parintins} />
          <Info
            style={{
              width: 0,
              flexGrow: 1,
            }}
          >
            <Text
              supersmall
              medium
              style={{
                color: '#116679',
                marginBottom: 4,
              }}
            >
              a 5km de você
            </Text>
            <Text bold style={{ marginBottom: 4 }}>
              Parintins, Amazonas
            </Text>
            <Text small style={{ textAlign: 'justify' }}>
              Conhecida mundialmente por sediar o Festival Folclórico de
              Parintins, considerado Patrimônio Cultural do Brasil.
            </Text>
          </Info>
        </Data>

        <Data>
          <Image source={pf} />
          <Info
            style={{
              width: 0,
              flexGrow: 1,
            }}
          >
            <Text
              supersmall
              medium
              style={{
                color: '#116679',
                marginBottom: 4,
              }}
            >
              a 10km de você
            </Text>
            <Text bold style={{ marginBottom: 4 }}>
              Presidente Figueiredo, Amazonas
            </Text>
            <Text small style={{ textAlign: 'justify' }}>
              Nasceu com vocação natural para o turismo. A Terra das Cachoeiras
              tem trilhas para caminhadas na selva, visita às cavernas, passeios
            </Text>
          </Info>
        </Data>

        <Data>
          <Image source={manaus} />
          <Info
            style={{
              width: 0,
              flexGrow: 1,
            }}
          >
            <Text
              supersmall
              medium
              style={{
                color: '#116679',
                marginBottom: 4,
              }}
            >
              a 8km de você
            </Text>
            <Text bold style={{ marginBottom: 4 }}>
              Manaus, Amazonas
            </Text>
            <Text small style={{ textAlign: 'justify' }}>
              A capital do vasto estado do Amazonas. Trata-se de um ponto de
              partida importante próximo à Floresta Amazônica
            </Text>
          </Info>
        </Data>
      </Content>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.centeredView}
          onPress={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <ScrollView nestedScrollEnabled>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                  }}
                  onPress={() => {
                    setModalVisible(!modalVisible)
                  }}
                >
                  <AntDesign name="closecircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text bold>Filtrar</Text>

                <Text small style={{ margin: 14 }}>
                  Você procura por
                </Text>

                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={dataSearchFilter}
                  renderItem={renderSearchFilter}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal={false}
                  refreshing={false}
                  numColumns={2}
                  columnWrapperStyle
                />

                <TextInput
                  onFocus={() => setShowTab('none')}
                  placeholder="Informe o local desejado"
                  placeholderTextColor="#C1C1C1"
                  style={{
                    backgroundColor: '#f1f1f1',
                    width: '95%',
                    margin: 14,
                    paddingVertical: 10,
                    paddingHorizontal: 18,
                    borderRadius: 10,
                    fontFamily: 'Montserrat-Regular',
                    color: '#000',
                    fontSize: 13,
                  }}
                />

                <Text small medium style={{ margin: 4 }}>
                  O que você deseja deste local
                </Text>

                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={dataWish}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal={false}
                  refreshing={false}
                  numColumns={2}
                  columnWrapperStyle
                />

                <Text small medium style={{ margin: 8 }}>
                  O que deseja que os arredores deste local lhe ofereçam
                </Text>

                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={dataWishAround}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal={false}
                  refreshing={false}
                  numColumns={2}
                  columnWrapperStyle
                />

                <ApplyFilter
                  activeOpacity={0.85}
                  onPress={() => {
                    setModalVisible(!modalVisible),
                      navigation.navigate('ResultSearch')
                  }}
                >
                  <Text small white medium>
                    Filtrar
                  </Text>
                </ApplyFilter>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </TouchableOpacity>
      </Modal>
    </Container>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default Search
