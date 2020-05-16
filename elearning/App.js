/**
 * A simple todo app based on 
 * https://www.udemy.com/course/react-native-the-practical-guide/
 * by Maximilian Schwarzmüller
 * https://academind.com/ 
 * 
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import GoalInput from './components/GoalInput';


const App: () => Reacft$Node = () => {
  return (
    <View style = {styles.screen}>
    <GoalInput/>
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
});

export default App;
