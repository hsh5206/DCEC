import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text
} from 'react-native'
import {Colors} from 'react-native-paper'
import BottomBar from './BottomBar'


export default function Login() {

  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <View style={styles.header}>
        <View style={styles.centerView}>
          <Text style={{fontSize:20}}>알림</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Text>내용없음</Text>
        </View>
        <View style={styles.footer}>

        </View>
      </ScrollView>
      
      <BottomBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: '7%',
    backgroundColor:'green',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  content: {
    height: 500,
    marginHorizontal:'5%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footer: {
    height: '20%',
    marginHorizontal:'5%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  centerView: {
    flex: 1,
    height:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    backgroundColor: Colors.grey200
  }
})