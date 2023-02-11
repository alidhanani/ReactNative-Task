import React, { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MockData } from '../model';
import TaskModal from '../component/TaskModal';
import CheckBox from '../component/Checkbox';

type ItemProps = {
  title: string;
  description: string;
  checked: boolean;
  onClick: () => void;
};

const Item = ({ title, description, checked, onClick }: ItemProps) => (
  <TouchableOpacity onPress={onClick}>
    <View style={styles.item}>
      <CheckBox isChecked={checked} onPress={() => null} />
      <View style={styles.subitem}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

interface HomeScreenProps {
  navigation: any;
}

const Home = ({ navigation }: HomeScreenProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TaskModal
        alertVisible={visible}
        alertButton={(value) => {
          if (!MockData.getInstance().titleExists(value)) {
            MockData.getInstance().setTasks({
              ID: MockData.getInstance().getTasks().length,
              Title: value,
              Description: '',
              Checked: false,
              Time: new Date().toDateString(),
            });
          }
          setVisible(false);
        }}
      />
      <FlatList
        data={MockData.getInstance().getTasks()}
        renderItem={({ item }) => (
          <Item
            title={item.Title}
            description={item.Time}
            checked={item.Checked}
            onClick={() => navigation.navigate('Detail')}
          />
        )}
        keyExtractor={(item) => item.Title}
      />
      <Button title='Add Tasks' onPress={() => setVisible(true)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default Home;
