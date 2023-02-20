import { StyleSheet } from 'react-native';

const modalStyle = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonGroup: {},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '70%',
    height: 200,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    position: 'absolute',
    bottom: 10,
    width: '50%',
    right: 10,
    alignItems: 'center',
  },
  buttonCancel: {
    borderRadius: 20,
    padding: 10,
    position: 'absolute',
    bottom: 10,
    width: '50%',
    left: 10,
    alignItems: 'center',
    backgroundColor: '#c91029',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default modalStyle;
