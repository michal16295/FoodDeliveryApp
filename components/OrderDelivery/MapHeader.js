import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {icons, SIZES, COLORS, FONTS} from '../../constants';

const MapHeader = ({streetName, duration}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image
          style={{width: 30, height: 30, marginRight: SIZES.padding}}
          source={icons.red_pin}
        />
        <View style={{flex: 1}}>
          <Text style={{...FONTS.body3}}>{streetName}</Text>
        </View>
        <Text style={{...FONTS.body3}}>{Math.ceil(duration)} mins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    top: 50,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inner: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    width: SIZES.width * 0.9,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding * 2,
  },
});

export default MapHeader;
