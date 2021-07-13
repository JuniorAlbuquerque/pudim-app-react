import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import OnBoarding from '../pages/OnBoarding'
import LoginScreen from '../pages/Login'
import SignUpScreen from '../pages/SignUp'
import ProfileVisit from '../pages/ProfileVisit'
import Conversation from '../pages/Conversation'
import RecoverPassword from '../pages/RecoverPassword'

import MainTabs from './MainTabs'

const Stack = createStackNavigator()

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    mode="modal"
  >
    <Stack.Screen
      name="OnBoarding"
      component={OnBoarding}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        gestureDirection: 'horizontal',
        title: 'Voltar',
        headerTitleStyle: {
          fontFamily: 'Montserrat-Regular',
          fontSize: 16,
        },
      }}
    />
    <Stack.Screen
      name="RecoverPassword"
      component={RecoverPassword}
      options={{
        gestureDirection: 'horizontal',
        title: 'Voltar',
        headerTitleStyle: {
          fontFamily: 'Montserrat-Regular',
          fontSize: 16,
        },
      }}
    />
    <Stack.Screen
      name="Main"
      component={MainTabs}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProfileVisit"
      component={ProfileVisit}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Conversation"
      component={Conversation}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

export default MainStack
