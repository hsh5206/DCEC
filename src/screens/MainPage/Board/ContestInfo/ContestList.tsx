import React, {useCallback, useEffect, useState} from 'react'
import Axios from 'axios'
import {useSelector} from 'react-redux'
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import type {AppState} from '../../../../store'
import * as L from '../../../../store/login'

export default function NoticeList() {
  const [contestItems, setcontestItems] = useState([])
  const navigation = useNavigation()
  const onPress = useCallback(
    link => () => navigation.navigate('ContWebView', {link: link}),
    [],
  )

  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  const {loggedIn, loggedUser} = login

  useEffect(() => {
    Axios.get(`http://15.164.68.127:8080/api/user/univ_info?tag=CONTEST`, {
      headers: {Authorization: loggedUser.token},
    }).then(res => {
      setcontestItems(res.data.content)
    })
  }, [])

  return (
    <View style={{flex: 1, paddingVertical: 1}}>
      {contestItems.map((item, index) => {
        return (
          <TouchableOpacity style={styles.view} onPress={onPress(item.link)}>
            <View>
              <Text style={{color: Colors.grey600}}>
                {contestItems.length - index}
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
    marginVertical: 1,
    backgroundColor: 'white',
  },
  content: {
    marginVertical: 10,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})
