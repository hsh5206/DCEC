import React, {useCallback, useEffect, useState} from 'react'
import Axios from 'axios'
import {useSelector} from 'react-redux'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

import type {AppState} from '../../../store'
import * as L from '../../../store/login'

export default function Login(props) {
  const boardType = props.route.params.boardType
  const boardId = props.route.params.boardId
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
  const navigation = useNavigation()
  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  const {loggedIn, loggedUser} = login

  useEffect(() => {
    // 게시글 조회
    Axios.get(
      `http://15.164.68.127:8080/api/user/board/${boardId}?boardType=QA`,
      {
        headers: {Authorization: loggedUser.token},
      },
    ).then(res => {
      settitle(res.data.title)
      setcontent(res.data.content)
    })
  }, [])

  const writingPress = () => {
    let dataToSubmit = {
      content: content,
      title: title,
    }
    //게시글 수정
    Axios.patch(
      `http://15.164.68.127:8080/api/user/board/${boardId}`,
      dataToSubmit,
      {
        headers: {Authorization: loggedUser.token},
      },
    ).then(res => {
      //res 201이면 이동
      onPress()
    })
  }

  const onPress = useCallback(() => navigation.navigate('QnA'), [])

  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View
          style={[
            {
              height: '13%',
              width: '100%',
              alignItems: 'center',
              paddingRight: '5%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            },
          ]}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              },
            ]}
            onPress={writingPress}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                justifyContent: 'flex-end',
              }}>
              완료
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.footer]}>
          <TextInput
            placeholder="제목"
            style={[styles.inputText, {fontSize: 20}]}
            value={title}
            onChangeText={settitle}
          />
        </View>

        <View
          style={{
            marginHorizontal: '5%',
            borderWidth: 1,
            borderColor: Colors.grey400,
          }}></View>

        <View style={[styles.header, {}]}>
          <TextInput
            placeholder="내용을 입력하세요"
            style={[styles.inputText, {flexShrink: 1, fontSize: 16}]}
            multiline={true}
            value={content}
            onChangeText={setcontent}
          />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  footer: {
    height: 45,
    marginHorizontal: '6%',
    backgroundColor: 'white',
  },
  header: {
    height: 300,
    marginHorizontal: '6%',
    paddingTop: '5%',
    flex: 1,
  },
  inputText: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  button: {
    borderWidth: 1,
    borderColor: '#52b9f1',
    borderRadius: 10,
    height: 30,
    width: '20%',
    backgroundColor: '#52b9f1',
  },
})
