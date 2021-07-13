import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStack from '../../presentation/stacks/MainStack'

function Routes() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default Routes
