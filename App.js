import React from 'react';
import Navigations from './src/navigation/navigations';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
  );
};

export default App;
