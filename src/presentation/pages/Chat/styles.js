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

  padding: 2px 12px;
  align-items: center;
  justify-content: center;
`

export const Content = styled.View`
  padding: 12px;
  margin-top: 8px;
`

export const ChatMessages = styled.View`
  margin-top: 10px;

  background: #fff;
  padding: 0px 4px 8px;
  border-radius: 4px;
`

export const Conversation = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding-left: 4px;
  padding-right: 10px;
  padding-bottom: 8px;
  margin-top: 14px;
`

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 25px;
  margin-right: 14px;
`

export const Data = styled.View`
  width: 0px;
  flex-grow: 1;
`

export const HeaderConversation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 4px;
`
