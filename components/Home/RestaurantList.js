import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import {icons, SIZES, COLORS, FONTS} from '../../constants';

const RestaurantList = ({
  restaurants,
  getCategoryNameById,
  navigation,
  currentLocation,
}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{marginBottom: SIZES.padding * 2}}
        onPress={() =>
          navigation.navigate('Restaurant', {item, currentLocation})
        }>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <Image
            resizeMode="cover"
            style={{
              width: '100%',
              height: 200,
              borderRadius: SIZES.radius,
            }}
            source={item.photo}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 0,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              width: SIZES.width * 0.3,
              height: 50,
              ...styles.shadow,
            }}>
            <Text style={{...FONTS.h4}}>{item.duration}</Text>
          </View>
        </View>
        <Text style={{...FONTS.body2}}>{item.name}</Text>
        <View style={{marginTop: SIZES.padding, flexDirection: 'row'}}>
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              marginRight: 10,
              tintColor: COLORS.primary,
            }}
          />
          <Text style={{...FONTS.body3}}>{item.rating}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            {item.categories.map((id) => {
              return (
                <View style={{flexDirection: 'row'}} key={id}>
                  <Text style={{...FONTS.body3}}>
                    {getCategoryNameById(id)}
                  </Text>
                  <Text style={{...FONTS.h3, color: COLORS.darkgray}}> . </Text>
                </View>
              );
            })}
            {[1, 2, 3].map((rate) => (
              <Text
                key={rate}
                style={{
                  ...FONTS.body3,
                  color:
                    rate <= item.priceRating ? COLORS.black : COLORS.darkgray,
                }}>
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 30,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RestaurantList;
