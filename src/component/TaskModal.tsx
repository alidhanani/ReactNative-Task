import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';

interface TaskProps {
  alertVisible: boolean;
  // eslint-disable-next-line no-unused-vars
  alertButton: (text: string) => void;
}

const TaskModal = (props: TaskProps) => {
  const [value, onChangeText] = React.useState('');
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.alertVisible}
      onRequestClose={() => props.alertButton(value)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.titleText}>New Task</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => props.alertButton(value)}
          >
            <Text style={styles.textStyle}>Add Task</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
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
    height: '20%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    alignItems: 'center',
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

export default TaskModal;
