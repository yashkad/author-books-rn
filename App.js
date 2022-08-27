import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Books from './src/screens/Books';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{statusBarColor: 'black'}}
          />

          <Stack.Screen
            name="Books"
            component={Books}
            options={{statusBarColor: 'black'}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
