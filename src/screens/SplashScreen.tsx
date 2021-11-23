import React, {useState, useEffect} from 'react'
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(value === null ? 'StartNavigator' : 'MainNavigator'),
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/DCEC_logo_loading.png')}
        style={{width: '55%', resizeMode: 'contain'}}
      />
      <ActivityIndicator
        animating={animating}
        color="#e6e6e6"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52b9f1',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});