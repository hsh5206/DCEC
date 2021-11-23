import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import NoticeList from './NoticeList'
import BottomBar from '../../BottomBar'

export default function Login() {
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <ScrollView>
        <View style={styles.content}>
          <NoticeList/>
        </View>
      </ScrollView>
    <BottomBar/>
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
  }
})