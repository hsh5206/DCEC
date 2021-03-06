import React, {useCallback} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'
import type {AppState} from '../../store'
import * as L from '../../store/login'
import {useSelector} from 'react-redux'
import Axios from 'axios'

const iconSize = 30,
  iconColor = Colors.grey400
// const icons = ['home', 'table', 'bell', 'account'] 아이콘 순서

// prettier-ignore
export default function BottomBar() {
  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  // console.log(login)
  const {loggedIn, loggedUser} = login
  console.log(loggedUser)
  // Axios.get(`http://15.164.68.127:8080/api/member`, {
  //   headers: {
  //     Authorization: `Bearer
  // eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYTEyMzQiLCJyb2xlIjpbIlJPTEVfVVNFUiJdLCJuYW1lIjoi7ZmN6ri464-ZIiwiSWQiOiJhYTEyMzQiLCJleHAiOjE2Mzc2MDE1MjQsImlhdCI6MTYzNzU5NzkyNH0.jlFOE78iVGYXpuIOdH1bmSrkw9y6vN6I8rVhquu_234vMZ20MydXBidA3kAcKCga-fC8ZshwQU7XUmm1kJORkQ`,
  //   },
  // }).then(res => {
  //   console.log(res.data)
  // })
  
  //navigation
  const navigation = useNavigation()
  const homePress = useCallback(() => navigation.navigate('Home'), [])
  const tablePress = useCallback(() => navigation.navigate('BoardNavigator'), [])
  const bellPress = useCallback(() => navigation.navigate('Nontification'), [])
  const settingPress = useCallback(() => navigation.navigate('SettingNavigator'), [])
  const rankPress = useCallback(() => navigation.navigate('RankNavigator'), [])
  const TechInfoPress = useCallback(() => {alert("퀵메뉴")}, [])
  const accountPress = useCallback(() => {alert("퀵메뉴")}, [])
  const chatPress = useCallback(() => {alert("퀵메뉴")}, [])
  
  
  return(
    <View style={[styles.viewmain]}>
    <View style={[styles.view]}> 
      <Icon name='chart-bar' size={iconSize} color={iconColor} onPress={rankPress}/>
      <Icon name='table' size={iconSize} color={iconColor} onPress={tablePress}/>
      <Icon name='bell' size={iconSize} color={iconColor} onPress={bellPress}/>
      <Icon name='cog-outline' size={iconSize} color={iconColor} onPress={settingPress}/>
    </View>
    <View style={[styles.view]}>
      <Text> 랭킹 </Text>
      <Text>게시판 </Text>
      <Text>알림 </Text>
      <Text> 설정 </Text>
    </View>
    </View>
  )
}

//하단 아이콘 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', //배치 flex-start,flex-end,center,space-around,space-between,space-evenly
    padding: 1,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  viewmain: {
    justifyContent: 'space-around',
    backgroundColor: Colors.white,
    borderColor: Colors.grey300,
    borderWidth: 2,
    borderRadius: 20,
    height: '80%',
    paddingVertical:'5%'
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
})
