import React,{useCallback} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function TopBar() {

  return(
    <>
    <View style={[styles.view]}>
      <Icon name="fire" size={25} style={{color:'red'}}/>
      <Text style={styles.title}>Hot 게시판</Text>
      <TouchableOpacity style={{marginTop:8,marginLeft:140}}>
        <Text style={{color:Colors.grey500}}> + 더보기 </Text>
      </TouchableOpacity>
     </View>
    <View style={styles.boardView}>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.boardTitle}>깃허브 게시판</Text>
        <Text style={styles.boardText}>깃허브 QnA 테스트 3</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.boardTitle}>깃허브 게시판</Text>
        <Text style={styles.boardText}>테스트 2</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.boardTitle}>백준 게시판</Text>
        <Text style={styles.boardText}>백준 질문 게시판 테스트 1</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.boardTitle}>공지사항</Text>
        <Text style={styles.boardText}>2021학년도 1학기 기말고사 안내</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.boardTitle}>기술&정보 게시판</Text>
        <Text style={styles.boardText}>ArchUnit - UnitTest로 아키텍...</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.boardTitle}>공모전 게시판</Text>
        <Text style={styles.boardText}>KOPIS 빅데이터 분석 공모전</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.boardTitle}>공모전 게시판</Text>
        <Text style={styles.boardText}>부산글로벌게임센터 게임창작 팀워...</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.boardTitle}>공지사항</Text>
        <Text style={styles.boardText}>대학생 법정의무교육 필수 이수 안내</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.boardTitle}>공모전 게시판</Text>
        <Text style={styles.boardText}>포스코ICT 2021 AI챌린지 (청소...</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.boardTitle}>공지사항</Text>
        <Text style={styles.boardText}>2021학년도 제1학기 기말 강의평가 실시</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.boardTitle}>기술&정보 게시판</Text>
        <Text style={styles.boardText}>NAVER Tech Talk: FE devt...</Text>
      </View>
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
    height:300,
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
  },
  boardTitle:{
    fontSize:12,
    marginTop:4,
    marginRight:10,
    color:Colors.grey600
  }
})