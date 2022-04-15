/* eslint-disable */

import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

// import {ContactStackNavigator} from './StackNavigator';
// import TabNavigator from './TabNavigator';

import Home from '../screens/Home';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
