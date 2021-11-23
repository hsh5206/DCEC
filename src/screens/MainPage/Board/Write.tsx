import React, { useCallback } from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Colors} from 'react-native-paper'


export default function Login() {

  const writingPress = useCallback(() => alert('Write'), [])

  return (
    <>
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={[{height:'13%',width:'100%', alignItems:'center',paddingRight:'5%' , flexDirection:'row',justifyContent:'flex-end'}]}>
          <TouchableOpacity style={[styles.button,{alignItems:'center',flexDirection:'row',justifyContent:'center'}]} onPress={writingPress}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold',justifyContent:'flex-end'}}>완료</Text>
          </TouchableOpacity>
      </View>

      <View style={[styles.footer]}>
      <TextInput
          placeholder= "제목"
          style={[styles.inputText,{fontSize:20}]}
        />
      </View>

      <View style={{marginHorizontal:'5%', borderWidth:1, borderColor:Colors.grey400}}></View>

      <View style={[styles.header,{}]}>
      <TextInput
          placeholder= "내용을 입력하세요"
          style={[styles.inputText,{flexShrink:1,fontSize:16}]}
           multiline ={true}
        />
      </View>

    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 45,
    marginHorizontal: '6%',
    backgroundColor: 'white',
  },
  header: {
    height:300,
    marginHorizontal: '6%',
    paddingTop:'5%',
    flex:1
  },
  inputText: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  button:{
    borderWidth:1,
    borderColor:'#52b9f1',
    borderRadius:10,
    height:30,
    width:'20%',
    backgroundColor:'#52b9f1'
  }
});
