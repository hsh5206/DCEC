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
  Alert,
} from 'react-native'

import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import type {AppState} from '../../../../store'
import * as L from '../../../../store/login'

import TopBar from '../../TopBar'

export default function Login() {
  const [rankInfos, setrankInfos] = useState([])
  const navigation = useNavigation()
  const TechPress = useCallback(() => navigation.navigate('TechItem'), [])

  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  const {loggedIn, loggedUser} = login

  useEffect(() => {
    Axios.get(`http://15.164.68.127:8080/api/user/rank/integration`, {
      headers: {Authorization: loggedUser.token},
    }).then(res => {
      // console.log(res.data.content)
      setrankInfos(res.data)
    })
  }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={[styles.head]}>
        <Text style={[styles.headText]}>랭킹</Text>
        <Text style={[styles.headText]}>ID</Text>
        <Text style={[styles.headText]}>백준ID</Text>
        <Text style={[styles.headText]}>깃허브ID</Text>
        <Text style={[styles.headText]}>백준제출</Text>
        <Text style={[styles.headText]}>깃허브커밋</Text>
      </View>

      <ScrollView>
        <View style={styles.content}>
          <View style={{flex: 1}}>
            {rankInfos !== [] &&
              rankInfos.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.view} onPress={TechPress}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Text>{index + 1}</Text>
                      <Text>{item.memberId}</Text>
                      <Text>{item.baekjoonId}</Text>
                      <Text>{item.githubId}</Text>
                      <Text>{item.solve}</Text>
                      <Text>{item.total}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#52b9f1',
    alignItems: 'center',
    height: '6%',
  },
  headText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
  },
  content: {
    flex: 1,
    marginHorizontal: '1%',
    backgroundColor: 'grey',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  view: {
    flex: 1,
    height: 60,
    marginTop: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
})
