import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthorList from '../component/AuthorList';
import Search from '../component/Search';

function Home({}) {
  return (
    <View style={styles.container}>
      <Search />
      <AuthorList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 22,
  },
});

export default Home;
