import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import {pallete, fontSizes} from '../../themes/themes';

const Index = ({children, title}) => {
  const {secondaryColor, primaryColor} = pallete;
  const {titles} = fontSizes;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: '6%',
        backgroundColor: secondaryColor,
        width: "100%",
      }}>
      <Text style={{color: primaryColor, fontSize: titles, fontWeight: '600'}}>
        {title}
      </Text>
      {children}
    </SafeAreaView>
  );
};

export default Index;
