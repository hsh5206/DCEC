import React,{useCallback} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

export default function NoticeList() {

  const navigation = useNavigation()
  const onPress = useCallback(() => navigation.navigate('ContWebView'), [])

  return(
    <View style={{flex:1,paddingVertical:1}}>
      <TouchableOpacity style={styles.view} onPress={onPress}>
        <View><Text style={{color:Colors.grey600}}>산업통상자원부</Text></View>
        <View><Text>제9회 산업통상자언부 공공데이터 활용 비즈니스 아이디어 공모전</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.04.28 ~ 2021.07.24</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={onPress}>
        <View><Text style={{color:Colors.grey600}}>과학기술정보통신부</Text></View>
        <View><Text>2021 방송미디어 콘테스트</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.24 ~ 2021.07.16</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={onPress}>
        <View><Text style={{color:Colors.grey600}}>문화체육관광부</Text></View>
        <View><Text>KOPIS 빅데이터 분석 공모전</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.07 ~ 2021.06.21</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={onPress}>
        <View><Text style={{color:Colors.grey600}}>부산정보산업진흥원</Text></View>
        <View><Text>부산글로벌게임센터 게임창작 팀워크 챌린지 모집</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.20 ~ 2021.06.14</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={onPress}>
        <View><Text style={{color:Colors.grey600}}>해양수산부,울산/부산/인천/여수/광양항만공사</Text></View>
        <View><Text>제8회 해양수산 정보 서비스/비지니스 아이디어 공모전</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.04.21 ~ 2021.07.04</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={onPress}>
        <View><Text style={{color:Colors.grey600}}>포스코ICT</Text></View>
        <View><Text>포스코ICT 2021 AI챌린지 (청소년 AI 창의경진대회)</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.04.22 ~ 2021.06.14</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={onPress}>
        <View><Text style={{color:Colors.grey600}}>한국방송통신위원회</Text></View>
        <View><Text>2021년 위치정보 우수비지니스 모델 발굴 프로젝트 위치기반서비스 공모전 & 클라우드 인프라 지원 사업</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.17 ~ 2021.06.30</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={onPress}>
        <View><Text style={{color:Colors.grey600}}>한국관광공사, 카카오</Text></View>
        <View><Text>2021 관광데이터 활용</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.10 ~ 2021.06.25</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={onPress}>
        <View><Text style={{color:Colors.grey600}}>국립박물관문화제단</Text></View>
        <View><Text>제7회 한글 창의/산업 아이디어 공모전</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.17 ~ 2021.06.25</Text></View>
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