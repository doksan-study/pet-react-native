/* eslint-disable */
import {View, Text, Image} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function login() {
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Image
        source={require('../image/Login.jpg')}
        style={{width: '100%', height: '50%'}}
      />
      <Text
        style={{
          fontSize: 28,
          // fontFamily: ''
          alignSelf: 'center',
        }}>
        APP NAME
      </Text>
      <Text
        style={{
          // fontFamily: 'Meduim',
          marginHorizontal: 55,
          textAlign: 'center',
          marginTop: 5,
          opacity: 0.4,
        }}>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}></View>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
}
