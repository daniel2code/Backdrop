import React from 'react';

import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/index';
import FavoriteScreen from '../screens/favorite/index';
import {pallete} from '../themes/themes';

const Tab = createBottomTabNavigator();

const Navigations = () => {
  const {variantOne, secondaryColor, primaryColor} = pallete;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let routeName = route.name;

          if (routeName === 'Home') {
            return (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={
                    focused
                      ? require('../assets/cat.png')
                      : require('../assets/heart.png')
                  }
                />
                <Text style={{color: primaryColor, marginTop: 7}}>
                  All Cats
                </Text>
              </View>
            );
          } else if (routeName === 'Favorite') {
            return (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={
                    focused
                      ? require('../assets/cat.png')
                      : require('../assets/heart.png')
                  }
                />
                <Text style={{color: primaryColor, marginTop: 7}}>
                  Cats I Like
                </Text>
              </View>
            );
          }
        },

        tabBarLabel: '',

        tabBarStyle: {
          paddingTop: 15,
          paddingLeft: '3%',
          paddingRight: '3%',
          height: 93,
          borderTopColor: variantOne,
          backgroundColor: secondaryColor,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Navigations;
