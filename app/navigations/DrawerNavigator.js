/* eslint-disable  */
import {View, Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Auth" component={AuthNavigator} />
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
