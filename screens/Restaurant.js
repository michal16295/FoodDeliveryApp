import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView, Animated} from 'react-native';
import {icons, COLORS} from '../constants';
import Header from '../components/Home/Header';
import FoodInfo from '../components/Restaurant/FoodInfo';
import Dots from '../components/Restaurant/Dots';
import Order from '../components/Restaurant/Order';

const Restaurant = ({route, navigation}) => {
  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const scrollX = new Animated.Value(0);
  useEffect(() => {
    let {item, currentLocation} = route.params;
    setOrderItems(
      item.menu.map((i) => ({name: i.name, amount: 0, price: i.price})),
    );
    setRestaurant(item);
    setCurrentLocation(currentLocation);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        rightIcon={icons.back}
        leftIcon={icons.list}
        name={restaurant?.name}
        onPressRight={() => navigation.goBack()}
      />
      <FoodInfo
        restaurant={restaurant}
        scrollX={scrollX}
        setOrderItems={setOrderItems}
        orderItems={orderItems}
        setTotalItems={setTotalItems}
        setTotalPrice={setTotalPrice}
      />
      <View>
        <Dots scrollX={scrollX} restaurant={restaurant} />
        <Order
          totalPrice={totalPrice}
          totalItems={totalItems}
          restaurant={restaurant}
          currentLocation={currentLocation}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});
export default Restaurant;
