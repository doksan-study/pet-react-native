/* eslint-disable */
import React, {useState} from 'react';

import {View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Catch My Pet',
    text: 'lorem lorem lorem lorem lorem',
    image: require('../../image/onboarding/1.png'),
  },
  {
    key: 'two',
    title: 'Catch My Pet',
    text: 'lorem lorem lorem lorem lorem',
    image: require('../../image/onboarding/2.png'),
  },
  {
    key: 'three',
    title: 'Catch My Pet',
    text: 'lorem lorem lorem lorem lorem',
    image: require('../../image/onboarding/3.png'),
  },
];

export default function Onboarding({navigation}) {
  const [showHomePage, setShowHomePage] = useState(false);

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'center',
            height: '65%',
            width: '100%',
            backgroundColor: '#fff',
          }}
        />
        <View style={{backgroundColor: '#fff', height: '100%'}}>
          <Text
            style={{
              paddingTop: 25,
              paddingBottom: 10,
              fontSize: 23,
              fontWeight: 'bold',
              color: '#21465b',
              alignSelf: 'center',
            }}>
            {item.title}
          </Text>

          <Text
            style={{
              textAlign: 'center',
              color: '#b5b5b5',
              fontSize: 15,
              paddingHorizontal: 30,
            }}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#21465b',
          width: 30,
        }}
      />
      <View
        style={{
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            marginBottom: 30,
            marginHorizontal: 55,
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: 30,
            backgroundColor: '#FF995E',
            paddingVertical: 10,
            borderRadius: 23,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'SemiBold',
            }}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </View>
      </View>
    </>
  );
}
