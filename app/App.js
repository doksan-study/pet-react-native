/* eslint-disable */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigator from './navigations/StackNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  )
}

export default App