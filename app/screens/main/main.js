/* eslint-disable */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main</Text>
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
  title: {
    fontSize: 24,
  },
});
