import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderIcon from '../HeaderIcon';
import HeaderName from '../HeaderName';

const Header = ({rightIcon, leftIcon, name, onPressRight, onPressLeft}) => {
  return (
    <View style={styles.container}>
      <HeaderIcon onPress={onPressRight} name={rightIcon} direction={'right'} />
      <HeaderName name={name} />
      <HeaderIcon onPress={onPressLeft} name={leftIcon} direction={'left'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', height: 50},
});

export default Header;
