import React, {useCallback, useEffect, useState} from 'react'
import Axios from 'axios'
import {useSelector} from 'react-redux'
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'
import type {AppState} from '../../../../store'
import * as L from '../../../../store/login'

const searchPress = () => {
  Alert.alert('검색 미구현')
}

export default function NoticeList() {
  const [noticeItems, setnoticeItems] = useState([])
  const navigation = useNavigation()
  const noticePress = useCallback(
    link => () => navigation.navigate('ContWebView', {link: link}),
    [],
  )

  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  const {loggedIn, loggedUser} = login

  useEffect(() => {
    Axios.get(`http://15.164.68.127:8080/api/user/univ_info?tag=NOTICE`, {
      headers: {Authorization: loggedUser.token},
    }).then(res => {
      // console.log(res.data.content)
      setnoticeItems(res.data.content)
    })
  }, [])

  return (
    <View style={{flex: 1, paddingVertical: 1}}>
      {noticeItems.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.view}
            onPress={noticePress(item.link)}>
            <View>
              <Text style={{color: Colors.grey600}}>
                {noticeItems.length - index}
              </Text>
            </View>
            <View>
              <Text numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </Text>
            </View>
            <View style={styles.date}>
              <Text style={{color: Colors.grey600}}>{item.createdBy}</Text>
              <Text style={{color: Colors.grey600}}>{item.createdDate}</Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

//상단 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 70,
    marginBottom: 1,
    backgroundColor: 'white',
  },
  content: {
    marginVertical: 10,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
