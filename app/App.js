/* eslint-disable */
import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthNavigator from './navigations/AuthNavigator';
import MainNavigator from './navigations/MainNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [state, setState] = useState();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AuthNavigator"
            component={AuthNavigator}
            options={{
              title: 'Auth',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MainNavigator"
            component={MainNavigator}
            options={{
              title: 'Auth',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <AuthNavigator /> */}
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
