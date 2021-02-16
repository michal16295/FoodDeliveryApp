import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants';

const MapButtons = ({zoomIn, zoomOut}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={zoomIn}>
        <Text style={{...FONTS.body1}}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={zoomOut}>
        <Text style={{...FONTS.body1}}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: SIZES.height * 0.35,
    right: SIZES.padding * 2,
    width: 60,
    height: 130,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MapButtons;
