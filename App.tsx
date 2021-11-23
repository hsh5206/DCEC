import React from 'react'
import 'react-native-gesture-handler'
import {enableScreens} from 'react-native-screens'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider as ReduxProvider} from 'react-redux'

import SwitchNavigator from './src/navigator/SwitchNavigator'
import {makeStore} from './src/store'

enableScreens() // v5의 렌더링 속도 성능 향상
const Stack = createStackNavigator()
const store = makeStore()

export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <SwitchNavigator />
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  )
}
