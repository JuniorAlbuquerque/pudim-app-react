import styled from 'styled-components/native'

import { AntDesign } from '@expo/vector-icons'

export const Post = styled.View`
  margin-bottom: 4px;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #dddddd;
`

export const HeaderPost = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin: 8px 4px 18px;
`

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;
`

export const Local = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 12px;

  color: #5e5e5e;
`

export const ContentPost = styled.View`
  position: relative;
  overflow: hidden;
`

export const Visits = styled.TouchableOpacity`
  padding: 4px 8px;

  flex-direction: row;
  align-items: center;

  background: #ffc633;
  border-radius: 50px;

  position: absolute;
  z-index: 2;
  right: 10px;
  top: 10px;
`

export const TextVisit = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 12px;
  margin-left: 4px;

  color: #000;
`

export const Picture = styled.Image`
  width: 100%;
  height: ${({ only }) => (only ? '328px' : '160px')};

  border-radius: 0px;
  margin-bottom: 8px;
`

export const PictureRight = styled.Image`
  width: 100%;
  height: 104px;

  border-radius: 4px;
  margin-bottom: 8px;
`

export const FooterPost = styled.View`
  padding: 4px 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 4px;
`

export const Icons = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Like = styled.View`
  flex-direction: row;
  margin-right: 10px;

  align-items: center;
`

export const TextLike = styled.Text`
  font-family: 'Montserrat-SemiBold';
  margin-left: 4px;
  color: ${({ isLiked }) => (isLiked ? '#EE5F5F' : '#545454')};
`

export const Heart = styled(AntDesign)`
  color: ${({ isLiked }) => (isLiked ? '#EE5F5F' : '#545454')};
`
