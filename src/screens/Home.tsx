import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native'

export default function Login() {
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <View style={styles.header}><Text>header</Text></View>
      <View style={styles.content}><Text>content</Text></View>
      <View style={styles.footer}><Text>footer</Text></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: '20%',
    marginHorizontal:'5%',
    backgroundColor: 'green',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  content: {
    flex:1,
    marginHorizontal:'5%',
    backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footer: {
    height: '20%',
    marginHorizontal:'5%',
    backgroundColor: 'blue',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})