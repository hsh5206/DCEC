import React, {useState, useCallback, useEffect, useRef} from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native'
import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

const onPress = () => {}

export default function Login() {
  const [id, setid] = useState('')
  const navigation = useNavigation()
  const goNext = useCallback(
    id => () => navigation.navigate('Signup2', {id: id}),
    [],
  )

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#52b9f1'}}>
      <View style={[styles.header, {marginTop: '50%'}]}>
        <View
          style={{width: '90%', borderBottomWidth: 2, borderColor: '#52b9f1'}}
        />
      </View>

      <View style={[styles.content]}>
        <View style={[styles.object]}>
          <TextInput
            placeholder="아이디 입력"
            style={styles.inputText}
            value={id}
            onChangeText={setid}
          />
          <TouchableOpacity style={styles.checkButton} onPress={onPress}>
            <Text style={{color: '#52b9f1', fontSize: 15, fontWeight: '500'}}>
              중복확인
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.signupButton} onPress={goNext(id)}>
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
