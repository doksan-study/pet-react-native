/* eslint-disable */
import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

// import AuthNavigator from './navigations/AuthNavigator';
// import MainNavigator from './navigations/MainNavigator';
// import DrawerNavigator from './navigations/DrawerNavigator';
import NestingNavigator from './navigations/NestingNavigator';

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <AuthNavigator /> */}
        {/* <MainNavigator /> */}
        {/* <DrawerNavigator /> */}
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
