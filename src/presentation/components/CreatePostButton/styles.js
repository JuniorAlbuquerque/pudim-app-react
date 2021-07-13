import styled from 'styled-components/native'

export const Container = styled.View`
  background: ${({ focused }) => (focused ? '#22a45d' : '#187341')};
  width: 40px;
  height: 40px;
  border-radius: 25px;

  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
  position: absolute;
  bottom: -42px;
  left: -10px;
`
