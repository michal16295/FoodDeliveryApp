import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';

const MapDetails = ({restaurant, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={restaurant?.courier.avatar}
            style={{width: 50, height: 50, borderRadius: 25}}
          />
          <View style={{flex: 1, marginLeft: SIZES.padding}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{...FONTS.h4}}>{restaurant?.courier.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Image source={icons.star} style={styles.starIcon} />
                <Text style={{...FONTS.body3}}>{restaurant?.rating}</Text>
              </View>
            </View>
            <Text style={{color: COLORS.darkgray, ...FONTS.body4}}>
              {restaurant?.name}
            </Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.callButton}>
            <Text style={{...FONTS.h4, color: COLORS.white}}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{...FONTS.h4, color: COLORS.white}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
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
    width: SIZES.width * 0.9,
    paddingVertical: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.padding * 2,
  },
  callButton: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    alignItems: 'center',
    marginRight: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  cancelButton: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  starIcon: {
    width: 18,
    height: 18,
    tintColor: COLORS.primary,
    marginRight: SIZES.padding,
  },
});

export default MapDetails;
