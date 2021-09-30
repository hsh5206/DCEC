import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text
} from 'react-native'
import {Colors} from 'react-native-paper'


export default function Login() {

  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>

        <View style={[styles.content,{alignItems: 'center'}]}>
          <Image style={styles.avatar} source={require("../assets/images/RN.png")}/>
          <View style={{marginLeft:'4%'}}>
            <Text>ID : admin</Text>
            <Text style={{color:Colors.grey600}}>이름 : 개발용</Text>
          </View>
        </View>
        
        <View style={[styles.content,{height:160}]}>
          <View>
            <Text style={{fontSize:23, fontWeight:'bold', marginVertical:10}}>랭킹</Text>
            <Text style={{fontSize:20, marginVertical:10}}>백준 랭킹 : 1</Text>
            <Text style={{fontSize:20, marginVertical:10}}>깃허브 랭킹 : 2</Text>
          </View>
        </View>

        <View style={[styles.content,{height:160}]}>
          <View>
            <Text style={{fontSize:23, fontWeight:'bold', marginVertical:10}}>계정 방문</Text>
            <Text style={{fontSize:20, marginVertical:10}}>백준</Text>
            <Text style={{fontSize:20, marginVertical:10}}>깃허브</Text>
          </View>
        </View>

        <View style={[styles.content,{height:200}]}>
          <View>
            <Text style={{fontSize:23, fontWeight:'bold', marginVertical:10}}>커뮤니티(미구현)</Text>
            <Text style={{fontSize:20, marginVertical:10}}>메시지</Text>
            <Text style={{fontSize:20, marginVertical:10}}>팔로우</Text>
            <Text style={{fontSize:20, marginVertical:10}}>사용 언어 비율</Text>
          </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    height: 80,
    marginHorizontal:'5%',
    marginVertical:'2%',
    padding:'3%',
    flexDirection: 'row',
    borderWidth:1,
    borderRadius:10,
    borderColor:Colors.grey400
  },
  avatar: {
    width:50,
    height:50,
    borderRadius: 12
  },
})