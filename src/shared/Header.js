import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
  return (
    <View style={styles.header}>
      <Icon
        name="arrow-left"
        size={20}
        color="#4d4a43"
        style={styles.backIcon}
      />
      <View>
        <Text style={styles.headerText}>Marcas</Text>
      </View>
      <Icon name="bars" size={20} color="#fcba03" style={styles.searchIcon} />
      <Icon name="search" size={20} color="#fcba03" style={styles.menuIcon} />
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
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
  },
  searchIcon: {
    position: 'absolute',
    right: 0,
  },
  menuIcon: {
    position: 'absolute',
    right: 35,
  },
});
