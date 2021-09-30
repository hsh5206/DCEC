import React,{useCallback} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Colors} from 'react-native-paper'

export default function TopBar() {

  return(
    <>
    <View style={[styles.view]}>
      <Text style={styles.title}>Q&A 게시판</Text>
      <TouchableOpacity style={{marginTop:8,marginLeft:140}}>
        <Text style={{color:Colors.grey500}}> + 더보기 </Text>
      </TouchableOpacity>
     </View>
    <View style={styles.boardView}>
      <Text style={styles.boardText}>테스트 3</Text>
      <Text style={styles.boardText}>테스트 2</Text>
      <Text style={styles.boardText}>백준 질문 게시판 테스트 1</Text>
    </View>
    </>
  )
}

//상단 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const styles = StyleSheet.create({
  view: {
    paddingTop:'10%',
    flex:1,
    flexDirection:'row',
    backgroundColor: Colors.white,
    
  },
  boardView:{
    marginTop:'3%',
    flex:1,
    padding: '4%',
    backgroundColor: Colors.white,
    width:320,
    height:200,
    borderColor: Colors.grey700,
    borderWidth: 2,
    borderRadius: 20
  },
  title:{
    fontSize:20,
    
  },
  boardText:{
    fontSize:15,
    marginVertical:'1%'
  }
})