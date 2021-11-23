import React,{useCallback} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Colors} from 'react-native-paper'

export default function TopBar() {

  const onPress = useCallback(() => {alert("Pressed")}, [])

  return(   
    <View style={styles.boardView}>
      <View style={[styles.view]}>
        <Text style={styles.title}>Hot한 문제     </Text>
        <TouchableOpacity style={{marginTop:8,marginLeft:140}} onPress={onPress}>
          <Text style={{color:'#52b9f1'}}>     + 더보기 </Text>
        </TouchableOpacity>
      </View>

      {/*여기다가 작성*/}
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
    paddingTop:'2%',
    padding:'3%',
    flexDirection:'column',
    backgroundColor: Colors.white,
    width:350,
    height:180,
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