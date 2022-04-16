import {View, Text, TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
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
        <Text>리스트</Text>

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
              Welcome~!
            </Text>
          </View>

          <View style={{width: '50%', alignItems: 'center'}}>
            <Text>로고 넣을 자리</Text>
          </View>
        </View>
      </View>

      <LinearGradient
        colors={['rgba(255, 153, 94,0.4)', 'transparent']}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -45,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 15,
            marginTop: 25,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#b1e5d3"
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              width: 260,
            }}
          />
          <Text>검색 아이콘</Text>
        </View>
      </LinearGradient>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={{width: '50%'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: '#585a61',
            }}>
            Recommended
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: '#b1e5d3',
              width: 115,
              marginTop: -5,
            }}></View>
        </View>

        <View style={{width: '50%', alignItems: 'flex-end'}}>
          <View
            style={{
              backgroundColor: '#00a46c',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
                color: '#fff',
              }}>
              More
            </Text>
          </View>
        </View>
      </View>

      {/* TODO: SCROLLVIEW */}
    </View>
  );
};

export default Home;
