import React, {useState, useCallback, useEffect, useRef} from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Colors} from 'react-native-paper'
import {useDispatch} from 'react-redux'
import Axios from 'axios'
import * as L from '../store/login'

// prettier-ignore
export default function Login() {
  const [id, setid] = useState('aa1234')
  const [password, setpassword] = useState('12345!!qwe')
  const [token, settoken] = useState('')
  const dispatch = useDispatch()
  //navigation
  const navigation = useNavigation()
  const goSignup = useCallback(() => navigation.navigate('Signup'), [])
  const onPressLogin = useCallback(() => {
    let dataToSubmit = {
      'id': id,
      'password':password
    }
    Axios.post(`http://15.164.68.127:8080/api/member/login`, dataToSubmit).then(res => {
      if (res.status === 200) {
        // console.log(res.data.authorization)
        settoken(res.data.authorization)
        dispatch(L.loginAction({id,password,token:res.data.authorization}))
        navigation.navigate('MainNavigator')
      }
    })
  }, [])
  
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'#52b9f1'}}>
      <View style={styles.header}/>
      <View style={styles.content}>
        <Image source={require('../assets/images/DCEC_logo_v3.png')} style={{height:'25%',width:'50%'}}/>
        <TextInput
          placeholder= "ID"
          style={[styles.inputText]}
          value={id}
          onChangeText={setid}
        />
        <TextInput
          placeholder= "PW"
          style={styles.inputText}
          value={password}
          onChangeText={setpassword}
        />
        <View style={{height: '40%', flexDirection: 'row'}}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={{color:'#52b9f1', fontSize:15, fontWeight:'600'}} onPress={onPressLogin}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={{color:'white', fontSize:14, fontWeight:'600'}} onPress={goSignup}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: '20%',
    marginHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: '#52b9f1',
  },
  content: {
    flex: 1,
    marginHorizontal: '10%',
    alignItems: 'center',
    backgroundColor: '#52b9f1',
    justifyContent: 'center',
  },
  footer: {
    height: '20%',
    marginHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: '#52b9f1',
  },
  inputText: {
    width: '95%',
    height: '10%',
    marginVertical: '1%',
    borderWidth: 2,
    borderColor: Colors.grey200,
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
  },
  loginButton: {
    width: '60%',
    height: '17%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%',
    backgroundColor: Colors.grey200,
    borderRadius: 13,
  },
  signupButton: {
    width: '30%',
    height: '10%',
    alignItems: 'center',
    marginLeft: '1%',
    marginTop: Platform.select({ios: '11%', android: '10%'}),
    paddingLeft: '3%',
  },
})
