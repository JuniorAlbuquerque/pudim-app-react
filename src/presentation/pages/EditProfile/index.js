import React from 'react'

import { ContainerWithHeader, Text } from '../../styles/global'
import { Content, Form } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const EditProfile = () => {
  return (
    <ContainerWithHeader>
      <Content>
        <Text bold>Editar perfil</Text>
        <Form showsVerticalScrollIndicator={false}>
          <Text small style={{ marginBottom: 4 }}>
            Nome
          </Text>
          <Input value={'Junior'} />

          <Text small style={{ marginBottom: 4 }}>
            E-mail
          </Text>
          <Input value={'jnr@gmail.com'} />

          <Text small style={{ marginBottom: 4 }}>
            Descrição
          </Text>
          <Input value={'Viajante'} />

          <Text small style={{ marginBottom: 4 }}>
            Cep
          </Text>
          <Input />

          <Text small style={{ marginBottom: 4 }}>
            Cidade
          </Text>
          <Input value={'Parintins'} editable={false} />

          <Text small style={{ marginBottom: 4 }}>
            Estado
          </Text>
          <Input value={'Amazonas'} editable={false} />

          <Text small style={{ marginBottom: 4 }}>
            Rua
          </Text>
          <Input editable={false} />

          <Text small style={{ marginBottom: 4 }}>
            Bairro
          </Text>
          <Input />

          <Text small style={{ marginBottom: 4 }}>
            Número
          </Text>
          <Input />

          <Button style={{ marginTop: 8 }}>Salvar</Button>
        </Form>
      </Content>
    </ContainerWithHeader>
  )
}

export default EditProfile
