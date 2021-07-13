import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;

  height: auto;
  padding: 20px 0px;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const Row = styled.View`
  flex-direction: row;

  border-bottom-width: 1px;
  border-color: #e9e9e9;
`

export const ButtonOption = styled(RectButton)`
  flex-direction: row;
  padding: 12px 14px;

  flex: 1;
`
