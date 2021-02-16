import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SIZES, COLORS, FONTS} from '../constants';

function HeaderName({name}) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={{...FONTS.h3}}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding * 3,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray3,
  },
});

export default HeaderName;
