import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import stylesDetail from './Detail.style';
import { MockData } from '../../model';
import CheckBox from '../../component/Checkbox';

interface DetailScreenProps {
  route: any;
  navigation: any;
}

const Detail = ({ route, navigation }: DetailScreenProps) => {
  const { ID } = route.params;
  const [check, setCheck] = useState<boolean>(false);

  const onDelete = () => {
    MockData.getInstance().deleteTask(ID);
    navigation.goBack();
  };

  const value = useMemo(() => {
    let data = MockData.getInstance().getTask(ID);
    setCheck(data ? data.Checked : false);
    return data;
  }, [check]);

  return (
    <View style={stylesDetail.item}>
      <View style={stylesDetail.leftItem}>
        <CheckBox
          isChecked={check}
          onPress={() => {
            MockData.getInstance().updateTaskCheck(ID, !value?.Checked);
            setCheck(!check);
          }}
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
        <TextInput
          style={stylesDetail.title}
          defaultValue={value?.Title}
          onChangeText={(valueText) =>
            MockData.getInstance().updateTaskTitle(ID, valueText)
          }
        />
        <Text style={stylesDetail.subtitle}>{value?.Time}</Text>
        <TextInput
          style={stylesDetail.textDescription}
          defaultValue={value?.Description}
          multiline
          onChangeText={(valueText) => {
            MockData.getInstance().updateTaskDescription(ID, valueText);
            MockData.getInstance().updateTaskDate(
              ID,
              new Date().toDateString()
            );
          }}
        />
      </View>
    </View>
  );
};

export default Detail;
