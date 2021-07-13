import React, { useRef, useEffect, useState } from 'react'
import { Animated, Keyboard } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons'

import { Host } from 'react-native-portalize'
import { useShowTab } from '../../data/hooks/showTabs'

import CreateButton from '../components/CreatePostButton'
import Badge from '../components/Badge'

import Home from '../pages/Home'
import CreatePost from '../pages/CreatePost'
import Chat from '../pages/Chat'

import Search from './SearchStack'
import ProfileStack from './ProfileStack'

const Tab = createMaterialTopTabNavigator()

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Search: {
    lib: AntDesign,
    name: 'search1',
  },
  Chat: {
    lib: Ionicons,
    name: 'chatbubble-ellipses-outline',
  },
  Profile: {
    lib: AntDesign,
    name: 'user',
  },
}

const MainTabs = () => {
  const { showTab, setShowTab } = useShowTab()
  var buttonSize = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide)

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide)
    }
  }, [])

  const _keyboardDidShow = () => {
    setShowTab('none')
  }

  const _keyboardDidHide = () => {
    setShowTab('flex')
  }

  const handleAnimatedPress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.94,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start()
  }

  return (
    <Host>
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, focused }) => {
            if (route.name === 'CreatePost') {
              return (
                <Animated.View style={[{ transform: [{ scale: buttonSize }] }]}>
                  <CreateButton
                    onPress={() => {
                      handleAnimatedPress()
                      navigation.navigate('CreatePost')
                    }}
                    focused={focused}
                  />
                </Animated.View>
              )
            }
            const { lib: Icon, name } = icons[route.name]
            if (route.name === 'Chat') {
              return (
                <>
                  <Badge count={1} />
                  <Icon name={name} size={24} color={color} />
                </>
              )
            }
            return <Icon name={name} size={24} color={color} />
          },
        })}
        tabBarOptions={{
          style: {
            borderTopColor: '#c7c7c7',
            borderTopWidth: 0.5,
            display: showTab,
          },
          showLabel: false,
          showIcon: true,
          activeTintColor: '#22A45D',
          inactiveTintColor: '#515151',
          labelStyle: {
            fontFamily: 'Montserrat-Regular',
            fontSize: 11,
            textTransform: 'capitalize',
          },
          renderIndicator: () => null,
          indicatorStyle: {
            color: '#fff',
            backgroundColor: '#22A45D',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Início',
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Buscar',
          }}
        />
        <Tab.Screen
          name="CreatePost"
          component={CreatePost}
          options={{
            title: '',
            tabBarLabel: '',
          }}
        />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Perfil',
          }}
        />
      </Tab.Navigator>
    </Host>
  )
}

export default MainTabs
