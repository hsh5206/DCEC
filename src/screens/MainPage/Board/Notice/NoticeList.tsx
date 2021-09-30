import React,{useCallback} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'

const searchPress = () => {Alert.alert("검색 미구현")}

export default function NoticeList() {

  const navigation = useNavigation()
  const noticePress = useCallback(() => navigation.navigate('NoticeItem'), [])

  return(
    <View style={{flex:1,paddingVertical:1}}>
      <TouchableOpacity style={styles.view} onPress={noticePress}>
        <View><Text style={{color:Colors.grey600}}>104310</Text></View>
        <View><Text>다전공(복수,부,연계,융합전공) 포기신청 안내</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.10</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={noticePress}>
        <View><Text style={{color:Colors.grey600}}>104306</Text></View>
        <View><Text>2021학년도 1학기 교직 적성 및 인성 검사 실시 안내(6.11 금까지)</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.09</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={noticePress}>
        <View><Text style={{color:Colors.grey600}}>104299</Text></View>
        <View><Text>2021학년도 공학교육인증 심화 프로그램 확인서 발급 신청 안내(졸업예정자/졸업생)</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.09</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={noticePress}>
        <View><Text style={{color:Colors.grey600}}>104293</Text></View>
        <View><Text>「2021 3D프린팅 로봇 게임 창작 경진대회」 참가 안내(~6/13)</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.09</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={noticePress}>
        <View><Text style={{color:Colors.grey600}}>104275</Text></View>
        <View><Text>2021학년도 1학기 기말고사 안내</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.09</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={noticePress}>
        <View><Text style={{color:Colors.grey600}}>104274</Text></View>
        <View><Text>「★중요★ 2021년 8월 공학인증 졸업예정자 제출서류 안내(~2021.06.30) (미제출 시 졸업 불가)</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.09</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={noticePress}>
        <View><Text style={{color:Colors.grey600}}>104072</Text></View>
        <View><Text>[학생상담센터] 2021학년도 신입생 실태조사 실시</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.04</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={noticePress}>
        <View><Text style={{color:Colors.grey600}}>103919</Text></View>
        <View><Text>대학생 법정의무교육 필수 이수 안내</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.02</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={noticePress}>
        <View><Text style={{color:Colors.grey600}}>103837</Text></View>
        <View><Text>2021-1학기 캡스톤디자인 과제지원 마감에 따른 최종결과보고서 제출 일정 안내</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.01</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={noticePress}>
        <View><Text style={{color:Colors.grey600}}>103803</Text></View>
        <View><Text>2021학년도 제1학기 기말 강의평가 실시</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.01</Text></View>
      </TouchableOpacity>
    </View>
  )
}

//상단 flexDirection->가로배치 alignItems->세로기준 가운데 justyfyContent->가로 배치
const styles = StyleSheet.create({
  view: {
    flex:1,
    height:70,
    marginVertical: 1,
    backgroundColor: 'white'
  },
  content:{
    marginVertical: 10,
  },
  date:{
    flexDirection:'row',
    justifyContent:'flex-end'
  }
})