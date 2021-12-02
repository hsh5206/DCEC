import React, {Component, useCallback} from 'react'
import Axios from 'axios'
import {Text, Image, View, Dimensions, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Colors} from 'react-native-paper'

import Carousel from 'react-native-snap-carousel' // Version can be specified in package.json

import {scrollInterpolator, animatedStyles} from '../../assets/util/animations'
import {thisTypeAnnotation} from '@babel/types'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 1.4)
    
//10개만  
const DATA = [] 
for (let i = 0; i < 10; i++) {
  DATA.push(i)
}

const upPress = () => {alert("추천")}
const downPress = () => {alert("비추천")}

const iconSize = 25

export default class Snap extends Component {
  // 생성자 함수
  constructor(props) {
    super(props)

    this.state = {
      infos: props.recommend,
    }
  }

  _renderItem({item, index}) {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemLabel}>
          <Image style={styles.logo} source={{uri: item.imageUrl}} />
          <View
            style={{
              height: 80,
              paddingLeft: '3%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, marginHorizontal:'5%'}}>{item.title}</Text>
            <View style={{flexDirection:'row', marginBottom:'3%'}}>
            <Icon name='thumb-up-outline' size={iconSize} color={'red'} onPress={upPress}/>
              <Text>  </Text>
            <Icon name='thumb-down-outline' size={iconSize} color={'#52b9f1'} onPress={downPress}/>
            </View>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={{height: 400}}>
        <Carousel
          ref={c => (this.carousel = c)}
          data={this.state.infos}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH * 1.1}
          containerCustomStyle={styles.carouselContainer}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 10,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT * 0.8,
    borderRadius: 10,
  },
})