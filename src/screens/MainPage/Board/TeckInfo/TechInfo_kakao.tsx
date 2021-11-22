import React,{useCallback} from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native'

import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

import Tech_TopBar from './Tech_Top_Bar'
import TopBar from '../../TopBar'

export default function Login() {

  const navigation = useNavigation()
  const TechPress = useCallback(() => navigation.navigate('TechItem'), [])

  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      
      <ScrollView>
        <View style={styles.content}>
          
        <View style={{flex:1,paddingVertical:1}}>
      
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>카카오</Text></View>
        <View><Text>카카오 사내 기술 세미나 'Techtalk'- 다섯 번째 이야기</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.08</Text></View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>카카오</Text></View>
        <View><Text>FE개발자의 성장 스토리 09 : Offscreencanvas 적용기</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.02</Text></View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>카카오</Text></View>
        <View><Text>카카오 사내 기술 세미나 ‘Techtalk’ – 네 번째 이야기</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.28</Text></View>
      </TouchableOpacity>
      
    </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex:1,
    marginHorizontal:'5%',
    backgroundColor: 'grey',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  date:{
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  view: {
    flex:1,
    height:70,
    marginVertical: 1,
    backgroundColor: 'white'
  },
})