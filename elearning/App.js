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
import MealsFavTabNavigator from './navigation/MealsFavTabNavigator';

enableScreens();

const App: () => React$Node = () => {
  return (
    <NavigationContainer><MealsFavTabNavigator/></NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
