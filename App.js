import React from 'react';
import Navigations from './src/navigation/navigations';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import GlobalStore from './src/store/globalStore/context';

const App = () => {
  return (
    <GlobalStore>
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </GlobalStore>
  );
};

export default App;
