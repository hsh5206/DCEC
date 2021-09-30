import React from 'react'
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Text,
} from 'react-native'
import BottomBar from './BottomBar'
import TopBar from './TopBar'
import BaekjunRank from './Board/Baekjun/Baekjun_Ranking'
import GithubRank from './Board/Github/Github_Ranking'
import HotBoard from './HotBoard'

export default function Login() {

  return(
    <SafeAreaView style={{flex:1}}>
      <TopBar/>
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.content}>
          <BaekjunRank/>
          <GithubRank/>
          <HotBoard/>
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
  }
})