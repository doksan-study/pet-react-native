/* eslint-disable */
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.center}>
      <Text>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default About