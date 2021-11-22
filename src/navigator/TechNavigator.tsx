import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import TechInfo_kakao from '../screens/MainPage/Board/TeckInfo/TechInfo_kakao'
import TechInfo_naver from '../screens/MainPage/Board/TeckInfo/TechInfo_naver'
import TechInfo_wooahan from '../screens/MainPage/Board/TeckInfo/TechInfo_wooahan'
import TechInfo_dangeun from '../screens/MainPage/Board/TeckInfo/TechInfo_dangeun'
import TechInfo_line from '../screens/MainPage/Board/TeckInfo/TechInfo_line'

const Stack = createStackNavigator()

export default function StartNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="kakao" component={TechInfo_kakao} options={{headerShown:false}}/>
      <Stack.Screen name="naver" component={TechInfo_naver} options={{headerShown:false}}/>
      <Stack.Screen name="wooahan" component={TechInfo_wooahan} options={{headerShown:false}}/>
      <Stack.Screen name="dangeun" component={TechInfo_dangeun} options={{headerShown:false}}/>
      <Stack.Screen name="line" component={TechInfo_line} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}