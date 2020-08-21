import React from 'react';
import {StyledView} from '../style/HomeScreenStyle';
import {Text, Image} from 'react-native';

export function HomeScreenComponent() {
  const logosource = require('../assets/menu_icon.png');
  return (
    <StyledView>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 35,
          fontWeight: 'bold',
          color: '#303236',
        }}>
        BIENVENIDOS
      </Text>
      <Image source={logosource} style={{alignSelf: 'center', marginTop:40}} />
    </StyledView>
  );
}
