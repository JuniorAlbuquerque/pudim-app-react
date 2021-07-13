import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container, Text } from '../../styles/global'

import {
  Header,
  SearchBar,
  InputSearch,
  Filter,
  Content,
  ChatMessages,
  Conversation,
  Avatar,
  Data,
  HeaderConversation,
} from './styles'

import { AntDesign } from '@expo/vector-icons'

import jnr from '../../../assets/images/jnr.jpeg'
import hotel from '../../../assets/images/hotel.jpg'

const messages = [
  {
    id: 0,
    name: 'Junior',
    message:
      'Você pode me informar mais sobre o local? E o valor que cobra em um passeio',
    avatar: jnr,
  },
  {
    id: 1,
    name: 'Hotel Ilha Bela',
    message:
      'Olá Júnior, boa tarde. Fiquei interessado nessa sua viagem a Presidente Figueiredo, você pode me informar com quem fechou o\
      pacote, onde se hospedou, e os valores também? Agradeço desde já',
    avatar: hotel,
  },
]

function Chat() {
  const navigation = useNavigation()

  return (
    <Container nopading>
      <Header>
        <SearchBar>
          <InputSearch
            placeholder="Buscar conversa"
            placeholderTextColor="#C1C1C1"
          />
          <AntDesign name="search1" size={20} color="#B5B5B5" />
        </SearchBar>

        <Filter>
          <AntDesign name="plus" size={20} color="#fff" />
        </Filter>
      </Header>

      <Content>
        <Text small bold>
          Minhas Conversas
        </Text>
        <ChatMessages>
          {messages.map((message) => (
            <Conversation
              key={message.id}
              activeOpacity={0.75}
              onPress={() => navigation.navigate('Conversation')}
            >
              <Avatar source={message.avatar} />
              <Data>
                <HeaderConversation>
                  <Text small bold>
                    {message.name}
                  </Text>

                  <Text supersmall gray>
                    15min
                  </Text>
                </HeaderConversation>

                <Text supersmall numberOfLines={2} justify>
                  {message.message}
                </Text>
              </Data>
            </Conversation>
          ))}
        </ChatMessages>
      </Content>
    </Container>
  )
}

export default Chat
