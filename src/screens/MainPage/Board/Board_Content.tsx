import React,{useCallback} from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  Alert
} from 'react-native'
import {Colors} from 'react-native-paper'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const onPress = () => {Alert.alert("pressed")}

export default function Login() {

  //navigation
  const navigation = useNavigation()
  const BackjunPress = useCallback(() => navigation.navigate('Baekjun_Github'), [])
  const GithubPress = useCallback(() => navigation.navigate('Github'), [])
  const NoticePress = useCallback(() => navigation.navigate('Notice'), [])
  const TechInfoPress = useCallback(() => navigation.navigate('TechNavigator'), [])
  const ContInfoPress = useCallback(() => navigation.navigate('ContInfo'), [])
  const QnAPress = useCallback(() => navigation.navigate('QnA'), [])
  const FreePress = useCallback(() => navigation.navigate('Free'), [])
  const ToyPress = useCallback(() => navigation.navigate('Toy'), [])
  const StudyPress = useCallback(() => navigation.navigate('Study'), [])

  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <ImageBackground style={styles.content}source={require("../../../assets/images/Board_Content_Design_v3.png")}>
        <View>
          <TouchableOpacity style={{marginTop:100, marginLeft:25}}onPress={BackjunPress}>
            <Text style={styles.button}>백준&깃허브</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:0, marginLeft:200}}onPress={NoticePress}>
            <Text style={styles.button}>공지사항</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:85, marginLeft:55}}onPress={QnAPress}>
            <Text style={styles.button}>Q&A</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:20, marginLeft:205}}onPress={TechInfoPress}>
            <Text style={styles.button}>기술&정보</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:75, marginLeft:35}}onPress={FreePress}>
            <Text style={styles.button}>자유게시판</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:25, marginLeft:215}}onPress={ContInfoPress}>
            <Text style={styles.button}>공모전</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:90, marginLeft:25}}onPress={ToyPress}>
            <Text style={styles.button}>토이프로젝트</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:5, marginLeft:215}}onPress={StudyPress}>
            <Text style={styles.button}>스터디</Text>
          </TouchableOpacity>
        </View>
      
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex:1,
    marginHorizontal:'5%',
  },
  button: {
    fontSize:20,
    color:Colors.grey800
  }
})