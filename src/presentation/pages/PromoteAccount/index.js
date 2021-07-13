import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

import Services from '../../components/Services'
import Company from '../../components/Company'

import { ButtonBack, Header, Buttons, Button } from './styles'

import { Container, Text } from '../../styles/global'

const PromoteAccount = () => {
  const [type, setType] = useState(0)
  const [back, setBack] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    if (back) {
      navigation.goBack()
    }
  }, [back])

  return (
    <Container nopading style={{ justifyContent: 'space-between' }}>
      <View style={{ flex: 1 }}>
        <Header>
          <ButtonBack onPress={() => setBack(true)}>
            <Feather name="arrow-left" size={24} color="#000" />
          </ButtonBack>
          <Text>Voltar</Text>
        </Header>

        <Text small medium style={{ padding: 8 }}>
          Promover conta para
        </Text>

        <Buttons>
          <Button active={type === 0} onPress={() => setType(0)}>
            <Text small white>
              Prestador de Serviço
            </Text>
          </Button>

          <Button active={type === 1} onPress={() => setType(1)}>
            <Text small white>
              Estabelecimento
            </Text>
          </Button>
        </Buttons>

        {/* <Text small style={{ padding: 8 }}>
          Nos informe mais sobre o que você oferece
        </Text> */}

        {type === 0 && <Services />}
        {type === 1 && <Company />}
      </View>
    </Container>
  )
}

export default PromoteAccount
