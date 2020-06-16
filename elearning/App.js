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
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';
enableScreens();

const App: () => React$Node = () => {
  return (
    <NavigationContainer><MealsNavigator/></NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
