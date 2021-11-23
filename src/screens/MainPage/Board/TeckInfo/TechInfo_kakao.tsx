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
  FlatList,
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
    Axios.get(
      `http://15.164.68.127:8080/api/user/tech_blog?search=&tag=KAKAO`,
      {
        headers: {Authorization: loggedUser.token},
      },
    ).then(res => {
      // console.log(res.data)
      settechInfos(res.data)
    })
  }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', alignItems:'center',}}>
      <FlatList
        data={techInfos}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[styles.card]}
            onPress={TechPress(item.link)}>
              <View style={{alignItems:'center', paddingVertical:'5%'}}>
            <View>
              <Image style={styles.image} source={{uri: item.imageUrl}} />
            </View>
            <View style={{width:'95%', paddingLeft:'3%'}}>
              <Text style={{fontSize:16}} numberOfLines={2} ellipsizeMode="tail">
                {item.title}
              </Text>
            </View>
            </View>

            {/* <View>
              <Text numberOfLines={2} ellipsizeMode="tail">
                {item.description}
              </Text>
            </View> */}
          </TouchableOpacity>
        )}
        columnWrapperStyle={styles.imageRow}
        numColumns={2}
      />
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
  /* 추가 */
  wrap: {
    flex: 1,
  },
  imageRow: {
    justifyContent: 'space-evenly',
  },
  image: {
    width: 160,
    height: 120,
    borderRadius:20
  },
  card: {
    marginHorizontal: '1%',
    marginVertical: '3%',
    flexBasis: '45%',
    borderRadius:20,

  },
})
