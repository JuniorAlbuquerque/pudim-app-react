import React, { useState, useEffect } from 'react'
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  Header,
  ButtonBack,
  Avatar,
  AvatarChat,
  InfoContact,
  ChatContent,
  Contact,
  ContactMessage,
  Myself,
  MyselfMessage,
  Footer,
  WriteMessage,
  InputWrite,
  SendMessage,
} from './styles'

import { Container, Text, wp } from '../../styles/global'

import { Feather, Ionicons } from '@expo/vector-icons'
import jnr from '../../../assets/images/jnr.jpeg'

const Conversation = () => {
  const [back, setBack] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    if (back) {
      navigation.goBack()
    }
  }, [back])

  return (
    <Container
      nopading
      style={{ justifyContent: 'space-between', backgroundColor: '#f7f7f7' }}
    >
      <Header
        start={{ x: 0, y: 0 }}
        end={{ x: 1.1, y: 0 }}
        colors={['#3dbc77', '#2A7A4E']}
      >
        <ButtonBack onPress={() => setBack(true)}>
          <Feather name="arrow-left" size={22} color="#fff" />
        </ButtonBack>
        <Avatar source={jnr} />
        <InfoContact>
          <Text small white bold style={{ marginBottom: 4 }}>
            Júnior Albuquerque
          </Text>
          <Text supersmall white>
            Online agora
          </Text>
        </InfoContact>
      </Header>

      <ScrollView>
        <ChatContent>
          <Contact>
            <AvatarChat source={jnr} />
            <ContactMessage>
              <Text supersmall style={{ maxWidth: 240 }}>
                Olá Júnior
              </Text>
            </ContactMessage>
            <Text supersmall gray>
              14min
            </Text>
          </Contact>

          <Contact>
            <AvatarChat source={jnr} />
            <ContactMessage style={{ maxWidth: wp('65%') }}>
              <Text supersmall justify>
                Você pode me informar mais sobre o local? E o valor que cobra em
                um passeio
              </Text>
            </ContactMessage>
            <Text supersmall gray>
              15min
            </Text>
          </Contact>

          <Myself>
            <Text supersmall gray style={{ marginLeft: 4 }}>
              15min
            </Text>
            <MyselfMessage style={{ maxWidth: wp('65%') }}>
              <Text supersmall white justify>
                Viajei na semana passada, fiquei em um hotel perto da cachoeira
                do santuário, paguei 120,00 na diária, show demais o atendimento
              </Text>
            </MyselfMessage>
            <AvatarChat source={jnr} />
          </Myself>

          <Myself>
            <Text supersmall gray style={{ marginLeft: 4 }}>
              15min
            </Text>
            <MyselfMessage style={{ maxWidth: wp('65%') }}>
              <Text supersmall white justify>
                Viajei na semana passada, fiquei em um hotel perto da cachoeira
                do santuário, paguei 120,00 na diária, show demais o atendimento
              </Text>
            </MyselfMessage>
            <AvatarChat source={jnr} />
          </Myself>

          <Contact>
            <AvatarChat source={jnr} />
            <ContactMessage>
              <Text supersmall style={{ maxWidth: 240 }}>
                Olá Júnior
              </Text>
            </ContactMessage>
            <Text supersmall gray>
              14min
            </Text>
          </Contact>

          <Contact>
            <AvatarChat source={jnr} />
            <ContactMessage style={{ maxWidth: wp('65%') }}>
              <Text supersmall justify>
                Você pode me informar mais sobre o local? E o valor que cobra em
                um passeio
              </Text>
            </ContactMessage>
            <Text supersmall gray>
              15min
            </Text>
          </Contact>

          <Myself>
            <Text supersmall gray style={{ marginLeft: 4 }}>
              15min
            </Text>
            <MyselfMessage style={{ maxWidth: wp('65%') }}>
              <Text supersmall white justify>
                Viajei na semana passada, fiquei em um hotel perto da cachoeira
                do santuário, paguei 120,00 na diária, show demais o atendimento
              </Text>
            </MyselfMessage>
            <AvatarChat source={jnr} />
          </Myself>

          <Myself>
            <Text supersmall gray style={{ marginLeft: 4 }}>
              15min
            </Text>
            <MyselfMessage style={{ maxWidth: wp('65%') }}>
              <Text supersmall white justify>
                Viajei na semana passada, fiquei em um hotel perto da cachoeira
                do santuário, paguei 120,00 na diária, show demais o atendimento
              </Text>
            </MyselfMessage>
            <AvatarChat source={jnr} />
          </Myself>
        </ChatContent>
      </ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
        <Footer>
          <WriteMessage>
            <InputWrite
              placeholder="Escrever mensagem"
              placeholderTextColor="#C1C1C1"
            />
            <Feather name="camera" size={20} color="#C1C1C1" />
          </WriteMessage>
          <SendMessage activeOpacity={0.75}>
            <Ionicons name="ios-send" size={24} color="#3dbc77" />
          </SendMessage>
        </Footer>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default Conversation
