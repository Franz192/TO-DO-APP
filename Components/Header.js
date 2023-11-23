import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = () => {
  return <Text style={styles.logoText}></Text>;
};

const styles = StyleSheet.create({
  logoText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Header;
