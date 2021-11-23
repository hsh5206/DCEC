import React, {useCallback, useEffect, useState} from 'react'
import Axios from 'axios'
import {useSelector} from 'react-redux'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'

import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import type {AppState} from '../../../../store'
import * as L from '../../../../store/login'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const iconSize = 16


export default function Login() {
  const [techInfos, settechInfos] = useState([])
  const navigation = useNavigation()
  const TechPress = useCallback(
    link => () => navigation.navigate('ContWebView', {link: link}),
    [],
  )
  //버튼 클릭
  const onPress = useCallback(
     () => navigation.navigate('Free_Board', {}),
    [],
  )
  const writingPress = useCallback(
    () => navigation.navigate('Write', {}),
   [],
 )

  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  const {loggedIn, loggedUser} = login

  useEffect(() => {
    Axios.get(`http://15.164.68.127:8080/api/user/tech_blog?search=&tag=LINE`, {
      headers: {Authorization: loggedUser.token},
    }).then(res => {
      // console.log(res.data.content)
      settechInfos(res.data)
    })
  }, [])

  return (
    <>
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={styles.content}>
          <View style={{flex: 1, paddingVertical: 1}}>
            {techInfos.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.view}
                  onPress={onPress}>
                  <View style={{flexDirection: 'row', paddingTop:'3%'}}>
                    <View style={{width:'100%'}}>
                      <View style={{width:'100%'}}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize:15}}>
                          {item.title}
                        </Text>
                        <View>
                          <Text>{/*빈공간 or 내용 한줄...*/}</Text>
                        </View>
                      </View>
                      <View style={styles.date}>
                        <Text style={{color: Colors.grey600}}>게시 날짜 / {item.createBy} </Text>
                        <View style={{flexDirection:'row'}}>
                          <Icon name='chat-outline' size={iconSize} color='#52b9f1'/>
                          <Text style={{color: Colors.grey600}}>댓글수   </Text>
                          <Icon name='eye-outline' size={iconSize} color='black'/>
                          <Text style={{color: Colors.grey600}}>조회수</Text>
                          
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    <TouchableOpacity onPress={writingPress}>
      <View style={[styles.absoluteView]}>
        <Icon name="feather" size={20} color='#52b9f1'/>
        <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}> 글 쓰기</Text>
      </View>
    </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginHorizontal: '4%',
    backgroundColor: Colors.grey400,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  view: {
    flex: 1,
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 1,
  },
  absoluteView:{
    width: 90,
    backgroundColor: Colors.grey50,
    flexDirection:'row',
    position: 'absolute',
    right: 150,
    bottom: 35,
    padding: 10,
    borderRadius: 15,
    borderColor: Colors.grey300,
    borderWidth: 2,
    justifyContent:'center'
  }
})
