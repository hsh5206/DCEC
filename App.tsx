import React from 'react'
import 'react-native-gesture-handler'
import {enableScreens} from 'react-native-screens'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {createStackNavigator} from '@react-navigation/stack'

import SwitchNavigator from './src/navigator/SwitchNavigator'

enableScreens() // v5의 렌더링 속도 성능 향상
const Stack = createStackNavigator()

export default function App() {
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <SwitchNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}