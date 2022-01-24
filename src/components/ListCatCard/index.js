import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {nanoid} from 'nanoid/non-secure';
import {fontSizes, pallete} from '../../themes/themes';
import {addCatToDataBase} from '../../database/schema';

const {primaryColor} = pallete;
const {normal} = fontSizes;

const Index = ({values}) => {

  const ID = nanoid();
  const saveCatObj = {
    id: ID,
    name: values?.name || 'dummy',
    uri: values?.image?.url || 'test',
  };

  return (
    <TouchableOpacity
      // Save cats data when event is triggered
      onPress={() => addCatToDataBase(saveCatObj)}>
      <View style={styles.container}>
        <View style={styles.cardBox}>
          <View style={styles.cardBody}>
            <Image
              resizeMode="cover"
              source={{uri: values?.image?.url}}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>{values?.name}</Text>
          </View>

          <TouchableOpacity style={styles.likeIcon}>
            <Image source={require('../../assets/like.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },

  cardBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },

  cardText: {
    color: primaryColor,
    fontSize: normal,
    marginLeft: 15,
  },

  likeIcon: {
    marginTop: 1,
  },
});

export default Index;
