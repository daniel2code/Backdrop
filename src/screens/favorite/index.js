import React, {useEffect, useState} from 'react';

import {
  View,
  ScrollView,
  RefreshControl,
  Text,
  FlatList,
  Image,
} from 'react-native';
import Wrapper from '../../components/wrapper/index';
import LikedCats from '../../components/LikedCard/index';
import {retrieveData} from '../../database/schema';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Index = () => {
  const [savedCats, setSavedCats] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    // Fetch saved cats
    retrieveData(setSavedCats);
    onRefresh();
  }, []);

  console.log(savedCats);

  return (
    <Wrapper title="Cats I Liked">
      <View style={{marginTop: 5, paddingBottom: 15}}>
        {!savedCats ? (
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 100, width: 100}}
              source={require('../../assets/empty.png')}
            />
            <Text style={{color: 'black'}}>
              You don't have any favorite cat yet.
            </Text>
          </View>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
            }
            columnWrapperStyle={{justifyContent: 'space-between'}}
            key={item => item.id}
            numColumns={2}
            data={savedCats && savedCats}
            renderItem={LikedCats}
            // keyExtractor={item => item.id}
          />
        )}
      </View>
    </Wrapper>
  );
};

export default Index;
