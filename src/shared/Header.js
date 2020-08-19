import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../style/HeaderStyle';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerTextBox}>
        <Text style={styles.headerText}>Marcas</Text>
      </View>
      <View style={styles.icons}>
        <Icon
          name="bars"
          size={20}
          color="#fcba03"
          style={styles.iconMargins}
        />
        <Icon name="search" size={20} color="#fcba03" />
      </View>
    </View>
  );
}
