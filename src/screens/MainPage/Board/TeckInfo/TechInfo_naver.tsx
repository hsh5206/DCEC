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

  const TechPress = () => {Alert.alert("클릭")}

  return(
    <View style={{flex:1, backgroundColor:'white'}}>
      <ScrollView>
        <View style={styles.content}>
          
        <View style={{flex:1,paddingVertical:1}}>

      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{marginTop:10,color:Colors.grey600}}>NAVER D2</Text></View>
        <View><Text>ArchUnit - UnitTest로 아키텍처 검사를</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.11</Text></View>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{marginTop:10,color:Colors.grey600}}>NAVER D2</Text></View>
        <View><Text>NAVER Tech Talk: FE devtalk (2021년 5월)</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.21</Text></View>
      </TouchableOpacity>

    </View>

        </View>
      </ScrollView>
    </View>
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