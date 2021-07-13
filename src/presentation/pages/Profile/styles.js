import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Container as ContainerGlobal } from '../../styles/global'

import { Dimensions } from 'react-native'
const windowHeight = Dimensions.get('window').height.toFixed(0)

export const Container = styled(ContainerGlobal)``

export const Header = styled.View`
  width: 100%;
  height: 200px;

  position: absolute;
  top: 80px;
  z-index: 999;

  align-items: center;

  /* margin-top: ${windowHeight < 710 ? '-20px' : '0px'}; */
  margin-top: ${
    Platform.OS === 'ios' ? '-24px' : windowHeight < 710 ? '-20px' : '0px'
  }
`

export const Filter = styled.View`
  width: 100%;
  height: 160px;

  background: rgba(14, 63, 36, 0.63);
`

export const PictureBackground = styled.ImageBackground``

export const Avatar = styled.Image`
  width: 75px;
  height: 75px;
  background: rgba(40, 40, 40, 0.75);

  border-radius: 45px;
`

export const ArrowLeftIcon = styled(Feather)`
  color: #fff;
`

export const ChangeAvatar = styled.TouchableOpacity`
  width: 27px;
  height: 27px;

  border-radius: 15px;
  background: #000;

  align-items: center;
  justify-content: center;

  position: absolute;
  top: 60px;
  right: 0px;
`

export const Options = styled.TouchableOpacity`
  position: absolute;
  right: 14px;
  top: 0px;
`

export const Content = styled.View``

export const Info = styled.View`
  width: 100%;
  height: 60px;
  background: rgba(24, 102, 72, 0.055);

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2px;
`

export const Data = styled.View`
  align-items: center;
`

export const MyPosts = styled.View`
  padding: 4px;
`

export const Post = styled.View`
  background-color: ${({ empty }) => (empty ? 'transparent' : '#c4c4c4')};
  flex-grow: 1;
  margin: 2px;
  flex-basis: 0;
  height: auto;
`
