import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import Loading from '../component/Loading';

const Books = ({route}) => {
  const booksData = useSelector(state => state.authorSlice.bookData);
  const loading = useSelector(state => state.authorSlice.booksLoading);
  return (
    <View>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={booksData}
          renderItem={({item}) => {
            return <Item data={item} />;
          }}
          keyExtractor={item => item.key}
          ListHeaderComponent={<Header item={route.params?.data} />}
          ListFooterComponent={<Footer item={route.params?.data} />}
        />
      )}
    </View>
  );
};

const Item = ({data}) => {
  return (
    <TouchableOpacity style={styles.bookView}>
      <Text style={styles.bookTitle}>{data.title}</Text>
    </TouchableOpacity>
  );
};

const Header = ({item}) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerTitle}>{item.name}</Text>
    </View>
  );
};
const Footer = ({item}) => {
  return <View style={styles.Footer}></View>;
};

const styles = StyleSheet.create({
  bookView: {
    padding: hp(2),
    backgroundColor: 'skyblue',
    borderRadius: wp(1),
    marginTop: hp(0.5),
    marginHorizontal: wp(1),
    borderWidth:1
  },
  bookTitle: {
    fontSize: hp(2.5),
    fontWeight: '500',
  },
  headerView: {
    backgroundColor: 'lightgreen',
    height: hp(10),
    justifyContent: 'flex-end',
  },
  headerTitle: {
    fontSize: hp(5),
    marginHorizontal: wp(2),
  },
  Footer: {
    height: hp(10),
  },

});

export default Books;
