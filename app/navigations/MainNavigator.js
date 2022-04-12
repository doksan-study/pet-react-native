/* eslint-disable */
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/main/Home';
import Map from '../screens/main/map';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Map" component={Map}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainNavigator;
