import React,{useCallback} from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Login() {

  const modifyPress = useCallback(() => alert('modify'), [])
  const deletePress = useCallback(() => alert('delete'), [])

  return (
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={[styles.footer]}>
          <Text style={styles.writer}>작성자</Text>
          <Text style={{color: Colors.grey600}}>날짜/시간 </Text>
        </View>
        <View style={{flexDirection:'row',paddingTop:'1%', paddingRight:'5%'}}>
          <TouchableOpacity onPress={modifyPress}>
          <Icon name='pencil-outline' size={23} color='grey'/>
          </TouchableOpacity>
          <Text> {/*필요한 공백 */} </Text>
          <TouchableOpacity onPress={deletePress}>
          <Icon name='trash-can-outline' size={23} color='grey'/>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  writer: {
    fontSize:18
  },
  title: {
    fontSize:30
  },
  content:{
    fontSize:20
  },
  footer: {
    height: 45,
    marginHorizontal: '6%',
    backgroundColor: 'white',
  },
  header: {
    marginHorizontal: '6%',
    backgroundColor: 'white',
  },
  comment: {
    flex: 1,
    height:55
  },
});