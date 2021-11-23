import React from 'react'
import {SafeAreaView, View, FlatList, Text} from 'react-native'
import Person from '../../Person'
import * as D from '../../../../data'

const people = D.makeArray(30).map(D.createRandomPerson)

export default function temp_HotBoard() {
  const children = people.map((person) => (
    <Person key={person.id} person={person} />
  ))
  
  return (
    <SafeAreaView>
      <FlatList data={people}
        renderItem={({item})=> <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View/>}
        style={{backgroundColor:'white'}}
        />
    </SafeAreaView>
  )
}