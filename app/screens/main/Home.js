/* eslint-disable */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#FF995E',
          height: '28%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}>
        {/* FIXME: 아이콘을 놓을 위치 */}
        {/* <Text>Drawer을 놓을 위치(아이콘)</Text> */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            width: '100%',
          }}>
          <View style={{width: '50%'}}>
            <Text
              style={{
                fontSize: 28,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Welcome~
            </Text>
          </View>

          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <Image
              source={require('../../image/Home/pet.png')}
              style={{height: 60, width: 60, borderRadius: 20}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
