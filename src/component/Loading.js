import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function Loading() {
  return (
    <View style={styles.main}>
      <ActivityIndicator size={'large'} color={"red"}></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
    main :{
        position:"absolute",
        justifyContent:'center',
        alignItems:"center",
        width:widthPercentageToDP(100),
        height:heightPercentageToDP(100)
    }
})
