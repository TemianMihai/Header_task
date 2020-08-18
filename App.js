/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';


import 'react-native-gesture-handler';

import Header from './src/shared/Header';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen2() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>A FUNCTIONAT</Text>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home2')}
      />
    </View>
  );
}
const Stack = createStackNavigator();

class CustomHeaderBackImage extends React.Component<any, any> {
  render() {
    const source = require('./src/assets/back.png');
    return (
      <Image
        source={source}
        style={[styles.myCustomHeaderBackImage, this.props.style]}
      />
    );
  }
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'left',
            headerTitle: () => <Header />,
            headerBackTitleVisible: false,
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

const styles = StyleSheet.create({
  myCustomHeaderBackImage: {
    height: 20.5,
    width: 24,
    marginLeft: 12,
    marginVertical: 12,
    resizeMode: 'contain',
  },
  myCustomHeaderBackImageAlt: {
    tintColor: '#f00',
  },
});
export default App;
