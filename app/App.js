/* eslint-disable */
import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import AppNavigator from './navigations/appNavigator';

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
