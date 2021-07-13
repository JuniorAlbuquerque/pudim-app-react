import styled from 'styled-components/native'
import Swiper from 'react-native-swiper'

export const Wrapper = styled.View`
  width: 100%;
  height: 220px;

  padding: 14px 10px 0px 10px;
  margin-bottom: 14px;
`

export const Slider = styled(Swiper)``

export const Dot = styled.View`
  background-color: ${({ active }) =>
    active ? '#3DBC77' : 'rgba(196, 196, 196, 0.55);'};
  width: 13px;
  height: 13px;
  border-radius: 7px;
  margin-left: 7px;
  margin-right: 7px;
`

export const ImageSlide = styled.Image`
  border-radius: 8px;
  width: 100%;
  height: 200px;
`
