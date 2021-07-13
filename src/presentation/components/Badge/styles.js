import styled from 'styled-components/native'

export const Container = styled.View`
  position: absolute;
  background: #22a45d;

  width: ${({ count }) => (count > 0 ? '16px' : '0px')};
  height: ${({ count }) => (count > 0 ? '16px' : '0px')};

  border-radius: 8px;
  right: -5px;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const Text = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #fff;
  font-size: 10px;
`
