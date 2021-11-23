import React from 'react'
import {View, Text, Image} from 'react-native'
import type {FC} from 'react'
import * as D from  '../../data'

export type PersonProps = {
  person: D.IPerson
}

const Person: FC<PersonProps> = ({person}) => {

  return (
    <View>
      <View style={{paddingTop:'5%', alignItems:'center', paddingVertical:'1%'}}>

        <View style={{paddingTop: '1%'}}>
          <Image source={{uri : person.image}} style={{width:340, height: 150, borderRadius: 15}}/>
        </View>
      </View>
    </View>
  )
}
export default Person