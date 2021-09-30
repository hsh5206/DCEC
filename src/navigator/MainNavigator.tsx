import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/MainPage/Home'
import Board from '../screens/MainPage/Board/Board'
import Nontification from '../screens/MainPage/Nontification'
import UserSettings from '../screens/MainPage/UserSettings'
import Profile from '../screens/Profile'
import BoardNavigator from './BoardNavigator'
import SettingNavigator from './SettingNavigator'

const Stack = createStackNavigator()

export default function StartNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Board" component={Board} options={{headerShown: false}}/>
      <Stack.Screen name="Nontification" component={Nontification} options={{headerShown: false}}/>
      <Stack.Screen name="UserSettings" component={UserSettings} options={{title:"내정보"}}/>
      <Stack.Screen name="Profle" component={Profile} options={{title:"admin"}}/>
      <Stack.Screen
            name="BoardNavigator"
            component={BoardNavigator}
            options={{headerShown: false}}
      />
      <Stack.Screen
            name="SettingNavigator"
            component={SettingNavigator}
            options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}