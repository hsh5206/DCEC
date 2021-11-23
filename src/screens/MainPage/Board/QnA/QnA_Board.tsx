import React from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BottomChat from '../Bottom_chat'

import Comment from '../Comment'
import ReComment from '../Re_Comment'

const iconSize = 20

export default function Login() {
  return (
    <>
    <ScrollView style={{flex: 1, backgroundColor: 'white', paddingTop:10}}>
      <View style={[styles.footer]}>
        <Text style={styles.writer}>작성자</Text>
        <Text style={{color: Colors.grey600}}>날짜/시간 </Text>
      </View>

      <View style={[styles.footer]}>
        <Text style={styles.title}>제목</Text>
      </View>

      <View style={[styles.header,{}]}>
        <Text style={{fontSize:17}}>내용{"\n"}</Text>
      </View>

      <View style={[styles.footer,{flexDirection:'row',alignItems:'center'}]}>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
          <Icon name='heart-outline' size={iconSize} color='red'/>
          <Text style={{color: Colors.grey600,fontSize:16}}>좋아요수  </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
          <Icon name='chat-outline' size={iconSize} color='#52b9f1'/>
          <Text style={{color: Colors.grey600,fontSize:16}}>댓글수</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.comment}>
        <Comment/>
      </View>
      <View style={styles.comment}>
        <Comment/>
      </View>
      <View style={styles.comment}>
        <ReComment/>
      </View>
    </ScrollView>

    <View style={{paddingBottom:'6%'}}>
    <BottomChat/>
    </View>
    </>
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
