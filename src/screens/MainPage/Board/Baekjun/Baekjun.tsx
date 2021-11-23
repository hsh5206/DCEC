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
import Github_Ranking from '../Github/Github_Ranking'
import QnA from './Baekjun_QnA'

export default function Login() {
  return(
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.content}>
          <Baekjun_Ranking/>
          <Github_Ranking/>
          <QnA/>
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