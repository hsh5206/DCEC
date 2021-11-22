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
  const BackjunPress = useCallback(() => navigation.navigate('Baekjun'), [])
  const GithubPress = useCallback(() => navigation.navigate('Github'), [])
  const NoticePress = useCallback(() => navigation.navigate('Notice'), [])
  const TechInfoPress = useCallback(() => navigation.navigate('TechNavigator'), [])
  const ContInfoPress = useCallback(() => navigation.navigate('ContInfo'), [])

  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <ImageBackground style={styles.content}source={require("../../../assets/images/Board_Content_Design.png")}>
        <View>
          <TouchableOpacity style={{marginTop:120, marginLeft:210}}onPress={NoticePress}>
            <Text style={styles.button}>공지사항</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:30, marginLeft:60}}onPress={BackjunPress}>
            <Text style={styles.button}>백준</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:120, marginLeft:205}}onPress={TechInfoPress}>
            <Text style={styles.button}>기술&정보</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:130, marginLeft:50}}onPress={GithubPress}>
            <Text style={styles.button}>깃허브</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:30, marginLeft:220}}onPress={ContInfoPress}>
            <Text style={styles.button}>공모전</Text>
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