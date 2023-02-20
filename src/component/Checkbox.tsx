import { Pressable, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styleCheckbox from './Checkbox.style';

interface CheckboxProps {
  isChecked: boolean;
  onPress: () => void;
}

const CheckBox = (props: CheckboxProps) => {
  const iconName = props.isChecked
    ? 'checkbox-marked'
    : 'checkbox-blank-outline';

  return (
    <View style={styleCheckbox.container}>
      <Pressable onPress={props.onPress}>
        <MaterialCommunityIcons name={iconName} size={24} color='#000' />
      </Pressable>
    </View>
  );
};

export default CheckBox;
