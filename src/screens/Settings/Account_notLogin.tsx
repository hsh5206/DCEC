import React, {useCallback} from 'react'
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

const onPress = () => {
  Alert.alert('연동')
}

export default function Login() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={[styles.content, {alignItems: 'center'}]}>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/RN.png')}
          />
          <View style={{marginLeft: '4%'}}>
            <Text>ID : admin</Text>
            <Text style={{color: Colors.grey600}}>이름 : 개발용</Text>
          </View>
        </View>

        <View style={[styles.content, {height: 200}]}>
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
              <TouchableOpacity style={[styles.loginButton]}>
                <Text
                  style={{color: '#52b9f1', fontSize: 15, fontWeight: '600'}}
                  onPress={onPress}>
                  로그인
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={[styles.content, {height: 200}]}>
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
              <TouchableOpacity style={[styles.loginButton]}>
                <Text
                  style={{color: '#52b9f1', fontSize: 15, fontWeight: '600'}}
                  onPress={onPress}>
                  로그인
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
    width: '50%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey300,
    borderRadius: 8,
  },
})
