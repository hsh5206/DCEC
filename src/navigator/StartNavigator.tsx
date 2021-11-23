import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup_1'
import Signup2 from '../screens/Signup_2'
import Signup3 from '../screens/Signup_3'

const Stack = createStackNavigator()

export default function StartNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
      <Stack.Screen name="Signup2" component={Signup2} options={{headerShown: false}}/>
      <Stack.Screen name="Signup3" component={Signup3} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}