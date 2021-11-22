import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, StyleSheet} from'react-native'

import TopBar from '../screens/MainPage/TopBar'
import BottomBar from '../screens/MainPage/BottomBar'

import Rank_baek from '../screens/MainPage/Board/Rank/Rank_baek'
import Rank_git from '../screens/MainPage/Board/Rank/Rank_git'
import Rank_all from '../screens/MainPage/Board/Rank/Rank_all'

const Tab = createMaterialTopTabNavigator();

export default function StartNavigator(){
  return(
    <View style={{flex:1, backgroundColor:'white'}}>
    <TopBar/>
    <View style={styles.content}>
    <Tab.Navigator>
      
      <Tab.Screen name="백준 랭킹" component={Rank_baek} options={{}}/>
      <Tab.Screen name="깃허브 랭킹" component={Rank_git} options={{}}/>
      <Tab.Screen name="통합 랭킹" component={Rank_all} options={{}}/>

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