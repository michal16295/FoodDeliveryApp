import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {icons, SIZES, COLORS, FONTS} from '../../constants';

const FoodInfo = ({
  restaurant,
  scrollX,
  orderItems,
  setTotalItems,
  setTotalPrice,
}) => {
  const [amount, setAmount] = useState(0);

  const removeItem = (item) => {
    orderItems.forEach((i) => {
      if (i.name === item.name) {
        if (i.amount > 0) {
          i.amount--;
          setAmount(i.amount);
          setTotalItems((prev) => prev - 1);
          setTotalPrice((prev) => prev - i.price);
        }
      }
    });
  };
  const addItem = (item) => {
    orderItems.forEach((i) => {
      if (i.name === item.name) {
        i.amount++;
        setAmount(i.amount);
        setTotalItems((prev) => prev + 1);
        setTotalPrice((prev) => prev + i.price);
      }
    });
  };
  const getAmount = (item) => {
    for (let i = 0; i < orderItems.length; i++) {
      if (orderItems[i].name === item.name) return orderItems[i].amount;
    }
  };
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}>
      {restaurant?.menu.map((item, index) => (
        <View key={`menu-${index}`} style={{alignItems: 'center'}}>
          <View style={{height: SIZES.height * 0.35}}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{
                width: SIZES.width,
                height: '100%',
              }}
            />
            <View style={styles.inner}>
              <TouchableOpacity
                style={styles.minus}
                onPress={() => removeItem(item)}>
                <Text style={{...FONTS.body1}}>-</Text>
              </TouchableOpacity>
              <View style={styles.amount}>
                <Text style={{...FONTS.h1}}>{getAmount(item)}</Text>
              </View>
              <TouchableOpacity
                style={styles.plus}
                onPress={() => addItem(item)}>
                <Text style={{...FONTS.body1}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.details}>
            <Text
              style={{...FONTS.h2, textAlign: 'center', marginVertical: 10}}>
              {item.name} - ${item.price}
            </Text>
            <Text style={{...FONTS.body3}}>{item.description}</Text>
          </View>
          <View style={styles.calories}>
            <Image
              style={{width: 20, height: 20, marginRight: 10}}
              source={icons.fire}
            />
            <Text style={{...FONTS.body3, color: COLORS.darkgray}}>
              {item.calories} cal
            </Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  plus: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  minus: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  amount: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: -25,
    width: SIZES.width,
    height: 50,
  },
  details: {
    width: SIZES.width,
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: SIZES.padding * 2,
  },
  calories: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default FoodInfo;
