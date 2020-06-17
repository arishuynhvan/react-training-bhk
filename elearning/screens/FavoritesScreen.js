import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1');
  return <MealList listData={favMeals} />;
};

export default FavoritesScreen;
