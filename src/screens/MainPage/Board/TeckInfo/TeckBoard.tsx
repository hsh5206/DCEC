import React, {useCallback} from 'react'
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'

const iconSize = 30, iconColor = Colors.grey400
// const icons = ['home', 'table', 'bell', 'account'] 아이콘 순서

export default function TechBoard() {

    //navigation
    const navigation = useNavigation()
    const kakaoPress = useCallback(() => navigation.navigate('kakao'), [])
    const naverPress = useCallback(() => navigation.navigate('naver'), [])
    const wooahanress = useCallback(() => navigation.navigate('wooahan'), [])
    const dangeunPress = useCallback(() => navigation.navigate('dangeun'), [])
    const linePress = useCallback(() => navigation.navigate('line'), [])
  
  return(
    <View style={[styles.view]}>
      <TouchableOpacity style={styles.Button} onPress={kakaoPress}>
        <Text style={{color:'white', fontSize:15, fontWeight:'900'}}> 카카오 </Text>
      </TouchableOpacity >
      <TouchableOpacity style={styles.Button} onPress={naverPress}>
        <Text style={{color:'white', fontSize:15, fontWeight:'900'}}> 네이버 </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={wooahanress}>
        <Text style={{color:'white', fontSize:15, fontWeight:'900'}}> 우아한 형제들 </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={dangeunPress}>
        <Text style={{color:'white', fontSize:15, fontWeight:'900'}}> 당근 마켓 </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={linePress}>
        <Text style={{color:'white', fontSize:15, fontWeight:'900'}}> 라인 </Text>
      </TouchableOpacity>
    </View>
  )
}

//하단 아이콘 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const styles = StyleSheet.create({
  view: {
    flex:1,
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
  Button: {
    width: '65%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    backgroundColor: '#52b9f1',
    borderRadius: 15
  },
})