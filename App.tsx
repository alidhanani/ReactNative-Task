import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/view/Home';
import Detail from './src/view/Detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ title: 'Detail' }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;