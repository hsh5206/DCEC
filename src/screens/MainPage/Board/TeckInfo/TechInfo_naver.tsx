import React,{useCallback} from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image
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
        <View style={{flexDirection:'row'}}>
        <Image style={styles.logo} source={require('../../../../assets/images/RN.png')}/>
          <View>
            <View><Text style={{marginTop:10,color:Colors.grey600}}>네이버</Text></View>
            <View><Text>RN과 Flutter</Text></View>
            <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.08</Text></View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View style={{flexDirection:'row'}}>
        <Image style={styles.logo} source={require('../../../../assets/images/RN.png')}/>
          <View>
            <View><Text style={{marginTop:10,color:Colors.grey600}}>네이버</Text></View>
            <View><Text>네이버 'Techtalk'- 박람회</Text></View>
            <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.08</Text></View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View style={{flexDirection:'row'}}>
        <Image style={styles.logo} source={require('../../../../assets/images/RN.png')}/>
          <View>
            <View><Text style={{marginTop:10,color:Colors.grey600}}>네이버</Text></View>
            <View><Text>네이버 박람회</Text></View>
            <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.08</Text></View>
          </View>
        </View>
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
    marginHorizontal:'2%',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  date:{
    flexDirection:'row',
    justifyContent:'flex-end',
    width:'90%'
  },
  view: {
    flex:1,
    height:70,
    backgroundColor: 'white'
  },
  logo: {
    width:60,
    height:50,
    borderRadius: 10,
    marginTop: '1%',
    marginRight: '2%',
  },
})