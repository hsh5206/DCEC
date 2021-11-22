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

import TopBar from '../../TopBar'
import Tech_Top_Bar from './Tech_Top_Bar'


export default function Login() {

  const navigation = useNavigation()
  const TechPress = useCallback(() => navigation.navigate('TechItem'), [])

  return(

    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <ScrollView>
        <View style={styles.content}>
          
        <View style={{flex:1,paddingVertical:1}}>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{marginTop:10,color:Colors.grey600}}>LINE</Text></View>
        <View><Text>뉴 노멀 시대의 인셉션 워크숍</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.11</Text></View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{marginTop:10,color:Colors.grey600}}>LINE</Text></View>
        <View><Text>개발자와 디자이너의 협업을 위한 LINE 디자인 시스템, LDS</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.01</Text></View>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{marginTop:10,color:Colors.grey600}}>LINE</Text></View>
        <View><Text>LINE Android CI에 App Bundle 적용기</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.21</Text></View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{marginTop:10,color:Colors.grey600}}>LINE</Text></View>
        <View><Text>CI/CD 자동화가 가져다 준 행복</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.14</Text></View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{marginTop:10,color:Colors.grey600}}>LINE</Text></View>
        <View><Text>LINE AR 렌더링 엔진 개발기</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.11</Text></View>
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
    backgroundColor: 'white',
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