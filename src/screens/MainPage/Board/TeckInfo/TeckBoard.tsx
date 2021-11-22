import React, {useCallback} from 'react'
import {StyleSheet, View, TouchableOpacity, Text, SafeAreaView, ScrollView, ImageBackground} from 'react-native'
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
    <View style={{flex:1, backgroundColor:'white'}}>
      <ImageBackground style={styles.content}source={require("../../../../assets/images/Board_Content_Design.png")}>
        <View>
          <TouchableOpacity style={{marginTop:120, marginLeft:190}}onPress={kakaoPress}>
            <Text style={styles.button}>우아한 형제들</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:40, marginLeft:50}}onPress={naverPress}>
            <Text style={styles.button}>네이버</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:110, marginLeft:205}}onPress={wooahanress}>
            <Text style={styles.button}>당근 마켓</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:130, marginLeft:50}}onPress={dangeunPress}>
            <Text style={styles.button}>카카오</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:50, marginLeft:220}}onPress={linePress}>
            <Text style={styles.button}>라인</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      
    </View>
  )
}

//하단 아이콘 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const
styles = StyleSheet.create({
  content: {
    flex:1,
    marginHorizontal:'5%',
  },
  button: {
    fontSize:20,
    color:Colors.grey800
  }
})
