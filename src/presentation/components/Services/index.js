import React, { useState } from 'react'
import { View } from 'react-native'
import { Transition, Transitioning } from 'react-native-reanimated'
import { AntDesign } from '@expo/vector-icons'

import { Checkbox } from 'react-native-paper'
import { Text } from '../../styles/global'

import {
  HeaderCollapse,
  Collapse,
  Collapse2,
  Buttons,
  Button,
  CheckItem,
  Footer,
  ButtonFooter,
} from './styles'

const checkCategory = [
  {
    id: 0,
    text: 'Agência de Viagens',
    checked: false,
    services: [
      {
        id: 0,
        service: 'Agenciamento de viagens com transporte',
        checked: false,
      },
      { id: 1, service: 'Hospedagens', checked: false },
      { id: 2, service: 'Cruzeiros', checked: false },
      { id: 3, service: 'Guia Turístico', checked: false },
    ],
  },
  {
    id: 1,
    text: 'Guia Turístico',
    checked: false,
    services: [
      {
        id: 0,
        service: 'Roteiro personalizado com acompanhamento',
        checked: false,
      },
      { id: 1, service: 'Turismo de consumo', checked: false },
      { id: 2, service: 'Turismo de negócios', checked: false },
      { id: 3, service: 'Turismo gastronômico', checked: false },
      { id: 4, service: 'Turismo de esportes', checked: false },
      { id: 5, service: 'Turismo de saúde', checked: false },
      { id: 6, service: 'Turismo de religioso', checked: false },
      { id: 7, service: 'Turismo cultural', checked: false },
      { id: 8, service: 'Turismo de eventos', checked: false },
      { id: 9, service: 'Turismo de estudos', checked: false },
      { id: 10, service: 'Agroturismo ou turismo rural', checked: false },
      { id: 11, service: 'Turismo de aventura', checked: false },
    ],
  },
  {
    id: 2,
    text: 'Tradutor',
    checked: false,
    services: [{ id: 0, service: 'Línguas', checked: false }],
  },
  {
    id: 3,
    text: 'Outros serviços de apoio a viagens e passeios',
    checked: false,
    services: [
      { id: 0, service: 'Passeio de barco', checked: false },
      { id: 1, service: 'Trilha ecológica', checked: false },
      { id: 2, service: 'Esportes radicais', checked: false },
      { id: 3, service: 'Locação de bicicletas infantis', checked: false },
      { id: 4, service: 'Locação de bicicletas adulto', checked: false },
      {
        id: 5,
        service: 'Locação de bicicletas especializada para trilha',
        checked: false,
      },
      { id: 6, service: 'Locação de veículos', checked: false },
    ],
  },
]

const CONTENT = [
  {
    title: 'Em qual categoria me enquadro?',
  },
  {
    title: 'Quais serviços ofereço?',
  },
]

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
)

const Services = () => {
  const [activeSection, setActiveSection] = useState(null)
  const [categorySelected, setCat] = useState(null)
  const [checks, setChecks] = useState(checkCategory)
  const [checksServices, setChecksServices] = useState(
    categorySelected !== null && checks[categorySelected].services,
  )

  const ref = React.useRef()

  const handleCheck = (id, type) => {
    var vector = []
    if (type === 'category') {
      setCat(id)
      setChecksServices(checks[id].services)
      vector = checks
    } else {
      vector = checksServices
    }
    const index = vector.findIndex((obj) => obj.id === id)

    const newData = vector.map((checkbox, i) =>
      i !== index && type === 'category'
        ? {
            ...checkbox,
            checked: false,
          }
        : i === index
        ? {
            ...checkbox,
            checked: !checkbox.checked,
          }
        : checkbox,
    )

    type === 'category' ? setChecks(newData) : setChecksServices(newData)
  }

  return (
    <Transitioning.View ref={ref} transition={transition}>
      <Text
        small
        bold
        style={{ marginBottom: 4, marginHorizontal: 8, marginTop: 4 }}
      >
        Nos informe mais sobre o que você oferece
      </Text>
      {CONTENT.map((item, index) => (
        <View key={index}>
          <HeaderCollapse
            onPress={() => {
              ref.current.animateNextTransition()
              setActiveSection(index === activeSection ? null : index)
            }}
            activeOpacity={0.9}
          >
            <Text small medium>
              {item.title}
            </Text>
            {activeSection === index ? (
              <AntDesign name="caretup" size={12} color="black" />
            ) : (
              <AntDesign name="caretdown" size={12} color="black" />
            )}
          </HeaderCollapse>

          {activeSection === index &&
            (index === 0 ? (
              <Collapse>
                {checks.map((item, id) => (
                  <CheckItem key={item.id}>
                    <Checkbox
                      status={item.checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        handleCheck(id, 'category')
                      }}
                      color="#22A45D"
                      uncheckedColor="#CDCDCD"
                      style={{ backgroundColor: '#fff' }}
                    />
                    <Text
                      small
                      style={{ marginLeft: 4 }}
                      onPress={() => {
                        handleCheck(id, 'category')
                      }}
                    >
                      {item.text}
                    </Text>
                  </CheckItem>
                ))}
              </Collapse>
            ) : (
              <Collapse2>
                {categorySelected !== null &&
                  checksServices.map((item, index) => (
                    <CheckItem key={index}>
                      <Checkbox
                        status={item.checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                          handleCheck(item.id, 'services')
                        }}
                        color="#22A45D"
                        uncheckedColor="#CDCDCD"
                      />
                      <Text
                        small
                        style={{ marginLeft: 4 }}
                        onPress={() => {
                          handleCheck(item.id, 'services')
                        }}
                      >
                        {item.service}
                      </Text>
                    </CheckItem>
                  ))}
                <Footer>
                  <ButtonFooter type="save" activeOpacity={0.75}>
                    <Text white small medium>
                      Salvar mudanças
                    </Text>
                  </ButtonFooter>

                  <ButtonFooter activeOpacity={0.75}>
                    <Text white small medium>
                      Cancelar
                    </Text>
                  </ButtonFooter>
                </Footer>
              </Collapse2>
            ))}
        </View>
      ))}
    </Transitioning.View>
  )
}

export default Services
