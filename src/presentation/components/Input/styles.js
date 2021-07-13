import styled from 'styled-components/native'

import { hp } from '../../styles/global'

export const Container = styled.View`
  width: 100%;
  padding: 8px 16px;

  flex-direction: row;
  align-items: center;

  border-radius: 10px;
  margin-bottom: 8px;

  background: #fbfbfb;
  border: 1px solid #f3f2f2;
  border-radius: 6px;
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  margin-left: 8px;

  font-size: ${hp('1.8%')}px;
  font-family: 'Montserrat-Regular';
`
