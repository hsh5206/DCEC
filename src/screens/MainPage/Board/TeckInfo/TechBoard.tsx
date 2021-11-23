import React, {useCallback} from 'react'
import {StyleSheet, View, TouchableOpacity, Text, SafeAreaView, ScrollView, ImageBackground} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'

import TopBar from '../../TopBar'
import Tech_Top_Bar from './Tech_Top_Bar'

export default function TechBoard() {

  return(
    <View style={{flex:1, backgroundColor:'white'}}>
      <TopBar/>
      <Tech_Top_Bar/>
      
    </View>
  )
}

//하단 아이콘 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const
styles = StyleSheet.create({
  button: {
    fontSize:18,
    color:Colors.grey800,
    marginLeft:5,
    
  }
})
