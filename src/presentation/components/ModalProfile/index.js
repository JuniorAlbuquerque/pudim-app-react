import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container, Row, ButtonOption } from './styles'
import { Text } from '../../styles/global'

import Upgrade from '../../../assets/icons/upgrade.svg'
import Info from '../../../assets/icons/info.svg'
import Edit from '../../../assets/icons/edit.svg'
import Logout from '../../../assets/icons/logout.svg'

const ModalProfile = ({ onClose }) => {
  const navigation = useNavigation()

  return (
    <Container>
      <Row>
        <ButtonOption
          onPress={() => {
            onClose(), navigation.navigate('PromoteAccount')
          }}
        >
          <Upgrade style={{ marginRight: 14 }} />
          <Text medium small>
            Promover Conta
          </Text>
        </ButtonOption>
      </Row>

      <Row>
        <ButtonOption>
          <Info style={{ marginRight: 16 }} />
          <Text medium small>
            Informações
          </Text>
        </ButtonOption>
      </Row>

      <Row>
        <ButtonOption
          onPress={() => {
            onClose(), navigation.navigate('EditProfile')
          }}
        >
          <Edit style={{ marginRight: 15 }} />
          <Text medium small>
            Editar Perfil
          </Text>
        </ButtonOption>
      </Row>

      <Row>
        <ButtonOption onPress={() => navigation.navigate('Login')}>
          <Logout style={{ marginRight: 16 }} />
          <Text medium small>
            Sair
          </Text>
        </ButtonOption>
      </Row>
    </Container>
  )
}

export default ModalProfile
