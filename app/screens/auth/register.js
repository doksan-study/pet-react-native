/* eslint-disable */
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React from 'react';

import AntIcon from 'react-native-vector-icons/AntDesign';

export default function Register() {
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Image
        source={require('../../image/default.jpg')}
        style={{width: '100%', height: '43%'}}
      />
      <Text style={styles.logoTitle}>APP NAME</Text>
      <Text style={styles.logoDescription}>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      </Text>

      {/* TODO: Email */}
      <View style={styles.inputEmail}>
        <TextInput
          style={{paddingHorizontal: 10}}
          placeholder="Email"
          placeholderTextColor={'#FF995E'}
        />
      </View>

      {/* TODO: Password */}
      <View style={styles.inputPassword}>
        <TextInput
          style={{paddingHorizontal: 10}}
          placeholder="Password"
          placeholderTextColor={'#FF995E'}
        />
      </View>

      <View style={styles.registerButton}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SemiBold',
          }}>
          Register
        </Text>
      </View>

      {/* <Text
        style={{
          alignSelf: 'center',
          color: '#FF995E',
          fontFamily: 'SemiBold',
          paddingVertical: 30,
        }}>
        New User
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // TODO: Logo
  logoTitle: {
    fontSize: 28,
    // fontFamily: ''
    alignSelf: 'center',
  },
  logoDescription: {
    // fontFamily: 'Meduim',
    marginHorizontal: 55,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.4,
  },

  // TODO: InputText - Email, Password
  inputEmail: {
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
  },
  inputPassword: {
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
  },

  // TODO: Button
  registerButton: {
    marginHorizontal: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#FF995E',
    paddingVertical: 10,
    borderRadius: 23,
  },
});
