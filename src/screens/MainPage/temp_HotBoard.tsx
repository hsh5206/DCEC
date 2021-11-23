import React from 'react'
import {SafeAreaView, View, FlatList,StyleSheet} from 'react-native'
import Person from './Person'
import * as D from '../../data'
//lottieview
import LottieView from 'lottie-react-native'

const loadingAnimation = require('../../assets/lottie/loading_anime.json')

const people = D.makeArray(10).map(D.createRandomPerson)

export default function temp_HotBoard() {
  const children = people.map((person) => (
    <Person key={person.id} person={person} />
  ))
  
  return (
    <SafeAreaView>
      <LottieView
        autoPlay
        style={styles.lottieView}
        source={loadingAnimation}
      />
      <FlatList data={people}
        renderItem={({item})=> <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View/>}
        style={{backgroundColor:'white', width:'100%'}}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  lottieView: {
    height: 50,
    alignSelf: 'center',
  },
});