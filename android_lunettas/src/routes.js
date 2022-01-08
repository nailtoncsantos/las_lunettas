import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

import ModelsFeed from './screens/ModelsFeed';
import ModelVisualization from './screens/ModelVisualization';
import ModelAvaliations from './screens/ModelAvaliations';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',

          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: '#4169e1',
          },
        }}>
        <AppStack.Screen
          options={{title: 'Modelo de Óculos'}}
          name="ModelsFeed"
          component={ModelsFeed}
        />
        <AppStack.Screen
          options={{title: 'Modelo'}}
          name="ModelVisualization"
          component={ModelVisualization}
        />
        <AppStack.Screen
          options={{title: 'Avaliações'}}
          name="ModelAvaliations"
          component={ModelAvaliations}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
