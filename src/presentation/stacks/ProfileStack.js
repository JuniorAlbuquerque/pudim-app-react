import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import Profile from '../pages/Profile'
import PromoteAccount from '../pages/PromoteAccount'
import EditProfile from '../pages/EditProfile'

const Stack = createStackNavigator()

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="PromoteAccount"
      component={PromoteAccount}
      options={{
        headerShown: false,
        gestureDirection: 'horizontal',
        title: 'Voltar',
        headerTitleStyle: {
          fontFamily: 'Montserrat-Regular',
          fontSize: 16,
        },
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
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

export default ProfileStack
