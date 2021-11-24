import React, {useCallback, useEffect, useState} from 'react'
import Axios from 'axios'
import {useSelector} from 'react-redux'
import moment from 'moment'
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

import {AppState} from '../../store'
import * as L from '../../store/login'
import TopBar from '../MainPage/TopBar'

export default function Login(props) {
  const [infos, setinfos] = useState([])
  const navigation = useNavigation()
  const TechPress = useCallback(() => navigation.navigate('TechItem'), [])

  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  const {loggedIn, loggedUser} = login

  useEffect(() => {
    Axios.get(
      `http://15.164.68.127:8080/api/member/git_detail/${props.route.params.id}`,
    ).then(res => {
      // console.log(res.data)
      setinfos(res.data) //status 200이면
    })
  }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={[styles.head]}>
        <Text style={[styles.headText]}>제목</Text>
        <Text style={[styles.headText]}>주언어</Text>
        <Text style={[styles.headText]}>설명</Text>
      </View>

      <ScrollView>
        <View style={styles.content}>
          {((infos && infos.length === 0) || !infos) && (
            <View style={{flex: 1}}>
              <Text>데이터가 없습니다.</Text>
            </View>
          )}
          {infos &&
            infos.length > 0 &&
            infos.map((item, index) => (
              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.view}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text>{item.title}</Text>
                    <Text>{item.language}</Text>
                    <Text>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#52b9f1',
    alignItems: 'center',
    height: '6%',
  },
  headText: {
    fontSize: 17,
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
