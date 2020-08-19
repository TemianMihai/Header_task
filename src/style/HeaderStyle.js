import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerTextBox: {
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconMargins: {
    marginRight: 5,
  },
});
