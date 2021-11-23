import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {View, StyleSheet} from 'react-native'

import TechNavigator from './TechNavigator'
import Board from '../screens/MainPage/Board/Board'
import Baekjun_Github from '../screens/MainPage/Board/Baekjun/Baekjun'
import Notice from '../screens/MainPage/Board/Notice/Notice'
import ContestInfo from '../screens/MainPage/Board/ContestInfo/Contest_Information'
import NoticeItem from '../screens/MainPage/Board/Notice/NoticeItem'
import TechItem from '../screens/MainPage/Board/TeckInfo/TechItem'
import ContWebView from '../screens/MainPage/Board/ContestInfo/Contest_Webview'
import QnA from '../screens/MainPage/Board/QnA/QnA'
import QnA_Board from '../screens/MainPage/Board/QnA/QnA_Board'
import Free from '../screens/MainPage/Board/Free/Free'
import Free_Board from '../screens/MainPage/Board/Free/Free_Board'
import Toy from '../screens/MainPage/Board/Toy/Toy'
import Toy_Board from '../screens/MainPage/Board/Toy/Toy_Board'
import Study from '../screens/MainPage/Board/Study/Study'
import Study_Board from '../screens/MainPage/Board/Study/Study_Board'

import Write from '../screens/MainPage/Board/Write'

import TopBar from '../screens/MainPage/TopBar'

const Stack = createStackNavigator()

export default function StartNavigator(){
  return(
    <View style={{flex:1}}>

      
    <TopBar/>
    
    <Stack.Navigator>
      <Stack.Screen name="Board" component={Board} options={{headerShown:false}}/>
      <Stack.Screen name="Baekjun_Github" component={Baekjun_Github} options={{title: "백준&깃허브", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="QnA" component={QnA} options={{title: "QnA", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="QnA_Board" component={QnA_Board} options={{title: " ", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="Free" component={Free} options={{title: "자유게시판", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="Free_Board" component={Free_Board} options={{title: " ", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="Toy" component={Toy} options={{title: "토이프로젝트", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="Toy_Board" component={Toy_Board} options={{title: " ", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="Study" component={Study} options={{title: "스터디", headerBackTitle:' ', headerStatusBarHeight:1}}/>
      <Stack.Screen name="Study_Board" component={Study_Board} options={{title: " ", headerBackTitle:' ', headerStatusBarHeight:1}}/>
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