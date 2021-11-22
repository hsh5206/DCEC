import React,{useCallback} from 'react'
import {StyleSheet, View, Text, Image, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const searchPress = () => {Alert.alert("검색 미구현")}

export default function TopBar() {

  return(
    <View style={[styles.view]}>
      <Image style={styles.logo} source={require('../../assets/images/DCEC_logo_v3.png')}/>
      <View style={styles.centerView}></View>
      <Icon name="text-search" size={30} color='white' onPress={searchPress}/>
    </View>
  )
}

//상단 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
    backgroundColor: '#52b9f1',
    height:'10%',
    paddingTop:'10%'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  logo: {
    width:100,
    height:50,
    borderRadius: 10,
    marginBottom: '1%'
  },
  centerView: {
    flex: 1
  }
})