import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BrowseHome from '../screens/browse/home';

const Stack = createStackNavigator();

export default function BrowseNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="BrowseHome"
    >
      <Stack.Screen name="BrowseHome" component={BrowseHome} />
    </Stack.Navigator>
  );
}
