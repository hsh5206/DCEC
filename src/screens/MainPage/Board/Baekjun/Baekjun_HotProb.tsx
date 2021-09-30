import React,{useCallback} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function TopBar() {

  return(
    <>
    <View style={[styles.view]}>
    <Icon name="fire" size={25} style={{color:'red'}}/>
      <Text style={styles.title}>Hot한 문제</Text>
      <TouchableOpacity style={{marginTop:8,marginLeft:140}}>
        <Text style={{color:Colors.grey500}}> + 더보기 </Text>
      </TouchableOpacity>
     </View>
    <View style={styles.boardView}>
      <Text style={styles.boardText}>20531</Text>
      <Text style={styles.boardText}>19670</Text>
      <Text style={styles.boardText}>10690</Text>
      <Text style={styles.boardText}>20104</Text>
      <Text style={styles.boardText}>18010</Text>
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
    height:150,
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