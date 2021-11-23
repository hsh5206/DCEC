import React, {useState, useCallback, useEffect, useRef} from 'react'
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
import {useNavigation} from '@react-navigation/native'

export default function Login() {

  const navigation = useNavigation()
  const Signup = useCallback(() => navigation.navigate('Login'), [])

  return(
    <SafeAreaView style={{flex:1, backgroundColor:'#52b9f1'}}>
      <View style={[styles.header,{marginTop:'50%'}]}>
        
        <View style={{width: '90%', borderBottomWidth:2, borderColor:'#52b9f1'}}/>
      </View>

      <View style={[styles.content]}>
        
        <View style={[styles.object]}>
          <TextInput placeholder="이름" style={[styles.inputText, {width:'100%'}]}/>
        </View>
        
        <View style= {[{alignItems:'center'}]}>
          <TouchableOpacity style={styles.signupButton} onPress={Signup}>
            <Text style={{color:'#52b9f1', fontSize:20, fontWeight:'500'}}>가입하기</Text>
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
    alignItems: 'center',
    backgroundColor:'#52b9f1'
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
    justifyContent: 'center',
    backgroundColor: '#52b9f1'
  },
  inputText: {
    width:'70%',
    height:'90%',
    marginVertical: '1%',
    borderWidth: 2,
    borderColor: Colors.lightBlue100,
    backgroundColor:'white',
    borderRadius: 10,
    paddingLeft: 10,
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
    backgroundColor: Colors.lightBlue100,
    borderRadius: 12
  },
  signupButton: {
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '1%',
    backgroundColor: Colors.lightBlue100,
    borderRadius: 15
  }
})