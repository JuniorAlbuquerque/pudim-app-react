import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 10px;
`

export const TextHeader = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 16px;

  color: #000;
  margin-top: 8px;
`

export const FilterButtons = styled.View`
  width: 100%;
  flex-direction: row;
  margin: 10px 0px;

  justify-content: space-between;
`

export const FilterButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 7px;
  background: ${({ active }) => (active ? '#22A45D' : '#000')};
  border-radius: 50px;
`

export const TextFilter = styled.Text`
  color: #fff;
  font-family: 'Montserrat-Regular';
`
