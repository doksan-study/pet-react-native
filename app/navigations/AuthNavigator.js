/* eslint-disable */
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Onboarding from '../screens/onboarding/onboarding';
import Login from '../screens/login';
import Register from '../screens/register';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AuthNavigator;
