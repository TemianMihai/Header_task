/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import 'react-native-gesture-handler';

import Header from './src/shared/Header';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/components/HomeScreen';
import HomeScreen2 from './src/components/HomeScreen2';
import CustomHeaderBackImage from './src/shared/CustomBackButton';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home2"
          component={HomeScreen2}
          options={{
            headerTitleAlign: 'left',
            headerTitle: () => <Header />,
            headerBackTitleVisible: false,
            headerBackImage: () => <CustomHeaderBackImage />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
