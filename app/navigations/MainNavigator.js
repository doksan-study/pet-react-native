/* eslint-disable */
import React from 'react';
import {View, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/main/Home';
import Map from '../screens/main/map';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //   title: 'Main',
        //   headerShown: false,
        // }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        // options={{
        //   title: 'Map',
        //   headerShown: false,
        // }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
