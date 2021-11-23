import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {View, StyleSheet} from 'react-native'

import TechNavigator from './TechNavigator'
import Board from '../screens/MainPage/Board/Board'
import Baekjun from '../screens/MainPage/Board/Baekjun/Baekjun'
import Github from '../screens/MainPage/Board/Github/Github'
import Notice from '../screens/MainPage/Board/Notice/Notice'
import ContestInfo from '../screens/MainPage/Board/ContestInfo/Contest_Information'
import NoticeItem from '../screens/MainPage/Board/Notice/NoticeItem'
import TechItem from '../screens/MainPage/Board/TeckInfo/TechItem'
import ContWebView from '../screens/MainPage/Board/ContestInfo/Contest_Webview'
import QnA from '../screens/MainPage/Board/QnA/QnA'
import QnA_Board from '../screens/MainPage/Board/QnA/QnA_Board'
import Write from '../screens/MainPage/Board/Write'

import TopBar from '../screens/MainPage/TopBar'

const Stack = createStackNavigator()

export default function StartNavigator(){
  return(
    <View style={{flex:1}}>

      
    <TopBar/>
    
    <Stack.Navigator>
      <Stack.Screen name="Board" component={Board} options={{headerShown:false}}/>
      <Stack.Screen name="Baekjun" component={Baekjun} options={{title: "백준", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="QnA" component={QnA} options={{title: "QnA", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="QnA_Board" component={QnA_Board} options={{title: " ", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="Github" component={Github} options={{title: "깃허브", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="Notice" component={Notice} options={{title: "공지사항", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="ContInfo" component={ContestInfo} options={{title: "공모전", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="NoticeItem" component={NoticeItem} options={{title: "", headerStatusBarHeight:1}}/>
      <Stack.Screen name="TechItem" component={TechItem} options={{title: "", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="ContWebView" component={ContWebView} options={{title: "", headerBackTitle:'DCEC', headerStatusBarHeight:1}}/>

      <Stack.Screen name="Write" component={Write} options={{title: " ", headerBackTitle:' ', headerTransparent: true, headerStatusBarHeight:1}}/>

      <Stack.Screen
            name="TechNavigator" 
            component={TechNavigator}
            options={{title: "기술&정보", headerBackTitle:' ', headerStatusBarHeight:1}}
      />

    </Stack.Navigator>
    </View >
  )
}

const styles = StyleSheet.create({
  content: {
    flex:1,
  }
})