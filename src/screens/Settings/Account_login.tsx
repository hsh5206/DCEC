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
import {useNavigation} from '@react-navigation/native'

import {AppState} from '../../store'
import * as L from '../../store/login'

export default function Login() {
  const navigation = useNavigation()
  const Baek_onPress = useCallback(() => navigation.navigate('SeeBaek'), [])
  const Git_onPress = useCallback(() => navigation.navigate('SeeGit'), [])

  const [baekjoonInfo, setbaekjoonInfo] = useState({})
  const [githubInfo, setgithubInfo] = useState({})

  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  const {loggedIn, loggedUser} = login

  useEffect(() => {
    Axios.get(`http://15.164.68.127:8080/api/member/add_info`, {
      headers: {Authorization: loggedUser.token},
    }).then(res => {
      console.log(res.data)
      setbaekjoonInfo(res.data.baekjoon)
      setgithubInfo(res.data.gitInfo)
    })
  }, [])

  const BackjoonIdSubmit = () => {
    Alert.alert('연동')
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={[styles.content, {alignItems: 'center'}]}>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/RN.png')}
          />
          <View style={{marginLeft: '4%'}}>
            <Text>ID : {loggedUser.id}</Text>
            <Text style={{color: Colors.grey600}}>이름 : 개발용</Text>
          </View>
        </View>

        <View style={[styles.content, {height: 280}]}>
          {!baekjoonInfo && (
            <View>
              <Text
                style={{fontSize: 23, fontWeight: 'bold', marginVertical: 10}}>
                백준
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '260%',
                }}>
                <Text style={{fontSize: 20, marginVertical: 10}}>
                  정보가 없습니다
                </Text>
                <TouchableOpacity style={[styles.submitButton]}>
                  <Text
                    style={{color: '#52b9f1', fontSize: 15, fontWeight: '600'}}
                    onPress={BackjoonIdSubmit}>
                    백준 아이디 등록
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {baekjoonInfo && (
            <View>
              <View
                style={{
                  width: '82%',
                  height: '15%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{fontSize: 23, fontWeight: 'bold', marginVertical: 3}}>
                  백준
                </Text>
                <TouchableOpacity style={[styles.loginButton]}>
                  <Text
                    style={{color: '#52b9f1', fontSize: 15, fontWeight: '600'}}
                    onPress={Baek_onPress}>
                    문제 조회
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, marginVertical: 10}}>백준ID</Text>
                <Text
                  style={{marginLeft: '10%', fontSize: 18, marginVertical: 10}}>
                  {baekjoonInfo.baekjoonId}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, marginVertical: 10}}>랭킹</Text>
                <Text
                  style={{marginLeft: '10%', fontSize: 18, marginVertical: 10}}>
                  {baekjoonInfo.rank}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, marginVertical: 10}}>제출 수</Text>
                <Text
                  style={{marginLeft: '10%', fontSize: 18, marginVertical: 10}}>
                  {baekjoonInfo.submit}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, marginVertical: 10}}>
                  해결 한 문제수
                </Text>
                <Text
                  style={{marginLeft: '10%', fontSize: 18, marginVertical: 10}}>
                  {baekjoonInfo.solve}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, marginVertical: 10}}>
                  해결 못한 문제수
                </Text>
                <Text
                  style={{marginLeft: '10%', fontSize: 18, marginVertical: 10}}>
                  {baekjoonInfo.notSolve}
                </Text>
              </View>
            </View>
          )}
        </View>

        <View style={[styles.content, {height: 240}]}>
          {!githubInfo && (
            <View>
              <Text
                style={{fontSize: 23, fontWeight: 'bold', marginVertical: 10}}>
                깃허브
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '260%',
                }}>
                <Text style={{fontSize: 20, marginVertical: 10}}>
                  정보가 없습니다
                </Text>
                <TouchableOpacity style={[styles.submitButton]}>
                  <Text
                    style={{color: '#52b9f1', fontSize: 15, fontWeight: '600'}}
                    onPress={BackjoonIdSubmit}>
                    깃허브 아이디 등록
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {githubInfo && (
            <View>
              <View
                style={{
                  width: '84%',
                  height: '15%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{fontSize: 23, fontWeight: 'bold', marginVertical: 3}}>
                  깃허브
                </Text>
                <TouchableOpacity
                  style={[styles.loginButton, {height: '100%'}]}>
                  <Text
                    style={{color: '#52b9f1', fontSize: 15, fontWeight: '600'}}
                    onPress={Git_onPress}>
                    레포지터리 조회
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, marginVertical: 10}}>
                  깃허브 ID
                </Text>
                <Text
                  style={{marginLeft: '10%', fontSize: 18, marginVertical: 10}}>
                  {githubInfo.githubId}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, marginVertical: 10}}>
                  가장 많이 사용한 언어
                </Text>
                <Text
                  style={{marginLeft: '10%', fontSize: 18, marginVertical: 10}}>
                  {githubInfo.language}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, marginVertical: 10}}>
                  주간 커밋
                </Text>
                <Text
                  style={{marginLeft: '10%', fontSize: 18, marginVertical: 10}}>
                  {githubInfo.weekCommits}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, marginVertical: 10}}>총 커밋</Text>
                <Text
                  style={{marginLeft: '10%', fontSize: 18, marginVertical: 10}}>
                  {githubInfo.totalCommit}
                </Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
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
    width: '35%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey300,
    borderRadius: 8,
  },
  submitButton: {
    width: '50%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey300,
    borderRadius: 8,
  },
})
