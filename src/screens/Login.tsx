import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native'
import {Colors} from 'react-native-paper'

const onPress = () => {
  Alert.alert('login Pressed', 'message')
}

export default function Login() {
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <View style={styles.header}/>
      <View style={styles.content}>
        <Image source={require('./images/DCEC_logo_v2.png')}/>
        <TextInput
          placeholder= "      ID"
          style= {[styles.inputText,{marginTop: '10%'}]}  
        />
        <TextInput
          placeholder= "      PW"
          style= {styles.inputText}       
        />
        <TouchableOpacity style= {styles.customButton}>
          <Text style={{color:'white', fontSize:18, fontWeight:'300'}} onPress={onPress}>로그인</Text>
        </TouchableOpacity>

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
    borderColor: Colors.grey700,
    borderRadius: 25
  },
  customButton: {
    width: '50%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    backgroundColor: Colors.grey800,
    borderRadius: 25
  }
})