import React from 'react';
import { Modal, Text, Pressable, View, TextInput } from 'react-native';
import { Locale } from '../locale';
import modalStyle from './TaskModal.style';

interface TaskProps {
  alertVisible: boolean;
  // eslint-disable-next-line no-unused-vars
  alertButton: (text: string) => void;
  alertCancel: () => void;
}

const TaskModal = (props: TaskProps) => {
  const [value, onChangeText] = React.useState('');
  const { t } = Locale();
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.alertVisible}
      onRequestClose={() => props.alertButton(value)}
    >
      <View style={modalStyle.centeredView}>
        <View style={modalStyle.modalView}>
          <Text style={modalStyle.titleText}>{t('home.modal.title')}</Text>
          <TextInput
            style={modalStyle.input}
            onChangeText={onChangeText}
            value={value}
          />
          <Pressable
            style={[modalStyle.buttonCancel]}
            onPress={() => {
              props.alertCancel();
              onChangeText('');
            }}
          >
            <Text style={modalStyle.textStyle}>
              {t('home.modal.button.cancel')}
            </Text>
          </Pressable>
          <Pressable
            style={[modalStyle.button, modalStyle.buttonClose]}
            onPress={() => {
              props.alertButton(value);
              onChangeText('');
            }}
          >
            <Text style={modalStyle.textStyle}>
              {t('home.modal.button.add')}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;
