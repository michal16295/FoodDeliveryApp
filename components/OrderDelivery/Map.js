import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY, COLORS, icons, SIZES} from '../../constants';

const Map = ({
  mapView,
  region,
  fromLocation,
  toLocation,
  angle,
  setDuration,
  calculateAngle,
  setAngle,
  setIsReady,
  setFromLocation,
  isReady,
}) => {
  return (
    <View style={styles.container}>
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        style={{flex: 1}}>
        <MapViewDirections
          origin={fromLocation}
          destination={toLocation}
          apikey={GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          onReady={(result) => {
            setDuration(result.duration);

            if (!isReady) {
              // Fit route into maps
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: SIZES.width / 20,
                  bottom: SIZES.height / 4,
                  left: SIZES.width / 20,
                  top: SIZES.height / 8,
                },
              });

              // Reposition the car
              let nextLoc = {
                latitude: result.coordinates[0]['latitude'],
                longitude: result.coordinates[0]['longitude'],
              };

              if (result.coordinates.length >= 2) {
                let angle = calculateAngle(result.coordinates);
                setAngle(angle);
              }

              setFromLocation(nextLoc);
              setIsReady(true);
            }
          }}
        />
        <Marker coordinate={toLocation}>
          <View style={styles.markerWrapper}>
            <View style={styles.markerInner}>
              <Image
                style={{width: 25, height: 25, tintColor: COLORS.white}}
                source={icons.pin}
              />
            </View>
          </View>
        </Marker>
        <Marker
          coordinate={fromLocation}
          anchor={{x: 0.5, y: 0.5}}
          flat={true}
          rotation={angle}>
          <Image style={{width: 40, height: 40}} source={icons.car} />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerWrapper: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  markerInner: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});

export default Map;
