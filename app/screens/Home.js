/* eslint-disable */
import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Home</Text>
      <Button 
        title='Go to About Screen'
        // TODO: About screen으로 이동
        onPress={() => navigation.navigate('About')}
      />
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

export default Home