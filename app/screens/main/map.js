/* eslint-disable */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Map = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>It is currently being prepared.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
