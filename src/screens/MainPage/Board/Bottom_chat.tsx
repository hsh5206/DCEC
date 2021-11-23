import React, {useCallback, useEffect, useState} from 'react'
import Axios from 'axios'
import moment from 'moment'
import {useSelector} from 'react-redux'
import {StyleSheet, View, TextInput} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'

import type {AppState} from '../../../store'
import * as L from '../../../store/login'

const iconSize = 30,
  iconColor = Colors.grey600
// const icons = ['home', 'table', 'bell', 'account'] 아이콘 순서

export default function BottomBar(props) {
  const boardId = props.boardId
  const [chat, setchat] = useState('')
  const navigation = useNavigation()
  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  const {loggedIn, loggedUser} = login

  const sendPress = () => {
    // 댓글 등록
    Axios.post(`http://15.164.68.127:8080/api/user/comment/${boardId}`, chat, {
      headers: {Authorization: loggedUser.token},
    }).then(res => {
      props.getTotalComments()
    })
  }

  return (
    <View style={[styles.view, {justifyContent: 'space-between'}]}>
      <TextInput
        placeholder=""
        style={[styles.inputText]}
        value={chat}
        onChangeText={setchat}
      />
      <Icon name="send" size={iconSize} color={iconColor} onPress={sendPress} />
    </View>
  )
}

//하단 아이콘 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', //배치 flex-start,flex-end,center,space-around,space-between,space-evenly
    padding: 10,
    backgroundColor: Colors.white,
    marginHorizontal: '1%',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  inputText: {
    width: '88%',
    height: '100%',
    borderWidth: 2,
    borderColor: Colors.grey500,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
})
