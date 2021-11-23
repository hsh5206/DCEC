import React,{useCallback} from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native'

import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

import TopBar from '../../TopBar'

export default function Login() {

  const navigation = useNavigation()
  const TechPress = useCallback(() => navigation.navigate('TechItem'), [])

  return(

    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <View style={[styles.head]}>
        <Text style={[styles.headText]}>랭킹</Text>
        <Text style={[styles.headText]}>ID</Text>
        <Text style={[styles.headText]}>깃허브ID</Text>
        <Text style={[styles.headText]}>주간 커밋</Text>
        <Text style={[styles.headText]}>총 커밋</Text>
      </View>

      <ScrollView>
        <View style={styles.content}>
          
        <View style={{flex:1}}>
          <TouchableOpacity style={styles.view} onPress={TechPress}>
          <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
            <Text>랭킹</Text><Text>ID</Text><Text>깃허브ID</Text><Text>주간 커밋</Text><Text>총 커밋</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view} onPress={TechPress}>
          <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
          <Text>랭킹</Text><Text>ID</Text><Text>깃허브ID</Text><Text>주간 커밋</Text><Text>총 커밋</Text>
          </View>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.view} onPress={TechPress}>
          <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
          <Text>랭킹</Text><Text>ID</Text><Text>깃허브ID</Text><Text>주간 커밋</Text><Text>총 커밋</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view} onPress={TechPress}>
          <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
          <Text>랭킹</Text><Text>ID</Text><Text>깃허브ID</Text><Text>주간 커밋</Text><Text>총 커밋</Text>
          </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.view} onPress={TechPress}>
          <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
          <Text>랭킹</Text><Text>ID</Text><Text>깃허브ID</Text><Text>주간 커밋</Text><Text>총 커밋</Text>
          </View>
          </TouchableOpacity>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  head:{
    flexDirection: 'row',
    justifyContent:'space-around',
    backgroundColor:'#52b9f1',
    alignItems:'center',
    height:'6%'
  },
  headText:{
    fontSize:17,
    color:'white',
    fontWeight:'700'
  },
  content: {
    flex:1,
    marginHorizontal:'1%',
    backgroundColor: 'grey',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date:{
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  view: {
    flex:1,
    height:60,
    marginTop: 1,
    backgroundColor: 'white',
    justifyContent:'center'
  },
})