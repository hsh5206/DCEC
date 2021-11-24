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
import {useNavigation} from '@react-navigation/native'

import If_My_Wrinting from '../IfMyWriting'
import BottomChat from '../Bottom_chat'
import Comment from '../Comment'
import ReComment from '../Re_Comment'
import type {AppState} from '../../../../store'
import * as L from '../../../../store/login'

const iconSize = 20

export default function Login(props) {
  const navigation = useNavigation()
  const initailInfos = {
    commentNum: '',
    content: '',
    createBy: '',
    createTime: '',
    id: '',
    title: '',
    viewCount: '',
  }
  const initialUser = {
    email: '',
    entrance: '',
    graduate: '',
    id: '',
    keywords: '',
    name: '',
  }
  const [id, setid] = useState(props.route.params.id)
  const [infos, setinfos] = useState(initailInfos)
  const [comments, setcomments] = useState([])
  const [user, setuser] = useState(initialUser)

  //login
  const login = useSelector<AppState, L.State>(state => state.login)
  const {loggedIn, loggedUser} = login

  useEffect(() => {
    Axios.get(`http://15.164.68.127:8080/api/member`, {
      headers: {Authorization: loggedUser.token},
    }).then(res => {
      setuser(res.data)
    })

    // 게시글 조회
    Axios.get(`http://15.164.68.127:8080/api/user/board/${id}?boardType=QA`, {
      headers: {Authorization: loggedUser.token},
    }).then(res => {
      setinfos(res.data)
    })

    //게시글 내 댓글 전체 조회(댓글+대댓글)
    getTotalComments()
  }, [])

  const getTotalComments = () => {
    Axios.get(`http://15.164.68.127:8080/api/user/comment/${id}`, {
      headers: {Authorization: loggedUser.token},
    }).then(res => {
      setcomments(res.data)
    })
  }

  const modifyPress = useCallback(
    () => navigation.navigate('Modify', {boardType: 'QA', boardId: id}),
    [],
  )
  const deletePress = () => {
    Axios.delete(`http://15.164.68.127:8080/api/user/board/${id}`, {
      headers: {Authorization: loggedUser.token},
    }).then(res => {
      //res 201이면 이동
      onPress()
    })
  }

  const onPress = useCallback(() => navigation.navigate('QnA'), [])

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
        {/* 만약 내가 쓴글이면 아래 컴포넌트가 보이게 아니면 아니게 3항연산자로..?*/}
        {user.name === infos.createBy ? (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.footer]}>
              <Text style={styles.writer}>{infos.createBy}</Text>
              <Text style={{color: Colors.grey600}}>
                {moment(infos.createTime).format('MM.DD')}{' '}
                {moment(infos.createTime).format('HH:mm')}{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: '1%',
                paddingRight: '5%',
              }}>
              <TouchableOpacity onPress={modifyPress}>
                <Icon name="pencil-outline" size={23} color="grey" />
              </TouchableOpacity>
              <Text> {/*필요한 공백 */} </Text>
              <TouchableOpacity onPress={deletePress}>
                <Icon name="trash-can-outline" size={23} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={[styles.footer]}>
            <Text style={styles.writer}>{infos.createBy}</Text>
            <Text style={{color: Colors.grey600}}>
              {moment(infos.createTime).format('MM.DD')}{' '}
              {moment(infos.createTime).format('HH:mm')}
            </Text>
          </View>
        )}

        <View style={[styles.footer]}>
          <Text style={styles.title}>{infos.title}</Text>
        </View>

        <View style={[styles.header, {}]}>
          <Text style={{fontSize: 17}}>
            {infos.content}
            {'\n'}
          </Text>
        </View>

        <View
          style={[styles.footer, {flexDirection: 'row', alignItems: 'center'}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="chat-outline" size={iconSize} color="#52b9f1" />
            <Text style={{color: Colors.grey600, fontSize: 16}}>
              {infos.commentNum}{' '}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="eye-outline" size={iconSize} color="black" />
            <Text style={{color: Colors.grey600, fontSize: 16}}>
              {infos.viewCount}
            </Text>
          </View>
        </View>
        {comments &&
          comments.map((item, index) => {
            if (item.replies.length > 0) {
              return (
                <>
                  <View style={styles.comment}>
                    <Comment item={item} />
                  </View>
                  {item.replies.map(reply => {
                    return (
                      <View style={styles.comment}>
                        <ReComment item={reply} />
                      </View>
                    )
                  })}
                </>
              )
            } else {
              return (
                <View style={styles.comment}>
                  <Comment item={item} />
                </View>
              )
            }
          })}
      </ScrollView>

      <View style={{paddingBottom: '6%'}}>
        <BottomChat boardId={id} getTotalComments={getTotalComments} />
      </View>
    </>
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
