import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Content = styled.View`
  margin: 4px 8px;
  justify-content: space-between;
  flex: 1;
`

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #c7c7c7;

  padding: 4px 8px;
  font-family: 'Montserrat-Regular';
  margin-bottom: 4px;
`

export const View = styled.View`
  margin-bottom: 18px;
`

export const Create = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;

  background: #3dbc77;
  padding: 12px;
  border-radius: 100px;
  margin-bottom: 14px;

  position: absolute;
  bottom: 0;
`

export const Pictures = styled.View`
  flex-direction: row;
  margin-left: 4px;
`

export const Picture = styled.Image`
  width: 100px;
  height: 100px;
  max-width: 120px;
  border-radius: 14px;
  flex: 1;
`

export const AddPicture = styled(RectButton)`
  width: 120px;
  height: 100px;

  background: rgba(34, 164, 93, 0.12);
  border-radius: 18px;
  margin-bottom: 80px;

  align-items: center;
  justify-content: center;
`

export const RemovePicture = styled.TouchableOpacity``

export const ContentPicture = styled.View`
  flex-direction: row;
  position: relative;
  width: 134px;
  align-items: flex-start;
  justify-content: flex-start;
`
