import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Detail =() => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to stado!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
