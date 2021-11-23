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
import {useNavigation} from '@react-navigation/native'


export default function Login() {

  const navigation = useNavigation()
  const askPress = useCallback(() => navigation.navigate('Ask'), [])
  const withdrawPress = useCallback(()=> navigation.navigate('Withdraw'),[])
  const logoutPress = useCallback(()=> {Alert.alert("로그아웃 완료"), navigation.navigate('Login')},[])
  const passwordChange = useCallback(()=> navigation.navigate('PassChange'),[])
  const Account = useCallback(()=> navigation.navigate('Account'),[])

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
        
        <View style={[styles.content,{height:160}]}>
          <View>
            <Text style={{fontSize:23, fontWeight:'bold', marginVertical:10}}>계정관리</Text>
            <Text style={{fontSize:20, marginVertical:10}}>프로필 이미지 변경</Text>
            <TouchableOpacity onPress={passwordChange}>
              <Text style={{fontSize:20, marginVertical:10}}>비밀번호 변경</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={Account}>
          <View style={[styles.content,{height:160}]}>
            <View>
              <Text style={{fontSize:23, fontWeight:'bold', marginVertical:10}}>연동 계정 관리</Text>
              <Text style={{fontSize:20, marginVertical:10}}>백준</Text>
              <Text style={{fontSize:20, marginVertical:10}}>깃허브</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={[styles.content,{height:200}]}>
          <View>
            <Text style={{fontSize:23, fontWeight:'bold', marginVertical:10}}>앱 설정</Text>
            <View style={{flexDirection:'row'}}>
              <View><Text style={{fontSize:20, marginVertical:10}}>모드</Text></View>
              <View style={{marginLeft:250}}><Text style={{fontSize:20, marginVertical:10, color:Colors.grey500}}>일반</Text></View>
            </View>
            <Text style={{fontSize:20, marginVertical:10}}>알림 설정</Text>
            <Text style={{fontSize:20, marginVertical:10}}>잠금 설정</Text>
          </View>
        </View>

        <View style={[styles.content,{height:280}]}>
        <View>
            <Text style={{fontSize:23, fontWeight:'bold', marginVertical:10}}>기타</Text>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <View><Text style={{fontSize:20, marginVertical:10}}>버전</Text></View>
              <View style={{marginLeft:190}}><Text style={{fontSize:20, marginVertical:10, color:Colors.grey500}}>beta(1.002)</Text></View>
            </View>
            <TouchableOpacity onPress={askPress}>
              <Text style={{fontSize:20, marginVertical:10}}>문의</Text>
            </TouchableOpacity>
            <Text style={{fontSize:20, marginVertical:10}}>이용약관</Text>
            <TouchableOpacity onPress={withdrawPress}>
              <Text style={{fontSize:20, marginVertical:10}}>회원 탈퇴</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logoutPress}>
              <Text style={{fontSize:20, marginVertical:10}}>로그아웃</Text>
            </TouchableOpacity>
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
    borderColor:Colors.grey400
  },
  avatar: {
    width:50,
    height:50,
    borderRadius: 12
  },
})