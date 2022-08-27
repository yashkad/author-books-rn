import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import fetchAuthors from '../store/fetchAuthors';

let firstRender = true;
const Search = ({style, search1 = '', setSearch1 = () => {}}) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const authorData = useSelector(state => state.authorSlice.data);

  const onSearch = () => {
    Keyboard.dismiss();
    dispatch(fetchAuthors(search));
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    if (search.length > 3) dispatch(fetchAuthors(search));
  }, [search]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inp}
        placeholder="search"
        value={search}
        placeholderTextColor={'gray'}
        onChangeText={text => setSearch(text)}></TextInput>

      <TouchableOpacity onPress={onSearch} style={styles.btn}>
        <Text style={styles.btnText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: hp(1),
    borderWidth: 1,
    borderRadius: wp(3),
    // backgroundColor:"mediumvioletred",
  },
  inp: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: wp(3),
    color: 'black',
    fontSize: hp('2.5'),
    paddingHorizontal: wp(3),
  },
  btn: {
    // flex:0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(3),
    // backgroundColor:"gray"
  },
  btnText: {
    fontWeight: 'bold',
  },
});

export default Search;
