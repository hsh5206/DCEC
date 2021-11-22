import React, {useCallback} from 'react'
import {StyleSheet, View} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'

const iconSize = 30, iconColor = Colors.grey400
// const icons = ['home', 'table', 'bell', 'account'] 아이콘 순서

export default function BottomBar() {

    //navigation
    const navigation = useNavigation()
    const homePress = useCallback(() => navigation.navigate('Home'), [])
    const tablePress = useCallback(() => navigation.navigate('BoardNavigator'), [])
    const bellPress = useCallback(() => navigation.navigate('Nontification'), [])
    const accountPress = useCallback(() => navigation.navigate('SettingNavigator'), [])
    const TechInfoPress = useCallback(() => navigation.navigate('TechNavigator'), [])
  
  return(
    <View style={[styles.viewmain]}>
    <View style={[styles.view]}> 
      <Icon name='home' size={iconSize} color={iconColor} onPress={homePress}/>
      <Icon name='table' size={iconSize} color={iconColor} onPress={tablePress}/>
      <Icon name='bell' size={iconSize} color={iconColor} onPress={bellPress}/>
      <Icon name='account' size={iconSize} color={iconColor} onPress={accountPress}/>
    </View>
    <View style={[styles.view]}>
      <Icon name='chart-bar' size={iconSize} color={iconColor} onPress={homePress}/>
      <Icon name='book-open-page-variant' size={iconSize} color={iconColor} onPress={TechInfoPress}/>
      <Icon name='chat' size={iconSize} color={iconColor} onPress={bellPress}/>
      <Icon name='cog-outline' size={iconSize} color={iconColor} onPress={accountPress}/>
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
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  viewmain:{
    justifyContent: 'space-around',
    backgroundColor: Colors.white,
    borderColor: Colors.grey300,
    borderWidth: 2,
    borderRadius: 20,
    height: '80%'
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
})