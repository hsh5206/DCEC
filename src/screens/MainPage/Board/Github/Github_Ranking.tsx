import React,{useCallback} from 'react'
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native'
import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import Rank_baek from '../Rank/Rank_baek'

export default function GithubRank() {

  const navigation = useNavigation()
  const onPress = useCallback(() => navigation.navigate('RankNavigator'), [])

  return(
    <View style={[styles.view]}>
      <View style={[styles.centerView]}>

      <View style={styles.rankView}>
        <Text style={styles.title}>깃허브 랭킹</Text>
        <Text style={styles.myrank}>나의 랭킹 : 2</Text>
        <TouchableOpacity style={{marginTop:8,marginLeft:105}} onPress={onPress}>
          <Text style={{color:'#52b9f1'}}> + 더보기 </Text>
        </TouchableOpacity>
      </View>
        
        {/*여기다가 백준랭킹 내용물 작성*/}
        </View>
      </View>
  )
}

//상단 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const styles = StyleSheet.create({
  view: {
    flex:1,
    paddingHorizontal: '4%',
    backgroundColor: Colors.white,
  },
  rankView:{
    flexDirection:'row'
  },
  centerView: {
    marginTop:'3%',
    flex:1,
    padding: '2%',
    flexDirection:'column',
    backgroundColor: Colors.white,
    width:350,
    height:180,
    borderColor: Colors.grey400,
    borderWidth: 1,
    borderRadius: 10
  },
  avatar: {
    marginLeft:'10%',
    width:40,
    height:40,
    borderRadius: 30
  },
  title:{
    fontSize:20,
    paddingLeft:'1%'
  },
  myrank:{
    marginTop:7,
    marginLeft:8,
    color:Colors.red400
  }
})