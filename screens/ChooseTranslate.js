/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, useState} from 'react';
import {SafeAreaView, StyleSheet, View,StatusBar, TouchableOpacity}
from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#171b21"/>
       
          <SafeAreaView style={styles.container}>
              <View>
                <TouchableOpacity style={styles.translateBtn}>
                  <Text style={styles.buttonText}>Türkçe > İngilizce</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.translateBtn}>
                  <Text style={styles.buttonText}>İngilizce > Türkçe</Text>
                </TouchableOpacity>
              </View>
          </SafeAreaView>
    </Fragment>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#171b21',
  },
  translateBtn:{
    width:"95%",
    marginLeft:"2.5%",
    backgroundColor:"#2196F3",
    borderRadius:25,
    height:45,
    alignItems:"center",
    justifyContent:"center",
  },
  buttonText:{
    fontSize: 17,
    color:"white"
  }
});