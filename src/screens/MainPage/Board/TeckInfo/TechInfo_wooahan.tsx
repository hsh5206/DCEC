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

import TopBar from './Tech_Top_Bar'

export default function Login() {

  const navigation = useNavigation()
  const TechPress = useCallback(() => navigation.navigate('TechItem'), [])

  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <TopBar/>
      <ScrollView>
        <View style={styles.content}>
          
        <View style={{flex:1,paddingVertical:1}}>

      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>우아한형제들</Text></View>
        <View><Text>우아한형제들 기획자 소개와 개발자와의 협업문화 인터뷰</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.07</Text></View>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>우아한형제들</Text></View>
        <View><Text>우아한형제들 Developer Relations-Updated</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.04.28</Text></View>
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