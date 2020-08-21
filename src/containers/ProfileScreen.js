import React from 'react';

import {View, Text} from 'react-native';

import HeaderContainer from './Header';

export default function Profile() {
  return (
    <>
      <HeaderContainer />
      <View style={{marginTop: 50}}>
        <Text style={{textAlign: 'center'}}>Profile Page</Text>
      </View>
    </>
  );
}
