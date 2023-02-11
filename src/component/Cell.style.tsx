import { StyleSheet } from 'react-native';

export const stylesCell = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#d9d9de',
    padding: 5,
    marginVertical: 1,
  },
  subitem: {
    flexDirection: 'column',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
  },
});
