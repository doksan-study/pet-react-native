import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text} from 'react-native';
import COLORS from '../../const/color';

const {height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, color: COLORS.white}}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default HomeScreen;
