import React,{useCallback} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'

const searchPress = () => {Alert.alert("검색 미구현")}

export default function NoticeList() {

  const navigation = useNavigation()
  const TechPress = useCallback(() => navigation.navigate('TechItem'), [])

  return(
    <View style={{flex:1,paddingVertical:1}}>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>LINE</Text></View>
        <View><Text>뉴 노멀 시대의 인셉션 워크숍</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.11</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>NAVER D2</Text></View>
        <View><Text>ArchUnit - UnitTest로 아키텍처 검사를</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.11</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>카카오</Text></View>
        <View><Text>카카오 사내 기술 세미나 'Techtalk'- 다섯 번째 이야기</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.08</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>우아한형제들</Text></View>
        <View><Text>우아한형제들 기획자 소개와 개발자와의 협업문화 인터뷰</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.07</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>카카오</Text></View>
        <View><Text>FE개발자의 성장 스토리 09 : Offscreencanvas 적용기</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.02</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>LINE</Text></View>
        <View><Text>개발자와 디자이너의 협업을 위한 LINE 디자인 시스템, LDS 소개</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.06.01</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>카카오</Text></View>
        <View><Text>카카오 사내 기술 세미나 ‘Techtalk’ – 네 번째 이야기</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.28</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>NAVER D2</Text></View>
        <View><Text>NAVER Tech Talk: FE devtalk (2021년 5월)</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.21</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>LINE</Text></View>
        <View><Text>LINE Android CI에 App Bundle 적용기</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.21</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>LINE</Text></View>
        <View><Text>CI/CD 자동화가 가져다 준 행복</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.14</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>LINE</Text></View>
        <View><Text>LINE AR 렌더링 엔진 개발기</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.11</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>쿠팡</Text></View>
        <View><Text>검색 영역 탐색을 위한 인덱싱 플랫폼의 변천사</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.05.07</Text></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.view} onPress={TechPress}>
        <View><Text style={{color:Colors.grey600}}>우아한형제들</Text></View>
        <View><Text>우아한형제들 Developer Relations-Updated</Text></View>
        <View style={styles.date}><Text style={{color:Colors.grey600}}>2021.04.28</Text></View>
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