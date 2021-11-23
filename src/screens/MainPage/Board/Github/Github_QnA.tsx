import React,{useCallback} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

export default function TopBar() {

  const navigation = useNavigation()
  const onPress = useCallback(() => navigation.navigate('QnA'), [])
  
  return(
    <View style={styles.boardView}>
      <View style={[styles.view]}>
        <Text style={styles.title}>Q&A 게시판      </Text>
        <TouchableOpacity style={{marginTop:8,marginLeft:140}} onPress={onPress}>
          <Text style={{color:'#52b9f1'}}> + 더보기</Text>
        </TouchableOpacity>
      </View>

      {/*여기 게시판 컴포넌트*/}
    </View>
  )
}

//상단 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const styles = StyleSheet.create({
  view: {
    flex:1,
    flexDirection:'row',
    backgroundColor: Colors.white,
    
  },
  boardView:{
    marginTop:'3%',
    flex:1,
    padding: '3%',
    flexDirection:'column',
    backgroundColor: Colors.white,
    width:350,
    height:280,
    borderColor: Colors.grey400,
    borderWidth: 1,
    borderRadius: 10
  },
  title:{
    fontSize:20,
  },
  boardText:{
    fontSize:15,
    marginVertical:'1%'
  }
})