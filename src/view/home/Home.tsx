import React, { useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView } from 'react-native';
import { MockData } from '../../model';
import TaskModal from '../../component/TaskModal';
import { stylesHome } from './Home.style';
import { Cell } from '../../component/Cell';

interface HomeScreenProps {
  navigation: any;
}

const Home = ({ navigation }: HomeScreenProps) => {
  const [visible, setVisible] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setReload(true);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (reload) {
      setReload(false);
    }
  }, [reload]);
  return (
    <SafeAreaView style={stylesHome.container}>
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
          <Cell
            title={item.Title}
            description={item.Time}
            checked={item.Checked}
            onClick={() => navigation.navigate('Detail', { ID: item.ID })}
          />
        )}
        keyExtractor={(item) => item.Title}
      />
      <Button title='Add Tasks' onPress={() => setVisible(true)} />
    </SafeAreaView>
  );
};

export default Home;
