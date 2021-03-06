import React, {useState, useCallback, useEffect, useRef} from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native'
import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

export default function Login(props) {
  const id = props.route.params.id
  const [pw, setpw] = useState('')
  const [confirmPw, setconfirmPw] = useState('')
  const navigation = useNavigation()
  const goNext = useCallback(
    (confirmPw, pw, id) => () => {
      if (pw === confirmPw) {
        navigation.navigate('Signup3', {id: id, pw: pw})
      } else {
        console.log(pw, confirmPw)
        Alert.alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.')
      }
    },
    [],
  )

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#52b9f1'}}>
      <View style={[styles.header, {marginTop: '40%'}]}>
        <View
          style={{width: '90%', borderBottomWidth: 2, borderColor: '#52b9f1'}}
        />
      </View>

      <View style={[styles.content]}>
        <View style={[styles.object]}>
          <TextInput
            placeholder="비밀번호 입력 (영문+숫자+특수문자 8~15자)"
            style={[styles.inputText, {width: '100%'}]}
            value={pw}
            onChangeText={setpw}
          />
        </View>
        <View style={[styles.object]}>
          <TextInput
            placeholder="비밀번호 확인"
            style={[styles.inputText, {width: '100%'}]}
            value={confirmPw}
            onChangeText={setconfirmPw}
          />
        </View>

        <View style={[{alignItems: 'center'}]}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={goNext(confirmPw, pw, id)}>
            <Text style={{color: '#52b9f1', fontSize: 20, fontWeight: '500'}}>
              다음
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: '15%',
    marginHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: '#52b9f1',
  },
  content: {
    flex: 1,
    marginHorizontal: '10%',
  },
  footer: {
    height: '15%',
    marginHorizontal: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#52b9f1',
  },
  inputText: {
    width: '70%',
    height: '90%',
    marginVertical: '1%',
    borderWidth: 2,
    borderColor: Colors.lightBlue100,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  object: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  checkButton: {
    width: '29%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBlue100,
    borderRadius: 12,
  },
  signupButton: {
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '1%',
    backgroundColor: Colors.lightBlue100,
    borderRadius: 15,
  },
})
