import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../constants';
import {
  restaurantData,
  categoryData,
  initialCurrentLocation,
} from '../data';
import Header from '../components/Home/Header';
import Categories from '../components/Home/Categories';
import RestaurantList from '../components/Home/RestaurantList';


const Home = ({navigation}) => {
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation,
  );
  const onSelectCategory = (category) => {
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id),
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  };
  const getCategoryNameById = (id) => {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return '';
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        rightIcon={icons.nearby}
        leftIcon={icons.basket}
        name={currentLocation.streetName}
      />
      <Categories
        categories={categories}
        onSelectCategory={onSelectCategory}
        selectedCategory={selectedCategory}
      />
      <RestaurantList
        restaurants={restaurants}
        getCategoryNameById={getCategoryNameById}
        navigation={navigation}
        currentLocation={currentLocation}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
export default Home;
