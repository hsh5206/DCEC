import React, {useCallback, useEffect, useState} from 'react'
import Axios from 'axios'
import {useSelector} from 'react-redux'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {Colors} from 'react-native-paper'

import Account_Login from './Account_login'
import Account_notLogin from './Account_notLogin'
import {AppState} from '../../store'
import * as L from '../../store/login'

export default function Login() {
  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  const {loggedIn} = login
  if (loggedIn) {
    return (
      <>
        <Account_Login />
      </>
    )
  } else {
    return (
      <>
        <Account_notLogin />
      </>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    height: 80,
    marginHorizontal: '5%',
    marginVertical: '2%',
    padding: '3%',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.grey400,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  loginButton: {
    width: '50%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey300,
    borderRadius: 8,
  },
})
