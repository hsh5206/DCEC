import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native'
import {Colors} from 'react-native-paper'

const onPress = () => {

}

export default function Login() {
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={[styles.header,{marginTop:'25%'}]}>
        <View style ={{flex: 0.8, marginTop: '3%'}}>
        <Text style={{fontSize: 25, marginLeft: '3%', marginTop: Platform.select({ios : '10%', android: '6%'})}}>회원가입</Text>
        </View>
        <View style={{width: '95%', borderBottomWidth:1, borderColor:'#444'}}/>
      </View>

      <View style={[styles.content]}>
        <View style={[styles.object]}>
          <TextInput placeholder="아이디 입력" style={styles.inputText}/>
          <TouchableOpacity style={styles.checkButton}>
            <Text style={{color:'white', fontSize:18, fontWeight:'300'}} onPress={onPress}>중복확인</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.object]}>
          <TextInput placeholder="비밀번호 입력 (영문+숫자+특수문자 8~15자)" style={[styles.inputText, {width:'100%'}]}/>
        </View>
        <View style={[styles.object]}>
          <TextInput placeholder="비밀번호 확인"style={[styles.inputText, {width:'100%'}]}/>
        </View>
        <View style={[styles.object]}>
          <TextInput placeholder="이름"style={[styles.inputText, {width:'100%'}]}/>
        </View>
        <View style= {[{alignItems:'center'}]}>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={{color:'white', fontSize:18, fontWeight:'300'}} onPress={onPress}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.footer}>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: '15%',
    marginHorizontal:'5%',
    alignItems: 'center'
  },
  content: {
    flex:1,
    marginHorizontal:'10%',
  },
  footer: {
    height: '15%',
    marginHorizontal:'5%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  inputText: {
    width:'70%',
    height:'90%',
    marginVertical: '1%',
    borderWidth: 2,
    borderColor: Colors.grey500,
    borderRadius: 10
  },
  object: {
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:10
  },
  checkButton: {
    width: '29%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey800,
    borderRadius: 10
  },
  signupButton: {
    width: '90%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '1%',
    backgroundColor: Colors.grey800,
    borderRadius: 10
  }
})