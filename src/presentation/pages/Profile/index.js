import React, { useRef, useState } from 'react'
import { View, FlatList, Image } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'
import { useRoute } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'

import {
  Container,
  Header,
  Filter,
  PictureBackground,
  Avatar,
  ChangeAvatar,
  Options,
  Content,
  Info,
  Data,
  MyPosts,
  Post,
} from './styles'
import { Text } from '../../styles/global'

import { Feather, Ionicons } from '@expo/vector-icons'

import jnr from '../../../assets/images/jnr.jpeg'
import bg from '../../../assets/images/camelo.jpg'
import hotel from '../../../assets/images/hotel.jpg'
import manaus from '../../../assets/images/manaus.jpeg'
import sport from '../../../assets/images/sport.jpg'
import pf from '../../../assets/images/pf.jpg'

import ModalProfile from '../../components/ModalProfile'

import { formatData } from '../../../utils/formatGrid'
import { img } from '../../../data/tests/uri'

function Profile() {
  const [image, setImage] = useState(img)
  const numColumns = 3
  const modal = useRef(null)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  const data = [
    { id: 0, image: hotel },
    { id: 1, image: bg },
    { id: 2, image: manaus },
    { id: 3, image: sport },
    { id: 4, image: pf },
  ]

  const renderPosts = ({ item }) =>
    item.empty ? (
      <Post empty={item.empty} />
    ) : (
      <Post>
        <Image
          style={{
            width: '100%',
            height: 120,
          }}
          source={item.image}
          resizeMode="cover"
        />
      </Post>
    )

  const openModal = () => {
    modal.current?.open()
  }

  const closeModal = () => {
    modal.current?.close()
  }

  return (
    <Container nopading>
      <Header>
        <View
          style={{
            position: 'relative',
          }}
        >
          <Avatar source={{ uri: image }} />

          <ChangeAvatar activeOpacity={0.8} onPress={pickImage}>
            <Feather name="camera" size={14} color="#3DBC77" />
          </ChangeAvatar>
        </View>

        <Text mediumtext medium white style={{ marginTop: 14 }}>
          Junior Albuquerque
        </Text>

        <Options onPress={openModal}>
          <Ionicons name="options-outline" size={28} color="#fff" />
        </Options>
      </Header>

      <PictureBackground source={manaus}>
        <Filter />
      </PictureBackground>

      <Content>
        <Text
          small
          style={{
            color: '#404040',
            marginVertical: 8,
            marginHorizontal: 20,
            textAlign: 'center',
          }}
        >
          Viajante, apaixonado pelo Amazonas!
        </Text>

        <Info>
          <Data>
            <Text semimedium bold>
              154
            </Text>
            <Text small>Seguidores</Text>
          </Data>

          <Data
            style={{
              marginRight: 14,
            }}
          >
            <Text semimedium bold>
              10
            </Text>
            <Text small>Seguindo</Text>
          </Data>

          <Data>
            <Text semimedium bold>
              140
            </Text>
            <Text small>Desejos</Text>
          </Data>
        </Info>

        <MyPosts>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={formatData(data, numColumns)}
            renderItem={renderPosts}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            refreshing={false}
            numColumns={numColumns}
          />
        </MyPosts>
      </Content>

      <Portal>
        <Modalize
          ref={modal}
          adjustToContentHeight={true}
          handlePosition="inside"
          useNativeDriver={true}
          closeSnapPointStraightEnabled={true}
          closeOnOverlayTap={true}
        >
          <ModalProfile onClose={closeModal} />
        </Modalize>
      </Portal>
    </Container>
  )
}

export default Profile
