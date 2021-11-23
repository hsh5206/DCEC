import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text
} from 'react-native'
import BottomBar from '../../BottomBar'
import Baekjun_Ranking from './Baekjun_Ranking'
import Baekjun_QnA from './Baekjun_QnA'
import Baekjun_HotProb from './Baekjun_HotProb'

export default function Login() {
  return(
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.content}>
          <Baekjun_Ranking/>
          <Baekjun_HotProb/>
          <Baekjun_QnA/>
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