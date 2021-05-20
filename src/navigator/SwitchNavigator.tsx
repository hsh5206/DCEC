import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import SplashScreen from '../screens/SplashScreen'
import StartNavigator from './StartNavigator'
import MainNavigator from './MainNavigator'

const Stack = createStackNavigator()

export default function StwichNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
      />
      <Stack.Screen
          name="StartNavigator"
          component={StartNavigator}
          options={{headerShown: false}}
      />
      <Stack.Screen
          name="MainNavigator"
          component={MainNavigator}
          options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}