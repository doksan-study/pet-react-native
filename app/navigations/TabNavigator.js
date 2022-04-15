/* eslint-disable */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainStackNavigator, ContactStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        // options={{
        //   tabBarIcon: () => <FontAwesome5 name={'home'} />,
        // }}
      />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
