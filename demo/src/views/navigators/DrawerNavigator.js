import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home">
        {({props}) => <HomeScreen {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
