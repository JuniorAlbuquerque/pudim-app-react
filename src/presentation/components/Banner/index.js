import React from 'react'
import { Text } from 'react-native'

import { Wrapper, Slider, Dot, ImageSlide } from './styles'

import noronha from '../../../assets/images/noronha.jpg'
import camelo from '../../../assets/images/camelo.jpg'
import manaus from '../../../assets/images/manaus.jpeg'

const Banner = () => {
  return (
    <Wrapper>
      <Slider
        dot={<Dot />}
        activeDot={<Dot active />}
        paginationStyle={{
          bottom: 14,
        }}
        loop={true}
        autoplay={true}
        autoplayTimeout={4}
        showsButtons={true}
        buttonWrapperStyle={{
          top: -5,
        }}
        nextButton={<Text style={{ color: '#fff', fontSize: 40 }}>›</Text>}
        prevButton={<Text style={{ color: '#fff', fontSize: 40 }}>‹</Text>}
      >
        <ImageSlide source={noronha} resizeMode="cover" />
        <ImageSlide source={camelo} resizeMode="cover" />
        <ImageSlide source={manaus} resizeMode="cover" />
      </Slider>
    </Wrapper>
  )
}

export default Banner
