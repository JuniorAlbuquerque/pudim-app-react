import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import { Dimensions, Platform } from 'react-native'

import { Text } from '../../styles/global'

import Adress from '../../../assets/icons/adress.svg'

const windowHeight = Dimensions.get('window').height.toFixed(0)

export const Header = styled.View`
  width: 100%;
  height: 220px;

  position: absolute;
  top: 70px;
  z-index: 999;

  align-items: center;
  margin-top: ${Platform.OS === 'ios'
    ? '-24px'
    : windowHeight < 710
    ? '-20px'
    : '0px'};
`

export const Filter = styled.View`
  width: 100%;
  height: 220px;

  background: #082113;
  opacity: 0.6;
`

export const PictureBackground = styled.ImageBackground``

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;

  border-radius: 45px;
`

export const ButtonBack = styled(RectButton)`
  position: absolute;
  left: 14px;
  padding: 4px;
`

export const ArrowLeftIcon = styled(Feather)`
  color: #fff;
`

export const Buttons = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 16px;
`

export const Button = styled.TouchableOpacity`
  padding: 4px 14px;
  border-radius: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Content = styled.View``

export const Info = styled.View`
  width: 100%;
  height: 60px;
  background: rgba(24, 102, 72, 0.055);

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Data = styled.View`
  align-items: center;
`

export const Tabs = styled.FlatList`
  flex-direction: row;
  width: 100%;
  padding: 10px 14px;
`

export const ButtonTab = styled.TouchableOpacity`
  margin-right: 18px;
`

export const TextButton = styled(Text)`
  color: ${({ active }) => (active ? '#22A45D' : '#000')};
`

export const BgAdress = styled.ImageBackground`
  margin-top: 4px;
  position: relative;
`

export const ContentAdress = styled.View`
  height: auto;
  flex-direction: row;
  width: 100%;
  padding: 8px 0px 18px 0px;
`

export const IconAdress = styled(Adress)`
  margin-top: 0px;
  margin-left: 8px;
  margin-right: 4px;
`

export const AdressData = styled.View`
  margin-top: 14px;
  width: 80%;
`

export const ButtonMap = styled.TouchableOpacity`
  padding: 8px;
  margin-right: 18px;
  margin-top: 10px;

  width: 120px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;

  background: #3dbc77;
`
