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
      </View>
      <ScrollView style={{paddingBottom:'5%'}}>
        <View style={styles.content}>
          <Text>내용없음</Text>
        </View>
        
      </ScrollView>
      <View style={{paddingTop:'10%'}}>
      <BottomBar/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: '7%',
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  content: {
    height:700,
    marginHorizontal:'5%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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