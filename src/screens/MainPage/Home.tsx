import React from 'react'
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  ImageBackground,
} from 'react-native'
import TopBar from './TopBar'
import Temp_HotBoard from './temp_HotBoard'
import Temp_HotBoard2 from './temp_HotBoard'
import BaekjunRank from './Board/Baekjun/Baekjun_Ranking'
import GithubRank from './Board/Github/Github_Ranking'
import HotBoard from './HotBoard'
import MainMenu from './Main_Menu'

export default function Login() {

  return(
    <>
      <TopBar/>
      <SafeAreaView style={{flex:1}}>
      <ScrollView style={{ backgroundColor:'#52b9f1'}}>

        <View style={styles.header}>
          <ImageBackground source={require('../../assets/images/main_background.png')} resizeMode="cover"
              style={{flex:1,justifyContent:"center", width:'120%', height:'130%', paddingHorizontal:'5%', paddingVertical:'5%'}}>
                <MainMenu/>
          </ImageBackground>
        </View>

      <View style={{paddingLeft:'3%', paddingTop:'5%', paddingBottom:'3%', backgroundColor:'white'}}>
        <Text style={{fontWeight:'500',fontSize:20}}> 추천 기술 블로그 </Text>
      </View>
      
      <View style={{backgroundColor:'white', flexDirection:'row', width:'100%',justifyContent:'space-around'}}>
        
      </View>
        
      </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  content: {
    flex:1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})




/*
<View style={styles.content}>
          <BaekjunRank/>
          <GithubRank/>
          <HotBoard/>
        </View>

        <View style={{paddingTop:'8%', paddingHorizontal:'4%', backgroundColor:'white'}}>
        </View>
*/