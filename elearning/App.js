/**
 * Meal App 
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import MainNavigator from './navigation/MainNavigator';

enableScreens();

const App: () => React$Node = () => {
  return (
    <NavigationContainer><MainNavigator/></NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
