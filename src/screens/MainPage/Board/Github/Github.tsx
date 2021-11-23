import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text
} from 'react-native'
import BottomBar from '../../BottomBar'
import Github_Ranking from './Github_Ranking'
import Github_QnA from './Github_QnA'
import Github_Month from './Github_Ranking_Month'

export default function Login() {
  return(
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.content}>
          <Github_Ranking/>
          <Github_QnA/>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
})