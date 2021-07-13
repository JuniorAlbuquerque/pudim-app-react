import React, { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ContainerWithHeader, Text } from '../../styles/global'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../../components/Button'
import Input from '../../components/Input'

import { CardLogin } from './styles'

function SignUp() {
  const navigation = useNavigation()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  })

  return (
    <ContainerWithHeader>
      <CardLogin>
        <Input
          placeholder="Nome"
          onChangeText={(text) => setUserData({ ...userData, name: text })}
        />
        <Input
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setUserData({ ...userData, email: text })}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword({ ...userData, password: text })}
        />

        <Button
          onPress={() => navigation.reset({ routes: [{ name: 'Main' }] })}
        >
          Cadastrar
        </Button>

        <View
          style={{
            marginBottom: 10,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            small
            medium
            onPress={() => navigation.goBack()}
            style={{ color: '#3dbc77' }}
          >
            Efetuar Login
          </Text>
        </View>
      </CardLogin>
    </ContainerWithHeader>
  )
}

export default SignUp
