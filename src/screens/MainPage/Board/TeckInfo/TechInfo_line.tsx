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

import Tech_TopBar from './Tech_Top_Bar'
import TopBar from '../../TopBar'

export default function Login() {
  const [techInfos, settechInfos] = useState([])
  const navigation = useNavigation()
  const TechPress = useCallback(
    link => () => navigation.navigate('ContWebView', {link: link}),
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
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={styles.content}>
          <View style={{flex: 1, paddingVertical: 1}}>
            {techInfos.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.view}
                  onPress={TechPress(item.link)}>
                  <View style={{flexDirection: 'row'}}>
                    <Image style={styles.logo} source={{uri: item.imageUrl}} />
                    <View>
                      <View>
                        <Text style={{marginTop: 10, color: Colors.grey600}}>
                          {item.createBy}
                        </Text>
                      </View>
                      <View>
                        <Text numberOfLines={1} ellipsizeMode="tail">
                          {item.title}
                        </Text>
                      </View>
                      <View style={styles.date}>
                        <Text style={{color: Colors.grey600}}>2021.06.08</Text>
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
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginHorizontal: '2%',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '90%',
  },
  view: {
    flex: 1,
    height: 70,
    backgroundColor: 'white',
  },
  logo: {
    width: 60,
    height: 50,
    borderRadius: 10,
    marginTop: '1%',
    marginRight: '2%',
  },
})
