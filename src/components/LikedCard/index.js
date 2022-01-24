import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {fontSizes, pallete} from '../../themes/themes';

const {primaryColor} = pallete;
const {smallText} = fontSizes;

const Index = ({ item }) => {
  return (
    <View style={styles.cardBox}>
      <Image
        resizeMode="cover"
        style={styles.cardImage}
        source={{uri: item.uri}}
      />

      <View style={styles.cardBody}>
        <Text style={styles.cardText}>{item.name}</Text>
        <Image
          resizeMode="cover"
          source={require('../../assets/redHeart.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  cardBox: {
    flexDirection: 'column',
    width: "46%",
    marginTop: 25,
  },

  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  cardImage: {
    height: 180,
    width: "100%",
    borderRadius: 10,
  },

  cardText: {
    color: primaryColor,
    fontSize: smallText,
  },

  likeIcon: {
    marginTop: 1,
  },
});

export default Index;
