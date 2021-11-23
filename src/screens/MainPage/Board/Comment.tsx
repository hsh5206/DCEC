import React, {useState} from 'react'
import moment from 'moment'
import {StyleSheet, SafeAreaView, View, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const iconSize = 18

<<<<<<< HEAD
export default function Login() {

  const onPress_chat = () => {alert("Pressed")}

=======
export default function Login(props) {
  const [info, setinfo] = useState(props.item)
  const onPress_chat = () => {
    alert('Pressed')
  }
  const onPress_heart = () => {
    alert('Pressed')
  }
>>>>>>> b16f01434d45c9cce42e7c3e7197e28a0e7feb34
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '1%',
          }}>
          <View style={[styles.footer]}>
            <Text style={styles.writer}>작성자</Text>
            <Text style={{color: Colors.grey600, fontSize: 13}}>
              {moment(info.createTime).format('MM.DD')}{' '}
              {moment(info.createTime).format('HH:mm')}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={onPress_chat}>
              <Icon name="chat-outline" size={iconSize} color="#52b9f1" />
            </TouchableOpacity>
            <Text> {/*필요한 빈공간 */} </Text>
<<<<<<< HEAD
            
=======
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={onPress_heart}>
              <Icon name="heart-outline" size={iconSize} color="red" />
            </TouchableOpacity>
>>>>>>> b16f01434d45c9cce42e7c3e7197e28a0e7feb34
          </View>
        </View>
        <View style={{height: '80%', justifyContent: 'center'}}>
          <Text style={styles.comment}> {info.content} </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  writer: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  comment: {
    fontSize: 14,
  },
  header: {
    paddingTop: '1%',
    height: 30,
    marginHorizontal: '5%',
  },
  footer: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
