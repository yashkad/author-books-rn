import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const EmptyComponent = () => {
  return (
    <View style={styles.main}>
      <Image source={require('../assets/search.png')} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: hp(80),
    justifyContent: 'center',
  },
  img: {
    width: wp(70),
    resizeMode: 'contain',
  },
});

export default EmptyComponent;
