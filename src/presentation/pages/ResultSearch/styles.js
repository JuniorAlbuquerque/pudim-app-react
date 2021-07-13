import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import { hp } from '../../styles/global'

import { StatusBar } from 'react-native'
const barHeight = StatusBar.currentHeight

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: ${barHeight < 49.1 && barHeight > 49.07 ? '10px' : '0px'};
`

export const SearchBar = styled.View`
  flex: 1;
  flex-direction: row;

  background: #ffffff;
  border-radius: 7px;

  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
  margin-right: 8px;
`

export const InputSearch = styled.TextInput`
  font-family: 'Montserrat-Regular';
  flex: 1;
  font-size: ${hp('1.85%')}px;
  padding: 10px 2px;
`

export const Filter = styled(RectButton)`
  padding: 10px;
  background: #3dbc77;
  border-radius: 7px;
  padding: 2px 14px;

  align-items: center;
  justify-content: center;
`

export const SwipeTypes = styled.ScrollView`
  margin-top: 14px;
`

export const TypeSearch = styled.TouchableOpacity`
  background: ${({ active }) => (active ? '#3dbc77' : 'transparent')};
  padding: 8px 14px;
  border-radius: 20px;

  margin-right: 8px;
`

export const ShowResult = styled.ScrollView`
  padding: 0px 8px;
`

export const CardResult = styled.View`
  margin-top: 14px;
  flex-direction: row;
  align-items: center;
`

export const HeadResult = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const IconResult = styled(RectButton)`
  background: rgba(238, 238, 238, 0.57);
  padding: 4px;
  border-radius: 50px;
`

export const ImageResult = styled.Image`
  width: 224px;
  height: 180px;
  border-radius: 14px;
`

export const InfoResult = styled.View`
  background: #fff;
  flex: 1;
  margin-left: -100px;

  padding: 12px 8px;
  border-radius: 14px;
`
