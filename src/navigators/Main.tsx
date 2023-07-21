import React from 'react';
import { Example, Home } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Quote" component={Home} />
      <Tab.Screen name="Example" component={Example} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
