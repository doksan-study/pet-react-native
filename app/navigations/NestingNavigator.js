/* eslint-disable */

import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Onboarding from '../screens/onboarding/onboarding';
import Login from '../screens/login';
import Register from '../screens/register';
import MainNavigator from './MainNavigator';

const NestingNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NestingNavigator;
