import React, { useState, useEffect } from 'react'
import {
  FlatList,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

import { Container, Text } from '../../styles/global'
import { Col, Grid } from 'react-native-easy-grid'

import {
  Content,
  Input,
  View,
  Create,
  Pictures,
  Picture,
  AddPicture,
  RemovePicture,
  ContentPicture,
} from './styles'
import { AntDesign } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

function CreatePost() {
  const [response, setResponse] = React.useState(null)
  const [image, setImage] = useState(null)
  const [images, setImages] = useState([])

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)

      const newData = [...images]
      newData.push({ id: 0, image: result.uri })
      setImages(newData)
    }
  }

  const handleRemove = (item) => {
    const newData = [...images]
    let index = newData.indexOf(item)

    if (index !== -1) {
      newData.splice(index, 1)
    }

    setImages(newData)
  }

  const renderImages = (item) => {
    return (
      <ContentPicture key={item.item.image}>
        <Picture
          source={{ uri: item.item.image }}
          style={{ marginBottom: 14 }}
        />
        <RemovePicture
          style={{ position: 'absolute', right: 20, top: 8 }}
          activeOpacity={0.75}
          onPress={() => handleRemove(item.item)}
        >
          <AntDesign name="closecircleo" size={24} color="#fff" />
        </RemovePicture>
      </ContentPicture>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container nopading>
        <Text style={{ margin: 14 }} center bold small>
          Nova publicação
        </Text>

        <Content>
          <View>
            <View>
              <Text small>Onde você está ou esteve?</Text>
              <Input />
            </View>

            <View>
              <Text supersmall>Adicione uma descrição</Text>
              <Input
                numberOfLines={2}
                multiline
                ellipsizeMode="tail"
                collapsable={false}
              />
            </View>

            <Pictures>
              <Col>
                {images.length > 0 && (
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={images}
                    renderItem={renderImages}
                    keyExtractor={(item) => item.image}
                    horizontal={false}
                    refreshing={false}
                    numColumns={3}
                  />
                )}
                <AddPicture onPress={pickImage}>
                  <AntDesign name="plus" size={38} color="#3dbc77" />
                </AddPicture>
              </Col>
            </Pictures>
          </View>

          <Create>
            <Text medium small white>
              Publicar
            </Text>
          </Create>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  )
}

export default CreatePost
