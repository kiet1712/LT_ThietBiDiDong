import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './Screens/FirstScreen';
import Screen1a from './Screens/Screen1a';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1a">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Screen1a" component={Screen1a} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
