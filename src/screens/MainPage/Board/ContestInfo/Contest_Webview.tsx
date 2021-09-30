import React,{Component} from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native'
import { WebView } from 'react-native-webview'

class ContWebView extends Component{
  render(){
    return(
      <>
        <WebView
          originWhitelist={['*']}
          javaScriptEnabled={true}
          useWebKit={true}
          source={{uri: 'https://www.thinkcontest.com/Contest/ContestDetail.html?id=30790'}}
        />
      </>
    )
  }
}

export default ContWebView