import React, { useState, useRef } from 'react'
import { TouchableOpacity, Animated, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Col, Grid } from 'react-native-easy-grid'

import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Lamp from '../../../assets/icons/oil-lamp.svg'
import LampCheck from '../../../assets/icons/oil-lamp-check.svg'

import { jsonData } from '../../../data/tests/posts'

import jnr from '../../../assets/images/jnr.jpeg'
import manaus from '../../../assets/images/manaus.jpeg'

import {
  HeaderPost,
  ContentPost,
  Picture,
  PictureRight,
  FooterPost,
  User,
  Icons,
  Avatar,
  Post,
  Like,
  TextLike,
  Heart,
} from './styles'

import { Text } from '../../styles/global'

const Posts = () => {
  const navigation = useNavigation()

  const [idLiked, setIdLiked] = useState(null)
  const [posts, setPosts] = useState(jsonData)

  var heartSize = useRef(new Animated.Value(1)).current

  const startAnimation = (id) => {
    setIdLiked(id)

    Animated.sequence([
      Animated.timing(heartSize, {
        toValue: 0.9,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(heartSize, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const updateData = (id, action) => {
    const newData = [...posts]
    const index = posts.findIndex((obj) => obj.id === id)

    if (action === 'like') {
      newData[index].liked = !newData[index].liked

      newData[index].liked
        ? (newData[index].likes += 1)
        : (newData[index].likes -= 1)

      setPosts(newData)
    }
    if (action === 'wish') {
      newData[index].wish = !newData[index].wish

      setPosts(newData)
    }
  }

  const handleData = () => {
    const newData = [
      ...posts,
      {
        id: 3,
        userid: 1,
        author: 'Júnior',
        local: 'Manaus',
        avatar: jnr,
        imgs: [{ id: 0, src: manaus }],
        likes: 78,
        liked: false,
        comments: 46,
      },
    ]

    setPosts(newData)
  }

  const renderItem = ({ item }) => (
    <Post>
      <HeaderPost>
        <User>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProfileVisit', {
                author: item.author,
                avatar: item.avatar,
                bg: item.imgs[0].src,
              })
            }
          >
            <Avatar source={item.avatar} />
          </TouchableOpacity>

          <Text supersmall medium style={{ color: '#474747', marginLeft: 8 }}>
            {item.author} está em{' '}
            <Text bold small>
              {item.local}
            </Text>
          </Text>
        </User>
      </HeaderPost>
      <ContentPost>
        <Grid>
          {item.imgs.length >= 5 ? (
            <>
              <Col style={{ marginRight: 8 }}>
                <Picture source={item.imgs[0].src} />
                <Picture source={item.imgs[1].src} />
              </Col>
              <Col>
                <PictureRight source={item.imgs[2].src} />
                <PictureRight source={item.imgs[3].src} />
                <PictureRight source={item.imgs[4].src} />
              </Col>
            </>
          ) : item.imgs.length === 4 ? (
            <>
              <Col style={{ marginRight: 8 }}>
                <Picture source={item.imgs[0].src} />
                <Picture source={item.imgs[1].src} />
              </Col>
              <Col>
                <Picture source={item.imgs[2].src} />
                <Picture source={item.imgs[3].src} />
              </Col>
            </>
          ) : item.imgs.length === 3 ? (
            <>
              <Col style={{ marginRight: 8 }}>
                <Picture source={item.imgs[0].src} />
                <Picture source={item.imgs[1].src} />
              </Col>
              <Col>
                <Picture source={item.imgs[2].src} only />
              </Col>
            </>
          ) : item.imgs.length === 2 ? (
            <Col style={{ marginRight: 8 }}>
              <Picture source={item.imgs[0].src} />
              <Picture source={item.imgs[1].src} />
            </Col>
          ) : (
            <Col>
              <Picture source={item.imgs[0].src} only />
            </Col>
          )}
        </Grid>
      </ContentPost>
      <FooterPost>
        <Icons>
          <Like style={{ width: 44 }}>
            {item.id === idLiked ? (
              <Animated.View style={[{ transform: [{ scale: heartSize }] }]}>
                <Heart
                  name={item.liked ? 'heart' : 'hearto'}
                  size={22}
                  isLiked={item.liked}
                  onPress={() => {
                    updateData(item.id, 'like')
                    setIdLiked(item.id)
                    startAnimation(item.id)
                  }}
                />
              </Animated.View>
            ) : (
              <Heart
                name={item.liked ? 'heart' : 'hearto'}
                size={22}
                isLiked={item.liked}
                onPress={() => {
                  updateData(item.id, 'like')
                  setIdLiked(item.id)
                  startAnimation(item.id)
                }}
              />
            )}
            <TextLike isLiked={item.liked}>{item.likes}</TextLike>
          </Like>

          <Like>
            <Ionicons name="chatbubble-outline" size={22} color="#545454" />
            <TextLike style={{ color: '#545454' }}>{item.comments}</TextLike>
          </Like>

          <Like>
            {item.wish ? (
              <LampCheck onPress={() => updateData(item.id, 'wish')} />
            ) : (
              <Lamp onPress={() => updateData(item.id, 'wish')} />
            )}
          </Like>

          <Like>
            <Feather name="book-open" size={22} color="#545454" />
            <TextLike style={{ color: '#545454', fontSize: 12 }}>
              Avaliar
            </TextLike>
          </Like>
        </Icons>

        <MaterialCommunityIcons
          name="share-outline"
          size={29}
          color="#545454"
        />
      </FooterPost>
    </Post>
  )

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={false}
      refreshing={false}
      onRefresh={handleData}
    />
  )
}

export default Posts
