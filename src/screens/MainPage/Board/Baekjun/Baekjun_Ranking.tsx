import React,{useCallback} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

export default function GithubRank() {

  const navigation = useNavigation()
  const profilePress = useCallback(() => {navigation.navigate('MainNavigator'), navigation.navigate('Profle')}, [])
  const plusPress = useCallback(() => {navigation.navigate('MainNavigator'), navigation.navigate('Baekjun_Rank')}, [])

  return(
    <View style={[styles.view]}>
      <View style={styles.rankView}>
        <Text style={styles.title}>백준 랭킹</Text>
        <Text style={styles.myrank}>나의 랭킹 : 1</Text>
        <TouchableOpacity style={{marginTop:8,marginLeft:105}} onPress={plusPress}>
          <Text style={{color:Colors.grey500}}> + 더보기 </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centerView}>
        <TouchableOpacity onPress={profilePress}>
          <Image
            style={styles.avatar}
            source={require("../../../../assets/images/RN.png")}
          />
          <Text > 1위 232 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={profilePress}>
          <Image
            style={styles.avatar}
            source={require("../../../../assets/images/ktae.png")}
          />
          <Text > 2위 172 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={profilePress}>
          <Image
            style={styles.avatar}
            source={require("../../../../assets/images/emptyUser.png")}
          />
          <Text > 3위 161 </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

//상단 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const styles = StyleSheet.create({
  view: {
    paddingTop:'8%',
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
    padding: '3%',
    flexDirection:'row',
    backgroundColor: Colors.white,
    width:320,
    height:80,
    borderColor: Colors.grey700,
    borderWidth: 2,
    borderRadius: 20
  },
  avatar: {
    marginLeft:'10%',
    width:40,
    height:40,
    borderRadius: 30
  },
  title:{
    fontSize:20,
    
  },
  myrank:{
    marginTop:8,
    marginLeft:8,
    color:Colors.red400
  }
})