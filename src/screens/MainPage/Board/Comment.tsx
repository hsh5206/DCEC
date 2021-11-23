import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const iconSize = 18

export default function Login() {

  const onPress_chat = () => {alert("Pressed")}

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:'1%'}}>
          <View style={[styles.footer]}>
            <Text style={styles.writer}>작성자  </Text>
            <Text style={{color: Colors.grey600, fontSize:13}}>날짜/시간 </Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity style={{flexDirection:'row'}} onPress={onPress_chat}>
              <Icon name='chat-outline' size={iconSize} color='#52b9f1'/>
            </TouchableOpacity>
            <Text> {/*필요한 빈공간 */} </Text>
            
          </View>
        </View>
        <View style={{height:'80%', justifyContent:'center'}}>
          <Text style={styles.comment}> 댓글 내용 </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  writer: {
    fontSize:15,
    fontWeight:'bold'
  },
  comment:{
    fontSize:14
  },
  header: {
    paddingTop:'1%',
    height: 30,
    marginHorizontal: '5%',
  },
  footer: {
    height: 20,
    flexDirection:'row',
    alignItems:'center',
  },
});
