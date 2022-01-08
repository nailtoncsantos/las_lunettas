import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

import ModelsFeed from './screens/ModelsFeed';
import ModelVisualization from './screens/ModelVisualization';
import ModelAvaliations from './screens/ModelAvaliations';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="ModelsFeed" component={ModelsFeed} />
        <AppStack.Screen name="ModelVisualization" component={ModelVisualization} />
        <AppStack.Screen name="ModelAvaliations" component={ModelAvaliations} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}