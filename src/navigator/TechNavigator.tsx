import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, StyleSheet} from'react-native'

import TopBar from '../screens/MainPage/TopBar'
import BottomBar from '../screens/MainPage/BottomBar'

import TechInfo_kakao from '../screens/MainPage/Board/TeckInfo/TechInfo_kakao'
import TechInfo_naver from '../screens/MainPage/Board/TeckInfo/TechInfo_naver'
import TechInfo_wooahan from '../screens/MainPage/Board/TeckInfo/TechInfo_wooahan'
import TechInfo_dangeun from '../screens/MainPage/Board/TeckInfo/TechInfo_dangeun'
import TechInfo_line from '../screens/MainPage/Board/TeckInfo/TechInfo_line'

const Tab = createMaterialTopTabNavigator();

export default function StartNavigator(){
  return(
    <View style={{flex:1, backgroundColor:'white'}}>
    <View style={styles.content}>
    <Tab.Navigator>
      
      <Tab.Screen name="카카오" component={TechInfo_kakao} options={{}}/>
      <Tab.Screen name="네이버" component={TechInfo_naver} options={{}}/>
      <Tab.Screen name="우아한  형제들" component={TechInfo_wooahan} options={{}}/>
      <Tab.Screen name="당근마켓" component={TechInfo_dangeun} options={{}}/>
      <Tab.Screen name="라인" component={TechInfo_line} options={{}}/>
    </Tab.Navigator>
    </View >
    <View style={{paddingBottom:'5%'}}>
    <BottomBar/>
    </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex:1,
  }
})