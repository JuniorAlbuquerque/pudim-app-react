import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'

import {
  Header,
  Filter,
  PictureBackground,
  Avatar,
  ArrowLeftIcon,
  ButtonBack,
  Buttons,
  Button,
  Content,
  Info,
  Data,
  Tabs,
  ButtonTab,
  TextButton,
  BgAdress,
  ContentAdress,
  IconAdress,
  AdressData,
  ButtonMap,
} from './styles'

import { Container, Text } from '../../styles/global'

import bgadress from '../../../assets/bgadress.png'

const ProfileVisit = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [back, setBack] = useState(false)

  const navigation = useNavigation()
  const { params } = useRoute()

  const DATA = [
    { id: 0, title: 'Informações' },
    { id: 1, title: 'Promoções' },
    { id: 2, title: 'Publicações' },
    { id: 3, title: 'Avaliações' },
  ]

  const renderItem = ({ item }) => (
    <ButtonTab onPress={() => setActiveTab(item.id)}>
      <TextButton bold small active={item.id === activeTab}>
        {item.title}
      </TextButton>
    </ButtonTab>
  )

  useEffect(() => {
    if (back) {
      navigation.goBack()
    }
  }, [back])

  return (
    <Container nopading>
      <Header>
        <ButtonBack onPress={() => setBack(true)}>
          <ArrowLeftIcon name="arrow-left" size={24} />
        </ButtonBack>

        <Avatar source={params.avatar} />

        <Text mediumtext medium white style={{ marginTop: 4 }}>
          {params.author}
        </Text>
        <Text medium white style={{ color: '#B5B5B5' }}>
          Hotelaria
        </Text>

        <Buttons>
          <Button
            style={{
              backgroundColor: '#22A45D',
            }}
          >
            <AntDesign
              name="adduser"
              size={20}
              color="#fff"
              style={{ marginRight: 4 }}
            />
            <Text white small>
              Seguir
            </Text>
          </Button>

          <Button
            style={{
              backgroundColor: '#fff',
            }}
          >
            <Feather
              name="send"
              size={20}
              color="black"
              style={{ marginRight: 4 }}
            />
            <Text black small>
              Mensagem
            </Text>
          </Button>

          <Button
            style={{
              backgroundColor: '#000',
              borderColor: '#22A45D',
              borderWidth: 1,
            }}
          >
            <Ionicons
              name="location-sharp"
              size={20}
              color="#fff"
              style={{ marginRight: 4 }}
            />
            <Text white small>
              Postar
            </Text>
          </Button>
        </Buttons>
      </Header>

      <PictureBackground source={params.bg}>
        <Filter />
      </PictureBackground>

      <Content>
        <Text
          small
          style={{
            color: '#404040',
            marginVertical: 8,
            marginHorizontal: 14,
            textAlign: 'justify',
          }}
        >
          Um hotel moderno e elegante de 4 estrelas com vista para o
          mar,perfeito para férias românticas e charmosas, no cenário encantador
          de Taormina e do Mar Ioniano.
        </Text>

        <Info>
          <Data
            style={{
              borderRightWidth: 1,
              paddingRight: 20,
              borderColor: '#D3D3D3',
            }}
          >
            <Text mediumtext medium>
              154
            </Text>
            <Text small>Seguidores</Text>
          </Data>

          <Data>
            <Text mediumtext medium>
              10
            </Text>
            <Text small>Seguindo</Text>
          </Data>

          <Data
            style={{
              borderLeftWidth: 1,
              paddingLeft: 24,
              borderColor: '#D3D3D3',
            }}
          >
            <Text mediumtext medium>
              140
            </Text>
            <Text small>Desejos</Text>
          </Data>
        </Info>

        <Tabs
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />

        <BgAdress source={bgadress}>
          <ContentAdress>
            <IconAdress />
            <AdressData>
              <Text bold>Endereço</Text>
              <Text small style={{ marginTop: 4 }}>
                Rua Alexandre, 2780, Emílio Moreira, Parintins, Amazonas -
                Brasil
              </Text>
              <ButtonMap>
                <Text supersmall medium white>
                  Ver no maps
                </Text>
              </ButtonMap>
            </AdressData>
          </ContentAdress>
        </BgAdress>
      </Content>
    </Container>
  )
}

export default ProfileVisit
