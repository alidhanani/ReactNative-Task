import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { stylesDetail } from './Detail.style';

const Detail = () => {
  return (
    <View style={stylesDetail.container}>
      <Text>Open up App.js to stado!</Text>
      <StatusBar style='auto' />
    </View>
  );
};

export default Detail;
