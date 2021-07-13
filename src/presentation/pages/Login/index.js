import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Image } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'

import {
  Background,
  Container,
  Header,
  CardLogin,
  TextBold,
  Social,
  ButtonSocial,
} from './styles'

import { Text } from '../../styles/global'

import logoPudim from '../../../assets/logo-pudim.png'
import bgLogin from '../../../assets/login-bg.png'

import Facebook from '../../../assets/icons/facebook.svg'
import Google from '../../../assets/icons/google.svg'

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

function Login() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container nopading>
      <Header
      // start={{ x: 0, y: 0 }}
      // end={{ x: 1.1, y: 0 }}
      // colors={['#3dbc77', '#2A7A4E']}
      >
        <Image source={logoPudim} />
      </Header>

      <CardLogin>
        <Input
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          icon={
            <MaterialCommunityIcons
              name="email-outline"
              size={18}
              color="#868686"
            />
          }
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          icon={<AntDesign name="lock1" size={18} color="#868686" />}
        />

        <Text
          supersmall
          style={{
            alignSelf: 'flex-end',
            marginBottom: 14,
            marginTop: 4,
          }}
          onPress={() => navigation.navigate('RecoverPassword')}
        >
          Esqueci minha senha
        </Text>
        <Button
          onPress={() => navigation.reset({ routes: [{ name: 'Main' }] })}
        >
          Entrar
        </Button>

        <Text style={{ marginTop: 10, marginBottom: 5 }}>Ou</Text>

        <Social>
          <ButtonSocial
            style={{
              marginRight: 14,
              shadowOpacity: 0.75,
              shadowRadius: 5,
              shadowColor: 'rgba(0,0,0,0.25)',
              shadowOffset: { height: 2, width: 1 },
            }}
            small
          >
            <Facebook width="18" height="18" />
            <Text small style={{ marginLeft: 4 }}>
              Facebook
            </Text>
          </ButtonSocial>

          <ButtonSocial
            style={{
              shadowOpacity: 0.75,
              shadowRadius: 5,
              shadowColor: 'rgba(0,0,0,0.25)',
              shadowOffset: { height: 2, width: 1 },
            }}
          >
            <Google width="20" height="18" />
            <Text small style={{ marginLeft: 4 }}>
              Google
            </Text>
          </ButtonSocial>
        </Social>

        <View
          style={{
            marginBottom: 10,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text small>Não possui conta?</Text>
          <TextBold onPress={() => navigation.navigate('SignUp')}>
            Cadastre-se aqui
          </TextBold>
        </View>
      </CardLogin>
      <Background>
        <Image source={bgLogin} style={{ zIndex: 0 }} />
      </Background>
    </Container>
  )
}

export default Login
