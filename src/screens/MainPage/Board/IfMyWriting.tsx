import React, {useCallback, useEffect, useState} from 'react'
import Axios from 'axios'
import moment from 'moment'
import {useSelector} from 'react-redux'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {Colors} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import type {AppState} from '../../../store'
import * as L from '../../../store/login'

export default function Login(props) {
  const initailInfos = {
    commentNum: '',
    content: '',
    createBy: '',
    createTime: '',
    id: '',
    title: '',
    viewCount: '',
  }
  const [infos, setinfos] = useState(initailInfos)
  const modifyPress = useCallback(() => alert('modify'), [])
  const deletePress = useCallback(() => alert('delete'), [])

  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  const {loggedIn, loggedUser} = login

  useEffect(() => {
    // 게시글 조회
    Axios.get(
      `http://15.164.68.127:8080/api/user/board/${props.id}?boardType=QA`,
      {
        headers: {Authorization: loggedUser.token},
      },
    ).then(res => {
      setinfos(res.data)
    })
  })

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={[styles.footer]}>
        <Text style={styles.writer}>{infos.createBy}</Text>
        <Text style={{color: Colors.grey600}}>
          {moment(infos.createTime).format('MM.DD')}{' '}
          {moment(infos.createTime).format('HH:mm')}{' '}
        </Text>
      </View>
      <View
        style={{flexDirection: 'row', paddingTop: '1%', paddingRight: '5%'}}>
        <TouchableOpacity onPress={modifyPress}>
          <Icon name="pencil-outline" size={23} color="grey" />
        </TouchableOpacity>
        <Text> {/*필요한 공백 */} </Text>
        <TouchableOpacity onPress={deletePress}>
          <Icon name="trash-can-outline" size={23} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  writer: {
    fontSize: 18,
  },
  title: {
    fontSize: 30,
  },
  content: {
    fontSize: 20,
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
    height: 55,
  },
})
