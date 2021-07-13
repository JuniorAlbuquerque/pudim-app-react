import React, { useRef, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'

import Constants from 'expo-constants'

import { NextButton, Footer, Dots, Dot } from './styles'
import { Text, wp } from '../../styles/global'

import imagem01 from '../../../assets/onboarding/first.png'
import imagem02 from '../../../assets/onboarding/second.png'
import imagem03 from '../../../assets/onboarding/third.png'

const { width } = Dimensions.get('window')

const carousel = [
  {
    id: 0,
    img: imagem01,
    buttons: { next: true, prev: false },
    textButton: 'Conhecer mais',
    skip: true,
  },
  {
    id: 1,
    img: imagem02,
    buttons: { next: true, prev: true },
    textButton: 'Conhecer mais',
    skip: true,
  },
  {
    id: 2,
    img: imagem03,
    buttons: { next: false, prev: true },
    textButton: 'Acessar',
    skip: false,
  },
]

const OnBoarding = () => {
  const [completed, setCompleted] = useState(false)
  const scroll = useRef()
  const scrollX = new Animated.Value(0)

  const navigation = useNavigation()

  const dotPosition = Animated.divide(scrollX, width)

  const handleScroll = (screen, action) => {
    if (action === 'next') {
      scroll.current.scrollTo({
        x: (screen + 1) * width,
        y: 0,
        animated: true,
      })
    }
    if (action === 'prev') {
      scroll.current.scrollTo({
        x: (screen - 1) * width,
        y: 0,
        animated: true,
      })
    }
  }

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / width) === carousel.length - 1) {
        setCompleted(true)
      }
    })

    return () => scrollX.removeListener()
  }, [])

  return (
    <>
      <Animated.ScrollView
        style={{ marginTop: Constants.statusBarHeight, flex: 1 }}
        horizontal
        pagingEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        ref={scroll}
      >
        {carousel.map((item) => (
          <ImageBackground
            source={item.img}
            key={item.id}
            resizeMode="cover"
            style={{
              width: wp('100%'),
              height: '100%',
              flex: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 30,
              }}
            >
              <NextButton
                onPress={() =>
                  item.buttons.next
                    ? handleScroll(item.id, 'next')
                    : navigation.navigate('Login')
                }
              >
                <Text style={{ textAlign: 'center' }} white medium small>
                  {item.textButton}
                </Text>
              </NextButton>
            </View>
            {item.skip && (
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                }}
              >
                <Text
                  medium
                  small
                  white
                  onPress={() => navigation.navigate('Login')}
                >
                  Pular
                </Text>
              </TouchableOpacity>
            )}
          </ImageBackground>
        ))}
      </Animated.ScrollView>

      <Footer>
        <Dots>
          {carousel.map((dot, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.5, 1, 0.5],
              extrapolate: 'clamp',
            })

            const color = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: ['#c4c4c4', '#22A45D', '#c4c4c4'],
              extrapolate: 'clamp',
            })

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [12, 13.5, 12],
              extrapolate: 'clamp',
            })

            return (
              <Dot
                key={dot.id}
                active={dot.id === index}
                opacity={opacity}
                style={{
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: color,
                }}
              />
            )
          })}
        </Dots>
      </Footer>
    </>
  )
}

export default OnBoarding
