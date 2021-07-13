import React, { useState } from 'react'
import { View } from 'react-native'

import { ContainerWithHeader, Text } from '../../styles/global'
import { Card } from './styles'

import Button from '../../components/Button'
import Input from '../../components/Input'

const RecoverPassword = () => {
  const [email, setEmail] = React.useState('')

  const handleSendPassword = () => {
    if (email) {
      alert(
        'Foram enviadas instruções para seu e-mail e/ou número de contato para efetivar a recuperação da sua senha',
      )
    } else {
      alert('Informe seu e-mail para prosseguirmos')
    }
  }

  return (
    <ContainerWithHeader>
      <Text small style={{ marginTop: 14, marginLeft: 8 }}>
        Informe seu e-mail de cadastro
      </Text>

      <Card>
        <Input
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />

        <Button onPress={handleSendPassword}>Solicitar nova senha</Button>

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
          ></Text>
        </View>
      </Card>
    </ContainerWithHeader>
  )
}

export default RecoverPassword
