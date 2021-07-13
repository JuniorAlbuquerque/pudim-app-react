import styled from 'styled-components/native'
import { Platform, StatusBar, Dimensions, PixelRatio } from 'react-native'

export const wp = (widthPercent) => {
  const screenWidth = Dimensions.get('window').width
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  )
}

export const hp = (heightPercent) => {
  const screenHeight = Dimensions.get('window').height
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100,
  )
}

const barHeight = StatusBar.currentHeight

export const ContainerWithHeader = styled.SafeAreaView`
  padding: 4px 8px 0px;
  flex: 1;
`

export const Container = styled.SafeAreaView`
  padding: ${({ nopading }) => (nopading ? '0px' : '14px 14px 0px 14px')};

  padding-top: ${Platform.OS === 'android'
    ? StatusBar.currentHeight + (barHeight < 49.1 && barHeight > 49.07 ? 10 : 0)
    : StatusBar.currentHeight + 20}px;

  flex: 1;
  background: #f7f7f7;
  position: relative;
`

export const Text = styled.Text`
  font-family: "Montserrat-Regular";
  color: #000;

  ${({ justify, center }) => {
    switch (true) {
      case justify:
        return `text-align: justify`
      case center:
        return `text-align: center`
      default:
        return `text-align: auto`
    }
  }}

  ${({ title, large, mediumtext, semimedium, small, supersmall }) => {
    switch (true) {
      case title:
        return `font-size: 24px;`
      case large:
        return `font-size: 22px;`
      case mediumtext:
        return `font-size: 20px;`
      case semimedium:
        return `font-size: 18px;`
      case small:
        return `font-size: ${hp('1.9%')}px;`
      case supersmall:
        return `font-size: ${hp('1.8%')}px;`
      default:
        return `font-size: 16px;`
    }
  }}

  ${({ medium, bold }) => {
    switch (true) {
      case medium:
        return `font-family: "Montserrat-Medium";`
      case bold:
        return `font-family: "Montserrat-SemiBold";`
      default:
        return `font-family: "Montserrat-Regular";`
    }
  }}

${({ white, black, gray }) => {
  switch (true) {
    case white:
      return `color: #fff;`
    case black:
      return `color: #000;`
    case gray:
      return `color: #8C8C8C`
    default:
      return `color: #000;`
  }
}}
`
