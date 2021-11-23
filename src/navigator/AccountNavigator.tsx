import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import userSettings from '../screens/MainPage/UserSettings'
import Account from '../screens/Settings/Account'
import SeeBaek from '../screens/Settings/SeeBaek'
import SeeGit from '../screens/Settings/SeeGit'
const Stack = createStackNavigator()

export default function StartNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} options={{headerShown:false}}/>
      <Stack.Screen name="SeeBaek" component={SeeBaek} options={{headerShown:false}}/>
      <Stack.Screen name="SeeGit" component={SeeGit} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}