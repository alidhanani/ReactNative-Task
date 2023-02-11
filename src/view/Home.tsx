import React from 'react';
import { Alert, Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MockData } from '../model';

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MockData.getInstance().getTasks()}
        renderItem={({item}) => <Item title={item.Title} />}
        keyExtractor={item => item.Title}
      />
      <Button
        title="Add Tasks"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home