import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text
} from 'react-native'
import BottomBar from '../../BottomBar'
import ContestList from './ContestList'

export default function Login() {
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <ScrollView>
        <View style={styles.content}>
          <ContestList/>
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
  },
})