import { TouchableOpacity, View, Text } from 'react-native';
import CheckBox from './Checkbox';
import React from 'react';
import { stylesCell } from './Cell.style';

type ItemProps = {
  title: string;
  description: string;
  checked: boolean;
  onClick: () => void;
};

export const Cell = ({ title, description, checked, onClick }: ItemProps) => (
  <TouchableOpacity onPress={onClick}>
    <View style={stylesCell.item}>
      <CheckBox isChecked={checked} onPress={() => null} />
      <View style={stylesCell.subitem}>
        <Text style={stylesCell.title}>{title}</Text>
        <Text style={stylesCell.subtitle}>{description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
