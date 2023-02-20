import { StyleSheet } from 'react-native';

const stylesDetail = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 5,
    marginVertical: 1,
  },
  leftItem: {
    flexDirection: 'column',
    paddingTop: 10,
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
  textDescription: {
    paddingTop: 20,
    width: '100%',
    fontSize: 14,
  },
});

export default stylesDetail;
