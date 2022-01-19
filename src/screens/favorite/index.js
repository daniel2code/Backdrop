import React, {useEffect, useState} from 'react';

import {View, ScrollView, RefreshControl, Text} from 'react-native';
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
  }, []);

  console.log(savedCats);

  return (
    <Wrapper title="Cats I Liked">
      <View style={{marginTop: 5, paddingBottom: 15}}>
        <ScrollView
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
          }>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              width: '100%',
            }}>
            {savedCats === "" ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'red'}}>
                  You don't have any favorite cat yet.
                </Text>
              </View>
            ) : (
              savedCats &&
              savedCats.map(item => {
                console.log(item);
                return <LikedCats key={Math.random()} values={item} />;
              })
            )}
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Index;
