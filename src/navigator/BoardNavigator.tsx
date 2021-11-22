import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Board from '../screens/MainPage/Board/Board'
import Baekjun from '../screens/MainPage/Board/Baekjun/Baekjun'
import Github from '../screens/MainPage/Board/Github/Github'
import Notice from '../screens/MainPage/Board/Notice/Notice'
import TechnicalInfo from '../screens/MainPage/Board/TeckInfo/Technical_Information'
import ContestInfo from '../screens/MainPage/Board/ContestInfo/Contest_Information'
import NoticeItem from '../screens/MainPage/Board/Notice/NoticeItem'
import TechItem from '../screens/MainPage/Board/TeckInfo/TechItem'
import ContWebView from '../screens/MainPage/Board/ContestInfo/Contest_Webview'

const Stack = createStackNavigator()

export default function StartNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Board" component={Board} options={{headerShown:false}}/>
      <Stack.Screen name="Baekjun" component={Baekjun} options={{title: "백준", headerBackTitle:'게시판'}}/>
      <Stack.Screen name="Github" component={Github} options={{title: "깃허브", headerBackTitle:'게시판'}}/>
      <Stack.Screen name="Notice" component={Notice} options={{title: "공지사항", headerBackTitle:'게시판'}}/>
      <Stack.Screen name="TechInfo" component={TechnicalInfo} options={{title: "기술정보", headerBackTitle:'게시판'}}/>
      <Stack.Screen name="ContInfo" component={ContestInfo} options={{title: "공모전", headerBackTitle:'게시판'}}/>
      <Stack.Screen name="NoticeItem" component={NoticeItem} options={{title: ""}}/>
      <Stack.Screen name="TechItem" component={TechItem} options={{title: ""}}/>
      <Stack.Screen name="ContWebView" component={ContWebView} options={{title: ""}}/>
    </Stack.Navigator>
  )
}