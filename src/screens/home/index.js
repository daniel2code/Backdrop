import React, {useEffect} from 'react';

import {View, ScrollView, ActivityIndicator} from 'react-native';
import {useGetRequest} from '../../api/requestsHandlers';
import Wrapper from '../../components/wrapper/index';
import ListCard from '../../components/ListCatCard/index';

const Index = () => {
  const {data, getRequest, loading} = useGetRequest();

  useEffect(() => {
    getRequest('breeds');
  }, []);

  return (
    <Wrapper title="All Cats">
      {loading === false || data === null ? (
        //   show loading modal if the data is not fetched yet
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <View style={{marginTop: 5, paddingBottom: 15}}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            {data.map((item, idx) => {
              return <ListCard key={idx} values={item} />;
            })}
          </ScrollView>
        </View>
      )}
    </Wrapper>
  );
};

export default Index;
