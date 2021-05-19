import React from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './Login'
import Signup from './Signup'

const Stack = createStackNavigator()

export default function MainNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{title: ""}}/>
    </Stack.Navigator>
  )
}