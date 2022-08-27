import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import fetchBooks from '../store/fetchBooks';

const AuthorTile = ({data: author, navigation}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchBooks(author.key));
    navigation.navigate('Books', {
      data: author,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Text style={styles.name}>{author.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    paddingHorizontal: wp(3),
    paddingVertical: hp(3),
    marginHorizontal: wp(2),
    borderRadius: hp(1),
    // marginTop:hp(1)
  },
  name: {
    fontSize: hp(2),
    fontWeight: 'bold',
  },
});

export default AuthorTile;
