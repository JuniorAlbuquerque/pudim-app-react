import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import { hp } from '../../styles/global'

export const Container = styled(RectButton)`
  width: 100%;
  background: #22a45d;
  padding: 11.5px 0px;

  align-items: center;
  justify-content: center;

  border-radius: 9px;
`

export const ButtonText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: ${hp('1.8%')}px;

  color: #fff;
  text-transform: uppercase;
`
