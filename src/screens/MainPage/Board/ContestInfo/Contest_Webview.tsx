import React, {Component} from 'react'
import {StyleSheet, SafeAreaView, View, Text} from 'react-native'
import {WebView} from 'react-native-webview'

//prettier-ignore
class ContWebView extends Component{
  render(){
    return(
      <>
        <WebView
          originWhitelist={['*']}
          javaScriptEnabled={true}
          useWebKit={true}
          source={{uri: this.props.route.params.link,}}
        />
      </>
    )
  }
}

export default ContWebView
