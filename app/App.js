/* eslint-disable */
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import AppNavigator from './navigations/appNavigator';

export default function App() {
  return (
    // <AppNavigator />
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE}>
        {/* <TouchableOpacity></TouchableOpacity> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
