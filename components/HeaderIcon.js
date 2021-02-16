import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SIZES} from '../constants';

function HeaderIcon({name, direction, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        direction === 'right' ? styles.right : styles.left,
      ]}>
      <Image source={name} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,

    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  right: {
    paddingLeft: SIZES.padding * 2,
  },
  left: {
    paddingRight: SIZES.padding * 2,
  },
});

export default HeaderIcon;
