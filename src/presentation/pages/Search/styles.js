import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { hp } from '../../styles/global'

import { StatusBar } from 'react-native'
const barHeight = StatusBar.currentHeight

export const Header = styled.View`
  width: 100%;
  flex-direction: row;

  padding: 14px 10px 0px 10px;
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

export const Buttons = styled.ScrollView`
  padding: 0px 10px 0px 10px;
  flex-direction: row;
`

export const ContentButton = styled.View`
  align-items: center;
  margin-right: 24px;
`

export const Button = styled(RectButton)`
  width: 55px;
  height: 55px;

  background: ${({ background }) => background};
  border-radius: 15px;

  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`

export const Content = styled.ScrollView`
  padding: 0px 10px;
  margin-top: 18px;
`

export const Data = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 18px;
`

export const Image = styled.Image`
  width: 149px;
  height: auto;

  border-radius: 8px;
  margin-right: 8px;
`

export const Info = styled.View``

export const ApplyFilter = styled.TouchableOpacity`
  background: #3dbc77;
  border-radius: 7px;

  margin-top: 24px;
  margin-bottom: 8px;
  padding: 10px 14px;
  width: 60%;

  align-items: center;
  justify-content: center;
`
