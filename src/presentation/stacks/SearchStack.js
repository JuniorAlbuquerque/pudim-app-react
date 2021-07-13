import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import Search from '../pages/Search'
import ResultSearch from '../pages/ResultSearch'

const Stack = createStackNavigator()

const SearchStack = () => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      name="Search"
      component={Search}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ResultSearch"
      component={ResultSearch}
      options={{
        gestureDirection: 'horizontal',
        title: 'Voltar',
        headerTitleStyle: {
          fontFamily: 'Montserrat-Regular',
          fontSize: 16,
        },
      }}
    />
  </Stack.Navigator>
)

export default SearchStack
