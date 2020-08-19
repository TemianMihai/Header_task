import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerTextBox}>
        <Text style={styles.headerText}>Marcas</Text>
      </View>
      <View style={styles.icons}>
        <Icon name="bars" size={20} color="#fcba03" style={styles.iconMargins}/>
        <Icon name="search" size={20} color="#fcba03" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextBox: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    justifyContent: 'center',
    flex:5,
  },
  headerText: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    justifyContent: 'center',
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconMargins: {
    marginRight:5,
  },
});
