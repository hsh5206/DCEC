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
  Platform
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import SQLite from 'react-native-sqlite-storage';
import {Colors} from 'react-native-paper'

export default function Login() {
  //db
  const db = SQLite.openDatabase({name:'user.db',location:'default'}, this.openCB, this.errorCB)

  //navigation
  const navigation = useNavigation()
  const goSignup = useCallback(() => navigation.navigate('Signup'), [])
  const onPressLogin = useCallback(() => navigation.navigate('MainNavigator'),[])
  
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <View style={styles.header}/>
      <View style={styles.content}>
        <Image source={require('../assets/images/DCEC_logo_v1.png')}/>
        <TextInput
          placeholder= "ID"
          style= {[styles.inputText]}  
        />
        <TextInput
          placeholder= "PW"
          style= {styles.inputText}       
        />
        <View style={{height: '40%', flexDirection: 'row'}}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={{color:'white', fontSize:18, fontWeight:'300'}} onPress={onPressLogin}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={{color:Colors.grey600, fontSize:15, fontWeight:'400'}} onPress={goSignup}>회원가입</Text>
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
    marginHorizontal:'5%',
    alignItems : 'center',
    backgroundColor : 'white'
  },
  content: {
    flex:1,
    marginHorizontal:'10%',
    alignItems : 'center',
    backgroundColor : 'white',
    justifyContent: 'center'
  },
  footer: {
    height: '20%',
    marginHorizontal:'5%',
    alignItems : 'center',
    backgroundColor : 'white'
  },
  inputText: {
    width:'95%',
    height:'10%',
    marginVertical: '1%',
    borderWidth: 2,
    borderColor: Colors.grey500,
    borderRadius: 20,
    paddingLeft: 20
  },
  loginButton: {
    width: '60%',
    height: '17%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%',
    backgroundColor: Colors.grey800,
    borderRadius: 13
  },
  signupButton: {
    width: '30%',
    height: '10%',
    alignItems: 'center',
    marginTop: Platform.select({ios:'11%', android: '10%'})
  }
})