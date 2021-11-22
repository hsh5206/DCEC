import React, {useCallback} from 'react'
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'

const iconSize = 30, iconColor = Colors.grey400
// const icons = ['home', 'table', 'bell', 'account'] 아이콘 순서

export default function BottomBar() {

    //navigation
    const navigation = useNavigation()
    const kakaoPress = useCallback(() => navigation.navigate('kakao'), [])
    const naverPress = useCallback(() => navigation.navigate('naver'), [])
    const wooahanress = useCallback(() => navigation.navigate('wooahan'), [])
    const dangeunPress = useCallback(() => navigation.navigate('dangeun'), [])
    const linePress = useCallback(() => navigation.navigate('line'), [])
  
  return(
    <View style={[styles.view]}>
      <TouchableOpacity onPress={kakaoPress}>
        <Text> 카카오 </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={naverPress}>
        <Text> 네이버 </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={wooahanress}>
        <Text> 우아한형제들 </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={dangeunPress}>
        <Text> 당근마켓 </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={linePress}>
        <Text> 라인 </Text>
      </TouchableOpacity>
    </View>
  )
}

//하단 아이콘 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', //배치 flex-start,flex-end,center,space-around,space-between,space-evenly
    padding: 10,
    backgroundColor: Colors.white
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
})