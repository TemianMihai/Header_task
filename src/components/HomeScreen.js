import React from 'react';
import {Button, Text, View} from "react-native";

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

export default HomeScreen;