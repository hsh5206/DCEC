import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import userSettings from '../screens/MainPage/UserSettings'
import Ask from '../screens/Settings/Ask'
import Withdraw from '../screens/Settings/Withdraw'
import PassChange from '../screens/Settings/PassChange'
import Account from '../screens/Settings/Account'
import SeeBaek from '../screens/Settings/SeeBaek'
import SeeGit from '../screens/Settings/SeeGit'
const Stack = createStackNavigator()

export default function StartNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={userSettings} options={{title:"Settings", headerBackTitle:' '}}/>
      <Stack.Screen name="Ask" component={Ask} options={{title: "문의"}}/>
      <Stack.Screen name="Withdraw" component={Withdraw} options={{title: "회원탈퇴"}}/>
      <Stack.Screen name="PassChange" component={PassChange} options={{title: "비밀번호 변경"}}/>
      <Stack.Screen name="Account" component={Account} options={{title: "연동계정 관리", headerBackTitle:' '}}/>
      <Stack.Screen name="SeeBaek" component={SeeBaek} options={{title: "백준 문제 조회", headerBackTitle:' '}}/>
      <Stack.Screen name="SeeGit" component={SeeGit} options={{title: "깃허브 레포지터리 조회", headerBackTitle:' '}}/>
    </Stack.Navigator>
  )
}