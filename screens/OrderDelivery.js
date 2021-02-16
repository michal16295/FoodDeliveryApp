import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Map from '../components/OrderDelivery/Map';
import MapHeader from '../components/OrderDelivery/MapHeader';
import MapDetails from '../components/OrderDelivery/MapDetails';
import MapButtons from '../components/OrderDelivery/MapButtons';

const OrderDelivery = ({route, navigation}) => {
  const mapView = useRef();

  const [restaurant, setRestaurant] = useState(null);
  const [streetName, setStreetName] = useState('');
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [region, setRegion] = useState(null);

  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let {restaurant, currentLocation} = route.params;

    let fromLoc = currentLocation.gps;
    let toLoc = restaurant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

    setRestaurant(restaurant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);

  const calculateAngle = (coordinates) => {
    let startLat = coordinates[0]['latitude'];
    let startLng = coordinates[0]['longitude'];
    let endLat = coordinates[1]['latitude'];
    let endLng = coordinates[1]['longitude'];
    let dx = endLat - startLat;
    let dy = endLng - startLng;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  };

  const zoomIn = () => {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  };

  const zoomOut = () => {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  };
  return (
    <View style={styles.container}>
      {toLocation && fromLocation && (
        <Map
          mapView={mapView}
          region={region}
          fromLocation={fromLocation}
          toLocation={toLocation}
          angle={angle}
          setDuration={setDuration}
          calculateAngle={calculateAngle}
          setAngle={setAngle}
          setIsReady={setIsReady}
          setFromLocation={setFromLocation}
          isReady={isReady}
        />
      )}
      <MapHeader streetName={streetName} duration={duration} />
      <MapButtons zoomIn={zoomIn} zoomOut={zoomOut} />
      <MapDetails restaurant={restaurant} navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default OrderDelivery;
