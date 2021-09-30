import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native'
import BottomBar from '../BottomBar'
import TopBar from '../TopBar'
import Board_Content from './Board_Content'


export default function Login() {

  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <TopBar/>
      <View style={styles.content}>
        <Board_Content/>
      </View>
      <BottomBar/>
    </SafeAreaView>
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