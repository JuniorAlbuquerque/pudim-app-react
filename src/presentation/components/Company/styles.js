import styled from 'styled-components/native'
import { Chip as Cp } from 'react-native-paper'

export const Container = styled.View`
  margin: 4px 8px;
`

export const Chip = styled(Cp)`
  margin-right: 4px;
  background: ${({ active }) => (active ? '#3dbc77' : '#e3e3e3')};
`
