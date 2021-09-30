import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text
} from 'react-native'
import BottomBar from '../../BottomBar'
import TeckInfoList from './TeckInfoList'

export default function Login() {
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <ScrollView>
        <View style={styles.content}>
          <TeckInfoList/>
        </View>
      </ScrollView>
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
  },
})