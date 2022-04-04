/* eslint-disable */
import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';

import AntIcon from 'react-native-vector-icons/AntDesign';

export default function Login({navigation}) {
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Image
        source={require('../image/default.jpg')}
        style={{width: '100%', height: '43%'}}
      />
      <Text
        style={{
          fontSize: 28,
          // fontFamily: ''
          alignSelf: 'center',
        }}>
        Catch My Pet
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

      {/* TODO: Email */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 50,
          // justifyContent: 'center',
          paddingHorizontal: 10,
          borderColor: '#FF995E',
          borderRadius: 23,
          // paddingVertical: 2,
        }}>
        <AntIcon name="mail" color="#FF995E" size={24} />
        <TextInput
          style={{paddingHorizontal: 10}}
          placeholder="Enter Email"
          placeholderTextColor={'#FF995E'}
        />
      </View>

      {/* TODO: Password */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          // justifyContent: 'center',
          paddingHorizontal: 10,
          borderColor: '#FF995E',
          borderRadius: 23,
          // paddingVertical: 2,
        }}>
        <AntIcon name="lock1" color="#FF995E" size={24} />
        <TextInput
          style={{paddingHorizontal: 10}}
          placeholder="Enter Password"
          placeholderTextColor={'#FF995E'}
        />
      </View>

      <View
        style={{
          marginHorizontal: 55,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          backgroundColor: '#FF995E',
          paddingVertical: 10,
          borderRadius: 23,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SemiBold',
          }}>
          Login
        </Text>
      </View>

      <Text
        style={{
          alignSelf: 'center',
          color: '#FF995E',
          fontFamily: 'SemiBold',
          paddingVertical: 30,
        }}
        onPress={() => navigation.navigate('register')}>
        New User
      </Text>
    </View>
  );
}
