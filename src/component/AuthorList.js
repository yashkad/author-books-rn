import React, {useState} from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import AuthorTile from './AuthorTile';
import {useNavigation} from '@react-navigation/native';
import Loading from './Loading';
import EmptyComponent from './EmptyComponent';

const AuthorList = () => {
  const data = useSelector(state => state.authorSlice.data);
  const loading = useSelector(state => state.authorSlice.loading);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const timeout = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const handleRefresh = () => {
    setRefreshing(true);
    timeout(1500).then(() => setRefreshing(false));
    // not added login yet
  };

  return (
    <View>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <AuthorTile data={item} navigation={navigation} />
          )}
          keyExtractor={item => item.key}
          ListFooterComponent={() => (
            <View style={{marginTop: hp('15%')}}></View>
          )}
          ItemSeparatorComponent={() => <Seperator gap={'0.5'} />}
          ListEmptyComponent={() => <EmptyComponent />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        />
      )}
    </View>
  );
};

const Seperator = ({gap}) => {
  return <View style={{marginTop: hp(gap)}}></View>;
};

export default AuthorList;
