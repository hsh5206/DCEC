import React,{useCallback} from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native'
import {Colors} from 'react-native-paper'

const Baek_onPress = () => {Alert.alert("백준 조회")}
const Git_onPress = () => {Alert.alert("깃허브 조회")}


export default function Login() {

  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <ScrollView>

        <View style={[styles.content,{alignItems: 'center'}]}>
          <Image style={styles.avatar} source={require("../../assets/images/RN.png")}/>
          <View style={{marginLeft:'4%'}}>
            <Text>ID : admin</Text>
            <Text style={{color:Colors.grey600}}>이름 : 개발용</Text>
          </View>
        </View>

        

        <View style={[styles.content,{height:280}]}>
          <View>
            <View style={{width:'82%', height:'15%',flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:23, fontWeight:'bold', marginVertical:3}}>백준</Text>
              <TouchableOpacity style={[styles.loginButton]}>
                <Text style={{color:'#52b9f1', fontSize:15, fontWeight:'600'}} onPress={Baek_onPress}>조회</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:18, marginVertical:10}}>ID</Text><Text style={{marginLeft:'10%' ,fontSize:18, marginVertical:10}}>hsh5206</Text>
            </View> 
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:18, marginVertical:10}}>랭킹</Text><Text style={{marginLeft:'10%' ,fontSize:18, marginVertical:10}}>2224</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:18, marginVertical:10}}>총 문제수</Text><Text style={{marginLeft:'10%' ,fontSize:18, marginVertical:10}}>744</Text>
            </View> 
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:18, marginVertical:10}}>해결 못한 문제수</Text><Text style={{marginLeft:'10%' ,fontSize:18, marginVertical:10}}>42</Text>
            </View> 
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:18, marginVertical:10}}>해결한 문제수</Text><Text style={{marginLeft:'10%' ,fontSize:18, marginVertical:10}}>602</Text>
            </View>
          </View>
        </View>

        <View style={[styles.content,{height:240}]}>
          <View>
          <View style={{width:'84%', height:'15%',flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:23, fontWeight:'bold', marginVertical:3}}>깃허브</Text>
              <TouchableOpacity style={[styles.loginButton]}>
                <Text style={{color:'#52b9f1', fontSize:15, fontWeight:'600'}} onPress={Git_onPress}>조회</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:18, marginVertical:10}}>ID</Text><Text style={{marginLeft:'10%' ,fontSize:18, marginVertical:10}}>hsh5206</Text>
            </View> 
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:18, marginVertical:10}}>가장 많이 사용한 언어</Text><Text style={{marginLeft:'10%' ,fontSize:18, marginVertical:10}}>javascript</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:18, marginVertical:10}}>주간 커밋</Text><Text style={{marginLeft:'10%' ,fontSize:18, marginVertical:10}}>23</Text>
            </View> 
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:18, marginVertical:10}}>총 커밋</Text><Text style={{marginLeft:'10%' ,fontSize:18, marginVertical:10}}>452</Text>
            </View>
          </View>
        </View>


      </ScrollView>
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
    borderColor:Colors.grey400,
  },
  avatar: {
    width:50,
    height:50,
    borderRadius: 12
  },
  loginButton: {
    width: '35%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey300,
    borderRadius: 8
  },
})