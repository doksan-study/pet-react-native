/* eslint-disable */
import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import NestingNavigator from './navigations/NestingNavigator';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <NestingNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
