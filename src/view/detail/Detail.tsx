import React from 'react';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { stylesDetail } from './Detail.style';
import { MockData } from '../../model';
import CheckBox from '../../component/Checkbox';

interface DetailScreenProps {
  route: any;
  navigation: any;
}

const Detail = ({ route, navigation }: DetailScreenProps) => {
  const { ID } = route.params;
  const value = MockData.getInstance().getTask(ID);

  const onDelete = () => {
    MockData.getInstance().deleteTask(ID);
    navigation.goBack();
  };

  return (
    <View style={stylesDetail.item}>
      <View style={stylesDetail.leftItem}>
        <CheckBox
          isChecked={value ? value.Checked : false}
          onPress={() => null}
        />
        <TouchableOpacity
          onPress={() => onDelete()}
          style={{ paddingLeft: 5, paddingTop: 30 }}
        >
          <Image
            source={require('../../../assets/trash.png')}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </View>

      <View style={stylesDetail.subitem}>
        <Text style={stylesDetail.title}>{value?.Title}</Text>
        <Text style={stylesDetail.subtitle}>{value?.Time}</Text>
        <TextInput
          style={stylesDetail.textDescription}
          defaultValue={value?.Description}
          onChangeText={(valueText) =>
            MockData.getInstance().updateTask(ID, {
              ID: ID,
              Title: value ? value.Title : '',
              Time: new Date().toDateString(),
              Description: valueText,
              Checked: false,
            })
          }
        />
      </View>
    </View>
  );
};

export default Detail;
