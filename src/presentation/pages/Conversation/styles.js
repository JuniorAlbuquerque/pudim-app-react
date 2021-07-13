import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import { LinearGradient } from 'expo-linear-gradient'

export const Header = styled(LinearGradient)`
  background: #3dbc77;

  width: 100%;
  height: auto;
  padding: 20px 8px;

  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;

  margin-left: 14px;
  margin-right: 10px;
`

export const AvatarChat = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 20px;

  margin-left: 14px;
  margin-right: 10px;
`

export const InfoContact = styled.View``

export const ButtonBack = styled(RectButton)`
  padding: 4px;
`

export const ChatContent = styled.View`
  margin-top: 14px;
`

export const Contact = styled.View`
  flex-direction: row;
  margin-bottom: 14px;
  align-self: flex-start;

  align-items: center;
`

export const ContactMessage = styled.View`
  background: #ebeaf1;
  padding: 10px 14px;
  border-radius: 8px;

  margin-right: 14px;
`

export const Myself = styled.View`
  flex-direction: row;
  margin-bottom: 14px;

  align-self: flex-end;
  margin-right: 4px;
  align-items: center;
`

export const MyselfMessage = styled.View`
  background: #3dbc77;
  padding: 10px 14px 0px;
  border-radius: 8px;

  margin-left: 12px;
`

export const Footer = styled.KeyboardAvoidingView`
  padding: 0px 8px 2px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const WriteMessage = styled.View`
  flex-direction: row;
  flex: 1;

  background: #fff;
  border-radius: 7px;

  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
  margin-right: 8px;
  border-width: 1px;
  border-color: #c1c1c1;
  border-radius: 50px;
`

export const InputWrite = styled.TextInput`
  font-family: 'Montserrat-Regular';
  flex: 1;
  padding: 8px 4px;
  font-size: 14px;
`

export const SendMessage = styled.TouchableOpacity`
  padding: 14px 10px;
`
