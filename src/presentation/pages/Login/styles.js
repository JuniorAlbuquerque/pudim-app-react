import styled from 'styled-components/native'

import { Container as Cont, hp } from '../../styles/global'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(Cont)`
  flex: 1;

  z-index: 1;
  align-items: center;
  /* background: #3dbc77; */
`

export const Header = styled.View`
  width: 100%;
  height: 120px;
  background: #3dbc77;

  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  font-family: 'Montserrat-Medium';
`

export const TextBold = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: #3dbc77;
  margin-left: 4px;
  font-size: ${hp('1.8%')}px;
`

export const CardLogin = styled.View`
  height: auto;
  margin-top: -14px;

  background: #fff;
  padding: 20px 20px 10px 20px;
  width: 90%;

  border-radius: 9px;
  elevation: 10;

  align-items: center;
  justify-content: center;
`

export const Background = styled.View`
  position: absolute;
  bottom: -35px;
  left: -10px;
  z-index: -1;
`

export const Social = styled.View`
  flex-direction: row;
  margin: 10px;
`

export const ButtonSocial = styled.TouchableOpacity`
  width: 50%;
  padding: 12px 0px;
  background: #fff;

  align-items: center;
  justify-content: center;

  border-radius: 7px;
  elevation: 6;

  flex-direction: row;
`
