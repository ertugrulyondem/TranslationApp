import React, { useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const Header = (props) => {
  
  return (
    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} style={styles.headerImage}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#171b21',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerImage: {
    width: 185,
    height: 35,
  }
});

export default Header;
