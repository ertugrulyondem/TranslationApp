/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard}
from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [inputText, setText] = useState('');
  const [responseText, setResponse] = useState('');

  function postTranslationApp(text) {
    fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200420T131946Z.5db1a66c6b35ba2c.890156e28f69bf7314b3d824b76054579360c154&lang=en-tr&text=' + text)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.text)
        setResponse(res.text)
      })
      .catch((error) => {
        console.log(error)
      });
  };


  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#171b21"/>
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
        }}>
          <SafeAreaView style={styles.container}>
              <View>
                <Header title=""/>
        
                <Text style={styles.languages}> Türkçe > İngilizce</Text>

                <TextInput
                  placeholder='Metin girin'
                  placeholderTextColor="#BDBDBD"
                  numberOfLines={10}
                  multiline={true}
                  style={styles.inputTranslate}
                  onChangeText={text => setText(text)}
                />

                <TouchableOpacity style={styles.translateBtn} onPress={() => postTranslationApp(inputText)}>
                  <Text style={styles.buttonText}>ÇEVİR</Text>
                </TouchableOpacity>

                <ScrollView contentInsetAdjustmentBehavior="automatic">
                  <Text style={styles.translateResult} onChangeText={text => setText(text)}>
                    {responseText}
                  </Text>
                </ScrollView>
              </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
    </Fragment>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#171b21',
  },
  languages:{
    fontSize: 16,
    color:'white',
    textAlign: 'center',
    padding: 10
  },
  inputTranslate:{
    width:"95%",
    backgroundColor:"#455A64",
    borderRadius:25,
    marginBottom:20,
    marginLeft:10,
    padding:10,
    fontSize: 15,
    color:'white',
    height: 120,
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
  },
  translateResult:{
    fontSize: 15,
    padding: 25,
    marginTop: 5,
    color:'white'
  }
});