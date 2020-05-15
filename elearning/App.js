/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';


const App: () => Reacft$Node = () => {
  return (
    <View style = {styles.screen}>
      <View style = {styles.addGoalContainer}>
        <TextInput placeholder="Write your goal here" style = {styles.input}/>
        <Button title = "ADD" />
      </View>
      <View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    padding:10,
    justifyContent: 'center',
    alignContent:'center'
  },
  addGoalContainer:{
    flexDirection:'row',
    width:"80%",
    justifyContent:'space-between',
  },
  input:{
    marginBottom:5,
    borderBottomColor: 'black',
    borderColor:'white',
    borderWidth:1,
    width: '80%'
  },
  inputAddButton:{
    textAlignVertical:'center',
    textAlign:'center'
  }
});

export default App;
