import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native'
import BottomBar from '../BottomBar'
import Board_Content from './Board_Content'

 
export default function Login() {

  return(
    <View style={{flex:1, backgroundColor:'white'}}>
      <View style={styles.content}>
        <Board_Content/>
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