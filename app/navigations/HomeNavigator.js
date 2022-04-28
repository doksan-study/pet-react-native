/* eslint-disable */
import React from 'react';
import {View, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/main/Home';
import Map from '../screens/main/Map';
import Call from '../screens/main/Call';

// TODO: Icon
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="Call"
        component={Call}
        options={{
          tabBarIcon: () => <Icon name="phone" size={24} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: () => <Icon name="map" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
