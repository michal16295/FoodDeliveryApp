import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {icons, SIZES, COLORS, FONTS} from '../../constants';

const Order = ({
  restaurant,
  currentLocation,
  navigation,
  totalItems,
  totalPrice,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Text style={{...FONTS.h3}}>{totalItems} items in cart</Text>
        <Text style={{...FONTS.h3}}>${totalPrice}</Text>
      </View>
      <View style={styles.location}>
        <View style={{flexDirection: 'row'}}>
          <Image resizeMode="contain" style={styles.icon} source={icons.pin} />
          <Text style={{...FONTS.h4, marginLeft: SIZES.padding}}>Location</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.icon} source={icons.master_card} />
          <Text style={{...FONTS.h4, marginLeft: SIZES.padding}}>8888</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.btnInner}
          onPress={() =>
            navigation.navigate('OrderDelivery', {
              restaurant: restaurant,
              currentLocation: currentLocation,
            })
          }>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
    borderBottomColor: COLORS.lightGray2,
    borderBottomWidth: 1,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkgray,
  },
  buttonContainer: {
    padding: SIZES.padding * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnInner: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    width: SIZES.width * 0.9,
  },
});

export default Order;
