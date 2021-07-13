import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Routes from './infra/routes'
import { Provider } from 'react-redux'
import store from './data/store'
import Loader from './presentation/components/Loader'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'
import ShowTabProvider from './data/hooks/showTabs';



export default function App() {
  let [fontsLoaded] = useFonts({
    'Montserrat-Regular': Montserrat_400Regular,
    'Montserrat-Medium': Montserrat_500Medium,
    'Montserrat-SemiBold': Montserrat_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <StatusBar style="auto" backgroundColor="#fff" />
      <ShowTabProvider>
        <Routes />
      </ShowTabProvider>
      <Loader />
    </Provider>
  )
}
