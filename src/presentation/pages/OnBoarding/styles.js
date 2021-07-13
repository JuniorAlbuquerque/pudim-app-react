import styled from 'styled-components/native'
import { Platform, StatusBar, Animated } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
  padding-top: ${Platform.OS === 'android'
    ? StatusBar.currentHeight.toFixed(0)
    : 0}px;

  flex: 1;
  width: 100%;
  height: 100%;
`

export const NextButton = styled(RectButton)`
  background: #22a45d;
  position: absolute;
  padding: 12px 14px;
  bottom: 70px;
  border-radius: 8px;
  width: 90%;
`

export const Footer = styled.View`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  padding: 20px 22px;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`

export const Dots = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Dot = styled(Animated.View)`
  width: 12px;
  height: 12px;

  border-radius: 7px;
  background: ${({ active }) => (active ? '#22A45D' : '#c4c4c4')};
  margin-right: 14px;
`
