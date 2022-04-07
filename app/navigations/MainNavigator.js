/* eslint-disable */
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Main from '../screens/main/main';
import Map from '../screens/main/map';

export default function MainNavigator() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Main',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          title: 'Map',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
