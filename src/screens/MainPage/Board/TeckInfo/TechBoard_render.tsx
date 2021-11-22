import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native'
import BottomBar from '../../BottomBar'
import TopBar from '../../TopBar'
import TechBoard from './TeckBoard'

 
export default function Login() {

  return(
    <View style={{flex:1, backgroundColor:'white'}}>
      <TopBar/>
      <View style={styles.content}>
        <TechBoard/>
      </View>
      <View style={{paddingBottom:'5%'}}>
        <BottomBar/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex:1,
    marginHorizontal:'5%',
    backgroundColor: 'blue',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})