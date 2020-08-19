import React from 'react';
import {Image} from 'react-native';

import {styles} from '../style/CustomBackButtonStyle';

class CustomHeaderBackImage extends React.Component<any, any> {
  render() {
    const source = require('../assets/back.png');
    return (
      <Image
        source={source}
        style={[styles.myCustomHeaderBackImage, this.props.style]}
      />
    );
  }
}

export default CustomHeaderBackImage;
