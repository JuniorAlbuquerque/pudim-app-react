import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const HeaderCollapse = styled(RectButton)`
  background: #fff;
  margin: 4px 8px 8px;
  padding: 10px;
  border-radius: 7px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Collapse = styled.ScrollView`
  padding: 4px;
`

export const Collapse2 = styled.ScrollView`
  padding: 4px;
  height: 400px;
`

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 4px;
  margin-bottom: 4px;
`

export const Button = styled(RectButton)`
  flex: 1;
  margin: 4px;

  padding: 10px;
  background: ${({ active }) => (active ? '#22A45D' : '#000')};
  border-radius: 8px;

  align-items: center;
`

export const CheckItem = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Footer = styled.View`
  flex-direction: row;
  padding: 10px 4px;
`

export const ButtonFooter = styled(RectButton)`
  flex: 1;
  margin: 4px;

  padding: 10px;
  background: ${({ type }) => (type === 'save' ? '#22A45D' : '#E79347')};
  border-radius: 8px;

  align-items: center;
`
